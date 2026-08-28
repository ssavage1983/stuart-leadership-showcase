import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/marlborough-mews-sanctuary-brixton")({
  component: MarlboroughMewsSanctuaryBrixtonCaseStudy,
});

function MarlboroughMewsSanctuaryBrixtonCaseStudy() {
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
            Project Archive · Brixton · May 2025
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Marlborough Mews: A Tropical Microclimate
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Demonstrated operational leadership in refurbishing a Brixton garden into a tropical
            sanctuary, utilising digital twin 3D modelling for spatial optimisation and managing
            complex stakeholder relationships to deliver a resort-inspired microclimate for our
            historic portfolio.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <aside className="rounded border-l-4 border-[#b99a60] bg-white p-5 text-sm text-slate-700 shadow-sm mb-8">
          <strong className="block text-[#102845]">Archive-only notice</strong>
          Completed prior to the closure of SAVAGELDN/Moonlight in May 2026. This historic project
          record is retained for reference and as evidence for future professional leadership roles.
        </aside>

        <div className="space-y-8 text-base text-slate-700 leading-relaxed bg-white p-8 rounded border border-[#102845]/15 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Location
              </span>
              <div className="mt-1 font-bold text-[#102845]">Brixton</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">May 2025</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Small Tropical Garden</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Scope
            </h2>
            <p>
              Demonstrated operational leadership in refurbishing a Brixton garden into a tropical
              sanctuary, utilising digital twin 3D modelling for spatial optimisation and managing
              complex stakeholder relationships to deliver a resort-inspired microclimate for our
              historic portfolio. Additionally, I designed immersive 3D walkthroughs and
              comprehensive 2D site plans detailing materials and layout specifications.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Challenge & Logistics
            </h2>
            <p>
              Navigated supply chain disruptions for exotic flora and ensured strict health & safety
              compliance, applying meteorological data to design a shaded tropical garden with
              proper soil depth and drainage.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Managed physical logistics and vendor management
              for reclaimed sleepers and Lugano clay pavers, ensuring structural engineering
              compliance and utilising Floorplanner.com spatial planning for ground-level beds and
              Spanish gold gravel finish.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Drawing from botanical expeditions in the Colombian
              Amazon, selected diverse palm species, Musa basjoo, and Tree ferns, tracking soil pH
              via ShootGardening.com to ensure jungle adaptations for exotic flora.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/marlborough-mews-tropical-garden-and-herringbone-paving.jpg"
                alt="Daytime view of the tropical garden featuring lush ferns and a wooden walkway"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the tropical garden featuring lush ferns and a wooden walkway.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/marlborough-mews-tropical-garden-night-cocktails.jpeg"
                alt="Evening view highlighting the illuminated path and exotic foliage"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view highlighting the illuminated path and exotic foliage.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Delivered project with stringent quality assurance and successful risk management,
              resulting in a unique and private outdoor sanctuary with a &apos;holiday at home&apos;
              vibe.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
