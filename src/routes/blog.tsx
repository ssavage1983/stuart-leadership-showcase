import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogComponent,
});

function BlogComponent() {
  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#102845] font-sans">
      {/* Sub-navigation Bar */}
      <nav className="border-b border-[#102845]/10 bg-[#102845] py-4 px-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#b99a60] hover:text-white transition-colors"
          >
            &larr; Back to Main Showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Blog Archive
          </span>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <header className="relative bg-[#102845] py-20 px-6 text-white sm:py-28 overflow-hidden">
        {/* Background Image & Gradient Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://static.wixstatic.com/media/a005fe_fd16f3b3d7334721b36a59cefa511128~mv2.jpg')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#102845] via-[#102845]/90 to-[#102845]/60" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
            Blog archive · Historic writing · Professional reflections
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Writing archive, <br />
            <em className="not-italic text-[#b99a60]">not an active blog.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Historic professional writing by Stuart Savage on garden design, horticulture, project delivery, operational judgement, and the thinking behind a former practice.
          </p>
        </div>
      </header>

      {/* Status Notice */}
      <section className="bg-[#c7d0c5] py-8 px-6 border-b border-[#102845]/10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#102845]">Current Status</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-[#102845]">
            Former businesses closed in May 2026. This is a historic writing archive only.
          </h2>
          <p className="mt-2 text-sm text-[#41505b] max-w-4xl">
            Stuart is not currently trading, taking client work, or offering landscaping services. The writing below remains available as historic professional evidence and a record of design, delivery, and operational judgement.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        {/* Section 01: Featured Writing */}
        <section>
          <div className="mb-8 border-b border-[#102845]/10 pb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">01 / Featured Writing</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Professional reflections from the archive</h2>
            <p className="mt-2 text-sm text-slate-600">Selected pieces focused on clarity, planning, technical standards, and project decisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="border border-[#102845]/15 bg-[#ede7dc] p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">LinkedIn · Professional reflection</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">
                The Design Gap: why a digital blueprint is the UK homeowner&apos;s smartest investment
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                A reflection on reducing ambiguity, controlling design decisions, and investing in a clear plan before physical project delivery begins.
              </p>
              <a
                href="https://www.linkedin.com/pulse/design-gap-why-digital-blueprint-uk-homeowners-smartest-stuart-savage-jvj5f"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#102845] hover:text-[#b99a60]"
              >
                Read on LinkedIn &rarr;
              </a>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Design systems · Lighting</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">
                The new standard in nocturnal garden design
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Why an outdoor space should work after dark, and how modelling, contrast, and disciplined lighting choices shape the experience.
              </p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-slate-400">
                Archived Article
              </span>
            </article>
          </div>
        </section>

        {/* Section 02: Historic Articles */}
        <section>
          <div className="mb-8 border-b border-[#102845]/10 pb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">02 / Historic Articles</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Garden design, plants, and project thinking</h2>
            <p className="mt-2 text-sm text-slate-600">Archived articles from the former practice covering spatial design, planting, and practical delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Case study · London</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">From compact courtyard to multidimensional sanctuary</h3>
              <p className="mt-2 text-xs text-slate-600">A practical examination of spatial constraints, privacy, material choices, and operational discipline.</p>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Plant of the month</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">White flowering quince: architectural brilliance</h3>
              <p className="mt-2 text-xs text-slate-600">Resilience, winter structure, and the use of trained flowering walls in compact urban gardens.</p>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Plant knowledge · Winter</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">Hart&apos;s tongue fern</h3>
              <p className="mt-2 text-xs text-slate-600">An evergreen native with a talent for shade: character, practical care, and structured planting.</p>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Commercial planning</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">Landscaping costs, pricing and budgeting</h3>
              <p className="mt-2 text-xs text-slate-600">A guide to scope, materials, site conditions, and contingency decisions shaping responsible project budgets.</p>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Technology · Horticulture</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">Why we used Shoot Gardening technology</h3>
              <p className="mt-2 text-xs text-slate-600">How structured data supported planting decisions and connected visual design with biological performance.</p>
            </article>

            <article className="border border-[#102845]/15 bg-white p-6 rounded shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">Featured garden · Profile</span>
              <h3 className="mt-2 font-serif text-xl text-[#102845]">Featured garden on Shoot Gardening</h3>
              <p className="mt-2 text-xs text-slate-600">Retained gallery showing garden work, planting decisions, and visual detail behind the former practice.</p>
            </article>
          </div>
        </section>

        {/* Section 03: Professional Themes */}
        <section>
          <div className="mb-8 border-b border-[#102845]/10 pb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">03 / Professional Themes</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">What the archive records</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#102845]/15 p-6 rounded bg-white">
              <span className="text-xs font-bold text-[#b99a60]">01</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">Design clarity</h3>
              <p className="mt-2 text-xs text-slate-600">Reducing uncertainty before work begins and using clear plans to protect the project and client experience.</p>
            </div>
            <div className="border border-[#102845]/15 p-6 rounded bg-white">
              <span className="text-xs font-bold text-[#b99a60]">02</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">Horticulture</h3>
              <p className="mt-2 text-xs text-slate-600">Plant-focused writing on structure, resilience, seasonality, and biological performance.</p>
            </div>
            <div className="border border-[#102845]/15 p-6 rounded bg-white">
              <span className="text-xs font-bold text-[#b99a60]">03</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">Delivery control</h3>
              <p className="mt-2 text-xs text-slate-600">Reflections on budgeting, sequencing, materials, site constraints, and delivery discipline.</p>
            </div>
            <div className="border border-[#102845]/15 p-6 rounded bg-white">
              <span className="text-xs font-bold text-[#b99a60]">04</span>
              <h3 className="mt-2 font-serif text-2xl text-[#102845]">Operations</h3>
              <p className="mt-2 text-xs text-slate-600">Evidence of system thinking, supplier coordination, customer communication, and project management.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#102845] py-12 text-center text-white mt-16">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded bg-[#b99a60] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#102845] hover:bg-white transition-colors"
        >
          Return to Operations Showcase
        </Link>
      </footer>
    </div>
  );
}