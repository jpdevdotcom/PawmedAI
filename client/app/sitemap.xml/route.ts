import { NextResponse } from "next/server";

export async function GET() {
	const urls = [
		"https://pawmed-ai-v2-0.vercel.app",
		"https://pawmed-ai-v2-0.vercel.app/about",
		"https://pawmed-ai-v2-0.vercel.app/classify-disease",
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `
	<url>
		<loc>${url}</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
	</url>`
	)
	.join("")}
</urlset>`;

	return new NextResponse(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
