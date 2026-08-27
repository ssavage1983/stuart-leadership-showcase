const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "../src/routes/__root.tsx");
if (fs.existsSync(rootPath)) {
  let content = fs.readFileSync(rootPath, "utf8");

  const gaScript = `
        {/* Google Analytics - Moonlight Studio */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9YEZBGQLS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              if (typeof window !== 'undefined' && window.location.hostname.includes('moonlight-studio.uk')) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-T9YEZBGQLS');
              }
            \`
          }}
        />`;

  // Inject right after the Outlet component
  if (!content.includes("G-T9YEZBGQLS")) {
    content = content.replace("<Outlet />", `<Outlet />\n${gaScript}`);
    fs.writeFileSync(rootPath, content, "utf8");
    console.log("✅ Successfully injected Google Analytics into __root.tsx.");
  } else {
    console.log("⚠️ Google Analytics is already present in __root.tsx.");
  }
}
