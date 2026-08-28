import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/balham-pergola-walkway")({
  component: BalhamPergolaWalkwayCaseStudy,
});

function BalhamPergolaWalkwayCaseStudy() {
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
            Project Archive · Balham · May 2025
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Pergola Walkway: A Modern Nocturnal Sanctuary
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Led the operational transformation of a Balham garden featuring a ModBlox pergola,
            utilising digital twin 3D modelling for utility integration and managing complex
            stakeholder relationships to ensure seamless historic project execution.
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
              <div className="mt-1 font-bold text-[#102845]">Balham</div>
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
              <div className="mt-1 font-bold text-[#102845]">Modern Nocturnal Sanctuary</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Led the operational transformation of a Balham garden featuring a ModBlox pergola,
              utilising digital twin 3D modelling for utility integration and managing complex
              stakeholder relationships to ensure seamless historic project execution. The design
              phase included creating detailed 3D walkthroughs and complete 2D site plans to map out
              materials and layout.
            </p>
            <p>
              <strong>Challenge:</strong> Managed supply chain disruptions for bespoke ModBlox
              components and enforced strict health & safety compliance during excavation, applying
              meteorological data to integrate drainage for level artificial turf.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Directed physical logistics and vendor management
              for a ModBlox pergola and Raj Green sandstone, ensuring structural engineering
              compliance for recessed drainage and utilising Floorplanner.com spatial planning for
              raised beds.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Leveraging botanical research in India, selected
              White Jasmine and Purple Clematis, tracking soil pH via ShootGardening.com to ensure
              drought adaptations for established climbing plants alongside premium artificial
              grass.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/balham-pergola-walkway-design-visualisation.png"
                alt="Daytime view of the custom ModBlox pergola and sandstone paved walkway"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the custom ModBlox pergola and sandstone paved walkway.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/balham-pergola-walkway-festoon-lights-at-night.jpg"
                alt="Evening view of the secluded sanctuary with atmospheric pergola lighting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view of the secluded sanctuary with atmospheric pergola lighting.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Delivered project with stringent quality assurance and successful risk management,
              resulting in a stunning Balham garden transformation featuring a ModBlox pergola and
              sandstone paving.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
