const fs = require("fs");
const path = require("path");

const csPath = path.join(__dirname, "../src/routes/case-studies.index.tsx");
if (fs.existsSync(csPath)) {
  let content = fs.readFileSync(csPath, "utf8");

  // Change from 3/9 split to a 2/10 split to pull the text closer to the left
  content = content.replace(/className="lg:col-span-3"/g, 'className="lg:col-span-2 pt-2"');
  content = content.replace(
    /className="space-y-4 text-slate-700 lg:col-span-9"/g,
    'className="space-y-4 text-slate-700 lg:col-span-8"',
  );

  fs.writeFileSync(csPath, content, "utf8");
  console.log("✅ Tightened the layout grid for the Context section.");
}
