import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { QuoteDialogContext } from "@/routes/__root";

export default function Header() {
	const { openQuoteDialog } = useContext(QuoteDialogContext);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
			<div className="container mx-auto px-6 py-0">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center">
						<img
							src="/mcqueen-logistics.png"
							alt="McQueen Logistics"
							className="h-16"
						/>
					</Link>
					<nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-600">
						<a 
							href="#services" 
							className="hover:text-mcqueen-blue transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mcqueen-red after:transition-all after:duration-200 hover:after:w-full"
						>
							Our Services
						</a>
						<a 
							href="#projects" 
							className="hover:text-mcqueen-blue transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mcqueen-red after:transition-all after:duration-200 hover:after:w-full"
						>
							Projects
						</a>
						<a 
							href="#contact" 
							className="hover:text-mcqueen-blue transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mcqueen-red after:transition-all after:duration-200 hover:after:w-full"
						>
							Contact
						</a>
						<Button 
							size="lg" 
							onClick={openQuoteDialog}
							className="bg-mcqueen-red hover:bg-mcqueen-red/90 text-white shadow-sm"
						>
							Request a Quote
						</Button>
					</nav>
					<Button 
						onClick={openQuoteDialog}
						className="md:hidden bg-mcqueen-red hover:bg-mcqueen-red/90 text-white"
					>
						Request a Quote
					</Button>
				</div>
			</div>
		</header>
	);
}
