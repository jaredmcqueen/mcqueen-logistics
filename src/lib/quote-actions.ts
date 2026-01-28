import { createServerFn } from "@tanstack/react-start";
import { Resend } from 'resend';

export const submitQuoteRequest = createServerFn({ method: "POST" })
	.inputValidator((formData) => {
		if (!(formData instanceof FormData)) {
			throw new Error("Expected FormData");
		}

		return {
			name: formData.get("name")?.toString() || "",
			email: formData.get("email")?.toString() || "",
			details: formData.get("details")?.toString() || "",
		};
	})
	.handler(async ({ data: formData }) => {
		console.log("Quote Request Received:", formData);

		const apiKey = process.env.RESEND_API_KEY || ''
		const fromEmailAddress = process.env.FROM_EMAIL_ADDRESS || ''
		const toRecipient1 = process.env.TO_RECIPIENT_1 || '';
		const toRecipient2 = process.env.TO_RECIPIENT_2 || '';
		const resend = new Resend(apiKey);

		try {
			const { data, error } = await resend.emails.send({
				from: fromEmailAddress,
				to: formData.email,
				cc: [toRecipient1, toRecipient2],
				replyTo: formData.email,
				subject: `McQueen Logistics Quote Request from ${formData.name}`,
				html: `
					<div style="font-family: sans-serif;">
						<h1>We've received your request!</h1>
						<p>Hi ${formData.name}, thanks for reaching out. We'll get back to you shortly.</p>
						<hr />
						<p><strong>Request Details:</strong></p>
						<p>${formData.details}</p>
						<br />
						<p style="font-size: 12px; color: #666;">
							Note: This is an automated receipt. To reach out to our team, visit our website for contact information.
						</p>
					</div>`,
			});

			console.log("data", data)

			if (error) {
				return Response.json({ error }, { status: 500 });
			}

			return Response.json(data)
		} catch (error) {
			return Response.json({ error }, { status: 500 })
		}


	});
