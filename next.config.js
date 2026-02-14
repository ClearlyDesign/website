/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist", "next-mdx-remote"],
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/llms.txt', destination: '/api/llmtxt' },
    ];
  },
  async redirects() {
    return [
      {
        source: '/articles/why-craft-matters-more-in-ai-world',
        destination: '/articles/craft-1-why-craft-matters-more-in-ai-world',
        permanent: true,
      },
      {
        source: '/articles/the-hidden-work-make-products-succeed',
        destination: '/articles/craft-2-the-hidden-work-make-products-succeed',
        permanent: true,
      },
      {
        source: '/articles/standing-out-when-everyone-has-the-same-tools',
        destination: '/articles/craft-3-standing-out-when-everyone-has-the-same-tools',
        permanent: true,
      },
      {
        source: '/articles/my-actual-ai-workflow',
        destination: '/articles/craft-4-my-actual-ai-workflow',
        permanent: true,
      },
      {
        source: '/articles/the-multiplication-effect-in-the-new-craft',
        destination: '/articles/craft-5-the-multiplication-effect-in-the-new-craft',
        permanent: true,
      },
      {
        source: '/articles/the-new-craft-test-real-or-commodity',
        destination: '/articles/craft-6-the-new-craft-test-real-or-commodity',
        permanent: true,
      },
      {
        source: '/articles/why-ai-products-fail-and-how-better-design-saves-them',
        destination: '/articles/ai-design-1-why-ai-products-fail-and-how-better-design-saves-them',
        permanent: true,
      },
      {
        source: '/articles/how-to-design-user-experiences-that-makes-ai-feel-human',
        destination: '/articles/ai-design-2-how-to-design-user-experiences-that-makes-ai-feel-human',
        permanent: true,
      },
      {
        source: '/articles/building-trust-in-ai-systems',
        destination: '/articles/ai-design-3-building-trust-in-ai-systems',
        permanent: true,
      },
      {
        source: '/articles/designing-for-ai-failures',
        destination: '/articles/ai-design-4-designing-for-ai-failures',
        permanent: true,
      },
      {
        source: '/articles/how-to-turn-ai-into-a-co-pilot-not-a-black-box',
        destination: '/articles/ai-design-5-how-to-turn-ai-into-a-co-pilot-not-a-black-box',
        permanent: true,
      },
      {
        source: '/articles/designing-conversational-ai',
        destination: '/articles/ai-design-6-designing-conversational-ai',
        permanent: true,
      },
      {
        source: '/articles/ai-in-traditional-interfaces',
        destination: '/articles/ai-design-7-ai-in-traditional-interfaces',
        permanent: true,
      },
      {
        source: '/articles/testing-and-iterating-ai-features',
        destination: '/articles/ai-design-8-testing-and-iterating-ai-features',
        permanent: true,
      },
      {
        source: '/articles/multi-modal-ai-experiences',
        destination: '/articles/ai-design-9-multi-modal-ai-experiences',
        permanent: true,
      },
      {
        source: '/articles/advanced-ai-patterns',
        destination: '/articles/ai-design-10-advanced-ai-patterns',
        permanent: true,
      },
      {
        source: '/articles/implementing-ai-design-systems',
        destination: '/articles/ai-design-11-implementing-ai-design-systems',
        permanent: true,
      },
      {
        source: '/articles/future-of-human-ai-collaboration',
        destination: '/articles/ai-design-12-future-of-human-ai-collaboration',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
