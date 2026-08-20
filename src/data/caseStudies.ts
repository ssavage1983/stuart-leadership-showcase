export type GalleryItem = { src: string; alt: string; caption: string; type?: "video" };
export type CaseStudy = {
  title: string;
  slug: string;
  location: string;
  category: string;
  excerpt: string;
  archiveStatus: "Historic project record" | "Archive case study" | "Delivery evidence";
  image: string;
  sections: {
    context: string;
    brief: string;
    deliveryApproach: string;
    materialsLogisticsCoordination: string;
    outcome: string;
  };
  details: string[];
  gallery: GalleryItem[];
};
const p = (name: string) => `/images/portfolio/${name}`;
const g = (name: string, alt: string, caption: string, type?: "video"): GalleryItem => ({
  src: p(name),
  alt,
  caption,
  type,
});
const sections = (
  context: string,
  brief: string,
  delivery: string,
  materials: string,
  outcome: string,
) => ({
  context,
  brief,
  deliveryApproach: delivery,
  materialsLogisticsCoordination: materials,
  outcome,
});

export const caseStudies: CaseStudy[] = [
  {
    title: "Marlborough Mews: A Tropical Garden in Brixton",
    slug: "marlborough-mews-sanctuary-brixton",
    location: "Brixton, London",
    category: "Tropical planting · Reclaimed materials",
    archiveStatus: "Historic project record",
    excerpt:
      "A compact mews garden organised around clay pavers, gravel, reclaimed sleepers and layered tropical planting.",
    image: p("marlborough-mews-tropical-garden-and-herringbone-paving.jpg"),
    sections: sections(
      "A compact plot requiring a coherent route through dense planting.",
      "Create a private tropical garden that remained useful after dark.",
      "A controlled paving fall, recessed access cover and ground-level beds kept the plot visually open.",
      "Lugano clay pavers, Spanish Gold gravel and reclaimed sleepers were installed before compost and specimen planting.",
      "The archive records a herringbone route, informal gravel, mature foliage and warm lighting.",
    ),
    details: [
      "Paving set to an approximate 1:80 fall with recessed access cover.",
      "11.8 m² of 204 × 50 × 60 mm Lugano clay pavers.",
      "23 m² of 12–20 mm Spanish Gold gravel with metal edging.",
      "32 reclaimed railway sleepers, approximately 2,600 × 250 × 125 mm.",
      "Approximately 2,400 litres of compost and a Dicksonia antarctica tree fern.",
    ],
    gallery: [
      g(
        "marlborough-mews-tropical-garden-and-herringbone-paving.jpg",
        "Tropical Brixton garden with herringbone clay paving",
        "Herringbone paving, gravel and tropical planting.",
      ),
      g(
        "marlborough-mews-tropical-gravel-path-at-night.jpg",
        "Tropical gravel path illuminated at night",
        "The gravel route under warm night lighting.",
      ),
      g(
        "marlborough-mews-mature-tropical-planting-and-lighting.png",
        "Mature tropical planting with warm lighting",
        "Established planting and lighting.",
      ),
      g(
        "marlborough-mews-tropical-garden-night-cocktails.jpeg",
        "Tropical garden arranged for evening drinks",
        "The garden used as an evening seating space.",
      ),
    ],
  },
  {
    title: "Gayville: Shadow-Gap Timber and Built-In Seating",
    slug: "gayville-zen-sanctuary-balham",
    location: "Balham, London",
    category: "Timber detailing · Entertaining",
    archiveStatus: "Archive case study",
    excerpt:
      "A tightly programmed garden centred on a shadow-gap timber screen, built-in seating, stone and warm lighting.",
    image: p("gayville-balham-view-through-bifold-doors.jpg"),
    sections: sections(
      "The rear garden was viewed directly through wide bifold doors.",
      "Deliver a calm, private entertaining garden within a three-week programme.",
      "A continuous timber veil concealed posts and aligned seating, paving and planting.",
      "Dove Grey sawn sandstone, walnut-toned decking, bespoke timber, seating and low-voltage lighting.",
      "The archive shows a unified daytime view and intimate evening setting.",
    ),
    details: [
      "Three-week delivery programme recorded in the project source.",
      "Bespoke timber boundary treatment with an approximately 5 mm shadow gap.",
      "Dove Grey sawn sandstone paving.",
      "Walnut-toned decking with a custom finish.",
      "Low-voltage lighting around the seating and planting.",
    ],
    gallery: [
      g(
        "gayville-balham-view-through-bifold-doors.jpg",
        "Balham garden viewed through bifold doors",
        "View towards the timber screen and seating.",
      ),
      g(
        "gayville-balham-built-in-bench-and-planting.jpg",
        "Built-in bench with planting and lighting",
        "Built-in seating and layered planting.",
      ),
      g(
        "gayville-balham-buddha-and-night-lighting.jpg",
        "Buddha feature beside illuminated planting",
        "Night view of the feature, deck and lighting.",
      ),
    ],
  },
  {
    title: "Greenwich Modern Cottage Garden",
    slug: "modern-cottage-greenwich",
    location: "Greenwich, London",
    category: "Cottage planting · Family garden",
    archiveStatus: "Historic project record",
    excerpt:
      "A long family garden combining fruit trees, lawn, clay paving and generous cottage-style planting.",
    image: p("greenwich-modern-cottage-garden-overview.jpg"),
    sections: sections(
      "A long walled garden needed to retain a family lawn and playhouse.",
      "Add a softer modern-cottage character and seasonal interest.",
      "Generous planting drifts softened structural lines while lawn and paths maintained family use.",
      "Clay paving, ferns, hydrangeas, hostas, lupins, heucheras and established fruit trees.",
      "The archive shows the lawn, playhouse, paving and shade-tolerant planting.",
    ),
    details: [
      "Family lawn retained as the central open space.",
      "Playhouse and fruit trees incorporated into the long view.",
      "Clay paving used at the near terrace and far threshold.",
      "Plant palette checked against site conditions.",
      "Plant references included Anemone, Geranium 'Rozanne' and Calamagrostis.",
    ],
    gallery: [
      g(
        "greenwich-modern-cottage-garden-overview.jpg",
        "Long cottage garden with lawn and playhouse",
        "The long view towards the playhouse.",
      ),
      g(
        "greenwich-family-garden-playhouse-fruit-tree-and-lawn.png",
        "Family garden with fruit tree and playhouse",
        "Lawn, fruit tree and playhouse.",
      ),
      g(
        "greenwich-modern-cottage-shade-planting-detail.jpg",
        "Shade planting with ferns and hostas",
        "Foliage texture with white and purple flowers.",
      ),
    ],
  },
  {
    title: "Brixton Urban Jungle and Integrated Seating",
    slug: "brixton-garden-jungle-transformation",
    location: "Brixton, London",
    category: "Urban planting · Integrated seating",
    archiveStatus: "Delivery evidence",
    excerpt:
      "A compact garden using retained levels, timber seating, privacy screening and bold foliage.",
    image: p("brixton-urban-jungle-tree-ferns-and-integrated-bench.png"),
    sections: sections(
      "A constrained SW2 garden needed privacy and useful seating.",
      "Create an urban-jungle atmosphere for dining and evening use.",
      "Reclaimed brick and sleepers organised the levels; integrated seating reduced loose furniture.",
      "Reclaimed masonry, oak sleepers, slatted screens, 12 V lighting, tree ferns and silver birch.",
      "Day and night views show planting density, uplighting and festoon light.",
    ),
    details: [
      "Tiered construction using reclaimed brick and oak sleepers.",
      "Integrated timber seating and dining area.",
      "Slatted privacy screening.",
      "Tree ferns, silver birch and foliage-led planting.",
      "12 V warm uplighting and festoon lights.",
    ],
    gallery: [
      g(
        "brixton-urban-jungle-tree-ferns-and-integrated-bench.png",
        "Tree ferns around an integrated bench",
        "Dense planting around integrated seating.",
      ),
      g(
        "brixton-urban-jungle-warm-evening-lighting.png",
        "Seating with warm evening uplighting",
        "The seating area at dusk.",
      ),
      g(
        "brixton-urban-jungle-night-lighting-and-festoon-lights.png",
        "Urban garden with night lighting",
        "Night lighting and festoon lights.",
      ),
    ],
  },
  {
    title: "Dulwich Tiered Garden for Evening Entertaining",
    slug: "dulwich-garden-transformation",
    location: "Dulwich, London",
    category: "Multi-level garden · Entertaining",
    archiveStatus: "Archive case study",
    excerpt:
      "A multi-level garden organised for dining, seating and evening use through brickwork, planting and warm lighting.",
    image: p("dulwich-tiered-garden-evening-dining-and-entertaining.png"),
    sections: sections(
      "Level changes offered separate dining and seating areas.",
      "Support larger gatherings without losing planting depth.",
      "Reclaimed-brick walls defined levels and linked dining, lawn and upper seating.",
      "Tumbled Mint sandstone, Cotswold clay pavers, double-slatted fencing and 2700 K lighting.",
      "The terraces support dining, fire-bowl seating and larger gatherings.",
    ),
    details: [
      "Reclaimed-brick retaining walls.",
      "Tumbled Mint sandstone and Cotswold clay pavers.",
      "Double-slatted boundaries.",
      "Integrated bin screening and vertical planting.",
      "Warm 2700 K lighting across walls, steps and planting.",
    ],
    gallery: [
      g(
        "dulwich-tiered-garden-evening-dining-and-entertaining.png",
        "Tiered garden arranged for evening dining",
        "Dining and seating across two levels.",
      ),
      g(
        "dulwich-tiered-garden-fire-bowl-and-seating.png",
        "Garden with fire bowl and layered planting",
        "Upper seating, fire bowl and lawn.",
      ),
      g(
        "dulwich-tiered-garden-planting-and-lighting.png",
        "Brick borders with planting and lighting",
        "Brick levels and warm boundary lighting.",
      ),
    ],
  },
  {
    title: "Balham Pergola Walkway and Garden Rooms",
    slug: "balham-pergola-walkway",
    location: "Balham, London",
    category: "Pergola · Spatial planning",
    archiveStatus: "Delivery evidence",
    excerpt:
      "A long modular pergola used to create rhythm, privacy and a sequence of garden rooms.",
    image: p("balham-pergola-walkway-festoon-lights-at-night.jpg"),
    sections: sections(
      "The long plot needed a stronger route and privacy.",
      "Connect seating, lawn and planting without dividing the garden.",
      "A repeated cube structure, slats, climbers and lighting established the main axis.",
      "Timber, Raj Green sandstone, concealed utilities, drainage, lawn and lighting.",
      "The design view and night photograph preserve the planned arrangement.",
    ),
    details: [
      "Modular pergola approximately 2 m high, 9 m long and 1.8 m wide.",
      "24.84 m² of 600 × 600 × 22 mm Raj Green sandstone.",
      "Utilities, access covers and gullies coordinated with the paving.",
      "Double-slatted boundaries and an approximately 2.8 m raised planter.",
      "Approximately 150 mm excavation and 40 mm prepared lawn layer.",
    ],
    gallery: [
      g(
        "balham-pergola-walkway-festoon-lights-at-night.jpg",
        "Pergola walkway with climbers and festoon lights",
        "The planted walkway at night.",
      ),
      g(
        "balham-pergola-walkway-design-visualisation.png",
        "Design visualisation of pergola and lawn",
        "Archive design visualisation.",
      ),
    ],
  },
  {
    title: "Balham Cottage Courtyard for Family Use",
    slug: "balham-cottage-courtyard-garden",
    location: "Balham, London",
    category: "Courtyard · Family garden",
    archiveStatus: "Historic project record",
    excerpt:
      "A family courtyard balancing safe circulation, cottage planting, masonry planters and dining space.",
    image: p("balham-cottage-courtyard-daytime-dining-and-raised-planters.jpg"),
    sections: sections(
      "The enclosed courtyard needed to work for family dining and children.",
      "Improve safety and usability while retaining cottage character.",
      "A reinforced base and brick planters organised the edges around a clear paved centre.",
      "Tumbled limestone, facing bricks, waterproofing, topsoil, gravel, planting and lighting.",
      "The archive records daylight, dusk and evening use.",
    ),
    details: [
      "Reinforced raised base approximately 2.90 × 2.80 m.",
      "28.2 m² of 600 × 400 × 30 mm Dijon tumbled limestone.",
      "Kerakoll Fugabella Colour 43 joints and Lithofin sealant.",
      "Approximately 500 cottage facing bricks with planter waterproofing.",
      "Child-conscious planting included Siberian bugloss and alliums.",
    ],
    gallery: [
      g(
        "balham-cottage-courtyard-daytime-dining-and-raised-planters.jpg",
        "Courtyard with dining and raised brick planters",
        "Daytime dining area and planted edges.",
      ),
      g(
        "balham-cottage-courtyard-dusk-lighting-and-alliums.jpg",
        "Courtyard with alliums and lighting",
        "Alliums and warm dusk lighting.",
      ),
      g(
        "balham-cottage-courtyard-evening-fire-pit.jpg",
        "Courtyard with fire bowl at night",
        "Evening use around the fire bowl.",
      ),
    ],
  },
  {
    title: "Tooting Bec Japanese-Inspired Garden",
    slug: "zen-sanctuary-tooting-bec",
    location: "Tooting Bec, London",
    category: "Japanese influence · Planting",
    archiveStatus: "Archive case study",
    excerpt:
      "A compact retreat shaped by a pale gravel path, framed views, specimen trees and restrained night lighting.",
    image: p("tooting-bec-japanese-garden-wisteria-and-seating.jpg"),
    sections: sections(
      "The compact garden needed a calmer identity and slower route.",
      "Create framed views and a contemplative seating area.",
      "A pale gravel route moved through layered planting towards the seating.",
      "Beige sandstone planks, Spanish Gold gravel, Acers, hostas, evergreens, wisteria and lighting.",
      "The archive shows the path and planting from daylight into night.",
    ),
    details: [
      "Beige sawn-sandstone plank paving.",
      "12–20 mm Spanish Gold gravel.",
      "Framed sightlines towards seating.",
      "Acer trees, hostas, clipped forms and flowering climbers.",
      "Focused warm lighting rather than general floodlighting.",
    ],
    gallery: [
      g(
        "tooting-bec-japanese-garden-wisteria-and-seating.jpg",
        "Garden with wisteria, hostas and seating",
        "Wisteria framing the seating area.",
      ),
      g(
        "tooting-bec-japanese-garden-gravel-path-and-climbers.jpg",
        "Gravel path bordered by hostas and climbers",
        "The pale gravel path in daylight.",
      ),
      g(
        "tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg",
        "Seating garden under warm lighting",
        "Specimen planting illuminated at night.",
      ),
      g(
        "tooting-bec-japanese-garden-gravel-path-at-night.jpg",
        "Gravel path illuminated at night",
        "The path and climbers after dark.",
      ),
    ],
  },
  {
    title: "Walworth Front and Rear Garden Renewal",
    slug: "walworth-sanctuary",
    location: "Walworth, London",
    category: "Front and rear garden · Privacy",
    archiveStatus: "Historic project record",
    excerpt:
      "A paired project combining a practical entrance, concealed storage, planting and an illuminated rear garden.",
    image: p("walworth-rear-garden-privacy-planting-and-lighting.png"),
    sections: sections(
      "Front and rear spaces had different access, storage and privacy needs.",
      "Improve the entrance and create a private rear garden.",
      "Separate sub-bases supported crisp entrance thresholds and a planted, levelled rear space.",
      "Kandla Grey porcelain, Lugano clay pavers, coping, steel gate, two gravels and timber screens.",
      "Images retain evidence of front storage and rear night lighting.",
    ),
    details: [
      "Front and rear sub-bases prepared separately.",
      "Kandla Grey porcelain with clay-paver detailing.",
      "Stone coping and black powder-coated steel gate.",
      "Spanish Gold and Polar Ice gravel.",
      "Slatted bin storage, vertical planting and warm lighting.",
    ],
    gallery: [
      g(
        "walworth-rear-garden-privacy-planting-and-lighting.png",
        "Rear garden with levels and night lighting",
        "The planted rear garden at night.",
      ),
      g(
        "walworth-front-garden-slatted-bin-store-and-planting.jpg",
        "Front garden with slatted bin store",
        "Concealed storage, gravel and planting.",
      ),
    ],
  },
  {
    title: "Clapham Old Town: Entrance and Night Garden",
    slug: "clapham-old-town",
    location: "Clapham, London",
    category: "Front and rear garden · Lighting",
    archiveStatus: "Archive case study",
    excerpt:
      "A coordinated renovation using porcelain, clay detailing, raised planting and linear light.",
    image: p("clapham-old-town-tropical-seating-at-night.png"),
    sections: sections(
      "The entrance and rear garden served different daily uses.",
      "Create a composed entrance and private rear seating garden.",
      "A restrained front route was paired with raised planting and screened seating at the rear.",
      "Kandla Grey porcelain, Lugano clay accents, coping, honed paving, sleepers and lighting.",
      "The photographs show the formal entrance and illuminated rear garden.",
    ),
    details: [
      "Kandla Grey porcelain entrance with Lugano clay border.",
      "Wall cladding and porcelain coping.",
      "Approximately 27.3 m² of honed Kandla Grey rear paving.",
      "Raised sleeper planter and slatted trellis.",
      "Linear LED strip and focused ground lights.",
    ],
    gallery: [
      g(
        "clapham-old-town-front-garden-porcelain-path-and-coping.png",
        "Front garden with porcelain path and coping",
        "The formal street entrance.",
      ),
      g(
        "clapham-old-town-tropical-seating-at-night.png",
        "Rear garden with illuminated seating",
        "Tropical seating and linear light.",
      ),
      g(
        "clapham-old-town-linear-led-wall-lighting.png",
        "Linear lighting beneath timber screening",
        "Detail of the warm LED line.",
      ),
    ],
  },
  {
    title: "Tooting Bec Geometric Garden Harmony",
    slug: "geometric-harmony-tooting-bec",
    location: "Tooting Bec, London",
    category: "Geometric planning · Level changes",
    archiveStatus: "Delivery evidence",
    excerpt:
      "A multi-level garden organised with a circular lawn, curved beds, sleeper walls and connected terraces.",
    image: p("tooting-bec-geometric-garden-night-lighting.png"),
    sections: sections(
      "The sloping plot required retaining work and connected levels.",
      "Introduce a circular lawn, curved planting and distinct seating places.",
      "Oak-sleeper walls stabilised transitions around the circular lawn and beds.",
      "Multi-Mint sandstone, oak sleepers, tested topsoil, quartz gravel and mature planting.",
      "The still and cinematic tour preserve the geometric relationship.",
    ),
    details: [
      "Oak-sleeper retaining walls.",
      "Tumbled Multi-Mint Indian sandstone.",
      "Circular lawn and curved upright-sleeper beds.",
      "BS 3882:2015 topsoil with Heritage Quartz gravel.",
      "Mature shade planting, climbers and specimen trees.",
    ],
    gallery: [
      g(
        "tooting-bec-geometric-garden-night-lighting.png",
        "Multi-level geometric garden at night",
        "Curved lawn, beds and terraces.",
      ),
      g(
        "tooting-bec-geometric-garden-cinematic-tour.mp4",
        "Cinematic tour of the geometric garden",
        "Archive cinematic garden tour.",
        "video",
      ),
    ],
  },
];

export const findCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
