/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				port: "",
				hostname: process.env.API,
				pathname: "/api/character/avatar/**",
			},
		],
	},
};

module.exports = nextConfig;
