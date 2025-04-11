import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/", "/classify-disease", "/about"],
			disallow: [],
		},
		sitemap: "https://pawmed-ai-v2-0.vercel.app/sitemap.xml",
	};
}
