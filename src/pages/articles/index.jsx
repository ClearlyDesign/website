import Image from "next/image"
import Link from "next/link"
import { getAllSeriesWithArticles } from "@/utils"
import { getSeriesByName, seriesNameToSlug } from "@/config/series"
import {
  CalendarDaysIcon,
  ClockIcon,
  SparklesIcon,
  SwatchIcon,
  RectangleStackIcon,
  PencilSquareIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import Footer from "@/components/Footer"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { NextSeo } from "next-seo"

const Articles = ({ series }) => {
  // Mouse move animation logic (from [slug].jsx)
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const title = "Articles | Clearly Design"
  const description =
    "Clearly Design specializes in straightforward, results-driven website and product design. We cut through the noise to create clean, effective designs that make your vision clear. No frills—just impactful design."
  const url = "https://clearly.design/articles"

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
          images: [{ url: "https://clearly.design/images/og-image.png" }],
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
        <div className="mx-auto max-w-2xl lg:max-w-5xl px-6 pt-8 sm:pt-20 pb-14">
          <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
            <PencilSquareIcon className="w-4 h-4" /> Articles
          </p>
          <h1 className="text-4xl mt-4 font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Thoughts on{" "}
            <div className="hidden bg-lime-400 ml-2 text-gray-900 rounded-full p-3 sm:inline-flex items-center justify-center">
              <SwatchIcon className="size-5 sm:size-8" />
            </div>{" "}
            design <span className="text-gray-500">+</span>
            <div className="hidden bg-lime-400 ml-2 text-gray-900 rounded-full p-3 sm:inline-flex items-center justify-center">
              <SparklesIcon className="size-5 sm:size-8" />
            </div>{" "}
            crafting delightful digital products
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-6">
        <div className="mt-8 lg:mt-12 xl:mt-20 space-y-16">
          {/* Series Overviews */}
          {series.map((seriesData) => {
            const seriesConfig = getSeriesByName(seriesData.seriesName)
            if (!seriesConfig) return null

            return (
              <SeriesCard
                key={seriesData.seriesName}
                seriesName={seriesData.seriesName}
                seriesConfig={seriesConfig}
                articles={seriesData.articles}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <Footer />
      </div>
    </>
  )
}
export default Articles

const SeriesCard = ({ seriesName, seriesConfig, articles }) => {
  const seriesSlug = seriesNameToSlug(seriesName)

  return (
    <div className="bg-white rounded-3xl p-1 lg:p-12 lg:border lg:border-gray-200 lg:shadow-perfect">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Series Info */}
        <div className="flex-1 lg:max-w-sm">
          <div className="sticky top-6">
            <p className="text-xs mb-3 text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              Series
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {seriesConfig.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {seriesConfig.overview}
            </p>
            {/* Series Cover Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={seriesConfig.coverImage}
                alt={seriesConfig.title}
                fill
                className="object-cover"
              />
            </div>
            {/* View Series Link */}
            <Link
              href={`/series/${seriesSlug}`}
              className="hidden lg:inline-flex items-center gap-2 mt-6 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              View full series
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Article List */}
        <div className="flex-1 lg:max-w-lg">
          <p className="text-xs mb-3 text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
            Articles
          </p>
          <div className="space-y-8 lg:space-y-0">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={article.link}
                className="flex flex-col lg:flex-row items-start hover:cursor-pointer gap-2 lg:gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                {/* Article Thumbnail */}
                <div className="relative aspect-video w-full lg:w-auto lg:h-20 shrink-0 bg-gray-100">
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
                {/* Article Title */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-950 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const series = getAllSeriesWithArticles()

  return {
    props: {
      series,
    },
  }
}
