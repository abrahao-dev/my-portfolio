"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Eye } from "lucide-react"

const projects = [
  {
    title: "ImaginAI IOS App",
    description: "A mobile app built with Swift to create images by text with AI",
    tags: ["Swift", "iOS", "UIKit", "Hugging Face", "Git", "Vercel"],
    link: "https://github.com/abrahao-dev/imaginAI",
    demoLink: "#"
  },
  {
    title: "Projeto Hopper",
    description: "CRUD Application for the Projeto Hopper v1 integrated with Arduino prototype",
    tags: ["NextJS", "TailwindCSS", "SQL","AWS", "Supabase", "Arduino", "Git", "Vercel"],
    link: "https://github.com/abrahao-dev/projetohopperapp",
    demoLink: "https://projetohopperapp.vercel.app/"
  },
  {
    title: "HDIL COMÉRCIO",
    description: "Website for a local commerce integrated with LojaZap Platform",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Git", "Vercel"],
    link: "https://github.com/abrahao-dev/hdil-master",
    demoLink: "https://hdil-2023.vercel.app/"
  },
  {
    title: "Martin4Shop",
    description: "E-commerce for a digital business using Shopify",
    tags: ["Shopify", "Canva", "Digital Marketing", "Automations","SEO", "Social Media", "Customer Support"],
    link: "#",
    demoLink: "https://martin4shop.com.br/"
  },
  {
    title: "Golsf - 2D Golf Game",
    description: "An interactive 2D golf game developed using HTML, CSS, and JavaScript, featuring multiple levels and a scoring system.",
    tags: ["HTML", "CSS", "JavaScript", "Game Development"],
    link: "https://github.com/abrahao-dev/golsf-2d-game",
    demoLink: "https://golsf-2d-game.vercel.app/"
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 sm:mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block py-2">
          My Projects
        </span>
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Card className="h-full flex flex-col bg-secondary/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl sm:text-2xl font-semibold leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow py-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/20 text-primary-foreground text-xs sm:text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button 
                  variant="outline" 
                  className="flex-1 mr-2 text-sm sm:text-base"
                  onClick={() => handleProjectClick(project.link)}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button 
                  variant="default" 
                  className="flex-1 ml-2 text-sm sm:text-base"
                  onClick={() => handleProjectClick(project.demoLink)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
            <AnimatePresence>
              {hoveredProject === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}