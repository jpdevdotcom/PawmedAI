import { FooterLayout } from "@/app/layouts/footer";
import { CustomNumberTicker } from "@/components/shared/custom-number-ticker";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	metadataBase: new URL("https://pawmed-ai-v2-0.vercel.app"),
	verification: {
		google: "V-geZ47dJfxUYZMo_BFsw6SacQZ27dCr8FtFR5JOeRE",
	},
	keywords: [
		"PawMed AI",
		"pawmed ai",
		"pawmed",
		"paw",
		"med",
		"AI",
		"Pet Health",
		"Veterinary",
		"Veterinary AI",
		"Animal Healthcare",
		"Pet Diagnosis",
		"AI Diagnosis",
		"Veterinary Medicine",
		"Veterinary Technology",
		"Veterinary Assistant",
		"Vet App",
		"Pet App",
		"Pet Health App",
		"AI for Pets",
		"Machine Learning",
		"Deep Learning",
		"Computer Vision",
		"Image Classification",
		"Vet Disease Classifier",
		"Animal Disease Detection",
		"Pet Disease Detection",
		"programming",
		"coding",
		"Next.js",
		"NestJS",
		"React",
		"TypeScript",
		"Tailwind CSS",
		"OpenAI",
		"AI Project",
		"Full Stack App",
		"Web Development",
		"Tech for Vets",
		"Digital Vet Tools",
	],
	title: {
		default: "PawMed AI",
		template: "%s | jpdevdotcom-",
	},
	openGraph: {
		title: "PawMed AI",
		description: "Revolutionizing Pet Healthcare with Artificial Intelligence",
		siteName: "PawMed AI",
		url: "https://pawmed-ai-v2-0.vercel.app",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/pawlogo.png",
				width: 1200,
				height: 1200,
				alt: "PawMed AI",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "PawMed AI",
		description: "Revolutionizing Pet Healthcare with Artificial Intelligence",
		images: ["/pawlogo.png"],
	},
	icons: {
		icon: ["/assets/favicon.ico?v=4"],
		apple: ["/assets/apple-touch-icon.png?v=4"],
		shortcut: ["/assets/apple-touch-icon.png"],
	},
};

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
				<div className="flex md:flex-row gap-40">
					<div className="w-full space-y-3">
						<h5 className="text-sm font-semibold tracking-widest">ABOUT US</h5>
						<h1 className="text-5xl font-bold text-[#FF7800] leading-14">
							Revolutionizing Pet Healthcare with Artificial Intelligence
						</h1>
						<p className="leading-7">
							At PawMed AI, we&apos;re transforming veterinary care with
							artificial intelligence. Our mission is to empower veterinarians
							with AI-driven tools that improve diagnostic accuracy, streamline
							operations, and enhance animal care. By integrating AI into
							everyday practice, we provide real-time insights for faster, more
							reliable diagnoses and efficient workflows.
						</p>
						<p className="leading-7">
							From analyzing medical images to predicting health issues, PawMed
							AI aims to make veterinary care more efficient and accessible,
							allowing professionals to focus on what truly matters—improving
							the well-being of animals.
						</p>
					</div>

					<div className="md:block hidden">
						<Image
							src={"/pawlogo.png"}
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

				<div className="lg:flex lg:justify-center lg:items-center lg:flex-wrap grid grid-cols-2 gap-5">
					{statistics.map((stat, idx) => (
						<div
							key={idx}
							className={`flex flex-col items-center space-y-2 border py-5 px-10 rounded-lg ${
								stat.label === "Year Founded" && "col-span-2"
							}`}
						>
							<CustomNumberTicker
								numberValue={stat.number_value}
								textColor="text-[#FF7800]"
							/>
							<p className="text-sm text-gray-400 font-bold">{stat.label}</p>
						</div>
					))}
				</div>

				<div className="w-full flex flex-col items-center md:my-16 my-0">
					<div className="lg:w-1/2 text-center space-y-3">
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
