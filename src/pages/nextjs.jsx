import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
  useAnimation,
} from "framer-motion"
import { NextSeo } from "next-seo"
import {
  ArrowLongRightIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  SwatchIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import Footer from "@/components/Footer"
import CTABlock from "@/sections/CTABlock"

// ─── Animated Section wrapper ────────────────────────────────────────────────
const AnimatedSection = ({ children, className, delay = 0.25 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Mouse-glow card ─────────────────────────────────────────────────────────
const GlowCard = ({ children, className }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div onMouseMove={handleMouseMove} className={`group relative ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1.3M+", label: "Production websites" },
  { value: "27.6M", label: "Weekly npm downloads" },
  { value: "128K+", label: "GitHub stars" },
  { value: "#1", label: "React meta-framework" },
]

const companies = [
  "OpenAI",
  "Netflix",
  "Nike",
  "TikTok",
  "Stripe",
  "Notion",
  "GitHub",
  "Hulu",
  "Target",
  "Twitch",
  "Uber",
  "Loom",
  "Starbucks",
  "Walmart",
  "Airbnb",
  "Sonos",
]

const advantages = [
  {
    icon: ServerStackIcon,
    title: "React Server Components",
    description:
      "Render on the server, ship less JavaScript. Production case studies show 60% smaller client bundles and 25% lower infrastructure costs.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: BoltIcon,
    title: "Incremental Static Regeneration",
    description:
      "CDN-speed static pages that revalidate in the background. Your visitors get instant loads while content stays fresh.",
    color: "text-lime-500",
    bg: "bg-lime-500/10",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Built-In SEO",
    description:
      "Metadata API, automatic image optimization, flexible rendering (SSR/SSG/ISR), and strong Core Web Vitals support. Google rewards fast, crawlable sites.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: CpuChipIcon,
    title: "Edge Computing",
    description:
      "Vercel's global edge network serves content from the location closest to each visitor. Edge middleware enables personalization without latency.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    icon: RocketLaunchIcon,
    title: "Streaming SSR",
    description:
      "Parts of the UI stream to the browser as soon as they're ready. Users see meaningful content immediately, not a blank screen.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: CubeTransparentIcon,
    title: "App Router + Layouts",
    description:
      "File-system routing with nested layouts, loading states, and error boundaries. Build complex UIs with less boilerplate and more confidence.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
]

const performanceStats = [
  {
    stat: "53%",
    description: "of mobile visitors leave if your site takes more than 3 seconds to load",
    source: "Google",
  },
  {
    stat: "8.4%",
    description: "increase in conversions from just a 0.1-second improvement in load time",
    source: "Google / Deloitte",
  },
  {
    stat: "3x",
    description: "higher conversion rate for sites loading in 1 second vs. 5 seconds",
    source: "Cloudflare",
  },
  {
    stat: "47%",
    description:
      "of sites meet Google's Core Web Vitals thresholds. The rest lose up to 35% of revenue.",
    source: "DebugBear",
  },
]

const services = [
  {
    icon: PaintBrushIcon,
    title: "Next.js Website Design",
    items: [
      "Conversion-focused marketing sites",
      "Landing pages and product launches",
      "Responsive design across all breakpoints",
      "Scroll animations and micro-interactions",
    ],
  },
  {
    icon: CodeBracketIcon,
    title: "Component Development",
    items: [
      "Custom React components in TailwindCSS",
      "Design system creation and maintenance",
      "Server Component architecture",
      "Accessible, semantic markup",
    ],
  },
  {
    icon: SwatchIcon,
    title: "Product Design for Next.js",
    items: [
      "User experience research and audits",
      "Pixel-perfect interface design",
      "Developer hand-off with production specs",
      "Design tokens synced to your codebase",
    ],
  },
]

const aiTools = [
  {
    title: "v0 by Vercel",
    description:
      "AI-powered component generation used by 6M+ developers. We use it to rapidly prototype and iterate on Next.js components.",
  },
  {
    title: "Figma MCP + AI Agents",
    description:
      "AI coding assistants now query live Figma design data during development. We bridge design and code in real-time.",
  },
  {
    title: "Claude Code + Cursor",
    description:
      "AI-assisted development that accelerates implementation. 82% of developers now use AI tools daily, saving 3.6 hours per week.",
  },
  {
    title: "Design-to-Code Pipelines",
    description:
      "From Figma to production-ready Next.js components. We maintain pixel fidelity while shipping faster than any traditional workflow.",
  },
]

const faqItems = [
  {
    q: "Do you build in Next.js or just design for it?",
    a: "Both. Our Advanced plan includes custom React components built in TailwindCSS, ready to drop into your Next.js codebase. We design with implementation in mind, so what we deliver actually works in production, not just in Figma.",
  },
  {
    q: "We already have a Next.js app. Can you work within our existing codebase?",
    a: "Absolutely. We regularly integrate with existing design systems, component libraries, and codebases. On our Advanced plan, we work directly alongside your engineering team with continuous check-ins and seamless project management.",
  },
  {
    q: "How is this different from hiring a freelance Next.js developer?",
    a: "A freelance developer builds what you spec. We design AND build, bringing senior product design thinking to every component. You get strategy, design, and implementation from one team that understands both the pixels and the code.",
  },
  {
    q: "What about performance? Will the designs actually perform well?",
    a: "We design with Core Web Vitals in mind from day one. Every component is built for server-side rendering, minimal client JavaScript, and fast load times. We don't just make things look good. We make them fast.",
  },
  {
    q: "Can you help us migrate from another platform to Next.js?",
    a: "Yes. We've helped teams move from Webflow, WordPress, and custom stacks to Next.js. We handle the design refresh alongside the migration so you launch with a better product, not just a different framework.",
  },
  {
    q: "How fast can you deliver?",
    a: "With our subscription model, you'll see initial progress within a few business days. A typical marketing page goes from concept to production-ready in 1-2 weeks. Complex design systems take longer, but we ship incrementally so you see value immediately.",
  },
]

// ─── Page Component ──────────────────────────────────────────────────────────

export default function NextJSPage() {
  const heroRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const title = "Next.js Design & Development | Clearly Design"
  const description =
    "Expert Next.js design and development as a subscription. Pixel-perfect React components, conversion-focused websites, and AI-powered workflows. From design to production, faster."

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://clearly.design/nextjs"
        openGraph={{
          url: "https://clearly.design/nextjs",
          title,
          description,
          site_name: "Clearly Design",
          images: [
            {
              url: "https://clearly.design/images/og-image.png",
              width: 1200,
              height: 630,
              alt: "Clearly Design - Next.js Design & Development",
            },
          ],
        }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="bg-gradient-to-br from-indigo-950 to-gray-950 relative group overflow-hidden"
        ref={heroRef}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
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

        {/* Nav */}
        <div className="flex justify-between items-center py-6 px-6 relative z-10">
          <Link
            href="/"
            className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full p-2 inline-flex items-center justify-center w-14 h-14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
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
              className="hidden sm:flex transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 rounded-full"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 rounded-full"
            >
              Resources
            </Link>
            <Link
              href="/articles"
              className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 rounded-full"
            >
              Articles
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 rounded-full"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-5xl px-6 pt-12 sm:pt-24 pb-16 sm:pb-24 relative z-10">
          <p className="text-xs text-lime-400/80 tracking-wide flex items-center gap-2 font-mono uppercase mb-6">
            <CubeTransparentIcon className="w-4 h-4" /> Next.js Design + Development
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Your product deserves{" "}
            <span className="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text">
              Next.js expertise
            </span>{" "}
            that ships
          </h1>
          <p className="mt-6 text-xl text-white/70 max-w-2xl leading-relaxed">
            Clearly Design specializes in designing and building for Next.js. Pixel-perfect
            components, conversion-focused pages, and AI-powered workflows. From Figma to
            production, on a flat monthly subscription.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer hover:transform hover:-translate-y-1 inline-flex items-center justify-center text-gray-900 transition-all ease-in-out duration-200 rounded-full px-8 py-4 text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Book a Call
              <ArrowLongRightIcon className="w-6 h-6 ml-2 text-green-600" />
            </a>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white/40 transition-all ease-in-out duration-200 rounded-full px-8 py-4 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="mx-auto max-w-5xl px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Social Proof ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <AnimatedSection>
            <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wide mb-10">
              Next.js powers the world's best products
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-gray-400 font-semibold text-lg sm:text-xl tracking-tight"
                >
                  {company}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-8">
              ...and 1.3 million more production websites worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Next.js ─────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-gray-900">
                Why the best teams choose{" "}
                <span className="text-green-500">Next.js</span>
              </h2>
              <p className="text-gray-500 text-xl mt-4">
                Next.js isn't just a React framework. It's the production standard for teams
                that care about performance, SEO, and developer experience.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.15 + i * 0.08}>
                <div className="bg-gray-50 rounded-2xl p-7 h-full border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-5`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Impact ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-950 to-gray-950">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-white">
                Performance isn't optional.{" "}
                <span className="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text">
                  It's revenue.
                </span>
              </h2>
              <p className="text-gray-400 text-xl mt-4">
                Every millisecond of load time impacts your bottom line. Next.js gives you the
                tools. We make sure you use them right.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {performanceStats.map((item, i) => (
              <AnimatedSection key={item.stat} delay={0.2 + i * 0.1}>
                <GlowCard className="bg-gray-700/30 rounded-2xl p-8 border border-white/10">
                  <p className="text-5xl font-bold text-lime-400 tracking-tighter">
                    {item.stat}
                  </p>
                  <p className="text-white/80 text-lg mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-white/30 text-sm mt-3 font-mono uppercase tracking-wide">
                    {item.source}
                  </p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.6}>
            <div className="mt-12 bg-gradient-to-r from-green-500/10 to-lime-500/10 rounded-2xl p-8 border border-green-500/20 text-center">
              <p className="text-white text-xl font-semibold">
                E-commerce sites passing all Core Web Vitals see{" "}
                <span className="text-lime-400">15-30% higher conversion rates</span>
              </p>
              <p className="text-gray-400 mt-2">
                Only 47% of sites meet Google's thresholds. We build the other kind.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Deliver ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-gray-900">
                What we deliver for{" "}
                <span className="text-green-500">Next.js teams</span>
              </h2>
              <p className="text-gray-500 text-xl mt-4">
                Design and development that's built for your stack. Not generic mockups that
                need to be rebuilt from scratch.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.2 + i * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-gray-900 mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-5">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start text-gray-500">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Workflows ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs text-indigo-500 tracking-wide flex items-center justify-center gap-2 font-mono uppercase mb-4">
                <SparklesIcon className="w-4 h-4" /> AI-Powered Workflow
              </p>
              <h2 className="text-gray-900">
                We use AI to move{" "}
                <span className="text-indigo-600">faster than any traditional agency</span>
              </h2>
              <p className="text-gray-500 text-xl mt-4">
                41% of all code is now AI-generated. We've built our workflow around the best
                AI tools available, so you get better results in less time.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {aiTools.map((tool, i) => (
              <AnimatedSection key={tool.title} delay={0.2 + i * 0.1}>
                <div className="bg-white rounded-2xl p-7 h-full border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{tool.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Advantage ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-950 to-gray-950">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-white">
                Senior Next.js design talent.{" "}
                <span className="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text">
                  Without the $190K price tag.
                </span>
              </h2>
              <p className="text-gray-400 text-xl mt-4">
                A full-time senior product designer costs $135K-$190K per year with benefits.
                A design subscription gives you the same caliber of work for a fraction of the cost.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: CurrencyDollarIcon,
                title: "Predictable Cost",
                description:
                  "Flat monthly fee starting at $4,995/mo. No surprise invoices, no scope creep, no benefits overhead. Pause or cancel anytime.",
              },
              {
                icon: ClockIcon,
                title: "Skip the Hiring Cycle",
                description:
                  "Hiring a senior designer takes 3-6 months. Start seeing design progress within days of subscribing. No recruiting, no onboarding.",
              },
              {
                icon: UserGroupIcon,
                title: "Team-Level Expertise",
                description:
                  "Access senior design and development expertise across branding, UI, UX, and code. One subscription, a full range of skills.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={0.2 + i * 0.15}>
                <GlowCard className="bg-gray-700/30 rounded-2xl p-8 border border-white/10 h-full">
                  <item.icon className="w-8 h-8 text-lime-400 mb-5" />
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-gray-900">How it works</h2>
              <p className="text-gray-500 text-xl mt-4">
                From subscribe to shipped. No contracts, no SOWs, no drawn-out processes.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              {
                number: 1,
                title: "Subscribe and get onboarded",
                description:
                  "Choose Standard or Advanced. We set up your dedicated design board where you can submit, manage, and review all requests.",
              },
              {
                number: 2,
                title: "Submit your Next.js design work",
                description:
                  "New marketing pages, component designs, UX improvements, design system work. Submit requests and reorder priorities anytime.",
              },
              {
                number: 3,
                title: "Get production-ready designs in days",
                description:
                  "We design with Next.js implementation in mind. On Advanced, we deliver TailwindCSS React components ready for your codebase.",
              },
              {
                number: 4,
                title: "Iterate until it's perfect",
                description:
                  "Unlimited revisions. We keep refining until you're 100% satisfied, then move on to the next request in your queue.",
              },
            ].map((step, i) => (
              <AnimatedSection key={step.number} delay={0.2 + i * 0.1}>
                <div className="sm:grid grid-cols-[56px,1fr] gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="bg-gradient-to-r from-green-300 to-lime-300 rounded-full grid place-content-center font-bold text-xl w-14 h-14 mb-4 sm:mb-0 text-gray-900">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-gray-900">Frequently asked questions</h2>
              <p className="text-gray-500 text-xl mt-4">
                Common questions from teams evaluating Next.js design and development partners.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.05}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTABlock
        ctaTitle="Ready to build your Next.js project with us?"
        ctaText="Book a 30-minute discovery call. We'll talk through your project, your stack, and whether we're the right fit. No pressure, just clarity."
        ctaLabel="Book a Call"
      />
      <Footer />
    </>
  )
}
