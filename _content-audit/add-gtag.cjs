const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../index.html");
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, "utf8");

  const gaScript = `
    <!-- Google tag (gtag.js) - Moonlight Studio -->
    <script>
      if (window.location.hostname.includes('moonlight-studio.uk')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-T9YEZBGQLS';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T9YEZBGQLS');
      }
    </script>`;

  // Inject before the closing head tag if it isn't already there
  if (!content.includes("G-T9YEZBGQLS")) {
    content = content.replace("</head>", `${gaScript}\n  </head>`);
    fs.writeFileSync(indexPath, content, "utf8");
    console.log("✅ Successfully injected conditional Google Analytics for Moonlight Studio.");
  } else {
    console.log("⚠️ Google Analytics snippet is already in index.html.");
  }
} else {
  console.log("❌ Could not find index.html");
}
