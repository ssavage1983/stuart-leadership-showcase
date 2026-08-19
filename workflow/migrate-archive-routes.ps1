[CmdletBinding()]
param(
    [switch]$Force,
    [switch]$Push,
    [switch]$IncludeRedirects,
    [string]$BranchName = "archive-link-fixes"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ExpectedRepo = "C:\Users\moonl\stuart-leadership-showcase"
$TemplateRoot = Join-Path $PSScriptRoot "archive-migration-templates"
$BackupName = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupRoot = Join-Path $ExpectedRepo ".archive-migration-backups\$BackupName"
$TouchedFiles = [System.Collections.Generic.List[string]]::new()
$WorkflowFiles = @(
    "workflow/ARCHIVE_MIGRATION.md",
    "workflow/migrate-archive-routes.ps1",
    "workflow/archive-migration-templates/blogPosts.ts",
    "workflow/archive-migration-templates/caseStudies.ts",
    "workflow/archive-migration-templates/blog.tsx",
    "workflow/archive-migration-templates/case-studies.tsx",
    'workflow/archive-migration-templates/blog.$slug.tsx',
    'workflow/archive-migration-templates/case-studies.$slug.tsx',
    "workflow/archive-migration-templates/vercel.json"
)
foreach ($workflowFile in $WorkflowFiles) {
    if (Test-Path -LiteralPath (Join-Path $ExpectedRepo $workflowFile) -PathType Leaf) {
        $TouchedFiles.Add($workflowFile)
    }
}

function Write-Step {
    param([string]$Message)
    Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Confirm-Action {
    param([string]$Prompt)
    $answer = Read-Host "$Prompt [y/N]"
    return $answer -match "^(?i:y|yes)$"
}

function Test-JsonProperty {
    param(
        [Parameter(Mandatory)][object]$Object,
        [Parameter(Mandatory)][string]$Name
    )
    return $null -ne $Object -and $Object.PSObject.Properties.Name -contains $Name
}

function Invoke-Native {
    param(
        [Parameter(Mandatory)][string]$Command,
        [Parameter(ValueFromRemainingArguments)][string[]]$Arguments
    )
    & $Command @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Command failed ($LASTEXITCODE): $Command $($Arguments -join ' ')"
    }
}

function Get-RelativeRepoPath {
    param([Parameter(Mandatory)][string]$Path)
    $repoUri = [Uri]((Resolve-Path -LiteralPath $ExpectedRepo).Path.TrimEnd('\') + '\')
    $pathUri = [Uri]([IO.Path]::GetFullPath($Path))
    return [Uri]::UnescapeDataString($repoUri.MakeRelativeUri($pathUri).ToString()).Replace('/', '\')
}

function Backup-File {
    param([Parameter(Mandatory)][string]$Path)
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) { return }
    $relative = Get-RelativeRepoPath -Path $Path
    $backupPath = Join-Path $BackupRoot $relative
    $backupDirectory = Split-Path -Parent $backupPath
    New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null
    Copy-Item -LiteralPath $Path -Destination $backupPath -Force
    Write-Host "Backed up: $relative"
}

function Install-Template {
    param(
        [Parameter(Mandatory)][string]$Template,
        [Parameter(Mandatory)][string]$Destination
    )
    if (-not (Test-Path -LiteralPath $Template -PathType Leaf)) {
        throw "Required template not found: $Template"
    }

    $relative = Get-RelativeRepoPath -Path $Destination
    if (Test-Path -LiteralPath $Destination -PathType Leaf) {
        if (-not (Confirm-Action "Overwrite ${relative}?")) {
            Write-Host "Skipped: $relative" -ForegroundColor Yellow
            return
        }
        Backup-File -Path $Destination
    }
    else {
        if (-not (Confirm-Action "Create ${relative}?")) {
            Write-Host "Skipped: $relative" -ForegroundColor Yellow
            return
        }
        New-Item -ItemType Directory -Path (Split-Path -Parent $Destination) -Force | Out-Null
    }

    Copy-Item -LiteralPath $Template -Destination $Destination -Force
    $TouchedFiles.Add($relative.Replace('\', '/'))
    Write-Host "Prepared: $relative" -ForegroundColor Green
}

function Replace-HomepageLink {
    param(
        [Parameter(Mandatory)][string]$Content,
        [Parameter(Mandatory)][string]$AltText,
        [Parameter(Mandatory)][string]$Destination
    )
    $escapedAlt = [Regex]::Escape($AltText)
    $pattern = '<Link to="/case-studies"(?=[\s\S]{0,700}?alt="' + $escapedAlt + '")'
    $matches = [Regex]::Matches($Content, $pattern)
    if ($matches.Count -ne 1) {
        throw "Expected one homepage card for '$AltText'; found $($matches.Count). No homepage changes were written."
    }
    return [Regex]::Replace($Content, $pattern, ('<Link to="' + $Destination + '"'), 1)
}

Write-Step "Pre-flight checks"
$currentPath = (Resolve-Path -LiteralPath (Get-Location).Path).Path.TrimEnd('\')
$expectedPath = (Resolve-Path -LiteralPath $ExpectedRepo).Path.TrimEnd('\')
if (-not $currentPath.Equals($expectedPath, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Run this script from $ExpectedRepo. Current directory: $currentPath"
}

Invoke-Native -Command "git" -Arguments @("rev-parse", "--is-inside-work-tree") | Out-Null
$currentBranch = (& git branch --show-current).Trim()
if ($LASTEXITCODE -ne 0) { throw "Could not determine the current Git branch." }
Write-Host "Current branch: $currentBranch"
Invoke-Native -Command "git" -Arguments @("status", "--short")

$dirty = @(& git status --porcelain)
if ($LASTEXITCODE -ne 0) { throw "Could not read Git status." }
if ($dirty.Count -gt 0 -and -not $Force) {
    throw "Uncommitted changes detected. Commit/stash them first, or rerun with -Force after reviewing them."
}
if ($dirty.Count -gt 0) {
    Write-Warning "Continuing with existing changes because -Force was supplied. They will not be staged automatically."
}

$dependenciesHealthy = Test-Path -LiteralPath "node_modules" -PathType Container
if ($dependenciesHealthy) {
    & npm ls --depth=0 *> $null
    $dependenciesHealthy = $LASTEXITCODE -eq 0
}
if (-not $dependenciesHealthy) {
    Write-Host "Dependencies are missing or do not match package.json; running npm install."
    Invoke-Native -Command "npm" -Arguments @("install")
    & npm ls --depth=0 *> $null
    if ($LASTEXITCODE -ne 0) { throw "Dependencies remain incomplete after npm install." }
    if (@(& git status --porcelain -- "package-lock.json").Count -gt 0) {
        $TouchedFiles.Add("package-lock.json")
    }
}
else {
    Write-Host "Node dependencies match package.json."
}

Write-Step "Inspect project structure and design system"
$package = Get-Content -LiteralPath "package.json" -Raw | ConvertFrom-Json
$routeFiles = @(Get-ChildItem -LiteralPath "src\routes" -Recurse -File -Filter "*.tsx")
$routeSource = ($routeFiles | ForEach-Object { Get-Content -LiteralPath $_.FullName -Raw }) -join "`n"

if ((Test-JsonProperty -Object $package.dependencies -Name "@tanstack/react-router") -and $routeSource -match "createFileRoute") {
    Write-Host "Routing detected: TanStack Start file-based routing (src/routes)."
}
elseif (Test-JsonProperty -Object $package.dependencies -Name "react-router-dom") {
    throw "React Router was detected, but these templates target the repository's expected TanStack structure. Review the project before continuing."
}
else {
    throw "No supported routing structure could be confirmed. Stopping before route changes."
}

$responsibleFiles = [ordered]@{
    Homepage = "src/routes/index.tsx"
    BlogArchive = "src/routes/blog.tsx"
    CaseStudiesArchive = "src/routes/case-studies.tsx"
    NavigationAndFooter = "src/routes/__root.tsx"
    SeoAndLayout = "src/routes/__root.tsx plus each route head()"
    SharedData = "src/lib/portfolio-data.ts"
    StylingAndTheme = "src/styles.css"
}
$responsibleFiles.GetEnumerator() | ForEach-Object { Write-Host ("{0}: {1}" -f $_.Key, $_.Value) }

$styles = Get-Content -LiteralPath "src\styles.css" -Raw
$requiredTokens = @("--porcelain", "--stone", "--navy", "--terracotta", "--gold", "--ink", "--font-display", "--font-sans")
$missingTokens = @($requiredTokens | Where-Object { $styles -notmatch [Regex]::Escape($_) })
if ($missingTokens.Count -gt 0) {
    throw "Exact design tokens could not be confirmed ($($missingTokens -join ', ')). Stopping before visual changes."
}
Write-Host "Confirmed existing palette and typography tokens: $($requiredTokens -join ', ')."
Write-Host "Static assets found: $(@(Get-ChildItem -LiteralPath public -Recurse -File).Count). Existing Wix image references will be preserved; no filenames will be fabricated."

Write-Step "Create or switch to the working branch"
if ($currentBranch -ne $BranchName) {
    & git show-ref --verify --quiet "refs/heads/$BranchName"
    if ($LASTEXITCODE -eq 0) {
        if (-not (Confirm-Action "Switch to existing branch '$BranchName'?")) { throw "Branch switch cancelled." }
        Invoke-Native -Command "git" -Arguments @("switch", $BranchName)
    }
    else {
        if (-not (Confirm-Action "Create and switch to branch '$BranchName'?")) { throw "Branch creation cancelled." }
        Invoke-Native -Command "git" -Arguments @("switch", "-c", $BranchName)
    }
}
else {
    Write-Host "Already on $BranchName."
}

New-Item -ItemType Directory -Path $BackupRoot -Force | Out-Null
$excludeFile = Join-Path $ExpectedRepo ".git\info\exclude"
$excludeEntry = ".archive-migration-backups/"
$excludeContent = if (Test-Path -LiteralPath $excludeFile) { Get-Content -LiteralPath $excludeFile -Raw } else { "" }
if ($excludeContent -notmatch "(?m)^\.archive-migration-backups/$") {
    Add-Content -LiteralPath $excludeFile -Value "`n$excludeEntry"
}
Write-Host "Backups will be stored in $BackupRoot"

Write-Step "Install structured data and route templates"
$templateMap = [ordered]@{
    "blogPosts.ts" = "src\data\blogPosts.ts"
    "caseStudies.ts" = "src\data\caseStudies.ts"
    "blog.tsx" = "src\routes\blog.tsx"
    "case-studies.tsx" = "src\routes\case-studies.tsx"
    'blog.$slug.tsx' = 'src\routes\blog.$slug.tsx'
    'case-studies.$slug.tsx' = 'src\routes\case-studies.$slug.tsx'
}
foreach ($entry in $templateMap.GetEnumerator()) {
    Install-Template -Template (Join-Path $TemplateRoot $entry.Key) -Destination (Join-Path $ExpectedRepo $entry.Value)
}

Write-Step "Update homepage archive-card links"
$homepagePath = Join-Path $ExpectedRepo "src\routes\index.tsx"
if (Confirm-Action "Update the three homepage cards to their individual archive routes?") {
    $homepage = Get-Content -LiteralPath $homepagePath -Raw
    $updatedHomepage = Replace-HomepageLink -Content $homepage -AltText "Balham Transformation" -Destination "/case-studies/balham-transformation"
    $updatedHomepage = Replace-HomepageLink -Content $updatedHomepage -AltText "Digital Twin Workflow" -Destination "/case-studies/digital-twin-workflow"
    $updatedHomepage = Replace-HomepageLink -Content $updatedHomepage -AltText "Supply Chain Control" -Destination "/case-studies/supply-chain-control"
    Backup-File -Path $homepagePath
    Set-Content -LiteralPath $homepagePath -Value $updatedHomepage -Encoding utf8
    $TouchedFiles.Add("src/routes/index.tsx")
    Write-Host "Homepage archive links updated." -ForegroundColor Green
}
else {
    Write-Host "Homepage link update skipped." -ForegroundColor Yellow
}

Write-Step "Optional Vercel redirects"
$vercelPath = Join-Path $ExpectedRepo "vercel.json"
$addRedirects = $IncludeRedirects
if (-not $IncludeRedirects) {
    if (Test-Path -LiteralPath $vercelPath) {
        Write-Warning "An existing vercel.json was found. This workflow will not merge it automatically. Review and merge workflow/archive-migration-templates/vercel.json manually."
    }
    else {
        $addRedirects = Confirm-Action "No redirect configuration exists. Create vercel.json with the supplied permanent redirects?"
    }
}
if ($addRedirects) {
    if (Test-Path -LiteralPath $vercelPath) {
        throw "Refusing to replace an existing vercel.json automatically. Merge the template manually."
    }
    Install-Template -Template (Join-Path $TemplateRoot "vercel.json") -Destination $vercelPath
}
elseif (-not (Test-Path -LiteralPath $vercelPath)) {
    Write-Host "Redirect creation skipped; route migration can still proceed." -ForegroundColor Yellow
}

if ($TouchedFiles.Count -eq 0) {
    Write-Host "No files were changed."
    exit 0
}

Write-Step "Format and validate"
$formatTargets = @($TouchedFiles | Where-Object { $_ -match "\.(ts|tsx|json)$" } | Select-Object -Unique)
if ((Test-JsonProperty -Object $package.scripts -Name "format") -and $formatTargets.Count -gt 0) {
    Write-Host "The repository format script targets the whole tree; running the same Prettier formatter only on touched files for safety."
    Invoke-Native -Command "npx" -Arguments (@("prettier", "--write") + $formatTargets)
}
else {
    Write-Host "No format command found; skipped."
}

if (Test-JsonProperty -Object $package.scripts -Name "lint") { Invoke-Native -Command "npm" -Arguments @("run", "lint") } else { Write-Host "No lint command found; skipped." }
if (Test-JsonProperty -Object $package.scripts -Name "typecheck") { Invoke-Native -Command "npm" -Arguments @("run", "typecheck") } else { Write-Host "No typecheck command found; skipped." }
if (Test-JsonProperty -Object $package.scripts -Name "build") { Invoke-Native -Command "npm" -Arguments @("run", "build") } else { Write-Host "No build command found; skipped." }

if (Test-Path -LiteralPath "src\routeTree.gen.ts") {
    $TouchedFiles.Add("src/routeTree.gen.ts")
}

Write-Step "Changed-file summary"
Invoke-Native -Command "git" -Arguments @("status", "--short")
Write-Host "Backup folder: $BackupRoot"

if (Confirm-Action "Stage the migration files and commit them?") {
    $stageFiles = @($TouchedFiles | Select-Object -Unique)
    Invoke-Native -Command "git" -Arguments (@("add", "--") + $stageFiles)
    Invoke-Native -Command "git" -Arguments @("commit", "-m", "feat(archive): add migrated archive routes")

    if ($Push -and (Confirm-Action "Push branch '$BranchName' to origin?")) {
        Invoke-Native -Command "git" -Arguments @("push", "-u", "origin", $BranchName)
    }
    elseif ($Push) {
        Write-Host "Push cancelled; the commit remains local." -ForegroundColor Yellow
    }
    else {
        Write-Host "Push not requested. Rerun with -Push or push manually after review."
    }
}
else {
    Write-Host "Commit skipped. Review the working tree and commit when ready." -ForegroundColor Yellow
}

Write-Step "Workflow complete"
Write-Host "Run npm run dev, inspect the archive pages and detail routes, then verify the Vercel and Lovable previews before merging. Keep https://www.moonlight-studio.uk as the canonical public domain."
