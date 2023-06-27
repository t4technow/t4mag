/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "10.0.11.172",
				port: "5555",
				pathname: "/media/**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "5555",
				pathname: "/media/**",
			},
			{
				protocol: "https",
				hostname: "api.t4technow.tk",
				pathname: "/media/**",
			},
		],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;
