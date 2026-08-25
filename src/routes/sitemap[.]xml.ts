import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";

const BASE_URL = "https://www.savageldn.co.uk";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/blog", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "yearly", priority: "0.4" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          ...blogPosts.map((post) => ({
            path: `/blog/${post.slug}`,
            changefreq: "yearly" as const,
            priority: "0.6",
          })),
          ...caseStudies.map((study) => ({
            path: `/case-studies/${study.slug}`,
            changefreq: "yearly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
