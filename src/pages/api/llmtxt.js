import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function handler(req, res) {
  const articlesDir = path.join(process.cwd(), "src/articles")
  const articleFiles = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("draft-"))

  const projectsDir = path.join(process.cwd(), "src/projects")
  const projectFiles = fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".md"))

  const caseStudiesDir = path.join(process.cwd(), "src/case-studies")
  const caseStudyFiles = fs
    .readdirSync(caseStudiesDir)
    .filter((f) => f.endsWith(".mdx"))

  const resourcesDir = path.join(process.cwd(), "src/resources")
  const resourceFiles = fs.existsSync(resourcesDir)
    ? fs.readdirSync(resourcesDir).filter((f) => f.endsWith(".mdx"))
    : []

  let output = `# Clearly Design
> Design studio for SaaS founders. Brand, website, and product design.
> Website: https://clearly.design
> Book a call: https://app.cal.com/clearlydesign/discovery

## What We Do
- Brand identity (logo, guidelines, visual systems)
- Website design and development (Next.js, Framer, Webflow)
- Product design (research, wireframes, prototypes, design systems)
- AI product design (trust, transparency, user control)

## Who We Work With
SaaS founders and product teams, typically early to growth stage. We specialize in 0-1 product development and helping technical teams ship faster with better design.

---

## Decision Guides
Practical comparisons to help SaaS teams make better decisions about design, platforms, and hiring.

`

  resourceFiles.forEach((file) => {
    const content = fs.readFileSync(path.join(resourcesDir, file), "utf-8")
    const { data } = matter(content)
    const slug = file.replace(".mdx", "")
    const title = (data.title || slug).replace(" | Clearly Design", "")
    const description = data.description || ""
    const url = `https://clearly.design/resources/${slug}`
    output += `- [${title}](${url}): ${description}\n`
  })

  output += `
---

## Services (Fixed-Price Projects)
`

  projectFiles.forEach((file) => {
    const content = fs.readFileSync(path.join(projectsDir, file), "utf-8")
    const { data } = matter(content)
    const slug = file.replace(".md", "")
    const title = data.title || slug
    const pricing = data.pricing || ""
    const timeline = data.timeline || ""
    const url = `https://clearly.design/projects/${slug}`
    output += `- [${title}](${url}) — ${pricing}, ${timeline}\n`
  })

  output += `
---

## Case Studies
`

  caseStudyFiles.forEach((file) => {
    const content = fs.readFileSync(path.join(caseStudiesDir, file), "utf-8")
    const { data } = matter(content)
    const slug = file.replace(".mdx", "")
    const title = data.title || slug
    const client = data.client || ""
    const url = `https://clearly.design/case-studies/${slug}`
    output += `- [${title}](${url})${client ? ` — ${client}` : ""}\n`
  })

  output += `
---

## Articles
`

  // Group articles by series
  const articles = articleFiles.map((file) => {
    const content = fs.readFileSync(path.join(articlesDir, file), "utf-8")
    const { data } = matter(content)
    const slug = file.replace(".mdx", "")
    return {
      title: data.title || slug,
      description: data.description || "",
      series: data.series ? data.series[0] : null,
      url: `https://clearly.design/articles/${slug}`,
    }
  })

  const seriesMap = new Map()
  const standalone = []

  articles.forEach((a) => {
    if (a.series) {
      if (!seriesMap.has(a.series)) seriesMap.set(a.series, [])
      seriesMap.get(a.series).push(a)
    } else {
      standalone.push(a)
    }
  })

  seriesMap.forEach((items, seriesName) => {
    output += `\n### ${seriesName}\n`
    items.forEach((a) => {
      output += `- [${a.title}](${a.url})\n`
    })
  })

  if (standalone.length > 0) {
    output += `\n### Other\n`
    standalone.forEach((a) => {
      output += `- [${a.title}](${a.url})\n`
    })
  }

  res.setHeader("Content-Type", "text/plain")
  res.status(200).send(output)
}
