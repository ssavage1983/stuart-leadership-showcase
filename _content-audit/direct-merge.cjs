const fs = require('fs');
const path = require('path');

const jsonPath = path.join(process.cwd(), 'src', 'data', 'blogArchive.generated.json');
const tsPath = path.join(process.cwd(), 'src', 'data', 'blogPosts.ts');

const rawArchive = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// 1. The Perfect Hand-Crafted Posts
const perfectOverrides = {
    "custom-garden-designs": [
      "Creating a garden that truly reflects your personality and lifestyle is a wonderful journey. When you choose custom garden designs, you open the door to a space that is uniquely yours.",
      "It’s not just about planting flowers or laying paths; it’s about crafting an outdoor sanctuary that brings joy, peace, and beauty to your home. Whether you have a small urban plot or a sprawling backyard, bespoke garden design can transform your outdoor area into a dream come true.",
      "For most clients, the big question is:",
      "How much does bespoke garden design and landscaping actually cost?",
      "Below is a historic breakdown of the design packages and investment guidelines from the former practice, used to help clients match their dream garden to a realistic budget.",
      "Garden Design Packages",
      "The Compact Sanctuary: Engineered for small urban terraces, balconies, and compact city courtyards. Perfect for London flats requiring clever, unhurried spatial resolve.",
      "The Family Estate: Standard residential gardens requiring multi-zone layouts and play zones. Engineered social flow for adults, children, and guests in one coherent design.",
      "The Grand Architecture: Large-scale transformations, heavy terracing, and complex retaining walls. The definitive choice for reimagining substantial multi-level plots.",
      "Why Choose Custom Garden Designs?",
      "Custom garden designs offer something that off-the-shelf solutions simply cannot match. When you commission a designer who understands your vision, your sanctuary becomes a direct reflection of your tastes and needs.",
      "Tailored to Your Lifestyle: Whether you love entertaining guests or need a safe play area, 3D master plans ensure your garden fits your daily life perfectly.",
      "Maximises Space & Potential: A professional designer can make the most of your plot’s size, turning awkward corners into charming features and ensuring capital spent on hardscaping and planting is used wisely.",
      "Increases Property Value: A well-designed garden adds curb appeal and boosts market value. Thoughtful investment in premium materials and lighting dramatically lifts how your property photographs and feels.",
      "Saves Time and Effort: With expert planning, you avoid costly material wastage and endless trial-and-error trips to the garden centre. Imagine stepping outside to an architecture of stillness, where every path and seating area has been thoughtfully placed just for you."
    ],
    "breaking-down-garden-design-costs-in-the-uk": [
      "Transforming an outdoor space into a refined garden sanctuary is a pursuit that many homeowners find deeply rewarding. Yet the journey from concept to completion often prompts a pivotal question: What are the true costs of garden design?",
      "Having guided numerous clients through this process, this guide elucidates the various factors that influence garden design costs in the UK, offering clarity and insight for responsible project budgeting.",
      "Understanding the Components of Garden Design Costs",
      "Garden design costs encompass a spectrum of elements, each contributing to the overall investment required to realise a bespoke outdoor environment. It is essential to appreciate that these costs are not merely financial figures but reflect the quality, craftsmanship, and longevity of the garden created.",
      "At the outset, the design fee itself is a fundamental component. This fee covers the initial consultation, site survey, conceptual sketches, and detailed plans. The complexity of the design, the size of the garden, and the level of detail required all influence this charge.",
      "Following the design phase, the construction costs come into play. These include materials, labour, and any specialist installations such as water features, lighting, or bespoke structures. The choice of materials—whether natural stone, timber, or composite decking—significantly affects the budget. Labour costs also vary depending on the required expertise and the project duration.",
      "Maintenance considerations, though often overlooked in initial budgeting, are equally important. A garden designed with sustainability and ease of upkeep in mind may command a higher upfront cost but will yield savings and satisfaction over time.",
      "Garden Design Costs: What Influences the Price?",
      "Several factors determine the final garden design costs, each deserving careful consideration to ensure the project aligns with both the vision and the budget:",
      "Size and Topography: Larger gardens naturally require more materials and labour, but the terrain also plays a crucial role. Sloping or uneven ground may require additional groundwork, retaining walls, or drainage solutions, all of which increase the cost.",
      "Design Complexity and Features: Intricate designs with multiple zones, bespoke features, or elaborate planting schemes demand more time and specialised skills. For example, incorporating a formal water feature or a bespoke pergola will increase costs compared to a simpler layout.",
      "Material Selection: The choice between premium natural stone and more economical concrete pavers can dramatically alter the budget. Similarly, opting for mature plants rather than seedlings will raise initial costs but accelerate the garden’s maturity.",
      "Labour and Contractor Expertise: Employing highly skilled landscapers and artisans ensures superior results but comes at a higher cost. It is prudent to engage professionals with a proven track record, particularly for complex projects.",
      "Location and Accessibility: Gardens in areas with restricted vehicle access or requiring permits often incur additional logistical expenses.",
      "What is the Average Cost of a Garden Makeover?",
      "To provide a practical framework, here are historic price ranges used by the former practice to manage client expectations in the South West London market:",
      "Basic Garden Makeover: For smaller gardens or straightforward designs, costs generally start from £5,000 to £10,000. This might include simple paving, turfing, and basic planting.",
      "Mid-Range Garden Transformation: More elaborate projects with bespoke features, high-quality materials, and professional planting schemes typically range from £10,000 to £25,000.",
      "High-End Garden Design and Construction: For extensive gardens featuring complex landscaping, premium materials, water features, lighting, and bespoke structures, costs can exceed £25,000 and often reach upwards of £50,000.",
      "Practical Tips for Managing Garden Design Costs",
      "Navigating garden design costs with prudence and foresight can ensure a rewarding outcome without undue financial strain. Here are some actionable recommendations for structural budgeting:",
      "Prioritise Your Needs and Wishes: Begin by listing essential features and those that are desirable but not critical. This clarity helps focus the budget on what matters most.",
      "Opt for Phased Development: If budget constraints exist, consider implementing the garden in stages. This approach allows costs to be spread over time while progressively enhancing the space.",
      "Select Materials Wisely: Balance aesthetics with durability and maintenance. Sometimes, a less expensive material with a similar appearance can achieve the desired effect without compromising quality.",
      "Engage a Professional Early: Early involvement of a garden designer can prevent costly mistakes and optimise the use of space and resources.",
      "Request Detailed Quotes: Ensure all quotes are itemised to understand where funds are allocated. This transparency aids in making informed adjustments.",
      "Historic Practice Pricing Framework",
      "In the former practice, garden design fees were structured to provide a forensic roadmap for project delivery. Full design-and-build projects typically operated with overall garden budgets from £20,000 upwards to deliver architectural finishes, including 2700K lighting, R11 porcelain, bespoke timber fencing, and SuDS-compliant drainage."
    ],
    "greenwich-garden-engineering": [
      "The fundamental failure of amateur landscaping is the dangerous assumption that the ground is static. In South London, the ground is your primary landlord, and it is entirely unforgiving.",
      "In our former practice, our approach to garden engineering was defined by uncompromising sub-base physics. Sinking patios, fractured stonework, and pooling water are not inevitable acts of nature; they are the direct result of rapid, negligent construction and a failure to respect the local topography.",
      "A 3D cinematic render is merely a promise; the physical build is the reality. Delivering elite landscaping requires an uncompromising dedication to structural integrity. We did not guess the ground; we engineered it. By conducting strict topographical site audits, we mapped exact gradient falls and identified structural vulnerabilities long before an excavator arrived. This rigorous pre-construction discipline ensured that capital investment was protected against the notorious volumetric expansion of the South London clay profile.",
      "The Composite Subframe Mandate",
      "When executing complex garden engineering, the practice mandated the installation of rot-proof composite subframes or 6063-T5 structural aluminium for heavy decking and outdoor kitchen integrations. A high-end outdoor kitchen featuring monolithic ceramic heat engines and heavy stainless steel refrigeration cannot be placed on a shifting, organic foundation.",
      "A structural deviance of even 5 millimetres will fracture bespoke masonry, destabilise stone worktops, and compromise gas or electrical lines. By elevating the load-bearing structure above the volatile clay and anchoring it into compacted MOT Type 1 aggregate, we eliminated organic rot, bypassed the shrink-swell cycle of the soil, and guaranteed long-term stability for architectural assets.",
      "Hydraulic Management & Chemical Bonding",
      "Furthermore, precise 1 in 80 drainage gradients were rigorously enforced across all hardscaping. Flat patios are a severe engineering breach; standing water degrades grout lines, generates dangerous algal blooms, and compromises the anti-slip rating of the stone. By calculating the exact fall, surface water was directed into discrete, SuDS-compliant (Sustainable Drainage Systems) resin-bound channels, preventing urban flooding.",
      "The final layer of execution is chemical. R11 porcelain is a vitrified, high-density material with near-zero porosity. Because it repels water, it also repels standard cement. Every single R11 porcelain tile was back-buttered with highly engineered slurry primer. This acts as a chemical bridge, ensuring the bond between the porcelain and the full-bed mortar matrix outlasts the mortgage on the property.",
      "Structural Foundations Checklist",
      "The standard operational procedure for every structural foundation included:",
      "• Excavating past organic topsoil to expose a stable, load-bearing substrate.",
      "• Compacting a mathematically sufficient layer of MOT Type 1 aggregate before laying the mortar bed.",
      "• Enforcing strict 1 in 80 drainage gradients across all hardscaping to prevent water pooling.",
      "• Installing SuDS-compliant resin-bound channels to redirect surface water responsibly.",
      "• Utilising rot-proof composite subframes or 6063-T5 aluminium for heavy decking.",
      "• Back-buttering every R11 porcelain tile with structural primer for a permanent chemical bond.",
      "• Mandating a full-bed mortar matrix to eliminate atmospheric voids, strictly prohibiting dot-and-dab mortar methods.",
      "• Routing all electrical infrastructure using Steel Wire Armoured (SWA) cabling hidden within steel voids.",
      "Ecology & Elemental Health",
      "The nocturnal garden in South London is a crucial haven for the urban ecosystem—foxes, stag beetles, and bats. The practice strictly used 2700K ultra-warm LEDs to prevent cortisol spikes and mimic the restorative amber glow of firelight, ensuring the sanctuary performed effortlessly and sustainably from the moment the sun set."
    ],
    "soft-tree-fern-hydration-guide-2026": [
      "The Biological Engine of the Crown",
      "The Soft Tree Fern (Dicksonia antarctica) serves as the ultimate architectural anchor for any high-performance tropical garden. As we enter the spring awakening, technical discipline must shift toward the precise hydration of the crown.",
      "Unlike standard woody shrubs, the tree fern’s \"trunk\" is actually a vertical rhizome—a pseudo-trunk composed of a central core of modified stems surrounded by a dense, interlocking mat of aerial roots. This month, you must trigger the \"unfurling\" of new green croziers (fronds) by ensuring consistent moisture within this fibrous core.",
      "This moisture serves as the primary conduit for nutrient transport through the xylem, feeding the spectacular biological architecture about to erupt. In the \"Urban Heat Island\" of South London, dry March winds can lead to rapid desiccation; failure to maintain crown saturation can lead to stunted frond growth or \"frond-drop,\" fundamentally compromising the structural integrity and aesthetic density of the canopy. We recommend a slow, top-down saturation technique that allows the moisture to seep through the entire vertical root system.",
      "Fractal Geometry and the Cortisol Drop",
      "There is a profound psychological grounding that occurs when interacting with ancient, prehistoric flora. The dense, repeating fractal patterns of unfurling fern fronds are not merely aesthetic; they are mathematically restorative.",
      "According to Attention Restoration Theory (ART), these complex natural geometries provide \"soft fascination,\" allowing the brain to recover from the \"directed attention fatigue\" of high-pressure urban environments. The deep heritage green tones of a hydrated tree fern—sitting in the most soothing part of the visible light spectrum—have been scientifically proven to lower cortisol levels and heart rates. By integrating these \"Living Sculptures\" into an estate, you are engineering a restorative sanctuary where mental clarity can return after a high-stakes workday, providing a physiological shield against the stresses of modern city life.",
      "Pteridomania and the Kew Legacy",
      "A prehistoric survivor that predates the dinosaurs, the Dicksonia antarctica has a storied history in British horticulture. During the Victorian era, \"Fern-fever\" (Pteridomania) gripped the nation, leading to the creation of elaborate stumperies and shaded ferneries.",
      "These living sculptures were famously used as ballast in the holds of sailing ships returning from the Antipodes, their robust trunks surviving months of darkness and saltwater spray. Upon arrival at the Royal Botanic Gardens, Kew, pioneering botanists realised that these seemingly dead, timber-like trunks could be revived with proper hydration—a testament to a biological resilience spanning millennia. In our former practice, we continued to harness this Victorian sense of adventure and architectural drama, bringing 19th-century horticultural history into the meticulously engineered 21st-century urban estate.",
      "Planting Insights: Frequently Asked Questions",
      "How often should I water the crown of my Soft Tree Fern in March?",
      "As temperatures begin to fluctuate and the plant exits dormancy, the crown should be hydrated 2-3 times per week. During unseasonably warm or windy spells, daily hydration becomes mandatory to ensure the developing fronds remain turgid during the critical unfurling phase.",
      "Can Dicksonia antarctica truly survive a UK winter without damage?",
      "Absolutely. Their prehistoric resilience makes them ideal for the UK climate. However, for total operational security, we recommend \"lagging\" the crown with straw or fleece during prolonged sub-zero temperatures to protect the delicate emerging croziers from frost burn.",
      "Why is my tree fern trunk feeling soft or spongy to the touch?",
      "This is a critical indicator of chronic dehydration. The pseudo-trunk is a living network of roots; if it loses internal moisture pressure, it loses its structural turgidity. Immediate and deep saturation of the entire vertical trunk is required to restore biological integrity.",
      "What is the best position for a tree fern in an urban garden?",
      "They thrive in dappled shade or in \"Vertical Green Envelopes,\" where they are protected from the midday sun. Ideally, they should be sheltered from prevailing winds to prevent the large fronds from becoming physically damaged or desiccated."
    ],
    "the-technical-engine-garden-lighting-design": [
      "In the former practice's design ecosystem, the philosophy was never to merely illuminate a space, but to illuminate its textures. Lighting is a physical medium where the absence of light is just as important as its presence, serving as the atmospheric counterpart to strict structural standards.",
      "The 2700K Mandate for Garden Lighting Design",
      "When engineering high-end garden lighting, the practice strictly mandated the use of 2700K ultra-warm white LEDs. Research indicates that white LED streetlights (over 3000K) can reduce insect populations in hedgerows by up to 52%. By adhering to the 2700K standard, the designs protected the SONAR navigation of the 'Night Shift'—the bats and moths vital to the urban ecosystem—while promoting melatonin production and a calming atmosphere for the residents.",
      "Advanced Garden Lighting Design Techniques",
      "The practice moved beyond simple uplighting to employ sophisticated methods that created depth and drama:",
      "• Moonlighting: Fixtures were hidden high in the tree canopy and directed downwards through the foliage. This cast natural, dappled shadows across the paving, mimicking the effect of a full moon.",
      "• Grazing: Narrow-beam fixtures were placed at acute angles against brick and stone. This highlights the tactile architecture and relief of the material, transforming a flat wall into a textured focal point.",
      "• Silhouetting: Placing light behind structural plants created bold, architectural shadows against perimeter boundaries, adding moody, evocative layers to the space.",
      "Engineering for the British Climate",
      "A lighting system is only as reliable as its weakest connection. The same rigour applied to structural subframes was applied to electrical infrastructure:",
      "• SWA Standard: All cabling was Steel Wire Armoured (SWA), buried to a minimum depth of 450mm to prevent accidental damage during future planting.",
      "• IP68 Protection: Submersible-grade IP68 waterproof junctions were mandated. These connections were designed to endure damp spring conditions and the heavy clay saturation typical of South London.",
      "Operational Stillness",
      "The goal was to ensure gardens glowed with intent. By prioritising harmony over ostentation and mapping precise grazing angles and cable runs, the practice ensured that outdoor spaces transitioned seamlessly from daytime retreats into resilient, nocturnal sanctuaries."
    ],
    "garden-upholstery-kirsty-kissell": [
      "In the former practice's high-end garden designs, there was often a focus on the 'Architecture of Stillness'—the structural integrity of Western Red Cedar screens and the sleek lines of R11 anti-slip porcelain. These elements provided the skeletal framework of a professional landscape, but they required a softer counterpoint to transition a project from a 'site' to a 'sanctuary'. A true professional-grade garden isn't complete until the textures actively invite you to stay and experience the space. This is where premium garden upholstery became the defining element of the design, bridging the gap between cold architecture and human comfort.",
      "Kirsty Kissell Furnishings was a preferred supplier for the practice. Her work represented the pinnacle of handmade craftsmanship in the UK, providing the soft, tactile contrast needed to balance the hard, unapologetic materials of a modern London landscape.",
      "The frustration of dealing with soggy, faded cushions is all too familiar to many garden enthusiasts. Garden cushions that lose their charm and functionality due to harsh elements can turn an outdoor retreat into a source of annoyance.",
      "Why Handmade Garden Upholstery Changes Everything",
      "When designing a nocturnal sanctuary, the aim was a cinematic 19:00 dusk atmosphere. At this hour, under an amber glow of 2700K ultra-warm LEDs, every shadow and texture is magnified. High-street, off-the-shelf cushions often fell flat under this scrutiny; they lacked the density, precision of fit, and fabric depth required for a luxury setting. In contrast, bespoke cushions and textiles retained their form and vibrancy, even in the demanding, damp London climate.",
      "Kirsty Kissell specialised in creating pieces that were as durable as they were beautiful. By focusing on bespoke commissions, she ensures that every item was a unique response to the garden’s layout. Whether it was a monochromatic striped seat pad that echoed the linear rhythm of cedar battening or a vibrant, botanical-print accent cushion that drew the eye, every piece was hand-finished to ensure it complemented specific seating dimensions.",
      "Technical Precision and Durability",
      "The difference between standard outdoor cushions and professional-grade soft furnishings lies in the technical execution of hidden details. High-performance outdoor fabrics offer industry-leading UV resistance and water repellency, while maintaining a handle and softness that rival interior velvet or linen.",
      "• Tailored fit: Each piece was designed to fit custom-built benches perfectly. Unbroken lines. Intentional comfort. This eliminated the awkward gaps and sliding cushions often seen in mass-produced items, ensuring the furniture's lines remained clean and intentional.",
      "• Colour curation and contrast: Whether matching a lilac-painted timber bench or providing a stark, high-contrast pop against a gritstone wall, the ability to choose exact patterns allowed for a fully curated aesthetic essential for maintaining a cohesive project palette.",
      "• The Practice Standard: Kirsty was recommended because her attention to detail aligned with a strict commitment to premium, authentic textures. Every seam was straight, and every zip concealed, reflecting the same precision brought to the structural porcelain paving.",
      "Case Study: The Lilac Bench and Striped Textiles",
      "Without the right soft furnishings, a painted bench can feel ornamental rather than functional. By adding a high-contrast, black-and-white striped seat pad, the bench was immediately grounded in the design. The addition of vibrant floral accent cushions created a layered, lived-in feel that beckoned the user to sit down. This specific application demonstrated how colour theory and textile choice could elevate a simple garden corner into a cinematic focal point.",
      "Furthermore, the inclusion of textured throws—like a deep fuchsia pink mohair-style blanket—added a layer of warmth for cooler London evenings. This ensured the garden remained a viable 'outdoor room' long after the sun went down, reinforcing the concept of the garden as a permanent extension of the home’s interior luxury."
    ],
    "white-flowering-quince": [
      "As we stand on the threshold of February, the urban garden often feels caught in a liminal space—suspended between the skeletal remains of winter and the distant promise of spring. In the grey dampness of a London afternoon, it is easy to overlook the garden entirely. Yet, it is during this precise moment that a true structural hero emerges: the White Flowering Quince (Chaenomeles speciosa 'Nivalis').",
      "The Gnarled History of the White Flowering Quince",
      "Before it became a staple of the sophisticated urban courtyard, the Chaenomeles travelled a long path from the East. Originally native to China and Japan, it has been cultivated for thousands of years. While many associate the word \"Quince\" with the culinary Cydonia oblonga used for Victorian preserves, the White Flowering Quince was the darling of 19th-century plant hunters.",
      "The Historical UK Connection",
      "This plant has deep roots in Lambeth and the South Bank's industrial history. Records from the Royal Botanic Gardens, Kew, show that these specimens were vital components of early London \"collection\" gardens. During the height of the Industrial Revolution, when the soot and \"pea-souper\" fogs of the Thames made gardening nearly impossible, the White Flowering Quince was one of the few species hardy enough to thrive. It decorated the dark brick walls of Victorian Kennington, providing a rare burst of white light amidst the coal smoke of an industrial age.",
      "Biological Resilience & The RHS Award of Garden Merit",
      "From a biological perspective, the plant DNA of the White Flowering Quince is a masterclass in adaptation. Belonging to the Rosaceae family, it shares genetic lineage with roses and apples, which explains its gnarled, protective thorns and waxy, resilient petals. This genetic makeup allows the blooms to withstand sudden frosts that would blacken more delicate spring arrivals.",
      "This variety is highly decorated, frequently holding the RHS Award of Garden Merit (AGM). The Royal Horticultural Society prizes 'Nivalis' for its \"outstanding excellence for ordinary garden decoration and use,\" specifically noting its reliability in the unpredictable British climate. In the former practice, these RHS-vetted specimens were used to ensure planting designs were not just beautiful conceptually, but biologically robust on-site.",
      "A Sanctuary for the Soul: Ecology and Mental Health",
      "There is a profound psychological shift that occurs when spotting the first White Flowering Quince bloom of the year. After months of monochromatic winter, the sight of pure white petals on a freezing morning acts as a biological reset button.",
      "Witnessing the resilience of the Quince—blooming while the frost is still on the ground—reminds us of our own capacity to thrive in harsh conditions. Taking a moment at dusk to watch these white flowers catch the fading light provides a form of 'Nocturnal Meditation', grounding the observer in the slow, certain rhythm of nature.",
      "Design Application: The Tiered Flowering Wall",
      "In bespoke garden schemes, the practice rarely let a Quince grow wild. Instead, the White Flowering Quince was trained as an espalier against bespoke cedar screening or dark-painted boundaries. This technical application created a high-definition architectural feature that maximised vertical interest in compact urban sanctuaries.",
      "• Space Efficiency: By training the branches horizontally, the team created a 'flowering wall'. This provided intense vertical interest without sacrificing the restricted floor space of compact urban plots.",
      "• Nocturnal Shimmer: The 'Nivalis' variety is specifically chosen for its light-reflective properties. These white petals catch the city's ambient light, providing a sophisticated nocturnal glow."
    ],
    "nocturnal-garden-design": [
      "The Daylight Delusion and the Shift in Modern Living",
      "For decades, the landscaping industry has been obsessed with the midday sun—a fleeting, idealistic moment that most working professionals only witness on their lunch break or through a distant office window. But here is the uncomfortable truth for the modern homeowner: you primarily experience your home, and therefore your landscape, in the evenings.",
      "If you work a 9-to-5 or navigate a high-pressure career in the city, your garden is often just a dark, unused void outside your window by the time you get home. It’s more than a missed aesthetic opportunity; it’s a missed opportunity for restoration, wellness, and mental decompression. The traditional 'Daylight Bias' in gardening ignores the reality of our 24-hour lives. A truly valuable outdoor space is a 24-hour sanctuary that bridges the gap between high-end architectural aesthetics and the reality of your daily schedule through innovative nocturnal garden design.",
      "The 'Dead' Garden Dilemma and the Psychology of Space",
      "Think about your current garden after 7 PM. Is it an inviting extension of your living room, or a black hole? When a garden isn't designed specifically for the night, it creates a psychological barrier known as 'The Mirror Effect.' Without external illumination, the glass of your bifold doors or kitchen windows reflects only the interior lights, turning your windows into dark mirrors. This leads to 'Interior Claustrophobia,' where your living space feels significantly smaller and more restrictive because the outdoor area is visually and emotionally inaccessible.",
      "Entering the Enchanting Nocturnal Sanctuary: A Three-Layered Masterclass",
      "In our design philosophy, creating a magical evening experience serves your well-being. This isn't about turning night into day with stadium-level illumination; it is about the mastery of contrast and the subtle play of warm light across three specific layers:",
      "• Shadow & Silhouette: Low-voltage LED spotlights highlight the sculptural forms of multi-stem trees (such as Betula utilis jacquemontii or Acer palmatum). By using specific narrow beam spreads, we uplight the 'skeleton' of the garden, creating verticality and drama. This technique casts dappled shadows across paving, mimicking the natural movement of a forest at midnight.",
      "• Texture & Depth: A garden has a tactile life that only emerges under artificial light. By 'grazing' light across stone walls, bespoke western red cedar fencing, or textured porcelain paving, we emphasise the physical quality of the materials. This rich visual tapestry makes the space feel expensive, hand-crafted, and layered.",
      "• The Emotional Anchor: We focus heavily on the science of the Kelvin scale, almost exclusively using ultra-warm 2700K LEDs. Unlike cold, blue light, this warm glow mimics the soft amber of a sunset or a crackling fire, biologically supporting melatonin production and respecting your natural circadian rhythm as you decompress from a high-pressure office.",
      "The Synergy of Design and Build: A Meticulous Foundation",
      "What sets our philosophy apart is the bridge between the artistic and the authoritative. A pretty render is useless if it isn't backed by the operational discipline required for a high-end build.",
      "A successful project in nocturnal garden design requires specialised subframe engineering. For our London clients, this meant using rot-proof composite subframes that withstand damp city soil and comply with regulatory electrical infrastructure requirements. We used SWA (Steel Wire Armoured) cabling buried to exact depths, connected via IP68 waterproof junctions to ensure your sanctuary functioned perfectly through every British storm. Furthermore, we implemented precise 1:80 drainage gradients to ensure no standing water ruined evening views. When you design for the night, you must build for the decades."
    ],
    "garden-consultation": [
      "Embarking on the journey to transform an outdoor space is a venture that is both exciting and intricate. A garden consultation serves as the pivotal first step in this process, offering clarity, inspiration, and a bespoke plan tailored to your unique environment and aspirations.",
      "As someone deeply invested in crafting exquisite gardens across South West London, understanding what to anticipate during this initial meeting significantly enhances both the experience and the final outcome.",
      "A garden consultation is not merely a casual chat; it is a comprehensive dialogue and assessment that lays the foundation for a successful garden transformation. It is an opportunity to explore your desires, evaluate existing conditions, and begin to envision a harmonious outdoor sanctuary that complements your home and lifestyle.",
      "Garden Consultation Overview: The Initial Meeting",
      "The garden consultation typically begins with a thorough discussion of your preferences, lifestyle, and the practical aspects of your outdoor space. Key considerations before the meeting include:",
      "• Purpose and Use: Will your garden serve as a tranquil retreat, a lively entertaining area, or a family-friendly play space?",
      "• Style Preferences: Are you drawn to formal, contemporary, cottage, or naturalistic garden styles?",
      "• Maintenance Expectations: How much time are you willing to dedicate to upkeep?",
      "• Budget Considerations: Establishing a realistic budget helps guide design choices and material selections.",
      "During the consultation, a detailed site survey is conducted, noting soil quality, sunlight patterns, drainage, and existing vegetation. This technical evaluation is crucial for selecting appropriate plants and materials that will thrive in your garden’s microclimate.",
      "The Importance of Detailed Planning and Design",
      "Following the initial consultation, the next phase involves meticulous planning and the development of the design. This stage is where creativity meets precision, translating insights into detailed drawings, planting plans, and material specifications.",
      "A well-crafted design considers:",
      "• Spatial Organisation: Defining zones for dining, relaxation, play, and gardening.",
      "• Plant Selection: Choosing species that offer seasonal interest, biodiversity, and suitability to the local climate.",
      "• Complex Landscaping Elements: Incorporating paths, patios, water features, and lighting to enhance functionality and aesthetics.",
      "• Sustainability: Employing eco-friendly practices such as rainwater harvesting, native planting, and permeable surfaces.",
      "Preparing for Your Garden Consultation",
      "To ensure a productive and efficient consultation, preparation is key. Recommendations prior to the meeting include:",
      "• Gather Inspiration: Collect images, magazine clippings, or digital boards that reflect your style preferences.",
      "• Measure Your Garden: Having approximate dimensions of your outdoor space aids in initial discussions.",
      "• List Priorities and Challenges: Note any specific requirements or issues such as privacy concerns, drainage problems, or accessibility needs.",
      "By arriving prepared, you enable a focused and fruitful consultation that respects your time and capital investment."
    ],
    "designing-for-scent": [
      "Gardening in the UK is evolving rapidly, with research indicating that hundreds of plant species bloom during the winter months. This shift presents unique opportunities to enjoy outdoor spaces throughout the year.",
      "Establishing the foundation for a garden that looks appealing at night while supporting local wildlife begins with sensory and structural planning during the winter season.",
      "The \"Winter Scent Trail\": A Sensory Masterstroke",
      "January and February can be the most fragrant months in the garden when planned correctly. Establishing a Winter Scent Trail near entrances and pathways maximises sensory impact:",
      "• Daphne bholua ‘Jacqueline Postill’: An evergreen powerhouse with pinkish-white flowers that fill a courtyard with a rich fragrance.",
      "• Sarcococca (Sweet Box): A low-growing plant with intense fragrance whose tiny white flowers glow under low-voltage lighting.",
      "• Viburnum × bodnanense ‘Dawn’: Clusters of sweet pink flowers emerging on bare stems during the coldest weeks.",
      "• Chimonanthus praecox (Wintersweet): A unique shrub offering spicy, intoxicating scents that waft through the evening air.",
      "Nocturnal Luminosity: Plants that Shine at Night",
      "To illuminate a garden at night, selecting plants with light-reflecting bark and foliage is essential. Winter is the prime time to plant bare-root structural specimens:",
      "• Betula (Silver Birch): Specifically Betula utilis subsp. jacquemontii ‘Jermyns’ for its iconic white bark that reflects even the faintest moonlight.",
      "• Prunus serrula: Renowned for its polished, mahogany-like bark providing a rich, reflective surface.",
      "• Snowdrops (Galanthus): Pure white petals that serve as focal points in nocturnal lighting schemes.",
      "• Hellebores: Helleborus niger (Christmas Rose) producing white, cup-shaped flowers that anchor dark corners.",
      "The 2026 \"Edimental\" Trend",
      "Edible ornamentals, or edimentals, allow for the cultivation of plants that are both visually striking and productive:",
      "• Hardy herbs such as Rosemary ‘Miss Jessopp’s Upright’ and Thyme grown in well-drained structural areas.",
      "• Forcing rhubarb crowns early in the year to establish strong spring yields.",
      "Wildlife Care and Protection",
      "Winter conditions make gardens vital refuges for local wildlife through deliberate habitat management:",
      "• Hydration: Ensuring bird baths remain ice-free safely without causing acoustic or thermal shock to aquatic life.",
      "• The \"No-Tidy\" Zone: Leaving seedheads like Teasels, Echinacea, and Alliums standing to provide architectural winter beauty and essential nutrition for goldfinches.",
      "• Habitat Preservation: Maintaining undisturbed log and leaf piles for hibernating amphibians and hedgehogs."
    ],
    "january": [
      "Asplenium scolopendrium, commonly known as Hart’s Tongue Fern, is an exceptional evergreen fern that brings structure and fresh green colour to even the shadiest, coldest corners of the garden during winter.",
      "What Makes the Hart's Tongue Fern Unique?",
      "Unlike many ferns that feature divided or feathery fronds, the Hart's Tongue Fern presents undivided, strap-shaped fronds. This distinctive morphology gives it a bold, architectural appearance that contrasts sharply with finer foliage in shaded plots. Historically, the plant was valued in British folk medicine for its supposed healing properties, adding a layer of traditional heritage to its ornamental utility.",
      "Ideal Growing Conditions",
      "The Hart's Tongue Fern thrives in damp, shady conditions, making it an ideal choice for difficult microclimates with limited direct sunlight and high moisture retention:",
      "• Shade: Partial to full shade is essential; direct sunlight will quickly scorch the fronds.",
      "• Soil: Moist, well-drained soil rich in organic matter supports robust, healthy growth.",
      "• Watering: Keeping the soil consistently damp without waterlogging ensures optimal turgidity, though established plants tolerate occasional dry spells.",
      "• Hardiness: Fully hardy through rigorous UK winters, maintaining its glossy green appearance even in freezing conditions.",
      "Low-Maintenance Benefits",
      "The fern is remarkably practical for low-upkeep garden designs:",
      "• Resilient structural form requiring minimal pruning or feeding.",
      "• Naturally resistant to common garden pests and diseases.",
      "• Slow and steady growth habit, reducing the need for frequent division.",
      "Design Application and Winter Care",
      "This plant works effectively in natural woodland settings, formal shade gardens, or massed as ground cover under mature trees. During the winter months, proper care involves checking soil moisture, removing any damaged or frost-bitten fronds to encourage clean spring growth, and applying a light organic mulch to protect the root system."
    ],
    "creative-gardens": [
      "Transforming an outdoor space into a refined sanctuary requires a thoughtful approach to garden patio design. The garden patio is not merely an extension of the home but a canvas upon which one can express personal style, harmonise with nature, and create a functional retreat.",
      "Creative Gardens: Embracing Patio Design Inspiration",
      "When considering patio design inspiration, it is essential to balance aesthetics with utility. A well-designed patio should complement your home's architectural style while enhancing the natural beauty of your garden. For instance, a classic Victorian terrace might benefit from intricate stonework and wrought iron furniture, whereas a modern townhouse could embrace sleek concrete slabs paired with minimalist planting schemes.",
      "Inspiration can be drawn from various structural elements:",
      "• Natural Materials: Incorporate local stone, reclaimed wood, or terracotta tiles to add texture and warmth.",
      "• Geometric Patterns: Use paving stones arranged in herringbone or basketweave patterns to create visual interest.",
      "• Integrated Lighting: Subtle LED uplights or lanterns can transform the patio into an enchanting evening retreat.",
      "• Water Features: A small fountain or reflecting pool adds a soothing auditory and visual element.",
      "Materials and Layouts: Crafting a Distinctive Patio",
      "The choice of materials and layout is pivotal in defining the character of your garden patio. Each material offers unique benefits, and the layout dictates how the space will be utilised:",
      "• Natural Stone: Durable and elegant, stones such as sandstone, limestone, or granite provide a classic look with natural variations in colour and texture.",
      "• Concrete: Versatile and cost-effective, concrete can be finished or textured to complement modern schemes.",
      "• Wood Decking: Adds warmth and softness beneathfoot, requiring proper subframe engineering and maintenance.",
      "Layout considerations involve evaluating formal versus informal geometries, multi-level terracing to separate functional zones, and ensuring smooth, accessible transitions between indoor living areas and outdoor spaces.",
      "Integrating Greenery and Furnishings",
      "A garden patio is incomplete without thoughtful integration of planting and furnishings, elevating the space from a mere hardscape to a living, breathing environment through container gardening, vertical climbing plants, and weather-resistant modular seating."
    ],
    "shoot-gardening-review": [
      "Shoot Gardening: Bridging the Gap Between Design and Reality",
      "In the world of high-end garden design, the visual reveal is paramount. Clients fall in love with 3D visuals, lighting concepts, and atmospheric renders during the presentation phase. However, the long-term success of a garden—the difference between a space that thrives for decades and one that struggles within a year—relies on rigorous horticultural data.",
      "Throughout years of operating Stuart Savage Landscaping, finding a system that could bridge the gap between creative vision and the practical reality of horticulture was essential. As a designer and builder, the requirement wasn't just a plant database, but a professional management suite capable of handling complex planting palettes for both physical London builds and remote design clients across the UK.",
      "The Practice Review",
      "Shoot Gardening became an integral part of the design process, acting as the back-end engine powering front-end visual designs. The platform addressed the 'Aftercare Gap'—the critical period post-construction where clients often struggle to maintain their investment.",
      "Key Takeaways from the Review:",
      "• Precision Planning: Utilising digital garden planners to map out zoning and layouts remotely with scientific accuracy.",
      "• Scientific Verification: Ensuring plant selections match specific soil pH, aspect, and microclimates.",
      "• Automated Aftercare: Equipping clients with structured maintenance guidance to keep their landscapes thriving long-term.",
      "Read the full review and explore the accompanying visual case studies on LinkedIn."
    ],
    "decking-benefits": [
      "Adding a deck to an outdoor space transforms its usability and aesthetic appeal, creating a stylish, functional area for relaxing and entertaining. Professional decking installation elevates a property’s overall value and everyday enjoyment.",
      "Why Choose Professional Decking Installation?",
      "Decking offers practical advantages that improve lifestyle and boost property value:",
      "• Expands Living Space: A deck extends indoor living outdoors, providing an ideal platform for dining, socialising, or unwinding.",
      "• Low Maintenance: Modern decking materials resist rot, pests, and weathering, requiring minimal upkeep compared to traditional lawns.",
      "• Architectural Aesthetics: Decks introduce clean lines, texture, and warmth, complementing surrounding planting, paths, and paving.",
      "• Increased Property Value: Quality decking represents a sound capital investment that enhances immediate kerb appeal.",
      "The 3-4-5 Rule for Precision Framing",
      "Achieving structural integrity during installation requires precision. The 3-4-5 rule is a fundamental carpentry technique used to ensure deck corners are perfectly square based on the Pythagorean theorem:",
      "1. Measure 3 units along one edge from the corner.",
      "2. Measure 4 units along the adjacent edge.",
      "3. Measure the diagonal span between these two points. If it measures exactly 5 units, the corner forms a flawless right angle.",
      "This method ensures the subframe is aligned correctly, preventing structural shifting and uneven boards over time.",
      "Choosing the Right Decking Materials",
      "Selecting appropriate materials governs the deck's appearance, durability, and maintenance requirements:",
      "• Timber Decking: Delivers natural warmth and traditional beauty. Hardwoods provide superior longevity, while softwoods require appropriate preservative treatment.",
      "• Composite Decking: Manufactured from recycled wood polymers and plastics, offering exceptional durability, splinter resistance, and low maintenance.",
      "• Aluminium & PVC: Highly engineered alternatives ideal for demanding microclimates or contemporary architectural schemes."
    ],
    "perfect-garden-bench": [
      "Selecting the ideal garden bench for an outdoor area can completely transform its ambiance, establishing a dedicated place to unwind, appreciate nature, and elevate architectural aesthetics. Picking the right bench involves a clear grasp of spatial requirements, personal style, and durable material science.",
      "How to Choose the Right Garden Bench",
      "The selection process begins with assessing scale and positioning. Larger plots can accommodate statement architectural benches, whereas compact urban spaces require efficient, streamlined seating. Consideration must also be given to the primary function—whether acting as a quiet reading nook, a social gathering point, or a deliberate focal feature.",
      "Durable Material Options for Outdoor Benches",
      "Longevity against weathering, moisture, and biological wear depends entirely on material selection:",
      "• Teak: A premium hardwood naturally rich in natural oils, rendering it highly resistant to water, rot, and insect degradation. Over time, it develops a refined silver-grey patina with minimal upkeep.",
      "• Metal: Aluminium offers lightweight, rust-resistant performance suited to coastal or damp microclimates, while wrought iron provides heavy, sturdy traditional weight requiring protective coatings.",
      "• Recycled Plastic & Synthetic Composites: Modern alternatives offering high durability without rotting, cracking, or fading, requiring near-zero maintenance.",
      "• Concrete: Provides an industrial, contemporary aesthetic with exceptional durability, though typically requiring weatherproof cushions for ergonomic comfort.",
      "Landscape Integration and Maintenance",
      "A garden bench should anchor naturally into the broader landscape design. Matching materials with surrounding hardscaping—such as timber decking or stone paving—ensures visual continuity. Routine maintenance, including gentle seasonal cleaning and appropriate protective oiling for hardwoods, preserves both structural integrity and surface appeal over years of use."
    ],
    "choosing-the-perfect-conifer": [
      "Conifers are the foundational structural elements of professional landscape design, providing year-round evergreen form, rich textures, and remarkable resilience against seasonal climate shifts.",
      "Understanding Conifer Varieties and Growth Habits",
      "Conifers encompass a diverse taxonomic family characterised by needle-like foliage and cones. Their ability to retain foliage year-round ensures structural continuity in the garden, while seasonal colour transitions—from spring greens to rich autumn golds and bronzes—add dynamic visual depth.",
      "Classifying Conifer Architecture",
      "Choosing the correct conifer involves matching its ultimate habit to the specific spatial and aesthetic requirements of the layout:",
      "• Columnar Conifers: Tall and narrow forms (such as Juniperus scopulorum 'Skyrocket') that introduce vertical drama and architectural punctuation without occupying excessive ground footprint.",
      "• Pyramidal Conifers: Classic tapered forms (such as Picea albertiana 'Conica') that serve as strong focal anchors or effective screening elements.",
      "• Globose Conifers: Compact, rounded forms (such as Chamaecyparis obtusa 'Nana Gracilis') that introduce soft geometric contrast in borders, rockeries, or container planters.",
      "Planting and Establishment Discipline",
      "Ensuring long-term vitality requires proper horticultural protocols: selecting well-drained soil and adequate sunlight profiles, digging planting pits twice the width of the root ball to encourage lateral root expansion, and applying organic mulch to stabilise soil moisture and suppress weed competition."
    ],
    "creating-your-ideal-garden-planting-plan": [
      "Designing a garden that thrives and delights requires a clear, actionable strategy that bridges site analysis, soil science, and aesthetic balance.",
      "Understanding Planting Plan Essentials",
      "Before breaking ground, establishing a blueprint defining plant placement, seasonal interest, and long-term purpose is critical. The foundation of any successful planting plan relies on thorough site analysis:",
      "• Sunlight and Shade Mapping: Identifying exposure levels to correctly position shade-tolerant species under canopies and sun-lovers in open aspects.",
      "• Soil and Drainage: Assessing soil composition and moisture retention to determine appropriate plant selections.",
      "• Purpose and Function: Defining the core goals of the planting—whether providing privacy screening, attracting pollinators, or incorporating edible ornamentals.",
      "Plant Selection and Layering Discipline",
      "Successful planting relies on native or well-adapted species that resist local pests and require less supplemental irrigation. Structuring a bed involves a deliberate three-tier layering approach:",
      "• Tall Canopy / Structural Rear: Utilising architectural shrubs or small trees to anchor the background.",
      "• Perennial Mid-Layer: Introducing texture, seasonal colour, and botanical variety through flowering perennials.",
      "• Ground Covers & Edging: Deploying low-growing carpeting plants to suppress weed competition and neatly frame pathways.",
      "Long-Term Maintenance and Success",
      "Sustaining a healthy garden requires disciplined horticultural management, including deep infrequent watering to encourage root penetration, organic mulching for moisture retention, and selective pruning to promote airflow and vigorous new growth."
    ],
    "plant-health-tips": [
      "Cultivating a thriving urban garden requires navigating unique environmental conditions, including restricted sunlight profiles, urban pollution, and compacted soils.",
      "Managing Urban Microclimate Challenges",
      "Urban environments present specific hurdles that directly impact plant health and physiological development:",
      "• Pollution & Air Quality: Particulates settling on foliage hinder photosynthesis. Regular gentle washing with clean water helps maintain foliar respiration.",
      "• Light Restrictions: Shading from adjacent architecture requires selecting shade-tolerant varieties, such as leafy greens, ferns, and woodland perennials.",
      "• Soil Compaction: Urban soils are frequently nutrient-poor or contaminated with construction debris. Rectifying soil structure through comprehensive amendment with organic matter—such as well-rotted compost, leaf mould, and worm castings—is vital.",
      "Irrigation and Water Conservation",
      "Balancing soil moisture prevents root rot and drought stress. Best practices include deep, infrequent watering at the base of plants during early morning hours to encourage deep root penetration while minimising fungal risks. Applying organic mulches further regulates soil temperature and retains vital moisture.",
      "Integrated Pest Management (IPM)",
      "Maintaining plant resilience through preventative care and early monitoring reduces the reliance on harsh chemicals. Prioritising cultural controls, encouraging beneficial insects through companion planting, and applying targeted organic solutions like insecticidal soap or neem oil ensures balanced ecosystem management."
    ]
};

function toTitleCase(str) {
    const lowers = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'as', 'at', 'by', 'from', 'in', 'into', 'near', 'of', 'on', 'onto', 'to', 'with'];
    return str.toLowerCase().split(/\s+/).map((word, index) => {
        if (word.length === 0) return word;
        if (/^[0-9]+[.)]?$/.test(word)) return word; 
        const isSmall = lowers.includes(word);
        if (isSmall && index !== 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function isStrictlyAllCaps(text) {
    const letters = text.replace(/[^a-zA-Z]/g, '');
    return letters.length > 3 && letters === letters.toUpperCase();
}

const merged = rawArchive.map(item => {
    const overrideKey = Object.keys(perfectOverrides).find(key => item.slug && item.slug.includes(key));
    if (overrideKey) {
        return {
            title: toTitleCase(item.title || "Archived Article"),
            slug: item.slug,
            oldUrl: `https://www.savageldn.co.uk/post/${item.slug}`,
            date: item.publishedTime ? item.publishedTime.split('T')[0] : "2026-05-01",
            category: "Historic Practice Archive",
            excerpt: perfectOverrides[overrideKey][0].substring(0, 150) + "...",
            status: "archive",
            contentStatus: "complete",
            content: perfectOverrides[overrideKey]
        };
    }

    let cleanBlocks = [];
    const blocks = item.blocks || [];
    
    for (let b of blocks) {
        if (typeof b !== 'string') continue;
        let t = b.trim();
        let lower = t.toLowerCase();
        if (!lower) continue;

        if (lower.includes('3d digital twin master planning')) break;
        if (lower.includes('how to start your journey')) break;
        if (lower.includes('hardscaping costs')) break;
        if (lower.includes('elements of a bespoke design')) break;
        if (lower.includes('bringing your vision to life')) break;
        if (lower.includes('explore our portfolio')) break;

        const skips = [
            'dulwich sanctuary 3d garden walkthrough', 'illuminated custom garden pathway',
            'eye-level view', 'close-up view', 'top-down plan view', 
            'beautiful conifer garden showcasing', 'classic wooden garden bench', 'lush south london garden', 
            'cosy compact roof terrace', 'modern metal garden bench', 'layered garden planting'
        ];
        if (skips.some(s => lower.includes(s))) continue;

        let cleaned = t.replace(/\s{2,}/g, ' ').trim();
        if (cleaned.length === 0) continue;

        const lines = cleaned.split(/\r?\n/);
        const processedLines = lines.map(line => {
            if (isStrictlyAllCaps(line) && line.length < 120) return toTitleCase(line);
            return line;
        });
        
        cleanBlocks.push(processedLines.join('\n'));
    }

    return {
        title: toTitleCase(item.title || "Archived Article"),
        slug: item.slug || "unknown-slug",
        oldUrl: `https://www.savageldn.co.uk/post/${item.slug}`,
        date: item.publishedTime ? item.publishedTime.split('T')[0] : "2026-05-01",
        category: "Historic Practice Archive",
        excerpt: cleanBlocks.length > 0 ? cleanBlocks[0].substring(0, 150).replace(/\n/g, ' ') + "..." : "Archived writing.",
        status: "archive",
        contentStatus: "complete",
        content: cleanBlocks
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

fs.writeFileSync(tsPath, fileOutput, 'utf8');
console.log(`Successfully injected PERFECT hand-crafted formatting for Plant Health Tips.`);
