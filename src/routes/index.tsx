import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import {
  EMAIL,
  LINKEDIN,
  experience,
  education,
  projectEvidence,
} from "@/lib/portfolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Stuart Savage Historic Professional Archive",
  inLanguage: "en-GB",
  url: "https://stuart-leadership-showcase.lovable.app/",
  mainEntity: {
    "@type": "Person",
    name: "Stuart Savage",
    jobTitle: "Operations and Customer Experience Leader",
    description:
      "Historic professional archive of Stuart Savage, operations, customer experience, service delivery and strategic project delivery leader based in Kennington, London.",
    email: `mailto:${EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kennington",
      addressRegion: "London",
      addressCountry: "GB",
    },
    sameAs: [LINKEDIN],
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stuart Savage | Historic Professional Archive" },
      {
        name: "description",
        content:
          "Historic professional archive of Stuart Savage, operations and customer experience leader across airport hospitality, e-commerce, and service delivery.",
      },
      {
        property: "og:title",
        content: "Stuart Savage | Historic Professional Archive",
      },
      {
        property: "og:description",
        content:
          "Historic professional archive of Stuart Savage, operations and customer experience leader based in Kennington, London.",
      },
      {
        property: "og:image",
        content:
          "https://static.wixstatic.com/media/a005fe_0c1fcd3895ce450aae2a1e39de35aa9d~mv2.jpg",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://stuart-leadership-showcase.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://stuart-leadership-showcase.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
});

function Index() {
  const [openRole, setOpenRole] = useState<string | null>("role-1");

  const toggleRole = (id: string) => {
    setOpenRole((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#102a43] font-sans antialiased">
      {/* Skip to Main Content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#102a43] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative bg-[#091d2f] text-[#f7f4ee] pt-16 pb-12 px-6 lg:pt-24 lg:pb-16 overflow-hidden border-b border-[#c47c62]/30">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://static.wixstatic.com/media/a005fe_83795358ed1f46e783522d83266a67c6~mv2.jpg')`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#091d2f] via-[#091d2f]/95 to-[#091d2f]/50" />

        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Hero Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c47c62]">
              Stuart Savage · London
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.94] tracking-tight">
              Calm leadership. <br />
              Complex delivery. <br />
              <em className="not-italic text-[#c47c62]">Historic professional archive.</em>
            </h1>
            <p className="text-base sm:text-lg text-[#f7f4ee]/80 max-w-2xl leading-relaxed">
              A concise record of previous operations, customer experience, strategic delivery, and historic project work.
            </p>

            <div className="border-l-3 border-[#c47c62] pl-4 text-xs sm:text-sm text-[#f7f4ee]/90 font-medium max-w-2xl">
              Savage Bespoke Ltd closed in 2023. Stuart Savage Landscaping and The Moonlight Garden Design Co. closed in May 2026. This page is not a trading website, service offer, client-acquisition page, or active employment-seeking profile.
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#current-position"
                className="inline-flex items-center justify-center min-h-[48px] px-5 bg-[#c47c62] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c7a667] hover:text-[#091d2f] transition-colors rounded-sm"
              >
                Read Current Position
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center min-h-[48px] px-5 border border-[#c47c62] bg-[#f7f4ee]/10 text-[#f7f4ee] text-xs font-bold uppercase tracking-wider hover:bg-[#c7a667] hover:text-[#091d2f] hover:border-[#c7a667] transition-colors rounded-sm"
              >
                View Archived Experience
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-[#f7f4ee] hover:text-[#c47c62] transition-colors underline underline-offset-4"
              >
                LinkedIn <span className="text-[#c47c62]">↗</span>
              </a>
            </div>
          </div>

          {/* Portrait Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[340px] rounded border border-[#f7f4ee]/30 bg-[#091d2f] shadow-2xl overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/a005fe_0c1fcd3895ce450aae2a1e39de35aa9d~mv2.jpg/v1/fill/w_1200,h_1800,fp_0.48_0.31,q_88,enc_auto/stuart_profile_photo_main.jpg"
                alt="Stuart Savage, operations and customer experience leader"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#091d2f] via-[#091d2f]/90 to-transparent p-4 text-[10px] font-bold uppercase tracking-wider text-[#f7f4ee]/80 space-y-0.5">
                <span className="block">Operations · Customer Experience</span>
                <span className="block text-[#c7a667]">Historic Professional Archive</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#f7f4ee] border-b border-[#102a43]/16 py-4 px-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#102a43]">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <span>Professional Archive</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Historic Project Work</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Former Businesses Closed</span>
          <i className="not-italic text-[#c47c62]">✦</i>
          <span>Recovery Focused</span>
        </div>
      </section>

      {/* Anchor Sticky Bar */}
      <nav className="sticky top-[92px] z-40 bg-[#f7f4ee]/95 backdrop-blur border-b border-[#102a43]/16 py-3 px-6 text-center text-[10px] font-bold uppercase tracking-[0.13em]">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2 sm:gap-4">
          <a
            href="#current-position"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Current Position
          </a>
          <a
            href="#expertise"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Strengths
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Career
          </a>
          <a
            href="#work"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Archive
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 border border-transparent hover:border-[#c47c62]/40 hover:text-[#c47c62] transition-colors rounded-sm"
          >
            Links
          </a>
        </div>
      </nav>

      {/* Main Content Body */}
      <main id="main" className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        {/* Current Position / Status Panel */}
        <section id="current-position" className="scroll-mt-36">
          <div className="border border-[#c47c62]/45 border-l-6 border-l-[#c47c62] bg-gradient-to-br from-white/80 to-[#e8e2d9]/70 p-6 sm:p-10 rounded shadow-sm space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c47c62]">
              Current Position · Important Context
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] leading-tight font-normal">
              Recovery, business closure and professional archive.
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#102a43] leading-relaxed">
              Following the solvent wind-down of Savage Bespoke Ltd in 2023 and the closure of my former sole trader practices in May 2026, I am taking time to recover, rebuild, and stabilise my personal circumstances. I currently volunteer with Guy’s Hospital as a committee member while focusing on my health and longer-term recovery.
            </p>

            {/* Status Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="border border-[#c47c62]/30 bg-white/60 p-3.5 rounded">
                <strong className="block text-[10px] uppercase tracking-wider text-[#102a43]">Trading Status</strong>
                <span className="text-xs text-[#607080] mt-1 block">Not currently trading or taking on commercial work.</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/60 p-3.5 rounded">
                <strong className="block text-[10px] uppercase tracking-wider text-[#102a43]">Website Purpose</strong>
                <span className="text-xs text-[#607080] mt-1 block">Archive of previous experience and historic project evidence.</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/60 p-3.5 rounded">
                <strong className="block text-[10px] uppercase tracking-wider text-[#102a43]">Current Focus</strong>
                <span className="text-xs text-[#607080] mt-1 block">Health recovery, personal stability, and professional advice.</span>
              </div>
              <div className="border border-[#c47c62]/30 bg-white/60 p-3.5 rounded">
                <strong className="block text-[10px] uppercase tracking-wider text-[#102a43]">Voluntary Work</strong>
                <span className="text-xs text-[#607080] mt-1 block">Committee contribution with Guy’s Hospital during recovery.</span>
              </div>
            </div>

            <p className="text-sm sm:text-base font-semibold text-[#102a43]">
              I am not currently taking on employment, client work, landscaping projects, or new commercial activity. My focus is recovery, stability, and properly closing the chapter of my former businesses.
            </p>

            {/* Health Narrative */}
            <div className="border-t border-[#102a43]/16 pt-6 space-y-4 text-xs sm:text-sm text-[#607080]">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#c47c62]">
                Health and Business Closure Context
              </h3>
              <p>
                In 2024, I was diagnosed with Stage 4 throat cancer and underwent intensive chemoradiotherapy. I am now living with severe late effects from treatment, chronic pain, and ongoing medical complications.
              </p>
              <p>
                The physical toll contributed to a serious mental health breakdown. My sudden medical collapse meant I could no longer physically or mentally operate my businesses, leading to the permanent closure of my remaining trade operations.
              </p>
              <p className="font-semibold text-[#102a43] border-t border-[#102a43]/10 pt-4">
                This page preserves my professional history clearly and honestly, while making clear that I am not trading, seeking clients, or looking for work during this period of recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Strengths */}
        <section id="expertise" className="scroll-mt-36 bg-[#091d2f] text-[#f7f4ee] p-8 sm:p-12 rounded-lg border border-[#c47c62]/30">
          <div className="space-y-2 mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7a667]">Professional Strengths</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              Intelligent systems. <br /> Human outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#f7f4ee]/20 pt-8">
            <article className="space-y-2">
              <span className="text-xs font-bold text-[#c7a667]">01</span>
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#f7f4ee]">Operational leadership</h3>
              <p className="text-xs text-[#f7f4ee]/70 leading-relaxed">Building calm, visible systems that help people make good decisions and deliver consistently.</p>
            </article>

            <article className="space-y-2">
              <span className="text-xs font-bold text-[#c7a667]">02</span>
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#f7f4ee]">Customer experience</h3>
              <p className="text-xs text-[#f7f4ee]/70 leading-relaxed">Turning moments of friction into clearer journeys, stronger trust, and better service outcomes.</p>
            </article>

            <article className="space-y-2">
              <span className="text-xs font-bold text-[#c7a667]">03</span>
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#f7f4ee]">Strategic delivery</h3>
              <p className="text-xs text-[#f7f4ee]/70 leading-relaxed">Moving complex work from an ambitious brief to an owned plan, controlled programme, and clean handover.</p>
            </article>

            <article className="space-y-2">
              <span className="text-xs font-bold text-[#c7a667]">04</span>
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#f7f4ee]">Governance & assurance</h3>
              <p className="text-xs text-[#f7f4ee]/70 leading-relaxed">Making risks, responsibilities, commercial choices, and quality standards visible before they become problems.</p>
            </article>
          </div>
        </section>

        {/* Career Timeline */}
        <section id="experience" className="scroll-mt-36 space-y-8">
          <div className="border-b border-[#102a43]/16 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">Career Archive</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] font-normal mt-1">
              Archived experience in operations, logistics, and delivery.
            </h2>
            <p className="text-sm text-[#607080] mt-2">
              Selected roles are expandable so the page stays compact while preserving detailed evidence of leadership, safety, logistics, and delivery.
            </p>
          </div>

          <ol className="space-y-4">
            {experience.map((role) => {
              const isOpen = openRole === `role-${role.id}`;

              // Customize meta label for founder role to accurately reflect dates
              const roleMeta =
                role.id === "role-1"
                  ? "2019–23 (Savage Bespoke Ltd) · 2019–26 (Landscaping & Moonlight)"
                  : role.meta;

              return (
                <li
                  key={role.id}
                  id={`role-${role.id}`}
                  className={`border rounded-lg transition-all ${
                    role.featured
                      ? "border-[#c47c62]/45 border-l-5 border-l-[#c47c62] bg-gradient-to-r from-white to-[#f7f4ee]"
                      : "border-[#102a43]/16 bg-white/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(`role-${role.id}`)}
                    className="w-full text-left p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c47c62]">
                        {roleMeta}
                      </span>
                      <h3 className="text-xl font-bold uppercase text-[#102a43] leading-snug">
                        {role.role}
                      </h3>
                      <p className="text-sm font-medium text-[#607080]">{role.org}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c47c62] shrink-0">
                      <span>{isOpen ? "Close details ↑" : "Open details ↓"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-[#102a43]/10 pt-4 text-xs sm:text-sm text-[#607080] space-y-3">
                      <ul className="space-y-2 list-disc list-inside">
                        {role.points.map((pt, i) => (
                          <li key={i} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                      {role.id === "role-1" && (
                        <p className="text-xs font-semibold text-[#102a43] border-t border-slate-200 pt-3 mt-3">
                          Operational Note: Savage Bespoke Ltd closed in 2023. Stuart Savage Landscaping and The Moonlight Garden Design Co. closed permanently in May 2026.
                        </p>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Education & Qualifications */}
          <div className="pt-8 border-t border-[#102a43]/16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#102a43] mb-6">
              Education &amp; Professional Qualifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((item, idx) => (
                <div key={idx} className="border border-[#102a43]/16 bg-white p-5 rounded">
                  <h4 className="text-base font-bold text-[#102a43] uppercase">{item.qualification}</h4>
                  <p className="text-xs font-medium text-[#c47c62] mt-0.5">{item.org} · {item.year}</p>
                  <p className="text-xs text-[#607080] mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transferable Project Evidence */}
        <section id="evidence" className="scroll-mt-36 space-y-8">
          <div className="border-b border-[#102a43]/16 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">Transferable Evidence</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#102a43] font-normal">Delivery under real constraints</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectEvidence.map((item, idx) => (
              <article key={idx} className="border border-[#102a43]/16 bg-white p-6 rounded shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-[#102a43] uppercase">{item.title}</h3>
                <div className="space-y-2 text-xs text-[#607080]">
                  <p><strong>Context:</strong> {item.context}</p>
                  <p><strong>Delivery:</strong> {item.delivery}</p>
                  <p className="text-[#102a43] font-semibold"><strong>Transfers to:</strong> {item.transfer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Project Archive Section */}
        <section id="work" className="scroll-mt-36 bg-[#e8e2d9] p-8 sm:p-12 rounded-lg space-y-8 border border-[#102a43]/16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">Historic Project Archive</p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] font-normal mt-1">Selected historic work.</h2>
            <p className="text-xs text-[#607080] mt-2">
              Past project work is shown as an archive of previous delivery experience. It does not indicate current trading activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/case-studies" className="block border border-[#102a43]/16 bg-white rounded overflow-hidden group shadow-sm">
              <img
                src="https://static.wixstatic.com/media/a005fe_fd16f3b3d7334721b36a59cefa511128~mv2.jpg"
                alt="Balham Transformation"
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c47c62]">Historic Archive</span>
                <h3 className="font-serif text-xl text-[#102a43]">Balham Transformation</h3>
                <p className="text-xs text-[#607080]">Project planning, phased programme control, procurement, and client updates.</p>
              </div>
            </Link>

            <Link to="/case-studies" className="block border border-[#102a43]/16 bg-white rounded overflow-hidden group shadow-sm">
              <img
                src="https://static.wixstatic.com/media/a005fe_38195cc6234740de88d7877ec4214083~mv2.jpg"
                alt="Digital Twin Workflow"
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c47c62]">Planning Archive</span>
                <h3 className="font-serif text-xl text-[#102a43]">Digital Twin Workflow</h3>
                <p className="text-xs text-[#607080]">Remote planning method combining structured briefs and 3D data.</p>
              </div>
            </Link>

            <Link to="/case-studies" className="block border border-[#102a43]/16 bg-white rounded overflow-hidden group shadow-sm">
              <img
                src="https://static.wixstatic.com/media/a005fe_5ecb889aaac5452f99a906260086ae68~mv2.jpg"
                alt="Supply Chain Control"
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c47c62]">Operations Archive</span>
                <h3 className="font-serif text-xl text-[#102a43]">Supply Chain Control</h3>
                <p className="text-xs text-[#607080]">Materials, people, and dependencies coordinated across live sites.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact & Links */}
        <section id="contact" className="scroll-mt-36 text-center space-y-6 pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47c62]">Professional Links</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] font-normal">
            Archive contact record. <br />
            <em className="not-italic text-[#c47c62]">Not currently trading.</em>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y border-[#102a43]/16 text-xs font-semibold uppercase tracking-wider text-[#102a43]">
            <a href={`mailto:${EMAIL}`} className="hover:text-[#c47c62] transition-colors">
              {EMAIL} <span className="text-[#c47c62]">↗</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-[#c47c62] transition-colors">
              linkedin.com/in/stuartsavage <span className="text-[#c47c62]">↗</span>
            </a>
            <span className="text-[#607080]">Kennington, London</span>
          </div>

          <a href="#top" className="inline-block text-xs font-bold uppercase tracking-widest text-[#c47c62] pt-4 hover:underline">
            Back to top ↑
          </a>
        </section>
      </main>
    </div>
  );
}