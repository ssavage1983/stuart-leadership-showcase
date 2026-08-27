import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Briefcase, Award, Sparkles, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Stuart Leadership Showcase | Operations & Landscape Architecture" },
      { name: "description", content: "Professional showcase highlighting leadership in landscape architecture, supply chain management, and digital twin 3D modeling." }
    ]
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Operational Leadership & <span className="text-primary">Spatial Design</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10">
          A documented record of executive leadership, project turnarounds, and complex landscape transformations executed prior to company closure in May 2026.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            Explore Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Read Insights <BookOpen className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Featured Portfolio Projects</h2>
          <Link to="/case-studies" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
            <div key={study.slug} className="bg-card rounded-xl shadow border border-border overflow-hidden flex flex-col">
              {study.image && (
                <div className="h-48 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-muted-foreground mb-1 block">{study.location}</span>
                  <h3 className="text-lg font-bold mb-2 line-clamp-1">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{study.excerpt}</p>
                </div>
                <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
