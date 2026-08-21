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
          Historic reference material from SAVAGELDN and The Moonlight Garden Design Co., which
          closed in May 2026. Their former URLs now serve this searchable, inactive archive. The
          examples support future employment opportunities; they are not current services.
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
            <h2 className="mt-2 font-serif text-3xl text-[#102a43]">Recorded project details</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              {study.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
          <section className="border-t border-[#102a43]/15 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#c47c62]">07</p>
            <h2 className="mt-2 font-serif text-3xl text-[#102a43]">Archive gallery</h2>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {study.gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded bg-white shadow-sm">
                  {item.type === "video" ? (
                    <video
                      controls
                      preload="metadata"
                      className="aspect-[4/3] w-full object-cover"
                      aria-label={item.alt}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}
                  <figcaption className="px-4 py-3 text-sm text-slate-600">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
