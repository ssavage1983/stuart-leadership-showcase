import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/gayville-zen-sanctuary-balham")({
  component: GayvilleZenSanctuaryCaseStudy,
});

function GayvilleZenSanctuaryCaseStudy() {
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
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Project Archive · Minimalist Urban
            Sanctuary & Hard Landscaping
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Gayville Zen Sanctuary, Balham</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Precision spatial restructuring, minimalist hardscaping, and architectural planting
            orchestration transforming a compact Balham courtyard into a serene, meditative urban
            retreat.
          </p>
        </div>

        {/* Featured Case Study Image */}
        <div className="mb-12 rounded-xl overflow-hidden border shadow-sm">
          <img
            src="/images/portfolio/gayville-balham-built-in-bench-and-planting.jpg"
            alt="Gayville Balham Built-in Bench and Planting"
            className="w-full h-auto object-cover max-h-[450px]"
            loading="lazy"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Design Aesthetic</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Minimalist Zen</div>
              <p className="text-xs text-muted-foreground mt-1">Clean lines & optical balance</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Selection</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Vitrified Slate & Timber</div>
              <p className="text-xs text-muted-foreground mt-1">Tactile, low-glare finishes</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Execution Quality</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Finish</div>
              <p className="text-xs text-muted-foreground mt-1">Concealed drainage & lighting</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Conceptual Brief
            </h2>
            <p>
              Located in Balham, this residential courtyard suffered from visual clutter, awkward
              level changes, and harsh, uninviting boundary walls. The client’s vision was clear:
              create an understated, meditative outdoor sanctuary that functioned as an extension of
              their interior living space, prioritizing psychological calm, structural symmetry, and
              low maintenance.
            </p>
            <p>
              Designing a minimalist space leaves zero room for error. Every alignment, joint line,
              and shadow gap had to be meticulously calculated during the planning stage to ensure a
              clean, seamless geometric rhythm upon completion.
            </p>
          </section>

          {/* Secondary Image */}
          <div className="rounded-xl overflow-hidden border shadow-sm my-6">
            <img
              src="/images/portfolio/gayville-balham-buddha-and-night-lighting.jpg"
              alt="Gayville Balham Buddha and Night Lighting"
              className="w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To achieve an uncompromising architectural finish within a compact urban footprint,
              the project was structured into four distinct execution phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Spatial Reset & Drainage
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete strip-out of obsolete hardscaping followed by the installation of
                  concealed linear channel drainage beneath flush-level planes to eliminate standing
                  water.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Architectural Hard Landscaping
                </div>
                <p className="text-sm text-muted-foreground">
                  Laying large-format vitrified paving and custom horizontal slat timber screening
                  to elongate perspective lines and provide absolute privacy from adjacent
                  properties.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Restraint Planting Matrix
                </div>
                <p className="text-sm text-muted-foreground">
                  Selecting a restrained palette of architectural specimens—such as multi-stem
                  Japanese maples and sculptural grasses—configured in clean, uncluttered beds.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Atmospheric Illumination
                </div>
                <p className="text-sm text-muted-foreground">
                  Integrating subtle low-voltage LED uplighting to cast gentle shadows across
                  textures, creating a tranquil evening atmosphere that expands the perceived space.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Gayville Zen Sanctuary illustrates the power of rigorous design discipline and
              precise material execution. By transforming a difficult urban courtyard into a
              tranquil retreat, this project demonstrates advanced competencies in space planning,
              technical detailing, and stakeholder satisfaction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
