import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/modern-cottage-greenwich")({
  component: ModernCottageGreenwichCaseStudy,
});

function ModernCottageGreenwichCaseStudy() {
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
          <Badge
            variant="outline"
            className="text-xs uppercase tracking-wider animate-pulse flex items-center gap-1.5 w-fit"
          >
            <Home className="w-3.5 h-3.5 text-primary" /> Project Archive · Heritage Integration &
            Contemporary Hard Landscaping
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Modern Cottage, Greenwich</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bridging historic character with contemporary clean lines through precision hard
            landscaping, structural timber detailing, and integrated level thresholds in a historic
            Greenwich setting.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Design Approach</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Heritage Blend</div>
              <p className="text-xs text-muted-foreground mt-1">Balancing old & new architecture</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Execution</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Porcelain & Oak</div>
              <p className="text-xs text-muted-foreground mt-1">Durable, high-spec finishes</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Standard</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Seamless indoor-outdoor flow</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Architectural Context
            </h2>
            <p>
              Situated in the historic borough of Greenwich, this property presented a fascinating
              spatial juxtaposition: a charming period cottage coupled with a fragmented, poorly
              draining rear garden that lacked functional continuity with the interior. The
              objective was to modernize the exterior layout while respecting the historical
              integrity of the primary dwelling.
            </p>
            <p>
              The logistical plan required careful handling of heavy porcelain units and structural
              timber frameworks through restricted side access, ensuring absolute protection of the
              property's vintage brickwork and existing structural thresholds.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To achieve flawless technical execution and maintain strict milestone discipline, the
              build was divided into four distinct phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Threshold Alignment & Drainage
                </div>
                <p className="text-sm text-muted-foreground">
                  Correcting legacy grade discrepancies to establish flush internal-to-external door
                  thresholds backed by a high-capacity sub-surface drainage grid.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Precision Hard Landscaping
                </div>
                <p className="text-sm text-muted-foreground">
                  Laying external-grade vitrified porcelain paving with slurry priming and exterior
                  jointing compounds to guarantee long-term slip resistance and frost durability.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Architectural Joinery & Screening
                </div>
                <p className="text-sm text-muted-foreground">
                  Constructing bespoke timber boundaries and seating features that soften the hard
                  edges and introduce natural warmth against the stone paving.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Planting & Environmental Polish
                </div>
                <p className="text-sm text-muted-foreground">
                  Integrating layered perennial planting beds and low-profile architectural lighting
                  to frame the garden contours and provide evening visual depth.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Modern Cottage transformation successfully bridges historical charm with modern
              operational utility. Through careful material governance, risk mitigation, and
              structured site sequencing, the project was delivered on schedule and to a zero-defect
              standard.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
