/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/llms.txt', destination: '/api/llmtxt' },
    ];
  },
}

module.exports = nextConfig
