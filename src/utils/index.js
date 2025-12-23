import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { getSeriesBySlug } from "@/config/series"

/**
 * Calculates the total number of articles in the same series for each article
 * @param {Array} articles - Array of article objects with frontmatter data
 * @returns {Array} - Array of articles with seriesTotal added to each article
 */
export function calculateSeriesTotals(articles) {
  return articles.map((article) => {
    let seriesTotal = null
    if (article.series && article.series.length > 0) {
      // Count articles in the same series
      const articlesInSeries = articles.filter((a) => 
        a.series && 
        a.series.length > 0 && 
        a.series.some((s) => article.series.includes(s))
      )
      seriesTotal = articlesInSeries.length
    }
    return {
      ...article,
      seriesTotal,
    }
  })
}

/**
 * Loads all articles from the articles directory and calculates series totals
 * @returns {Array} - Array of articles sorted by date (newest first) with seriesTotal
 */
export function loadArticlesWithSeriesTotals() {
  const articlesDir = path.join(process.cwd(), "src/articles")
  
  // Check if articles directory exists
  if (!fs.existsSync(articlesDir)) {
    return []
  }

  const files = fs.readdirSync(articlesDir)
  const articles = files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("draft-"))
    .map((filename) => {
      const filePath = path.join(articlesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        ...data,
        link: `/articles/${filename.replace(/\.mdx$/, "")}`,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return calculateSeriesTotals(articles)
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

/**
 * Converts a slug back to series name
 * @param {string} slug - The slug (e.g., "the-new-craft")
 * @returns {string} - The series name (e.g., "The New Craft")
 */
export function slugToSeriesName(slug) {
  // Try to get series name from config first
  const seriesConfig = getSeriesBySlug(slug)
  if (seriesConfig && seriesConfig.title) {
    return seriesConfig.title
  }
  // Fallback to slug if not found in config
  return slug
}

/**
 * Gets all articles in a specific series, sorted by seriesOrder
 * @param {string} seriesName - The series name
 * @returns {Array} - Array of articles in the series, sorted by seriesOrder
 */
export function getArticlesBySeries(seriesName) {
  const articlesDir = path.join(process.cwd(), "src/articles")
  
  if (!fs.existsSync(articlesDir)) {
    return []
  }

  const files = fs.readdirSync(articlesDir)
  const articles = files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("draft-"))
    .map((filename) => {
      const filePath = path.join(articlesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        ...data,
        link: `/articles/${filename.replace(/\.mdx$/, "")}`,
        slug: filename.replace(/\.mdx$/, ""),
      }
    })
    .filter((article) => 
      article.series && 
      article.series.length > 0 && 
      article.series.includes(seriesName)
    )
    .sort((a, b) => {
      const orderA = a.seriesOrder || 999
      const orderB = b.seriesOrder || 999
      return orderA - orderB
    })

  return articles
}

/**
 * Gets all series with their articles grouped together
 * @returns {Array} - Array of series objects with config and articles, sorted by most recent article date
 */
export function getAllSeriesWithArticles() {
  const articlesDir = path.join(process.cwd(), "src/articles")
  
  if (!fs.existsSync(articlesDir)) {
    return []
  }

  // Get all articles
  const files = fs.readdirSync(articlesDir)
  const allArticles = files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("draft-"))
    .map((filename) => {
      const filePath = path.join(articlesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        ...data,
        link: `/articles/${filename.replace(/\.mdx$/, "")}`,
        slug: filename.replace(/\.mdx$/, ""),
      }
    })

  // Group articles by series
  const seriesMap = new Map()
  
  allArticles.forEach((article) => {
    if (article.series && article.series.length > 0) {
      article.series.forEach((seriesName) => {
        if (!seriesMap.has(seriesName)) {
          seriesMap.set(seriesName, [])
        }
        seriesMap.get(seriesName).push(article)
      })
    }
  })

  // Convert to array and sort articles by seriesOrder
  const seriesArray = Array.from(seriesMap.entries()).map(([seriesName, articles]) => {
    const sortedArticles = articles.sort((a, b) => {
      const orderA = a.seriesOrder || 999
      const orderB = b.seriesOrder || 999
      return orderA - orderB
    })
    
    // Find the most recent article date for sorting series (as ISO string for serialization)
    const mostRecentDate = sortedArticles.reduce((latest, article) => {
      const articleDate = new Date(article.date)
      return articleDate > latest ? articleDate : latest
    }, new Date(0))

    return {
      seriesName,
      articles: sortedArticles,
      mostRecentDate: mostRecentDate.toISOString(), // Convert to string for JSON serialization
    }
  })

  // Sort series by most recent article date (newest first)
  seriesArray.sort((a, b) => new Date(b.mostRecentDate) - new Date(a.mostRecentDate))

  return seriesArray
}

