import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/gayville-zen-sanctuary-balham")({
  component: GayvilleZenSanctuaryBalhamCaseStudy,
});

function GayvilleZenSanctuaryBalhamCaseStudy() {
  return (
    <article className="min-h-screen bg-[#f5f1e9] text-[#102845]">
      <header className="bg-[#102845] px-6 py-14 text-[#f8f7f3] sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/case-studies"
            className="text-xs font-bold uppercase tracking-widest text-[#c9ad72] hover:text-white"
          >
            &larr; Case studies archive
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-[#c9ad72]">
            Project Archive · Minimalist Urban Sanctuary & Hard Landscaping
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Gayville Zen Sanctuary, Balham
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Precision spatial restructuring, minimalist hardscaping, and architectural planting
            orchestration transforming a compact Balham courtyard into a serene, meditative urban
            retreat.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <aside className="rounded border-l-4 border-[#b99a60] bg-white p-5 text-sm text-slate-700 shadow-sm">
          <strong className="block text-[#102845]">Archive-only notice</strong>
          This historic project record is retained for reference and as evidence for future
          professional leadership roles. SAVAGELDN and The Moonlight Garden Design Co. closed in May
          2026; their former URLs are inactive business archives, not current offers or invitations
          to book.
        </aside>

        <div className="mt-10">
          <figure className="mb-10 overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
            <img
              src="/images/portfolio/gayville-balham-built-in-bench-and-planting.jpg"
              alt="Gayville Zen Sanctuary, Balham"
              className="h-auto w-full object-cover max-h-[480px]"
              loading="lazy"
            />
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="rounded border border-[#102845]/15 bg-white p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Design / Focus
              </span>
              <div className="mt-2 text-xl font-bold text-[#102845]">Minimalist Zen</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-white p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Materials / Scope
              </span>
              <div className="mt-2 text-xl font-bold text-[#102845]">Vitrified Slate & Timber</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-white p-5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Quality Standard
              </span>
              <div className="mt-2 text-xl font-bold text-[#102845]">Zero-Defect Finish</div>
            </div>
          </div>

          <div className="space-y-8 text-base text-slate-700 leading-relaxed bg-white p-8 rounded border border-[#102845]/15 shadow-sm">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-normal text-[#102845]">
                Project Overview & Context
              </h2>
              <p>
                This project demonstrates rigorous operational planning, stakeholder management, and
                precision execution within a challenging urban footprint. Every phase was governed
                by strict quality milestones and comprehensive risk management to ensure a
                zero-defect handover.
              </p>
              <p>
                Through disciplined supply chain coordination and detailed structural detailing, the
                installation achieves lasting functional reliability alongside exceptional aesthetic
                presentation.
              </p>
            </section>

            <div className="mb-10 overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/gayville-balham-buddha-and-night-lighting.jpg"
                alt="Gayville Zen Sanctuary, Balham detail"
                className="h-auto w-full object-cover max-h-[444px]"
                loading="lazy"
              />
            </div>

            <section className="space-y-4 pt-4 border-t border-[#102845]/10">
              <h2 className="font-serif text-2xl font-normal text-[#102845]">
                Operational Governance & Delivery
              </h2>
              <p>
                From initial site survey to final commissioning, operations were structured around
                transparent milestone tracking, minimal neighborhood disruption, and uncompromising
                material standards.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
