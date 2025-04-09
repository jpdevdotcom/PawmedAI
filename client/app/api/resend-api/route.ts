import { Resend } from "resend";
import { NextResponse } from "next/server";
import BugReportEmail from "@/components/email-templates/bug-reports";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { bugPrioritytoggle, bugReasontoggle, bugDescription } = body;

		const { data, error } = await resend.emails.send({
			from: "PawMed AI Bug Reports <onboarding@resend.dev>", // Replace with your domain
			to: ["jphillipdacallos@gmail.com"], // Your email
			subject: `New Bug Report: ${bugReasontoggle}`,
			react: BugReportEmail({
				bugPrioritytoggle,
				bugDescription,
				bugReasontoggle,
			}),
		});

		if (error) {
			return NextResponse.json({ error }, { status: 400 });
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("Failed to send email:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
