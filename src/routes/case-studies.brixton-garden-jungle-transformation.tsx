import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/brixton-garden-jungle-transformation")({
  component: BrixtonGardenJungleTransformationCaseStudy,
});

function BrixtonGardenJungleTransformationCaseStudy() {
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
            Project Archive · Brixton · May 2024
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Jungle Garden Transformation
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Executed operational leadership for a dramatic urban overhaul in Brixton, using digital
            twin 3D modelling to design a multi-layered &apos;Jungle Sanctuary&apos; and
            coordinating complex stakeholder relationships to deliver structural masonry for this
            historic project.
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
              <div className="mt-1 font-bold text-[#102845]">Brixton</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">May 2024</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Multi-Layered Jungle Sanctuary</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Executed operational leadership for a dramatic urban overhaul in Brixton, using
              digital twin 3D modelling to design a multi-layered &apos;Jungle Sanctuary&apos; and
              coordinating complex stakeholder relationships to deliver structural masonry for this
              historic project. I also developed in-depth 2D site plans for material selection and
              layout, coupled with engaging 3D walkthroughs.
            </p>
            <p>
              <strong>Challenge:</strong> Navigated supply chain disruptions for reclaimed masonry
              and ensured strict health & safety compliance during tiered wall construction,
              applying meteorological data to create a secluded, high-impact retreat.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Managed physical logistics and vendor management
              for reclaimed brick and natural stone, ensuring structural engineering compliance for
              tiered retaining walls, supported by Floorplanner.com spatial planning for bespoke
              timber seating.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Drawing from jungle expeditions in South America,
              selected dense, architectural planting including Silver Birch and Ferns, tracking soil
              pH via ShootGardening.com to ensure lush jungle adaptations for tropical-inspired
              softscaping.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/brixton-urban-jungle-tree-ferns-and-integrated-bench.png"
                alt="Daytime view of the tiered brick garden with bespoke timber seating"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the tiered brick garden with bespoke timber seating.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/brixton-urban-jungle-warm-evening-lighting.png"
                alt="Evening view showcasing the illuminated tropical-inspired planting and seating area"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view showcasing the illuminated tropical-inspired planting and seating area.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Achieved project delivery through rigorous quality assurance and successful risk
              management, creating a vibrant, multi-layered &apos;Jungle Sanctuary&apos; with tiered
              retaining walls.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
