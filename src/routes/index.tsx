// @ts-nocheck
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

const EMAIL = "stuart@savageldn.co.uk";
const PHONE = "07762 719043";
const LINKEDIN = "https://linkedin.com/in/stuartsavage";

const coreCompetencies = [
  { title: "Operations Management & Strategy", desc: "Multi-brand, multi-site" },
  { title: "Logistics & Supply Chain Management", desc: "Fleet dispatch, supplier networks" },
  { title: "High-Volume Frontline Leadership", desc: "Teams of up to 40" },
  { title: "Project Portfolio Delivery", desc: "10+ concurrent projects" },
  { title: "Health, Safety & Regulatory Compliance", desc: "CAA, food safety, site H&S" },
  { title: "Customer Experience (CX) Leadership", desc: "4.9/5 satisfaction rating" },
  { title: "Budgeting & Commercial Procurement", desc: "SLA negotiation, P&L ownership" },
  {
    title: "Digital Transformation & AI Integration",
    desc: "Proprietary tooling, workflow automation",
  },
];

const experience = [
  {
    id: "sabbatical",
    role: "NHS Foundation Trust Member — Health & Well-being Sabbatical",
    org: "Guy’s and St Thomas’ NHS Foundation Trust | London, UK",
    dates: "Aug 2026 – Present",
    featured: true,
    summary:
      "Following the permanent closure of my landscape and design businesses in May 2026, I am dedicating this period entirely to my health, long-term clinical recovery, and personal well-being.",
    responsibilities: [
      "In 2024, I was diagnosed with Stage 4 throat cancer and underwent intensive chemoradiotherapy. While my cancer remains in remission, the aggressive treatment left me with complex, chronic physical side effects and a profound mental health toll.",
      "On strict medical recommendations and my doctor’s fit notes, I am taking a dedicated sabbatical from employment over the coming year to focus 100% on my physical rehabilitation and psychological recovery.",
    ],
    achievements: [
      "NHS Membership: Actively participating as a public member of Guy's and St Thomas' NHS Foundation Trust, contributing patient-centred feedback and helping shape local hospital services.",
      "Health & Well-being: Committing to structured daily rehabilitation, clinical therapy, and rebuilding protocols to manage chronic side effects.",
      "Thoughtful Preparation: Taking the space to recover, rebuild my cognitive and physical strength, and safely prepare for my next chapter.",
    ],
  },
  {
    id: "founder",
    role: "Founder & Managing Director",
    org: "Operational & Spatial Design Group | London & Home Counties",
    dates: "Mar 2019 – May 2026",
    featured: false,
    summary:
      "Three concurrent brands: Savage Bespoke Ltd (Mar 2019 – May 2023), Stuart Savage Landscaping (Oct 2023 – May 2026), and The Moonlight Garden Design Co (Nov 2025 – May 2026). Governed end-to-end commercial operations, supply chain logistics, and physical delivery for complex, bespoke structural installations. Held primary accountability for on-site health and safety compliance, rigorous risk assessments, and multi-disciplinary team rostering across all three brands simultaneously, managing teams of 5-6 on-site operatives per project.",
    responsibilities: [
      "Directed day-to-day staff rostering, safety inductions, and resource allocation for on-site crews across multiple live projects.",
      "Negotiated supplier contracts and managed complex client stakeholders under tight budgetary constraints.",
      "Oversaw full project lifecycle from initial client brief and spatial design through to physical installation and sign-off.",
      "Managed all commercial and financial controls including invoicing, procurement, and margin protection across three concurrent brands.",
    ],
    achievements: [
      "Maintained a zero site accidents record across all concurrent projects, delivering a 4.9/5 customer satisfaction rating.",
      "Pioneered a proprietary Digital Twin spatial modelling system utilising advanced 3D data mapping to reduce client revision cycles and streamline delivery timelines by 20%.",
      "Developed the business across three distinct service brands, each serving separate market segments across London and the Home Counties.",
      "Concluded active trading operations across all three brands following a strategic review of market conditions.",
    ],
  },
  {
    id: "doghouse",
    role: "Assistant Manager",
    org: "The Dog House Pub | London, UK",
    dates: "Aug 2018 – Apr 2019",
    summary:
      "Led end-to-end high-volume event operations, including the full holiday and Christmas programme, managing a team of up to 15 front-of-house and bar staff. Elevated operational hygiene and compliance by writing the food safety manual, implementing structured daily checks, and training staff to standard.",
    responsibilities: [
      "Directed shift operations, customer experience recovery, and fast-paced public service.",
      "Managed supplier negotiations and daily stock control to reduce commercial waste.",
    ],
    achievements: [
      "Authored the operational safety manual, establishing rigid compliance standards across the site.",
      "Strengthened local stakeholder relationships by maintaining reliable service delivery and resolving issues proactively.",
      "Operational Impact: Substantially raised on-site safety, hygiene, and operational standards, safeguarding guest welfare and driving local brand credibility.",
    ],
  },
  {
    id: "researcher",
    role: "Independent Researcher & Expeditions Leader (Career Development Sabbatical)",
    org: "Transcontinental Botanical Investigation | South America & Asia",
    dates: "Jul 2017 – Aug 2018",
    summary:
      "Designed and executed a self-motivated, high-stakes 18-month global expedition to study international landscapes, demonstrating exceptional personal resilience, logistics planning, and risk management.",
    responsibilities: [
      "Managed intricate international travel logistics, border-crossing protocols, and multi-currency budget controls across challenging environments.",
      "Secured independent research grant funding to facilitate a five-month residency in remote areas of the Colombian Amazon.",
    ],
    achievements: [
      "Completed intensive high-altitude mountaineering and route planning in the Andes (4,750m) and Himalayas (3,210m).",
      "Completed wilderness survival and wildlife conservation volunteering, adapting to extreme, low-infrastructure environments.",
      "Operational Impact: Demonstrated profound situational awareness, crisis resilience, and strategic adaptability in highly demanding physical and logistical scenarios.",
    ],
  },
  {
    id: "interim",
    role: "Interim Project Manager",
    org: "Transitional Assets (Independent Consultancy) | London, UK",
    dates: "Jan 2016 – Jun 2017",
    summary:
      "Managed a portfolio of independent commercial launch projects, directing local logistics, fleet dispatch operations, and physical site scheduling under tight delivery constraints.",
    responsibilities: [
      "Developed operational workflows and managed customer acquisition strategies to scale independent business launches.",
      "Coordinated daily physical operations and team deployments.",
    ],
    achievements: [
      "Successfully launched and scaled local street-food operations, establishing robust early-stage supply chains.",
      "Operational Impact: Created sustainable, structured operating systems for new ventures, ensuring smooth project handovers and commercial viability.",
    ],
  },
  {
    id: "no1",
    role: "Food & Beverage Manager",
    org: "No1 Lounges Ltd | Heathrow Airport, UK",
    dates: "Sep 2015 – Jan 2016",
    summary:
      "Spearheaded frontline passenger operations and safety compliance within one of the world's busiest, highly regulated transport environments. Coordinated multi-disciplinary hospitality teams of up to 25 staff to maintain service standards under pressure.",
    responsibilities: [
      "Managed active crowd flow dynamics and passenger welfare during periods of intense airport traffic and flight delays.",
      "Ensured continuous, rigorous compliance with Civil Aviation Authority (CAA) security protocols and airport safety guidelines.",
    ],
    achievements: [
      "Acted as the central point of authority for on-site customer recovery, de-escalating highly stressed passenger complaints with absolute composure.",
      "Maintained exceptional passenger experience standards despite extreme scheduling pressure.",
      "Operational Impact: Guaranteed a safe, secure, and premium environment for thousands of daily international passengers, establishing high service resilience in a safety-critical hub.",
    ],
  },
  {
    id: "capital",
    role: "Head of Online (Contract)",
    org: "The Capital Hotel (Supporting The London Bakery Co.) | London, UK",
    dates: "Jun 2015 – Sep 2015",
    summary:
      "Optimised digital order fulfilment, dispatch workflows, and delivery vehicle scheduling to boost operational performance and logistical throughput.",
    responsibilities: [
      "Redesigned delivery route logistics, cutting down turnaround times and improving resource utilisation for local fleets.",
      "Streamlined online customer service channels to enhance service standards.",
    ],
    achievements: [
      "Improved fleet dispatch accuracy and significantly reduced missed delivery windows.",
      "Operational Impact: Engineered a more efficient logistical framework that increased local delivery capacity and customer satisfaction.",
    ],
  },
  {
    id: "vital",
    role: "Head of Corporate Sales",
    org: "Vital Ingredient (UK) LTD | London, UK",
    dates: "Jun 2014 – Feb 2015",
    summary:
      "Developed and structured the organisation's first comprehensive B2B distribution and delivery network across London, aligning driver resources with corporate client timelines.",
    responsibilities: [
      "Managed corporate stakeholder relationships and negotiated commercial Service Level Agreements.",
      "Designed complex delivery route logistics and structured fleet scheduling.",
    ],
    achievements: [
      "Successfully rolled out a scalable corporate delivery framework, establishing a vital new revenue stream.",
      "Operational Impact: Transformed ad-hoc corporate orders into a structured, reliable logistics operation that improved fleet utilisation and commercial growth.",
    ],
  },
  {
    id: "hummingbird",
    role: "Branch Manager & Head of Online",
    org: "The Hummingbird Bakery | London, UK",
    dates: "May 2011 – Jun 2014",
    summary:
      "Directed daily retail operations for high-turnover flagship locations while taking full ownership of staff rotas, inventory pipelines, daily financial audits, and a rapidly scaling digital dispatch system.",
    responsibilities: [
      "Balanced physical crowd management and passenger welfare during high-footfall peak hours with delivery driver dispatch schedules.",
      "Led and trained customer service teams of up to 20 staff on high operational standards and safety compliance.",
    ],
    achievements: [
      "Successfully doubled e-commerce revenue streams within a 12-month period through targeted digital workflow integration.",
      "Redesigned the digital order dispatch system and optimised delivery fleet routing.",
      "Operational Impact: Bridged physical retail queue management with digital order fulfilment, vastly improving resource utilisation and dispatch accuracy across London.",
    ],
  },
  {
    id: "yo",
    role: "General Manager",
    org: "YO! Sushi | London, UK",
    dates: "Jan 2010 – May 2011",
    summary:
      "Led high-volume hospitality operations, taking full accountability for a team of up to 40 service and kitchen employees, shift patterns, P&L controls, and on-site health and safety compliance.",
    responsibilities: [
      "Designed staff scheduling and task allocation structures to align with peak business footfall.",
      "Monitored stock control, supplier pipelines, and waste management to protect commercial margins.",
    ],
    achievements: [
      "Consistently achieved maximum external audit ratings for health, safety, and hygiene compliance.",
      "Excelled in rapid customer service recovery, resolving complex complaints with proactive de-escalation.",
      "Operational Impact: Standardised on-site safety and service execution, driving higher shift productivity while keeping a highly compliant operational footprint.",
    ],
  },
  {
    id: "starbucks",
    role: "Store Manager & Drive-Thru Trainer",
    org: "Starbucks Coffee Company | UK & Seattle, WA, USA",
    dates: "Aug 2006 – Jan 2010",
    summary:
      "Selected for an exclusive international secondment to Starbucks Global Headquarters in Seattle, WA, collaborating directly with senior executive leadership (including Howard Schultz) on international service-flow optimisation and queue mechanics. Managed day-to-day store operations with teams of up to 30 baristas and shift supervisors.",
    responsibilities: [
      "Managed high-volume daily branch operations, inventory controls, and staff rostering for multi-million pound locations.",
      "Led on-site safety audits, shift management, and customer experience frameworks to maintain strict brand standards.",
    ],
    achievements: [
      "Co-authored the European Drive-Thru Training Manual, defining key metrics for queue progression and layout logistics.",
      "Personally trained, onboarded, and coached over 100 frontline service employees in customer care, safety, and coordination.",
      "Operational Impact: Standardised operations across the European market, establishing high-performance service baselines that continue to govern speed-of-service across hundreds of sites.",
    ],
  },
  {
    id: "wardell",
    role: "Graphic Designer",
    org: "Wardell Armstrong LLP | UK",
    dates: "Jul 2001 – Sep 2004",
    summary: "Industry Placement, prior to BA Hons Graphic Communications 2004-2006.",
    responsibilities: [
      "Produced professional reports and planning documentation supporting major infrastructure and large regeneration schemes.",
      "Maintained strict quality control and attention to detail across multi-disciplinary project coordinate databases.",
    ],
    achievements: [
      "Operational Impact: Ensured that technical graphics complied strictly with civil engineering and planning guidelines, paving the way for infrastructure scheme approvals.",
    ],
  },
];

const education = [
  {
    qualification: "Professional Diploma in Garden Design",
    org: "British Academy of Garden Design",
    year: "2025 – 2026",
    body: "Demonstrated continued professional development, combining creative design with technical planning, environmental knowledge and structured project delivery.",
  },
  {
    qualification: "BA (Hons) Graphic Communications",
    org: "University of Wales Institute, Cardiff",
    year: "Sep 2004 – 2006",
    body: "Developed strong foundations in visual communication, technical presentation and project coordination that have continued to support operational leadership and customer engagement.",
  },
];

const interests = [
  {
    title: "Rail Travel & Transport",
    desc: "Travelled extensively throughout the UK and internationally by rail, including journeys on the Caledonian Sleeper, High Speed 1, Eurostar, and networks across India and Australia.",
  },
  {
    title: "Mountaineering & Expedition",
    desc: "High-altitude trekking through Peru and Nepal (reaching ~5,000m), demonstrating rigorous planning, risk awareness, and calm decision-making under pressure.",
  },
  {
    title: "Technology & AI",
    desc: "Strong interest in Artificial Intelligence, operational excellence, and digital transformation to improve business efficiency.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Stuart Savage Archive",
  inLanguage: "en-GB",
  url: "https://stuart-leadership-showcase.vercel.app/",
  mainEntity: {
    "@type": "Person",
    name: "Stuart Savage",
    jobTitle: "Operations & Project Delivery Leader",
    description: "Operations & Project Delivery Leader based in Kennington, London.",
    email: "mailto:" + EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kennington",
      addressRegion: "London",
      addressCountry: "GB",
    },
    sameAs: [LINKEDIN],
  },
};

export const Route = createFileRoute("/")({
  _ignored_head: () => ({
    meta: [
      { title: "Stuart Savage | Operations & Customer Experience Leadership" },
      {
        name: "description",
        content:
          "Historic professional archive and portfolio of Stuart Savage. Showcasing operations management, customer experience, and project delivery across London.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Stuart Savage",
            jobTitle: "Operations & Customer Experience Professional",
            url: "https://www.moonlight-studio.uk",
            sameAs: ["https://www.linkedin.com/in/stuart-savage/"],
            knowsAbout: [
              "Operations Management",
              "Customer Experience",
              "Project Management",
              "Stakeholder Management",
              "Zero-Defect Delivery",
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
  head: () => ({
    meta: [
      { title: "Stuart Savage | Operations & Project Delivery Leader" },
      {
        name: "description",
        content: "Operations & Project Delivery Leader based in Kennington, London.",
      },
      { property: "og:title", content: "Stuart Savage | Operations & Project Delivery Leader" },
      {
        property: "og:description",
        content: "Operations & Project Delivery Leader based in Kennington, London.",
      },
      {
        property: "og:image",
        content: "https://stuart-leadership-showcase.vercel.app/images/profile/stuart-savage.jpg",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://stuart-leadership-showcase.vercel.app/" },
    ],
    links: [{ rel: "canonical", href: "https://stuart-leadership-showcase.vercel.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-5 leading-relaxed text-[#607080] text-sm">
    <span className="absolute left-0 top-0 text-[#c47c62] select-none text-base leading-relaxed">
      •
    </span>
    {children}
  </li>
);

function Index() {
  const [openRole, setOpenRole] = useState<string | null>("role-sabbatical");

  const toggleRole = (id: string) => {
    setOpenRole((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#102a43] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative bg-[#091d2f] text-[#f7f4ee] pt-16 pb-12 px-6 lg:pt-24 lg:pb-16 overflow-hidden border-b border-[#c47c62]/30">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('/images/portfolio/tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#091d2f] via-[#091d2f]/95 to-[#091d2f]/50" />

        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c47c62]">
              Stuart Savage · Kennington, London, UK
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.94] tracking-tight">
              Operations & <br />
              Project Delivery <br />
              <em className="not-italic text-[#c47c62]">Leader.</em>
            </h1>
            <p className="text-base sm:text-lg text-[#f7f4ee]/80 max-w-2xl leading-relaxed">
              With 20+ years leading operations across safety-critical, high-volume, and
              commercially complex environments, Stuart Savage brings a rare combination of
              strategic infrastructure planning and hands-on frontline delivery.
            </p>

            <div className="border-l-3 border-[#c47c62] pl-4 text-xs sm:text-sm text-[#f7f4ee]/90 font-medium max-w-2xl">
              A proven multi-brand founder, airport operations manager, and internationally seconded
              service leader, he specialises in building systems, teams, and workflows that perform
              under pressure — from Heathrow terminals to remote Amazonian fieldwork. Trusted to
              govern compliance, drive digital transformation, and close projects with integrity.
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#competencies"
                className="inline-flex items-center justify-center min-h-[48px] px-5 bg-[#c47c62] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c7a667] hover:text-[#091d2f] transition-colors rounded-sm"
              >
                Core Competencies
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center min-h-[48px] px-5 border border-[#c47c62] bg-[#f7f4ee]/10 text-[#f7f4ee] text-xs font-bold uppercase tracking-wider hover:bg-[#c7a667] hover:text-[#091d2f] hover:border-[#c7a667] transition-colors rounded-sm"
              >
                Professional Experience
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#f7f4ee] hover:text-[#c47c62] transition-colors underline underline-offset-4"
              >
                LinkedIn <span className="text-[#c47c62]">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[340px] rounded border border-[#f7f4ee]/30 bg-[#091d2f] shadow-2xl overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                src="/images/profile/stuart-savage.jpg"
                alt="Stuart Savage"
                width="680"
                height="850"
                decoding="async"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#091d2f] via-[#091d2f]/90 to-transparent p-4 text-[10px] font-bold uppercase tracking-wider text-[#f7f4ee]/80 space-y-0.5">
                <span className="block">Stuart Savage</span>
                <span className="block text-[#c7a667]">Operations & Project Delivery</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#f7f4ee] border-b border-[#102a43]/16 py-4 px-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#102a43]">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <span>Operations Management</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Logistics & Supply Chain</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Project Portfolio Delivery</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Digital Transformation</span>
        </div>
      </section>

      {/* Anchor Sticky Bar */}
      <nav className="sticky top-[92px] z-40 bg-[#f7f4ee]/95 backdrop-blur border-b border-[#102a43]/16 py-3 px-6 text-center text-[10px] font-bold uppercase tracking-[0.13em]">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2 sm:gap-4">
          <a
            href="#competencies"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Competencies
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Experience
          </a>
          <a
            href="#education"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Education
          </a>
          <a
            href="#interests"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Interests
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content Body */}
      <main id="main" className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        {/* Core Competencies */}
        <section
          id="competencies"
          className="scroll-mt-36 bg-[#091d2f] text-[#f7f4ee] p-8 sm:p-12 rounded-lg border border-[#c47c62]/30"
        >
          <div className="space-y-2 mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7a667]">
              Professional Profile
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              Core Competencies.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#f7f4ee]/20 pt-8">
            {coreCompetencies.map((comp, i) => (
              <article key={i} className="space-y-2">
                <span className="text-xs font-bold text-[#c7a667]">0{i + 1}</span>
                <h3 className="font-serif text-xl uppercase tracking-wider text-[#f7f4ee] leading-snug">
                  {comp.title}
                </h3>
                <p className="text-xs text-[#f7f4ee]/70 leading-relaxed">{comp.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section id="experience" className="scroll-mt-36 space-y-8">
          <div className="border-b border-[#102a43]/16 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">
              Professional Experience
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] font-normal mt-1">
              Career Archive
            </h2>
          </div>

          <ol className="space-y-4">
            {experience.map((role) => {
              const isOpen = openRole === "role-" + role.id;
              return (
                <li
                  key={role.id}
                  id={"role-" + role.id}
                  className={
                    "border rounded-lg transition-all " +
                    (role.featured
                      ? "border-[#c47c62]/45 border-l-5 border-l-[#c47c62] bg-gradient-to-r from-white to-[#f7f4ee]"
                      : "border-[#102a43]/16 bg-white/50")
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleRole("role-" + role.id)}
                    className="w-full text-left p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c47c62]">
                        {role.dates}
                      </span>
                      <h3 className="text-xl font-bold uppercase text-[#102a43] leading-snug">
                        {role.role}
                      </h3>
                      <p className="text-sm font-medium text-[#607080]">{role.org}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c47c62] shrink-0">
                      <span>{isOpen ? "Close details ↑" : "Open details ↓"}</span>
                      <ChevronDown
                        className={"w-4 h-4 transition-transform " + (isOpen ? "rotate-180" : "")}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-[#102a43]/10 pt-4 text-xs sm:text-sm text-[#607080] space-y-5">
                      {role.summary && (
                        <p className="text-sm font-semibold text-[#102a43] leading-relaxed border-b border-[#102a43]/10 pb-4">
                          {role.summary}
                        </p>
                      )}

                      {role.responsibilities && (
                        <div className="space-y-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#102a43]">
                            Key Context & Background
                          </p>
                          <ul className="list-none space-y-2">
                            {role.responsibilities.map((pt, i) => (
                              <BulletItem key={i}>
                                {typeof pt === "string" && pt.includes(":") ? (
                                  <>
                                    <strong className="font-bold text-[#102a43]">
                                      {pt.split(":")[0]}:
                                    </strong>
                                    {pt.split(":").slice(1).join(":")}
                                  </>
                                ) : (
                                  pt
                                )}
                              </BulletItem>
                            ))}
                          </ul>
                        </div>
                      )}

                      {role.achievements && (
                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#102a43]">
                            Key Focus Areas & Impact
                          </p>
                          <ul className="list-none space-y-2">
                            {role.achievements.map((pt, i) => (
                              <BulletItem key={i}>
                                {typeof pt === "string" && pt.includes(":") ? (
                                  <>
                                    <strong className="font-bold text-[#102a43]">
                                      {pt.split(":")[0]}:
                                    </strong>
                                    {pt.split(":").slice(1).join(":")}
                                  </>
                                ) : (
                                  pt
                                )}
                              </BulletItem>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Education & Qualifications */}
          <div id="education" className="scroll-mt-36 pt-8 border-t border-[#102a43]/16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#102a43] mb-6">
              Education &amp; Qualifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((item, idx) => (
                <div key={idx} className="border border-[#102a43]/16 bg-white p-5 rounded">
                  <h4 className="text-base font-bold text-[#102a43] uppercase">
                    {item.qualification}
                  </h4>
                  <p className="text-xs font-medium text-[#c47c62] mt-0.5">
                    {item.org} · {item.year}
                  </p>
                  <p className="text-xs text-[#607080] mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Interests */}
        <section id="interests" className="scroll-mt-36 space-y-8">
          <div className="border-b border-[#102a43]/16 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">
              Additional Detail
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102a43] font-normal">
              Professional Interests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, idx) => (
              <article
                key={idx}
                className="border border-[#102a43]/16 bg-white p-6 rounded shadow-sm space-y-3"
              >
                <h3 className="text-lg font-bold text-[#102a43] uppercase">{item.title}</h3>
                <p className="text-sm text-[#607080] leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact & Links */}
        <section id="contact" className="scroll-mt-36 text-center space-y-6 pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">
            Professional Links
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] font-normal">
            References available on request.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y border-[#102a43]/16 text-xs font-semibold uppercase tracking-wider text-[#102a43]">
            <a href={"mailto:" + EMAIL} className="hover:text-[#c47c62] transition-colors">
              {EMAIL} <span className="text-[#c47c62]">↗</span>
            </a>
            <span className="hidden sm:inline text-[#c47c62]">|</span>
            <a
              href={"tel:" + PHONE.replace(/\s+/g, "")}
              className="hover:text-[#c47c62] transition-colors"
            >
              {PHONE} <span className="text-[#c47c62]">↗</span>
            </a>
            <span className="hidden sm:inline text-[#c47c62]">|</span>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c47c62] transition-colors"
            >
              linkedin.com/in/stuartsavage <span className="text-[#c47c62]">↗</span>
            </a>
            <span className="hidden sm:inline text-[#c47c62]">|</span>
            <span className="text-[#607080]">Kennington, London, UK</span>
          </div>

          <a
            href="#top"
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#c47c62] pt-4 hover:underline"
          >
            Back to top ↑
          </a>
        </section>
      </main>
    </div>
  );
}

