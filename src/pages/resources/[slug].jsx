import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import Divider from "@/components/Divider"
import ExampleBlock from "@/components/ExampleBlock"
import JsonLd from "@/components/JsonLd"
import { resourceArticleSchema } from "@/lib/schema"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import * as Icons from "@heroicons/react/24/outline"
import { NextSeo } from "next-seo"
import remarkGfm from "remark-gfm"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"

const RESOURCES_DIR = path.join(process.cwd(), "src/resources")

export async function getStaticPaths() {
  if (!fs.existsSync(RESOURCES_DIR)) {
    return { paths: [], fallback: false }
  }
  const files = fs.readdirSync(RESOURCES_DIR)
  const paths = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      params: { slug: filename.replace(".mdx", "") },
    }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(RESOURCES_DIR, `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
  })

  // Resolve related pages
  const relatedPages = (data.related || [])
    .map((relSlug) => {
      const relPath = path.join(RESOURCES_DIR, `${relSlug}.mdx`)
      if (!fs.existsSync(relPath)) return null
      const relContent = fs.readFileSync(relPath, "utf8")
      const { data: relData } = matter(relContent)
      return {
        slug: relSlug,
        title: (relData.title || relSlug).replace(" | Clearly Design", ""),
        description: relData.description || "",
      }
    })
    .filter(Boolean)

  return {
    props: {
      frontmatter: data,
      mdxSource,
      slug: params.slug,
      relatedPages,
    },
  }
}

const DECISION_CTA = {
  ctaTitle: "Not sure which is right for your situation?",
  ctaText: "We'll give you an honest answer in a 30-minute call.",
  ctaLabel: "Book a call with Clearly Design",
}

export default function Resource({ frontmatter, mdxSource, slug, relatedPages }) {
  const headerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const components = {
    ...Icons,
    Divider,
    ExampleBlock,
  }

  const displayTitle = frontmatter.title?.replace(" | Clearly Design", "")

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={`https://clearly.design/resources/${slug}`}
        openGraph={{
          url: `https://clearly.design/resources/${slug}`,
          title: frontmatter.title,
          description: frontmatter.description,
          site_name: "Clearly Design",
          type: "article",
          article: {
            publishedTime: frontmatter.date
              ? new Date(frontmatter.date).toISOString()
              : undefined,
            modifiedTime: frontmatter.lastUpdated
              ? new Date(frontmatter.lastUpdated).toISOString()
              : undefined,
            authors: ["https://clearly.design"],
          },
          images: [
            {
              url: "https://clearly.design/images/og-image.png",
              width: 1200,
              height: 630,
              alt: displayTitle,
            },
          ],
        }}
      />
      <JsonLd
        data={resourceArticleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          lastUpdated: frontmatter.lastUpdated,
          author: frontmatter.author || "Francois Brill",
          slug,
        })}
      />
      <article className="mb-40">
        <header
          className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group pb-16"
          ref={headerRef}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 102, 241, 0.15),
                transparent 80%
              )
            `,
            }}
          />
          <div className="flex justify-between items-center py-6 px-6">
            <Link
              href="/"
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full p-2 group relative inline-flex items-center justify-center w-14 h-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
            >
              <Image
                src="/images/icon-clearly-design.svg"
                alt="Clearly Design"
                width={40}
                height={40}
                className="w-10 h-10 hover:scale-110 transition-all duration-300"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hidden sm:flex transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
              >
                Home
              </Link>
              <Link
                href="/resources"
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Resources
              </Link>
              <Link
                href="/articles"
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Articles
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 pt-8 sm:pt-16 pb-10 sm:pb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
              {displayTitle}
            </h1>
            {frontmatter.lead && (
              <p className="mt-5 text-xl text-white/80 leading-relaxed">
                {frontmatter.lead}
              </p>
            )}
            {(frontmatter.author || frontmatter.lastUpdated) && (
              <div className="mt-6 flex items-center gap-10 text-sm text-white/40">
                {frontmatter.author && (
                  <div className="flex items-center gap-3 mt-7 sm:mt-6 text-white/50">
                    <Image
                      src="/images/fb-clearly.png"
                      alt="Francois Brill"
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover border-white/20 border"
                    />
                    <div className="flex flex-col text-sm gap-1">
                      <p className="font-medium text-white text-md">
                        {frontmatter.author}
                      </p>
                      <p className="text-xs text-white/50 tracking-wide font-mono uppercase">
                        Designer + Builder
                      </p>
                    </div>
                  </div>
                )}
                {frontmatter.lastUpdated && (
                  <div className="flex items-center gap-3 mt-7 sm:mt-6 text-white/50">
                    <div className="flex items-center justify-center size-12 rounded-full bg-white/5">
                      <CalendarDaysIcon className="w-5 h-5 text-white/50" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-white text-md">
                        {frontmatter.lastUpdated}
                      </p>
                      <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                        Last updated
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
        <div className="max-w-4xl mx-auto prose sm:prose-lg px-6 mt-12 sm:mt-16 pb-12">
          <MDXRemote {...mdxSource} components={components} />
        </div>

        {relatedPages.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Related Decision Guides
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/resources/${page.slug}`}
                  className="group rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-200"
                >
                  <h3 className="font-medium text-gray-900 group-hover:text-indigo-700 transition-colors text-sm leading-snug">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
      <CTABlock
        ctaTitle={DECISION_CTA.ctaTitle}
        ctaText={DECISION_CTA.ctaText}
        ctaLabel={DECISION_CTA.ctaLabel}
      />
      <Footer />
    </>
  )
}
