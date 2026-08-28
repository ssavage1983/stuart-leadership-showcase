import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/modern-cottage-greenwich")({
  component: ModernCottageGreenwichCaseStudy,
});

function ModernCottageGreenwichCaseStudy() {
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
            Project Archive · Greenwich · September 2025
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            The Modern Cottage
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">
            Directed the operational delivery of a &apos;Modern Cottage&apos; urban garden in
            Greenwich, leveraging digital twin 3D modelling to balance soft, romantic aesthetics
            with low-maintenance requirements, while managing stakeholder expectations for this
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
              <div className="mt-1 font-bold text-[#102845]">Greenwich</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Completion Date
              </span>
              <div className="mt-1 font-bold text-[#102845]">September 2025</div>
            </div>
            <div className="rounded border border-[#102845]/15 bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b99a60]">
                Focus
              </span>
              <div className="mt-1 font-bold text-[#102845]">Urban Modern Cottage</div>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Project Overview & Challenge
            </h2>
            <p>
              Directed the operational delivery of a &apos;Modern Cottage&apos; urban garden in
              Greenwich, leveraging digital twin 3D modelling to balance soft, romantic aesthetics
              with low-maintenance requirements, while managing stakeholder expectations for this
              historic project. As part of the design process, I produced full 2D site plans for
              layouts and materials, alongside realistic 3D walkthroughs.
            </p>
            <p>
              <strong>Challenge:</strong> Overcame supply chain disruptions for heritage materials
              while maintaining strict health & safety compliance, utilising meteorological data to
              ensure low-maintenance drift planting thrived in an urban context.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">
              Hard Landscaping & Soft Landscaping
            </h2>
            <p>
              <strong>Hard Landscaping:</strong> Coordinated physical logistics and vendor
              management for London Mixture Clay Pavers and Jackson&apos;s Fencing, ensuring
              structural engineering compliance for a new listed wall, aided by Floorplanner.com
              spatial planning.
            </p>
            <p>
              <strong>Soft Landscaping:</strong> Inspired by high-altitude flora in Nepal, selected
              Calamagrostis x acutiflora and Pittosporum balls, tracking soil pH via
              ShootGardening.com to ensure drought adaptations and sculptural winter structure for
              cottage plants.
            </p>
          </section>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/greenwich-modern-cottage-garden-overview.jpg"
                alt="Daytime view of the romantic cottage garden with a stone path and vibrant blooms"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Daytime view of the romantic cottage garden with a stone path and vibrant blooms.
              </p>
            </div>

            <div className="overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
              <img
                src="/images/portfolio/greenwich-modern-cottage-shade-planting-detail.jpg"
                alt="Evening view showing the warm lighting along the garden path"
                className="w-full h-auto object-cover max-h-[480px]"
                loading="lazy"
              />
              <p className="p-3 text-xs text-slate-500 bg-slate-50">
                Evening view showing the warm lighting along the garden path.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-4 border-t border-[#102845]/10">
            <h2 className="font-serif text-2xl font-normal text-[#102845]">Outcome</h2>
            <p>
              Achieved project delivery through rigorous quality assurance and successful risk
              management, creating an urban Modern Cottage that reads soft and romantic without high
              upkeep.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
