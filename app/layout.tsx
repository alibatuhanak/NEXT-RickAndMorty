import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: {
		default: "R&M",
		template: "%s 🍭 R&M",
	},
	description: "Rick and Morty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={" bg-black text-white min-h-screen h-auto min-w-full max-w-full flex flex-col items-center pt-4"}>
				<Header />
				{children}
			</body>
		</html>
	);
}
