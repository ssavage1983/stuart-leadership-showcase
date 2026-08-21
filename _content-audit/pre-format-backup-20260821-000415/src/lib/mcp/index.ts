import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listProjectEvidenceTool from "./tools/list-project-evidence";

export default defineMcp({
  name: "stuart-savage-career-portfolio",
  title: "Stuart Savage Career Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only tools exposing the published career portfolio of Stuart Savage, an operations and customer experience leader based in London. Use `get_profile` for the summary, capabilities and contact links, `list_experience` for the full career history and education, and `list_project_evidence` for transferable delivery examples. All content is already public on the portfolio site.",
  tools: [getProfileTool, listExperienceTool, listProjectEvidenceTool],
});
