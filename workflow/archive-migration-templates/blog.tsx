import { createFileRoute, Link } from "@tanstack/react-router";

import { blogPosts } from "@/data/blogPosts";

const TITLE = "Blog Archive | Stuart Savage Historic Professional Archive";
const DESCRIPTION =
  "Archived professional writing by Stuart Savage. Former businesses closed; archive only and not currently trading.";

export const Route = createFileRoute("/blog")({
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

function BlogComponent() {
  return (
    <div className="min-h-screen bg-[#f5f1e9] text-[#102845] font-sans">
      <header className="bg-[#102845] px-6 py-16 text-[#f8f7f3] sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c9ad72]">
            Historic Professional Archive · Archived writing
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Blog Archive
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75 sm:text-lg">
            Historic professional writing on design, horticulture, delivery and operational
            judgement. Former businesses closed in May 2026; this archive is not currently trading
            or offering landscaping services.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mb-8 border-b border-[#102845]/15 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#b99a60]">
            {blogPosts.length} archive records
          </p>
          <h2 className="mt-2 font-serif text-3xl text-[#102845] sm:text-4xl">
            Writing retained for professional context
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded border border-[#102845]/15 bg-white p-6 shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b99a60]">
                {post.category} · Archive only
              </span>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-[#102845]">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition-colors hover:text-[#b99a60]"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <div className="mt-5 border-t border-[#102845]/10 pt-4">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="text-xs font-bold uppercase tracking-wider text-[#102845] hover:text-[#b99a60]"
                  aria-label={`Open archived article: ${post.title}`}
                >
                  Read archive record &rarr;
                </Link>
                {post.oldUrl ? (
                  <p className="mt-2 text-[10px] text-slate-500">
                    Source: former Wix article record
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
