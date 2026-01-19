"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TiltCard } from "@/components/ui/tilt-card"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github, TrendingUp } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Martin E-commerce Platform",
    problem: "Needed a scalable, automated e-commerce operation with minimal overhead",
    solution: "Built a complete e-commerce platform using Shopify, React/Hydrogen, and custom automation workflows",
    impact: "$90,000+ in total revenue, fully automated operations, strong customer retention",
    tags: ["Shopify", "React", "Hydrogen", "Remix", "Tailwind CSS", "E-commerce", "Automation"],
    link: "",
    demoLink: "https://martin4shop.com.br",
    hasCode: false,
    hasDemo: true,
    featured: true
  },
  {
    title: "CLEATUS AI Platform",
    problem: "Companies struggled to analyze and win government contracts efficiently",
    solution: "Built AI-powered chatbot and data pipelines using LangGraph, LangChain, and OpenAI for structured contract analysis",
    impact: "Enabled natural-language queries over contract data, automated PDF analysis and SAM.gov integration",
    tags: ["LangChain", "LangGraph", "OpenAI", "Python", "PostgreSQL", "AI/ML", "Data Pipelines"],
    link: "",
    demoLink: "",
    hasCode: false,
    hasDemo: false,
    featured: true
  },
  {
    title: "Luxury Fashion E-commerce (Virtustant)",
    problem: "International fashion brand needed improved platform reliability and multi-channel integrations",
    solution: "Engineered Shopify customizations, platform integrations (Amazon, Google Merchant, Meta Ads), and automation flows",
    impact: "Improved Core Web Vitals across 1000+ products, streamlined multi-channel operations",
    tags: ["Shopify", "Liquid", "JavaScript", "Meta CAPI", "Google Merchant", "Amazon Integration"],
    link: "",
    demoLink: "",
    hasCode: false,
    hasDemo: false,
    featured: true
  },
  {
    title: "Clecci Digital Storefront (Canada)",
    problem: "Canadian fashion retailer needed advanced customizations beyond standard Shopify theme limitations",
    solution: "Re-architected PDP with reactive variant selection, engineered tiered pricing system, rebuilt Add-to-Cart with AJAX and upsell modules",
    impact: "Increased Average Order Value through tiered pricing, improved conversion rate and perceived performance",
    tags: ["Shopify", "JavaScript", "Liquid", "AJAX", "E-commerce", "Conversion Optimization"],
    link: "",
    demoLink: "",
    hasCode: false,
    hasDemo: false,
    featured: true
  },
  {
    title: "Onmed Farmacêutica Digital Platform",
    problem: "Pharmaceutical distributor needed digital modernization with legacy infrastructure issues",
    solution: "Built high-performance institutional SPA using React.js, Next.js, and Vite with mobile-first design and lead-conversion hub",
    impact: "Achieved strong Lighthouse scores, resolved DNS/domain issues, streamlined social media lead capture",
    tags: ["React", "Next.js", "Vite", "Tailwind CSS", "SEO", "Glassmorphism"],
    link: "",
    demoLink: "",
    hasCode: false,
    hasDemo: false,
    featured: true
  },
  {
    title: "NFT Marketplace",
    problem: "Needed a complete decentralized marketplace for NFT trading with modern architecture",
    solution: "Built full-stack Web3 dApp with React frontend, Go backend, and Solidity smart contracts",
    impact: "Complete marketplace with wallet integration, minting, and trading functionality",
    tags: ["React", "Go", "Solidity", "Web3", "TypeScript", "Smart Contracts"],
    link: "https://github.com/abrahao-dev/nft-marketplace",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "AbrahaoLabs AI Chatbot",
    problem: "Needed an AI-powered chatbot for digital marketing with document support",
    solution: "Built chatbot using LangChain, Hugging Face fine-tuning (DistilGPT2), and RAG with PDF/CSV/TXT support",
    impact: "Intelligent document-based Q&A for marketing automation",
    tags: ["Python", "LangChain", "Hugging Face", "RAG", "Flask", "NLP"],
    link: "https://github.com/abrahao-dev/abrahao-labs-chatbot",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "EHR Integration System",
    problem: "Healthcare providers needed standardized patient data mapping to EHR systems",
    solution: "Built internal tool for mapping and submitting patient data to Electronic Health Record systems",
    impact: "Fully tested, scalable, and production-ready integration with multiple EHR providers",
    tags: ["TypeScript", "Node.js", "React", "Express", "Healthcare", "API Integration"],
    link: "https://github.com/abrahao-dev/ehr-integration",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "Martin Auto-Fulfillment",
    problem: "Manual order fulfillment between Shopify and Shopee was time-consuming",
    solution: "Built custom automation integrating Shopify orders with Shopee for streamlined fulfillment and tracking",
    impact: "Automated fulfillment workflow, address formatting, and order tracking",
    tags: ["Python", "Streamlit", "Playwright", "Shopify API", "Automation"],
    link: "https://github.com/abrahao-dev/martin-autofulfill",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "Smart Irrigation Dashboard",
    problem: "Farmers needed real-time monitoring of soil conditions and remote irrigation control",
    solution: "Built real-time dashboard with React and MQTT for IoT sensor data visualization",
    impact: "Monitor soil moisture, temperature, rainfall, and control irrigation remotely",
    tags: ["React", "MQTT", "IoT", "ESP32", "Tailwind CSS", "Real-time"],
    link: "https://github.com/abrahao-dev/smart-irrigation-dashboard",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "Real-time Messaging Platform",
    problem: "Needed a scalable messaging solution with modern architecture",
    solution: "Built with Java Spring Boot, RabbitMQ, React, and Redux for real-time updates",
    impact: "Scalable messaging with robust backend services and modern UI",
    tags: ["Java", "Spring Boot", "RabbitMQ", "React", "Redux", "Real-time"],
    link: "https://github.com/abrahao-dev/messaging-app",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "Bitcoin Market Trends Analysis",
    problem: "Investors needed data-driven insights into Bitcoin price patterns",
    solution: "Built analysis tool using clustering and pattern recognition on historical Bitcoin data",
    impact: "Uncovered market trends and potential price movements through ML analysis",
    tags: ["Python", "Machine Learning", "Clustering", "Jupyter", "Data Visualization"],
    link: "https://github.com/abrahao-dev/BitcoinMarketTrends",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "Venna Shopify Theme",
    problem: "Needed a customizable Shopify 2.0 theme following best practices",
    solution: "Built modern Shopify theme with Liquid, sections, and structured reusable components",
    impact: "Demonstrates best practices in Shopify theme development",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce"],
    link: "https://github.com/abrahao-dev/venna-shopify-theme",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
  {
    title: "CPF/CNPJ Validator (Rust)",
    problem: "Needed a fast, reliable validator for Brazilian tax IDs",
    solution: "Built CLI tool in Rust with automatic formatting and official algorithms",
    impact: "Fast CLI validation with full formatting support for Brazilian documents",
    tags: ["Rust", "CLI", "Brazil", "Validation"],
    link: "https://github.com/abrahao-dev/cpf-cnpj-validator",
    demoLink: "",
    hasCode: true,
    hasDemo: false,
    featured: false
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleProjectClick = (link: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient inline-block py-2">
          Full Stack Projects
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Production systems I&apos;ve built and shipped. Each project showcases real business impact—from $90K+ in e-commerce revenue to AI-powered platforms serving enterprise clients.
      </motion.p>

      {/* Featured Projects */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Featured Work
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <TiltCard className="h-full" tiltAmount={5} glareEnabled={true}>
                <Card className="h-full flex flex-col bg-gradient-to-br from-primary/5 to-secondary/10 backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default" className="bg-primary/20 text-primary text-xs">Featured</Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow py-2 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-sm text-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Solution</p>
                      <p className="text-sm text-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Impact</p>
                      <p className="text-sm text-foreground font-medium">{project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 5).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-secondary/50 text-xs hover:bg-secondary/70 transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="secondary" className="bg-secondary/50 text-xs">
                          +{project.tags.length - 5}
                        </Badge>
                      )}
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
                        View Live
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Open Source & More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + featuredProjects.length) * 0.05 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index + featuredProjects.length)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-full flex flex-col bg-secondary/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden group-hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-sm text-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-sm text-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Impact</p>
                    <p className="text-sm text-foreground font-medium">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/20 text-primary-foreground text-xs hover:bg-primary/30 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary-foreground text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
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
                      View Live
                    </Button>
                  )}
                </CardFooter>
              </Card>
              <AnimatePresence>
                {hoveredProject === index + featuredProjects.length && (
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
        </div>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Card className="max-w-xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
          <CardContent className="py-8">
            <Github className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">More on GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Check out more projects, contributions, and experiments on my GitHub profile.
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open('https://github.com/abrahao-dev', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}