import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Operations Manager CV | Stuart Savage";
const DESCRIPTION =
  "Operations Manager CV for Stuart Savage. Specializing in multi-site logistics, corporate operations, vendor management, and digital workflow optimization.";
const CANONICAL = "https://stuart-leadership-showcase.vercel.app/operations-manager-cv";

export const Route = createFileRoute("/operations-manager-cv")({
  component: OperationsManagerCV,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: "https://stuart-leadership-showcase.vercel.app/images/profile/stuart-savage.jpg",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
});

function OperationsManagerCV() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 text-slate-800">
      <header className="mb-12 border-b border-[#7c2d12]/30 pb-8">
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-widest text-[#7c2d12] hover:underline mb-6 inline-block"
        >
          &larr; Return to main showcase
        </Link>
        <h1 className="text-4xl font-serif font-bold text-[#102a43] tracking-tight mb-4">
          Operations Manager CV
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Demonstrated expertise in multi-site operations leadership, supply chain coordination, and
          rigorous safety compliance. Bridging physical project delivery with technical digital
          automation.
        </p>
      </header>

      <div className="space-y-10">
        <section className="bg-[#f7f4ee] border-l-4 border-[#7c2d12] p-6 md:p-8 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-[#102a43] mb-4 uppercase tracking-wider text-sm">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Multi-Site Operations & Resource Rostering</li>
              <li>Vendor Contract Negotiation & Supply Chain Control</li>
              <li>Health, Safety & Compliance Standards (IOSH/NEBOSH aligned)</li>
              <li>Stakeholder De-escalation & Customer Experience Strategy</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Process Automation & CLI Scripting (PowerShell, Git)</li>
              <li>Inventory & Asset Management Systems</li>
              <li>Cross-Functional Team Leadership (Up to 25+ Staff)</li>
              <li>Technical Documentation & Digital Twin Modelling</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-[#102a43] uppercase tracking-wider text-sm border-b border-slate-200 pb-2">
            Professional Experience
          </h2>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-lg font-bold text-[#102a43]">Founder & Operations Director</h3>
              <p className="text-sm text-[#7c2d12] mb-2">
                Independent Project Delivery & Operations | Mar 2019 – May 2026
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li>
                  Directed end-to-end operational execution for high-value commercial and
                  residential projects across London.
                </li>
                <li>
                  Managed complex supply chains, raw material procurement, and specialist
                  sub-contractors under tight budgetary constraints.
                </li>
                <li>
                  Introduced digital workflow tracking and automated scheduling models that improved
                  resource utilisation by 20%.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#102a43]">
                Food & Beverage Manager (Frontline Operations)
              </h3>
              <p className="text-sm text-[#7c2d12] mb-2">
                No1 Lounges Ltd (Heathrow Airport) | Sep 2015 – Jan 2016
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li>
                  Led high-volume operational readiness and safety compliance in a heavily regulated
                  aviation environment.
                </li>
                <li>
                  Supervised multi-disciplinary teams of 25+ staff, managing daily rostering, shift
                  handovers, and service quality control.
                </li>
                <li>
                  Acted as primary escalation lead for operational bottlenecks and customer dispute
                  resolution under strict time pressures.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
