import { Button } from "@/components/ui/button";

export default function LandingPage() {
	return (
		<div className="flex items-center h-full justify-center text-right gap-52">
			<div className="w-1/2"></div>

			<div className="space-y-12">
				<section>
					<h1 className="text-6xl font-semibold text-[#FF7800]">
						PawMed AI V2.0
					</h1>
					<p className="tracking-wider text-xl text-gray-500">
						Revolutionizing Pet Healthcare with Artificial Intelligence
					</p>
				</section>

				<section className="space-y-5">
					<p className="tracking-wider">
						<b>Welcome to PawMed AI V2.0,</b> the next generation of intelligent
						pet care. Powered by advanced machine learning and image
						classification technologies, PawMed AI V2.0 offers a seamless and
						intuitive platform that helps you analyze and assess your pet&apos;s
						health with just a simple image upload.
					</p>

					<p className="tracking-wider">
						Ideal for pet owners, veterinarians, and animal care professionals,
						it provides rapid and accurate insights, identifying potential
						health concerns and offering recommendations for further care.
					</p>
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
