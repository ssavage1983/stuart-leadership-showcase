const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../src/routes/index.tsx");
let content = fs.readFileSync(indexPath, "utf8");

// We find the exact line where the experience bullets are mapped
// Usually it looks like: <li key={i} className="text-muted-foreground">{bullet}</li>
// Or similar.
const searchStr = "{bullet}";
const replacementStr =
  '{bullet.includes(":") ? (<><strong className="font-semibold text-foreground">{bullet.split(":")[0]}:</strong>{bullet.split(":").slice(1).join(":")}</>) : (bullet)}';

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replacementStr);
  fs.writeFileSync(indexPath, content, "utf8");
  console.log("✅ Successfully updated index.tsx to map bullets with bold text before colons!");
} else {
  // Try another common pattern
  const searchStr2 = ">{bullet}</li>";
  const replacementStr2 =
    '>{bullet.includes(":") ? (<><strong className="font-semibold text-foreground">{bullet.split(":")[0]}:</strong>{bullet.split(":").slice(1).join(":")}</>) : (bullet)}</li>';
  if (content.includes(searchStr2)) {
    content = content.replace(searchStr2, replacementStr2);
    fs.writeFileSync(indexPath, content, "utf8");
    console.log("✅ Successfully updated index.tsx to map bullets with bold text before colons!");
  } else {
    console.log(
      "⚠️ Could not find '{bullet}' string in index.tsx. Ensure the variable name is correct.",
    );
  }
}
