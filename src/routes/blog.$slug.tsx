import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { findBlogPost } from "@/data/blogPosts";

const SITE = "https://www.moonlight-studio.uk";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => ({
    meta: [
      { title: `${post.title} | Archived Writing` },
      { name: "description", content: post.excerpt },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.excerpt },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: post.title },
      { name: "twitter:description", content: post.excerpt },
    ],
    links: [{ rel: "canonical", href: `${SITE}/blog/${post.slug}` }],
  }),
  component: ArchivedBlogPost,
});

function ArchivedBlogPost() {
  const post = Route.useLoaderData();

  return (
    <article className="min-h-screen bg-[#f5f1e9] text-[#102845]">
      <header className="bg-[#102845] px-6 py-14 text-[#f8f7f3] sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="text-xs font-bold uppercase tracking-widest text-[#c9ad72] hover:text-white"
          >
            &larr; Blog archive
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-[#c9ad72]">
            Archived writing · Historic Professional Archive
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f8f7f3]/75">{post.excerpt}</p>
          {post.date || post.readTime ? (
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#c9ad72]">
              {[post.date, post.readTime].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <aside className="rounded border-l-4 border-[#b99a60] bg-white p-5 text-sm text-slate-700">
          <strong className="block text-[#102845]">Archive-only notice</strong>
          This is archived writing from a former business. The businesses closed in May 2026 and are
          not currently trading or offering landscaping services. It is not a newly published
          article.
        </aside>

        <div className="mt-10 space-y-5 text-base leading-8 text-slate-700">
          {post.contentStatus === "pending-migration" ? (
            <>
              <h2 className="font-serif text-3xl text-[#102845]">Content pending migration</h2>
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="min-h-48 rounded border border-dashed border-[#102845]/25 bg-white/50 p-6 text-sm text-slate-500">
                Original article body placeholder.
              </div>
            </>
          ) : (
            <>
              {post.heroImage ? (
                <figure className="mb-10 overflow-hidden rounded border border-[#102845]/15 bg-white shadow-sm">
                  <img
                    src={post.heroImage}
                    alt={post.imageCaption ?? post.title}
                    width="1200"
                    height="444"
                    className="h-auto w-full object-cover"
                    decoding="async"
                  />
                  {post.imageCaption ? (
                    <figcaption className="px-4 py-3 text-xs text-slate-500">
                      {post.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
              <h2 className="font-serif text-3xl text-[#102845]">
                Bridging design and horticultural reality
              </h2>
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          )}
        </div>

        {post.oldUrl ? (
          <dl className="mt-12 border-t border-[#102845]/15 pt-6 text-xs text-slate-600">
            <dt className="font-bold uppercase tracking-wider text-[#102845]">Original source</dt>
            <dd className="mt-2 break-all">
              <a href={post.oldUrl} rel="noreferrer" className="underline hover:text-[#b99a60]">
                {post.oldUrl}
              </a>
            </dd>
          </dl>
        ) : null}
      </div>
    </article>
  );
}
