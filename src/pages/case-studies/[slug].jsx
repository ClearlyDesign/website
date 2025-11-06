import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import {
  CalendarDaysIcon,
  ClockIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import Divider from "@/components/Divider"
import CaseStudyScreenshots from "@/components/CaseStudies/CaseStudyScreenshots"
import TestimonialCard from "@/components/CaseStudies/TestimonialCard"
import NavInternal from "@/components/Header/NavInternal"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import * as Icons from "@heroicons/react/24/outline"
import { NextSeo } from "next-seo"

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/case-studies"))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".mdx", "") },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src/case-studies", `${params.slug}.mdx`)
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

export default function CaseStudy({ frontmatter, mdxSource, slug }) {
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
    Divider,
    CaseStudyScreenshots: (props) => (
      <CaseStudyScreenshots
        {...props}
        screenshots={props.screenshots || frontmatter.screenshots}
      />
    ),
    TestimonialCard,
  }

  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | Case Studies | Clearly Design`}
        description={frontmatter.challenge}
        canonical={`https://clearly.design/case-studies/${slug}`}
        openGraph={{
          url: `https://clearly.design/case-studies/${slug}`,
          title: frontmatter.title,
          description: frontmatter.challenge,
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
            content: `Custom Internal Tools, SaaS Replacement, ${frontmatter.industry}, Case Study, Internal Tool Development`,
          },
        ]}
      />
      <article className="mb-40">
        <header
          className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group pb-20"
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
            <NavInternal />
          </div>
          <div className="mx-auto max-w-4xl px-6 pt-8 sm:pt-20 pb-10 sm:pb-14">
            <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
              {frontmatter.projectType && (
                <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                  <BriefcaseIcon className="w-4 h-4" />
                  {frontmatter.projectType}
                </p>
              )}
              {frontmatter.timeline && (
                <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                  <ClockIcon className="w-4 h-4" />
                  {frontmatter.timeline}
                </p>
              )}
              {frontmatter.investment && (
                <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                  <CurrencyDollarIcon className="w-4 h-4" />
                  {frontmatter.investment}
                </p>
              )}
              <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                <CalendarDaysIcon className="w-4 h-4" />
                {frontmatter.date}
              </p>
              <p className="text-xs text-white/50 tracking-wide flex items-center gap-2 font-mono uppercase">
                <BuildingOfficeIcon className="w-4 h-4" />
                {frontmatter.industry}
              </p>
            </div>
            <h1 className="mt-6 sm:mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl leading-snug sm:leading-tight">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-white/70">{frontmatter.client}</p>

            {frontmatter.results && frontmatter.results.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {frontmatter.results.map((result, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-xs text-blue-300 font-mono uppercase tracking-wide">{result.metric}</p>
                    <p className="text-2xl font-bold text-white mt-1">{result.value}</p>
                    <p className="text-xs text-white/70 mt-1">{result.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="max-w-4xl mx-auto prose sm:prose-lg px-6 mt-12 sm:mt-16">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
      <CTABlock
        ctaTitle="Ready to replace your SaaS stack?"
        ctaText="Let's map your workflow and identify where custom tools could save you thousands annually while giving you full control."
        ctaLabel="Schedule Workflow Audit"
      />
      <Footer />
    </>
  )
}
