import { useRef, useEffect } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

const AniCardFlip = ({ children, delay = 0.75 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, rotateX: 75, scaleX: 0.9 },
          visible: { opacity: 1, rotateX: 0, scaleX: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
export default AniCardFlip
