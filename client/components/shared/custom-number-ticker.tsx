import { NumberTicker } from "@/components/magicui/number-ticker";

export function CustomNumberTicker({
	numberValue,
	textColor = "text-black",
}: {
	numberValue: number;
	textColor?: string;
}) {
	return (
		<NumberTicker
			value={numberValue}
			className={`${textColor} whitespace-pre-wrap text-8xl font-bold tracking-tighter dark:text-white`}
		/>
	);
}
