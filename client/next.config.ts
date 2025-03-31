import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ucarecdn.com",
			},
			{
				hostname: "localhost",
			},
		],
	},
};

export default nextConfig;
