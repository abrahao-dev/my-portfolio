"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Eye } from "lucide-react"

const projects = [
  {
    title: "Abrahao Labs",
    description: "Software house website showcasing services, portfolio, and contact information with modern UI/UX design principles and responsive layout for all devices.",
    tags: ["NextJS", "React", "TailwindCSS", "Responsive Design", "UI/UX", "Git", "Vercel"],
    link: "#",
    demoLink: "https://www.abrahaolabs.com.br"
  },
  {
    title: "Martin4Shop",
    description: "E-commerce platform developed with Shopify and Hydrogen, implementing advanced customization features and sales conversion optimization with personalized checkout experience.",
    tags: ["Shopify", "Hydrogen", "E-commerce", "Digital Marketing", "SEO", "Conversion Optimization", "Customer Support"],
    link: "#",
    demoLink: "https://martin4shop.com.br/"
  },
  {
    title: "Martina4Shop",
    description: "Complete e-commerce solution built with Shopify and Hydrogen, focused on performance and user experience, with custom checkout features.",
    tags: ["Shopify", "Hydrogen", "E-commerce"],
    link: "#",
    demoLink: "https://martina4shop.com.br/"
  },
  {
    title: "NerdShirts",
    description: "Complete e-commerce solution built with Shopify and Hydrogen, focused on performance and user experience, with custom checkout features.",
    tags: ["Shopify", "Hydrogen", "E-commerce"],
    link: "#",
    demoLink: "https://www.nerdshirts.com.br"
  },
  {
    title: "AlerteHit.Fr",
    description: "International e-commerce platform for the French market, developed with Shopify and Hydrogen. Complete implementation with multi-currency support and local adaptations.",
    tags: ["Shopify", "Hydrogen", "E-commerce"],
    link: "#",
    demoLink: "https://alertehit.fr/"
  },
  {
    title: "Vem Ve E-commerce",
    description: "Custom e-commerce implementation using Shopify and Hydrogen, focused on performance and conversion optimization, including advanced payment integrations.",
    tags: ["Shopify", "Hydrogen", "E-commerce"],
    link: "#",
    demoLink: "https://vemve.com.br/"
  },
  {
    title: "Sicon Insurance",
    description: "Corporate website with integrated insurance quotation system, developed in Next.js. Modern interface with WhatsApp integration, interactive information components and optimized responsive system.",
    tags: ["Next JS", "Tailwind CSS", "Portfolio"],
    link: "#",
    demoLink: "https://sicon.com.br/"
  },
  {
    title: "HDil Website",
    description: "Corporate platform for furniture industry company, developed in React JS. Modern interface with WhatsApp Business integration, optimized contact form and responsive system.",
    tags: ["React JS", "Tailwind CSS"],
    link: "https://github.com/abrahao-dev/hdil-master",
    demoLink: "https://hdil-2023.vercel.app/"
  },
  {
    title: "Euac44 Website",
    description: "Advanced digital portfolio with custom content management system. Automated integration with ArtStation via web scraping, dynamic pricing system and complete admin panel. Implementation with Redis for high performance.",
    tags: ["Next JS", "Tailwind CSS", "Database", "Bot Integration", "Web Scraping", "Dashboard Admin", "Portfolio"],
    link: "#",
    demoLink: "https://euac44.com/"
  },
  {
    title: "H3liovation Website",
    description: "Modern institutional website developed with HTML and Tailwind CSS, featuring optimized contact form and automated deployment on Vercel for maximum availability.",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
    link: "#",
    demoLink: "https://h3liovation-master.vercel.app/"
  },
  {
    title: "Venna Social",
    description: "Full Stack development and Shopify specialization for Venna, an international events and lifestyle startup. Implementation of theme customizations, integrations with Mailchimp via Zapier, and multilingual configuration.",
    tags: ["Shopify", "JavaScript", "CSS", "Liquid", "Zapier", "Multilingual", "UX/UI"],
    link: "#",
    demoLink: "#"
  },
  {
    title: "ImaginAI iOS App",
    description: "A mobile app built with Swift to create images by text with AI, featuring intuitive UI and integration with Hugging Face models for image generation.",
    tags: ["Swift", "iOS", "UIKit", "Hugging Face", "AI", "Image Generation"],
    link: "https://github.com/abrahao-dev/imaginAI",
    demoLink: "#"
  },
  {
    title: "Projeto Hopper",
    description: "CRUD Application for the Projeto Hopper v1 integrated with Arduino prototype, featuring real-time data visualization and cloud database integration.",
    tags: ["NextJS", "TailwindCSS", "SQL", "AWS", "Supabase", "Arduino", "IoT", "Vercel"],
    link: "https://github.com/abrahao-dev/projetohopperapp",
    demoLink: "https://projetohopperapp.vercel.app/"
  },
  {
    title: "Golsf - 2D Golf Game",
    description: "An interactive 2D golf game developed using HTML, CSS, and JavaScript, featuring multiple levels, physics engine, and a comprehensive scoring system.",
    tags: ["HTML", "CSS", "JavaScript", "Game Development", "Physics Engine", "Canvas API"],
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