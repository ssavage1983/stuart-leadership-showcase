const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../src/routes/index.tsx");
let content = fs.readFileSync(indexPath, "utf8");

// The most common rendering pattern in Lovable templates for lists:
// <li key={idx} className="text-muted-foreground">{item}</li>
// Or: <li key={i}>{bullet}</li>
// We are going to use a regex to find ANY list item inside the experience map
// that renders a variable between curly braces and replace it.

const regex = /<li([^>]*)>\s*\{([a-zA-Z0-9_]+)\}\s*<\/li>/g;

content = content.replace(regex, (match, attrs, varName) => {
  // Only apply this logic if the variable looks like it belongs to an array map (usually 'item', 'bullet', 'desc', 'ach')
  if (
    ["item", "bullet", "desc", "achievement", "responsibility", "task", "req"].includes(varName)
  ) {
    return `<li${attrs}>
                      {${varName}.includes(":") ? (
                        <>
                          <strong className="font-semibold text-foreground">
                            {${varName}.split(":")[0]}:
                          </strong>
                          {${varName}.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        ${varName}
                      )}
                    </li>`;
  }
  return match;
});

fs.writeFileSync(indexPath, content, "utf8");
console.log("✅ index.tsx mapping updated successfully.");
