const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/linkedinWriting.ts");
if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, "utf8");

  // Replace double commas with a single comma
  content = content.replace(/,(\s*),/g, ",");

  // Remove any trailing commas right before closing bracket if malformed
  content = content.replace(/,(\s*)\]/g, "\n]");

  fs.writeFileSync(filePath, content, "utf8");
  console.log("✅ Successfully cleaned array commas in src/data/linkedinWriting.ts");
}
