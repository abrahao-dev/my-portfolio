"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Database,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Zap
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using modern technologies like TypeScript, React, Next.js, and Golang.",
    icon: Code,
    features: [
      "Custom web applications",
      "REST/GraphQL APIs",
      "Database design & optimization",
      "Authentication & authorization",
      "Performance optimization",
      "Clean architecture implementation"
    ],
    technologies: ["TypeScript", "React", "Next.js", "Golang", "Node.js", "PostgreSQL"],
    pricing: "From $50/hour",
    duration: "2-8 weeks"
  },
  {
    title: "E-commerce Solutions",
    description: "Complete e-commerce platform development with Shopify, custom integrations, and conversion optimization.",
    icon: ShoppingCart,
    features: [
      "Shopify store development",
      "Custom theme customization",
      "Payment gateway integration",
      "Inventory management",
      "Marketing automation",
      "Analytics & reporting"
    ],
    technologies: ["Shopify", "Hydrogen", "Liquid", "JavaScript", "CSS", "Zapier"],
    pricing: "From $3,000",
    duration: "3-6 weeks"
  },
  {
    title: "AI Integration",
    description: "Intelligent solutions powered by machine learning, LLMs, and AI technologies for enhanced user experiences.",
    icon: Brain,
    features: [
      "OpenAI API integration",
      "LangChain implementation",
      "RAG systems development",
      "Vector database setup",
      "AI-powered chatbots",
      "Content generation systems"
    ],
    technologies: ["OpenAI", "LangChain", "FAISS", "ChromaDB", "Python", "Vector DBs"],
    pricing: "From $75/hour",
    duration: "2-4 weeks"
  },
  {
    title: "Database & Backend",
    description: "Robust backend systems with proper database design, API development, and infrastructure setup.",
    icon: Database,
    features: [
      "Database architecture design",
      "API development & documentation",
      "Data migration & optimization",
      "Backup & recovery systems",
      "Security implementation",
      "Performance monitoring"
    ],
    technologies: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Golang", "Node.js"],
    pricing: "From $60/hour",
    duration: "2-6 weeks"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure setup, CI/CD pipelines, and DevOps automation for scalable applications.",
    icon: Cloud,
    features: [
      "AWS infrastructure setup",
      "Docker containerization",
      "CI/CD pipeline implementation",
      "Monitoring & logging",
      "Security & compliance",
      "Auto-scaling configuration"
    ],
    technologies: ["AWS", "Docker", "GitHub Actions", "Vercel", "Terraform", "Kubernetes"],
    pricing: "From $65/hour",
    duration: "1-4 weeks"
  },
  {
    title: "Performance Optimization",
    description: "Application performance optimization, speed improvements, and user experience enhancements.",
    icon: Zap,
    features: [
      "Frontend optimization",
      "Database query optimization",
      "Caching strategies",
      "CDN implementation",
      "Image optimization",
      "Core Web Vitals improvement"
    ],
    technologies: ["Next.js", "Redis", "CDN", "Webpack", "Lighthouse", "Analytics"],
    pricing: "From $45/hour",
    duration: "1-3 weeks"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements, goals, and technical specifications to create a detailed project plan.",
    icon: Clock
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Creating technical architecture, database design, and UI/UX wireframes for your project.",
    icon: Code
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building your solution with clean code, comprehensive testing, and regular progress updates.",
    icon: CheckCircle
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Deploying to production, performance optimization, and providing documentation and training.",
    icon: TrendingUp
  }
]

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 text-gradient">
          {t('services.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('services.subtitle')}
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-secondary/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{t('services.features')}</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">{t('services.technologies')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                      <span className="font-medium">{service.pricing}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.process.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 transform translate-x-4"></div>
                )}
              </div>
              <div className="text-sm font-medium text-primary mb-2">{step.step}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('services.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <Link href="/contact" className="flex items-center">
              {t('services.cta.start')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">{t('services.cta.portfolio')}</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}