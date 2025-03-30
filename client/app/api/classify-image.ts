import { Post } from "../types/dss-types";

type DataProps = {
	image_url: string;
};

async function getData({ image_url }: DataProps) {
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	const res = await fetch(
		`http://localhost:3000/classifyDss?img_url=${image_url}`,
		{
			method: "POST",
		}
	);
	if (!res.ok) throw new Error("Error fetching api");

	return (await res.json()) as Post;
}

export { getData };
