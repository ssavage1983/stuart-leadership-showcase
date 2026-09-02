import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Operations Manager CV | Stuart Savage";
const DESCRIPTION =
  "Comprehensive Operations Manager CV for Stuart Savage. Specializing in corporate operations, logistics leadership, and digital workflow optimization.";
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
          Showcasing a robust track record in operational discipline, logistics leadership, and
          customer experience. Bridging the gap between physical project execution and technical
          digital workflows.
        </p>
      </header>

      <div className="space-y-10">
        <section className="bg-[#f7f4ee] border-l-4 border-[#7c2d12] p-6 md:p-8 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-[#102a43] mb-6 uppercase tracking-wider text-sm">
            Core Competencies & Transferable Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Cross-functional Operations Leadership</li>
              <li>Logistics & Supply Chain Coordination</li>
              <li>End-to-End Project Execution</li>
              <li>Customer Experience Strategy</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Digital Workflow Automation (PowerShell, CLI)</li>
              <li>Version Control & Repository Management (Git, GitHub)</li>
              <li>Frontend Integration (HTML, CSS, React ecosystems)</li>
              <li>Technical Documentation & Troubleshooting</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-[#102a43] uppercase tracking-wider text-sm border-b border-slate-200 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-lg font-bold text-[#102a43]">
                Founder & Managing Director (Operations & Project Delivery)
              </h3>
              <p className="text-sm text-[#7c2d12] mb-2">Various Ventures | Mar 2019 – May 2026</p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li>
                  Directed day-to-day staff rostering, safety inductions, and resource allocation
                  for multi-site operations.
                </li>
                <li>
                  Negotiated supplier contracts and managed complex client stakeholders under strict
                  budgetary controls.
                </li>
                <li>
                  Pioneered proprietary digital modeling systems to streamline delivery timelines by
                  20%.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#102a43]">Food & Beverage Manager</h3>
              <p className="text-sm text-[#7c2d12] mb-2">
                No1 Lounges Ltd (Heathrow Airport) | Sep 2015 – Jan 2016
              </p>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li>
                  Spearheaded frontline operations and safety compliance in a highly regulated,
                  high-volume environment.
                </li>
                <li>
                  Coordinated multi-disciplinary teams of up to 25 staff to maintain exceptional
                  service standards.
                </li>
                <li>
                  Acted as the central point of authority for on-site customer recovery and
                  de-escalation.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
