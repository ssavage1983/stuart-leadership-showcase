const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../src/routes/index.tsx");
let content = fs.readFileSync(indexPath, "utf8");

const mappedRegex = /<li([^>]*)>\s*\{([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*)\}\s*<\/li>/g;
content = content.replace(mappedRegex, (match, attrs, varName) => {
  return `<li${attrs}>
                  {String(${varName}).includes(":") ? (
                    <>
                      <strong className="font-semibold text-foreground">
                        {String(${varName}).substring(0, String(${varName}).indexOf(":") + 1)}
                      </strong>
                      {String(${varName}).substring(String(${varName}).indexOf(":") + 1)}
                    </>
                  ) : (
                    ${varName}
                  )}
                </li>`;
});

fs.writeFileSync(indexPath, content, "utf8");
console.log("✅ Successfully updated bullets in index.tsx to make text before the colon bold.");
