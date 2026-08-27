const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../src/routes/index.tsx");
let content = fs.readFileSync(indexPath, "utf8");

// Look for the BulletItem definition. It likely returns an <li>
const bulletItemSearch =
  /function BulletItem\(\{\s*children[^}]*\}\)\s*\{\s*return\s*\(\s*<li[^>]*>[\s\S]*?\{children\}[\s\S]*?<\/li>\s*\);\s*\}/;

const newBulletItem = `function BulletItem({ children }: { children: React.ReactNode }) {
  if (typeof children === "string" && children.includes(":")) {
    const parts = children.split(":");
    return (
      <li className="relative pl-6 text-sm text-[#607080] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#c47c62]">
        <strong className="font-bold text-[#102a43]">{parts[0]}:</strong>
        {parts.slice(1).join(":")}
      </li>
    );
  }
  return (
    <li className="relative pl-6 text-sm text-[#607080] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#c47c62]">
      {children}
    </li>
  );
}`;

// If we find it, replace it. If not, we'll try a fallback replacement.
if (content.match(bulletItemSearch)) {
  content = content.replace(bulletItemSearch, newBulletItem);
} else {
  // Fallback: Just search for `<BulletItem key={i}>{pt}</BulletItem>` and replace it inside the map
  const mapSearch = /<BulletItem\s+key=\{i\}>\{pt\}<\/BulletItem>/g;
  content = content.replace(
    mapSearch,
    `<BulletItem key={i}>{typeof pt === "string" && pt.includes(":") ? <><strong className="font-bold text-[#102a43]">{pt.split(":")[0]}:</strong>{pt.split(":").slice(1).join(":")}</> : pt}</BulletItem>`,
  );
}

fs.writeFileSync(indexPath, content, "utf8");
console.log("✅ Successfully updated BulletItem logic for bolding text before colons!");
