import Link from "next/link";

export const FooterLayout = () => {
	return (
		<div>
			<div className="w-full bottom-0 py-10 md:px-24 px-7 z-10 border border-t bg-gray-950 rounded-t-lg space-y-10">
				<div className="flex justify-between text-gray-300">
					<div>
						<h5 className="text-3xl font-bold text-[#FF7800]">PawMed AI</h5>
						<p className="text-sm">
							Revolutionizing Pet Healthcare with Artificial Intelligence
						</p>
						<p className="text-sm text-gray-500 font-semibold">
							Developed by Jan Phillip M. Dacallos
						</p>
					</div>
					<div className="flex flex-col">
						<Link href={"/"} className="hover:text-orange-300">
							Home
						</Link>
						<Link href={"/about"} className="hover:text-orange-300">
							About Us
						</Link>
						<Link href={"/classify-disease"} className="hover:text-orange-300">
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
					<div className="flex flex-col">
						<p className="text-xs">GOT A PROJECT IN MIND?</p>
						<h2 className="text-6xl">Let&apos;s talk!</h2>
					</div>
				</div>

				<hr className="opacity-50" />

				<div></div>
			</div>
		</div>
	);
};
