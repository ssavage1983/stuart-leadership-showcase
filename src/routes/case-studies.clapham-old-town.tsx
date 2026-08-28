import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/clapham-old-town")({
  component: ClaphamOldTownCaseStudy,
});

function ClaphamOldTownCaseStudy() {
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
            Project Archive · Clapham · July 2025
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Clapham Old Town – Front & Rear Garden Renovation
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Executive operational leadership of a full garden renovation in Clapham Old Town,
            managing cross-functional teams and stakeholder coordination, utilising digital twin 3D
            modelling to deliver modern front and rear outdoor spaces in this historic portfolio
            piece.
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
              <div className="mt-1 font-bold text-[#102845]">Clapham</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">July 2025</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Front & Rear Garden Renovation</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Executive operational leadership of a full garden renovation in Clapham Old Town,
              managing cross-functional teams and stakeholder coordination, utilising digital twin
              3D modelling to deliver modern front and rear outdoor spaces in this historic
              portfolio piece. I created detailed 2D site plans outlining materials and layouts,
              supported by realistic 3D walkthroughs for client visualization.
            </p>
            <p>
              <strong>Challenge:</strong> Managed supply chain disruptions for premium porcelain
              paving and ensured strict health & safety compliance across dual work sites, applying
              meteorological data to guarantee year-round planting interest.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Directed physical logistics and vendor management
              for Kandla Grey porcelain and Lugano clay pavers, ensuring structural engineering
              compliance for bespoke brick walls, aided by Floorplanner.com spatial planning.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Leveraging botanical research in South America and
              the Himalayas, selected Musa basjoo, Fatsia, and Salvia, tracking soil pH via
              ShootGardening.com to ensure drought and jungle adaptations for front and rear spaces.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/clapham-old-town-front-garden-porcelain-path-and-coping.png"
                alt="Daytime view of the sustainable garden with sleek Kandla Grey paving and bespoke fencing"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the sustainable garden with sleek Kandla Grey paving and bespoke
                fencing.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/clapham-old-town-tropical-seating-at-night.png"
                alt="Evening view of the private sanctuary illuminated for year-round enjoyment"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view of the private sanctuary illuminated for year-round enjoyment.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Delivered project with stringent quality assurance and successful risk management,
              resulting in a full garden renovation with new paving, brickwork, and raised beds.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
