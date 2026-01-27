import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Phone, Smartphone, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main className="pt-20">
				<HeroSection />
				<CertificationsSection />
				<ServicesSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}

function HeroSection() {
	return (
		<section className="relative bg-slate-900 text-white">
			<div className="absolute inset-0 bg-slate-800/80" />
			<div className="container mx-auto px-6 py-28 relative z-10 text-center">
				<p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">
					Geared up to provide
				</p>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					Top Notch Service
				</h1>
				<p className="text-gray-200 max-w-2xl mx-auto mb-8">
					Placeholder hero description about delivering reliable procurement,
					logistics, and project support for public sector and enterprise teams.
				</p>
				<Button className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white">
					Request a Quote
				</Button>
			</div>
		</section>
	);
}

function CertificationsSection() {
	const certifications = ["SWaM", "eVA", "Micro"];

	return (
		<section className="bg-white">
			<div className="container mx-auto px-6 py-10">
				<div className="flex flex-wrap items-center justify-center gap-8">
					{certifications.map((item) => (
						<span
							key={item}
							className="text-lg font-semibold text-gray-500"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

function ServicesSection() {
	const services = [
		{
			title: "Bridge Materials",
			description:
				"We bridge the gap between needing supplies and job completion. Any supplies needed from nuts and bolts to lumber and concrete. Whatever is needed for your project, we are the perfect resource.",
		},
		{
			title: "Facility Supplies",
			description:
				"For all project materials needed from mini-blinds to major remodel we can provide your needs from roof top to sidewalk.",
		},
		{
			title: "Procurement & Administrative Services",
			description:
				"Small supplies to large projects, we can be your personal resource to meet all your purchasing needs.",
		},
		{
			title: "Equipment Support",
			description:
				"Vehicle interior and exterior accessories. Specialized and \"up-fitting\" components, small electronics & equipment, shop materials and tools.",
		},
	];

	return (
		<section id="services" className="bg-gray-50">
			<div className="container mx-auto px-6 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900">Services</h2>
					<p className="text-gray-600 max-w-2xl mx-auto mt-4">
						We are a small, woman owned business specializing in purchasing
						assistance for state and county agencies, educational institutions,
						and local government entities.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2">
					{services.map((service) => (
						<Card key={service.title} className="border-gray-200">
							<CardHeader>
								<div className="h-40 bg-gray-200 rounded-lg" />
								<CardTitle className="text-xl text-gray-900 mt-4">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-600 leading-relaxed">
									{service.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectsSection() {
	const largeProjects = [
		{
			title: "Bridge & Construction",
			description: "Lumber, concrete, rebar, PVC, construction hardware",
		},
		{
			title: "Office Renovation",
			description: "Flooring, lighting, cabinetry, window coverings",
		},
		{
			title: "Landscaping",
			description: "Brick and stone, decking material, park benches",
		},
	];

	const smallProjects = [
		{
			title: "Facility Supplies",
			description: "Window coverings, shelving, paint, flooring materials, water filtration systems",
		},
		{
			title: "Office Supplies",
			description: "Small electronics, office equipment, phones, headsets",
		},
		{
			title: "Shop Materials",
			description: "Tools, cabinets, hardware, safety equipment, shop supplies",
		},
	];

	return (
		<section id="projects" className="bg-white">
			<div className="container mx-auto px-6 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900">Projects</h2>
					<p className="text-gray-600 max-w-2xl mx-auto mt-4">
						Placeholder summary about recent project fulfillment and on-time
						delivery for public sector teams.
					</p>
				</div>

				<div className="grid gap-10 lg:grid-cols-2">
					<ProjectColumn title="Large Projects" items={largeProjects} />
					<ProjectColumn title="Small Projects" items={smallProjects} />
				</div>
			</div>
		</section>
	);
}

function ProjectColumn({
	title,
	items,
}: {
	title: string;
	items: { title: string; description: string }[];
}) {
	return (
		<div>
			<h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
				{title}
			</h3>
			<div className="space-y-6">
				{items.map((item) => (
					<div
						key={item.title}
						className="flex flex-col sm:flex-row gap-4 items-start"
					>
						<div className="w-full sm:w-32 h-20 bg-gray-200 rounded-lg" />
						<div>
							<h4 className="font-semibold text-gray-900">{item.title}</h4>
							<p className="text-gray-600 text-sm mt-2">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function ContactSection() {
	return (
		<section id="contact" className="bg-gray-50">
			<div className="container mx-auto px-6 py-16">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
					<p className="text-gray-600 mt-4">
						McQueen Logistics proudly supports Fredericksburg, Stafford,
						Northern Neck, and Northern Virginia.
					</p>
				</div>
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="h-72 bg-gray-200" />
					<div className="grid gap-8 md:grid-cols-2 px-6 py-8">
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								How to reach us
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center gap-3 text-gray-900">
									<Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>540-720-5627</span>
								</li>
								<li className="flex items-center gap-3 text-gray-900">
									<Smartphone className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>540-809-2848</span>
								</li>
								<li className="flex items-center gap-3 text-gray-900">
									<Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>brenda@mcqueenlogistics.com</span>
								</li>
								<li className="flex items-center gap-3 text-gray-900">
									<Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>mac@mcqueenlogistics.com</span>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								Why us? "top notch service"
							</h3>
							<ul className="space-y-4">
								<li className="flex items-center gap-3 text-gray-900">
									<Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>Fast and Efficient</span>
								</li>
								<li className="flex items-center gap-3 text-gray-900">
									<Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>Detailed Estimates</span>
								</li>
								<li className="flex items-center gap-3 text-gray-900">
									<Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
									<span>Exceptional Customer Support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="bg-mcqueen-dark py-10">
			<div className="container mx-auto px-6 text-center text-gray-400 text-sm">
				© {new Date().getFullYear()} · McQueen Logistics. All rights reserved.
			</div>
		</footer>
	);
}
