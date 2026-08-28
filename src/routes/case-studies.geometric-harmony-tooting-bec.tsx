import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/geometric-harmony-tooting-bec")({
  component: GeometricHarmonyTootingBecCaseStudy,
});

function GeometricHarmonyTootingBecCaseStudy() {
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
            Project Archive · Tooting Bec · November 2024
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Geometric Circles And Angles: A Tiered Garden Transformation
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Executive operational leadership of a garden refurbishment in Tooting Bec, integrating
            cross-functional team leadership and stakeholder management, using digital twin 3D
            modelling to deliver sustainable geometric hardscaping for this closed project.
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
              <div className="mt-1 font-bold text-[#102845]">November 2024</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Tiered Geometric Transformation</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Executive operational leadership of a garden refurbishment in Tooting Bec, integrating
              cross-functional team leadership and stakeholder management, using digital twin 3D
              modelling to deliver sustainable geometric hardscaping for this closed project. The
              planning stage was reinforced by my 3D walkthrough designs and comprehensive 2D site
              plans covering layouts and materials.
            </p>
            <p>
              <strong>Challenge:</strong> Navigated supply chain disruptions for bespoke oak
              sleepers and enforced strict health & safety compliance during masonry steps
              installation, utilising meteorological data for long-term sustainability.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Managed physical logistics and vendor management
              for Tumbled Multi-mint Indian Sandstone and bespoke oak sleepers, ensuring structural
              engineering compliance for new masonry steps, supported by Floorplanner.com spatial
              planning.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Drawing from botanical expeditions in the Andes,
              selected Magnolia grandiflora, Dryopteris erythrosora, and Helleborus niger, tracking
              soil pH via ShootGardening.com to ensure high-altitude and drought adaptations for
              diverse flora.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/tooting-bec-geometric-garden-day.jpg"
                alt="Daytime view of the tiered garden featuring Indian Sandstone paving and bespoke oak beds"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the tiered garden featuring Indian Sandstone paving and bespoke oak
                beds.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/tooting-bec-geometric-garden-night-lighting.png"
                alt="Evening view of the cinematic sanctuary with vibrant illuminated planting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view of the cinematic sanctuary with vibrant illuminated planting.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Achieved project delivery through rigorous quality assurance and successful risk
              management, creating a garden transformation featuring a circular lawn and bespoke oak
              sleeper raised beds.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
