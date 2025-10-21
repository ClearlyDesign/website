import { MDXRemote } from "next-mdx-remote"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import * as Icons from "@heroicons/react/24/outline"

export default function UseCaseLayout({ frontmatter, mdxSource, slug }) {
  // Mouse move animation logic
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const components = {
    ...Icons,
    // Add any custom components needed for use case pages
  }

  return (
    <>
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

          {/* Navigation */}
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

          {/* Hero Section */}
          <div className="mx-auto max-w-4xl px-6 pt-8 sm:pt-20 pb-10 sm:pb-14">
            <div className="flex items-center gap-x-4 gap-y-2 flex-wrap mb-6">
              <p className="text-xs text-white/50 tracking-wide font-mono uppercase">
                {frontmatter.trustElement}
              </p>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
              {frontmatter.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
              {frontmatter.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={process.env.NEXT_PUBLIC_BOOKING_LINK}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-gradient-to-tr from-green-300 to-lime-300 rounded-full hover:bg-green-300 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                {frontmatter.ctaPrimary}
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {frontmatter.ctaSecondary}
              </Link>
            </div>

            {frontmatter.pricing && frontmatter.timeline && (
              <div className="mt-8 flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Icons.CurrencyDollarIcon className="w-5 h-5" />
                  <span>{frontmatter.pricing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.CalendarDaysIcon className="w-5 h-5" />
                  <span>{frontmatter.timeline}</span>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto prose sm:prose-lg px-6 mt-12 sm:mt-16">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>

      {/* CTA Section */}
      <CTABlock
        ctaTitle={frontmatter.ctaBlockTitle || "Ready to get started?"}
        ctaText={frontmatter.ctaBlockText || "Book a 30-minute call and we'll discuss how we can help with your project."}
        ctaLabel={frontmatter.ctaBlockLabel || "Start Your Project"}
      />

      <Footer />
    </>
  )
}
