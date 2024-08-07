/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/pizzachromewebsite',  
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pizzachrome.org',
			},
		],
	},
};

export default nextConfig;
