import { CustomAndroid } from "@/components/shared/custom-android";

export default function About() {
	return (
		<div className="flex w-full md:py-5 py-14 gap-40">
			<div className="w-full space-y-3">
				<h5 className="text-sm font-semibold tracking-widest">ABOUT US</h5>
				<h1 className="text-5xl font-bold text-[#FF7800] leading-14">
					Revolutionizing Pet Healthcare with Artificial Intelligence
				</h1>
				<p className="leading-8">
					At PawMed AI, we&apos;re revolutionizing veterinary care through
					artificial intelligence. Our mission is simple: to empower
					veterinarians with AI-driven tools that enhance diagnostic accuracy,
					streamline operations, and improve outcomes for animals worldwide.
				</p>

				<div className="bg-gray-100 p-5 rounded-md space-y-2">
					<h5 className="font-bold tracking-widest">OUR STORY</h5>
					<div className="space-y-3">
						<p className="text-sm leading-6">
							PawMed AI was born from my passion for both technology and
							animals, deeply inspired by my girlfriend&apos;s journey through
							Veterinary Medicine (VetMed). As pet lovers, we both saw how
							challenging it could be for veterinarians to make accurate
							diagnoses quickly. Watching her navigate these challenges sparked
							the idea of using AI to create solutions that could improve
							veterinary care.
						</p>

						<p className="text-sm leading-6">
							Driven by our shared love for animals and the desire to help
							veterinary professionals, I set out to develop AI-powered tools
							that would assist in diagnosing and treating pets with precision
							and efficiency. While PawMed AI is currently deployed locally,
							I&apos;m working on expanding its reach. Soon, the platform will
							be accessible online, allowing more veterinarians and pet care
							professionals worldwide to benefit from our innovative solutions.
						</p>
					</div>
				</div>
			</div>

			<div>
				<CustomAndroid />
			</div>
		</div>
	);
}
