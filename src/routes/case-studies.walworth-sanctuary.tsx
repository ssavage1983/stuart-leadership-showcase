import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Leaf } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/walworth-sanctuary")({
  component: WalworthSanctuaryCaseStudy,
});

function WalworthSanctuaryCaseStudy() {
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
            <Leaf className="w-3.5 h-3.5 text-primary" /> Project Archive · Urban Biodiversity &
            Restorative Design
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Walworth Sanctuary</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transforming a depleted urban plot into a restorative, bio-diverse haven balancing
            precise structural hardscaping with immersive, low-maintenance ecological planting.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Programme Scope</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ecological Reset</div>
              <p className="text-xs text-muted-foreground mt-1">Biodiverse structural planting</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Sustainable Sourcing</div>
              <p className="text-xs text-muted-foreground mt-1">Reclaimed stone & native timber</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Integrated water management</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Environmental Brief
            </h2>
            <p>
              Located in the densely populated district of Walworth, this project centered on
              converting a sterile, underutilized residential courtyard into a thriving
              micro-ecosystem. The client sought a sanctuary that offered psychological respite
              while actively supporting local urban wildlife and pollinators.
            </p>
            <p>
              Successfully delivering this required merging hard architectural boundaries with soft,
              naturalistic landscaping. The operational focus was placed heavily on sustainable
              material procurement, deep soil remediation, and passive rainwater retention to ensure
              the garden remained environmentally resilient.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To strictly manage the ecological integration and structural integrity of the build,
              the project followed four key phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Soil Remediation & Grading
                </div>
                <p className="text-sm text-muted-foreground">
                  Excavating depleted urban soil and importing rich, organic compost blends to
                  restore microbiome health and create optimal planting conditions.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Sustainable Hardscaping
                </div>
                <p className="text-sm text-muted-foreground">
                  Installing permeable pathways using reclaimed brick and locally sourced natural
                  stone, allowing rainwater to organically infiltrate the water table.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Biodiverse Planting Matrix
                </div>
                <p className="text-sm text-muted-foreground">
                  Executing a high-density planting plan of native perennials, ornamental grasses,
                  and pollinator-friendly shrubs for multi-seasonal visual and ecological interest.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Habitat Integration
                </div>
                <p className="text-sm text-muted-foreground">
                  Incorporating discrete wildlife habitats, insect hotels, and low-level ambient
                  lighting designed to minimize light pollution for nocturnal species.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Walworth Sanctuary proves that rigorous project management and ecological
              sensitivity are not mutually exclusive. By executing strict supply chain governance
              and precision site engineering, the finished garden functions as a robust,
              low-maintenance urban retreat that actively gives back to the local environment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
