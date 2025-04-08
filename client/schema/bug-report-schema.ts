import { z } from "zod";

export const BugReportSchema = z.object({
	bugReasontoggle: z.string(),
	bugPrioritytoggle: z.string(),
	bugDescription: z.string().min(1, "Bug is required"),
});
