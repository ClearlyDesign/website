const SITE_URL = "https://clearly.design"

/**
 * Converts a display date (e.g. "Jul 11, 2025") to ISO 8601 with timezone (UTC).
 * Returns null if parsing fails.
 */
function toISO8601(dateStr) {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

/**
 * Organization + WebSite schema for the whole site (brand, sitelinks).
 */
export function organizationWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Clearly Design",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/icon-clearly-design.svg`,
        },
        description:
          "Clearly Design specializes in straightforward, results-driven website and product design. We cut through the noise to create clean, effective designs that make your vision clear.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Clearly Design",
        description:
          "Product design subscription and project-based design for websites and products. No frills—just impactful design.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  }
}

/**
 * Article schema for blog posts (rich results in search).
 */
export function articleSchema({ title, description, image, date, author, slug }) {
  const url = `${SITE_URL}/articles/${slug}`
  const imageUrl = image?.startsWith("http") ? image : `${SITE_URL}${image}`
  const isoDate = toISO8601(date)

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Clearly Design",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/icon-clearly-design.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  }

  if (isoDate) {
    article.datePublished = isoDate
    article.dateModified = isoDate
  }

  return article
}

/**
 * FAQPage schema for the homepage FAQ section.
 * @param {Array<{ question: string, answer: string }>} items - FAQ items (answer can contain HTML; will be stripped)
 */
export function faqPageSchema(items) {
  const stripHtml = (html) =>
    html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'")

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: stripHtml(question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(answer),
      },
    })),
  }
}
