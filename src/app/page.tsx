"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-background to-secondary/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Matheus Abrahão
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Backend & Mobile Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="group bg-primary/90 hover:bg-primary/100 transition-colors duration-300">
            <a href="/projects" className="flex items-center">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 transition-colors duration-300">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-20"
      >
        <div className="flex justify-center space-x-8">
          {["Swift", "C", "Java", "SQL"].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-lg font-medium text-primary/80"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">
          Connect with me
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-300">
            <Instagram size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  )
}