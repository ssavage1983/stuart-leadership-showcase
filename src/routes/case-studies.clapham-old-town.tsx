import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Landmark } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/clapham-old-town")({
  component: ClaphamOldTownCaseStudy,
});

function ClaphamOldTownCaseStudy() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans antialiased py-12 px-6 animate-fadeIn transition-opacity duration-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors duration-300 transform hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies Archive
        </Link>

        {/* Header Section */}
        <div className="space-y-4 mb-8 transform transition-all duration-700 translate-y-0 opacity-100">
          <Badge
            variant="outline"
            className="text-xs uppercase tracking-wider animate-pulse flex items-center gap-1.5 w-fit"
          >
            <Landmark className="w-3.5 h-3.5 text-primary" /> Project Archive · Heritage
            Conservation & Structural Masonry
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Clapham Old Town Restoration</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Balancing heritage conservation with modern outdoor living through precision stone
            masonry, structural retaining, and classic architectural planting in a historic Clapham
            property.
          </p>
        </div>

        {/* Featured Case Study Image */}
        <div className="mb-12 rounded-xl overflow-hidden border shadow-sm">
          <img
            src="/images/portfolio/clapham-old-town-front-garden-porcelain-path-and-coping.png"
            alt="Clapham Old Town Front Garden Porcelain Path and Coping"
            className="w-full h-auto object-cover max-h-[450px]"
            loading="lazy"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Programme Scope</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Heritage Upgrade</div>
              <p className="text-xs text-muted-foreground mt-1">Strict conservation compliance</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Reclaimed Yorkstone</div>
              <p className="text-xs text-muted-foreground mt-1">Authentic period matching</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Finish</div>
              <p className="text-xs text-muted-foreground mt-1">Exact engineering tolerances</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Architectural Brief
            </h2>
            <p>
              Located in the prestigious conservation area of Clapham Old Town, this legacy plot
              required sensitive modernization. The existing footprint suffered from failing
              retaining walls, disconnected spatial zoning, and compromised drainage that threatened
              the property's sub-floor ventilation.
            </p>
            <p>
              The brief demanded a seamless extension of the property's classic aesthetic.
              Operations required navigating strict local authority conservation guidelines,
              managing heavy material logistics through a restricted urban footprint, and ensuring
              the new hardscaping looked as though it had always belonged there.
            </p>
          </section>

          {/* Secondary Image */}
          <div className="rounded-xl overflow-hidden border shadow-sm my-6">
            <img
              src="/images/portfolio/clapham-old-town-tropical-seating-at-night.png"
              alt="Clapham Old Town Tropical Seating at Night"
              className="w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To guarantee structural integrity while preserving the site's heritage character, the
              build was structured into four exacting phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Clearance & Structural Engineering
                </div>
                <p className="text-sm text-muted-foreground">
                  Careful demolition of failing masonry followed by the installation of reinforced
                  concrete footings and a high-capacity sub-surface drainage network.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Heritage Masonry & Terracing
                </div>
                <p className="text-sm text-muted-foreground">
                  Constructing tiered entertaining spaces using reclaimed London stock brick and
                  premium Yorkstone flags, laid with traditional lime-based pointing.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Conservation Joinery
                </div>
                <p className="text-sm text-muted-foreground">
                  Installing bespoke timber boundary treatments designed to offer maximum privacy
                  while fully respecting local conservation visual guidelines.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Classic Planting & Commissioning
                </div>
                <p className="text-sm text-muted-foreground">
                  Integrating mature espalier trees, structural box hedging, and automated drip
                  irrigation to deliver an instantly established, low-maintenance finish.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Clapham Old Town project exemplifies high-level stakeholder management and
              rigorous operational execution. By successfully navigating conservation regulations
              and maintaining uncompromising quality control, the finished site perfectly balances
              modern utility with historic architectural dignity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
