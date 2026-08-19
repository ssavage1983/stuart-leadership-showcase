export type CaseStudySections = {
  context: string;
  brief: string;
  deliveryApproach: string;
  materialsLogisticsCoordination: string;
  outcome: string;
};

export type CaseStudy = {
  title: string;
  slug: string;
  location: string;
  oldUrl?: string;
  category: string;
  excerpt: string;
  archiveStatus: "Historic project record" | "Archive case study" | "Delivery evidence";
  image?: string;
  sections: CaseStudySections;
  contentStatus: "complete" | "pending-migration";
};

const pendingSections: CaseStudySections = {
  context: "Detailed project context pending migration from Wix/source files.",
  brief: "Detailed project brief pending migration from Wix/source files.",
  deliveryApproach: "Detailed delivery approach pending migration from Wix/source files.",
  materialsLogisticsCoordination:
    "Materials, logistics and coordination detail pending migration from Wix/source files.",
  outcome: "Detailed project outcome pending migration from Wix/source files.",
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Marlborough Mews Tropical Sanctuary — Brixton",
    slug: "marlborough-mews-sanctuary-brixton",
    location: "Brixton, London",
    oldUrl: "https://www.savageldn.co.uk/projects/small-tropical-garden-brixton",
    category: "Former business archive",
    excerpt:
      "A compact urban-jungle refurbishment combining reclaimed materials, tropical planting and structured planning in Brixton.",
    archiveStatus: "Historic project record",
    sections: {
      context:
        "A comprehensive refurbishment of a small Brixton garden, retained as evidence of the former practice's design and delivery work.",
      brief:
        "Create a private, tropical urban-jungle setting within a compact London garden while working with the site's available light and space.",
      deliveryApproach:
        "Ground-level planting beds were used to build visual depth and seclusion, with the planting plan structured in Shoot Gardening to match plants to conditions.",
      materialsLogisticsCoordination:
        "Reclaimed English railway sleepers and Lugano clay pavers from London Stone were combined with tropical plants from Evergreen Exterior Services and Spanish mixed gravel from Stone Warehouse.",
      outcome:
        "The coordinated materials and planting created a unified, private outdoor sanctuary and a clear historic record of design, procurement and delivery decisions.",
    },
    contentStatus: "complete",
  },
  {
    title: "Gayville Garden Sanctuary — Balham",
    slug: "gayville-zen-sanctuary-balham",
    location: "Balham, London",
    oldUrl: "https://www.savageldn.co.uk/projects/gayville-zen-sanctuary-sw11",
    category: "Former business archive",
    excerpt: "A historic project record from the former landscaping practice.",
    archiveStatus: "Archive case study",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Modern Cottage Garden — Greenwich",
    slug: "modern-cottage-greenwich",
    location: "Greenwich, London",
    oldUrl: "https://www.savageldn.co.uk/projects/modern-cottage",
    category: "Former business archive",
    excerpt: "An archived garden project combining cottage character with structured delivery.",
    archiveStatus: "Historic project record",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Urban Jungle Transformation — Brixton",
    slug: "brixton-garden-jungle-transformation",
    location: "Brixton, London",
    oldUrl: "https://www.savageldn.co.uk/projects/brixton-jungle-garden-transformation",
    category: "Former business archive",
    excerpt:
      "A historic record of planting, coordination and delivery in a constrained urban site.",
    archiveStatus: "Delivery evidence",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Garden Renewal & Planting — Dulwich",
    slug: "dulwich-garden-transformation",
    location: "Dulwich, London",
    oldUrl: "https://www.savageldn.co.uk/projects/dulwich-garden-transformation",
    category: "Former business archive",
    excerpt: "An archive case study of a former garden transformation project in Dulwich.",
    archiveStatus: "Archive case study",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Pergola Walkway & Planting — Balham",
    slug: "balham-pergola-walkway",
    location: "Balham, London",
    oldUrl: "https://www.savageldn.co.uk/projects/balham-garden-pergola-walkway",
    category: "Former business archive",
    excerpt: "A historic project record focused on structure, sequencing and site coordination.",
    archiveStatus: "Delivery evidence",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Cottage Courtyard Renewal — Balham",
    slug: "balham-cottage-courtyard-garden",
    location: "Balham, London",
    oldUrl: "https://www.savageldn.co.uk/projects/balham-cottage-courtyard",
    category: "Former business archive",
    excerpt: "An archived courtyard renovation project from the former practice.",
    archiveStatus: "Historic project record",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Japanese-Inspired Retreat — Tooting Bec",
    slug: "zen-sanctuary-tooting-bec",
    location: "Tooting Bec, London",
    oldUrl: "https://www.savageldn.co.uk/projects/tooting-bec-zen-garden",
    category: "Former business archive",
    excerpt: "A historic record of a Japanese-inspired garden retreat.",
    archiveStatus: "Archive case study",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "The Urban Sanctuary — Walworth",
    slug: "walworth-sanctuary",
    location: "Walworth, London",
    oldUrl: "https://www.savageldn.co.uk/projects/the-walworth-sanctuary-se17",
    category: "Former business archive",
    excerpt: "A historic project record preserving evidence of design and delivery.",
    archiveStatus: "Historic project record",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Clapham Old Town Garden",
    slug: "clapham-old-town",
    location: "Clapham, London",
    oldUrl: "https://www.savageldn.co.uk/projects/clapham-old-town",
    category: "Former business archive",
    excerpt: "An archive case study from the former landscaping practice in Clapham Old Town.",
    archiveStatus: "Archive case study",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Geometric Garden Harmony — Tooting Bec",
    slug: "geometric-harmony-tooting-bec",
    location: "Tooting Bec, London",
    oldUrl: "https://www.savageldn.co.uk/projects/tooting-bec-circles",
    category: "Former business archive",
    excerpt: "A historic record of geometric planning and coordinated garden delivery.",
    archiveStatus: "Delivery evidence",
    sections: pendingSections,
    contentStatus: "pending-migration",
  },
  {
    title: "Balham Transformation — End-to-End Delivery",
    slug: "balham-transformation",
    location: "Balham, London",
    category: "Historic archive",
    excerpt:
      "Project planning, phased programme control, procurement and client updates across a constrained London setting.",
    archiveStatus: "Delivery evidence",
    image:
      "https://static.wixstatic.com/media/a005fe_fd16f3b3d7334721b36a59cefa511128~mv2.jpg/v1/fill/w_720,h_420,al_c,q_75,enc_auto/balham-project.jpg",
    sections: {
      context: "A complete historic garden transformation in a constrained London setting.",
      brief: "Coordinate the project from planning through delivery and handover.",
      deliveryApproach:
        "Phased programme control, client communication, site safety and quality checks.",
      materialsLogisticsCoordination:
        "Material procurement and supplier coordination were sequenced around site access.",
      outcome: "A retained record of end-to-end project delivery from the former business.",
    },
    contentStatus: "complete",
  },
  {
    title: "Digital Twin Planning Workflow",
    slug: "digital-twin-workflow",
    location: "Remote planning workflow",
    category: "Planning archive",
    excerpt:
      "A structured planning method combining briefs, 3D visualisation and environmental data.",
    archiveStatus: "Delivery evidence",
    image:
      "https://static.wixstatic.com/media/a005fe_38195cc6234740de88d7877ec4214083~mv2.jpg/v1/fill/w_720,h_420,al_c,q_75,enc_auto/digital-twin.jpg",
    sections: {
      context: "A remote planning workflow retained as evidence of structured decision support.",
      brief: "Reduce ambiguity before physical work began.",
      deliveryApproach: "Translate the brief into visual planning and decision checkpoints.",
      materialsLogisticsCoordination:
        "Use spatial information to identify dependencies before site delivery.",
      outcome: "A clearer record for client decisions and operational planning.",
    },
    contentStatus: "complete",
  },
  {
    title: "Supply Chain & Site Coordination",
    slug: "supply-chain-control",
    location: "London project portfolio",
    category: "Operations archive",
    excerpt:
      "Materials, people, dependencies and standards coordinated across historic live projects.",
    archiveStatus: "Delivery evidence",
    image:
      "https://static.wixstatic.com/media/a005fe_5ecb889aaac5452f99a906260086ae68~mv2.jpg/v1/fill/w_720,h_420,al_c,q_75,enc_auto/supply-chain.jpg",
    sections: {
      context:
        "Former live projects depended on suppliers, materials and people arriving in sequence.",
      brief: "Maintain delivery control across several dependencies and changing site conditions.",
      deliveryApproach: "Coordinate the programme, report progress and protect quality standards.",
      materialsLogisticsCoordination:
        "Schedule suppliers and materials against the work programme.",
      outcome: "A historic record of logistics coordination and operational oversight.",
    },
    contentStatus: "complete",
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
