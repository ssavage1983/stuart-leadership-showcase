const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../index.html");
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, "utf8");

  const gaScript = `
    <!-- Google tag (gtag.js) - Moonlight Studio -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9YEZBGQLS"></script>
    <script>
      if (window.location.hostname.includes('moonlight-studio.uk')) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T9YEZBGQLS');
      }
    </script>`;

  // Inject right after the opening body tag
  if (!content.includes("G-T9YEZBGQLS")) {
    content = content.replace("<body>", `<body>\n${gaScript}`);
    fs.writeFileSync(indexPath, content, "utf8");
    console.log("✅ Successfully injected Google Analytics into index.html.");
  } else {
    console.log("⚠️ Google Analytics is already present in index.html.");
  }
} else {
  console.log("❌ Could not find index.html");
}
