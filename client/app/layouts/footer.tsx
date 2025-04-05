import Link from "next/link";

export const FooterLayout = () => {
	return (
		<div>
			<div className="w-full bottom-0 py-3 md:px-24 px-7 z-10 border border-t bg-gray-950 rounded-t-lg">
				<div className="flex justify-between text-gray-300">
					<div>
						<h5 className="text-3xl font-bold">PawMed AI</h5>
						<p className="text-xs">
							Revolutionizing Pet Healthcare with Artificial Intelligence
						</p>
					</div>
					<div className="flex flex-col">
						<Link href={"/"} className="hover:text-orange-300">
							Home
						</Link>
						<Link href={"/"} className="hover:text-orange-300">
							About Us
						</Link>
						<Link href={"/"} className="hover:text-orange-300">
							Classify Disease
						</Link>
					</div>
					<div className="flex flex-col">
						<Link href={"/"} className="hover:text-orange-300">
							Queries
						</Link>
						<Link href={"/"} className="hover:text-orange-300">
							Bug Reports
						</Link>
						<Link href={"/"} className="hover:text-orange-300">
							Changes or Suggestions
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
