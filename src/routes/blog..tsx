import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostRoute,
  head: ({ params }) => {
    const p = blogPosts.find((item) => item.slug === params.slug);
    const postTitle = p ? p.title : "Blog Post";
    const postExcerpt = p ? p.excerpt : "";
    const postSlug = p ? p.slug : "";
    return {
      meta: [
        { title: `${postTitle} | Archived Writing` },
        { name: "description", content: postExcerpt },
        { property: "og:title", content: postTitle },
        { property: "og:description", content: postExcerpt },
        { name: "twitter:title", content: postTitle },
        { name: "twitter:description", content: postExcerpt }
      ],
      links: [{ rel: "canonical", href: `https://stuartleadership.com/blog/${postSlug}` }]
    };
  }
});

function BlogPostRoute() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-12 text-center text-foreground">Post not found.</div>;
  }

  return (
    <article className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-foreground mb-4">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">{post.date} · {post.readTime}</p>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
