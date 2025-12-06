import fs from "fs"
import path from "path"
import matter from "gray-matter"

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

