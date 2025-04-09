export default function sitemap() {
	const classifyDssPage = () => {
		return [
			{
				url: "https://pawmed-ai-v2-0.vercel.app/classify-disease",
				lastModified: "2025-04-01T00:00:00Z", // Dynamic date from your database or logic
			},
		];
	};

	const dss = classifyDssPage();

	return [
		{
			url: "https://pawmed-ai-v2-0.vercel.app",
			lastModified: "2025-04-01T00:00:00Z", // Dynamic date here
		},
		...dss,
	];
}
