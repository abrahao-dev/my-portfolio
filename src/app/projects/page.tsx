"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Prism - Subscription Manager",
    description: "A native iOS subscription management app built entirely with SwiftUI. Helps users organize recurring expenses, track subscriptions, receive smart renewal notifications, and visualize spending insights by category. Published on the App Store.",
    tags: ["Swift", "SwiftUI", "MVVM", "SwiftData", "WidgetKit", "Charts", "iCloud", "Notifications"],
    link: "https://github.com/abrahao-dev/prism",
    demoLink: "https://apps.apple.com/app/prism",
    hasCode: true,
    hasDemo: true
  },
  {
    title: "Treetracker iOS",
    description: "Open-source iOS app for Greenstand, helping fight climate change by tracking tree planting initiatives worldwide. Contributing to mobile features used by field workers and partner organizations globally.",
    tags: ["Swift", "SwiftUI", "UIKit", "MVVM", "Clean Architecture", "Combine", "Open Source"],
    link: "https://github.com/Greenstand/treetracker-ios",
    demoLink: "https://apps.apple.com/app/treetracker",
    hasCode: true,
    hasDemo: true
  },
  {
    title: "NutriScan",
    description: "iOS application focused on analyzing and organizing nutritional information. Built with Swift and UIKit following MVVM architecture, featuring REST API integration and local data persistence.",
    tags: ["Swift", "UIKit", "MVVM", "REST APIs", "Core Data", "ViewCode"],
    link: "https://github.com/abrahao-dev/nutriscan",
    demoLink: "",
    hasCode: true,
    hasDemo: false
  },
  {
    title: "ImaginAI",
    description: "Native iOS app for AI-powered image generation from text prompts. Features intuitive UI and integration with Hugging Face models for creative image generation.",
    tags: ["Swift", "iOS", "UIKit", "Hugging Face", "AI", "Image Generation", "REST APIs"],
    link: "https://github.com/abrahao-dev/imaginAI",
    demoLink: "https://apps.apple.com/app/imaginai",
    hasCode: true,
    hasDemo: true
  },
  {
    title: "Marvel Heroes App",
    description: "iOS application consuming the Marvel Heroes API, featuring networking with URLSession, data parsing with Codable, and UI composition with ViewCode and UIKit.",
    tags: ["Swift", "UIKit", "ViewCode", "URLSession", "Codable", "REST APIs"],
    link: "https://github.com/abrahao-dev/marvel-heroes",
    demoLink: "",
    hasCode: true,
    hasDemo: false
  },
  {
    title: "Agroger Pro",
    description: "iOS app for farm and agribusiness operations across Brazil. Features task management, inventory tracking, and operational routines for daily field operations.",
    tags: ["Swift", "SwiftUI", "REST APIs", "Agriculture", "Enterprise"],
    link: "https://github.com/abrahao-dev/agroger",
    demoLink: "https://apps.apple.com/app/agroger-pro",
    hasCode: false,
    hasDemo: true
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleProjectClick = (link: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 sm:mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient inline-block py-2">
          iOS Projects
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A collection of native iOS applications showcasing my expertise in Swift, SwiftUI, UIKit, and production-ready mobile development.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
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
            <Card className="h-full flex flex-col bg-secondary/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden group-hover:scale-[1.02]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl sm:text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow py-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary-foreground text-xs sm:text-sm hover:bg-primary/30 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 gap-2">
                {project.hasCode && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                                         onClick={() => handleProjectClick(project.link)}
                    disabled={!project.link || project.link === '#'}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                )}
                {project.hasDemo && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 group/btn"
                                         onClick={() => handleProjectClick(project.demoLink)}
                    disabled={!project.demoLink || project.demoLink === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
            <AnimatePresence>
              {hoveredProject === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg"
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