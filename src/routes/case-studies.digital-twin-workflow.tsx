import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Cpu, Layers, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/digital-twin-workflow")({
  component: DigitalTwinWorkflowCaseStudy,
});

function DigitalTwinWorkflowCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
        </Link>

        <div className="space-y-4 mb-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            Planning Archive · Remote Method
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Digital Twin Workflow</h1>
          <p className="text-xl text-muted-foreground">
            Remote planning methodology combining structured client briefs, precise site
            measurement, and 3D data modelling to eliminate ambiguity before project commencement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Methodology</CardTitle>
              <Cpu className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3D Data Sync</div>
              <p className="text-xs text-muted-foreground mt-1">High-fidelity spatial modelling</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Uncertainty Reduction</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100% Clarity</div>
              <p className="text-xs text-muted-foreground mt-1">Pre-construction alignment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Client Validation</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Remote Sign-off</div>
              <p className="text-xs text-muted-foreground mt-1">Seamless UK-wide delivery</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Operational Overview</h2>
            <p>
              In high-end landscape architecture and operational planning, misunderstandings between
              initial concept and physical execution lead to costly variation orders and project
              friction. The Digital Twin Workflow was engineered to bridge this gap by creating
              interactive, dimensionally accurate virtual models prior to any on-site ground
              disturbance.
            </p>
            <p>
              By translating client briefs, topographical surveys, and aspect data into an immersive
              digital environment, stakeholders can inspect spatial flow, material contrast, and
              nocturnal lighting behaviour with absolute precision.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Core Protocol Stages</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Remote Brief Capture:</strong> Standardised intake forms gathering precise
                  site dimensions, soil profiles, and functional family requirements.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Parametric Modelling:</strong> Constructing accurate 3D spatial twins
                  accounting for boundary elevations, drainage falls, and sunlight arcs.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Virtual Walkthrough & Review:</strong> Interactive client sessions to test
                  sightlines, seating arrangements, and 2700K lighting schemes before material
                  procurement.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Professional Value & Outcome</h2>
            <p>
              This structured digital methodology eliminates guesswork, protects capital allocation,
              and establishes a definitive roadmap for contractors or remote clients executing the
              build. It exemplifies how rigorous planning and digital tooling optimize project
              governance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
