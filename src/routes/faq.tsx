import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: FaqComponent,
});

function FaqComponent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://www.moonlight-studio.uk/faq#faq",
        url: "https://www.moonlight-studio.uk/faq",
        name: "FAQs | Stuart Savage Historic Professional Archive",
        description:
          "Frequently asked questions about Stuart Savage's historic professional archive, former landscaping businesses, archived writing, website status, privacy and contact limitations.",
        inLanguage: "en-GB",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Stuart Savage Landscaping still trading?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Stuart Savage Landscaping and The Moonlight Garden Design Co. closed in May 2026. This website is retained as a historic professional archive only.",
            },
          },
          {
            "@type": "Question",
            name: "What is the purpose of this website now?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The site preserves historic professional writing, former project material, horticultural notes, supplier references, design thinking and archived business context from the former practices.",
            },
          },
          {
            "@type": "Question",
            name: "Is this a current business website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. This is not a current trading website, active service page, booking channel, quotation route, sales funnel or client enquiry route.",
            },
          },
          {
            "@type": "Question",
            name: "Why is the site still online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The site remains online to preserve historic professional evidence, archived writing and a record of previous garden design, landscaping, horticulture and project delivery work.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#102845] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Navigation */}
      <nav className="border-b border-[#102845]/10 bg-[#102845] py-4 px-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#b99a60] hover:text-white transition-colors"
          >
            &larr; Back to Main Showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Archive FAQs
          </span>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <header className="relative bg-[#102845] py-20 px-6 text-white sm:py-28 overflow-hidden">
        {/* Background Image & Gradient Overlays */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url('/images/portfolio/marlborough-mews-tropical-garden-and-herringbone-paving.jpg')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#102845] via-[#102845]/90 to-[#102845]/60" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
            FAQs · Archive status · Website use
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Frequently asked questions for a{" "}
            <em className="not-italic text-[#b99a60]">historic archive.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Answers about the status of this website, the former businesses, archived writing, old
            service references, contact limits, privacy and copyright.
          </p>
        </div>
      </header>

      {/* Status Banner */}
      <section className="bg-[#c7d0c5] py-8 px-6 border-b border-[#102845]/10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#102845]">
            Current Status
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-[#102845]">
            Former businesses closed in May 2026.
          </h2>
          <p className="mt-2 text-sm text-[#41505b] max-w-4xl">
            This website is retained as a historic professional archive. It is not a current trading
            website, quote route, booking channel, service catalogue, or invitation to commission
            new work.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {/* Navigation Quick Links */}
        <nav className="bg-white p-6 border border-[#102845]/15 rounded shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60] mb-3">
            Jump to section
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#archive-status"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Archive Status
            </a>
            <a
              href="#services"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Services
            </a>
            <a
              href="#content"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Archived Content
            </a>
            <a
              href="#contact"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Privacy
            </a>
            <a
              href="#legal"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Legal Neutrality
            </a>
            <a
              href="#copyright"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Copyright
            </a>
            <a
              href="#technical"
              className="p-2 bg-[#f5f1e9] hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Technical
            </a>
          </div>
        </nav>

        {/* Section: Archive Status */}
        <section id="archive-status" className="scroll-mt-6 border-b border-[#102845]/10 pb-8">
          <h2 className="font-serif text-3xl font-semibold text-[#102845]">Archive Status</h2>
          <p className="text-sm text-slate-600 mb-6">
            Understanding the purpose of this historic archive.
          </p>

          <div className="space-y-4">
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Is Stuart Savage Landscaping still trading?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. SAVAGELDN (Stuart Savage Landscaping) and The Moonlight Garden Design Co. closed
                in May 2026. Their former URLs now serve this inactive professional archive only.
              </p>
            </details>
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                What is the purpose of this website now?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                The site preserves historic professional writing, former project material,
                horticultural notes, supplier references, design thinking and archived business
                context from the former practices. It provides evidence of transferable experience
                for future employment opportunities.
              </p>
            </details>
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Is this a current business website?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. This is not a current trading website, active service page, booking channel,
                quotation route, sales funnel or client enquiry route.
              </p>
            </details>
          </div>
        </section>

        {/* Section: Services */}
        <section id="services" className="scroll-mt-6 border-b border-[#102845]/10 pb-8">
          <h2 className="font-serif text-3xl font-semibold text-[#102845]">Services</h2>
          <p className="text-sm text-slate-600 mb-6">
            Clarification on historic service references.
          </p>

          <div className="space-y-4">
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Can I book landscaping or garden design services?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. The website does not offer current landscaping, garden design, construction,
                maintenance, quotations, consultations or site visits.
              </p>
            </details>
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Are old service pages still current?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. Any historic references to services, pricing, suppliers, products, methods or
                availability should be read as archive material only and not as a current commercial
                offer.
              </p>
            </details>
          </div>
        </section>

        {/* Section: Legal Neutrality */}
        <section id="legal" className="scroll-mt-6 border-b border-[#102845]/10 pb-8">
          <h2 className="font-serif text-3xl font-semibold text-[#102845]">Legal Neutrality</h2>
          <p className="text-sm text-slate-600 mb-6">Archive principles and neutral framing.</p>

          <div className="space-y-4">
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Does this website comment on legal or financial matters?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. Nothing on this website is intended to comment on, explain, admit, deny, settle
                or influence any legal, financial, creditor, insolvency, debt, regulatory or
                dispute-related matter.
              </p>
            </details>
            <details className="bg-white border border-[#102845]/15 rounded p-4 cursor-pointer">
              <summary className="font-bold text-[#102845]">
                Can this website be used as evidence of current trading?
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                No. The website should not be used as evidence of current trading, current income,
                current commercial availability, current client work or current service provision.
                It is a historic professional archive only.
              </p>
            </details>
          </div>

          <div className="mt-6 bg-[#fff7e6] border border-[#b99a60]/40 p-4 rounded text-sm text-[#102845]">
            <strong>Important Note:</strong> This FAQ page intentionally uses neutral archive
            wording. It does not discuss specific legal, financial, creditor, or dispute matters and
            should not be read as doing so.
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#102845] py-12 text-center text-white">
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
