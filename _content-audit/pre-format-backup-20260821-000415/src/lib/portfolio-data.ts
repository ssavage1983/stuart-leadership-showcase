export const EMAIL = "stuart@savageldn.co.uk";
export const LINKEDIN = "https://www.linkedin.com/in/stuartsavage";

export const capabilities: { title: string; body: string }[] = [
  {
    title: "Operations & service delivery",
    body: "Running day-to-day operations to a consistent standard, with clear routines, priorities and accountability across busy sites and teams.",
  },
  {
    title: "Customer experience & service recovery",
    body: "Holding a clear standard for how customers are treated, communicating openly when problems arise and working through difficult situations calmly.",
  },
  {
    title: "Strategic project planning & delivery",
    body: "Scoping work, planning the sequence, coordinating the moving parts and taking responsibility through to handover.",
  },
  {
    title: "Suppliers, procurement & logistics",
    body: "Coordinating suppliers, stakeholders, procurement and deliveries so that plans hold up against real-world constraints.",
  },
  {
    title: "People leadership & training",
    body: "Leading and training teams, setting performance standards and supporting people to work to them.",
  },
  {
    title: "E-commerce, fulfilment & digital operations",
    body: "Experience across online fulfilment, stock, dispatch and customer service in a consumer business.",
  },
  {
    title: "Commercial awareness & cost control",
    body: "Cost awareness, cost control and practical P&L understanding gained from both managed and owner-led operations.",
  },
  {
    title: "Governance, compliance & improvement",
    body: "Health and safety, risk awareness, process design and steady improvement of how work gets done.",
  },
];

export const experience: {
  id: string;
  role: string;
  org: string;
  meta: string;
  points: string[];
  featured?: boolean;
}[] = [
  {
    id: "founder-group",
    role: "Founder & Managing Director",
    org: "Operational & Spatial Design Group — London & Home Counties",
    meta: "Mar 2019 – May 2026 · Savage Bespoke Ltd, Stuart Savage Landscaping, The Moonlight Garden Design Co.",
    featured: true,
    points: [
      "Governed end-to-end commercial operations, supply chain logistics and physical delivery for complex, high-value structural installations across three concurrent brands, holding primary accountability for on-site health and safety compliance, risk assessments and team rostering.",
      "Negotiated high-value supplier contracts and managed client stakeholders under tight budgetary constraints.",
      "Maintained a record of zero site accidents across concurrent projects, with a 4.9/5 customer satisfaction rate.",
      "Introduced a proprietary digital spatial modelling approach that helped reduce delivery timelines by 20%.",
      "Closed the remaining businesses in May 2026 after health and trading pressures made continued operation unsustainable.",
    ],
  },
  {
    id: "dog-house",
    role: "Assistant Manager",
    org: "The Dog House Pub — London",
    meta: "Aug 2018 – Apr 2019 · High-volume events and compliance",
    points: [
      "Led end-to-end high-volume event operations, including the full holiday and Christmas programme.",
      "Authored the food safety manual and implemented structured daily checks, training staff to standard.",
      "Directed shift operations, customer experience recovery and fast-paced public service.",
      "Managed supplier negotiations and daily stock control to reduce commercial waste.",
    ],
  },
  {
    id: "expeditions",
    role: "Expeditions Leader",
    org: "Transcontinental Botanical Investigation — South America & Asia",
    meta: "Jul 2017 – Aug 2018 · Self-directed 18-month expedition",
    points: [
      "Designed and executed an 18-month global expedition studying international landscapes.",
      "Managed international travel logistics, border-crossing protocols and multi-currency budget controls in low-infrastructure environments.",
      "Secured independent research grant funding for a five-month residency in remote areas of the Colombian Amazon.",
      "Completed high-altitude mountaineering and route planning in the Andes (4,750m) and Himalayas (3,210m).",
    ],
  },
  {
    id: "transitional-assets",
    role: "Interim Project Manager",
    org: "Transitional Assets — London",
    meta: "Jan 2016 – Jun 2017 · Commercial launch portfolio",
    points: [
      "Managed a portfolio of independent commercial launch projects, directing local logistics, fleet dispatch and site scheduling.",
      "Developed operational workflows and customer acquisition approaches to scale new business launches.",
      "Launched and scaled local street-food operations, establishing early-stage supply chains and structured handovers.",
    ],
  },
  {
    id: "no1-lounges",
    role: "Food & Beverage Manager",
    org: "No1 Lounges Ltd — Heathrow Airport",
    meta: "Sep 2015 – Jan 2016 · Safety-critical transport environment",
    featured: true,
    points: [
      "Led frontline passenger operations and safety compliance in one of the world's busiest regulated transport environments.",
      "Managed crowd flow and passenger welfare during periods of intense airport traffic and flight delays.",
      "Maintained compliance with Civil Aviation Authority security protocols and airport safety guidelines.",
      "Acted as the central point of authority for customer recovery, de-escalating stressed passenger complaints calmly.",
    ],
  },
  {
    id: "capital-hotel",
    role: "Head of Online (Contract)",
    org: "The Capital Hotel, supporting The London Bakery Co. — London",
    meta: "Jun 2015 – Sep 2015 · Fulfilment and dispatch",
    points: [
      "Optimised digital order fulfilment, dispatch workflows and delivery vehicle scheduling.",
      "Redesigned delivery route logistics, cutting turnaround times and improving fleet utilisation.",
      "Improved dispatch accuracy and reduced missed delivery windows.",
    ],
  },
  {
    id: "vital-ingredient",
    role: "Head of Corporate Sales",
    org: "Vital Ingredient (UK) Ltd — London",
    meta: "Jun 2014 – Feb 2015 · B2B distribution network",
    points: [
      "Built the organisation's first B2B distribution and delivery network across London.",
      "Managed corporate stakeholder relationships and negotiated commercial service level agreements.",
      "Designed delivery route logistics and structured fleet scheduling, establishing a new revenue stream.",
    ],
  },
  {
    id: "hummingbird",
    role: "Branch Manager & Head of Online",
    org: "The Hummingbird Bakery — London",
    meta: "May 2011 – Jun 2014 · Retail operations and e-commerce",
    featured: true,
    points: [
      "Directed daily retail operations for high-turnover flagship locations, owning rotas, inventory pipelines and daily financial audits.",
      "Led and trained customer service teams of up to 20 staff on operational standards and safety compliance.",
      "Doubled e-commerce revenue within a 12-month period through targeted digital workflow integration.",
      "Redesigned the digital order dispatch system and optimised delivery fleet routing.",
    ],
  },
  {
    id: "yo-sushi",
    role: "General Manager",
    org: "YO! Sushi — London",
    meta: "Jan 2010 – May 2011 · High-volume hospitality",
    points: [
      "Held full accountability for a team of up to 40 service and kitchen employees, shift patterns, P&L controls and health and safety compliance.",
      "Designed staff scheduling and task allocation to align with peak footfall.",
      "Monitored stock control, supplier pipelines and waste management to protect margins.",
      "Consistently achieved maximum external audit ratings for health, safety and hygiene compliance.",
    ],
  },
  {
    id: "starbucks",
    role: "Store Manager & Drive-Thru Trainer",
    org: "Starbucks Coffee Company — UK & Seattle, WA, USA",
    meta: "Aug 2006 – Jan 2010 · International secondment",
    featured: true,
    points: [
      "Selected for an international secondment to Starbucks global headquarters in Seattle, working with senior executive leadership on service-flow optimisation and queue mechanics.",
      "Managed high-volume branch operations, inventory controls and staff rostering for multi-million pound locations.",
      "Co-authored the European Drive-Thru Training Manual, defining metrics for queue progression and layout logistics.",
      "Trained, onboarded and coached over 100 frontline service employees in customer care, safety and coordination.",
    ],
  },
  {
    id: "wardell-armstrong",
    role: "Graphic Designer",
    org: "Wardell Armstrong LLP — UK",
    meta: "Jul 2001 – Sep 2004 · Infrastructure and planning consultancy",
    points: [
      "Worked with structural engineers and environmental consultants on technical graphics, terrain blueprints and environmental impact assessments.",
      "Produced reports and planning documentation supporting major infrastructure and regeneration schemes.",
      "Maintained strict quality control across multi-disciplinary project databases.",
    ],
  },
];

export const education: { qualification: string; org: string; year: string; body: string }[] = [
  {
    qualification: "Professional Diploma in Garden Design",
    org: "British Academy of Garden Design",
    year: "2019",
    body: "Continued professional development combining creative design with technical planning, environmental knowledge and structured project delivery.",
  },
  {
    qualification: "BA (Hons) Graphic Communications",
    org: "University of Wales Institute, Cardiff",
    year: "2004",
    body: "Foundations in visual communication, technical presentation and project coordination that continue to support operational leadership and customer engagement.",
  },
];

export const projectEvidence: {
  title: string;
  context: string;
  delivery: string;
  transfer: string;
}[] = [
  {
    title: "Client project delivery, end to end",
    context:
      "Founder-led projects depended on suppliers, procurement and site logistics coming together.",
    delivery:
      "Planned the work, coordinated suppliers and logistics, and held responsibility through to handover.",
    transfer:
      "Transferable to service delivery and project delivery roles where scope, dependencies and stakeholder expectations must be held together.",
  },
  {
    title: "Supplier, procurement and logistics coordination",
    context:
      "Delivery depended on procurement and third parties arriving in the right place, in the right order.",
    delivery:
      "Coordinated suppliers, handled procurement and scheduled deliveries around the work programme.",
    transfer:
      "Applies to logistics, facilities and operational supply chains where third-party performance drives the outcome.",
  },
  {
    title: "Airport hospitality operations",
    context: "Food and beverage management at Heathrow, within an airport hospitality environment.",
    delivery:
      "Held responsibility for operations, teams and service standards alongside safety and compliance expectations.",
    transfer: "Relevant to transport, rail and other governed operational environments.",
  },
  {
    title: "Online fulfilment and customer service",
    context: "E-commerce and online fulfilment at The Hummingbird Bakery.",
    delivery: "Experience across stock, dispatch, online order fulfilment and customer service.",
    transfer: "Transfers to customer operations, fulfilment and customer service roles.",
  },
  {
    title: "Responsible business wind-down",
    context: "Both former businesses were wound down in May 2026.",
    delivery: "The businesses were closed responsibly, as an owner-led commercial decision.",
    transfer: "Evidence of accountability, governance and commercial judgement.",
  },
];

export const targetRoles: { title: string; body: string }[] = [
  {
    title: "Operations Manager",
    body: "Owning the running of a site, region or service line, with responsibility for standards, teams and performance.",
  },
  {
    title: "Customer Experience Manager",
    body: "Setting service standards and improving how customers experience the organisation.",
  },
  {
    title: "Service Delivery Manager",
    body: "Holding delivery to agreed standards across teams, suppliers and stakeholders.",
  },
  {
    title: "Strategic Project Manager",
    body: "Planning and delivering operational projects and improvement work through to handover.",
  },
];

export const sectors = [
  "Transport & rail",
  "Hospitality",
  "Facilities",
  "Logistics",
  "Fulfilment",
  "Customer operations",
  "E-commerce",
  "Operational governance",
];
