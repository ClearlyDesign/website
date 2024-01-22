import { useRef, useEffect } from "react"
import { useInView, motion, useAnimation } from "framer-motion"

const SectionHeader = ({
  title,
  description,
  titleStyles,
  descriptionStyles = "text-gray-500 text-xl",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className="text-center max-w-[900px] mx-auto space-y-2 mb-16" ref={ref}>
      <motion.h2
        dangerouslySetInnerHTML={{ __html: title }}
        className={titleStyles}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.25 }}
      />
      <motion.p
        className={descriptionStyles}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {description}
      </motion.p>
    </div>
  )
}
export default SectionHeader
