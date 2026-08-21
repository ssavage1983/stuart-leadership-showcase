import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Truck, Workflow, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/supply-chain-control")({
  component: SupplyChainControlCaseStudy,
});

function SupplyChainControlCaseStudy() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans antialiased py-12 px-6">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies Archive
        </Link>

        <div className="space-y-4 mb-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            Operations Archive · Logistics Control
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Supply Chain Control</h1>
          <p className="text-xl text-muted-foreground">
            Rigorous coordination of materials, specialist artisans, plant logistics, and site
            dependencies to eliminate bottlenecks across complex builds.
          </p>
        </div>

        {/* Featured Case Study Image / Visualisation */}
        <div className="mb-12 rounded-xl overflow-hidden border shadow-sm">
          <img
            src="/images/portfolio/balham-cottage-courtyard-daytime-dining-and-raised-planters.jpg"
            alt="Supply Chain Control Logistics"
            className="w-full h-auto object-cover max-h-[450px]"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Procurement</CardTitle>
              <Truck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Just-in-Time</div>
              <p className="text-xs text-muted-foreground mt-1">Zero site congestion</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Dependency Mapping</CardTitle>
              <Workflow className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Critical Path</div>
              <p className="text-xs text-muted-foreground mt-1">Synchronised sub-contractors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero Defect</div>
              <p className="text-xs text-muted-foreground mt-1">Strict material inspection</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Operational Overview</h2>
            <p>
              In demanding project environments, material delays or uncoordinated deliveries can
              paralyze a site and inflate labor costs. Supply Chain Control represents the
              operational discipline required to sequence heavy aggregates, vitrified porcelain,
              structural timber, and specialized plants with absolute reliability.
            </p>
            <p>
              By treating delivery logistics as a synchronized chain rather than isolated purchases,
              projects maintain steady momentum while safeguarding delicate materials from premature
              weather exposure or site damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Core Execution Pillars</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Staged Procurement Schedules:</strong> Aligning material orders with site
                  readiness—ensuring sub-base aggregates arrive before excavation finishes, while
                  fragile finishes arrive strictly post-heavy machinery.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Specialist Supplier Vetted Networks:</strong> Maintaining direct
                  partnerships with premier UK nurseries and masonry fabricators to guarantee stock
                  authenticity and grade consistency.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <strong>Urban Access Logistics:</strong> Managing restricted parking, narrow
                  London streets, and multi-stage offloading for properties with challenging access
                  profiles.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Professional Value & Outcome</h2>
            <p>
              Rigorous supply chain management eliminates downtime, protects profit margins, and
              ensures that projects are delivered on schedule and to uncompromising quality
              standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
