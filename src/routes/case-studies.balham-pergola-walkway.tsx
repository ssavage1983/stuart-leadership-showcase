import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Hammer } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/balham-pergola-walkway")({
  component: BalhamPergolaWalkwayCaseStudy,
});

function BalhamPergolaWalkwayCaseStudy() {
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
            <Hammer className="w-3.5 h-3.5 text-primary" /> Project Archive · Structural Carpentry &
            Linear Site Framing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Balham Pergola & Walkway</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Precision timber engineering, rhythmic spatial framing, and durable structural joinery
            designed to create a shaded architectural corridor through a residential Balham garden.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Joinery Scope</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Bespoke Timber Framing</div>
              <p className="text-xs text-muted-foreground mt-1">Engineered load-bearing posts</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Treated Hardwood</div>
              <p className="text-xs text-muted-foreground mt-1">Weather-resistant assembly</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Rigorous alignment checks</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Architectural Objective
            </h2>
            <p>
              Located in Balham, this residential property required a structural transition element
              to connect disparate areas of the garden while introducing vertical dimension and
              seasonal shade. The client requested a robust, elegant timber pergola and walkway that
              could support heavy climbing flora while maintaining clean sightlines from the house.
            </p>
            <p>
              Constructing long-run linear timber structures in a residential garden demands
              rigorous leveling, exact post-tensioning, and concealed anchoring systems to ensure
              long-term structural stability against wind loads and timber settling.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To guarantee absolute alignment and structural integrity, the build was organized into
              four systematic phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Ground Anchoring & Foundation
                </div>
                <p className="text-sm text-muted-foreground">
                  Excavating and pouring reinforced concrete footings fitted with concealed
                  galvanized post shoes to isolate timber from ground moisture.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Post & Beam Assembly
                </div>
                <p className="text-sm text-muted-foreground">
                  Erecting heavy-gauge vertical posts and notching primary runner beams to create a
                  rigid, self-supporting overhead framework.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Rhythmic Rafter Integration
                </div>
                <p className="text-sm text-muted-foreground">
                  Securing evenly spaced cross-rafters with precision overhangs to cast dappled
                  shadow patterns and frame perspective along the path.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Finishing & Plant Training
                </div>
                <p className="text-sm text-muted-foreground">
                  Applying protective UV-resistant wood finishes and installing stainless steel wire
                  guides to train wisteria and climbing roses.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Balham Pergola & Walkway project successfully combined heavy carpentry techniques
              with refined landscape design. By maintaining rigorous quality control throughout
              assembly, the structure delivers enduring utility, architectural rhythm, and
              exceptional visual appeal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
