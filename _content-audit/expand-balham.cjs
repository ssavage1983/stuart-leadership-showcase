const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'routes', 'case-studies.balham-cottage-courtyard-garden.tsx');

const expandedBalhamCode = `import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Layers, Wrench } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies/balham-cottage-courtyard-garden')({
  component: BalhamCottageCourtyardCaseStudy,
});

function BalhamCottageCourtyardCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Overview
        </Link>

        <div className="space-y-4 mb-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">Historic Project Archive · Urban Transformation</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Balham Cottage Courtyard Garden</h1>
          <p className="text-xl text-muted-foreground">
            End-to-end project planning, phased programme control, specialist procurement, and rigorous site execution for a complex Victorian terrace transformation in South London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Programme Duration</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4-Week Phased Delivery</div>
              <p className="text-xs text-muted-foreground mt-1">Strict timeline adherence</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Access Constraints</CardTitle>
              <Layers className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Restricted Urban</div>
              <p className="text-xs text-muted-foreground mt-1">Manual offloading & wheelbarrow transit</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Standard</CardTitle>
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Zero-Defect Handover</div>
              <p className="text-xs text-muted-foreground mt-1">UltraTile ProPave external spec</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Project Background & Operational Challenge</h2>
            <p>
              The Balham Cottage Courtyard project presented a classic urban London landscaping challenge: a compact, landlocked Victorian property with no rear access, severe drainage issues, and outdated, fractured hardscaping. The client required a complete structural reset to convert an unusable mud-trap into a refined, high-performance architectural extension of the interior living space.
            </p>
            <p>
              Operating within a tight residential envelope meant that all excavation waste removal and heavy material delivery (including sub-base aggregates and vitrified porcelain paving) had to be hand-wheeled through the narrow interior corridor of the occupied cottage. This required meticulous scheduling to protect internal finishes while keeping labor efficiency high.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Phased Programme Control & Execution</h2>
            <p>
              To eliminate downtime and manage site congestion, the project was broken down into four strict operational phases:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 1: Controlled Strip-Out & Excavation:</strong> Systematic removal of legacy concrete and soil via restricted-access pathways, maintaining clean site perimeters and zero disruption to neighboring properties.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 2: Sub-Base Stabilization & Drainage:</strong> Installation of a high-load MOT Type 1 sub-base combined with integrated falls and linear channel drainage to permanently resolve historical damp and pooling issues.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 3: Hard Landscaping & Masonry:</strong> Precise laying of UltraTile-approved porcelain paving using external slurry primers and ProPave jointing sweeps to guarantee slip resistance and aesthetic longevity.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                <span><strong>Phase 4: Architectural Planting & Lighting:</strong> Integration of multi-stem structural specimens and low-voltage warm-white (2700K) uplighting to establish evening depth and visual expansion of the courtyard bounds.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Governance, Risk Management & Outcome</h2>
            <p>
              Throughout the build, stakeholder communication was maintained through structured weekly progress updates and digital milestone sign-offs. By anticipating urban logistical constraints and enforcing strict material quality controls, the project was delivered exactly on schedule, within budget, and to an uncompromising finish. 
            </p>
            <p>
              This project exemplifies the core operational disciplines of resource sequencing, risk mitigation, and client alignment required to successfully execute high-standard transformations in complex physical environments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(filePath, expandedBalhamCode, 'utf8');
console.log("Successfully expanded Balham cottage courtyard case study page.");
