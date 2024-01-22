import { useEffect, useRef } from "react"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
  useAnimation,
} from "framer-motion"

const CTABlock = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <section className="row-wrapper row-b-spacing">
      <motion.div
        className="row-inner bg-gradient-to-tr from-indigo-950 to-gray-950 rounded-2xl px-5 sm:py-10 text-center group relative"
        ref={ref}
        onMouseMove={handleMouseMove}
        variants={{
          hidden: { opacity: 0, scale: 0.75 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
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
        <div className="py-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-white">Let&#39;s get clear on your design</h2>
          <p className="text-xl text-gray-400">
            Jump on a quick discovery call to find out why Clearly Design is different and
            how your team can change the way you source design, forever.
          </p>
          <div className="pt-5">
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              className="bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer hover:transform hover:-translate-y-1.5 inline-flex items-center bg-yellow-300 text-gray-900 hover:bg-yellow-400 transition-all ease-in-out duration-200 rounded-full bg-transparent px-8 py-4 text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 w-full justify-center sm:w-auto"
            >
              Book a Call
              <ArrowLongRightIcon className="w-7 h-7 ml-2 text-green-600" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default CTABlock
