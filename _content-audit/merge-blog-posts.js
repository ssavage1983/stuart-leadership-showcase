const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "src/data/blogArchive.generated.json");
const blogPostsPath = path.join(__dirname, "src/data/blogPosts.ts");

const rawArchive = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

// Filter out old trading CTAs and booking lines
function cleanBlocks(blocks) {
  return blocks.filter((b) => {
    const text = b.trim();
    if (!text) return false;
    if (/^booking your garden quote/i.test(text)) return false;
    if (/^why choose savageldn/i.test(text)) return false;
    if (/use the booking form on/i.test(text)) return false;
    if (/ready to start your garden journey/i.test(text)) return false;
    if (/for more inspiration and to book/i.test(text)) return false;
    if (/explore landscaping services/i.test(text)) return false;
    if (/get your garden quote today/i.test(text)) return false;
    if (/^eye-level view of/i.test(text) || /^close-up view of/i.test(text)) return false;
    return true;
  });
}

// Build map of full content
const contentMap = {};
rawArchive.forEach((item) => {
  if (item.slug && item.blocks) {
    contentMap[item.slug] = cleanBlocks(item.blocks);
  }
});

// Existing metadata list
const metadata = [
  {
    title: "Top Landscaping Options Clapham: Transform Your Garden with Expert Care",
    slug: "top-landscaping-options-clapham-transform-your-garden-with-expert-care",
    oldUrl:
      "https://www.savageldn.co.uk/post/top-landscaping-options-clapham-transform-your-garden-with-expert-care",
    category: "Historic practice · Clapham",
    excerpt: "Archived writing from the former practice on landscaping options in Clapham.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "Craft Your Dream Garden with Custom Garden Designs",
    slug: "custom-garden-designs",
    oldUrl: "https://www.savageldn.co.uk/post/custom-garden-designs",
    category: "Garden design archive",
    excerpt: "Archived writing on custom garden design and structured project planning.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "Structural Foundations: Greenwich Garden Engineering",
    slug: "greenwich-garden-engineering",
    oldUrl: "https://www.savageldn.co.uk/post/greenwich-garden-engineering",
    category: "Engineering · Delivery",
    excerpt: "A historic article on structural decisions and delivery planning in Greenwich.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "The Tropical Awakening: Hydrating the Soft Tree Fern (Dicksonia antarctica)",
    slug: "soft-tree-fern-hydration-guide-2026",
    oldUrl: "https://www.savageldn.co.uk/post/soft-tree-fern-hydration-guide-2026",
    category: "Plant knowledge",
    excerpt: "Archived horticultural guidance on hydrating soft tree ferns.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title:
      "Essential Care for Dicksonia antarctica: Watering, Winterising, and Year-Round Maintenance",
    slug: "essential-care-dicksonia-antarctica-soft-tree-fern",
    oldUrl: "https://www.savageldn.co.uk/post/essential-care-dicksonia-antarctica-soft-tree-fern",
    category: "Plant knowledge",
    excerpt: "Horticultural reference notes for Dicksonia antarctica care in the UK.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "Sourcing and Planting Mature Olive Trees: A London Case Study",
    slug: "sourcing-mature-olive-trees-london",
    oldUrl: "https://www.savageldn.co.uk/post/sourcing-mature-olive-trees-london",
    category: "Logistics · Procurement",
    excerpt: "Archived technical notes on sourcing and placing mature specimens in urban settings.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "Porcelain Paving Sub-base Standards: Preventing Movement and Failure",
    slug: "porcelain-paving-sub-base-standards",
    oldUrl: "https://www.savageldn.co.uk/post/porcelain-paving-sub-base-standards",
    category: "Engineering · Standards",
    excerpt:
      "Groundwork specifications, MOT Type 1 compaction, and bond bridges for exterior porcelain.",
    status: "archive",
    contentStatus: "complete",
  },
  {
    title: "Balham Garden Transformation: Phased Project Management in Action",
    slug: "balham-garden-transformation-project-management",
    oldUrl: "https://www.savageldn.co.uk/post/balham-garden-transformation-project-management",
    category: "Project Delivery",
    excerpt:
      "End-to-end programme control, access logistics, and stakeholder communication in Balham.",
    status: "archive",
    contentStatus: "complete",
  },
];

// Read any other items directly from generated json to ensure all ~20 posts are included
rawArchive.forEach((item) => {
  if (!metadata.some((m) => m.slug === item.slug)) {
    metadata.push({
      title: item.title,
      slug: item.slug,
      oldUrl: `https://www.savageldn.co.uk/post/${item.slug}`,
      category: "Historic practice archive",
      excerpt:
        item.blocks && item.blocks[0]
          ? item.blocks[0].slice(0, 150) + "..."
          : "Archived horticultural and project article.",
      status: "archive",
      contentStatus: "complete",
    });
  }
});

const merged = metadata.map((post) => {
  const blocks = contentMap[post.slug] || [
    "This historic article is preserved as part of the professional archive.",
    "Stuart Savage Landscaping and The Moonlight Garden Design Co. closed in May 2026.",
  ];
  return {
    ...post,
    content: blocks,
  };
});

const fileOutput = `export type BlogPost = {
  title: string;
  slug: string;
  oldUrl?: string;
  date?: string;
  readTime?: string;
  category: string;
  excerpt: string;
  status: "archive";
  contentStatus: "complete";
  content: string[];
  heroImage?: string;
  imageCaption?: string;
};

export const blogPosts: BlogPost[] = ${JSON.stringify(merged, null, 2)};

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
`;

fs.writeFileSync(blogPostsPath, fileOutput, "utf8");
console.log(`Successfully merged ${merged.length} complete articles into src/data/blogPosts.ts`);
