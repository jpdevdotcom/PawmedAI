export default function sitemap() {
	const classifyDssPage = () => {
		return [
			{
				url: "http://localhost:3001/classify-disease",
				lastModified: new Date().toISOString(),
			},
		];
	};

	const dss = classifyDssPage();

	return [
		{
			url: "http://localhost:3001/",
			lastModified: new Date().toISOString(),
		},
		...dss, // Spread the results here
	];
}
