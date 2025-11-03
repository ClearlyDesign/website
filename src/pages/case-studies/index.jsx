import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {
  BriefcaseIcon,
} from "@heroicons/react/24/outline"
import Footer from "@/components/Footer"
import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { NextSeo } from "next-seo"
import CaseStudyCard from "@/components/CaseStudies/CaseStudyCard"

const CaseStudies = ({ caseStudies }) => {
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const title = "Case Studies | Clearly Design"
  const description =
    "Real-world examples of clear design solving real world problems for our customers."
  const url = "https://clearly.design/case-studies"

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
            content: `Custom Internal Tools, SaaS Replacement, Case Studies, Internal Tool Development, Custom Software, Agency Tools, Operations Software`,
          },
        ]}
      />
      <main className="min-h-screen bg-gray-100">
        <header
          className="bg-gradient-to-br from-emerald-950 to-gray-950 relative group"
          ref={headerRef}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
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
              <Link
                href="/projects"
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Projects
              </Link>
              <Link
                href="/case-studies"
                className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
              >
                Case Studies
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
              <BriefcaseIcon className="w-4 h-4" /> Case Studies
            </p>
            <h1 className="text-4xl mt-4 font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
              Real-world examples of custom design & development solving real world
              problems
            </h1>
            <p className="mt-6 text-lg text-white/70">
              See how clear design & development can solve real world problems for your
              business.
            </p>
          </div>
        </header>
        <div className="bg-gray-100 py-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl px-6 pb-16 sm:pb-24">
            <div className="row-inner">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy?.title} {...caseStudy} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />

    </>
  )
}
export default CaseStudies

export async function getStaticProps() {
  const caseStudiesDir = path.join(process.cwd(), "src/case-studies")
  const files = fs.readdirSync(caseStudiesDir)
  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(caseStudiesDir, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        ...data,
        link: `/case-studies/${filename.replace(/\.mdx$/, "")}`,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return { props: { caseStudies } }
}
