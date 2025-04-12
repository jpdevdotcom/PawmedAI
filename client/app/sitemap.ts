import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://pawmed-ai-v2-0.vercel.app",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://pawmed-ai-v2-0.vercel.app/about",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: "https://pawmed-ai-v2-0.vercel.app/classify-disease",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
}
