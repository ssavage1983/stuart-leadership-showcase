import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Digital Twin Workflow Case Study | Stuart Savage";
const DESCRIPTION =
  "Case study detailing the implementation of 3D spatial modeling and digital twin workflows for complex London landscape and civil engineering projects.";
const CANONICAL =
  "https://stuart-leadership-showcase.vercel.app/case-studies/digital-twin-workflow";

export const Route = createFileRoute("/case-studies/digital-twin-workflow")({
  component: DigitalTwinWorkflow,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: "https://stuart-leadership-showcase.vercel.app/images/portfolio/digital-twin.jpg",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
});

function DigitalTwinWorkflow() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 text-slate-800">
      <header className="mb-12 border-b border-[#7c2d12]/30 pb-8">
        <Link
          to="/case-studies"
          className="text-xs font-bold uppercase tracking-widest text-[#7c2d12] hover:underline mb-6 inline-block"
        >
          &larr; Return to Case Studies
        </Link>
        <h1 className="text-4xl font-serif font-bold text-[#102a43] tracking-tight mb-4">
          Digital Twin Workflow & Spatial Modelling
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Applying advanced 3D spatial modelling and data simulation to eliminate site errors and
          streamline complex urban landscaping projects across London.
        </p>
      </header>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section className="bg-[#f7f4ee] border-l-4 border-[#7c2d12] p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-[#102a43] mb-3">
            Project Overview & Application
          </h2>
          <p>
            Deployed across high-complexity sites such as Marlborough Mews and the Dulwich Garden
            Transformation, this digital twin methodology combines topographical laser measurements
            with parametric CAD models to simulate drainage loads, sub-base compaction, and material
            shrinkage before ground is broken.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#102a43]">Operational Impact & Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduced material wastage by 18% through precise volumetric calculations.</li>
            <li>
              Accelerated client design sign-off by providing photorealistic spatial simulations.
            </li>
            <li>
              Mitigated subsurface utility conflicts on tight urban infill sites in South London.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
