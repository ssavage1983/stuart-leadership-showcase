const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// Point specifically to the root directory
const inputCsv = path.join(process.cwd(), "Portfolio_Structured_Portfolio.csv");
const outputTs = path.join(process.cwd(), "src", "data", "caseStudies.ts");

const results = [];

console.log("📖 Reading Portfolio_Structured_Portfolio.csv...");

fs.createReadStream(inputCsv)
  .pipe(csv())
  .on("data", (data) => {
      if (data.Title) results.push(data);
  })
  .on("end", () => {
      let tsContent = `export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  completionDate: string;
  archiveStatus: string;
  excerpt: string;
  challenge: string;
  hardLandscaping: string;
  softscaping: string;
  outcome: string;
  image: string;
  additionalImages: { src: string; caption: string }[];
}

export const caseStudies: CaseStudy[] = [
`;

      results.forEach(row => {
          // Create clean URL slug from the title
          const slug = row.Title.split(':')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          
          // Map the first image as the primary cover image
          const primaryImage = row['File Name 1'] ? `/images/portfolio/${row['File Name 1']}` : '';
          
          // Map any additional images
          const secondImageSrc = row['File Name 2'] ? `/images/portfolio/${row['File Name 2']}` : '';
          
          tsContent += `  {
    slug: "${slug}",
    title: ${JSON.stringify(row.Title)},
    location: ${JSON.stringify(row.Location)},
    completionDate: ${JSON.stringify(row['Completion Date'])},
    archiveStatus: ${JSON.stringify(row['Company Closure Status'] || "Closed May 2026")},
    excerpt: ${JSON.stringify(row.Description)},
    challenge: ${JSON.stringify(row.Challenge)},
    hardLandscaping: ${JSON.stringify(row['Hard Landscaping'])},
    softscaping: ${JSON.stringify(row.Softscaping)},
    outcome: ${JSON.stringify(row.Outcome)},
    image: ${JSON.stringify(primaryImage)},
    additionalImages: [
      ${secondImageSrc ? `{ src: ${JSON.stringify(secondImageSrc)}, caption: ${JSON.stringify(row['Caption 2'])} }` : ''}
    ].filter(img => img.src)
  },\n`;
      });

      tsContent += `];\n`;

      fs.writeFileSync(outputTs, tsContent, "utf8");
      console.log(`✅ Successfully updated src/data/caseStudies.ts with ${results.length} highly detailed case studies!`);
  });
