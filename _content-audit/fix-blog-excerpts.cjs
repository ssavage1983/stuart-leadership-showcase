const fs = require("fs");
const path = require("path");

// 1. Remove the excerpt from the blue hero in the individual blog post template
const slugPath = path.join(__dirname, "../src/routes/blog.$slug.tsx");
if (fs.existsSync(slugPath)) {
  let slugContent = fs.readFileSync(slugPath, "utf8");
  // Regex to find and remove the excerpt paragraph from the hero section
  slugContent = slugContent.replace(
    /<p className="mt-6 max-w-3xl text-base text-\[#f8f7f3\]\/75">\{post\.excerpt\}<\/p>\s*/g,
    "",
  );
  fs.writeFileSync(slugPath, slugContent, "utf8");
  console.log("✅ Removed duplicated excerpt from blog post hero section.");
}

// 2. Fix the broken mid-word excerpts in the blog data
const dataPath = path.join(__dirname, "../src/data/blogPosts.ts");
if (fs.existsSync(dataPath)) {
  let dataContent = fs.readFileSync(dataPath, "utf8");

  // Fix the specific known cut-offs from the screenshot
  dataContent = dataContent.replace("refresh your outd", "refresh your outdoor space.");
  dataContent = dataContent.replace("open the door", "open the door to endless possibilities.");
  dataContent = dataContent.replace("is your primary land", "is your primary landscape component.");
  dataContent = dataContent.replace(
    "journey from concept to",
    "journey requires careful planning.",
  );

  // General cleanup: If an excerpt doesn't end in a punctuation mark, cut it at the last full period
  dataContent = dataContent.replace(/excerpt:\s*"(.*?)"/g, (match, excerptText) => {
    let cleanText = excerptText.trim();
    // If it lacks ending punctuation
    if (!cleanText.match(/[.!?]$/)) {
      const lastPeriod = cleanText.lastIndexOf(".");
      if (lastPeriod > -1) {
        // Cut it cleanly at the last full sentence
        cleanText = cleanText.substring(0, lastPeriod + 1);
      } else {
        // If there's no period at all, just cut at the last space and add a period
        const lastSpace = cleanText.lastIndexOf(" ");
        if (lastSpace > -1) {
          cleanText = cleanText.substring(0, lastSpace) + ".";
        }
      }
    }
    return `excerpt: "${cleanText}"`;
  });

  fs.writeFileSync(dataPath, dataContent, "utf8");
  console.log("✅ Cleaned up mid-word truncation in blog excerpts.");
}
