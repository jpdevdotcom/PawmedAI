import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "./layouts/header";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomDock } from "@/components/shared/custom-dock";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
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
