import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { createContext, useState } from "react";

import Header from "../components/Header";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../components/ui/dialog";
import { QuoteForm } from "../components/QuoteForm";

import appCss from "../styles.css?url";

export const QuoteDialogContext = createContext<{
	openQuoteDialog: () => void;
}>({
	openQuoteDialog: () => {},
});

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "McQueen Logistics - Top Notch Service",
			},
			{
				name: "description",
				content: "McQueen Logistics - Top Notch Service for all your logistics needs",
			},
			{
				name: "theme-color",
				content: "#ffffff",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			// SVG favicon (modern browsers with dark mode support)
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
			},
			// PNG fallback for browsers without SVG support
			{
				rel: "icon",
				type: "image/png",
				sizes: "96x96",
				href: "/favicon-96x96.png",
			},
			// Legacy ICO for older browsers
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico",
			},
			// Apple touch icon for iOS devices
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			// Web app manifest
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
	}),

	component: RootComponent,
	shellComponent: RootDocument,
});

function RootComponent() {
	const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

	return (
		<QuoteDialogContext.Provider value={{ openQuoteDialog: () => setIsQuoteDialogOpen(true) }}>
			<Header />
			<Outlet />
			
			<Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
				<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>Request a Quote</DialogTitle>
						<DialogDescription>
							Fill out the form below and we'll get back to you as soon as possible.
						</DialogDescription>
					</DialogHeader>
					<QuoteForm />
				</DialogContent>
			</Dialog>
		</QuoteDialogContext.Provider>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
