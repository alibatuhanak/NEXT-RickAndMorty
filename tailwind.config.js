/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			ram: "#4cb5c3",
			black: "#000000",
			white: "#ffffff",
			red: "#8884f8",
		},
		extend: {
			keyframes: {
				in: {
					from: { transform: "translateY(0px)" },
					to: { transform: "translateY(-30px)" },
				},
				out: {
					from: { transform: "translateY(-30px)" },
					to: { transform: "translateY(0px)" },
				},
			},
			animation: {
				inAnim: "in 0.5s ease-in-out forwards",
				outAnim: "out 2s",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
