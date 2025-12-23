/**
 * Series configuration
 * Maps series names to their metadata (cover image, title, overview)
 */
export const seriesConfig = {
  "Branding is Product": {
    title: "Branding is your product's personality",
    slug: "branding-is-product",
    coverImage: "/images/series-branding-is-product-cover.jpg", // Series cover image
    overview: "Branding has shifted from a marketing tactic to a product decision. When you're building fast, branding feels like something you can postpone. But users don't experience “later.” They experience the product exactly as it shows up today. Brand is a product's personality that makes someone coming back for more or forgetting you, and your product team is responsilble for shaping that experience.",
  },
  "The New Craft": {
    title: "The New Craft",
    slug: "the-new-craft",
    coverImage: "/images/the-new-craft-series-cover.jpg", // Series cover image
    overview: "As AI tools make professional-looking design accessible to everyone, craft becomes the differentiator. This series explores how real design craft evolves in an AI-driven world, and how to spot the difference between commodity and craft.",
  },
  "Designing for AI": {
    title: "Designing for AI",
    slug: "designing-for-ai",
    coverImage: "/images/article-why-ai-products-fail-and-how-better-design-saves-them.jpg", // Using first article's image as cover
    overview: "AI products require fundamentally different design thinking. This series covers the patterns, principles, and practices for building AI-powered experiences that users actually trust and enjoy.",
  },
}

/**
 * Get series config by slug
 * @param {string} slug - The series slug
 * @returns {Object|null} - Series config or null if not found
 */
export function getSeriesBySlug(slug) {
  return Object.values(seriesConfig).find((series) => series.slug === slug) || null
}

/**
 * Get series config key (the stable identifier) by slug
 * @param {string} slug - The series slug
 * @returns {string|null} - Series config key or null if not found
 */
export function getSeriesKeyBySlug(slug) {
  const entry = Object.entries(seriesConfig).find(([key, config]) => config.slug === slug)
  return entry ? entry[0] : null
}

/**
 * Get series config by name
 * @param {string} name - The series name
 * @returns {Object|null} - Series config or null if not found
 */
export function getSeriesByName(name) {
  return seriesConfig[name] || null
}

/**
 * Converts a series name to a URL-friendly slug
 * @param {string} seriesName - The series name (e.g., "The New Craft")
 * @returns {string} - The slug (e.g., "the-new-craft")
 */
export function seriesNameToSlug(seriesName) {
  return seriesName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

