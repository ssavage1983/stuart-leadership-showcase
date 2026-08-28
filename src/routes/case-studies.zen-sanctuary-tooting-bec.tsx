import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/zen-sanctuary-tooting-bec")({
  component: ZenSanctuaryTootingBecCaseStudy,
});

function ZenSanctuaryTootingBecCaseStudy() {
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
            Project Archive · Tooting Bec · September 2023
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Japanese Zen Garden Design
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Demonstrated executive operational leadership and cross-functional team management in
            delivering a Japanese-inspired garden retreat in Tooting Bec, integrating digital twin
            3D modelling and stakeholder alignment to execute complex pathing for this historic
            project.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <aside className="rounded border-l-4 border-[#b99a60] bg-white p-5 text-sm text-slate-700 shadow-sm mb-8">
          <strong className="block text-[#102845]">Archive-only notice</strong>
          Former SAVAGELDN & Moonlight Legacy Project (Concluded active trading operations May
          2026). This historic project record is retained for reference and as evidence for future
          professional leadership roles.
        </aside>

        <div className="space-y-8 text-base text-slate-700 leading-relaxed bg-white p-8 rounded border border-[#102845]/15 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Location
              </span>
              <div className="mt-1 font-bold text-[#102845]">Tooting Bec</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">September 2023</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Japanese Zen Garden Retreat</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Demonstrated executive operational leadership and cross-functional team management in
              delivering a Japanese-inspired garden retreat in Tooting Bec, integrating digital twin
              3D modelling and stakeholder alignment to execute complex pathing for this historic
              project. My design contributions encompassed full 2D site plans for spatial layouts
              and materials, plus interactive 3D walkthroughs.
            </p>
            <p>
              <strong>Challenge:</strong> Overcame supply chain disruptions for specialised gravels
              and enforced strict health & safety compliance during pathway construction, utilising
              meteorological data to create a serene, meditative escape.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Coordinated physical logistics and vendor
              management for Beige smooth planks and Spanish gold gravel, ensuring structural
              engineering compliance for curved pathways, utilising Floorplanner.com spatial
              planning for oak raised beds.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Inspired by botanical expeditions in India,
              selected Acer trees, shade-loving ferns, and textural groundcover, tracking soil pH
              via ShootGardening.com to ensure drought adaptations for layered evergreens and
              structural shrubs.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/tooting-bec-japanese-garden-gravel-path-and-climbers.jpg"
                alt="Daytime view of the Zen retreat featuring a meandering gravel path and striking Acer trees"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the Zen retreat featuring a meandering gravel path and striking Acer
                trees.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg"
                alt="Evening view of the Japanese-inspired garden with serene nocturnal lighting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view of the Japanese-inspired garden with serene nocturnal lighting.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Achieved project delivery through rigorous quality assurance and successful risk
              management, creating a serene, Japanese-inspired Zen garden retreat with meandering
              gravel paths.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
