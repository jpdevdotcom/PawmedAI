import { Post } from "../types/dss-types";

async function getData() {
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	const res = await fetch(
		"http://localhost:3000/classifyDss?img_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcr3qtcicJqj8ekVDzD642zBkZNP1VHcnCw&s",
		{
			method: "POST",
		}
	);
	if (!res.ok) throw new Error("Error fetching api");

	return (await res.json()) as Post;
}

export { getData };
