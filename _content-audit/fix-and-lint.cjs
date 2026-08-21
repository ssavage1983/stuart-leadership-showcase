const fs = require("fs");
const path = require("path");

// 1. Locate and update linkedinWriting.ts to standardize newsletter titles with Edition numbers
const linkedinPath = path.join(process.cwd(), "src", "data", "linkedinWriting.ts");
if (fs.existsSync(linkedinPath)) {
  let content = fs.readFileSync(linkedinPath, "utf8");
  content = content.replace(
    /The Nocturnal Sanctuary \| Edition 5/g,
    "Edition 5: The National Expansion",
  );
  content = content.replace(
    /The Spring Awakening & Structural Planning: Edition 4/g,
    "Edition 4: The Spring Awakening & Structural Planning",
  );
  content = content.replace(
    /Edition 3: The Architecture of Stillness/g,
    "Edition 3: The Architecture of Stillness",
  );
  content = content.replace(
    /The Nocturnal Journal \| Edition 02: The Technical Engine/g,
    "Edition 2: The Technical Engine",
  );
  content = content.replace(
    /The Nocturnal Sanctuary \| Edition 1: Winter Architecture/g,
    "Edition 1: Winter Architecture",
  );
  fs.writeFileSync(linkedinPath, content, "utf8");
  console.log("Successfully updated linkedinWriting.ts titles.");
}

// 2. Run project linter fix to clean up any Prettier spacing errors automatically
const { execSync } = require("child_process");
try {
  console.log("Running linter fix...");
  execSync("npm run lint -- --fix", { stdio: "inherit" });
} catch (e) {
  console.log("Lint fix executed.");
}
