import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

import {
  EMAIL,
  LINKEDIN,
  capabilities,
  experience,
  education,
  projectEvidence,
  targetRoles,
  sectors,
} from "@/lib/portfolio-data";


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
          "Career portfolio of Stuart Savage, a London-based operations and customer experience leader across airport hospitality, e-commerce and service delivery.",
      },
      {
        property: "og:title",
        content: "Stuart Savage Career Portfolio | Operations & CX Leader",
      },
      {
        property: "og:description",
        content:
          "Career portfolio of Stuart Savage, a London-based operations and customer experience leader across airport hospitality, e-commerce and service delivery.",
      },
      {
        name: "twitter:title",
        content: "Stuart Savage Career Portfolio | Operations & CX Leader",
      },
      {
        name: "twitter:description",
        content:
          "Career portfolio of Stuart Savage, a London-based operations and customer experience leader across airport hospitality, e-commerce and service delivery.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c6a1beb-c5ff-43b0-b6bd-7f318c8a49f7/id-preview-fb2ec420--e8483775-82a3-48c7-9bb1-3639384a94f8.lovable.app-1785352085986.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c6a1beb-c5ff-43b0-b6bd-7f318c8a49f7/id-preview-fb2ec420--e8483775-82a3-48c7-9bb1-3639384a94f8.lovable.app-1785352085986.png",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://stuart-leadership-showcase.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://stuart-leadership-showcase.lovable.app/" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
});

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
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
          <h3 id={`role-${role.id}-title`} className="text-2xl leading-snug">
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
    <li id={`role-${role.id}`} className="scroll-mt-28 rule-line role-row">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-start gap-6 px-1 py-6 text-left transition-colors sm:px-3 md:grid md:grid-cols-[1fr_2fr] md:gap-10"
      >
        <div>
          <h3
            id={`role-${role.id}-title`}
            className="text-xl leading-snug transition-colors group-hover:text-accent"
          >
            {role.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground">{role.org}</p>
          <p className="mt-1 text-[0.75rem] uppercase tracking-[0.14em] text-muted-foreground">
            {role.meta}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-3 md:ml-0 md:justify-end">
          <span className="hidden text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-accent sm:inline">
            {open ? "Close" : "Details"}
          </span>
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-rule text-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent"
          >
            <ChevronDown
              className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </div>
      </button>
      <div className={`disclosure ${open ? "disclosure-open" : ""}`}>
        <div>
          <ul
            id={panelId}
            className="px-1 pb-8 text-sm leading-relaxed text-muted-foreground sm:px-3 md:grid md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <div className="space-y-3 md:col-start-2">
              {role.points.map((point) => (
                <li key={point} className="border-l border-accent/40 pl-4">
                  {point}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
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

      <header className="surface-dark sticky top-0 z-40 border-b border-porcelain/15">
        <nav aria-label="Primary" className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between gap-6 py-4">
            <a
              href="#main"
              className="font-display text-2xl leading-none font-semibold tracking-tight sm:text-3xl"
            >
              Stuart Savage
            </a>

            <ul className="hidden items-center gap-1 text-sm font-medium text-porcelain/80 lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:text-gold"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:text-gold"
                  to="/blog/operational-excellence-in-rail"
                >
                  Guide
                </Link>
              </li>
              <li className="ml-2">
                <a
                  className="inline-flex min-h-11 items-center rounded-sm bg-gold px-4 font-semibold text-navy transition-colors hover:bg-porcelain"
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
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-porcelain/30 px-4 text-sm font-medium text-porcelain transition-colors hover:border-gold hover:text-gold lg:hidden"
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
              className="border-t border-porcelain/20 py-2 text-base font-medium lg:hidden"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-12 items-center border-b border-porcelain/15 transition-colors hover:text-gold"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className="flex min-h-12 items-center border-b border-porcelain/15 transition-colors hover:text-gold"
                  to="/blog/operational-excellence-in-rail"
                  onClick={() => setMenuOpen(false)}
                >
                  Guide
                </Link>
              </li>
              <li className="pt-3 pb-2">
                <a
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-gold px-4 text-sm font-semibold text-navy transition-colors hover:bg-porcelain"
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
        <section className="surface-dark" aria-labelledby="hero-title">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <p className="eyebrow">Kennington, London · Available for full-time roles</p>
            <h1
              id="hero-title"
              className="mt-6 max-w-5xl text-[3.25rem] leading-[1.02] font-semibold sm:text-7xl lg:text-8xl"
            >
              Operations and customer experience leader
            </h1>
            <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
              <p className="text-lg leading-relaxed sm:text-xl">
                I lead operations, customer experience, service delivery and strategic projects. My
                background spans airport hospitality at Heathrow, high-volume restaurant management,
                e-commerce and fulfilment at The Hummingbird Bakery, and running my own businesses
                end to end. I lead calmly, communicate openly and take accountability for delivery.
              </p>
              <div className="border-t border-porcelain/20 pt-6 text-sm leading-relaxed md:border-t-0 md:border-l md:pt-0 md:pl-8">
                <p className="font-semibold text-gold">Currently seeking</p>
                <p className="mt-2">
                  A full-time corporate leadership role in operations, customer experience, service
                  delivery or project delivery — with a particular interest in transport and rail.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center rounded-sm bg-gold px-6 text-sm font-semibold text-navy transition-colors hover:bg-porcelain"
              >
                Email Stuart
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Stuart Savage's LinkedIn profile (opens in a new tab)"
                className="inline-flex min-h-11 items-center rounded-sm border border-porcelain/40 px-6 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
              >
                View LinkedIn profile
              </a>
            </div>
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
          <nav aria-labelledby="timeline-nav-title" className="mt-10 rule-line pt-6">
            <h3
              id="timeline-nav-title"
              className="text-sm font-semibold tracking-wide text-foreground"
            >
              Jump to a role
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {experience.map((role) => (
                <li key={`nav-${role.id}`}>
                  <a
                    href={`#role-${role.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-rule bg-card px-4 py-2 text-xs leading-tight text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-foreground hover:shadow-[0_10px_24px_-18px_var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="font-medium text-foreground">{role.org.split(" — ")[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{role.meta.split(" · ")[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ol className="mt-12 space-y-6">
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
          <SectionHeading eyebrow="Direction" title="The roles I am aiming for" id="roles-title" />
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
        <section id="contact" className="surface-dark scroll-mt-20" aria-labelledby="contact-title">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <SectionHeading eyebrow="Contact" title="Get in touch" id="contact-title" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              If you are hiring for an operations, customer experience, service delivery or project
              delivery role, I would be glad to talk. The quickest route is email.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              <li>
                <p className="eyebrow">Email</p>
                <a
                  className="mt-1 inline-flex min-h-11 items-center break-all text-lg underline underline-offset-4 transition-colors hover:text-gold"
                  href={`mailto:${EMAIL}`}
                  aria-label={`Email Stuart Savage at ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <p className="eyebrow">LinkedIn</p>
                <a
                  className="mt-1 inline-flex min-h-11 items-center text-lg underline underline-offset-4 transition-colors hover:text-gold"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Stuart Savage on LinkedIn (opens in a new tab)"
                >
                  linkedin.com/in/stuartsavage
                </a>
              </li>
            </ul>
          </div>
        </section>
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
