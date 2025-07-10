import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function handler(req, res) {
  const articlesDir = path.join(process.cwd(), "src/articles")
  const files = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("draft-"))

  let output = `# Clearly Design\n\n`
  output += `> Clearly Design is a design studio that helps startups design delightful digital products.\n\n`
  output += `## [Blog]\n`

  files.forEach((file) => {
    const content = fs.readFileSync(path.join(articlesDir, file), "utf-8")
    const { data } = matter(content)
    const slug = file.replace(".mdx", "")
    const title = data.title || slug
    const description = data.description || ""
    const url = `https://clearly.design/articles/${slug}`
    output += `- [${title}](${url})\n  ${description}\n`
  })

  res.setHeader("Content-Type", "text/plain")
  res.status(200).send(output)
}
