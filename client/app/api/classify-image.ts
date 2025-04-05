import { DssType } from "../types/dss-types";

type DataProps = {
	image_url: string;
};

async function getData({ image_url }: DataProps) {
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	const res = await fetch(
		`https://a8d0-49-147-121-82.ngrok-free.app/classifyDss?img_url=${image_url}`,
		// `https://9187-119-93-27-127.ngrok-free.app/classifyDss?img_url=${image_url}`,
		{
			method: "POST",
		}
	);
	if (!res.ok) throw new Error("Error fetching api");

	return (await res.json()) as DssType;
}

export { getData };
