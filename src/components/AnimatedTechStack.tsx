"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { motion } from "framer-motion"

interface Tech {
  name: string
  category: string
  icon: string
}

interface AnimatedTechStackProps {
  technologies: Tech[]
}

export function AnimatedTechStack({ technologies }: AnimatedTechStackProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 perspective-container"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {technologies.map((tech) => (
        <motion.div key={tech.name} variants={item}>
          <TiltCard
            className="h-full"
            tiltAmount={8}
            glareEnabled={true}
          >
            <div className="group p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default glass-card h-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.i
                  className={`${tech.icon} text-xl sm:text-2xl`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                  <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </motion.div>
  )
}
