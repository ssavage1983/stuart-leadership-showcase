import { createFileRoute, Link } from "@tanstack/react-router";

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
  role: string;
  org: string;
  meta: string;
  points: string[];
}[] = [
  {
    role: "Founder & Director",
    org: "Stuart Savage Landscaping (SAVAGELDN) and The Moonlight Garden Design Co.",
    meta: "Founder-led businesses · responsibly wound down May 2026",
    points: [
      "Held end-to-end accountability for operations, customers, project delivery, procurement, logistics, suppliers, safety and commercial decisions.",
      "Planned and delivered client projects from brief through to handover, coordinating suppliers, procurement, scheduling and logistics.",
      "Held responsibility for commercial decisions, cost awareness and supplier coordination.",
      "Both businesses were responsibly wound down in May 2026.",
    ],
  },
  {
    role: "E-commerce, fulfilment & customer service",
    org: "The Hummingbird Bakery",
    meta: "Joined May 2011",
    points: [
      "Developed experience across e-commerce and online fulfilment after joining in May 2011.",
      "Experience across stock, dispatch and online order fulfilment.",
      "Experience in customer service within an online consumer business.",
    ],
  },
  {
    role: "Food & Beverage Manager",
    org: "Heathrow Airport",
    meta: "Airport hospitality operations",
    points: [
      "Food and beverage management experience in an airport hospitality environment.",
      "Responsibility for day-to-day operations, teams and service standards.",
      "Worked within the customer experience, safety and compliance expectations of an airport setting.",
    ],
  },
  {
    role: "Restaurant Management",
    org: "YO! Sushi",
    meta: "High-volume restaurant operations",
    points: [
      "High-volume restaurant management experience, with a focus on standards and consistency.",
      "Responsibility for teams and service delivery during busy trading periods.",
    ],
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

function Index() {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="border-b border-border">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5"
        >
          <span className="font-display text-lg tracking-tight">Stuart Savage Career Portfolio</span>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-accent"
                href="#capabilities"
              >
                Capabilities
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-accent"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-accent"
                href="#evidence"
              >
                Project evidence
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-accent"
                href="#roles"
              >
                Target roles
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-accent"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28" aria-labelledby="hero-title">
          <p className="eyebrow">Kennington, London · Available for full-time roles</p>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl"
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
          <ol className="mt-12 space-y-12">
            {experience.map((role) => (
              <li key={role.org} className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
                <div>
                  <h3 className="text-xl leading-snug">{role.role}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground">{role.org}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{role.meta}</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {role.points.map((point) => (
                    <li key={point} className="border-l border-border pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Note on the founder-led businesses: SAVAGELDN, Stuart Savage Landscaping and The
            Moonlight Garden Design Co. are former businesses, closed in May 2026. They appear here
            as historic evidence of leadership, logistics, commercial ownership and accountable
            delivery — not as services offered today.
          </p>
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
                className="flex flex-col gap-4 border border-border bg-card p-7"
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
