const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "../src/routes/__root.tsx");
if (fs.existsSync(rootPath)) {
  let content = fs.readFileSync(rootPath, "utf8");

  // Only inject if it isn't already there
  if (!content.includes("@vercel/analytics/react")) {
    // Add the import statement near the top
    content = `import { Analytics } from "@vercel/analytics/react";\n` + content;

    // Find the <Outlet /> component (which renders your pages) and place <Analytics /> right next to it
    if (content.includes("<Outlet />")) {
      content = content.replace("<Outlet />", "<Outlet />\n        <Analytics />");
      fs.writeFileSync(rootPath, content, "utf8");
      console.log("✅ Successfully injected Vercel Analytics into __root.tsx");
    } else {
      console.log(
        "⚠️ Found __root.tsx but couldn't find <Outlet /> to anchor the Analytics component.",
      );
    }
  } else {
    console.log("⚠️ Vercel Analytics is already imported in __root.tsx");
  }
} else {
  console.log("❌ Could not find __root.tsx");
}
