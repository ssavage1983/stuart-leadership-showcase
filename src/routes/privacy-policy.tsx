import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyComponent,
});

function PrivacyPolicyComponent() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#102845] font-sans">
      {/* Navigation Sub-bar */}
      <nav className="border-b border-[#102845]/10 bg-[#102845] py-4 px-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#b99a60] hover:text-white transition-colors"
          >
            &larr; Back to Main Showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Legal, Privacy &amp; Accessibility
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#102845] py-20 px-6 text-white sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://static.wixstatic.com/media/a005fe_83795358ed1f46e783522d83266a67c6~mv2.jpg')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#102845] via-[#102845]/95 to-[#102845]/60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
            Legal · Privacy · Accessibility · Archive status
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Clear legal information for a{" "}
            <em className="not-italic text-[#b99a60]">historic archive.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            This page explains the legal, privacy, accessibility, copyright and archive-status terms that apply to this website. The site preserves historic professional material and does not offer current landscaping, garden design or construction services.
          </p>
        </div>
      </header>

      {/* Main Layout Area */}
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {/* Navigation Quick Links */}
        <nav className="bg-white p-6 border border-[#102845]/15 rounded shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60] mb-3">On this page</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => scrollTo("archive-status")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Archive Status
            </button>
            <button
              type="button"
              onClick={() => scrollTo("privacy")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => scrollTo("cookies")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Cookies &amp; Tracking
            </button>
            <button
              type="button"
              onClick={() => scrollTo("accessibility")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Accessibility
            </button>
            <button
              type="button"
              onClick={() => scrollTo("terms")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Website Terms
            </button>
            <button
              type="button"
              onClick={() => scrollTo("licence")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Copyright &amp; Licence
            </button>
            <button
              type="button"
              onClick={() => scrollTo("disclaimer")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Disclaimer
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Content Body */}
        <article className="max-w-4xl mx-auto space-y-12">
          <p className="text-sm font-bold text-[#102845]">Last updated: 3 August 2026</p>

          {/* Section: Archive Status */}
          <section id="archive-status" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Archive status</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This website is a historic professional archive for Stuart Savage. It preserves selected writing, project material, articles and professional context from Stuart Savage Landscaping and The Moonlight Garden Design Co.
            </p>

            <div className="bg-white p-5 border-l-4 border-[#b99a60] text-sm text-[#102845] rounded shadow-sm">
              The former businesses closed in May 2026. This website is retained for historical, professional and reference purposes only. It is not a current trading website, service catalogue, booking channel, quotation route or invitation to commission landscaping, garden design, construction or maintenance work.
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Legal and financial neutrality</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nothing on this website is intended to comment on, explain, admit, deny, settle or influence any legal, financial, creditor, insolvency, debt, regulatory or dispute-related matter. Historic content is retained only to show the professional context in which it was created.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Any older wording, images, articles, prices, service descriptions, supplier references, client references or project information should be read as historic material only. They should not be treated as current availability, current trading status, current advice or a current commercial representation.
            </p>
          </section>

          {/* Section: Privacy */}
          <section id="privacy" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Privacy</h2>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Who is responsible</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Stuart Savage is responsible for personal information handled directly through this website. For privacy-related contact, use the contact email shown on this site.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Information that may be used</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              You do not need to create an account, place an order or submit personal information to read this archive. If you choose to contact Stuart by email, LinkedIn or another route, the information you provide may include your name, contact details, organisation and message.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Wix and other website service providers may process technical information needed to host, secure, maintain and display the website, such as device, browser, security and usage information.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Why information is used</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Information may be used to respond to genuine messages, operate and protect the website, maintain records, comply with legal obligations and prevent misuse. The usual lawful bases may include legitimate interests, steps taken at your request and legal compliance where applicable.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Sharing and retention</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Personal information is not sold. It may be processed by Wix and relevant service providers for hosting, security, communication and technical operation, or disclosed where required by law. Information is kept only for as long as reasonably necessary for the relevant purpose, record-keeping requirement or legal obligation.
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">Your rights</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Depending on the circumstances, you may have rights to access, correct, erase or restrict your information, object to processing and request data portability. You may also complain to the Information Commissioner&apos;s Office.
            </p>
          </section>

          {/* Section: Cookies */}
          <section id="cookies" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Cookies and tracking</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Essential cookies and similar technologies may be used for security, reliability, fraud prevention, performance and basic website operation.
            </p>
            <div className="bg-white p-5 border-l-4 border-[#b99a60] text-sm text-[#102845] rounded shadow-sm">
              Meta Pixel is not intentionally used on this website. The site code does not include Facebook or Meta Pixel scripts.
            </div>
          </section>

          {/* Section: Accessibility */}
          <section id="accessibility" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Accessibility</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              The aim is to make this site usable by as many people as reasonably possible and to work towards WCAG 2.2 Level AA. The site uses semantic headings, keyboard-accessible links, visible focus indicators, readable contrast, responsive layouts and descriptive link text where possible.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you encounter an accessibility barrier, contact Stuart with the page, device and problem so a reasonable alternative format or practical solution can be considered.
            </p>
          </section>

          {/* Section: Website Terms */}
          <section id="terms" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Website terms</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This website provides general historic information and professional context. It does not provide legal, financial, tax, insolvency, construction, horticultural, safety or professional advice.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Use of this website does not create a contract, client relationship, adviser relationship, supplier relationship or duty to provide services. No current services are offered through this website.
            </p>
          </section>

          {/* Section: Copyright */}
          <section id="licence" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Copyright and content licence</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Unless a credit states otherwise, original writing, site presentation, photographs, plans, graphics, page layouts and other original material are protected by copyright and are owned or controlled by Stuart Savage.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Without prior written permission, you must not reproduce, republish, sell, adapt, distribute, remove credits, use images promotionally, scrape the site at scale, imply endorsement, or present the work as your own.
            </p>
          </section>

          {/* Section: Disclaimer */}
          <section id="disclaimer" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Disclaimer</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Articles, project material, costs, methods, products, planting information, photographs, visualisations and supplier references are retained as historic archive content. They may be incomplete, out of date or no longer applicable.
            </p>
            <div className="bg-[#fff7e6] border border-[#b99a60]/40 p-4 rounded text-sm text-[#102845]">
              This website should not be used as evidence of current trading, current income, current commercial availability, current client work or current service provision. It is a historic professional archive only.
            </div>
          </section>

          {/* Section: Contact */}
          <section id="contact" className="scroll-mt-6 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">Contact</h2>
            <div className="bg-[#c7d0c5] p-6 rounded space-y-2 text-sm text-[#102845]">
              <p>For website, privacy, copyright or accessibility matters, use the contact email shown on this website.</p>
              <p>Please do not use this website as a route to request landscaping, garden design, construction, maintenance, quotations or commercial services. The former businesses are closed and no current services are offered through this site.</p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}