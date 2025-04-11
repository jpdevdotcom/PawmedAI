import { Suspense } from "react";
import { ClassifyDiseaseComponent } from "./component";
import { Metadata } from "next";

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

export default function ClassifyDisease() {
	return (
		<Suspense fallback={"<p>Loadingggg...</p>"}>
			<ClassifyDiseaseComponent />
		</Suspense>
	);
}
