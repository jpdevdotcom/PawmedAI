import { FooterLayout } from "@/app/layouts/footer";
import { CustomNumberTicker } from "@/components/shared/custom-number-ticker";
import Image from "next/image";

type Statistics = {
	label: string;
	number_value: number;
};

const statistics: Statistics[] = [
	{
		label: "Year Founded",
		number_value: 2025,
	},
	{
		label: "Team Members",
		number_value: 1,
	},
	{
		label: "Countries Served",
		number_value: 1,
	},
	{
		label: "Veterinarians",
		number_value: 1,
	},
	{
		label: "AI Models",
		number_value: 1,
	},
];

export default function About() {
	return (
		<div>
			<div className="md:py-5 py-14 space-y-10">
				<div className="flex gap-40">
					<div className="w-full space-y-3">
						<h5 className="text-sm font-semibold tracking-widest">ABOUT US</h5>
						<h1 className="text-5xl font-bold text-[#FF7800] leading-14">
							Revolutionizing Pet Healthcare with Artificial Intelligence
						</h1>
						<p className="leading-7">
							At PawMed AI, we&apos;re revolutionizing veterinary care through
							artificial intelligence. Our mission is simple: to empower
							veterinarians with AI-driven tools that enhance diagnostic
							accuracy, streamline operations, and improve outcomes for animals
							worldwide. By integrating AI technology into everyday veterinary
							practices, we provide professionals with real-time insights that
							support faster, more reliable diagnoses and more efficient patient
							care.
						</p>
						<p className="leading-7">
							Whether it&apos;s analyzing medical images, predicting potential
							health issues, or optimizing clinic workflows, PawMed AI strives
							to create a future where veterinary care is both highly efficient
							and accessible. We believe that with the right tools, veterinary
							professionals can focus on what truly matters—enhancing the
							well-being of animals—and providing the best possible care to
							their patients.
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

				<div className="w-full h-[320px] bg-gray-800 flex flex-col justify-center items-center">
					<div className="w-full h-[300px]">
						<Image
							src={"/cover_paw_new.jpg"}
							alt="cover"
							width={2000}
							height={100}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>

				<div className="flex gap-5 justify-center items-center flex-wrap">
					{statistics.map((stat, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center space-y-2 border py-5 px-10 rounded-lg"
						>
							<CustomNumberTicker
								numberValue={stat.number_value}
								textColor="text-[#FF7800]"
							/>
							<p className="text-sm text-gray-400 font-bold">{stat.label}</p>
						</div>
					))}
				</div>

				<div className="w-full flex flex-col items-center my-16">
					<div className="w-1/2 text-center space-y-3">
						<h5 className="text-sm font-semibold tracking-widest">
							<span className="text-white  bg-gray-800 py-2 px-3 rounded-sm">
								OUR STORY
							</span>
						</h5>
						<p className="leading-7">
							PawMed AI was born from my passion for both technology and
							animals, deeply inspired by my girlfriend&apos;s journey through
							Veterinary Medicine (VetMed). As pet lovers, we both saw how
							challenging it could be for veterinarians to make accurate
							diagnoses quickly. Watching her navigate these challenges sparked
							the idea of using AI to create solutions that could improve
							veterinary care.
						</p>
						<p className="leading-7">
							Driven by our shared love for animals and the desire to help
							veterinary professionals, I set out to develop AI-powered tools
							that would assist in diagnosing and treating pets with precision
							and efficiency. While PawMed AI is currently accessible online,
							the server is still hosted locally on my machine. I&apos;m working
							on expanding its infrastructure, and in the near future, the
							platform will be fully deployed on a more scalable server to
							better serve veterinarians and pet care professionals worldwide.
						</p>
					</div>
				</div>
			</div>

			<div>
				<FooterLayout />
			</div>
		</div>
	);
}
