import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CookieConsentBanner, {
  clearConsentCookie,
  getConsentCookie,
} from "../components/CookieConsentBanner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#102845] text-[#f8f7f3] px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-7xl font-serif font-bold text-[#c9ad72]">404</h1>
        <h2 className="text-xl font-semibold uppercase tracking-wider text-[#f8f7f3]">
          Page not found
        </h2>
        <p className="text-xs text-[#f8f7f3]/70">
          The page you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded bg-[#c9ad72] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#102845] transition-colors hover:bg-white"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#102845] text-[#f8f7f3] px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-xl font-semibold uppercase tracking-wider text-[#f8f7f3]">
          This page did not load
        </h1>
        <p className="text-xs text-[#f8f7f3]/70">
          Something went wrong on our end. You can try refreshing or returning home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded bg-[#c9ad72] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#102845] transition-colors hover:bg-white"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded border border-[#c9ad72]/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f8f7f3] transition-colors hover:bg-[#c9ad72]/10"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Stuart Savage" },
      { name: "google-site-verification", content: "1CkcQiSlQe385zbS-faCuzsvBBCbjn29wgHR6jh9l1I" },
      { property: "og:site_name", content: "Stuart Savage Historic Professional Archive" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(getConsentCookie());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen bg-[#102845] text-[#f8f7f3] font-sans">
        <CookieConsentBanner
          onAcceptAll={() => setConsent("all")}
          onAcceptEssential={() => setConsent("essential")}
        />

        {/* Sticky Top Header */}
        <header className="sticky top-0 z-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 min-h-[92px] px-6 md:px-12 py-4 border-b border-[#c9ad72]/38 bg-[#102845]/98 backdrop-blur shadow-md">
          {/* Brand Link */}
          <Link to="/" className="flex flex-col gap-1 no-underline group">
            <strong className="font-serif text-2xl sm:text-3xl font-semibold tracking-widest text-[#f8f7f3] uppercase leading-none">
              STUART SAVAGE
            </strong>
            <span className="text-[9.5px] font-bold uppercase tracking-widest text-[#f8f7f3]/70">
              Historic Professional Archive · Operations · Customer Experience
            </span>
            <small className="text-[10.5px] text-[#f8f7f3]/45">
              Former businesses closed · Not currently trading
            </small>
          </Link>

          {/* Expandable Header Icon Navigation */}
          <nav
            className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0"
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link
              to="/"
              title="Home"
              className="group relative flex items-center h-10 w-10 hover:w-[92px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m3 10 9-7 9 7v11H3z" />
                <path d="M9 21v-8h6v8" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Home
              </span>
            </Link>

            {/* Portfolio Archive / Case Studies */}
            <Link
              to="/case-studies"
              title="Portfolio Archive"
              className="group relative flex items-center h-10 w-10 hover:w-[168px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 3H3v2m16-2h2v2M5 21H3v-2m16 2h2v-2" />
                <rect x="7" y="7" width="10" height="10" />
                <path d="m7 14 3-3 2 2 3-3 2 2" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Portfolio archive
              </span>
            </Link>

            {/* Blog Archive */}
            <Link
              to="/blog"
              title="Blog Archive"
              className="group relative flex items-center h-10 w-10 hover:w-[132px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 4h14v16H5z" />
                <path d="M8 8h8" />
                <path d="M8 12h8" />
                <path d="M8 16h5" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Blog archive
              </span>
            </Link>

            {/* FAQs */}
            <Link
              to="/faq"
              title="FAQs"
              className="group relative flex items-center h-10 w-10 hover:w-[92px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 20h.01" />
                <path d="M9.5 9a2.7 2.7 0 0 1 5.2.9c0 2.1-2.7 2.4-2.7 4.6" />
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                FAQs
              </span>
            </Link>

            {/* Email */}
            <a
              href="mailto:stuart@savageldn.co.uk"
              title="Email"
              className="group relative flex items-center h-10 w-10 hover:w-[96px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 5h18v14H3z" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/stuartsavage"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group relative flex items-center h-10 w-10 hover:w-[118px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg
                className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 9v12H2V9z" />
                <path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                <path d="M10 21V9h4v2a5 5 0 0 1 8 4v6h-4v-6a2 2 0 0 0-4 0v6z" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                LinkedIn
              </span>
            </a>
          </nav>
        </header>

        {/* Dynamic Route Pages Render Here */}
        <main className="flex-1">
          <Outlet />

          {/* Analytics - Only load if consent is 'all' */}
          {consent === "all" && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-T9YEZBGQLS"
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-T9YEZBGQLS');
                  `,
                }}
              />
              <Analytics />
            </>
          )}
        </main>

        {/* Global Footer (Renders on ALL Pages) */}
        <footer className="border-t border-[#c9ad72]/34 bg-[#102845] text-[#f8f7f3] px-6 md:px-16 py-8 mt-auto">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Brand Column */}
            <div className="md:col-span-8 space-y-1.5">
              <strong className="font-serif text-2xl sm:text-3xl font-semibold tracking-widest uppercase text-[#f8f7f3] block leading-none">
                STUART SAVAGE
              </strong>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f8f7f3]/62 max-w-3xl block leading-normal">
                Historic professional archive · Operations · Customer experience · Project delivery
              </span>
              <p className="text-[11px] text-[#f8f7f3]/42 leading-relaxed max-w-2xl pt-1">
                The former SAVAGELDN and Moonlight URLs now serve an inactive archive only. No
                landscaping or garden-design services are offered; the material supports future
                employment opportunities.
              </p>
            </div>

            {/* Footer Icon Nav Column (Matching SVGs) */}
            <nav
              className="md:col-span-4 flex items-center justify-start md:justify-end gap-2 overflow-x-auto pb-2 md:pb-0"
              aria-label="Footer navigation"
            >
              {/* Home */}
              <Link
                to="/"
                title="Home"
                aria-label="Home"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="m3 10 9-7 9 7v11H3z" />
                  <path d="M9 21v-8h6v8" />
                </svg>
              </Link>

              {/* Portfolio Archive */}
              <Link
                to="/case-studies"
                title="Portfolio Archive"
                aria-label="Portfolio Archive"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 3H3v2m16-2h2v2M5 21H3v-2m16 2h2v-2" />
                  <rect x="7" y="7" width="10" height="10" />
                  <path d="m7 14 3-3 2 2 3-3 2 2" />
                </svg>
              </Link>

              {/* Blog Archive */}
              <Link
                to="/blog"
                title="Blog Archive"
                aria-label="Blog Archive"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 4h14v16H5z" />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="M8 16h5" />
                </svg>
              </Link>

              {/* FAQs */}
              <Link
                to="/faq"
                title="FAQs"
                aria-label="FAQs"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 20h.01" />
                  <path d="M9.5 9a2.7 2.7 0 0 1 5.2.9c0 2.1-2.7 2.4-2.7 4.6" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </Link>

              {/* Email */}
              <a
                href="mailto:stuart@savageldn.co.uk"
                title="Email"
                aria-label="Email Stuart"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 5h18v14H3z" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/stuartsavage"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn profile"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 9v12H2V9z" />
                  <path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                  <path d="M10 21V9h4v2a5 5 0 0 1 8 4v6h-4v-6a2 2 0 0 0-4 0v6z" />
                </svg>
              </a>

              {/* Legal Icon Link */}
              <Link
                to="/privacy-policy"
                title="Legal & Privacy"
                aria-label="Legal and privacy policy"
                className="w-10 h-10 border border-[#c9ad72]/32 rounded-full text-[#c9ad72] hover:border-[#c9ad72] hover:bg-[#c9ad72]/12 flex items-center justify-center transition-all shrink-0"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-[1.35]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M14 3v4h4" />
                  <path d="M9 11h6" />
                  <path d="M9 15h6" />
                  <path d="M9 19h4" />
                </svg>
              </Link>
            </nav>

            {/* Legal Bottom Bar */}
            <div className="md:col-span-12 mt-6 pt-4 border-t border-[#f8f7f3]/12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-[#f8f7f3]/50">
              <span>© 2026 Stuart Savage · Kennington, London · Historic professional archive</span>

              <div className="flex flex-wrap gap-4" aria-label="Legal information">
                <Link
                  to="/faq"
                  className="hover:text-[#c9ad72] transition-colors underline underline-offset-2"
                >
                  FAQs
                </Link>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#c9ad72] transition-colors underline underline-offset-2"
                >
                  Legal, privacy &amp; accessibility
                </Link>
                <button
                  onClick={() => {
                    clearConsentCookie();
                    window.location.reload();
                  }}
                  className="hover:text-[#c9ad72] transition-colors underline underline-offset-2 cursor-pointer"
                >
                  Cookie Preferences
                </button>
                <a
                  href="mailto:stuart@savageldn.co.uk"
                  className="hover:text-[#c9ad72] transition-colors underline underline-offset-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
