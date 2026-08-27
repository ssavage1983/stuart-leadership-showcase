const fs = require("fs");
const path = require("path");

const pkgPath = path.join(__dirname, "package.json");
if (fs.existsSync(pkgPath)) {
    let pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkg.packageManager = "bun@1.2.4"; // Align with modern Bun runtime support on Vercel
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
    console.log("✅ Added packageManager field to package.json");
}
