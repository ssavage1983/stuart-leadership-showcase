# Archive Route Migration

## A. Short migration plan

1. Run the pre-flight checks and stop on an unexpected directory, non-Git workspace, dirty tree, unsupported router or missing design tokens.
2. Create `archive-link-fixes`, store timestamped backups, then install structured blog and case-study data.
3. Replace the two archive pages, add one TanStack dynamic route per content type and point the three homepage cards at their individual records.
4. Optionally add Vercel permanent redirects. The repository has no existing redirect file, so the workflow asks before creating one and will not overwrite an existing `vercel.json`.
5. Format only the touched files, lint and build, then ask separately before committing and pushing.

The templates preserve the existing archive positioning and use colours, typography, spacing and card treatments already present in the local source. No new image filenames are invented. Existing Wix image URLs already used by the Vercel site remain only on the three existing records; all migrated records show explicit placeholders.

Project destinations:

- Canonical public site: [www.moonlight-studio.uk](https://www.moonlight-studio.uk/)
- Connected [Lovable project](https://lovable.dev/projects/27357dd2-192d-4d02-9c65-fad465b5d504)
- [Lovable-hosted preview](https://stuart-leadership-showcase.lovable.app/)

The Lovable URLs are editor/preview references, not canonical SEO destinations.

## B. Proposed generated file structure

```text
src/
├── data/
│   ├── blogPosts.ts
│   └── caseStudies.ts
└── routes/
    ├── blog.tsx
    ├── blog.$slug.tsx
    ├── case-studies.tsx
    └── case-studies.$slug.tsx

vercel.json                         # optional; created only after confirmation
.archive-migration-backups/         # local, timestamped and Git-excluded
```

The existing `src/routes/blog.operational-excellence-in-rail.tsx` remains intact. TanStack's static route takes precedence over the new generic blog route.

## C. PowerShell workflow

The complete interactive workflow is [migrate-archive-routes.ps1](./migrate-archive-routes.ps1). It uses `Set-StrictMode -Version Latest`, stops on errors, detects the actual TanStack structure, creates backups before overwriting and asks separately before branch creation, file replacement, redirects, commit and push.

## D. React and TypeScript templates

The workflow installs these complete templates from [`archive-migration-templates`](./archive-migration-templates):

- `blogPosts.ts`: 20 Wix article records prepared for source migration.
- `caseStudies.ts`: 11 Wix project records plus the three existing Vercel archive records.
- `blog.tsx` and `case-studies.tsx`: responsive archive grids using the existing visual language.
- `blog.$slug.tsx` and `case-studies.$slug.tsx`: data-driven detail routes with archive notices, per-record SEO and explicit content/image placeholders.
- `vercel.json`: the 31 proposed old-to-new permanent redirects.

## E. Final run checklist

1. Open PowerShell.
2. Run:

   ```powershell
   cd C:\Users\moonl\stuart-leadership-showcase
   .\workflow\migrate-archive-routes.ps1
   ```

   Add `-IncludeRedirects` if you want the script to create `vercel.json`, and add `-Push` only when you want it to offer a GitHub push after a successful commit.

3. Start the local site:

   ```powershell
   npm run dev
   ```

4. Check `/`, `/blog`, at least two `/blog/[slug]` pages, `/case-studies` and at least two `/case-studies/[slug]` pages at the local URL shown by Vite.
5. Confirm keyboard focus, mobile layout, archive wording, source metadata and placeholder notices.
6. If you declined the script's commit prompt, review and commit the intended files manually.
7. Push `archive-link-fixes` and review the Vercel preview before merging.
8. Confirm the pushed branch syncs to the [connected Lovable project](https://lovable.dev/projects/27357dd2-192d-4d02-9c65-fad465b5d504) and inspect the [Lovable preview](https://stuart-leadership-showcase.lovable.app/), without treating it as the canonical domain.
9. After production deploys, test the corresponding URLs on [www.moonlight-studio.uk](https://www.moonlight-studio.uk/), including a sample old `/post/...` and `/projects/...` URL if redirects were enabled.

Do not use `-Force` merely for convenience. It is only for a deliberately reviewed dirty working tree.
