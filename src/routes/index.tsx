import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { Phone, Smartphone, Mail, Check } from "lucide-react";
import { QuoteDialogContext } from "./__root";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	const { openQuoteDialog } = useContext(QuoteDialogContext);

	return (
		<div className="min-h-screen bg-white">
			<main>
				<HeroSection onRequestQuote={openQuoteDialog} />
				<CertificationsSection />
				<ServicesSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}

function HeroSection({ onRequestQuote }: { onRequestQuote: () => void }) {
	return (
		<section className="relative bg-mcqueen-dark text-white min-h-[700px] pt-16">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url(/header.jpg)" }}
			/>
			<div className="absolute inset-0 bg-black/40" />
			{/* Decorative gear watermark */}
			<img
				src="/just-gears.png"
				alt=""
				className="absolute right-8 bottom-8 h-48 opacity-5 pointer-events-none hidden lg:block"
			/>
			<div className="container mx-auto px-6 py-32 relative z-10 text-center flex flex-col justify-center items-center min-h-[650px]">
				<p className="text-xl uppercase tracking-[0.3em] text-white/90 mb-4 font-bold drop-shadow-md">
					Celebrating 10 Years of Excellence
				</p>
				<h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8r max-w-5xl drop-shadow-lg">
					Top Notch Service
				</h1>
				<p className="text-white max-w-3xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed font-medium drop-shadow-md">
					For over a decade we've been your trusted partner for procurement, logistics, and project support.
					We help public sector agencies and enterprise teams get the supplies
					they need—on time, every time.
				</p>
				<Button
					size="lg"
					onClick={onRequestQuote}
					className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-red-900/20 transition-all duration-300"
				>
					Request a Quote
				</Button>
			</div>
		</section>
	);
}

function CertificationsSection() {
	const certifications = [
		{ name: "SWaM", logo: "/SWAM.png", alt: "SWaM Certification" },
		{ name: "eVA", logo: "/eva-logo.jpg", alt: "eVA Certification" },
		{ name: "Micro", logo: "/micro.png", alt: "Micro Business Certification" },
	];

	return (
		<section className="bg-gray-50 border-y border-gray-100">
			<div className="container mx-auto px-6 py-12">
				<p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-6 font-medium">
					Certified & Trusted
				</p>
				<div className="flex flex-wrap items-center justify-center gap-12">
					{certifications.map((item) => (
						<img
							key={item.name}
							src={item.logo}
							alt={item.alt}
							className="h-14 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function SectionHeading({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="text-center mb-14">
			<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
				{title}
			</h2>
			<div className="h-1 w-16 bg-mcqueen-red mx-auto mt-4 rounded-full" />
			<p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed text-lg">
				{description}
			</p>
		</div>
	);
}

function ServicesSection() {
	const services = [
		{
			title: "Bridge Materials",
			description:
				"We bridge the gap between needing supplies and job completion. From nuts and bolts to lumber and concrete—whatever your project requires, we're your perfect resource.",
			image: "/bridge-materials.jpg",
		},
		{
			title: "Facility Supplies",
			description:
				"Complete facility solutions from mini-blinds to major remodels. We provide everything you need from rooftop to sidewalk.",
			image: "/facility-supplies.jpg",
		},
		{
			title: "Procurement & Administrative Services",
			description:
				"From small supplies to large-scale projects, we serve as your dedicated resource for all purchasing needs.",
			image: "/procurement.jpg",
		},
		{
			title: "Equipment Support",
			description:
				"Vehicle interior and exterior accessories, specialized up-fitting components, electronics, shop materials, and tools.",
			image: "/collage.png",
		},
	];

	return (
		<section id="services" className="bg-white">
			<div className="container mx-auto px-6 py-20">
				<SectionHeading
					title="Our Services"
					description="We are a small, woman-owned business specializing in purchasing assistance for state and county agencies, educational institutions, and local government entities."
				/>

				<div className="grid gap-8 md:grid-cols-2">
					{services.map((service) => (
						<Card
							key={service.title}
							className="border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden group pt-0 mb-2"
						>
							<div className="overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									className="h-64 w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
								/>
							</div>
							<CardContent className="pt-0">
								<CardTitle className="text-xl text-gray-900 mb-3">
									{service.title}
								</CardTitle>
								<CardDescription className="text-gray-600 leading-relaxed text-base">
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
			image: "/construction.jpg",
		},
		{
			title: "Office Renovation",
			description: "Flooring, lighting, cabinetry, window coverings",
			image: "/renovation.jpg",
		},
		{
			title: "Landscaping",
			description: "Brick and stone, decking material, park benches",
			image: "/landscape.jpg",
		},
	];

	const smallProjects = [
		{
			title: "Facility Supplies",
			description:
				"Window coverings, shelving, paint, flooring materials, water filtration systems",
			image: "/facility-supplies.jpg",
		},
		{
			title: "Office Supplies",
			description: "Small electronics, office equipment, phones, headsets",
			image: "/office-supplies.jpg",
		},
		{
			title: "Shop Materials",
			description:
				"Tools, cabinets, hardware, safety equipment, shop supplies",
			image: "/shop-materials.jpg",
		},
	];

	return (
		<section id="projects" className="bg-gray-50">
			<div className="container mx-auto px-6 py-20">
				<SectionHeading
					title="Projects We Support"
					description="From large-scale construction to everyday office needs, we deliver reliable fulfillment and on-time delivery for public sector teams."
				/>

				<div className="grid gap-12 lg:grid-cols-2">
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
	items: { title: string; description: string; image: string }[];
}) {
	return (
		<div>
			<h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
				{title}
			</h3>
			<div className="space-y-4">
				{items.map((item) => (
					<Card
						key={item.title}
						className="flex flex-col sm:flex-row gap-0 overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-gray-300 p-0"
					>
						<div className="sm:w-50 flex-shrink-0">
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-40 sm:h-full object-cover sm:rounded-l-xl"
							/>
						</div>
						<CardContent className="flex-1 py-4 px-5 flex flex-col justify-center">
							<CardTitle className="text-base text-gray-900">
								{item.title}
							</CardTitle>
							<CardDescription className="mt-1 text-sm">
								{item.description}
							</CardDescription>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

function ContactSection() {
	return (
		<section id="contact" className="bg-white">
			<div className="container mx-auto px-6 py-20">
				<SectionHeading
					title="Contact Us"
					description="McQueen Logistics proudly supports Fredericksburg, Stafford, Northern Neck, and Northern Virginia."
				/>
				<Card className="overflow-hidden shadow-xl border-gray-200 p-0">
					<div className="relative">
						<img
							src="/map.png"
							alt="Service area map showing Fredericksburg, Stafford, Northern Neck, and Northern Virginia"
							className="h-135 w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
					</div>
					<CardContent className="py-10">
						<div className="grid gap-10 md:grid-cols-2">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
									<span className="h-1 w-6 bg-mcqueen-red rounded-full" />
									How to Reach Us
								</h3>
								<ul className="space-y-4">
									<li className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors">
										<div className="w-10 h-10 rounded-full bg-mcqueen-red/10 flex items-center justify-center">
											<Phone className="w-5 h-5 text-mcqueen-red" />
										</div>
										<span className="font-medium">540-720-5627</span>
									</li>
									<li className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors">
										<div className="w-10 h-10 rounded-full bg-mcqueen-red/10 flex items-center justify-center">
											<Smartphone className="w-5 h-5 text-mcqueen-red" />
										</div>
										<span className="font-medium">540-809-2848</span>
									</li>
									<li className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors">
										<div className="w-10 h-10 rounded-full bg-mcqueen-red/10 flex items-center justify-center">
											<Mail className="w-5 h-5 text-mcqueen-red" />
										</div>
										<span className="font-medium">
											brenda@mcqueenlogistics.com
										</span>
									</li>
									<li className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors">
										<div className="w-10 h-10 rounded-full bg-mcqueen-red/10 flex items-center justify-center">
											<Mail className="w-5 h-5 text-mcqueen-red" />
										</div>
										<span className="font-medium">mac@mcqueenlogistics.com</span>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
									<span className="h-1 w-6 bg-mcqueen-red rounded-full" />
									Why Choose Us
								</h3>
								<ul className="space-y-4">
									<li className="flex items-center gap-4 text-gray-700">
										<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
											<Check className="w-5 h-5 text-green-600" />
										</div>
										<span className="font-medium">Fast and Efficient</span>
									</li>
									<li className="flex items-center gap-4 text-gray-700">
										<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
											<Check className="w-5 h-5 text-green-600" />
										</div>
										<span className="font-medium">Detailed Estimates</span>
									</li>
									<li className="flex items-center gap-4 text-gray-700">
										<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
											<Check className="w-5 h-5 text-green-600" />
										</div>
										<span className="font-medium">
											Exceptional Customer Support
										</span>
									</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="bg-mcqueen-dark py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<img
						src="/mcqueen-logistics.png"
						alt="McQueen Logistics"
						className="h-12 brightness-0 invert opacity-80"
					/>
					<p className="text-gray-400 text-sm">
						© {new Date().getFullYear()} McQueen Logistics. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
