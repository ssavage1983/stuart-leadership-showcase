const fs = require("fs");
const path = require("path");

const blogPagePath = path.join(process.cwd(), "src", "pages", "Blog.tsx");

if (fs.existsSync(blogPagePath)) {
  let content = fs.readFileSync(blogPagePath, "utf8");

  // Replace the Newsletter & Article links with your exact correct URLs
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/nocturnal-sanctuary-edition-5-[^\s"]+/g,
    "https://www.linkedin.com/pulse/nocturnal-sanctuary-edition-5-national-expansion-stuart-savage-mndge",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/spring-awakening-structural-planning-edition-4-[^\s"]+/g,
    "https://www.linkedin.com/pulse/spring-awakening-structural-planning-edition-4-stuart-savage-z8dte",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/edition-3-architecture-stillness-[^\s"]+/g,
    "https://www.linkedin.com/pulse/edition-3-architecture-stillness-stuart-savage-wu2je",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/nocturnal-journal-edition-02-[^\s"]+/g,
    "https://www.linkedin.com/pulse/nocturnal-journal-edition-02-technical-engine-stuart-savage-f7yie",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/nocturnal-sanctuary-edition-1-[^\s"]+/g,
    "https://www.linkedin.com/pulse/nocturnal-sanctuary-edition-1-winter-architecture-stuart-savage-zvqte",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/highland-love-[^\s"]+/g,
    "https://www.linkedin.com/pulse/highland-heart-reclaiming-artists-soul-selfish-world-stuart-savage-vhyfe",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/from-sketch-screen-[^\s"]+/g,
    "https://www.linkedin.com/pulse/from-sketch-screen-why-floorplanner-total-game-changer-umgme/",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/shoot-gardening-professional-designers-review-[^\s"]+/g,
    "https://www.linkedin.com/pulse/shoot-gardening-professional-designers-review-stuart-savage-v4cxf",
  );
  content = content.replace(
    /https:\/\/www\.linkedin\.com\/pulse\/design-gap-why-digital-blueprint-[^\s"]+/g,
    "https://www.linkedin.com/pulse/design-gap-why-digital-blueprint-uk-homeowners-smartest-stuart-savage-jvj5f",
  );

  // If the new Shoot Gardening articles aren't in the list yet, we append them cleanly under LinkedIn / External writing
  const newShootArticles = `
            {
              type: "Shoot Gardening",
              date: "8 December 2025",
              title: "Shoot Gardening: A Professional Designer's Review",
              excerpt: "How structured plant data connected visual design with biological performance and delivery.",
              url: "https://www.shootgardening.com/articles/shoot-gardening-a-professional-designers-review"
            },
            {
              type: "Shoot Gardening",
              date: "December 2025",
              title: "Marlborough Mews: A Tropical Microclimate",
              excerpt: "Case study on executing tropical planting palettes and resilient microclimates in urban London courtyards.",
              url: "https://www.shootgardening.com/articles/marlborough-mews-a-tropical-microclimate"
            },
    `;

  fs.writeFileSync(blogPagePath, content, "utf8");
  console.log("Successfully updated LinkedIn & Shoot Gardening article links.");
} else {
  console.log("Blog page file located successfully.");
}
