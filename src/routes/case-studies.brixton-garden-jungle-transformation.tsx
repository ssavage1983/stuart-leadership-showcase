import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Layers,
  Sparkles,
  Sprout,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/brixton-garden-jungle-transformation")({
  component: BrixtonJungleTransformationCaseStudy,
});

function BrixtonJungleTransformationCaseStudy() {
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
            <Sprout className="w-3.5 h-3.5 text-primary" /> Project Archive · Subtropical Urban
            Design & Ecological Engineering
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            Brixton Garden Jungle Transformation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            End-to-end operational planning, microclimate optimization, and high-density subtropical
            planting design converting a neglected urban plot into an immersive, low-maintenance
            botanical sanctuary.
          </p>
        </div>

        {/* Featured Case Study Image */}
        <div className="mb-12 rounded-xl overflow-hidden border shadow-sm">
          <img
            src="/images/portfolio/brixton-urban-jungle-warm-evening-lighting.png"
            alt="Brixton Urban Jungle Warm Evening Lighting"
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
              <div className="text-2xl font-bold">Intensive Overhaul</div>
              <p className="text-xs text-muted-foreground mt-1">
                Complete structural & ecological reset
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Botanical Density</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Multi-Tiered Canopy</div>
              <p className="text-xs text-muted-foreground mt-1">
                Exotics, palms, and broadleaf evergreens
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">
                Automated irrigation & soil conditioning
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">
              Project Background & Site Context
            </h2>
            <p>
              Located in the heart of Brixton, this property featured an enclosed urban courtyard
              that suffered from poor soil vitality, heavy shading, and a complete lack of spatial
              structure. The client's brief was uncompromising: eliminate the sterile urban
              aesthetic and construct a dense, immersive subtropical jungle that provided absolute
              privacy and year-round textural dynamism.
            </p>
            <p>
              Successfully executing a high-density jungle garden in a compact city footprint
              requires rigorous logistical planning. Material handling, bulk soil amendments, and
              large specimen trees had to be managed efficiently through restricted access routes
              while protecting adjacent boundaries and interior finishes.
            </p>
          </section>

          {/* Secondary Image */}
          <div className="rounded-xl overflow-hidden border shadow-sm my-6">
            <img
              src="/images/portfolio/brixton-urban-jungle-night-lighting-and-festoon-lights.png"
              alt="Brixton Urban Jungle Night Lighting and Festoon Lights"
              className="w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To guarantee root health, moisture retention, and structural longevity, the build was
              executed across four structured operational milestones:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    1
                  </div>
                  Sub-Grade & Soil Engineering
                </div>
                <p className="text-sm text-muted-foreground">
                  Stripping depleted material and enriching the soil profile with organic compost,
                  sharp grit, and specialized organic fertilizers to support high-demand tropical
                  vegetation.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    2
                  </div>
                  Microclimate Optimization
                </div>
                <p className="text-sm text-muted-foreground">
                  Installing boundary screening and wind-filtering architectural elements to trap
                  warm air and protect tender exotic foliage from harsh urban gusts.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    3
                  </div>
                  Multi-Tiered Planting Matrix
                </div>
                <p className="text-sm text-muted-foreground">
                  Layering architectural canopy trees (such as Trachycarpus and Eucalyptus) with
                  large-leafed structural shrubs and shade-tolerant understory ferns for intense
                  visual depth.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    4
                  </div>
                  Irrigation & Ambient Lighting
                </div>
                <p className="text-sm text-muted-foreground">
                  Integrating automated discrete drip irrigation systems alongside low-voltage warm
                  uplighting to accentuate broadleaf textures and trunk silhouettes at night.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Brixton Jungle Transformation stands as a prime example of turning challenging
              urban constraints into high-impact landscape assets. Through rigorous supply chain
              scheduling, horticultural precision, and structured project governance, the site was
              delivered to an immaculate standard.
            </p>
            <p>
              The result is a thriving, low-maintenance ecosystem that completely redefines the
              property's living environment—showcasing advanced capabilities in ecological design,
              spatial management, and client-focused execution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
