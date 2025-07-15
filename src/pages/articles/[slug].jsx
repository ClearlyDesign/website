import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { MDXRemoteSerializeResult, serialize } from "next-mdx-remote/serialize"
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import * as Icons from "@heroicons/react/24/outline"
import { NextSeo } from "next-seo"

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/articles"))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src/articles", `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontmatter: data,
      mdxSource,
      slug: params.slug,
    },
  }
}

export default function Article({ frontmatter, mdxSource, slug }) {
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
    // Add any other custom React components you want to use in MDX
  }

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
                <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                  <Icons.RectangleStackIcon className="w-4 h-4" />
                  {frontmatter.series.join(", ")}
                </p>
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
        <div className="max-w-4xl mx-auto prose sm:prose-xl px-6 mt-12 sm:mt-16">
          <MDXRemote {...mdxSource} components={components} />
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
