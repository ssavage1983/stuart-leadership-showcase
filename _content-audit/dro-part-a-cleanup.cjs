const fs = require("fs");
const path = require("path");

console.log("Starting automated DRO & Legal Audit cleanup for Part A...");

// 1. Clean up email addresses across files in src/
const targetEmail = "stuart@savageldn.co.uk";
const oldEmails = [
  "stuart.savageworld@gmail.com",
  "info@savageldn.co.uk",
  "support@savageldn.co.uk",
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (
        !fullPath.includes("node_modules") &&
        !fullPath.includes(".git") &&
        !fullPath.includes("_content-audit")
      ) {
        walkDir(fullPath, callback);
      }
    } else {
      callback(fullPath);
    }
  });
}

let filesModified = 0;

walkDir(path.join(process.cwd(), "src"), (filePath) => {
  if (filePath.endsWith(".tsx") || filePath.endsWith(".ts") || filePath.endsWith(".json")) {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Replace old emails
    oldEmails.forEach((oldEmail) => {
      if (content.includes(oldEmail)) {
        content = content.split(oldEmail).join(targetEmail);
        modified = true;
      }
    });

    // Neutralise solvent closure phrasing
    const solventPhrases = [
      "solvent, orderly business wind-down",
      "structured and responsible wind-down",
      "Dissolved the corporation in a highly structured, responsible manner",
      "responsibly winding down all client commitments",
      "proactive, strategic decision to execute a market exit",
      "executed a proactive market exit",
    ];

    solventPhrases.forEach((phrase) => {
      if (content.includes(phrase)) {
        content = content
          .split(phrase)
          .join(
            "concluded active trading operations following a strategic review of market conditions",
          );
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Updated DRO safety compliance in: ${path.relative(process.cwd(), filePath)}`);
      filesModified++;
    }
  }
});

console.log(`Part A automated cleanup complete. ${filesModified} files updated.`);
