import { Suspense } from "react";

type Post = {
	disease: string;
	diagnosis: string;
	likelihood: string;
	justification: string;
	findings: [{ feature: string; description: string; severity: string }];
	differential_diagnoses: string;
	further_investigation: string;
	recommendations: string;
	veterinarian_notes: string;
};

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

export default async function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1>Test Page</h1>
				<div>
					<Suspense fallback={"loading..."}>
						<ToDoList />
					</Suspense>
				</div>
			</main>
		</div>
	);
}

async function ToDoList() {
	const posts = await getData();
	return (
		<ul>
			{posts.findings.map((find, idx) => (
				<li key={idx}>{find.severity}</li>
			))}
		</ul>
	);
}
