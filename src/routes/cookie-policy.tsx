import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyComponent,
});

function CookiePolicyComponent() {
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
        </div>
      </nav>

      <header className="relative bg-[#102845] py-20 px-6 text-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-6xl">Cookie Policy</h1>
          <p className="mt-6 text-lg text-slate-300">Last updated: September 2026</p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-sm text-slate-700 leading-relaxed">
        <p>
          This site uses cookies. This page explains what cookies are, which ones we use, and how
          you can control them.
        </p>

        <h2 className="font-serif text-2xl text-[#102845]">What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the
          site remember your preferences and understand how it is being used.
        </p>

        <h2 className="font-serif text-2xl text-[#102845]">What cookies do we use?</h2>

        <h3 className="font-semibold text-[#102845]">Essential cookies</h3>
        <p>
          These are required for the site to function. They cannot be switched off. They do not
          store any personally identifiable information.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Cookie name:</strong> consent_status
          </li>
          <li>
            <strong>Purpose:</strong> Remembers your cookie preference so we do not ask you again
          </li>
          <li>
            <strong>Duration:</strong> 12 months
          </li>
        </ul>

        <h3 className="font-semibold text-[#102845]">Analytics cookies (optional)</h3>
        <p>
          These help us understand how visitors use the site so we can improve it. We only use these
          if you have given your consent.
        </p>
        <p>We do not currently use any analytics cookies.</p>

        <h2 className="font-serif text-2xl text-[#102845]">How to control cookies</h2>
        <p>
          You can change your cookie preferences at any time by clearing your browser cookies and
          revisiting the site. You can also control cookies through your browser settings. Note that
          blocking essential cookies may affect how the site works.
        </p>

        <h2 className="font-serif text-2xl text-[#102845]">Contact</h2>
        <p>
          If you have any questions about how we use cookies, contact us at{" "}
          <a
            href="mailto:stuart@savageldn.co.uk"
            className="underline font-semibold text-[#102845]"
          >
            stuart@savageldn.co.uk
          </a>
        </p>
      </article>
    </div>
  );
}
