import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {
  CalendarDaysIcon,
  ClockIcon,
  SparklesIcon,
  SwatchIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline"
import Footer from "@/components/Footer"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { NextSeo } from "next-seo"

const Articles = ({ articles }) => {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
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
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="mt-1 lg:mt-12 xl:mt-20">
          {articles.map((article) => (
            <ArticleCard key={article?.title} {...article} />
          ))}
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <Footer />
      </div>
    </>
  )
}
export default Articles

const ArticleCard = ({ date, title, description, image, series, link, readingTime }) => {
  return (
    <a
      href={link}
      className="rounded-3xl p-6 flex flex-col lg:flex-row items-start gap-6 border-dashed border-b border-gray-200 pb-10 hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
    >
      <div className="relative flex w-full lg:w-96 h-60 shrink-0 overflow-hidden rounded-lg">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
            <CalendarDaysIcon className="w-4 h-4" />
            {date}
          </p>
          <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
            <ClockIcon className="w-4 h-4" />
            {readingTime}
          </p>
          {series && (
            <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              <RectangleStackIcon className="w-4 h-4 text-gray-500" />
              {series.join(", ")}
            </p>
          )}
        </div>
        <p className="text-3xl font-bold text-gray-900 tracking-tight mt-2">{title}</p>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </a>
  )
}

export async function getStaticProps() {
  const articlesDir = path.join(process.cwd(), "src/articles")
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
  return { props: { articles } }
}
