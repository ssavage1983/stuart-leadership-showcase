const fs = require("fs");
const path = require("path");

const rootPath = path.join(__dirname, "../src/routes/__root.tsx");
if (fs.existsSync(rootPath)) {
  let content = fs.readFileSync(rootPath, "utf8");

  // The script block to inject inside the <head>
  const gaScript = `
        {/* Google Analytics - Moonlight Studio */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T9YEZBGQLS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              if (window.location.hostname.includes('moonlight-studio.uk')) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-T9YEZBGQLS');
              }
            \`
          }}
        />`;

  // Find the closing </Head> component and insert the script right before it
  if (!content.includes("G-T9YEZBGQLS")) {
    content = content.replace("</Head>", `${gaScript}\n      </Head>`);
    fs.writeFileSync(rootPath, content, "utf8");
    console.log("✅ Successfully injected Google Analytics into __root.tsx");
  } else {
    console.log("⚠️ Google Analytics is already present in __root.tsx");
  }
}
