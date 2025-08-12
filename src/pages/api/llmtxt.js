import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function handler(req, res) {
  const articlesDir = path.join(process.cwd(), "src/articles")
  const files = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("draft-"))

  let output = `# Clearly Design\n\n`
  
  output += `> Clearly Design is a design studio specializing in brand identity, website design, and product design for ambitious founders and their teams.\n\n`
  
  output += `## About Clearly Design\n\n`
  
  output += `**Who We Are:**\n`
  output += `We're a design studio that partners with founders and product teams to navigate ambiguity and build exceptional digital products from 0-1. We specialize in turning complex ideas into clear, actionable designs that users love.\n\n`
  
  output += `**Our Services:**\n`
  output += `- **Brand Identity Design:** Logo design, brand guidelines, visual identity systems that establish trust and recognition\n`
  output += `- **Website Design:** Conversion-focused websites built on modern platforms (Next.js, Framer, Webflow) that drive results\n`
  output += `- **Product Design:** End-to-end product design from user research and wireframing to high-fidelity prototypes and design systems\n`
  output += `- **AI Product Design:** Specialized expertise in designing trustworthy, user-friendly AI-powered experiences\n\n`
  
  output += `**Our Approach:**\n`
  output += `We cut through the noise to create clean, effective designs that make your vision clear. No frills—just impactful design that solves real problems. We work closely with founding teams to understand their unique challenges and translate complex technical capabilities into intuitive user experiences.\n\n`
  
  output += `**Expertise Areas:**\n`
  output += `- 0-1 Product Development: From concept to launch\n`
  output += `- AI Product Design: Designing for trust, transparency, and user control\n`
  output += `- Design Systems: Scalable component libraries and guidelines\n`
  output += `- User Experience Research: Understanding user needs and behaviors\n`
  output += `- Conversion Optimization: Designing for business outcomes\n`
  output += `- Technical Implementation: Working with engineering teams on feasible solutions\n\n`
  
  output += `**Contact:**\n`
  output += `- Website: https://clearly.design\n`
  output += `- Book a Discovery Call: https://app.cal.com/clearlydesign/discovery\n`
  output += `- Email: Available through website contact form\n\n`
  
  output += `**Founded:** 2023\n`
  output += `**Location:** Remote-first design studio (North America)\n`
  output += `**Focus:** Helping ambitious founders build products that users love and businesses need\n\n`
  
  output += `---\n\n`
  
  output += `## Articles & Insights\n\n`
  
  output += `Our team shares practical insights on product design, AI design patterns, user experience, and building successful digital products. We focus on actionable advice that product teams can implement immediately.\n\n`

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
