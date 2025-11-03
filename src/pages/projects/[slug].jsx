import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { NextSeo } from "next-seo"
import ProjectLayout from "@/components/Projects/ProjectLayout"

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/projects"))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src/projects", `${params.slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)

  // Fetch case studies for embedding
  const caseStudiesDir = path.join(process.cwd(), "src/case-studies")
  let caseStudies = []
  if (fs.existsSync(caseStudiesDir)) {
    const files = fs.readdirSync(caseStudiesDir)
    caseStudies = files
      .filter((file) => file.endsWith(".mdx"))
      .map((filename) => {
        const csFilePath = path.join(caseStudiesDir, filename)
        const csFileContents = fs.readFileSync(csFilePath, "utf8")
        const { data } = matter(csFileContents)
        return {
          ...data,
          link: `/case-studies/${filename.replace(/\.mdx$/, "")}`,
        }
      })
  }

  return {
    props: {
      frontmatter: data,
      mdxSource,
      slug: params.slug,
      caseStudies,
    },
  }
}

export default function Project({ frontmatter, mdxSource, slug, caseStudies }) {
  return (
    <>
      <NextSeo
        title={frontmatter.metaTitle || `${frontmatter.title} | Clearly Design`}
        description={frontmatter.metaDescription}
        canonical={`https://clearly.design/projects/${slug}`}
        openGraph={{
          url: `https://clearly.design/projects/${slug}`,
          title: frontmatter.title,
          description: frontmatter.metaDescription,
          site_name: "Clearly Design",
          images: [
            {
              url: frontmatter.image || "https://clearly.design/images/og-image.png",
            },
          ],
        }}
        twitter={{
          handle: "@fbrill",
          site: "https://clearly.design",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `SaaS Design, Product Design, Website Design, Conversion Optimization, Design Agency, Design Studio`,
          },
        ]}
      />
      <ProjectLayout frontmatter={frontmatter} mdxSource={mdxSource} slug={slug} caseStudies={caseStudies} />
    </>
  )
}
