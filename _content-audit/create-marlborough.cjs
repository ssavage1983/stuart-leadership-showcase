const fs = require("fs");
const path = require("path");

const filePath = path.join(
  process.cwd(),
  "src",
  "routes",
  "case-studies.marlborough-mews-sanctuary-brixton.tsx",
);

const fullMarlboroughCode = `import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/marlborough-mews-sanctuary-brixton')({
  component: MarlboroughMewsCaseStudy,
});

function MarlboroughMewsCaseStudy() {
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
            Project Archive · Tropical Microclimate & Urban Courtyard
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">Marlborough Mews Sanctuary, Brixton</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Case study on executing tropical planting palettes, resilient microclimates, and bespoke architectural hardscaping in an urban London courtyard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Design Focus</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Tropical Palettes</div>
              <p className="text-xs text-muted-foreground mt-1">Microclimate optimization</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Execution</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Custom Hardwood</div>
              <p className="text-xs text-muted-foreground mt-1">Bespoke joinery & screening</p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Standard</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">Rigorous horticultural spec</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Microclimate Strategy</h2>
            <p>
              Situated in Brixton, this mews courtyard project required transforming an exposed, overlooked urban footprint into a private, lush subtropical haven. Because inner-city mews properties often experience wind-tunnels and extreme temperature retention from surrounding brickwork, a specialized microclimate strategy was essential.
            </p>
            <p>
              The objective was to establish wind-filtering boundary structures, moisture-retentive soil engineering, and a bold botanical selection featuring structural evergreens, large-leafed exotics, and multi-stem specimens that thrive in protected urban pockets.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Execution & Technical Pillars</h2>
            <ul className="space-y-3">
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Soil & Irrigation Engineering:</strong> Upgrading growing media with organic amendments and installing discreet automated drip irrigation to support high-demand tropical flora.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Bespoke Screening & Hardscaping:</strong> Installing architectural timber joinery and clean boundary lines to maximize privacy while maintaining an open, fluid spatial layout.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Exotic Planting Integration:</strong> Layering architectural canopy plants with understory shade-tolerant foliage to create intense textural contrast and year-round visual depth.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The Marlborough Mews project demonstrates the successful intersection of creative planting design and rigorous practical execution. By taking full control of site logistics, soil preparation, and specialist horticultural procurement, the completed sanctuary delivered an immediate sense of seclusion and botanical immersion right in the heart of South London.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(filePath, fullMarlboroughCode, "utf8");
console.log("Successfully created Marlborough Mews case study route.");
