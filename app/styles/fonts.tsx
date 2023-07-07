import { NextFont } from "next/dist/compiled/@next/font";
import { Caveat, Inter, Roboto } from "next/font/google";

export const inter: NextFont = Inter({
	subsets: ["latin"],
});
export const roboto: NextFont = Roboto({
	weight: "400",
	subsets: ["latin", "cyrillic", "latin-ext"],
});
export const caveat: NextFont = Caveat({
	subsets: ["latin"],
});
