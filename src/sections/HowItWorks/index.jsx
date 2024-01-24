import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import { useEffect, useRef } from "react"
import {
  motion,
  useAnimation,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"

const HowItWorks = () => {
  return (
    <Element name="howItWorks">
      <section id="howItWorks" className="bg-gradient-to-br from-indigo-950 to-gray-950">
        <div className="row-wrapper row-y-spacing">
          <div className="row-skinny">
            <SectionHeader
              title="How it Works"
              description="Hand crafted premium designs, unlimited requests & revisions, for a flat monthly fee."
              titleStyles="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text"
              descriptionStyles="text-gray-400 text-xl"
            />
            <div className="text-gray-400 space-y-6 overflow-hidden">
              {items.map((item, i) => (
                <Item item={item} key={item.title} count={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default HowItWorks

const Item = ({ item, count }) => {
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
    <motion.div
      className="sm:grid grid-cols-[56px,1fr] gap-4 bg-gray-700/30 p-5 rounded-2xl group relative"
      key={item.number}
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, x: 175 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: 0.5 + count * 0.1 }}
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
      <div className="bg-transparent group-hover:bg-gradient-to-r from-green-300 to-lime-300 rounded-full group-hover:text-gray-900 grid place-content-center font-bold text-xl w-14 h-14 mb-4 border border-dashed border-lime-400 text-lime-400">
        {item.number}
      </div>
      <div>
        <h5 className="text-white">{item.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </motion.div>
  )
}

const items = [
  {
    number: 1,
    title: "Subscribe & Get Onboarded",
    description:
      "Once you&#39;re onboard, we get to work to setup your dedicated design board. This is where you can send, manage and review all requests.",
  },
  {
    number: 2,
    title: "Request New Design Work",
    description:
      "Use our guided process to submit new design work or reorder multiple requests to determine the highest priority item.",
  },
  {
    number: 3,
    title: "Get Beautiful Designs In Days",
    description:
      "With unlimited revisions, we keep crafting your design until you&#39;re 100% satisfied. Then we move on to the next request.",
  },
]
