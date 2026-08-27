import { createFileRoute } from "@tanstack/react-router";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "@tanstack/react-router";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudiesIndex,
  head: () => ({
    meta: [
      { title: "Portfolio Case Studies | Stuart Leadership Showcase" },
      { name: "description", content: "Explore detailed case studies showcasing leadership in landscape architecture, digital twin 3D modeling, and operational management." }
    ]
  }),
});

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl">
            Leadership & Portfolio Case Studies
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive record of complex horticultural projects, operational turnarounds, and spatial design leadership executed prior to May 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.slug} className="bg-card rounded-xl shadow-lg overflow-hidden border border-border flex flex-col">
              {study.image && (
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {study.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {study.completionDate}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary/80 bg-primary/10 rounded px-2 py-1 mb-4 inline-block">
                    {study.archiveStatus}
                  </div>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: study.slug }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
