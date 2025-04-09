import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_QQ65xUWj_MWFS6kF7mhSMLUWQ6pT6KWPn");

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { bugPrioritytoggle, bugReasontoggle, bugDescription } = body;

		const { data, error } = await resend.emails.send({
			from: "Bug Reports <onboarding@resend.dev>", // Replace with your domain
			to: ["jphillipdacallos@gmail.com"], // Your email
			subject: `New Bug Report: ${bugReasontoggle}`,
			html: `
                <h2>🚨 New Bug Report Submitted</h2>
                <p><strong>Priority:</strong> ${bugPrioritytoggle}</p>
                <p><strong>Category:</strong> ${bugReasontoggle}</p>
                <p><strong>Description:</strong></p>
                <p>${bugDescription}</p>
            `,
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
