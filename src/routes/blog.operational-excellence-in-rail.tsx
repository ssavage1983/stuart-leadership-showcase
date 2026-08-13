import { createFileRoute, Link } from "@tanstack/react-router";

const EMAIL = "stuart.savageworld@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/stuartsavage";
const SITE = "https://stuart-leadership-hub.lovable.app";
const URL = `${SITE}/blog/operational-excellence-in-rail`;

const TITLE = "Operational Excellence in Transport and Rail: A Practical Guide";
const DESCRIPTION =
  "A practical guide to operational excellence in transport and rail: service standards, flow, recovery and the skills operations managers need.";


const principles: { title: string; body: string }[] = [
  {
    title: "Define the standard before you measure it",
    body: "Operational excellence starts with a standard that is written down and understood on the ground: what good looks like at a gateline, a platform, a depot or a control room. Without an agreed standard, performance data becomes an argument rather than a decision.",
  },
  {
    title: "Design for flow, not for peak heroics",
    body: "Transport operations live or die on flow — passengers, vehicles, freight, staff and information moving in sequence. Good design removes the bottleneck rather than staffing around it, so that a busy period is a known state rather than an emergency.",
  },
  {
    title: "Make the plan survive contact with reality",
    body: "Timetables, possessions, deliveries and shift patterns all depend on third parties. Planning that names dependencies, owners and decision points holds up far better than planning that assumes everything arrives on time.",
  },
  {
    title: "Treat service recovery as a designed process",
    body: "Disruption is inevitable in transport. What separates operations is whether recovery is improvised or rehearsed: who communicates, in what order, with what information, and how quickly the customer hears something honest.",
  },
  {
    title: "Build safety and compliance into the routine",
    body: "In governed environments, safety and compliance are not a separate workstream. They belong in briefings, checks, handovers and the daily rhythm of the operation, so the right behaviour is the easy behaviour.",
  },
  {
    title: "Improve in small, visible increments",
    body: "Sustainable improvement comes from many small, owned changes with a visible before-and-after, rather than a single large programme that teams cannot feel week to week.",
  },
];

const skills: { title: string; body: string }[] = [
  {
    title: "Standard setting and daily management",
    body: "Turning a service specification into routines, briefings and checks that teams can actually run every day.",
  },
  {
    title: "Customer experience and service recovery",
    body: "Holding a clear standard for how customers are treated, communicating openly when things go wrong and staying calm through difficult situations.",
  },
  {
    title: "Planning, scheduling and sequencing",
    body: "Scoping work, ordering the tasks, coordinating the moving parts and taking responsibility through to handover.",
  },
  {
    title: "Supplier, stakeholder and logistics coordination",
    body: "Working with suppliers, procurement and third parties so that deliveries and dependencies land in the right place, in the right order.",
  },
  {
    title: "People leadership and training",
    body: "Leading and training teams, setting performance standards and supporting people to work to them across shifts and sites.",
  },
  {
    title: "Commercial awareness and cost control",
    body: "Understanding where cost sits in an operation and making practical trade-offs between cost, service and risk.",
  },
  {
    title: "Governance, risk and process improvement",
    body: "Safety and risk awareness, sensible process design and steady improvement of how the work gets done.",
  },
  {
    title: "Communication under pressure",
    body: "Giving teams, stakeholders and customers a clear, honest picture when information is incomplete and time is short.",
  },
];

const steps: { title: string; body: string }[] = [
  {
    title: "Walk the operation",
    body: "Spend time where the service is delivered. Watch a full cycle — a shift, a peak, a handover — before changing anything.",
  },
  {
    title: "Write down the current standard",
    body: "Capture what is actually expected today, in plain language, and check it with the people doing the work.",
  },
  {
    title: "Find the constraint",
    body: "Identify the single point that most limits flow or reliability. Fix that before spreading effort across everything else.",
  },
  {
    title: "Agree owners and a review rhythm",
    body: "Each action needs a named owner and a short, regular review. Rhythm matters more than reporting volume.",
  },
  {
    title: "Rehearse the failure case",
    body: "Test the recovery process, including customer communication, so that disruption follows a known route.",
  },
  {
    title: "Close the loop",
    body: "Show teams the before-and-after. Improvement that people can see is improvement that sticks.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-GB",
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2026-08-07",
      dateModified: "2026-08-07",
      author: {
        "@type": "Person",
        name: "Stuart Savage",
        jobTitle: "Operations and Customer Experience Leader",
        url: SITE,
        sameAs: [LINKEDIN],
      },
      about: [
        "Operational excellence",
        "Transport operations",
        "Rail operations",
        "Operations manager skills",
        "Service delivery",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Operational excellence in transport and rail",
          item: URL,
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/blog/operational-excellence-in-rail")({
  component: GuidePage,
  head: () => ({
    meta: [
      { title: "Operational Excellence in Transport & Rail | Stuart Savage" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

function GuidePage() {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="surface-dark border-b border-porcelain/15">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5"
        >
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-gold"
          >
            Stuart Savage Career Portfolio
          </Link>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-porcelain/80">
            <li>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-gold"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-gold"
                href={`mailto:${EMAIL}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <article>
          <header className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    className="underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Operational excellence in transport and rail</li>
              </ol>
            </nav>
            <p className="eyebrow mt-8">Guide · Operations &amp; service delivery</p>
            <h1 className="mt-4 text-[2.25rem] leading-[1.1] sm:text-5xl">
              Operational excellence in transport and rail
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Transport and rail operations are judged on reliability, safety and how customers are
              treated when something goes wrong. This guide sets out the principles behind
              operational excellence in those environments, and the operations manager skills that
              turn the principles into daily practice.
            </p>
          </header>

          <section
            className="rule-line mx-auto max-w-3xl px-6 py-16"
            aria-labelledby="what-it-means"
          >
            <h2 id="what-it-means" className="text-3xl leading-tight">
              What operational excellence means in a transport setting
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Operational excellence is often described as continuous improvement, but in transport
              and rail it is more specific than that. It is the ability to deliver a repeatable
              standard of service across shifts, sites and conditions — and to recover that standard
              quickly when disruption arrives. The operation is public, time-bound and governed, so
              the gap between the written process and the actual behaviour on the ground is where
              performance is won or lost.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That is also why the discipline travels well between sectors. Airports, high-volume
              hospitality, fulfilment and rail all run on the same underlying mechanics: a clear
              standard, a plan that respects dependencies, teams who know what good looks like, and
              honest communication when the plan breaks.
            </p>
          </section>

          <section className="rule-line mx-auto max-w-3xl px-6 py-16" aria-labelledby="principles">
            <h2 id="principles" className="text-3xl leading-tight">
              Six principles that hold up in the field
            </h2>
            <ul className="mt-10 grid gap-8">
              {principles.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rule-line mx-auto max-w-3xl px-6 py-16" aria-labelledby="skills">
            <h2 id="skills" className="text-3xl leading-tight">
              Operations manager skills that make it work
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Principles only matter if someone can run them. These are the skills that recruiters
              in transport, rail, logistics and facilities tend to be testing for.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skills.map((item) => (
                <li key={item.title} className="rule-line pt-5">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rule-line mx-auto max-w-3xl px-6 py-16" aria-labelledby="steps">
            <h2 id="steps" className="text-3xl leading-tight">
              A practical first ninety days
            </h2>
            <ol className="mt-10 grid gap-8">
              {steps.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span aria-hidden="true" className="eyebrow pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="rule-line mx-auto max-w-3xl px-6 py-16" aria-labelledby="why-me">
            <h2 id="why-me" className="text-3xl leading-tight">
              Where my own experience sits
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I have led food and beverage operations at Heathrow Airport, managed high-volume
              restaurant operations at YO! Sushi, worked across e-commerce, fulfilment, stock,
              dispatch and customer service at The Hummingbird Bakery, and run my own businesses end
              to end — holding responsibility for operations, customers, projects, procurement,
              logistics, suppliers, safety and commercial decisions. Those businesses were
              responsibly wound down in May 2026.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I am now looking for a full-time leadership role in operations, customer experience,
              service delivery or project delivery, with a particular interest in transport and
              rail.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Email Stuart
              </a>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center rounded-sm border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                Read the full portfolio
              </Link>
            </div>
          </section>
        </article>
      </main>

      <footer className="surface-dark border-t border-porcelain/15">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-sm">
          <p>
            Stuart Savage Career Portfolio. Kennington, London.
            <span className="block">
              Intended future domain: moonlight-studio.uk (not yet connected).
            </span>
          </p>
          <p>Operations · Customer experience · Service delivery · Project delivery</p>
        </div>
      </footer>
    </div>
  );
}
