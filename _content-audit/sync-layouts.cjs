const fs = require("fs");
const path = require("path");

const csPath = path.join(__dirname, "../src/routes/case-studies.index.tsx");
const blogPath = path.join(__dirname, "../src/routes/blog.index.tsx");

let csContent = fs.readFileSync(csPath, "utf8");
let blogContent = fs.readFileSync(blogPath, "utf8");

// --- 1. Fix the "01 Context" layout in Case Studies ---
// We replace the tight grid with a spacious 12-column grid.
csContent = csContent.replace(
  /<div className="grid grid-cols-1 gap-8 md:grid-cols-3">/g,
  `<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">`,
);

// Target the 01 Context text block wrapper
csContent = csContent.replace(
  /<div>(\s*<p className="text-xs font-bold uppercase tracking-widest text-\[#[a-zA-Z0-9]+\]">01<\/p>)/g,
  `<div className="lg:col-span-3">$1`,
);

// Target the right-hand text block wrapper
csContent = csContent.replace(
  /<div className="space-y-4 text-slate-700 md:col-span-2">/g,
  `<div className="space-y-4 text-slate-700 lg:col-span-9">`,
);

fs.writeFileSync(csPath, csContent, "utf8");
console.log("✅ Balanced the '01 Context' section layout.");

// --- 2. Copy Hero & Button Styles from Case Studies to Blog ---
// Extract the <header> tag classes
const csHeaderMatch = csContent.match(/<header className="([^"]+)">/);
if (csHeaderMatch) {
  blogContent = blogContent.replace(
    /<header className="([^"]+)">/,
    `<header className="${csHeaderMatch[1]}">`,
  );
  console.log("✅ Copied Header background colors to Blog Archive.");
}

// Extract header text H1 classes
const csH1Match = csContent.match(/<header[\s\S]*?<h1 className="([^"]+)">/);
if (csH1Match) {
  blogContent = blogContent.replace(
    /(<header[\s\S]*?<h1 className=")([^"]+)(">)/,
    `$1${csH1Match[1]}$3`,
  );
}

// Extract header paragraph classes
const csPMatch = csContent.match(
  /<header[\s\S]*?<h1[^>]*>[\s\S]*?<\/h1>\s*<p className="([^"]+)">/,
);
if (csPMatch) {
  blogContent = blogContent.replace(
    /(<header[\s\S]*?<h1[^>]*>[\s\S]*?<\/h1>\s*<p className=")([^"]+)(">)/,
    `$1${csPMatch[1]}$3`,
  );
}

// Extract Button classes in the header (The <Link> tag inside <header>)
const csBtnMatch = csContent.match(/<header[\s\S]*?<Link[^>]+className="([^"]+)"/);
const blogBtnMatch = blogContent.match(/(<header[\s\S]*?<Link[^>]+className=")([^"]+)(")/);

if (csBtnMatch && blogBtnMatch) {
  // Replace the blog button classes with the identical case studies button classes
  blogContent = blogContent.replace(
    blogBtnMatch[0],
    `${blogBtnMatch[1]}${csBtnMatch[1]}${blogBtnMatch[3]}`,
  );
  console.log("✅ Copied Hero Button colors to Blog Archive.");
}

fs.writeFileSync(blogPath, blogContent, "utf8");
console.log("✅ Blog archive styles successfully synchronized with Case Studies index.");
