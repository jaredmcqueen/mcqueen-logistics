import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-mcqueen-dark/95 backdrop-blur-sm">
			<div className="container mx-auto px-6 py-4">
				<Link to="/" className="flex items-center gap-1">
					<span className="text-mcqueen-red font-bold text-xl tracking-tight">
						MCQUEEN
					</span>
					<span className="text-gray-400 font-light text-xl">|</span>
					<span className="text-gray-400 font-light text-xl tracking-wide">
						Solutions
					</span>
				</Link>
			</div>
		</header>
	);
}
