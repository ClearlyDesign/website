import { useRef, useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"
import { NextSeo } from "next-seo"
import {
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  CommandLineIcon,
  LightBulbIcon,
  PaintBrushIcon,
  ArrowRightCircleIcon,
  BeakerIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

const filters = {
  "All Project Types": [],
  "Build Something New": ["ux-first-mvp", "saas-launch-sites"],
  "Improve What Exists": ["product-redesigns", "website-redesigns", "mvp-rebuild"],
  "Infrastructure & Tools": ["design-systems-ai", "internal-tools-replacement"],
}

const projects = [
  {
    slug: "ux-first-mvp",
    title: "UX-First MVP Development",
    description:
      "Build an MVP that people can actually use. When your concept is too complex for no-code and AI generators keep producing unusable interfaces.",
    pricing: "$15-25K",
    timeline: "4-6 weeks",
    icon: LightBulbIcon,
    color: "yellow",
    stage: "Pre-revenue",
    idealFor: ["First-time founders", "Complex concepts", "Beyond no-code"],
    category: "Product",
    outcomes: ["Validate demand", "Test with users", "Learn fast", "Start to monetize"],
    includes: ["User flows", "Core features", "Beta testing", "Clean code"],
    bestFor: "Too complex for no-code, need proper UX",
  },
  {
    slug: "saas-launch-sites",
    title: "SaaS Launch Sites",
    description:
      "Launch your SaaS site in 2 weeks, not 2 months. Conversion-optimized design and development for pre-seed to Series A founders.",
    pricing: "$8-12K",
    timeline: "2 weeks",
    icon: RocketLaunchIcon,
    color: "indigo",
    stage: "Launch",
    idealFor: ["Pre-seed founders", "Technical co-founders", "First-time launchers"],
    category: "Marketing",
    outcomes: [
      "Convert visitors",
      "Look credible",
      "Ship fast",
      "Gain online visibility",
    ],
    includes: [
      "Conversion optimization",
      "Responsive design",
      "AEO/SEO setup",
      "Analytics",
    ],
    bestFor: "Need a marketing site before launch",
  },
  {
    slug: "product-redesigns",
    title: "Product UI/UX Redesign",
    description:
      "UX audit and UI redesign for working products. We deliver modern designs and UX strategy your team implements.",
    pricing: "$15-25K",
    timeline: "4-6 weeks",
    icon: PaintBrushIcon,
    color: "purple",
    stage: "Growth",
    idealFor: ["Revenue-stage products", "Dated UI/UX", "Have dev team"],
    category: "Product",
    outcomes: [
      "Modern UI design",
      "Better UX flows",
      "Design system",
    ],
    includes: ["UX audit", "Figma designs", "Design system", "Dev handoff docs"],
    bestFor: "Product needs design work, not rebuild",
  },
  {
    slug: "design-systems-ai",
    title: "Design Systems for AI Teams",
    description:
      "Ship fast with Cursor, Claude Code, and v0 while staying visually consistent. Guidelines and prompts that keep AI-generated interfaces cohesive.",
    pricing: "$8-12K",
    timeline: "2-4 weeks",
    icon: SparklesIcon,
    color: "green",
    stage: "Growth",
    idealFor: ["AI-assisted teams", "Lean startups", "Solo founders"],
    category: "Infrastructure",
    outcomes: [
      "Stay consistent",
      "Ship faster",
      "No designer needed",
      "Differentiate yourself",
    ],
    includes: ["AI prompt library", "Design tokens", "Component patterns", "Figma files"],
    bestFor: "Building with AI but everything looks different",
  },
  {
    slug: "internal-tools-replacement",
    title: "Internal Tool Replacement",
    description:
      "Stop paying per seat for tools that don't fit. Custom internal tools that replace multiple SaaS subscriptions and match your workflow.",
    pricing: "$12-20K",
    timeline: "3-4 weeks",
    icon: WrenchScrewdriverIcon,
    color: "blue",
    stage: "Operational",
    idealFor: ["Operations teams", "Agencies", "High SaaS costs"],
    category: "Operations",
    outcomes: ["Reduce costs", "Match workflow", "Own the code", "Custom made"],
    includes: [
      "Workflow automation",
      "SaaS integrations",
      "Custom forms",
      "Documentation",
    ],
    bestFor: "Paying too much for tools that don't fit",
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
    stage: "Validated",
    idealFor: ["No-code graduates", "Bubble users", "Post-PMF founders"],
    category: "Product",
    outcomes: [
      "Scale properly",
      "Hire engineers",
      "Reduce costs",
      "Add new features fast",
    ],
    includes: [
      "Architecture planning",
      "Data migration",
      "Feature parity",
      "Code handoff",
    ],
    bestFor: "Hit limits with Bubble or Airtable",
  },
  {
    slug: "website-redesigns",
    title: "Website Rebuilds",
    description:
      "Rebuild your marketing site on the right platform. We help you choose between Framer (no-code) or Next.js (custom), then rebuild from scratch.",
    pricing: "$8-12K",
    timeline: "3-6 weeks",
    icon: ArrowPathIcon,
    color: "teal",
    stage: "Growth",
    idealFor: ["Outdated tech stack", "Hard to maintain", "Platform migration"],
    category: "Marketing",
    outcomes: ["Design refresh", "Modern platform", "Easy updates", "Better conversion"],
    includes: ["Platform strategy", "Custom design", "Full rebuild", "Team training"],
    bestFor: "Outdated site needing modern foundation",
  },
]

const colorClasses = {
  indigo: {
    icon: "text-indigo-500 bg-indigo-500/10",
  },
  blue: {
    icon: "text-blue-500 bg-blue-500/10",
  },
  violet: {
    icon: "text-purple-500 bg-purple-500/10",
  },
  green: {
    icon: "text-green-500 bg-green-500/10",
  },
  yellow: {
    icon: "text-yellow-500 bg-yellow-500/10",
  },
  purple: {
    icon: "text-purple-500 bg-purple-500/10",
  },
  teal: {
    icon: "text-teal-500 bg-teal-500/10",
  },
}

export default function ProjectsIndex() {
  const headerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState("All Project Types")
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const filteredProjects =
    filters[activeFilter].length === 0
      ? projects
      : projects.filter((p) => filters[activeFilter].includes(p.slug))

  return (
    <>
      <NextSeo
        title="Projects - Project-Based Design & Development | Clearly Design"
        description="Fixed-price design and development projects for SaaS launches, internal tools, MVP rebuilds, and AI-assisted teams. 2-6 week delivery."
        canonical="https://clearly.design/projects"
        openGraph={{
          url: "https://clearly.design/projects",
          title: "Projects - Project-Based Design & Development",
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

        {/* Filter Tabs */}
        <div className="px-6 pt-12 pb-8">
          <div className="row-inner">
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-6">
              <div className="flex flex-wrap gap-2">
                {Object.keys(filters).map((filterName) => (
                  <button
                    key={filterName}
                    onClick={() => setActiveFilter(filterName)}
                    className={`px-3 flex items-center gap-2 w-full md:w-auto py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === filterName
                        ? "bg-gray-900 text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    {activeFilter === filterName ? (
                      <CheckCircleIcon className="w-4 h-4" />
                    ) : null}
                    {filterName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="px-6 pb-16 sm:pb-24">
          <div className="row-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.map((project) => {
                const Icon = project.icon
                const colors = colorClasses[project.color]

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                  >
                    <div className="flex flex-col items-start gap-4 h-full">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gray-50 border border-gray-700/10 ${colors.icon}`}
                        >
                          <Icon className={`w-6 h-6 text-current`} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {project.title}
                        </h2>
                      </div>
                      <div className="flex-1 flex flex-col md:gap-2 justify-between h-full">
                        <div>
                          <p className="text-gray-600 text-base leading-relaxed mb-4">
                            {project.description}
                          </p>
                          <p className="text-gray-600 text-base leading-relaxed mb-4">
                            Ideal for {project.idealFor.join(", ")}.
                          </p>
                        </div>
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 divide-y md:divide-y-0 divide-x-0 divide-gray-200 border border-gray-200 rounded-xl">
                            <div className="text-sm text-gray-500 p-4">
                              <span className="text-xs uppercase tracking-wider text-gray-500 mb-4 block">
                                Includes
                              </span>
                              <ul className="list-disc list-inside space-y-1">
                                {project.includes.map((include) => (
                                  <li key={include}>{include}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="text-sm text-gray-500 p-4">
                              <span className="text-xs uppercase tracking-wider text-gray-500 mb-4 block">
                                Outcomes
                              </span>
                              <ul className="list-disc list-inside space-y-1">
                                {project.outcomes.map((outcome) => (
                                  <li key={outcome}>{outcome}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-start mt-5 gap-3 md:gap-7 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
                              <span>{project.pricing}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
                              <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {project.stage === "Pre-revenue" && (
                                <BeakerIcon className="w-5 h-5 text-gray-400" />
                              )}
                              {project.stage === "Growth" && (
                                <RocketLaunchIcon className="w-5 h-5 text-gray-400" />
                              )}
                              {project.stage === "Launch" && (
                                <RocketLaunchIcon className="w-5 h-5 text-gray-400" />
                              )}
                              {project.stage === "Operational" && (
                                <WrenchScrewdriverIcon className="w-5 h-5 text-gray-400" />
                              )}
                              {project.stage === "Validated" && (
                                <CheckBadgeIcon className="w-5 h-5 text-gray-400" />
                              )}
                              <span>{project.stage} Stage</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRightCircleIcon className="w-7 h-7 text-gray-500" />
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
