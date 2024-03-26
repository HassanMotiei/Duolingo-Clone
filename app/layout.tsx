import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Duolingo",
	description: "The world's best way to learn a language",
	icons: {
		icon: "/mascot.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<ClerkProvider>
				<html lang="en" suppressHydrationWarning>
					<body className={font.className}>
						<ThemeProvider
							attribute="class"
							// defaultTheme="system"
							defaultTheme="light"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
