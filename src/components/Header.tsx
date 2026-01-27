import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
			<div className="container mx-auto px-6 py-0">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center">
						<img
							src="/mcqueen-logistics.png"
							alt="McQueen Logistics"
							className="h-16"
						/>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
						<a href="#services" className="hover:text-gray-900">
							Our Services
						</a>
						<a href="#projects" className="hover:text-gray-900">
							Projects
						</a>
						<a href="#contact" className="hover:text-gray-900">
							Contact
						</a>
						<Button className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white">
							Request a Quote
						</Button>
					</nav>
					<Button className="md:hidden bg-mcqueen-red hover:bg-mcqueen-red/90 text-white">
						Request a Quote
					</Button>
				</div>
			</div>
		</header>
	);
}
