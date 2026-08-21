const fs = require("fs");
const path = require("path");

const filePath = path.join(
  process.cwd(),
  "src",
  "routes",
  "case-studies.balham-cottage-courtyard-garden.tsx",
);

const cottageCode = `import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/balham-cottage-courtyard-garden')({
  component: BalhamCottageCourtyardCaseStudy,
});

function BalhamCottageCourtyardCaseStudy() {
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
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Project Archive · Traditional Cottage Restoration & Courtyard Design
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Balham Cottage Courtyard Garden</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Restoring historic charm and modern utility to a compact Victorian cottage courtyard through traditional stone paving, reclaimed brick borders, and lush perennial planting.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Design Style</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Victorian Cottage</div>
              <p className="text-xs text-muted-foreground mt-1">Authentic period detailing</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Natural Stone & Brick</div>
              <p className="text-xs text-muted-foreground mt-1">Reclaimed & weathered textures</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Robust sub-base engineering</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Architectural Context</h2>
            <p>
              Nestled behind a traditional Victorian cottage in Balham, this compact courtyard required a sensitive refurbishment to honor the property's historical era while upgrading its drainage and seating utility. The existing surface was uneven, poorly drained, and dominated by cracked concrete.
            </p>
            <p>
              The objective was to introduce warm, tactile natural materials—such as reclaimed stock brick borders and tumbled Yorkstone paving—paired with cottage-garden planting to create a charming, secluded retreat.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Operational Execution</h2>
            <p>
              To ensure structural longevity and authentic aesthetic integration, the project was executed in four structured phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</div>
                  Demolition & Sub-Base Engineering
                </div>
                <p className="text-sm text-muted-foreground">
                  Breaking out degraded concrete slabs, excavating for correct fall gradients, and laying a compacted MOT Type 1 sub-base with integrated drainage channels.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</div>
                  Period Brick & Stone Laying
                </div>
                <p className="text-sm text-muted-foreground">
                  Constructing raised planter beds using reclaimed London stock bricks and hand-laying tumbled natural stone flags with traditional mortar joints.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</div>
                  Cottage Planting Matrix
                </div>
                <p className="text-sm text-muted-foreground">
                  Introducing multi-season cottage favorites—such as climbing roses, lavender, and herbaceous perennials—to soften masonry boundaries.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</div>
                  Finishing & Sealing
                </div>
                <p className="text-sm text-muted-foreground">
                  Applying breathable stone sealers, cleaning joint lines, and ensuring flawless threshold transitions from the interior kitchen.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Balham Cottage Courtyard successfully marries historical craftsmanship with modern structural reliability. By maintaining rigorous quality control and careful material sourcing, the project delivered an authentic period aesthetic backed by zero-defect engineering.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(filePath, cottageCode, "utf8");
console.log("Successfully expanded Balham Cottage Courtyard case study.");
