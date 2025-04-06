import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [],
			},
		],
		sitemap: "https://pawmed-ai-v2-0.vercel.app/sitemap.xml",
	};
}
