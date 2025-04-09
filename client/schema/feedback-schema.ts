import { z } from "zod";

export const FeedbackSchema = z.object({
	firstname: z.string().min(1, "Firstname is required"),
	lastname: z.string().min(1, "Lastname is required"),
	emailAddress: z.string().min(1, "Email address is required").email(),
	feedback: z.string().min(1, "Your feedback is required"),
});
