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
            Legal, Privacy, Accessibility &amp; Platform Terms
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#102845] py-20 px-6 text-white sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('/images/portfolio/tooting-bec-japanese-garden-seating-and-warm-night-lighting.jpg')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#102845] via-[#102845]/95 to-[#102845]/60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
            Legal · Privacy · Accessibility · Domain Governance
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Legal, domain &amp; privacy policy for a{" "}
            <em className="not-italic text-[#b99a60]">historic archive.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            This document sets out the legal framework, UK GDPR privacy policy, accessibility
            commitment, and domain infrastructure details across Google Workspace, 123 Reg, Vercel,
            GitHub, and Lovable.
          </p>
        </div>
      </header>

      {/* Main Layout Area */}
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {/* Navigation Quick Links */}
        <nav className="bg-white p-6 border border-[#102845]/15 rounded shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60] mb-3">
            Jump to section
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => scrollTo("archive-status")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Archive &amp; Former Brands
            </button>
            <button
              type="button"
              onClick={() => scrollTo("domains")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Domain Hosting &amp; Email
            </button>
            <button
              type="button"
              onClick={() => scrollTo("privacy")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Privacy &amp; Data Processors
            </button>
            <button
              type="button"
              onClick={() => scrollTo("cookies")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Cookies &amp; Telemetry
            </button>
            <button
              type="button"
              onClick={() => scrollTo("accessibility")}
              className="p-2.5 bg-[#f5f1e9] text-left hover:bg-[#102845] hover:text-white rounded transition-colors"
            >
              Accessibility (WCAG 2.2)
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
              Licence &amp; Copyright
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
          <p className="text-sm font-bold text-[#102845]">Last updated: 14 August 2026</p>

          {/* Section: Archive Status & Former Business Names */}
          <section
            id="archive-status"
            className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              1. Archive Status &amp; Former Business Names
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This website serves exclusively as a historic professional archive for Stuart Savage.
              It preserves selected writing, project material, case studies, and operational
              evidence.
            </p>

            <div className="bg-white p-5 border-l-4 border-[#b99a60] text-sm text-[#102845] rounded shadow-sm space-y-2">
              <strong className="block text-[#102845] text-base font-serif">
                Former Trading Names &amp; Brand Clarification:
              </strong>
              <p className="text-xs text-slate-700 leading-relaxed">
                The domain names and brand references on this site—including{" "}
                <strong>moonlight-studio.uk</strong> and <strong>savageldn.co.uk</strong>—represent
                previous trading names and business ventures. Specifically:
              </p>
              <ul className="list-disc list-inside text-xs text-slate-700 leading-relaxed space-y-1 pl-2">
                <li>
                  The former limited company <strong>Savage Bespoke Ltd</strong> concluded active
                  trading operations.
                </li>
                <li>
                  The former sole trader practices <strong>Stuart Savage Landscaping</strong> and{" "}
                  <strong>The Moonlight Garden Design Co. (Moonlight Studio)</strong> concluded
                  active trading operations following a strategic review of market conditions.
                </li>
              </ul>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold pt-1">
                All former commercial operations have permanently ceased. This website is retained
                for historical and professional context only and is not a trading website, service
                offer, or invitation for commercial work.
              </p>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">
              Legal and Financial Neutrality
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Nothing on this website is intended to comment on, explain, admit, deny, settle, or
              influence any legal, financial, creditor, insolvency, debt, regulatory, or
              dispute-related matter. Historic content is retained solely to document the
              professional context in which it was created.
            </p>
          </section>

          {/* Section: Domain Hosting & Infrastructure */}
          <section id="domains" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              2. Domain Hosting &amp; Email Infrastructure
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              Domain registration and communication services for this archive are managed through
              established domain registrars and email providers:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-4 border border-[#102845]/15 rounded text-sm text-slate-700 space-y-1">
                <strong className="block text-[#102845]">
                  moonlight-studio.uk — 123 Reg (Domain Registrar &amp; DNS)
                </strong>
                <p className="text-xs leading-relaxed">
                  The primary domain{" "}
                  <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                    moonlight-studio.uk
                  </code>{" "}
                  is registered and DNS-hosted with 123 Reg. 123 Reg manages domain name
                  registration and DNS routing, directing web requests securely to our Vercel web
                  hosting servers.
                </p>
              </div>

              <div className="bg-white p-4 border border-[#102845]/15 rounded text-sm text-slate-700 space-y-1">
                <strong className="block text-[#102845]">
                  savageldn.co.uk — Google Workspace (Email &amp; Communication)
                </strong>
                <p className="text-xs leading-relaxed">
                  The domain{" "}
                  <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                    savageldn.co.uk
                  </code>{" "}
                  and its contact email (
                  <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                    stuart@savageldn.co.uk
                  </code>
                  ) are hosted via Google Workspace (Google LLC). Incoming and outgoing email
                  correspondence is handled through Google&apos;s encrypted cloud infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Privacy & Data Processors */}
          <section id="privacy" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              3. Privacy Policy &amp; Data Processors (UK GDPR)
            </h2>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">
              Data Controller
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Stuart Savage is the Data Controller responsible for personal information handled
              directly through this website. For privacy enquiries, email{" "}
              <a href="mailto:stuart@savageldn.co.uk" className="underline font-semibold">
                stuart@savageldn.co.uk
              </a>
              .
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">
              Technical Infrastructure &amp; Third-Party Processors
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              In addition to 123 Reg and Google Workspace, technical infrastructure is supported by
              the following processors:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-4 border border-[#102845]/15 rounded text-sm text-slate-700 space-y-1">
                <strong className="block text-[#102845]">
                  Vercel Inc. (Web Hosting &amp; Edge Delivery)
                </strong>
                <p className="text-xs leading-relaxed">
                  Web host and CDN. Vercel processes IP addresses and request metadata to deliver
                  SSL-encrypted pages globally. Vercel Speed Insights collects cookieless,
                  aggregated web vitals data to evaluate loading speeds.
                </p>
              </div>

              <div className="bg-white p-4 border border-[#102845]/15 rounded text-sm text-slate-700 space-y-1">
                <strong className="block text-[#102845]">
                  GitHub Inc. / Microsoft Corporation (Code Repository)
                </strong>
                <p className="text-xs leading-relaxed">
                  Source control host. GitHub stores site code and automated deployment workflows.
                </p>
              </div>

              <div className="bg-white p-4 border border-[#102845]/15 rounded text-sm text-slate-700 space-y-1">
                <strong className="block text-[#102845]">
                  Lovable Labs Inc. (Application Development)
                </strong>
                <p className="text-xs leading-relaxed">
                  Development platform used in the initial scaffolding. Client-side error boundaries
                  (
                  <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                    reportLovableError
                  </code>
                  ) capture non-identifying technical logs to diagnose runtime issues.
                </p>
              </div>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102845] pt-2">
              Data Subject Rights
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Under UK GDPR, you have rights to access, correct, erase, or restrict processing of
              your personal information, or lodge a complaint with the{" "}
              <a
                href="https://ico.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </section>

          {/* Section: Cookies & Telemetry */}
          <section id="cookies" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              4. Cookies &amp; Telemetry
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This archive operates with minimal tracking:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2 pl-2">
              <li>
                <strong>Essential Cookies:</strong> Strictly necessary security tokens set by host
                infrastructure (Vercel).
              </li>
              <li>
                <strong>Cookieless Web Vitals:</strong> Vercel Speed Insights collects
                non-identifying performance metric data without placing cookies.
              </li>
              <li>
                <strong>No Advertising Pixels:</strong> Meta Pixel, Google Ads, and marketing
                tracking beacons are strictly excluded.
              </li>
            </ul>
          </section>

          {/* Section: Accessibility */}
          <section
            id="accessibility"
            className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              5. Accessibility Statement (WCAG 2.2 Level AA)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              We aim to make this site accessible to all visitors, targeting Web Content
              Accessibility Guidelines (WCAG) 2.2 Level AA standards through semantic HTML5, visible
              focus indicators, readable contrast ratios, and responsive design.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you experience an accessibility issue, please email{" "}
              <a href="mailto:stuart@savageldn.co.uk" className="underline font-semibold">
                stuart@savageldn.co.uk
              </a>{" "}
              detailing the page and problem so an alternative format can be provided.
            </p>
          </section>

          {/* Section: Website Terms */}
          <section id="terms" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              6. Website Terms of Use
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              All archive material is provided for general information and historical reference. It
              does not constitute formal legal, financial, tax, construction, horticultural, safety,
              or professional advice. Browsing this archive or sending an email does not create a
              contract or client relationship.
            </p>
          </section>

          {/* Section: Copyright */}
          <section id="licence" className="scroll-mt-6 border-b border-[#102845]/15 pb-8 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              7. Copyright &amp; Licence
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Original writing, case study documentation, photography, and layout designs are
              protected by copyright and owned by Stuart Savage. You may view and share ordinary
              hyperlinks to public pages. Reproducing, commercialising, or scraping content for
              automated AI model training without prior written consent is strictly prohibited.
            </p>
          </section>

          {/* Section: Contact */}
          <section id="contact" className="scroll-mt-6 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102845]">
              8. Contact Information
            </h2>
            <div className="bg-[#c7d0c5] p-6 rounded space-y-2 text-sm text-[#102845]">
              <p>
                <strong>Name:</strong> Stuart Savage
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:stuart@savageldn.co.uk" className="font-bold underline">
                  stuart@savageldn.co.uk
                </a>
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:07762719043" className="font-bold underline"></a>
                <br />
                <strong>Location:</strong> Kennington, London, UK
              </p>
              <p className="text-xs text-[#41505b] pt-2 border-t border-[#102845]/10">
                Note: Former business entities concluded active trading operations. No trade
                services, quotes, or commercial projects are offered through this site.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
