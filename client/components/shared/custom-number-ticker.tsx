import { NumberTicker } from "@/components/magicui/number-ticker";

export function CustomNumberTicker({ numberValue }: { numberValue: number }) {
	return (
		<NumberTicker
			value={numberValue}
			className="whitespace-pre-wrap text-8xl font-bold tracking-tighter text-black dark:text-white"
		/>
	);
}
