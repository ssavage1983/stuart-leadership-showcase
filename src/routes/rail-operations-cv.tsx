import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Rail Operations & Safety Leadership CV | Stuart Savage";
const DESCRIPTION =
  "Specialized Rail Operations CV for Stuart Savage. Highlighting frontline safety compliance, multi-disciplinary rostering, and incident management for Transport Operating Companies.";
const CANONICAL = "https://stuart-leadership-showcase.vercel.app/rail-operations-cv";

export const Route = createFileRoute("/rail-operations-cv")({
  component: RailOperationsCV,
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

function RailOperationsCV() {
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
          Rail Operations & Safety Leadership
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Targeting Transport Operating Companies (TOCs) and rail infrastructure teams. Bringing
          rigorous safety compliance, high-throughput workforce coordination, and rigorous incident
          de-escalation expertise.
        </p>
      </header>

      <div className="space-y-10">
        <section className="bg-[#f7f4ee] border-l-4 border-[#7c2d12] p-6 md:p-8 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-[#102a43] mb-4 uppercase tracking-wider text-sm">
            Rail & Regulated Environment Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Strict Safety Protocol Adherence & Hazard Mitigation</li>
              <li>High-Volume Passenger & Terminal Operations Management</li>
              <li>Multi-Disciplinary Staff Rostering & Shift Governance</li>
              <li>Contingency Planning & Rapid Incident Response</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>SLA Monitoring & Performance KPI Tracking</li>
              <li>Cross-Departmental Stakeholder Communication</li>
              <li>Regulatory Compliance & Audit Readiness</li>
              <li>Digital Shift Handover & Automated Reporting</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-[#102a43] uppercase tracking-wider text-sm border-b border-slate-200 pb-2">
            Operational Background & Transferable Leadership
          </h2>
          <div className="space-y-6 mt-6 text-sm text-slate-700 leading-relaxed">
            <p>
              With extensive background managing high-throughput regulated environments—including
              aviation terminal operations at Heathrow Airport and large-scale multi-site logistics
              coordination—I possess the rigorous safety mindset required for modern rail transport
              networks.
            </p>
            <p>
              My operational philosophy centers on zero-compromise safety, clear communication
              hierarchies, and empowering frontline teams to manage complex logistical challenges
              without service disruption.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
