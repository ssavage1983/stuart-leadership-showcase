import * as React from "react";

export const head = () => ({
  title: "Operations Manager CV | Stuart Savage",
  meta: [
    {
      name: "description",
      content:
        "Comprehensive Operations Manager CV for Stuart Savage. Specializing in corporate operations, logistics leadership, and digital workflow optimization.",
    },
    { property: "og:title", content: "Operations Manager CV | Stuart Savage" },
  ],
});

export default function OperationsManagerCV() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 text-slate-200">
      <header className="mb-12 border-b border-[#7c2d12]/30 pb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Operations Manager CV</h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Showcasing a robust track record in operational discipline, logistics leadership, and
          customer experience. Bridging the gap between physical project execution and technical
          digital workflows.
        </p>
      </header>

      <div className="space-y-10">
        <section className="bg-white/5 border-l-4 border-[#7c2d12] p-6 md:p-8 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider text-sm">
            Core Competencies & Transferable Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
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

        {/* Professional Experience Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white uppercase tracking-wider text-sm border-b border-slate-700 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-lg font-bold text-white">Operations & Project Delivery Leader</h3>
              <p className="text-sm text-[#c7a667] mb-2">Various Ventures | 2019 – 2026</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
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
              <h3 className="text-lg font-bold text-white">Food & Beverage Manager</h3>
              <p className="text-sm text-[#c7a667] mb-2">
                No1 Lounges Ltd (Heathrow Airport) | 2015 – 2016
              </p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
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
