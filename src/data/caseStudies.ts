export interface CaseStudy {
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
  {
    slug: "marlborough-mews",
    title: "Marlborough Mews: A Tropical Microclimate - Small Tropical Garden Brixton",
    location: "Brixton SW2, London",
    completionDate: "May 2025",
    archiveStatus: "Completed prior to the closure of SAVAGELDN/Moonlight in May 2026.",
    excerpt: "Demonstrated operational leadership in refurbishing a Brixton garden into a tropical sanctuary, utilising digital twin 3D modelling for spatial optimisation and managing complex stakeholder relationships to deliver a resort-inspired microclimate for our historic portfolio. Additionally, I designed immersive 3D walkthroughs and comprehensive 2D site plans detailing materials and layout specifications.",
    challenge: "Navigated supply chain disruptions for exotic flora and ensured strict health & safety compliance, applying meteorological data to design a shaded tropical garden with proper soil depth and drainage.",
    hardLandscaping: "Managed physical logistics and vendor management for reclaimed sleepers and Lugano clay pavers, ensuring structural engineering compliance and utilising Floorplanner.com spatial planning for ground-level beds and Spanish gold gravel finish.",
    softscaping: "Drawing from botanical expeditions in the Colombian Amazon, selected diverse palm species, Musa basjoo, and Tree ferns, tracking soil pH via ShootGardening.com to ensure jungle adaptations for exotic flora.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a unique and private outdoor sanctuary with a 'holiday at home' vibe.",
    image: "/images/portfolio/marlborough-mews-tropical-garden-and-herringbone-paving.jpg",
    additionalImages: [
      { src: "/images/portfolio/marlborough-mews-tropical-garden-night-cocktails.jpeg", caption: "Evening view highlighting the illuminated path and exotic foliage." }
    ].filter(img => img.src)
  },
  {
    slug: "the-modern-cottage",
    title: "The Modern Cottage",
    location: "Greenwich SE10, London",
    completionDate: "September 2025",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Directed the operational delivery of a 'Modern Cottage' urban garden in Greenwich, leveraging digital twin 3D modelling to balance soft, romantic aesthetics with low-maintenance requirements, while managing stakeholder expectations for this historic project. As part of the design process, I produced full 2D site plans for layouts and materials, alongside realistic 3D walkthroughs.",
    challenge: "Overcame supply chain disruptions for heritage materials while maintaining strict health & safety compliance, utilising meteorological data to ensure low-maintenance drift planting thrived in an urban context.",
    hardLandscaping: "Coordinated physical logistics and vendor management for London Mixture Clay Pavers and Jackson's Fencing, ensuring structural engineering compliance for a new listed wall, aided by Floorplanner.com spatial planning.",
    softscaping: "Inspired by high-altitude flora in Nepal, selected Calamagrostis x acutiflora and Pittosporum balls, tracking soil pH via ShootGardening.com to ensure drought adaptations and sculptural winter structure for cottage plants.",
    outcome: "Achieved project delivery through rigorous quality assurance and successful risk management, creating an urban Modern Cottage that reads soft and romantic without high upkeep.",
    image: "/images/portfolio/greenwich-modern-cottage-garden-overview.jpg",
    additionalImages: [
      { src: "/images/portfolio/greenwich-modern-cottage-shade-planting-detail.jpg", caption: "Evening view showing the warm lighting along the garden path." }
    ].filter(img => img.src)
  },
  {
    slug: "pergola-walkway",
    title: "Pergola Walkway: A Modern Nocturnal Sanctuary",
    location: "Balham SW12, London",
    completionDate: "May 2025",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Led the operational transformation of a Balham garden featuring a ModBlox pergola, utilising digital twin 3D modelling for utility integration and managing complex stakeholder relationships to ensure seamless historic project execution. The design phase included creating detailed 3D walkthroughs and complete 2D site plans to map out materials and layout.",
    challenge: "Managed supply chain disruptions for bespoke ModBlox components and enforced strict health & safety compliance during excavation, applying meteorological data to integrate drainage for level artificial turf.",
    hardLandscaping: "Directed physical logistics and vendor management for a ModBlox pergola and Raj Green sandstone, ensuring structural engineering compliance for recessed drainage and utilising Floorplanner.com spatial planning for raised beds.",
    softscaping: "Leveraging botanical research in India, selected White Jasmine and Purple Clematis, tracking soil pH via ShootGardening.com to ensure drought adaptations for established climbing plants alongside premium artificial grass.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a stunning Balham garden transformation featuring a ModBlox pergola and sandstone paving.",
    image: "/images/portfolio/balham-pergola-walkway-design-visualisation.png",
    additionalImages: [
      { src: "/images/portfolio/balham-pergola-walkway-festoon-lights-at-night.jpg", caption: "Evening view of the secluded sanctuary with atmospheric pergola lighting." }
    ].filter(img => img.src)
  },
  {
    slug: "jungle-garden-transformation",
    title: "Jungle Garden Transformation",
    location: "Brixton SW2, London",
    completionDate: "May 2024",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Executed operational leadership for a dramatic urban overhaul in Brixton, using digital twin 3D modelling to design a multi-layered 'Jungle Sanctuary' and coordinating complex stakeholder relationships to deliver structural masonry for this historic project. I also developed in-depth 2D site plans for material selection and layout, coupled with engaging 3D walkthroughs.",
    challenge: "Navigated supply chain disruptions for reclaimed masonry and ensured strict health & safety compliance during tiered wall construction, applying meteorological data to create a secluded, high-impact retreat.",
    hardLandscaping: "Managed physical logistics and vendor management for reclaimed brick and natural stone, ensuring structural engineering compliance for tiered retaining walls, supported by Floorplanner.com spatial planning for bespoke timber seating.",
    softscaping: "Drawing from jungle expeditions in South America, selected dense, architectural planting including Silver Birch and Ferns, tracking soil pH via ShootGardening.com to ensure lush jungle adaptations for tropical-inspired softscaping.",
    outcome: "Achieved project delivery through rigorous quality assurance and successful risk management, creating a vibrant, multi-layered 'Jungle Sanctuary' with tiered retaining walls.",
    image: "/images/portfolio/brixton-urban-jungle-tree-ferns-and-integrated-bench.png",
    additionalImages: [
      { src: "/images/portfolio/brixton-urban-jungle-warm-evening-lighting.png", caption: "Evening view showcasing the illuminated tropical-inspired planting and seating area." }
    ].filter(img => img.src)
  },
  {
    slug: "cottage-courtyard-garden",
    title: "Cottage Courtyard Garden",
    location: "Balham SW12, London",
    completionDate: "July 2025",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Managed the operational delivery of a child-friendly cottage courtyard in Balham, employing digital twin 3D modelling to optimise play space and navigating stakeholder relationships to ensure practical, safe outdoor living in this past project. Furthermore, the project featured custom 3D walkthroughs and precise 2D site plans to finalize layouts and materials.",
    challenge: "Overcame supply chain disruptions for Dijon limestone and enforced strict health & safety compliance for child-safe features, utilising meteorological data to ensure practical, low-maintenance outdoor living.",
    hardLandscaping: "Coordinated physical logistics and vendor management for Dijon tumbled limestone, ensuring structural engineering compliance for bespoke reclaimed brick planters, utilising Floorplanner.com spatial planning for raised seating.",
    softscaping: "Inspired by botanical research in the Himalayas, selected Siberian bugloss and giant allium, tracking soil pH via ShootGardening.com to ensure drought adaptations and low-maintenance resilience for child-safe plants.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a practical, child-friendly outdoor living space combining beauty and functionality.",
    image: "/images/portfolio/balham-cottage-courtyard-dusk-lighting-and-alliums.jpg",
    additionalImages: [
      { src: "/images/portfolio/balham-cottage-courtyard-evening-fire-pit.jpg", caption: "Evening view of the child-friendly paradise with integrated lighting." }
    ].filter(img => img.src)
  },
  {
    slug: "the-gayville-road-zen-sanctuary-sw11",
    title: "The Gayville Road Zen Sanctuary (Sw11)",
    location: "Balham SW11, London",
    completionDate: "June 2023",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Demonstrated operational leadership in delivering a high-end 'Nocturnal Sanctuary' in Balham within a strict deadline, utilising digital twin 3D modelling and managing stakeholder relationships to overcome site irregularities for this historic portfolio piece. To guide the build, I provided complete 2D site plans for layouts and materials, as well as dynamic 3D walkthroughs.",
    challenge: "Managed supply chain disruptions for custom fencing materials under an accelerated deadline, ensuring strict health & safety compliance and applying meteorological data to overcome irregular brickwork.",
    hardLandscaping: "Directed physical logistics and vendor management for shadow-gap fencing and Beige Sawn Indian Sandstone, ensuring structural engineering compliance for inbuilt rendered benches, aided by Floorplanner.com spatial planning.",
    softscaping: "Leveraging botanical expeditions in the Colombian Amazon, selected Dicksonia antarctica, Tetrapanax, and diverse palm species, tracking soil pH via ShootGardening.com to ensure jungle adaptations for a nocturnal sanctuary.",
    outcome: "Achieved project delivery through rigorous quality assurance and successful risk management, completing a high-end 'Nocturnal Sanctuary' with custom shadow-gap fencing.",
    image: "/images/portfolio/gayville-balham-view-through-bifold-doors.jpg",
    additionalImages: [
      { src: "/images/portfolio/gayville-balham-built-in-bench-and-planting.jpg", caption: "Evening view of the Nocturnal Sanctuary with seamlessly integrated lighting." }
    ].filter(img => img.src)
  },
  {
    slug: "dulwich-garden-transformation",
    title: "Dulwich Garden Transformation: A Luxury Nocturnal Sanctuary.",
    location: "Dulwich SE21, London",
    completionDate: "September 2024",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Directed the operational execution of a multi-zoned Dulwich garden, leveraging digital twin 3D modelling to manage natural elevations and coordinating complex stakeholder relationships to harmonise social areas with period architecture in this closed project. The conceptual work involved producing 3D walkthroughs and exact 2D site plans to define the material palette and layout.",
    challenge: "Navigated supply chain disruptions for high-quality sandstone and ensured strict health & safety compliance during retaining wall construction, applying meteorological data to manage the garden's natural elevation.",
    hardLandscaping: "Managed physical logistics and vendor management for reclaimed brick and high-quality sandstone, ensuring structural engineering compliance for retaining walls, supported by Floorplanner.com spatial planning for contemporary fencing.",
    softscaping: "Drawing from high-altitude research in Nepal, selected Betula utilis, Hydrangea, and ornamental grasses, tracking soil pH via ShootGardening.com to ensure drought adaptations and robust growth for multi-zoned softscaping.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a multi-zoned garden with a formal dining terrace and integrated lighting.",
    image: "/images/portfolio/dulwich-tiered-garden-planting-and-lighting.png",
    additionalImages: [
      { src: "/images/portfolio/dulwich-tiered-garden-evening-dining-and-entertaining.png", caption: "Evening view highlighting the atmospheric fire pit terrace and lush planting." }
    ].filter(img => img.src)
  },
  {
    slug: "japanese-zen-garden-design",
    title: "Japanese Zen Garden Design",
    location: "Tooting Bec SW17, London",
    completionDate: "September 2023",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Demonstrated executive operational leadership and cross-functional team management in delivering a Japanese-inspired garden retreat in Tooting Bec, integrating digital twin 3D modelling and stakeholder alignment to execute complex pathing for this historic project. My design contributions encompassed full 2D site plans for spatial layouts and materials, plus interactive 3D walkthroughs.",
    challenge: "Overcame supply chain disruptions for specialised gravels and enforced strict health & safety compliance during pathway construction, utilising meteorological data to create a serene, meditative escape.",
    hardLandscaping: "Coordinated physical logistics and vendor management for Beige smooth planks and Spanish gold gravel, ensuring structural engineering compliance for curved pathways, utilising Floorplanner.com spatial planning for oak raised beds.",
    softscaping: "Inspired by botanical expeditions in India, selected Acer trees, shade-loving ferns, and textural groundcover, tracking soil pH via ShootGardening.com to ensure drought adaptations for layered evergreens and structural shrubs.",
    outcome: "Achieved project delivery through rigorous quality assurance and successful risk management, creating a serene, Japanese-inspired Zen garden retreat with meandering gravel paths.",
    image: "/images/portfolio/tooting-bec-japanese-garden-gravel-path-and-climbers.jpg",
    additionalImages: [
      { src: "/images/portfolio/tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg", caption: "Evening view of the Japanese-inspired garden with serene nocturnal lighting." }
    ].filter(img => img.src)
  },
  {
    slug: "clapham-old-town-front-rear-garden-renovation",
    title: "Clapham Old Town – Front & Rear Garden Renovation",
    location: "Clapham Old Town SW4, London",
    completionDate: "July 2025",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Executive operational leadership of a full garden renovation in Clapham Old Town, managing cross-functional teams and stakeholder coordination, utilising digital twin 3D modelling to deliver modern front and rear outdoor spaces in this historic portfolio piece. I created detailed 2D site plans outlining materials and layouts, supported by realistic 3D walkthroughs for client visualization.",
    challenge: "Managed supply chain disruptions for premium porcelain paving and ensured strict health & safety compliance across dual work sites, applying meteorological data to guarantee year-round planting interest.",
    hardLandscaping: "Directed physical logistics and vendor management for Kandla Grey porcelain and Lugano clay pavers, ensuring structural engineering compliance for bespoke brick walls, aided by Floorplanner.com spatial planning.",
    softscaping: "Leveraging botanical research in South America and the Himalayas, selected Musa basjoo, Fatsia, and Salvia, tracking soil pH via ShootGardening.com to ensure drought and jungle adaptations for front and rear spaces.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a full garden renovation with new paving, brickwork, and raised beds.",
    image: "/images/portfolio/clapham-old-town-front-garden-porcelain-path-and-coping.png",
    additionalImages: [
      { src: "/images/portfolio/clapham-old-town-tropical-seating-at-night.png", caption: "Evening view of the private sanctuary illuminated for year-round enjoyment." }
    ].filter(img => img.src)
  },
  {
    slug: "geometric-circles-and-angles",
    title: "Geometric Circles And Angles: A Tiered Garden Transformation",
    location: "Tooting Bec SW17, London",
    completionDate: "November 2024",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Executive operational leadership of a garden refurbishment in Tooting Bec, integrating cross-functional team leadership and stakeholder management, using digital twin 3D modelling to deliver sustainable geometric hardscaping for this closed project. The planning stage was reinforced by my 3D walkthrough designs and comprehensive 2D site plans covering layouts and materials.",
    challenge: "Navigated supply chain disruptions for bespoke oak sleepers and enforced strict health & safety compliance during masonry steps installation, utilising meteorological data for long-term sustainability.",
    hardLandscaping: "Managed physical logistics and vendor management for Tumbled Multi-mint Indian Sandstone and bespoke oak sleepers, ensuring structural engineering compliance for new masonry steps, supported by Floorplanner.com spatial planning.",
    softscaping: "Drawing from botanical expeditions in the Andes, selected Magnolia grandiflora, Dryopteris erythrosora, and Helleborus niger, tracking soil pH via ShootGardening.com to ensure high-altitude and drought adaptations for diverse flora.",
    outcome: "Achieved project delivery through rigorous quality assurance and successful risk management, creating a garden transformation featuring a circular lawn and bespoke oak sleeper raised beds.",
    image: "/images/portfolio/tooting-bec-geometric-garden-day.jpg",
    additionalImages: [
      { src: "/images/portfolio/tooting-bec-geometric-garden-night-lighting.png", caption: "Evening view of the cinematic sanctuary with vibrant illuminated planting." }
    ].filter(img => img.src)
  },
  {
    slug: "the-walworth-sanctuary-se17",
    title: "The Walworth Sanctuary (Se17)",
    location: "Walworth SE17, London",
    completionDate: "October 2025",
    archiveStatus: "Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May 2026)",
    excerpt: "Demonstrated executive operational leadership by directing the transformation of a cluttered urban plot in Walworth, managing complex site logistics and stakeholder coordination, aided by digital twin 3D modelling for spatial planning for this historic portfolio project. Additionally, I delivered precise 2D site plans for layouts and material choices, along with immersive 3D walkthroughs.",
    challenge: "Overcame supply chain disruptions for traditional clay pavers and ensured strict health & safety compliance during concrete slab removal, applying meteorological data to transform an exposed, cluttered plot.",
    hardLandscaping: "Coordinated physical logistics and vendor management for Kandla Grey Porcelain and traditional Lugano Clay Pavers, ensuring structural engineering compliance for dedicated bin storage, utilising Floorplanner.com spatial planning.",
    softscaping: "Inspired by jungle expeditions in the Colombian Amazon, implemented integrated 'Vert' (vertical) planting zones, tracking soil pH via ShootGardening.com to ensure jungle adaptations and structural resilience.",
    outcome: "Delivered project with stringent quality assurance and successful risk management, resulting in a cohesive, multi-textured landscape serving as a functional entrance and private retreat.",
    image: "/images/portfolio/walworth-front-garden-slatted-bin-store-and-planting.jpg",
    additionalImages: [
      { src: "/images/portfolio/walworth-rear-garden-privacy-planting-and-lighting.png", caption: "Evening view highlighting the traditional clay pavers and atmospheric lighting." }
    ].filter(img => img.src)
  },
];
