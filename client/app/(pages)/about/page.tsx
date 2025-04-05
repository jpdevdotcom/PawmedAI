import Image from "next/image";

export default function About() {
	return (
		<div className="w-full md:py-5 py-14">
			<div className="flex gap-40">
				<div className="w-full space-y-3">
					<h5 className="text-sm font-semibold tracking-widest">ABOUT US</h5>
					<h1 className="text-5xl font-bold text-[#FF7800] leading-14">
						Revolutionizing Pet Healthcare with Artificial Intelligence
					</h1>
					<p className="leading-7">
						At PawMed AI, we&apos;re revolutionizing veterinary care through
						artificial intelligence. Our mission is simple: to empower
						veterinarians with AI-driven tools that enhance diagnostic accuracy,
						streamline operations, and improve outcomes for animals worldwide.
						By integrating AI technology into everyday veterinary practices, we
						provide professionals with real-time insights that support faster,
						more reliable diagnoses and more efficient patient care.
					</p>
					<p className="leading-7">
						Whether it&apos;s analyzing medical images, predicting potential
						health issues, or optimizing clinic workflows, PawMed AI strives to
						create a future where veterinary care is both highly efficient and
						accessible. We believe that with the right tools, veterinary
						professionals can focus on what truly matters—enhancing the
						well-being of animals—and providing the best possible care to their
						patients.
					</p>
				</div>

				<div>
					<Image
						src={"/profilephoto.jpg"}
						alt={"Profile Photo"}
						width={900}
						height={900}
						className="rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}
