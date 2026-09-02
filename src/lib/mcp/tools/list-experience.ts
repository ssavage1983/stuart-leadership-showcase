import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { education, experience } from "@/lib/portfolio-data";

export default defineTool({
  name: "list_experience",
  title: "List career experience",
  description:
    "Return Stuart Savage's career history in reverse-chronological order, with responsibilities and achievements per role, plus education and qualifications.",
  inputSchema: {
    featuredOnly: z
      .boolean()
      .optional()
      .describe("When true, return only the highlighted key roles."),
    search: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional case-insensitive keyword filter across role, organisation and bullets."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ featuredOnly, search }) => {
    const term = search?.toLowerCase();
    const roles = experience
      .filter((role) => (featuredOnly ? role.featured === true : true))
      .filter((role) =>
        term
          ? [role.role, role.org, role.meta, ...role.points].join(" ").toLowerCase().includes(term)
          : true,
      )
      .map((role) => ({
        id: role.id,
        role: role.role,
        organisation: role.org,
        period: role.meta,
        featured: role.featured === true,
        highlights: role.points,
      }));

    const payload = {
      roles,
      education: education.map((item) => ({
        qualification: item.qualification,
        organisation: item.org,
        year: item.year,
        detail: item.body,
      })),
      note: "The remaining founder-led businesses closed in May 2026 after health and trading pressures made continued operation unsustainable.",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
