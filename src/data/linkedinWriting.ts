// @ts-nocheck
export type LinkedInWriting = {
  title: string;
  published: string;
  type: "Newsletter" | "Article";
  description: string;
  url: string;
};

const linkedInArticles = "https://www.linkedin.com/in/stuartsavage/recent-activity/articles/";

export const linkedInWriting: LinkedInWriting[] = [
  {
    title: "Edition 5: The National Expansion: The National Expansion",
    published: "30 March 2026",
    type: "Newsletter",
    description:
      "The fifth edition of the Nocturnal Sanctuary series, retained as historic professional writing.",
    url: linkedInArticles,
  },
  {
    title: "Edition 4: The Spring Awakening & Structural Planning",
    published: "6 March 2026",
    type: "Newsletter",
    description:
      "A technical briefing on spring planning, structure and disciplined delivery decisions.",
    url: linkedInArticles,
  },
  {
    title: "Edition 3: The Architecture of Stillness",
    published: "17 February 2026",
    type: "Newsletter",
    description:
      "A study of planting composition, atmosphere and the quieter architecture of a garden.",
    url: linkedInArticles,
  },
  {
    title: "Edition 2: The Technical Engine",
    published: "3 February 2026",
    type: "Newsletter",
    description:
      "Precision engineering, digital twins and the systems supporting a finished design.",
    url: linkedInArticles,
  },
  {
    title: "Edition 1: Winter Architecture",
    published: "20 January 2026",
    type: "Newsletter",
    description:
      "The opening edition on winter structure, lighting and reclaiming outdoor space after dark.",
    url: linkedInArticles,
  },
  {
    title: "Highland Love: Reclaiming the Artist's Garden After Illness",
    published: "2 January 2026",
    type: "Article",
    description:
      "A personal design story about recovery, place and rebuilding a meaningful garden.",
    url: linkedInArticles,
  },
  {
    title: "From Sketch to Screen — Floorplanner",
    published: "31 December 2025",
    type: "Article",
    description:
      "A practical reflection on translating ideas into a clearer digital planning workflow.",
    url: linkedInArticles,
  },
  {
    title: "Shoot Gardening: A Professional Designer's Review",
    published: "8 December 2025",
    type: "Article",
    description:
      "How structured plant data connected visual design with biological performance and delivery.",
    url: linkedInArticles,
  },
  {
    title: "The Design Gap: Why a Digital Blueprint Is the UK Homeowner's Smartest Investment",
    published: "LinkedIn article",
    type: "Article",
    description:
      "A professional reflection on reducing uncertainty through a clear digital blueprint before delivery.",
    url: "https://www.linkedin.com/pulse/design-gap-why-digital-blueprint-uk-homeowners-smartest-stuart-savage-jvj5f/",
  },
  {
    title: "Shoot Gardening: A Professional Designer's Review",
    url: "https://www.shootgardening.com/articles/shoot-gardening-a-professional-designers-review",
    description: "External publication feature",
  },
  {
    title: "Marlborough Mews: A Tropical Microclimate",
    url: "https://www.shootgardening.com/articles/marlborough-mews-a-tropical-microclimate",
    description: "External publication feature",
  },
  {
    title: "The Weekend Pages: Phil Spencer Feature",
    url: "https://theweekendpages.co.uk/phil-spencer/#50",
    description: "External publication feature",
  },
];


