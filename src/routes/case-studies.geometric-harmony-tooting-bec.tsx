import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Maximize } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/geometric-harmony-tooting-bec')({
  component: GeometricHarmonyTootingBecCaseStudy,
});

function GeometricHarmonyTootingBecCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fadeIn transition-opacity duration-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors duration-300 transform hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
        </Link>

        {/* Header Section */}
        <div className="space-y-4 mb-8 transform transition-all duration-700 translate-y-0 opacity-100">
          <Badge variant="outline" className="text-xs uppercase tracking-wider animate-pulse flex items-center gap-1.5 w-fit">
            <Maximize className="w-3.5 h-3.5 text-primary" /> Project Archive · Spatial Geometry & Hardscaping
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Geometric Harmony, Tooting Bec</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Executing precise, angular hardscaping and zoned outdoor living spaces to maximize utility and visual depth in a linear Tooting Bec property.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Design Concept</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Angular Zoning</div>
              <p className="text-xs text-muted-foreground mt-1">Expanding perceived space</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Execution</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Precision Paving</div>
              <p className="text-xs text-muted-foreground mt-1">Exact geometrical cuts</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Finish</div>
              <p className="text-xs text-muted-foreground mt-1">Laser-level thresholds</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Architectural Brief</h2>
            <p>
              Located in Tooting Bec, this property featured a narrow, linear garden that felt visually restrictive. The legacy layout consisted of tired turf and unstructured boundaries that emphasized the site's narrow proportions.
            </p>
            <p>
              The design objective was to introduce sharp, intersecting geometric zones to disrupt the linear perspective. This required extreme operational precision—angular paving cuts, exact levelling, and perfectly aligned timber screening had to be executed flawlessly to prevent the geometry from feeling disjointed.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To ensure the intersecting lines aligned perfectly across the site, the build was strictly managed across four execution phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</div>
                  Site Calculation & Setting Out
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilizing laser levels and string lines to physically map the intersecting angles, ensuring the sub-base excavations perfectly mirrored the final architectural design.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</div>
                  Precision Hardscaping
                </div>
                <p className="text-sm text-muted-foreground">
                  Executing complex wet-cuts on large-format paving units to create seamless diagonal transitions between the dining patio and the primary walkway.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</div>
                  Architectural Joinery
                </div>
                <p className="text-sm text-muted-foreground">
                  Constructing crisp, horizontal slatted timber boundaries and integrated floating bench seating that mirrored the angular lines of the ground-level masonry.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</div>
                  Contrasting Softscaping
                </div>
                <p className="text-sm text-muted-foreground">
                  Introducing soft, textured grasses and fluid perennial planting beds to deliberately contrast with and soften the rigid geometric borders of the hardscaping.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              Geometric Harmony stands as a testament to the importance of mathematical precision in landscape architecture. By treating the garden installation with the same rigorous tolerances as an interior build, the project delivered a sophisticated, modern entertaining space that entirely redefined the property's footprint.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
