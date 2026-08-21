import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/zen-sanctuary-tooting-bec')({
  component: TootingBecZenSanctuaryCaseStudy,
});

function TootingBecZenSanctuaryCaseStudy() {
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
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Project Archive · Meditative Urban Design & Natural Hard Landscaping
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Zen Sanctuary, Tooting Bec</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transforming an overlooked south London plot into a serene, contemplative haven through balanced asymmetrical zoning, natural slate, and architectural evergreen planting.
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
              <div className="text-2xl font-bold">Contemplative Space</div>
              <p className="text-xs text-muted-foreground mt-1">Asymmetrical spatial balance</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Natural Slate & Timber</div>
              <p className="text-xs text-muted-foreground mt-1">Tactile, weathering finishes</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Concealed sub-grade drainage</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Architectural Brief</h2>
            <p>
              Situated in Tooting Bec, this residential garden required a complete psychological and physical reset from the bustle of urban life. The legacy space lacked focal points, suffered from irregular boundary lines, and featured outdated paving that failed to drain properly during heavy rainfall.
            </p>
            <p>
              The design objective was to invoke traditional Japanese meditative principles—simplicity, asymmetry, and natural texturing—using sustainable materials and hardy evergreens that require minimal ongoing maintenance.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To ensure impeccable spatial proportions and rigorous build quality, the project was executed in four structured phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</div>
                  Sub-Grade Preparation & Drainage
                </div>
                <p className="text-sm text-muted-foreground">
                  Excavating uneven sub-grades, establishing precise fall gradients, and installing hidden gravel soakaways to manage surface runoff efficiently.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</div>
                  Asymmetrical Slate & Stepping Stones
                </div>
                <p className="text-sm text-muted-foreground">
                  Laying oversized natural slate stepping stones through decorative gravel beds to create deliberate, mindful walking rhythms across the plot.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</div>
                  Architectural Evergreen Planting
                </div>
                <p className="text-sm text-muted-foreground">
                  Sourcing structural specimen plants—such as pruned conifers, Japanese acers, and cascading ferns—to maintain year-round tonal depth.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</div>
                  Boundary Screening & Lighting
                </div>
                <p className="text-sm text-muted-foreground">
                  Erecting dark-stained vertical slatted timber screening and discreet low-voltage uplighting to enhance evening serenity.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Tooting Bec Zen Sanctuary demonstrates how disciplined space planning and tactile natural materials can completely redefine an urban environment. The project achieved a zero-defect handover, delivering an enduring space for relaxation and mental clarity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
