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
            Project Archive · Balham · June 2023
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            The Gayville Road Zen Sanctuary
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Demonstrated operational leadership in delivering a high-end &apos;Nocturnal
            Sanctuary&apos; in Balham within a strict deadline, utilising digital twin 3D modelling
            and managing stakeholder relationships to overcome site irregularities for this historic
            portfolio piece.
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
              <div className="mt-1 font-bold text-[#102845]">June 2023</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">High-End Nocturnal Sanctuary</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Demonstrated operational leadership in delivering a high-end &apos;Nocturnal
              Sanctuary&apos; in Balham within a strict deadline, utilising digital twin 3D
              modelling and managing stakeholder relationships to overcome site irregularities for
              this historic portfolio piece. To guide the build, I provided complete 2D site plans
              for layouts and materials, as well as dynamic 3D walkthroughs.
            </p>
            <p>
              <strong>Challenge:</strong> Managed supply chain disruptions for custom fencing
              materials under an accelerated deadline, ensuring strict health & safety compliance
              and applying meteorological data to overcome irregular brickwork.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Directed physical logistics and vendor management
              for shadow-gap fencing and Beige Sawn Indian Sandstone, ensuring structural
              engineering compliance for inbuilt rendered benches, aided by Floorplanner.com spatial
              planning.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Leveraging botanical expeditions in the Colombian
              Amazon, selected Dicksonia antarctica, Tetrapanax, and diverse palm species, tracking
              soil pH via ShootGardening.com to ensure jungle adaptations for a nocturnal sanctuary.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/gayville-balham-view-through-bifold-doors.jpg"
                alt="Daytime view of the serene garden featuring custom shadow-gap fencing and sandstone paving"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the serene garden featuring custom shadow-gap fencing and sandstone
                paving.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/gayville-balham-built-in-bench-and-planting.jpg"
                alt="Evening view of the Nocturnal Sanctuary with seamlessly integrated lighting"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view of the Nocturnal Sanctuary with seamlessly integrated lighting.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Achieved project delivery through rigorous quality assurance and successful risk
              management, completing a high-end &apos;Nocturnal Sanctuary&apos; with custom
              shadow-gap fencing.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
