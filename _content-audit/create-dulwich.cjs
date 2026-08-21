const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'routes', 'case-studies.dulwich-garden-transformation.tsx');

const dulwichCode = `import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Wrench } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/dulwich-garden-transformation')({
  component: DulwichGardenTransformationCaseStudy,
});

function DulwichGardenTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fadeIn transition-opacity duration-700">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors duration-300 transform hover:-translate-x-1">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
        </Link>

        <div className="space-y-4 mb-8 transform transition-all duration-700 translate-y-0 opacity-100">
          <Badge variant="outline" className="text-xs uppercase tracking-wider animate-pulse">Historic Project Archive · Heritage Landscaping</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Dulwich Garden Transformation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive landscape restructuring, historical context alignment, and precision masonry execution for a period property in South London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-500">
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Programme Scope</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Full Site Renewal</div>
              <p className="text-xs text-muted-foreground mt-1">End-to-end execution</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Material Palette</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Natural Stone</div>
              <p className="text-xs text-muted-foreground mt-1">Sourced for period harmony</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Assurance</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rigorous Spec</div>
              <p className="text-xs text-muted-foreground mt-1">Zero-defect delivery</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4 transition-all duration-500">
            <h2 className="text-2xl font-semibold text-foreground">Project Overview & Context</h2>
            <p>
              Located in the conservation-conscious setting of Dulwich, this project required balancing contemporary functional landscaping with the architectural heritage of a substantial period property. The existing outdoor space suffered from poor terracing, fragmented levels, and mismatched materials that failed to connect with the interior living areas.
            </p>
            <p>
              The objective was to establish harmonious spatial zoning, improve sub-grade drainage, and introduce sophisticated natural stone hardscaping paired with mature architectural planting to create an enduring, elegant sanctuary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Execution & Operational Pillars</h2>
            <ul className="space-y-3">
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Site Regrading & Engineering:</strong> Careful re-leveling of sloping topography to create stable, usable terraces while preserving existing mature boundary trees.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Period-Aligned Masonry:</strong> Sourcing and laying high-grade natural stone paving and retaining structures that complement the heritage brickwork of the main dwelling.</span>
              </li>
              <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Planting Integration:</strong> Installing layered, structural planting schemes designed to provide year-round architectural interest, privacy screening, and textural contrast.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Outcome & Professional Value</h2>
            <p>
              The completed Dulwich transformation successfully merged rigorous engineering standards with classic design sensibilities. By maintaining strict control over logistics, material quality, and subcontractor coordination, the project delivered a timeless outdoor environment that elevated the property's overall utility and market value.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(filePath, dulwichCode, 'utf8');
console.log("Successfully created Dulwich garden transformation case study route.");
