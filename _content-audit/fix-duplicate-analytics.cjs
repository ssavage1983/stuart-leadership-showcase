const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "../src/routes/__root.tsx");
if (fs.existsSync(rootPath)) {
  let content = fs.readFileSync(rootPath, "utf8");

  // Remove all existing Analytics imports
  content = content.replace(/import\s*\{\s*Analytics\s*\}\s*from\s*["'][^"']+["'];?\s*/g, "");

  // Add a single clean import at the very top
  content = `import { Analytics } from "@vercel/analytics/react";\n` + content;

  // Ensure the <Analytics /> tag is only present once inside the JSX
  const matches = content.match(/<Analytics\s*\/>/g);
  if (matches && matches.length > 1) {
    // Keep only the first occurrence
    let seen = false;
    content = content.replace(/<Analytics\s*\/>/g, () => {
      if (!seen) {
        seen = true;
        return "<Analytics />";
      }
      return "";
    });
  }

  fs.writeFileSync(rootPath, content, "utf8");
  console.log("✅ Successfully resolved duplicate Analytics declarations in __root.tsx");
}
