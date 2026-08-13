import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesComponent,
});

function CaseStudiesComponent() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans">
      {/* Navigation Header */}
      <nav className="border-b border-[#102a43]/10 bg-[#091d2f] py-4 px-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#c47c62] hover:text-[#c7a667] transition-colors"
          >
            &larr; Back to Main Showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Portfolio Archive
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#091d2f] py-16 px-6 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">
            Portfolio archive · Historic case studies
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Selected historic work. <br />
            <em className="not-italic text-[#c47c62]">Archive only.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            A curated record of previous delivery, planning, logistics, and customer experience work.
          </p>

          <div className="mt-6 rounded-md border-l-4 border-[#c47c62] bg-white/5 p-4 text-sm text-slate-200 max-w-3xl">
            <strong>Archive Status:</strong> These projects are shown for historical and professional context only. The former businesses closed in May 2026. This page is retained as an archive of delivery and operational capability.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="rounded bg-[#c47c62] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c7a667] hover:text-[#091d2f] transition-all"
            >
              View Case Studies
            </a>
            <a
              href="#method"
              className="rounded border border-[#c47c62] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c7a667] hover:text-[#091d2f] hover:border-[#c7a667] transition-all"
            >
              Delivery Method
            </a>
          </div>
        </div>
      </header>

      {/* Section 01: Context */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-b border-[#102a43]/10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">01</p>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">Context</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-slate-700">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102a43]">Past work, preserved carefully.</h2>
            <p>
              This page records selected historic project work to show previous operational capability, planning discipline, client communication, and delivery standards.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4">
              <div className="border border-[#c47c62]/30 bg-white/50 p-3 rounded">
                <strong className="block text-xs uppercase text-[#102a43]">Status</strong>
                <span className="text-xs text-slate-600">Former businesses closed May 2026</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/50 p-3 rounded">
                <strong className="block text-xs uppercase text-[#102a43]">Purpose</strong>
                <span className="text-xs text-slate-600">Historic archive of project delivery</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/50 p-3 rounded">
                <strong className="block text-xs uppercase text-[#102a43]">Availability</strong>
                <span className="text-xs text-slate-600">Not taking on new trade client work</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/50 p-3 rounded">
                <strong className="block text-xs uppercase text-[#102a43]">Focus</strong>
                <span className="text-xs text-slate-600">Corporate Operations & CX Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Case Studies */}
      <section id="case-studies" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">02</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">Selected Case Studies</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#102a43]">Delivery Evidence</h2>
        </div>

        {/* Featured Case Study 1 */}
        <article className="mb-12 grid grid-cols-1 lg:grid-cols-2 border border-[#102a43]/15 bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="relative min-h-[320px]">
            <img
              src="https://static.wixstatic.com/media/a005fe_fd16f3b3d7334721b36a59cefa511128~mv2.jpg"
              alt="Balham garden transformation"
              className="h-full w-full object-cover"
            />
            <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-[#f7f4ee] font-bold text-xs text-[#102a43] rounded">
              01
            </span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#c47c62] border border-[#c47c62]/40 px-2 py-1 rounded w-max mb-3">
              Historic Archive
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#102a43]">Balham Transformation</h3>
            <p className="mt-3 text-sm text-slate-600">
              A complete project transformation requiring careful sequencing, procurement, site coordination, and client communication across a constrained London setting.
            </p>
            <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-[#102a43]">Evidence of Delivery</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>Project planning and phased programme control</li>
              <li>Material procurement and supplier coordination</li>
              <li>Client updates, site safety, and quality control</li>
              <li>Handover discipline and detail resolution</li>
            </ul>
          </div>
        </article>

        {/* Case Studies Grid (2 & 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="border border-[#102a43]/15 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://static.wixstatic.com/media/a005fe_38195cc6234740de88d7877ec4214083~mv2.jpg"
                alt="Digital twin workflow"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center bg-[#f7f4ee] font-bold text-xs text-[#102a43] rounded">
                02
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#c47c62] border border-[#c47c62]/40 px-2 py-1 rounded w-max mb-2">
                Planning Archive
              </span>
              <h3 className="font-serif text-2xl text-[#102a43]">Digital Twin Workflow</h3>
              <p className="mt-2 text-sm text-slate-600">
                A remote planning method combining structured briefs, 3D visualisation, and environmental data to reduce ambiguity before delivery.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#102a43]">Evidence of Delivery</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Spatial modelling and visual planning</li>
                <li>Brief development and decision support</li>
                <li>Delivery risk reduction before site execution</li>
              </ul>
            </div>
          </article>

          <article className="border border-[#102a43]/15 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://static.wixstatic.com/media/a005fe_5ecb889aaac5452f99a906260086ae68~mv2.jpg"
                alt="Supply chain control"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center bg-[#f7f4ee] font-bold text-xs text-[#102a43] rounded">
                03
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#c47c62] border border-[#c47c62]/40 px-2 py-1 rounded w-max mb-2">
                Operations Archive
              </span>
              <h3 className="font-serif text-2xl text-[#102a43]">Supply Chain Control</h3>
              <p className="mt-2 text-sm text-slate-600">
                Materials, people, dependencies, and quality standards coordinated across live projects with clear reporting and delivery oversight.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#102a43]">Evidence of Delivery</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Supplier and material coordination</li>
                <li>Programme control and sequencing</li>
                <li>Operational reporting and quality assurance</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Section 03: Delivery Method */}
      <section id="method" className="border-t border-b border-[#102a43]/10 bg-white py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c7a667]">03</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">Historic Delivery Approach</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#102a43]">How the Work Was Managed</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-[#102a43]/15 p-6 rounded bg-[#f7f4ee]">
              <span className="text-xs font-bold text-[#c7a667]">01</span>
              <strong className="block mt-2 text-xs uppercase tracking-wider text-[#102a43]">Brief</strong>
              <p className="mt-2 text-xs text-slate-600">Clarifying requirements, constraints, site conditions, and client priorities before work began.</p>
            </div>
            <div className="border border-[#102a43]/15 p-6 rounded bg-[#f7f4ee]">
              <span className="text-xs font-bold text-[#c7a667]">02</span>
              <strong className="block mt-2 text-xs uppercase tracking-wider text-[#102a43]">Plan</strong>
              <p className="mt-2 text-xs text-slate-600">Turning the brief into a workable sequence with materials, people, and dependencies mapped clearly.</p>
            </div>
            <div className="border border-[#102a43]/15 p-6 rounded bg-[#f7f4ee]">
              <span className="text-xs font-bold text-[#c7a667]">03</span>
              <strong className="block mt-2 text-xs uppercase tracking-wider text-[#102a43]">Deliver</strong>
              <p className="mt-2 text-xs text-slate-600">Managing activity, communication, safety, and quality through controlled delivery stages.</p>
            </div>
            <div className="border border-[#102a43]/15 p-6 rounded bg-[#f7f4ee]">
              <span className="text-xs font-bold text-[#c7a667]">04</span>
              <strong className="block mt-2 text-xs uppercase tracking-wider text-[#102a43]">Close</strong>
              <p className="mt-2 text-xs text-slate-600">Completing handover, resolving details, and preserving a clear record of the finished work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Back Link */}
      <footer className="py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded bg-[#091d2f] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c47c62] transition-colors"
        >
          Return to Operations Showcase
        </Link>
      </footer>
    </div>
  );
}