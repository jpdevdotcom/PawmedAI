export default function sitemap() {
	const classifyDssPage = () => {
		return [
			{
				url: "https://pawmed-ai-v2-0.vercel.app/classify-disease",
				lastModified: new Date().toISOString(),
			},
		];
	};

	const dss = classifyDssPage();

	return [
		{
			url: "https://pawmed-ai-v2-0.vercel.app",
			lastModified: new Date().toISOString(),
		},
		...dss, // Spread the results here
	];
}
