import { defineTool } from "@lovable.dev/mcp-js";
import { EMAIL, LINKEDIN, capabilities, sectors, targetRoles } from "@/lib/portfolio-data";

export default defineTool({
  name: "get_profile",
  title: "Get profile summary",
  description:
    "Return Stuart Savage's professional summary, core capabilities, target role areas, sectors and public contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Stuart Savage",
      headline: "Operations and Customer Experience Leader",
      location: "Kennington, London, United Kingdom",
      summary:
        "Operations, customer experience, service delivery and strategic project delivery leader with experience across airport hospitality, retail and e-commerce operations, and founder-led project delivery.",
      contact: { email: EMAIL, linkedin: LINKEDIN },
      capabilities: capabilities.map((c) => ({ title: c.title, detail: c.body })),
      targetRoles: targetRoles.map((r) => ({ title: r.title, detail: r.body })),
      sectors,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
