const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'routes', 'case-studies.dulwich-garden-transformation.tsx');

const dulwichExpandedCode = `import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/dulwich-garden-transformation')({
  component: DulwichGardenTransformationCaseStudy,
});

function DulwichGardenTransformationCaseStudy() {
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
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Project Archive · Heritage Landscaping & Site Engineering
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Dulwich Garden Transformation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            End-to-end operational planning, conservation-aligned stakeholder management, and precision masonry execution for a high-value period property in South London.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Programme Scale</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6-Week Phased Build</div>
              <p className="text-xs text-muted-foreground mt-1">Strict timeline governance</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Governance</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Yorkstone & Brick</div>
              <p className="text-xs text-muted-foreground mt-1">Heritage compliance standards</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Rigorous milestone sign-offs</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Operational Content */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Operational Context</h2>
            <p>
              Situated within a strict conservation area in Dulwich, this project required balancing contemporary functional design with the exacting historical standards of a substantial period property. The legacy outdoor space suffered from structural grade transitions, poor sub-surface drainage, and deteriorated hardscaping that completely disconnected the exterior footprint from the internal living areas.
            </p>
            <p>
              The core challenge involved managing logistics across a restricted residential envelope while ensuring all material sourcing and masonry techniques strictly respected local heritage guidelines. The operation demanded meticulous scheduling to coordinate specialist stone masonry, drainage engineers, and horticultural teams without causing disruption to neighboring properties.
            </p>
          </section>

          {/* Structured Layout Grid for Phases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Phased Programme Execution & Control</h2>
            <p>
              To maintain absolute control over the critical path and guarantee high quality output, the project was executed through four tightly managed operational phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</div>
                  Site Survey & Sub-Grade Engineering
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive topographical leveling and installation of a robust land-drainage network to permanently mitigate historical surface pooling.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</div>
                  Terracing & Structural Retaining
                </div>
                <p className="text-sm text-muted-foreground">
                  Constructing tiered retaining structures using reclaimed period brickwork and engineering blocks to create stable, highly functional upper and lower garden zones.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</div>
                  Heritage Paving & Masonry
                </div>
                <p className="text-sm text-muted-foreground">
                  Precision laying of Yorkstone flags and setts with traditional lime-based jointing, ensuring seamless aesthetic continuity with the main dwelling's architecture.
                </p>
              </div>

              <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</div>
                  Planting & Commissioning
                </div>
                <p className="text-sm text-muted-foreground">
                  Introducing multi-stem specimen trees, structural evergreens, and integrated low-voltage lighting to establish evening depth and year-round visual balance.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold text-foreground">Risk Management, Governance & Outcome</h2>
            <p>
              Throughout the 6-week schedule, risk was actively minimized through daily site briefings, strict adherence to health and safety protocols, and weekly progress reporting provided to the client. Material supply chains were managed tightly to prevent lead-time delays on bespoke stone orders.
            </p>
            <p>
              The completed Dulwich transformation successfully delivered an uncompromising, zero-defect finish that elevated both the aesthetic integrity and market valuation of the property. This project highlights core leadership competencies in complex stakeholder management, supply chain coordination, and rigorous operational delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(filePath, dulwichExpandedCode, 'utf8');
console.log("Successfully expanded Dulwich Garden Transformation file.");
