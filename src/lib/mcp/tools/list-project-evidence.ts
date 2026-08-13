import { defineTool } from "@lovable.dev/mcp-js";
import { projectEvidence } from "@/lib/portfolio-data";

export default defineTool({
  name: "list_project_evidence",
  title: "List transferable project evidence",
  description:
    "Return the transferable project evidence on the portfolio: the context, what was delivered and how it transfers to corporate operations roles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      evidence: projectEvidence.map((item) => ({
        title: item.title,
        context: item.context,
        delivery: item.delivery,
        transferability: item.transfer,
      })),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
