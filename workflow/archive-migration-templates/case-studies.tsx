import { createFileRoute, Link } from "@tanstack/react-router";

import { caseStudies } from "@/data/caseStudies";

const TITLE = "Case Studies Archive | Stuart Savage Historic Professional Archive";
const DESCRIPTION =
  "Historic project records showing delivery, coordination and operational evidence. Former businesses closed; archive only.";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesComponent,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.moonlight-studio.uk/case-studies" }],
  }),
});

function CaseStudiesComponent() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans">
      <header className="bg-[#091d2f] px-6 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">
            Historic Professional Archive · Delivery evidence
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Case Studies Archive
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Historic project records retained as evidence of planning, logistics, coordination and
            customer experience. The former businesses closed in May 2026. Archive only — not
            currently trading.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mb-8 border-b border-[#102a43]/15 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c47c62]">
            {caseStudies.length} historic records
          </p>
          <h2 className="mt-2 font-serif text-3xl text-[#102a43] sm:text-4xl">
            Former business archive and professional evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-[#102a43]/15 bg-white shadow-sm"
            >
              {study.image ? (
                <img src={study.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
              ) : (
                <div
                  className="flex h-52 items-center justify-center bg-[#e8e2d9] px-6 text-center text-xs font-bold uppercase tracking-widest text-[#102a43]/55"
                  aria-label="Image pending migration"
                >
                  Archive image pending migration
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c47c62]">
                  {study.archiveStatus} · {study.location}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-[#102a43]">
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: study.slug }}
                    className="transition-colors hover:text-[#c47c62]"
                  >
                    {study.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.excerpt}
                </p>
                <div className="mt-5 border-t border-[#102a43]/10 pt-4">
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: study.slug }}
                    className="text-xs font-bold uppercase tracking-wider text-[#102a43] hover:text-[#c47c62]"
                    aria-label={`Open historic project record: ${study.title}`}
                  >
                    View archive case study &rarr;
                  </Link>
                  {study.oldUrl ? (
                    <p className="mt-2 text-[10px] text-slate-500">
                      Source: former Wix project record
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
