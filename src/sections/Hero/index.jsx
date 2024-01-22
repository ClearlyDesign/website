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
      className="row-wrapper bg-gradient-to-br from-indigo-950 to-gray-950 relative group"
      ref={ref}
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
      <div className="bg-hero-wireframe absolute left-0 top-0 w-full h-full z-0 bg-cover bg-no-repeat opacity-20 group-hover:opacity-100 transition-all ease-in-out duration-500 bg-[30%] lg:bg-top" />
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
            transition={{ duration: 0.3, delay: 0.25 }}
            className="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text"
          >
            Pixel-Perfect
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-white"
          >
            Design Subscription
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.75 }}
            className="text-lg sm:text-2xl text-gray-400 mt-5"
          >
            Change the way you source website and product design, forever.
          </motion.p>
          <motion.div
            className="flex space-y-5 sm:space-y-0 sm:space-x-5 mx-auto mt-10 flex-col sm:flex-row justify-center"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <a
              target="_blank"
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              className="bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-normal focus-visible:outline-green-300 hover:transform hover:-translate-y-1.5 w-full sm:w-auto tracking-tight"
            >
              Book a Call
            </a>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-gray-500/30 border border-gray-500/30 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-light focus-visible:outline-green-300 focus-visible:text-green-300 hover:transform hover:-translate-y-1.5 w-full sm:w-auto tracking-tight"
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
