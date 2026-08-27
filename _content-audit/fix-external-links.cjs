const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/linkedinWriting.ts");
if (!fs.existsSync(filePath)) {
  console.log("File not found! " + filePath);
  process.exit(1);
}

let content = fs.readFileSync(filePath, "utf8");

// Map of regex keywords to the correct user-provided URLs
const linkMapping = [
  {
    regex: /edition[- ]?4|spring.?awakening/i,
    url: "https://www.linkedin.com/pulse/spring-awakening-structural-planning-edition-4-stuart-savage-z8dte/",
  },
  {
    regex: /edition[- ]?5|national.?expansion/i,
    url: "https://www.linkedin.com/pulse/nocturnal-sanctuary-edition-5-national-expansion-stuart-savage-mndge/",
  },
  {
    regex: /edition[- ]?3|architecture.?stillness/i,
    url: "https://www.linkedin.com/pulse/edition-3-architecture-stillness-stuart-savage-wu2je/",
  },
  {
    regex: /edition[- ]?0?2|technical.?engine/i,
    url: "https://www.linkedin.com/pulse/nocturnal-journal-edition-02-technical-engine-stuart-savage-f7yie/",
  },
  {
    regex: /edition[- ]?1|winter.?architecture/i,
    url: "https://www.linkedin.com/pulse/nocturnal-sanctuary-edition-1-winter-architecture-stuart-savage-zvqte/",
  },
  {
    regex: /highland.?heart/i,
    url: "https://www.linkedin.com/pulse/highland-heart-reclaiming-artists-soul-selfish-world-stuart-savage-vhyfe/",
  },
  {
    regex: /floorplanner/i,
    url: "https://www.linkedin.com/pulse/from-sketch-screen-why-floorplanner-total-game-changer-umgme/",
  },
  {
    regex: /shoot.?gardening.*review/i,
    url: "https://www.linkedin.com/pulse/shoot-gardening-professional-designers-review-stuart-savage-v4cxf/",
  },
  {
    regex: /design.?gap|digital.?blueprint/i,
    url: "https://www.linkedin.com/pulse/design-gap-why-digital-blueprint-uk-homeowners-smartest-stuart-savage-jvj5f/",
  },
];

// Iterate through the array blocks and safely replace matching URLs
let blocks = content.split("},");
for (let i = 0; i < blocks.length; i++) {
  let block = blocks[i];
  linkMapping.forEach((m) => {
    if (m.regex.test(block)) {
      blocks[i] = block.replace(/(href|url|link):\s*["'][^"']*["']/g, `$1: "${m.url}"`);
    }
  });
}
content = blocks.join("},");

// Add the 3 missing publications if they aren't already there
if (!content.includes("shootgardening.com")) {
  // Dynamically grab whatever keys the file uses to avoid TS errors
  const urlMatch = content.match(/(href|url|link):/);
  const urlKey = urlMatch ? urlMatch[1] : "href";

  const descMatch = content.match(/(desc|description|excerpt):/);
  const descKey = descMatch ? descMatch[1] : null;

  const dateMatch = content.match(/(date|year):/);
  const dateKey = dateMatch ? dateMatch[1] : null;

  function buildEntry(title, url) {
    let str = `  {\n    title: "${title}",\n    ${urlKey}: "${url}"`;
    if (descKey) str += `,\n    ${descKey}: "External publication feature"`;
    if (dateKey) str += `,\n    ${dateKey}: "Archive"`;
    str += `\n  }`;
    return str;
  }

  const missing1 = buildEntry(
    "Shoot Gardening: A Professional Designer's Review",
    "https://www.shootgardening.com/articles/shoot-gardening-a-professional-designers-review",
  );
  const missing2 = buildEntry(
    "Marlborough Mews: A Tropical Microclimate",
    "https://www.shootgardening.com/articles/marlborough-mews-a-tropical-microclimate",
  );
  const missing3 = buildEntry(
    "The Weekend Pages: Phil Spencer Feature",
    "https://theweekendpages.co.uk/phil-spencer/#50",
  );

  // Inject before the closing bracket of the array
  content = content.replace(/\]\s*;/g, `,\n${missing1},\n${missing2},\n${missing3}\n];`);
}

fs.writeFileSync(filePath, content, "utf8");
console.log("✅ Updated links and added missing articles in linkedinWriting.ts");
