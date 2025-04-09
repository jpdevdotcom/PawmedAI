import { z } from "zod";

export const BugReportSchema = z.object({
	bugReasontoggle: z.string().min(1, "Bug reason required"),
	bugPrioritytoggle: z.string().min(1, "Bug priority required"),
	bugDescription: z.string().min(1, "Bug is required"),
});
