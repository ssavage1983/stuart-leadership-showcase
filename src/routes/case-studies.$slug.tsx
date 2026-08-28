// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { caseStudies } from "@/data/caseStudies";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudyDetail,
  head: ({ params }) => {
    const study = caseStudies.find((s) => s.slug === params.slug);
    return {
      meta: [
        { title: `${study?.title ?? "Case Study"} | Stuart Leadership Showcase` },
        { name: "description", content: study?.excerpt ?? "" }
      ]
    };
  }
});

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <div className="p-12 text-center text-foreground">Case study not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {study.location || "London"}</span>
        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {study.completionDate || study.date || "2026"}</span>
      </div>
      <h1 className="text-4xl font-extrabold text-foreground mb-4">{study.title}</h1>
      <div className="text-xs font-semibold text-primary/80 bg-primary/10 rounded px-2.5 py-1 mb-8 inline-block">
        {study.archiveStatus || "Archived Project"}
      </div>

      {study.image && (
        <div className="mb-8 rounded-xl overflow-hidden border border-border h-96">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="space-y-8 text-foreground">
        {study.excerpt && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{study.excerpt}</p>
          </div>
        )}

        {/* Smart Details Renderer */}
        {study.details && study.details.length > 0 && study.details.map((detail, idx) => {
          if (typeof detail === "string") {
            return (
              <div key={idx} className="mb-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{detail}</p>
              </div>
            );
          }
          return (
            <div key={idx} className="mb-6">
              {detail.title && <h2 className="text-2xl font-bold mb-2">{detail.title}</h2>}
              {detail.content && <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{detail.content}</p>}
            </div>
          );
        })}

        {/* Smart Photo Gallery: Renders captions perfectly */}
        {study.gallery && study.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.gallery.map((img, idx) => {
                const src = typeof img === "string" ? img : img.src;
                const caption = typeof img === "string" ? null : img.caption;
                return (
                  <div key={idx} className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={src} alt={caption || study.title} className="w-full h-64 object-cover" />
                    {caption && <p className="p-3 text-xs text-muted-foreground">{caption}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
