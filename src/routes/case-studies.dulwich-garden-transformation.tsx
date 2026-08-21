import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Wrench, FileText } from 'lucide-react';
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

        <div className="space-y-4 mb-8 transform transition-all duration-700 translate-y-0 opacity-100">
          <Badge variant="outline" className="text-xs uppercase tracking-wider animate-pulse">
            Project Archive · Heritage Landscaping & Site Engineering
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Dulwich Garden Transformation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            End-to-end operational planning, conservation-aligned stakeholder management, and precision masonry execution for a high-value period property in South London.
          </p>
        </div>

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

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Operational Context</h2>
            <p>
              Situated within a strict conservation area in Dulwich, this project required balancing contemporary functional design with the exacting historical standards of a substantial period property. The legacy outdoor space suffered from structural grade transitions, poor sub-surface drainage, and deteriorated hardscaping that completely disconnected the exterior footprint from the internal living areas.
            </p>
            <p>
              The core challenge involved managing logistics across a restricted residential envelope while ensuring all material sourcing and masonry techniques strictly respected local heritage guidelines. The operation demanded meticulous scheduling to coordinate specialist stone masonry, drainage engineers, and horticultural teams without causing disruption to neighboring properties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Phased Programme Execution & Control</h2>
            <p>
              To maintain absolute control over the critical path and guarantee high quality output, the project was executed through four tightly managed operational phases:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 1: Site Survey & Sub-Grade Engineering:</strong> Comprehensive topographical leveling and installation of a robust land-drainage network to permanently mitigate historical surface pooling.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 2: Terracing & Structural Retaining:</strong> Constructing tiered retaining structures using reclaimed period brickwork and engineering blocks to create stable, highly functional upper and lower garden zones.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 3: Heritage Paving & Masonry:</strong> Precision laying of Yorkstone flags and setts with traditional lime-based jointing, ensuring seamless aesthetic continuity with the main dwelling's architecture.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 4: Architectural Planting & Commissioning:</strong> Introducing multi-stem specimen trees, structural evergreens, and integrated low-voltage lighting to establish evening depth and year-round visual balance.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
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
