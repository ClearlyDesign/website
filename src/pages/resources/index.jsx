import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { NextSeo } from "next-seo"
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/24/outline"

export async function getStaticProps() {
  const resourcesDir = path.join(process.cwd(), "src/resources")
  const files = fs.readdirSync(resourcesDir)

  const resources = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(resourcesDir, file)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: (data.title || "").replace(" | Clearly Design", ""),
        description: data.description || "",
        lead: data.lead || "",
        date: data.date || null,
        lastUpdated: data.lastUpdated || null,
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.lastUpdated || a.date || 0)
      const dateB = new Date(b.lastUpdated || b.date || 0)
      return dateB - dateA
    })

  return { props: { resources } }
}

export default function Resources({ resources }) {
  const headerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const title = "Decision Guides | Clearly Design"
  const description =
    "Honest comparisons to help SaaS founders make better design decisions. Agency vs in-house, templates vs custom, Framer vs Webflow, and more."

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://clearly.design/resources"
        openGraph={{
          url: "https://clearly.design/resources",
          title,
          description,
          site_name: "Clearly Design",
          images: [
            {
              url: "https://clearly.design/images/og-image.png",
              width: 1200,
              height: 630,
              alt: "Clearly Design Decision Guides",
            },
          ],
        }}
      />
      <header
        className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group"
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
              href="/articles"
              className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
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
        <div className="mx-auto max-w-2xl lg:max-w-5xl px-6 pt-8 sm:pt-20 pb-14">
          <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
            <BookOpenIcon className="w-4 h-4" /> Decision Guides
          </p>
          <h1 className="text-4xl mt-4 font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Honest comparisons for SaaS design decisions
          </h1>
          <p className="mt-5 text-xl text-white/70 max-w-2xl leading-relaxed">
            Not sure whether to hire, outsource, or DIY? These guides break down
            the real tradeoffs so you can decide with confidence.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all duration-200 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors leading-snug">
                {resource.title}
              </h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {resource.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                Read guide
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
