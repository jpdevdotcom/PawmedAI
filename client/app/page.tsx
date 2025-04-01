import { TextAnimate } from "@/components/magicui/text-animate";
import { CustomMarqueeCard } from "@/components/shared/custom-marquee";
import { CustomTextMotion } from "@/components/shared/custom-text-motion";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
	return (
		<div className="flex items-center h-full justify-center text-right gap-16">
			<div className="w-1/2">
				<CustomMarqueeCard />
			</div>

			<div className="space-y-12">
				<section>
					<CustomTextMotion
						text="PawMed AI V2.0"
						styling="text-6xl font-semibold text-[#FF7800]"
					/>
					<CustomTextMotion
						text="Revolutionizing Pet Healthcare with Artificial Intelligence"
						styling="tracking-wider text-xl text-gray-500"
					/>
				</section>

				<section className="space-y-5">
					<TextAnimate
						animation="slideLeft"
						by="word"
						className="tracking-wider"
					>
						Welcome to PawMed AI V2.0, the next generation of intelligent pet
						care. Powered by advanced machine learning and image classification
						technologies, PawMed AI V2.0 offers a seamless and intuitive
						platform that helps you analyze and assess your pet&apos;s health
						with just a simple image upload.
					</TextAnimate>

					<TextAnimate
						animation="slideLeft"
						by="word"
						className="tracking-wide"
					>
						Ideal for pet owners, veterinarians, and animal care professionals,
						it provides rapid and accurate insights, identifying potential
						health concerns and offering recommendations for further care.
					</TextAnimate>
				</section>

				<section className="flex justify-end items-center gap-3">
					<Button variant={"outline"} className="cursor-pointer">
						Learn more...
					</Button>
					<Button className="cursor-pointer">Get Started</Button>
				</section>
			</div>
		</div>
	);
}
