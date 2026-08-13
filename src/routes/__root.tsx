import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { property: "og:site_name", content: "Stuart Savage Career Portfolio" },
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap",
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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#102845] text-[#f8f7f3] font-sans">
        {/* Header with Expandable Icon Navigation */}
        <header className="sticky top-0 z-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 min-h-[92px] px-6 py-4 border-b border-[#c9ad72]/38 bg-[#102845]/98 backdrop-blur shadow-md">
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

          {/* Icon Pill Navigation */}
          <nav className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" aria-label="Main navigation">
            {/* Home Route */}
            <Link
              to="/"
              title="Home"
              className="group relative flex items-center h-10 w-10 hover:w-[92px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m3 10 9-7 9 7v11H3z" />
                <path d="M9 21v-8h6v8" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Home
              </span>
            </Link>

            {/* Case Studies / Portfolio Archive Route */}
            <Link
              to="/case-studies"
              title="Portfolio Archive"
              className="group relative flex items-center h-10 w-10 hover:w-[168px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3H3v2m16-2h2v2M5 21H3v-2m16 2h2v-2" />
                <rect x="7" y="7" width="10" height="10" />
                <path d="m7 14 3-3 2 2 3-3 2 2" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Portfolio archive
              </span>
            </Link>

            {/* FAQs Route */}
            <Link
              to="/faq"
              title="FAQs"
              className="group relative flex items-center h-10 w-10 hover:w-[92px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20h.01" />
                <path d="M9.5 9a2.7 2.7 0 0 1 5.2.9c0 2.1-2.7 2.4-2.7 4.6" />
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                FAQs
              </span>
            </Link>

            {/* Email Anchor */}
            <a
              href="mailto:stuart@savageldn.co.uk"
              title="Email"
              className="group relative flex items-center h-10 w-10 hover:w-[96px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3z" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#f8f7f3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Email
              </span>
            </a>

            {/* LinkedIn External Anchor */}
            <a
              href="https://www.linkedin.com/in/stuartsavage"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group relative flex items-center h-10 w-10 hover:w-[118px] overflow-hidden rounded-full border border-[#c9ad72]/32 hover:border-[#c9ad72] bg-transparent hover:bg-[#c9ad72]/12 text-[#c9ad72] transition-all duration-300 px-2.5 shrink-0"
            >
              <svg className="w-5 h-5 shrink-0 stroke-current fill-none stroke-[1.35]" viewBox="0 0 24 24" aria-hidden="true">
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
        <main>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
}