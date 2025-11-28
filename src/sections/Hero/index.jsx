import Header from "../../components/Header"
import { Link } from "react-scroll"
import { useRef, useEffect } from "react"
import {
  useInView,
  useAnimation,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="row-wrapper bg-gradient-to-br from-indigo-950 via-gray-950 to-gray-900 relative group overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-950/30 pointer-events-none z-[1]" />

      {/* Interactive mouse gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-[2]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(134, 239, 172, 0.08),
              rgba(99, 102, 241, 0.06) 40%,
              transparent 70%
              )
              `,
        }}
      />

      {/* Wireframe background */}
      <div className="bg-hero-wireframe absolute left-0 top-0 w-full h-full z-0 bg-cover bg-no-repeat opacity-15 group-hover:opacity-30 transition-all duration-700 bg-[30%] lg:bg-top" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.015] z-[1] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}} />
      <div className="row-inner z-10 relative">
        <Header />
        <div className="text-center pt-24 pb-20 md:pb-48">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-r from-green-300 via-emerald-200 to-lime-300 inline-block text-transparent bg-clip-text leading-tight px-5 drop-shadow-[0_0_40px_rgba(134,239,172,0.15)]"
          >
            Design clarity
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
             for growing companies
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto font-light"
          >
            Change the way you source website and product design, forever.
          </motion.p>
          <motion.div
            className="flex space-y-5 sm:space-y-0 sm:space-x-5 mx-auto mt-12 flex-col sm:flex-row justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              target="_blank"
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              className="group relative bg-gradient-to-br from-green-400 via-emerald-300 to-lime-400 hover:cursor-pointer transition-all duration-500 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-green-300 hover:shadow-[0_0_40px_rgba(134,239,172,0.4)] hover:scale-[1.02] w-full sm:w-auto tracking-tight overflow-hidden"
              style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:cursor-pointer transition-all duration-500 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-light focus-visible:outline-green-300 hover:bg-white/10 hover:scale-[1.02] w-full sm:w-auto tracking-tight"
              style={{transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'}}
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Hero
