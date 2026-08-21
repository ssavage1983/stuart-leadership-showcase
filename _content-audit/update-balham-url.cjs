const fs = require("fs");
const path = require("path");

// Search for files where the landing page or project cards are defined
const searchDirs = [
  path.join(process.cwd(), "src", "routes"),
  path.join(process.cwd(), "src", "pages"),
  path.join(process.cwd(), "src", "components"),
];

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".tsx") || fullPath.endsWith(".ts")) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (content.includes("/case-studies/balham-transformation")) {
        content = content.replace(
          /\/case-studies\/balham-transformation/g,
          "/case-studies/balham-cottage-courtyard-garden",
        );
        fs.writeFileSync(fullPath, content, "utf8");
        console.log(`Updated Balham URL in: ${fullPath}`);
      }
    }
  }
}

searchDirs.forEach((dir) => walkDir(dir));
