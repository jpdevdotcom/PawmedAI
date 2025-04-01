import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
	{
		img: "/dogs/1.png",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
	return (
		<figure
			className={cn(
				"relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<Image width="200" height="200" alt="" src={img} />
		</figure>
	);
};

export const CustomMarqueeCard = () => {
	return (
		<div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
			<Marquee pauseOnHover vertical className="[--duration:10s]">
				{firstRow.map((review, idx) => (
					<ReviewCard key={idx} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover vertical className="[--duration:10s]">
				{secondRow.map((review, idx) => (
					<ReviewCard key={idx} {...review} />
				))}
			</Marquee>
			<Marquee pauseOnHover vertical className="[--duration:10s]">
				{secondRow.map((review, idx) => (
					<ReviewCard key={idx} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
		</div>
	);
};
