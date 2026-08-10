import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const EMAIL = "stuart.savageworld@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/stuartsavage";

const capabilities: { title: string; body: string }[] = [
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

const experience: {
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
      "Completed planned, solvent closures in May 2026 following a strategic review of market conditions, honouring all supplier and client commitments.",
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

const education: { qualification: string; org: string; year: string; body: string }[] = [
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


const projectEvidence: { title: string; context: string; delivery: string; transfer: string }[] = [
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
    context:
      "Food and beverage management at Heathrow, within an airport hospitality environment.",
    delivery:
      "Held responsibility for operations, teams and service standards alongside safety and compliance expectations.",
    transfer:
      "Relevant to transport, rail and other governed operational environments.",
  },
  {
    title: "Online fulfilment and customer service",
    context:
      "E-commerce and online fulfilment at The Hummingbird Bakery.",
    delivery:
      "Experience across stock, dispatch, online order fulfilment and customer service.",
    transfer:
      "Transfers to customer operations, fulfilment and customer service roles.",
  },
  {
    title: "Responsible business wind-down",
    context:
      "Both former businesses were wound down in May 2026.",
    delivery:
      "The businesses were closed responsibly, as an owner-led commercial decision.",
    transfer:
      "Evidence of accountability, governance and commercial judgement.",
  },
];

const targetRoles: { title: string; body: string }[] = [
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

const sectors = [
  "Transport & rail",
  "Hospitality",
  "Facilities",
  "Logistics",
  "Fulfilment",
  "Customer operations",
  "E-commerce",
  "Operational governance",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Stuart Savage Career Portfolio",
  inLanguage: "en-GB",
  url: "/",
  mainEntity: {
    "@type": "Person",
    name: "Stuart Savage",
    jobTitle: "Operations and Customer Experience Leader",
    description:
      "Operations, customer experience, service delivery and strategic project delivery leader based in Kennington, London.",
    email: `mailto:${EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kennington",
      addressRegion: "London",
      addressCountry: "GB",
    },
    sameAs: [LINKEDIN],
    knowsAbout: [
      "Operations management",
      "Customer experience",
      "Service delivery",
      "Project delivery",
      "Procurement and logistics",
      "E-commerce fulfilment",
    ],
  },
};


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stuart Savage Career Portfolio | Operations & CX Leader" },
      {
        name: "description",
        content:
          "Career portfolio of Stuart Savage, London-based operations, customer experience and service delivery leader with airport hospitality, e-commerce and founder-led delivery experience.",
      },
      {
        property: "og:title",
        content: "Stuart Savage Career Portfolio | Operations & CX Leader",
      },
      {
        property: "og:description",
        content:
          "Career portfolio of Stuart Savage, London-based operations, customer experience and service delivery leader with airport hospitality, e-commerce and founder-led delivery experience.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
});

function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

const navItems: { label: string; href: string }[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Project evidence", href: "#evidence" },
  { label: "Target roles", href: "#roles" },
  { label: "Contact", href: "#contact" },
];

type Role = (typeof experience)[number];

function RoleItem({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);

  if (role.featured) {
    return (
      <li
        id={`role-${role.id}`}
        tabIndex={-1}
        aria-labelledby={`role-${role.id}-title`}
        className="card-elegant scroll-mt-28 grid gap-4 border border-rule bg-card p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-8 md:grid-cols-[1fr_2fr] md:gap-10"
      >
        <div>
          <p className="eyebrow mb-2 text-accent">Key role</p>
          <h3
            id={`role-${role.id}-title`}
            className="text-2xl leading-snug"
          >
            {role.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">{role.org}</p>
          <p className="mt-1 text-sm text-muted-foreground">{role.meta}</p>
        </div>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {role.points.map((point) => (
            <li key={point} className="border-l-2 border-accent pl-4">
              {point}
            </li>
          ))}
        </ul>
      </li>
    );
  }

  const panelId = `role-${role.id}-details`;

  return (
    <li
      id={`role-${role.id}`}
      className="scroll-mt-28 rule-line pt-6 focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-accent"
    >
      <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-10">
        <div>
          <h3
            id={`role-${role.id}-title`}
            className="text-xl leading-snug"
          >
            {role.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">{role.org}</p>
          <p className="mt-1 text-sm text-muted-foreground">{role.meta}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex min-h-11 items-center gap-2 border border-rule px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {open ? "Hide details" : "Show details"}
            <ChevronDown
              className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      {open ? (
        <ul
          id={panelId}
          className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground md:grid md:grid-cols-[1fr_2fr] md:gap-10"
        >
          <div className="md:col-start-2">
            {role.points.map((point) => (
              <li
                key={point}
                className="border-l border-border pl-4"
              >
                {point}
              </li>
            ))}
          </div>
        </ul>
      ) : null}
    </li>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-rule bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav aria-label="Primary" className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between gap-6 py-4">
            <a href="#main" className="font-display text-2xl leading-none tracking-tight sm:text-3xl">
              Stuart Savage
            </a>

            <ul className="hidden items-center gap-1 text-sm font-medium text-muted-foreground lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:bg-secondary hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:bg-secondary hover:text-foreground"
                  to="/blog/operational-excellence-in-rail"
                >
                  Guide
                </Link>
              </li>
              <li className="ml-2">
                <a
                  className="inline-flex min-h-11 items-center rounded-sm bg-primary px-4 text-primary-foreground transition-colors hover:bg-accent"
                  href={`mailto:${EMAIL}`}
                >
                  Email Stuart
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-rule px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              {menuOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
              Menu
            </button>
          </div>

          {menuOpen ? (
            <ul
              id="mobile-menu"
              className="border-t border-rule py-2 text-base font-medium lg:hidden"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-12 items-center border-b border-border/60 transition-colors hover:text-accent"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className="flex min-h-12 items-center border-b border-border/60 transition-colors hover:text-accent"
                  to="/blog/operational-excellence-in-rail"
                  onClick={() => setMenuOpen(false)}
                >
                  Guide
                </Link>
              </li>
              <li className="pt-3 pb-2">
                <a
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-primary px-4 text-sm text-primary-foreground transition-colors hover:bg-accent"
                  href={`mailto:${EMAIL}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Email Stuart
                </a>
              </li>
            </ul>
          ) : null}
        </nav>
      </header>


      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28" aria-labelledby="hero-title">
          <p className="eyebrow">Kennington, London · Available for full-time roles</p>
          <h1
            id="hero-title"
            className="mt-6 max-w-5xl text-[3.25rem] leading-[1.02] sm:text-7xl lg:text-8xl"
          >
            Operations and customer experience leader
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I lead operations, customer experience, service delivery and strategic projects. My
              background spans airport hospitality at Heathrow, high-volume restaurant management,
              e-commerce and fulfilment at The Hummingbird Bakery, and running my own businesses
              end to end. I lead calmly, communicate openly and take accountability for delivery.
            </p>
            <div className="rule-line pt-6 text-sm leading-relaxed text-muted-foreground md:border-t-0 md:border-l md:border-border md:pt-0 md:pl-8">
              <p className="font-medium text-foreground">Currently seeking</p>
              <p className="mt-2">
                A full-time corporate leadership role in operations, customer experience, service
                delivery or project delivery — with a particular interest in transport and rail.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-11 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Email Stuart
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Stuart Savage's LinkedIn profile (opens in a new tab)"
              className="inline-flex min-h-11 items-center rounded-sm border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              View LinkedIn profile
            </a>
          </div>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="rule-line mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
          aria-labelledby="capabilities-title"
        >
          <SectionHeading
            eyebrow="Core skills"
            title="What I bring to an operation"
            id="capabilities-title"
          />
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="rule-line mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
          aria-labelledby="experience-title"
        >
          <SectionHeading
            eyebrow="Career experience"
            title="Where the experience comes from"
            id="experience-title"
          />
          <nav
            aria-labelledby="timeline-nav-title"
            className="mt-10 rule-line pt-6"
          >
            <h3 id="timeline-nav-title" className="text-sm font-semibold tracking-wide text-foreground">
              Jump to a role
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {experience.map((role) => (
                <li key={`nav-${role.id}`}>
                  <a
                    href={`#role-${role.id}`}
                    className="inline-flex items-center gap-2 border border-rule px-3 py-2 text-xs leading-tight text-muted-foreground transition-colors hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="font-medium text-foreground">
                      {role.org.split(" — ")[0]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{role.meta.split(" · ")[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ol className="mt-12 space-y-12">
            {experience.map((role) => (
              <RoleItem key={role.id} role={role} />
            ))}
          </ol>

          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Note on the founder-led businesses: Savage Bespoke Ltd, Stuart Savage Landscaping and
            The Moonlight Garden Design Co. are former businesses, closed solvently in May 2026.
            They appear here as historic evidence of leadership, logistics, commercial ownership and
            accountable delivery — not as services offered today.
          </p>

          <div className="mt-16">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Education &amp; professional qualifications
            </h3>
            <ul className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {education.map((item) => (
                <li key={item.qualification} className="rule-line pt-5">
                  <h4 className="text-lg leading-snug">{item.qualification}</h4>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.org}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* Project evidence */}
        <section
          id="evidence"
          className="rule-line mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
          aria-labelledby="evidence-title"
        >
          <SectionHeading
            eyebrow="Transferable evidence"
            title="Delivery under real constraints"
            id="evidence-title"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projectEvidence.map((item) => (
              <article
                key={item.title}
                className="card-elegant flex flex-col gap-4 border border-border bg-card p-7"
              >
                <h3 className="text-xl leading-snug">{item.title}</h3>
                <dl className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <dt className="eyebrow">Context</dt>
                    <dd className="mt-1">{item.context}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Delivery</dt>
                    <dd className="mt-1">{item.delivery}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Transfers to</dt>
                    <dd className="mt-1">{item.transfer}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* Target roles */}
        <section
          id="roles"
          className="rule-line mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
          aria-labelledby="roles-title"
        >
          <SectionHeading
            eyebrow="Direction"
            title="The roles I am aiming for"
            id="roles-title"
          />
          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {targetRoles.map((role) => (
              <li key={role.title} className="rule-line pt-5">
                <h3 className="text-xl">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Sectors of particular interest
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="border border-rule px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rule-line mx-auto max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28"
          aria-labelledby="contact-title"
        >
          <SectionHeading eyebrow="Contact" title="Get in touch" id="contact-title" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            If you are hiring for an operations, customer experience, service delivery or project
            delivery role, I would be glad to talk. The quickest route is email.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            <li>
              <p className="eyebrow">Email</p>
              <a
                className="mt-1 inline-flex min-h-11 items-center break-all text-lg text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                href={`mailto:${EMAIL}`}
                aria-label={`Email Stuart Savage at ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <p className="eyebrow">LinkedIn</p>
              <a
                className="mt-1 inline-flex min-h-11 items-center text-lg text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Stuart Savage on LinkedIn (opens in a new tab)"
              >
                linkedin.com/in/stuartsavage
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="rule-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-sm text-muted-foreground">
          <p>
            Stuart Savage Career Portfolio. Kennington, London.
            <span className="block">Intended future domain: moonlight-studio.uk (not yet connected).</span>
          </p>
          <p>Operations · Customer experience · Service delivery · Project delivery</p>
        </div>
      </footer>

    </div>
  );
}
