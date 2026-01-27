import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { submitQuoteRequest } from "../lib/quote-actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function QuoteForm() {
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSuccess, setIsSuccess] = React.useState(false);

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			details: "",
		},
		onSubmit: async ({ value }) => {
			setIsSubmitting(true);
			console.log("Form submitted with values:", value);
			try {
				const formData = new FormData();
				formData.append("name", value.name);
				formData.append("email", value.email);
				formData.append("details", value.details);

				console.log("Sending FormData to server...");
				const result = await submitQuoteRequest({ data: formData });
				console.log("Server response:", result);
				setIsSuccess(true);
			} catch (error) {
				console.error("Failed to submit quote request", error);
			} finally {
				setIsSubmitting(false);
			}
		},
	});

	if (isSuccess) {
		return (
			<div className="p-6 bg-green-50 border border-green-200 rounded-md text-green-800">
				<h3 className="text-lg font-semibold">Thank you!</h3>
				<p>Your quote request has been submitted successfully. We'll get back to you soon.</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="space-y-6 w-full"
		>
			<div className="space-y-2">
				<form.Field
					name="name"
					children={(field) => (
						<>
							<Label htmlFor={field.name}>
								Name <span className="text-red-500">*</span>
							</Label>
							<Input
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								required
							/>
						</>
					)}
				/>
			</div>

			<div className="space-y-2">
				<form.Field
					name="email"
					children={(field) => (
						<>
							<Label htmlFor={field.name}>
								Email <span className="text-red-500">*</span>
							</Label>
							<Input
								id={field.name}
								name={field.name}
								type="email"
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								required
							/>
						</>
					)}
				/>
			</div>

			<div className="space-y-2">
				<form.Field
					name="details"
					children={(field) => (
						<>
							<Label htmlFor={field.name}>
								Products or Services Requested <span className="text-red-500">*</span>
							</Label>
							<Textarea
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								className="min-h-[150px]"
								required
							/>
							<p className="text-xs text-muted-foreground">
								Be sure to include links to products, SKU numbers, or any other detailed information. If possible,
								include a time frame or deadline for your request.
							</p>
						</>
					)}
				/>
			</div>

			<div className="flex justify-end">
				<Button
					type="submit"
					disabled={isSubmitting}
					size="lg"
					className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white px-8 font-bold shadow-lg"
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</Button>
			</div>
		</form>
	);
}
