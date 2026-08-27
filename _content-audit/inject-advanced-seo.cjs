const fs = require("fs");
const path = require("path");

function injectAdvancedSEO(filePath, headContent) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, "utf8");

  // If head is already defined, we don't want to break it, so we skip
  if (content.includes("head: () => ({") || content.includes("head: ({")) {
    console.log(
      `⚠️ SEO head already exists in ${path.basename(filePath)}. Skipping to prevent duplication.`,
    );
    return;
  }

  // Match the TanStack Route definition to inject the head property safely
  const routeDefRegex = /(export const Route = createFileRoute\(['"][^'"]+['"]\)\(\{)/;
  if (routeDefRegex.test(content)) {
    content = content.replace(routeDefRegex, `$1\n  ${headContent},`);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Injected Advanced Meta & JSON-LD into ${path.basename(filePath)}`);
  } else {
    console.log(`❌ Could not find Route definition in ${path.basename(filePath)}`);
  }
}

// 1. Homepage SEO (ProfilePage & Person Schema)
const indexHead = `head: () => ({
    meta: [
      { title: "Stuart Savage | Operations & Customer Experience Leadership" },
      { name: "description", content: "Historic professional archive and portfolio of Stuart Savage. Showcasing operations management, customer experience, and project delivery across London." }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Stuart Savage",
            "jobTitle": "Operations & Customer Experience Professional",
            "url": "https://www.moonlight-studio.uk",
            "sameAs": [
              "https://www.linkedin.com/in/stuart-savage/"
            ],
            "knowsAbout": ["Operations Management", "Customer Experience", "Project Management", "Stakeholder Management", "Zero-Defect Delivery"]
          }
        })
      }
    ]
  })`;
injectAdvancedSEO(path.join(__dirname, "../src/routes/index.tsx"), indexHead);

// 2. Case Studies SEO (CollectionPage Schema)
const csHead = `head: () => ({
    meta: [
      { title: "Project Portfolio | Stuart Savage" },
      { name: "description", content: "Archive of landscape design and structural planning projects delivered across South London, demonstrating strict zero-defect quality assurance." }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Project Portfolio Archive",
          "description": "Historic project delivery records and methodologies for Stuart Savage.",
          "url": "https://www.moonlight-studio.uk/case-studies"
        })
      }
    ]
  })`;
injectAdvancedSEO(path.join(__dirname, "../src/routes/case-studies.index.tsx"), csHead);

// 3. Blog Archive SEO (Blog Schema)
const blogHead = `head: () => ({
    meta: [
      { title: "Professional Archive & Writing | Stuart Savage" },
      { name: "description", content: "Historic practice archive featuring methodologies, horticultural guides, and operational insights from previous design builds." }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Stuart Savage Professional Archive",
          "description": "Historic practice archive featuring methodologies and operational insights.",
          "url": "https://www.moonlight-studio.uk/blog",
          "author": {
            "@type": "Person",
            "name": "Stuart Savage"
          }
        })
      }
    ]
  })`;
injectAdvancedSEO(path.join(__dirname, "../src/routes/blog.index.tsx"), blogHead);
