import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { CustomMarqueeCardVertical } from "@/components/shared/custom-marquee";
import { CustomMarqueeCardHorizontal } from "@/components/shared/custom-marquee-horizontal";
import { CustomTextMotion } from "@/components/shared/custom-text-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
	return (
		<div className="relative flex xl:flex-row lg:flex-col-reverse items-center h-full justify-center text-right gap-16">
			<div className="w-1/2  flex justify-center items-center">
				<div className="xl:block lg:hidden">
					<CustomMarqueeCardVertical />
				</div>

				<div className="xl:hidden lg:block">
					<CustomMarqueeCardHorizontal />
				</div>
			</div>

			<div className="space-y-12">
				<section>
					<CustomTextMotion
						text="PawMed AI V2.0"
						styling="xl:text-6xl lg:text-5xl font-semibold text-[#FF7800]"
					/>
					<CustomTextMotion
						text="Revolutionizing Pet Healthcare with Artificial Intelligence"
						styling="tracking-wider xl:text-xl lg:text-md text-sm text-gray-500"
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
					<Button
						variant={"outline"}
						className="cursor-pointer text-[.9em] p-5 text-gray-400"
					>
						<Link href={"/about"}>Learn more...</Link>
					</Button>
					<InteractiveHoverButton>
						<Link href="/classify-disease">Get Started</Link>
					</InteractiveHoverButton>
				</section>
			</div>

			<Particles
				className="absolute inset-0 -z-10"
				quantity={150}
				ease={10}
				color={"#000000"}
				refresh
			/>
		</div>
	);
}
