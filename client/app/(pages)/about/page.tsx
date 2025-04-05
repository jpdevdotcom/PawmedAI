import { CustomAndroid } from "@/components/shared/custom-android";

export default function About() {
	return (
		<div className="flex w-full md:py-5 py-14">
			<div className="w-full">
				<h5 className="text-sm font-semibold tracking-widest">ABOUT US</h5>
				<h1 className="text-5xl font-bold text-[#FF7800] leading-14">
					Revolutionizing Pet Healthcare with Artificial Intelligence
				</h1>
			</div>

			<div>
				<CustomAndroid />
			</div>
		</div>
	);
}
