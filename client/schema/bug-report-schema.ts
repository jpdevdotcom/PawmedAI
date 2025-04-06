import { z } from "zod";

export const BugReportSchema = z.object({
	toggle: z.string(),
});
