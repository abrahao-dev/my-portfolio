"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      // z-[60]: the sticky header is also z-50 and paints later in the DOM, so
      // at z-50 the bar was drawn behind it and never visible.
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
      style={{ scaleX }}
    />
  )
}
