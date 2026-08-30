// @ts-nocheck
import { createFileRoute, Link } from "@tanstack/react-router";

import { blogPosts } from "@/data/blogPosts";
import { linkedInWriting } from "@/data/linkedinWriting";

const TITLE = "Writing Archive | Stuart Savage Historic Professional Archive";
const DESCRIPTION =
  "Historic writing and LinkedIn publications by Stuart Savage, retained as professional evidence. Former businesses closed; archive only.";

export const Route = createFileRoute("/blog/")({
  _ignored_head: () => ({
    meta: [
      { title: "Professional Archive & Writing | Stuart Savage" },
      {
        name: "description",
        content:
          "Historic practice archive featuring methodologies, horticultural guides, and operational insights from previous design builds.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Stuart Savage Professional Archive",
          description:
            "Historic practice archive featuring methodologies and operational insights.",
          url: "https://www.moonlight-studio.uk/blog",
          author: {
            "@type": "Person",
            name: "Stuart Savage",
          },
        }),
      },
    ],
  }),
  component: BlogComponent,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.moonlight-studio.uk/blog" }],
  }),
});

const themes = [
  [
    "Design clarity",
    "Reducing uncertainty before work begins and using clear plans to protect the project and customer experience.",
  ],
  [
    "Horticulture",
    "Plant-focused writing on structure, resilience, seasonality and biological performance.",
  ],
  [
    "Delivery control",
    "Reflections on budgeting, sequencing, materials, site constraints and delivery discipline.",
  ],
  [
    "Operations",
    "Evidence of systems thinking, supplier coordination, communication and project management.",
  ],
] as const;

function BlogComponent() {
  return (
    <div className="min-h-screen bg-[#f5f1e9] font-sans text-[#102845]">
      <nav className="border-b border-white/10 bg-[#102845] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest text-[#c9ad72] hover:text-white"
          >
            &larr; Main showcase
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Writing archive
          </span>
        </div>
      </nav>

      <header className="relative overflow-hidden bg-[#091d2f] px-6 py-20 text-white sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('/images/portfolio/greenwich-modern-cottage-garden-overview.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102845] via-[#102845]/90 to-[#102845]/60" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c9ad72]">
            Blog archive · LinkedIn writing · Professional reflections
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl lg:text-7xl">
            Writing archive,
            <br />
            <em className="not-italic text-[#c9ad72]">not an active trade blog.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Historic writing on garden design, horticulture, planning, customer experience and the
            operational thinking behind a former practice.
          </p>
        </div>
      </header>

      <section className="border-b border-[#102845]/10 bg-[#c7d0c5] px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest">Archive status</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold">
            SAVAGELDN and The Moonlight Garden Design Co. closed in May 2026. Their former URLs now
            serve this historic writing archive only.
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-[#41505b]">
            Stuart is not trading or offering landscaping or garden-design services. These pieces
            remain as professional evidence of judgement, planning and delivery experience for
            future employment opportunities.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 py-14">
        <section aria-labelledby="linkedin-writing">
          <SectionHeading
            number="01"
            label="LinkedIn writing"
            id="linkedin-writing"
            title="The Nocturnal Sanctuary and selected articles"
            description="Verified titles retained from Stuart's LinkedIn publications. LinkedIn opens in a new tab."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {linkedInWriting.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded border border-[#102845]/15 bg-[#ede7dc] p-6 shadow-sm"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">
                  LinkedIn · {item.type} · {item.published}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-xs font-bold uppercase tracking-wider hover:text-[#b99a60]"
                >
                  Read on LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="historic-articles">
          <SectionHeading
            number="02"
            label="Historic articles"
            id="historic-articles"
            title="Garden design, Shoot Gardening and project thinking"
            description="Every card opens a complete local archive page, independent of the former publishing platform."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col rounded border border-[#102845]/15 bg-white p-6 shadow-sm"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">
                  {post.category} · Archive only
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-tight">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group relative block h-56 overflow-hidden bg-[#e8e2d9]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-5 border-t border-[#102845]/10 pt-4 text-xs font-bold uppercase tracking-wider hover:text-[#b99a60]"
                >
                  Read archive record &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="archive-themes">
          <SectionHeading
            number="03"
            label="Professional themes"
            id="archive-themes"
            title="What the archive records"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map(([title, body], index) => (
              <article key={title} className="rounded border border-[#102845]/15 bg-white p-6">
                <span className="text-xs font-bold text-[#b99a60]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-16 bg-[#102845] px-6 py-12 text-center text-white">
        <Link
          to="/"
          className="inline-flex rounded bg-[#b99a60] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#102845] hover:bg-white"
        >
          Return to operations showcase
        </Link>
      </footer>
    </div>
  );
}

function SectionHeading({
  number,
  label,
  id,
  title,
  description,
}: {
  number: string;
  label: string;
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 border-b border-[#102845]/10 pb-4">
      <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
        {number} / {label}
      </p>
      <h2 id={id} className="font-serif text-3xl sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{description}</p> : null}
    </div>
  );
}

