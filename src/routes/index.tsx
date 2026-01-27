import { createFileRoute } from "@tanstack/react-router";
import { Box, Brain, Cloud, Code, Network, Shield } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<HeroSection />

			{/* Join Our Team Section */}
			<JoinTeamSection />

			{/* Cloud Engineering Section */}
			<CloudEngineeringSection />

			{/* Cyber Security Section */}
			<CyberSecuritySection />

			{/* DevSecOps Section */}
			<DevSecOpsSection />

			{/* Tactical Edge Section */}
			<TacticalEdgeSection />

			{/* Services Grid Section */}
			<ServicesGridSection />

			{/* DoD/IC Support Banner */}
			<DoDSupportSection />

			{/* Partner CTA Section */}
			<PartnerSection />

			{/* Footer */}
			<Footer />
		</div>
	);
}

function HeroSection() {
	return (
		<section className="relative bg-mcqueen-dark pt-24 pb-16 overflow-hidden">
			{/* Background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-mcqueen-dark via-mcqueen-dark to-slate-900" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Innovative Solutions for Data Science
					</h1>
					<p className="text-gray-300 text-lg leading-relaxed">
						McQueen Solutions provides enhanced mission capabilities for
						Intelligence Community and DoD customers through our innovative IT
						solutions, engineering industry expertise, and commitment to
						delivering high-quality products and services.
					</p>
				</div>

				{/* Feature Cards */}
				<div className="grid md:grid-cols-3 gap-6">
					<FeatureCard
						icon={<Code className="size-8 text-mcqueen-red" />}
						title="Code"
						description="We deliver quality software using Agile methodologies that prioritize collaboration, communication, and rapid iterations to ensure we are meeting our customers' needs and delivering products that are both efficient and effective."
					/>
					<FeatureCard
						icon={<Brain className="size-8 text-mcqueen-red" />}
						title="AI / ML"
						description="Our team of experienced data scientists use advanced algorithms to analyze large amounts of data and identify patterns that would be impossible to detect manually. We provide insights and predictions that enable our clients to make data-driven decisions."
					/>
					<FeatureCard
						icon={<Cloud className="size-8 text-mcqueen-red" />}
						title="Cloud"
						description="We work closely with our clients to understand their unique business needs and develop custom solutions that leverage the latest cloud technologies, including public, private, and hybrid clouds."
					/>
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<Card className="bg-slate-800/50 border-slate-700 text-white">
			<CardHeader>
				<div className="flex items-center gap-3">
					{icon}
					<CardTitle className="text-xl text-white">{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription className="text-gray-400 text-sm leading-relaxed">
					{description}
				</CardDescription>
			</CardContent>
		</Card>
	);
}

function JoinTeamSection() {
	return (
		<section className="bg-gray-100 py-16">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
				<Button className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white">
					Apply
				</Button>
			</div>
		</section>
	);
}

function CloudEngineeringSection() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Cloud Engineering
						</h2>
						<p className="text-gray-600 leading-relaxed">
							We understand that the cloud is the backbone of modern-day
							businesses, and our cloud engineering services are designed to
							help our clients take full advantage of its benefits. Our team of
							certified cloud engineers possesses a wealth of experience in
							developing, deploying, and managing cloud solutions on all major
							cloud platforms, including AWS, Azure, and Google Cloud and
							Kubernetes public / private clouds.
						</p>
					</div>
					<div className="flex justify-center">
						<ServiceIllustration variant="cloud" />
					</div>
				</div>
			</div>
		</section>
	);
}

function CyberSecuritySection() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="flex justify-center order-2 md:order-1">
						<ServiceIllustration variant="security" />
					</div>
					<div className="order-1 md:order-2">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Cyber Security
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Our team understands the critical role that security plays in
							safeguarding sensitive data and protecting against cyber threats.
							We incorporate security best practices into every stage of our
							software development lifecycle, from design to deployment. Our
							team of experts employs a wide range of security measures,
							including secure coding practices, encryption, access controls,
							network security, and more, to ensure that our clients' systems
							are protected against potential threats.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function DevSecOpsSection() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">DevSecOps</h2>
						<p className="text-gray-600 leading-relaxed">
							We specialize in building scalable architectures that are designed
							to meet the unique needs of our customers. We leverage cloud-based
							technologies and DevOps practices to create highly available and
							fault-tolerant systems that can scale to handle massive amounts of
							data and traffic. Our team of experienced engineers are experts in
							containerization, microservices, and distributed systems, ensuring
							that our architectures are not only scalable, but also highly
							efficient and easy to manage.
						</p>
					</div>
					<div className="flex justify-center">
						<ServiceIllustration variant="devops" />
					</div>
				</div>
			</div>
		</section>
	);
}

function TacticalEdgeSection() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="flex justify-center order-2 md:order-1">
						<ServiceIllustration variant="tactical" />
					</div>
					<div className="order-1 md:order-2">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Tactical Edge
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Delivering mission capabilities in real-time containerized
							environments is important to our mission partners. We leverage
							private cloud platforms, including Kubernetes, to create solutions
							that can operate at the tactical edge. Our team has a deep
							understanding of Kubernetes and how it can be used to deploy and
							manage containerized workloads in edge environments. By leveraging
							these technologies, we can provide our clients with reliable,
							scalable, and secure solutions that can operate in remote,
							disconnected, and low- bandwidth environments.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function ServiceIllustration({
	variant,
}: {
	variant: "cloud" | "security" | "devops" | "tactical";
}) {
	const iconMap = {
		cloud: <Cloud className="size-24 text-mcqueen-red" />,
		security: <Shield className="size-24 text-mcqueen-red" />,
		devops: <Network className="size-24 text-mcqueen-red" />,
		tactical: <Box className="size-24 text-mcqueen-red" />,
	};

	return (
		<div className="w-64 h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg">
			{iconMap[variant]}
		</div>
	);
}

function ServicesGridSection() {
	const services = [
		{
			title: "Data Analytics and Visualizations",
			description:
				"Using advanced data analytics and visualization techniques, we provide actionable intelligence to our clients. We use powerful tools like Elasticsearch, Solr, and Kibana to analyze large amounts of data and create compelling visualizations that enable our clients to make data-driven decisions.",
			logos: ["Solr", "Elastic"],
		},
		{
			title: "Software Development",
			description:
				"Our experienced team of engineers uses languages like Go, Python, and Rust on the backend, and React and NextJS on the frontend to create robust, scalable, and secure software using modern techniques and rigorous testing.",
			logos: ["Go", "R"],
		},
		{
			title: "Cloud Computing",
			description:
				"Leveraging the power of cloud computing and distributed processing, we deliver fast, scalable, and secure applications to our users. Our experienced engineers use platforms like OpenShift, Rancher, and RKE2 to build and deploy secure cluster solutions that harness the true cloud-native philosophy worldwide.",
			logos: ["OpenShift", "Rancher"],
		},
		{
			title: "AI / ML Workflows",
			description:
				"We use advanced AI/ML workflows to help geospatial analysts detect anomalies and gain insights from large imagery datasets. By leveraging cutting edge techniques like object detection and predictive modeling, we help analysts quickly identify patterns and trends that might be missed using traditional methods.",
			logos: ["PyTorch", "TensorFlow"],
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service) => (
						<Card key={service.title} className="border-gray-200">
							<CardHeader>
								<CardTitle className="text-xl text-gray-900">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<CardDescription className="text-gray-600 leading-relaxed">
									{service.description}
								</CardDescription>
								<div className="flex gap-4 pt-2">
									{service.logos.map((logo) => (
										<span
											key={logo}
											className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600 font-medium"
										>
											{logo}
										</span>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

function DoDSupportSection() {
	return (
		<section className="py-16 bg-mcqueen-dark">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-2xl font-semibold text-white">
					Proudly Supporting DoD and the IC
				</h2>
			</div>
		</section>
	);
}

function PartnerSection() {
	return (
		<section className="py-20 bg-slate-900">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold text-white mb-4">
					Partner with McQueen Solutions
				</h2>
				<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
					We're always looking for new and innovative ways to collaborate and
					help our clients achieve their goals.
				</p>
				<Button className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white">
					Contact Us
				</Button>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="bg-mcqueen-dark py-8 border-t border-slate-800">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-4">
						<a href="#" className="text-gray-400 hover:text-white text-sm">
							Jobs
						</a>
						<a href="#" className="text-gray-400 hover:text-white text-sm">
							Home
						</a>
					</div>
					<p className="text-gray-500 text-sm">
						© {new Date().getFullYear()} · McQueen Solutions. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
