import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import { NextSeo } from "next-seo"
import {
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline"

const useCases = [
  {
    slug: "saas-launch-sites",
    title: "SaaS Launch Sites",
    description:
      "Launch your SaaS site in 2 weeks, not 2 months. Conversion-optimized design and development for pre-seed to Series A founders.",
    pricing: "$8-12K",
    timeline: "2 weeks",
    icon: RocketLaunchIcon,
    color: "indigo",
  },
  {
    slug: "internal-tools-replacement",
    title: "Internal Tool Replacement",
    description:
      "Stop paying per seat for tools that don't fit. Custom internal tools that replace multiple SaaS subscriptions and match your workflow.",
    pricing: "$12-20K",
    timeline: "3-4 weeks",
    icon: WrenchScrewdriverIcon,
    color: "cyan",
  },
  {
    slug: "mvp-rebuild",
    title: "MVP to Production Bridge",
    description:
      "Found product-market fit with no-code? Rebuild your proven MVP with proper architecture. Keep what works, fix what doesn't.",
    pricing: "$15-25K",
    timeline: "4-6 weeks",
    icon: CommandLineIcon,
    color: "violet",
  },
  {
    slug: "design-systems-ai",
    title: "Design Systems for AI Teams",
    description:
      "Ship fast with Cursor, Copilot, and v0 while staying visually consistent. Guidelines and prompts that keep AI-generated interfaces cohesive.",
    pricing: "$8-12K",
    timeline: "2-3 weeks",
    icon: SparklesIcon,
    color: "green",
  },
]

const colorClasses = {
  indigo: {
    icon: "text-indigo-500 bg-indigo-500/10",
  },
  cyan: {
    icon: "text-cyan-500 bg-cyan-500/10",
  },
  violet: {
    icon: "text-purple-500 bg-purple-500/10",
  },
  green: {
    icon: "text-green-500 bg-green-500/10",
  },
}

export default function UseCasesIndex() {
  const headerRef = useRef(null)
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <>
      <NextSeo
        title="Use Cases - Project-Based Design & Development | Clearly Design"
        description="Fixed-price design and development projects for SaaS launches, internal tools, MVP rebuilds, and AI-assisted teams. 2-6 week delivery."
        canonical="https://clearly.design/use-cases"
        openGraph={{
          url: "https://clearly.design/use-cases",
          title: "Use Cases - Project-Based Design & Development",
          description:
            "Fixed-price design and development projects for SaaS launches, internal tools, MVP rebuilds, and AI-assisted teams.",
          site_name: "Clearly Design",
        }}
      />

      <main className="min-h-screen bg-gray-100">
        {/* Header */}
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
          <div className="flex justify-between items-center py-6 px-6 relative z-10">
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
          <div className="mx-auto max-w-6xl px-6 pt-8 sm:pt-20 pb-10 sm:pb-14 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Project-Based Design & Development
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Fixed-price projects for SaaS launches, internal tools, MVP rebuilds, and
                design systems. 2-6 week delivery. You own everything.
              </p>
              <div className="mt-8">
                <a
                  href={process.env.NEXT_PUBLIC_BOOKING_LINK}
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-gradient-to-r from-green-300 to-lime-300 rounded-full hover:bg-green-300 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Use Cases Grid */}
        <div className="px-6 py-16 sm:py-24">
          <div className="row-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {useCases.map((useCase) => {
                const Icon = useCase.icon
                const colors = colorClasses[useCase.color]

                return (
                  <Link
                    key={useCase.slug}
                    href={`/use-cases/${useCase.slug}`}
                    className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4 h-full">
                      <div
                        className={`p-3 rounded-xl bg-gray-50 border border-gray-700/10 ${colors.icon}`}
                      >
                        <Icon className={`w-6 h-6 text-current`} />
                      </div>
                      <div className="flex-1 flex flex-col md:gap-2 justify-between h-full">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {useCase.title}
                          </h2>
                          <p className="text-gray-600 text-base leading-relaxed mb-4">
                            {useCase.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-7 text-sm text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
                            <span>{useCase.pricing}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
                            <span>{useCase.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-100">
        <CTABlock
          ctaTitle="Not sure which fits your needs?"
          ctaText="Book a 30-minute call and we'll help you determine the right approach for your project."
          ctaLabel="Schedule a Call"
        />
      </div>
      <Footer />
    </>
  )
}
