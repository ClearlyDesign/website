import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import Link from "next/link"
import { getArticlesBySeries, slugToSeriesName, seriesNameToSlug } from "@/utils"
import { getSeriesBySlug } from "@/config/series"
import Footer from "@/components/Footer"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { NextSeo } from "next-seo"
import {
  RectangleStackIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"

export async function getStaticPaths() {
  // Get all unique series from articles
  const articlesDir = path.join(process.cwd(), "src/articles")

  if (!fs.existsSync(articlesDir)) {
    return { paths: [], fallback: false }
  }

  const files = fs.readdirSync(articlesDir)
  const seriesSet = new Set()

  files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("draft-"))
    .forEach((filename) => {
      const filePath = path.join(articlesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      if (data.series && data.series.length > 0) {
        data.series.forEach((series) => seriesSet.add(series))
      }
    })

  // Convert series names to slugs
  const paths = Array.from(seriesSet).map((seriesName) => {
    const slug = seriesNameToSlug(seriesName)
    return { params: { slug } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const seriesName = slugToSeriesName(params.slug)
  const articles = getArticlesBySeries(seriesName)
  const seriesConfig = getSeriesBySlug(params.slug)

  if (!seriesConfig || articles.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      seriesName,
      articles,
      seriesConfig,
      slug: params.slug,
    },
  }
}

export default function Series({ seriesName, articles, seriesConfig, slug }) {
  // Mouse move animation logic
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const title = `${seriesConfig.title} | Series | Clearly Design`
  const description = seriesConfig.overview
  const url = `https://clearly.design/series/${slug}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: description,
          site_name: "Clearly Design",
          images: [
            {
              url: `https://clearly.design${seriesConfig.coverImage}`,
            },
          ],
        }}
        twitter={{
          handle: "@fbrill",
          site: "https://clearly.design",
          cardType: "summary_large_image",
        }}
      />
      <header
        className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group"
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
        <div className="mx-auto max-w-4xl px-6 pt-8 sm:pt-20 pb-32">
          <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
            <RectangleStackIcon className="w-4 h-4" />
            Series
          </p>
          <h1 className="text-4xl mt-4 font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            {seriesConfig.title}
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-3xl">{seriesConfig.overview}</p>
        </div>
      </header>

      {/* Series Cover Image */}
      <div className="max-w-4xl mx-auto p-0 md:px-6 -mt-14 sm:-mt-20 z-10 relative">
        <Image
          src={seriesConfig.coverImage}
          alt={seriesConfig.title}
          width={1200}
          height={630}
          className="w-full h-auto sm:rounded-3xl object-cover shadow-perfect"
        />
      </div>

      {/* Articles List */}
      <div className="max-w-4xl mx-auto px-0 md:px-6 mt-12 sm:mt-16 mb-20">
        <h2 className="md:ml-8 text-2xl font-bold text-gray-900 mb-8 flex justify-center md:justify-start items-center gap-2">
          Articles in this series{" "}
          <div className="w-6 h-6 rounded-full text-xs font-bold z-10 text-white bg-gray-900 flex items-center justify-center gap-2 font-mono uppercase">
            {articles.length}
          </div>
        </h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={article.link}
              className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 group"
            >
              {/* Article Thumbnail */}
              <div className="relative w-full md:w-32 h-32 md:h-32 sm:w-40 sm:h-40 shrink-0 bg-gray-100">
                <div className="absolute w-6 h-6 rounded-full -top-2 -left-2 text-xs font-bold z-10 text-white bg-gray-900 flex items-center justify-center gap-2 font-mono uppercase">
                  {article.seriesOrder}
                </div>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
              {/* Article Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                    <span className="flex items-center gap-2">
                      <RectangleStackIcon className="w-4 h-4" />
                      {article.seriesOrder} of {articles.length}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDaysIcon className="w-4 h-4" />
                      {article.date}
                    </span>
                    {article.readingTime && (
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {article.readingTime}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {article.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
