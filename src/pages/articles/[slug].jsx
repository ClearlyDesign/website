import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { calculateSeriesTotals } from "@/utils"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { CalendarDaysIcon, ClockIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import Divider from "@/components/Divider"
import ExampleBlock from "@/components/ExampleBlock"
import QuoteHandwritten from "@/components/QuoteHandwritten"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import * as Icons from "@heroicons/react/24/outline"
import { NextSeo } from "next-seo"
import { seriesNameToSlug } from "@/config/series"

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/articles"))
  const paths = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      params: { slug: filename.replace(".mdx", "") },
    }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src/articles", `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)

  // Calculate series total if this article is part of a series
  let seriesTotal = null
  if (data.series && data.series.length > 0) {
    const articlesDir = path.join(process.cwd(), "src/articles")
    const files = fs.readdirSync(articlesDir)
    const allArticles = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const articlePath = path.join(articlesDir, filename)
        const articleContents = fs.readFileSync(articlePath, "utf8")
        const { data: articleData } = matter(articleContents)
        return articleData
      })

    const articlesWithTotals = calculateSeriesTotals(allArticles)
    // Find any article in the same series to get the seriesTotal (all articles in same series have same total)
    const articleInSeries = articlesWithTotals.find(
      (article) =>
        article.series &&
        article.series.length > 0 &&
        article.series.some((s) => data.series.includes(s)),
    )
    seriesTotal = articleInSeries?.seriesTotal || null
  }

  return {
    props: {
      frontmatter: data,
      mdxSource,
      slug: params.slug,
      seriesTotal,
    },
  }
}

export default function Article({ frontmatter, mdxSource, slug, seriesTotal }) {
  // Mouse move animation logic (from Hero)
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Pass your custom components here
  const components = {
    ...Icons,
    Divider,
    ExampleBlock,
    QuoteHandwritten,
    // Add any other custom React components you want to use in MDX
  }

  const seriesSlug = seriesNameToSlug(frontmatter.series[0])

  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | Clearly Design`}
        description={frontmatter.description}
        canonical={`https://clearly.design/articles/${slug}`}
        openGraph={{
          url: `https://clearly.design/articles/${slug}`,
          title: frontmatter.title,
          description: frontmatter.description,
          site_name: "Clearly Design",
          images: [
            {
              url:
                `https://clearly.design${frontmatter.image}` ||
                "https://clearly.design/images/og-image.png",
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
            content: `Product Design, Website Design, Framer, Webflow, Design, UX Design, UI Design, User Interface Design, AI Design, Design Agency, Design Studio, Design Agency`,
          },
        ]}
      />
      <article className="mb-40">
        <header
          className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group pb-20"
          ref={headerRef}
          onMouseMove={handleMouseMove}
        >
          {/* Mouse-following radial gradient */}
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
                className="hidden sm:flex transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Home
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
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 pt-8 sm:pt-20 pb-10 sm:pb-14">
            <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
              <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                <CalendarDaysIcon className="w-4 h-4" />
                {frontmatter.date}
              </p>
              <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                <ClockIcon className="w-4 h-4" />
                {frontmatter.readingTime}
              </p>
              {frontmatter.series && (
                <Link
                  href={`/series/${seriesSlug}`}
                  className="text-xs hover:text-white transition-all duration-300 text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase"
                >
                  <Icons.RectangleStackIcon className="w-4 h-4" />
                  {frontmatter.series.join(", ")} ({frontmatter.seriesOrder}
                  {seriesTotal ? `/${seriesTotal}` : ""})
                </Link>
              )}
            </div>
            <h1 className="mt-6 sm:mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
              {frontmatter.title}
            </h1>
            <div className="flex items-center gap-3 mt-7 sm:mt-6 text-white/50">
              <Image
                src="/images/fb-clearly.svg"
                alt="Francois Brill"
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <div className="flex flex-col text-sm gap-1">
                <p className="font-medium text-white text-md">{frontmatter.author}</p>
                <p className="text-xs text-white/50 tracking-wide font-mono uppercase">
                  Founding Designer
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-0 sm:px-6 -mt-14 sm:-mt-20 z-10 relative">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1200}
            height={630}
            className="w-full h-auto sm:rounded-3xl object-cover shadow-perfect"
          />
        </div>
        <div className="max-w-4xl mx-auto prose sm:prose-lg px-6 mt-12 sm:mt-16">
          <MDXRemote {...mdxSource} components={components} />
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-12 sm:mt-24">
          <div className="flex items-center justify-start gap-2">
            <Link
              href={`/series/${seriesSlug}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              All articles in "{frontmatter.series[0]}"
            </Link>
          </div>
        </div>
      </article>
      <CTABlock
        ctaTitle={frontmatter.ctaTitle}
        ctaText={frontmatter.ctaText}
        ctaLabel={frontmatter.ctaLabel}
      />
      <Footer />
    </>
  )
}
