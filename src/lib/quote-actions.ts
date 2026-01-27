import { createServerFn } from "@tanstack/react-start";

export const submitQuoteRequest = createServerFn({ method: "POST" })
	.inputValidator((data) => {
		if (!(data instanceof FormData)) {
			throw new Error("Expected FormData");
		}

		return {
			name: data.get("name")?.toString() || "",
			email: data.get("email")?.toString() || "",
			details: data.get("details")?.toString() || "",
		};
	})
	.handler(async ({ data }) => {
		console.log("Quote Request Received:", data);
		// In a real app, you might send an email or save to a database here.
		return { success: true };
	});
