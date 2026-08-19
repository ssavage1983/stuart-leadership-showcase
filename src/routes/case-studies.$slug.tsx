import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { findCaseStudy } from "@/data/caseStudies";

const SITE = "https://www.moonlight-studio.uk";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = findCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData: study }) => ({
    meta: [
      { title: `${study.title} | Historic Project Record` },
      { name: "description", content: study.excerpt },
      { property: "og:title", content: study.title },
      { property: "og:description", content: study.excerpt },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: study.title },
      { name: "twitter:description", content: study.excerpt },
    ],
    links: [{ rel: "canonical", href: `${SITE}/case-studies/${study.slug}` }],
  }),
  component: HistoricCaseStudy,
});

function HistoricCaseStudy() {
  const study = Route.useLoaderData();
  const sections = [
    ["Context", study.sections.context],
    ["Brief", study.sections.brief],
    ["Delivery approach", study.sections.deliveryApproach],
    ["Materials / logistics / coordination", study.sections.materialsLogisticsCoordination],
    ["Outcome", study.sections.outcome],
  ] as const;

  return (
    <article className="min-h-screen bg-[#f7f4ee] text-[#102a43]">
      <header className="bg-[#091d2f] px-6 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/case-studies"
            className="text-xs font-bold uppercase tracking-widest text-[#c47c62] hover:text-white"
          >
            &larr; Case Studies Archive
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-[#c47c62]">
            {study.archiveStatus} · {study.location}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-300">{study.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <aside className="rounded border-l-4 border-[#c47c62] bg-white p-5 text-sm text-slate-700">
          <strong className="block text-[#102a43]">Archive-only notice</strong>
          Historic project record from a former business. The businesses closed in May 2026 and are
          not currently trading or offering landscaping services.
        </aside>

        <div className="mt-12 space-y-10">
          {sections.map(([heading, body], index) => (
            <section key={heading} className="border-t border-[#102a43]/15 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#c47c62]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#102a43]">{heading}</h2>
              <p className="mt-4 leading-7 text-slate-700">{body}</p>
            </section>
          ))}

          <section className="border-t border-[#102a43]/15 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c47c62]">06</p>
            <h2 className="mt-2 font-serif text-3xl text-[#102a43]">Image gallery</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex aspect-[4/3] items-center justify-center rounded border border-dashed border-[#102a43]/25 bg-[#e8e2d9] px-4 text-center text-xs font-bold uppercase tracking-wider text-[#102a43]/55"
                >
                  Archive image pending migration
                </div>
              ))}
            </div>
          </section>
        </div>

        {study.contentStatus === "pending-migration" ? (
          <p className="mt-10 rounded bg-[#e8e2d9] p-5 text-sm font-semibold text-[#102a43]">
            Detailed project content pending migration from Wix/source files.
          </p>
        ) : null}

        {study.oldUrl ? (
          <dl className="mt-12 border-t border-[#102a43]/15 pt-6 text-xs text-slate-600">
            <dt className="font-bold uppercase tracking-wider text-[#102a43]">Original source</dt>
            <dd className="mt-2 break-all">
              <a href={study.oldUrl} rel="noreferrer" className="underline hover:text-[#c47c62]">
                {study.oldUrl}
              </a>
            </dd>
          </dl>
        ) : null}
      </div>
    </article>
  );
}
