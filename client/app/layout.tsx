import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "./layouts/header";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomDock } from "@/components/shared/custom-dock";
import { Modals } from "@/components/modals";
import { Drawers } from "@/components/drawers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	verification: {
		google: "V-geZ47dJfxUYZMo_BFsw6SacQZ27dCr8FtFR5JOeRE",
	},
	keywords: [
		"PawMed AI",
		"pawmed ai",
		"pawmed",
		"paw",
		"med",
		"AI",
		"Pet Health",
		"Veterinary",
		"Machine Learning",
		"programming",
		"coding",
	],
	metadataBase: new URL("https://pawmed-ai-v2-0.vercel.app"),
	title: {
		default: "PawMed AI",
		template: "%s | jpdevdotcom-",
	},
	openGraph: {
		description: "Revolutionizing Pet Healthcare with Artificial Intelligence",
		title: "PawMed AI - Revolutionizing Pet Healthcare",
		url: "https://pawmed-ai-v2-0.vercel.app", // Include the URL for consistency
		type: "website",
		images: "/assets/og-image.jpg", // Custom Open Graph Image
	},
	twitter: {
		card: "summary_large_image",
		site: "@pawmed_ai", // Twitter handle if applicable
		title: "PawMed AI - Revolutionizing Pet Healthcare",
		description: "Revolutionizing Pet Healthcare with Artificial Intelligence",
		images: "/assets/twitter-card-image.jpg", // Custom Twitter image
	},
	icons: {
		icon: ["/assets/favicon.ico?v=4"],
		apple: ["/assets/apple-touch-icon.png?v=4"],
		shortcut: ["/assets/apple-touch-icon.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Modals />
					<Drawers />

					<HeaderLayout />
					<div className="relative md:h-screen p-8 md:p-20 sm:p-8 font-[family-name:var(--font-geist-sans)]">
						{children}

						<CustomDock />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
