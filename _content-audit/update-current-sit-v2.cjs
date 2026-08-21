const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "src", "routes", "index.tsx");
let code = fs.readFileSync(filePath, "utf8");

const newSection = `        {/* Current Position / Status Panel */}
        <section id="current-position" className="scroll-mt-36">
          <div className="border border-[#c47c62]/45 border-l-6 border-l-[#c47c62] bg-gradient-to-br from-white/80 to-[#e8e2d9]/70 p-6 sm:p-10 rounded shadow-sm space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c47c62]">
              Current Situation · Health Recovery Sabbatical
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102a43] leading-tight font-normal">
              NHS Foundation Trust Member & Health Sabbatical
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#102a43] leading-relaxed">
              <strong>Aug 2026 – Present | Guy’s and St Thomas’ NHS Foundation Trust | London, UK</strong>
            </p>

            <p className="text-sm sm:text-base text-[#102a43] leading-relaxed">
              Following the permanent closure of my landscape and design businesses in May 2026, I am dedicating this period entirely to my health, long-term clinical recovery, and personal well-being.
            </p>

            <div className="border-t border-[#102a43]/10 pt-4 space-y-4 text-xs sm:text-sm text-[#607080]">
              <p>
                In 2024, I was diagnosed with Stage 4 throat cancer and underwent intensive chemoradiotherapy. While my cancer remains in remission, the aggressive treatment left me with complex, chronic physical side effects and a profound mental health toll.
              </p>
              <p>
                On strict medical recommendation, I am taking a dedicated sabbatical to focus entirely on my physical rehabilitation and psychological recovery. During this period, I am focusing on the following meaningful goals:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#102a43] font-medium pl-2">
                <li><strong>NHS Membership:</strong> Actively participating as a public member of Guy's and St Thomas' NHS Foundation Trust, contributing patient-centred feedback and helping shape local hospital services.</li>
                <li><strong>Health & Well-being:</strong> Committing to structured daily rehabilitation, clinical therapy, and rebuilding protocols to manage chronic side effects.</li>
                <li><strong>Thoughtful Preparation:</strong> Taking the necessary space to recover, rebuild cognitive and physical strength, and safely prepare for my next chapter.</li>
              </ul>
              <p className="font-semibold text-[#c47c62] pt-2">
                Note: I am not currently seeking employment, commercial work, or taking on new professional commitments.
              </p>
            </div>
          </div>
        </section>`;

// Use regex to find the section regardless of surrounding whitespace
const sectionRegex =
  /\{\/\* Current Position \/ Status Panel \*\/\}[\s\S]*?\{\/\* Professional Strengths \*\/\}/;

if (sectionRegex.test(code)) {
  code = code.replace(sectionRegex, newSection + "\n\n        {/* Professional Strengths */}");
  fs.writeFileSync(filePath, code, "utf8");
  console.log("Section updated successfully.");
} else {
  console.error("Could not find section via regex. Attempting fallback...");
}
