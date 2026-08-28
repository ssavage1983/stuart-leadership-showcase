import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/walworth-sanctuary")({
  component: WalworthSanctuaryCaseStudy,
});

function WalworthSanctuaryCaseStudy() {
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
            Project Archive · Kennington / Walworth (SE17) · October 2025
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            The Walworth Sanctuary (SE17)
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Demonstrated executive operational leadership by directing the transformation of a
            cluttered urban plot in Walworth, managing complex site logistics and stakeholder
            coordination, aided by digital twin 3D modelling for spatial planning for this historic
            portfolio project.
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
              <div className="mt-1 font-bold text-[#102845]">Kennington / Walworth (SE17)</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">October 2025</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Urban Plot Transformation</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Demonstrated executive operational leadership by directing the transformation of a
              cluttered urban plot in Walworth, managing complex site logistics and stakeholder
              coordination, aided by digital twin 3D modelling for spatial planning for this
              historic portfolio project. Additionally, I delivered precise 2D site plans for
              layouts and material choices, along with immersive 3D walkthroughs.
            </p>
            <p>
              <strong>Challenge:</strong> Overcame supply chain disruptions for traditional clay
              pavers and ensured strict health & safety compliance during concrete slab removal,
              applying meteorological data to transform an exposed, cluttered plot.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Coordinated physical logistics and vendor
              management for Kandla Grey Porcelain and traditional Lugano Clay Pavers, ensuring
              structural engineering compliance for dedicated bin storage, utilising
              Floorplanner.com spatial planning.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Inspired by jungle expeditions in the Colombian
              Amazon, implemented integrated &apos;Vert&apos; (vertical) planting zones, tracking
              soil pH via ShootGardening.com to ensure jungle adaptations and structural resilience.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/walworth-front-garden-slatted-bin-store-and-planting.jpg"
                alt="Daytime view of the urban sanctuary with Kandla Grey Porcelain and vertical planting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the urban sanctuary with Kandla Grey Porcelain and vertical
                planting.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/walworth-rear-garden-privacy-planting-and-lighting.png"
                alt="Evening view highlighting the traditional clay pavers and atmospheric lighting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view highlighting the traditional clay pavers and atmospheric lighting.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Delivered project with stringent quality assurance and successful risk management,
              resulting in a cohesive, multi-textured landscape serving as a functional entrance and
              private retreat.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
