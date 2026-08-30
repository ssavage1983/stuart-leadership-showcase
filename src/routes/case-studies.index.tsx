// @ts-nocheck
import { createFileRoute, Link } from "@tanstack/react-router";

import { caseStudies } from "@/data/caseStudies";

const TITLE = "Portfolio Archive | Stuart Savage Historic Professional Archive";
const DESCRIPTION =
  "Historic project records showing delivery, coordination and operational evidence. Former businesses closed; archive only.";

export const Route = createFileRoute("/case-studies/")({
  _ignored_head: () => ({
    meta: [
      { title: "Project Portfolio | Stuart Savage" },
      {
        name: "description",
        content:
          "Archive of landscape design and structural planning projects delivered across South London, demonstrating strict zero-defect quality assurance.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Project Portfolio Archive",
          description: "Historic project delivery records and methodologies for Stuart Savage.",
          url: "https://www.moonlight-studio.uk/case-studies",
        }),
      },
    ],
  }),
  component: CaseStudiesComponent,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.moonlight-studio.uk/case-studies" }],
  }),
});

const method = [
  [
    "Brief",
    "Clarifying requirements, constraints, site conditions and customer priorities before work began.",
  ],
  [
    "Plan",
    "Turning the brief into a workable sequence with materials, people and dependencies mapped clearly.",
  ],
  [
    "Deliver",
    "Managing activity, communication, safety and quality through controlled delivery stages.",
  ],
  [
    "Close",
    "Completing handover, resolving details and preserving a clear record of the finished work.",
  ],
] as const;

function CaseStudiesComponent() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] font-sans text-[#102a43]">
      <nav className="border-b border-white/10 bg-[#091d2f] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#7c2d12] hover:text-white"
          >
            &larr; Main showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Portfolio archive
          </span>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-[#091d2f] px-6 py-20 text-white sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('/images/portfolio/marlborough-mews-tropical-garden-and-herringbone-paving.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091d2f] via-[#091d2f]/90 to-[#091d2f]/60" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c2d12]">
            Portfolio archive · Historic case studies
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Selected historic work.
            <br />
            <em className="not-italic text-[#7c2d12]">Archive only.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            A curated record of previous delivery, planning, logistics, customer experience and
            operational discipline.
          </p>
          <div className="mt-6 max-w-3xl rounded border-l-4 border-[#7c2d12] bg-white/5 p-4 text-sm text-slate-200">
            <strong>Archive status:</strong> SAVAGELDN and The Moonlight Garden Design Co. closed in
            May 2026. Their former URLs are inactive business archives. These projects are evidence
            of transferable experience for future employment, not current landscaping or
            garden-design services.
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="rounded bg-[#7c2d12] px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#091d2f]"
            >
              View case studies
            </a>
            <a
              href="#method"
              className="rounded border border-[#7c2d12] px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#091d2f]"
            >
              Delivery method
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl border-b border-[#102a43]/10 px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-2 pt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">01</p>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7c2d12]">Context</p>
          </div>
          <div className="space-y-4 text-slate-700 lg:col-span-8">
            <h2 className="font-serif text-3xl text-[#102a43] sm:text-4xl">
              Past work, preserved carefully.
            </h2>
            <p>
              This portfolio records previous operational capability, planning discipline, customer
              communication and delivery standards. Each card now opens a dedicated project record.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {[
                ["Status", "Closed May 2026"],
                ["Purpose", "Historic delivery archive"],
                ["Availability", "Not taking trade work"],
                ["Current focus", "Operations & CX leadership"],
              ].map(([label, value]) => (
                <div key={label} className="rounded border border-[#7c2d12]/30 bg-white/50 p-3">
                  <strong className="block text-xs uppercase">{label}</strong>
                  <span className="text-xs text-slate-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-7xl scroll-mt-6 px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">02</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c2d12]">
            Historic project records
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-5xl">Delivery evidence</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-[#102a43]/15 bg-white shadow-sm"
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: study.slug }}
                className="group relative block h-56 overflow-hidden bg-[#e8e2d9]"
                aria-label={`Open ${study.title}`}
              >
                {study.image ? (
                  <img
                    src={study.image}
                    alt={study.title}
                    width="720"
                    height="420"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#d8d0c3] to-[#eee8df] px-8 text-center text-xs font-bold uppercase tracking-widest text-[#102a43]/60">
                    Historic project image being recovered
                  </div>
                )}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded bg-[#f7f4ee] text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c2d12]">
                  {study.archiveStatus} · {study.location}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-tight">
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: study.slug }}
                    className="hover:text-[#7c2d12]"
                  >
                    {study.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.excerpt}
                </p>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: study.slug }}
                  className="mt-5 border-t border-[#102a43]/10 pt-4 text-xs font-bold uppercase tracking-wider hover:text-[#7c2d12]"
                >
                  View project record &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="scroll-mt-6 border-y border-[#102a43]/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">03</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c2d12]">
            Historic delivery approach
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">How the work was managed</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {method.map(([title, body], index) => (
              <article key={title} className="rounded border border-[#102a43]/15 bg-[#f7f4ee] p-6">
                <span className="text-xs font-bold text-[#c7a667]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xs font-bold uppercase tracking-wider">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-12 bg-[#091d2f] px-6 py-12 text-center text-white">
        <Link
          to="/"
          className="inline-flex rounded bg-[#7c2d12] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#091d2f]"
        >
          Return to operations showcase
        </Link>
      </footer>
    </div>
  );
}

