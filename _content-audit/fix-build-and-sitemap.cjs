const fs = require("fs");
const path = require("path");

// 1. Fix the double comma in linkedinWriting.ts
const linkedinPath = path.join(__dirname, "../src/data/linkedinWriting.ts");
if (fs.existsSync(linkedinPath)) {
  let content = fs.readFileSync(linkedinPath, "utf8");
  // Replace any double commas (with or without spaces/newlines between them) with a single comma
  content = content.replace(/,(\s*),/g, ",");
  fs.writeFileSync(linkedinPath, content, "utf8");
  console.log("✅ Fixed 'no-sparse-arrays' ESLint error in linkedinWriting.ts");
}

// 2. Fix the Sitemap Domain Mismatch
const sitemapPath = path.join(__dirname, "../src/routes/sitemap[.]xml.ts");
if (fs.existsSync(sitemapPath)) {
  let smContent = fs.readFileSync(sitemapPath, "utf8");
  // Swap moonlight-studio.uk for savageldn.co.uk so Google Search Console accepts it
  smContent = smContent.replace(
    /https:\/\/www\.moonlight-studio\.uk/g,
    "https://www.savageldn.co.uk",
  );
  fs.writeFileSync(sitemapPath, smContent, "utf8");
  console.log("✅ Updated sitemap base URL to savageldn.co.uk");
}

// Also check if SITE constant in blog component needs updating
const blogSlugPath = path.join(__dirname, "../src/routes/blog.$slug.tsx");
if (fs.existsSync(blogSlugPath)) {
  let blogContent = fs.readFileSync(blogSlugPath, "utf8");
  blogContent = blogContent.replace(
    /const SITE = "https:\/\/www\.moonlight-studio\.uk";/g,
    'const SITE = "https://www.savageldn.co.uk";',
  );
  fs.writeFileSync(blogSlugPath, blogContent, "utf8");
}
