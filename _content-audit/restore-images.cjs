const fs = require("fs");
const path = require("path");

console.log("Restoring portfolio images with captions across case studies...");

// Mapping of route files to their respective image assets and captions
const updates = [
  {
    file: "case-studies.balham-cottage-courtyard-garden.tsx",
    img: "/images/portfolio/balham-cottage-courtyard-daytime-dining-and-raised-planters.jpg",
    alt: "Balham Cottage Courtyard daytime dining and raised planters",
    caption: "Daytime dining zone and bespoke raised planters",
  },
  {
    file: "case-studies.balham-pergola-walkway.tsx",
    img: "/images/portfolio/balham-pergola-walkway-design-visualisation.png",
    alt: "Balham Pergola & Walkway structural design visualisation",
    caption: "Structural timber framing and rhythmic spatial flow",
  },
  {
    file: "case-studies.brixton-garden-jungle-transformation.tsx",
    img: "/images/portfolio/brixton-urban-jungle-tree-ferns-and-integrated-bench.png",
    alt: "Brixton Urban Jungle tree ferns and integrated timber seating",
    caption: "Subtropical planting matrix with integrated bench seating",
  },
  {
    file: "case-studies.clapham-old-town.tsx",
    img: "/images/portfolio/clapham-old-town-front-garden-porcelain-path-and-coping.png",
    alt: "Clapham Old Town front garden porcelain path and coping",
    caption: "Heritage masonry restoration and precision porcelain paving",
  },
  {
    file: "case-studies.dulwich-garden-transformation.tsx",
    img: "/images/portfolio/dulwich-tiered-garden-evening-dining-and-entertaining.png",
    alt: "Dulwich tiered garden evening dining and entertaining area",
    caption: "Tiered hardscaping optimized for evening entertainment",
  },
  {
    file: "case-studies.gayville-zen-sanctuary-balham.tsx",
    img: "/images/portfolio/gayville-balham-built-in-bench-and-planting.jpg",
    alt: "Gayville Zen Sanctuary Balham built-in bench and minimal planting",
    caption: "Minimalist hardscaping and architectural planting",
  },
  {
    file: "case-studies.geometric-harmony-tooting-bec.tsx",
    img: "/images/portfolio/tooting-bec-geometric-garden-night-lighting.png",
    alt: "Tooting Bec Geometric Harmony garden night lighting and paving",
    caption: "Angular hardscaping and atmospheric night lighting",
  },
  {
    file: "case-studies.marlborough-mews-sanctuary-brixton.tsx",
    img: "/images/portfolio/marlborough-mews-mature-tropical-planting-and-lighting.png",
    alt: "Marlborough Mews Brixton mature tropical planting and lighting",
    caption: "Microclimate optimisation and layered tropical canopy",
  },
  {
    file: "case-studies.modern-cottage-greenwich.tsx",
    img: "/images/portfolio/greenwich-modern-cottage-garden-overview.jpg",
    alt: "Greenwich Modern Cottage garden overview and lawn",
    caption: "Seamless threshold transition between period cottage and lawn",
  },
  {
    file: "case-studies.walworth-sanctuary.tsx",
    img: "/images/portfolio/walworth-rear-garden-privacy-planting-and-lighting.png",
    alt: "Walworth Sanctuary rear garden privacy planting and lighting",
    caption: "Biodiverse planting matrix and intimate urban sanctuary",
  },
  {
    file: "case-studies.zen-sanctuary-tooting-bec.tsx",
    img: "/images/portfolio/tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg",
    alt: "Tooting Bec Japanese Garden seating and warm night lighting",
    caption: "Asymmetrical spatial balance and serene evening ambiance",
  },
];

const routesDir = path.join(process.cwd(), "src", "routes");

updates.forEach((item) => {
  const filePath = path.join(routesDir, item.file);
  if (fs.existsSync(filePath)) {
    let code = fs.readFileSync(filePath, "utf8");

    // Check if image component is already present
    if (!code.includes("<img") && !code.includes("img ")) {
      // Insert hero image right after the header/metadata section
      const targetStr = '<div className="space-y-4 mb-8';
      if (code.includes(targetStr)) {
        // Find the closing div of the header
        const parts = code.split("</p>\n        </div>");
        if (parts.length > 1) {
          const imageHtml = `\n\n        {/* Project Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden border border-[#102a43]/16 shadow-lg bg-card">
          <img
            src="${item.img}"
            alt="${item.alt}"
            width="1200"
            height="700"
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="p-4 bg-muted/30 border-t border-[#102a43]/10 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
            ${item.caption}
          </div>
        </div>`;

          code = parts[0] + "</p>\n        </div>" + imageHtml + parts[1];
          fs.writeFileSync(filePath, code, "utf8");
          console.log(`Successfully restored image in: ${item.file}`);
        }
      }
    } else {
      console.log(`Image already present in: ${item.file}`);
    }
  } else {
    console.log(`File not found: ${item.file}`);
  }
});

console.log("Image restoration complete.");
