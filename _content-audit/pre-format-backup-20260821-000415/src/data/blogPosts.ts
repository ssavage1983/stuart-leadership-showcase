export type BlogPost = {
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

const pendingContent = [
  "Archived article content is being prepared.",
  "The original article body will be added here after it has been recovered and checked against the source.",
];

const postMetadata: BlogPost[] = [
  {
    title: "Top Landscaping Options Clapham: Transform Your Garden with Expert Care",
    slug: "top-landscaping-options-clapham-transform-your-garden-with-expert-care",
    oldUrl:
      "https://www.savageldn.co.uk/post/top-landscaping-options-clapham-transform-your-garden-with-expert-care",
    category: "Historic practice · Clapham",
    excerpt: "Archived writing from the former practice on landscaping options in Clapham.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Craft Your Dream Garden with Custom Garden Designs",
    slug: "custom-garden-designs",
    oldUrl: "https://www.savageldn.co.uk/post/custom-garden-designs",
    category: "Garden design archive",
    excerpt: "Archived writing on custom garden design and structured project planning.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Structural Foundations: Greenwich Garden Engineering",
    slug: "greenwich-garden-engineering",
    oldUrl: "https://www.savageldn.co.uk/post/greenwich-garden-engineering",
    category: "Engineering · Delivery",
    excerpt: "A historic article on structural decisions and delivery planning in Greenwich.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "The Tropical Awakening: Hydrating the Soft Tree Fern (Dicksonia antarctica)",
    slug: "soft-tree-fern-hydration-guide-2026",
    oldUrl: "https://www.savageldn.co.uk/post/soft-tree-fern-hydration-guide-2026",
    category: "Plant knowledge",
    excerpt: "Archived horticultural guidance on hydrating soft tree ferns.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Breaking Down Garden Design Costs in the UK",
    slug: "breaking-down-garden-design-costs-in-the-uk",
    oldUrl: "https://www.savageldn.co.uk/post/breaking-down-garden-design-costs-in-the-uk",
    category: "Commercial planning",
    excerpt: "Historic writing on scope, materials, constraints and responsible project budgeting.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Mastering the Art of Shadow in Garden Lighting Design",
    slug: "the-technical-engine-garden-lighting-design",
    oldUrl: "https://www.savageldn.co.uk/post/the-technical-engine-garden-lighting-design",
    category: "Lighting design",
    excerpt: "Archived writing on shadow, contrast and disciplined garden-lighting decisions.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Luxury Garden Upholstery by Kirsty Kissell Furnishings",
    slug: "garden-upholstery-kirsty-kissell",
    oldUrl: "https://www.savageldn.co.uk/post/garden-upholstery-kirsty-kissell",
    category: "Materials · Finishing",
    excerpt: "A former-practice article on upholstery as the finishing layer of an outdoor space.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "The Architectural Brilliance of the White Flowering Quince",
    slug: "white-flowering-quince",
    oldUrl: "https://www.savageldn.co.uk/post/white-flowering-quince",
    category: "Plant knowledge",
    excerpt: "Archived plant writing on Chaenomeles speciosa 'Nivalis' and winter structure.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "The New Standard in Nocturnal Garden Design",
    slug: "nocturnal-garden-design",
    oldUrl: "https://www.savageldn.co.uk/post/nocturnal-garden-design",
    category: "Lighting design",
    excerpt: "Historic writing on how outdoor spaces can be planned to work after dark.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "What to Expect from a Garden Consultation",
    slug: "garden-consultation",
    oldUrl: "https://www.savageldn.co.uk/post/garden-consultation",
    category: "Historic process",
    excerpt: "An archived overview of the former practice's consultation and briefing process.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "The January Sanctuary: Designing for Scent, Sight and Survival in 2026",
    slug: "designing-for-scent",
    oldUrl: "https://www.savageldn.co.uk/post/designing-for-scent",
    category: "Seasonal design",
    excerpt: "Archived writing on sensory design, resilience and January planting.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Plant of the Month – January: Hart's Tongue Fern",
    slug: "january",
    oldUrl: "https://www.savageldn.co.uk/post/january",
    category: "Plant of the month",
    excerpt: "Historic plant notes on an evergreen native suited to shade.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Creative Garden Patio Designs for Every Home",
    slug: "creative-gardens",
    oldUrl: "https://www.savageldn.co.uk/post/creative-gardens",
    category: "Garden design archive",
    excerpt: "Archived patio-design inspiration from the former practice.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Shoot Gardening: A Professional Designer's Review",
    slug: "shoot-gardening-review",
    oldUrl: "https://www.savageldn.co.uk/post/shoot-gardening-review",
    category: "Technology · Horticulture",
    date: "10 December 2025",
    readTime: "1 minute",
    excerpt:
      "How structured plant data helped connect visual garden design with horticultural performance and long-term delivery decisions.",
    status: "archive",
    contentStatus: "complete",
    heroImage: "/images/blog/shoot-gardening-mood-board.jpg",
    imageCaption: "Modern Cottage Garden mood board from the original article.",
    content: [
      "Shoot Gardening bridged the gap between creative design and the practical realities of horticulture. Strong visuals could communicate atmosphere, but the garden's long-term success depended on accurate plant and site data.",
      "The former practice needed more than a plant database: it needed a professional planning system capable of managing detailed planting palettes for physical London projects and remote design work across the UK.",
      "Shoot Gardening became the planning engine behind that process, helping match design choices with soil, light, growth and maintenance requirements before delivery.",
    ],
  },
  {
    title: "Decking Benefits for Your Home: Advantages and Installation Tips",
    slug: "decking-benefits",
    oldUrl: "https://www.savageldn.co.uk/post/decking-benefits",
    category: "Materials · Delivery",
    excerpt: "Archived writing on decking choices and practical installation considerations.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Choosing the Best Garden Benches",
    slug: "perfect-garden-bench",
    oldUrl: "https://www.savageldn.co.uk/post/perfect-garden-bench",
    category: "Garden design archive",
    excerpt: "Historic guidance on selecting a garden bench for place, use and material.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Choosing the Perfect Conifer for Your Garden: A Comprehensive Guide",
    slug: "choosing-the-perfect-conifer-for-your-garden-a-comprehensive-guide",
    oldUrl:
      "https://www.savageldn.co.uk/post/choosing-the-perfect-conifer-for-your-garden-a-comprehensive-guide",
    category: "Plant knowledge",
    excerpt: "Archived planting guidance on form, scale, conditions and long-term suitability.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Creating Your Ideal Garden Planting Plan",
    slug: "creating-your-ideal-garden-planting-plan",
    oldUrl: "https://www.savageldn.co.uk/post/creating-your-ideal-garden-planting-plan",
    category: "Planting design",
    excerpt: "Historic writing on turning site conditions and preferences into a planting plan.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Transforming Your Small South London Garden into a Green Oasis",
    slug: "plant-health-tips",
    oldUrl: "https://www.savageldn.co.uk/post/plant-health-tips",
    category: "Plant knowledge · London",
    excerpt: "Archived guidance on plant health and compact South London gardens.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
  {
    title: "Celebrate the Hibiscus: Your Guide to This Vibrant Flower",
    slug: "september-plant-of-the-month",
    oldUrl: "https://www.savageldn.co.uk/post/september-plant-of-the-month",
    category: "Plant of the month",
    excerpt: "Historic plant writing on hibiscus, its character and growing requirements.",
    status: "archive",
    contentStatus: "complete",
    content: pendingContent,
  },
];

export const blogPosts: BlogPost[] = postMetadata.map((post) => {
  const recovered = archiveArticles.find((article) => article.slug === post.slug);
  return {
    ...post,
    contentStatus: "complete",
    content: recovered?.blocks?.length ? recovered.blocks : post.content,
  };
});

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
import archiveArticles from "./blogArchive.generated.json";
