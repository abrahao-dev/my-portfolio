"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Code, ExternalLink, Globe, TrendingUp } from "lucide-react"
import { useState } from "react"

const skills = [
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Prisma", icon: "devicon-prisma-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Shopify", icon: "devicon-shopify-plain colored" },
  { name: "Git/GitHub", icon: "devicon-github-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "REST APIs", icon: "devicon-nodejs-plain colored" },
  { name: "CI/CD", icon: "devicon-github-plain" },
  { name: "Vercel", icon: "devicon-vercel-original" },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Virtustant",
    period: "August 2025 - Present",
    location: "Remote (USA)",
    description: "Technical partner for an international luxury fashion brand. Engineering e-commerce platform reliability, integrations, and automation.",
    highlights: [
      "Designed and implemented custom Shopify/Liquid components for a high-traffic e-commerce store",
      "Led platform integrations: Amazon Seller Central, Google Merchant Center, Meta Ads (CAPI/Pixel)",
      "Built marketing automation flows for inventory, post-purchase ops, and analytics pipelines",
      "Achieved Core Web Vitals optimization across 1000+ product catalog",
      "Collaborated with international stakeholders in a fully remote environment"
    ],
  },
  {
    title: "Founder & Software Engineer",
    company: "Martin (E-commerce)",
    period: "January 2021 - Present",
    location: "Brazil",
    description: "Built and operated a profitable e-commerce platform from scratch, achieving $90K+ in total revenue.",
    highlights: [
      "Designed and maintained full technical stack: Shopify/Liquid, React.js, Hydrogen, Remix, Tailwind CSS",
      "Built custom frontend components, checkout logic, and internal tooling",
      "Implemented marketing + analytics integrations, inventory automation, performance reporting",
      "Profitable operation since 2021 with 100% technical ownership",
      "Strong customer retention driven by technical optimization and system stability"
    ],
  },
  {
    title: "Full Stack AI Engineer",
    company: "CLEATUS",
    period: "January 2025 - February 2025",
    location: "Remote (USA)",
    description: "Built AI-driven features for a government contracts platform using LangGraph, LangChain, and OpenAI.",
    highlights: [
      "Designed and built internal AI chatbot using LangGraph + LangChain for structured data queries",
      "Implemented SQL querying and analytics workflows with PostHog integration",
      "Built data pipelines converting government contract PDFs to Markdown for LLM analysis",
      "Developed features to query, normalize, and export SAM.gov data to CSV"
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Onmed Farmacêutica",
    period: "November 2025 - December 2025",
    location: "Brazil",
    description: "Led end-to-end digital modernization for a pharmaceutical logistics distributor.",
    highlights: [
      "Engineered high-performance institutional SPA using React.js, Next.js, Vite",
      "Achieved top-tier Lighthouse scores for performance and SEO optimization",
      "Designed responsive, mobile-first interface with glassmorphism aesthetics and Tailwind CSS",
      "Resolved critical legacy infrastructure: DNS sanitization, domain configuration, digital assets"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Clecci",
    period: "November 2025 - December 2025",
    location: "Remote (Canada)",
    description: "Re-architected critical components for a Canadian fashion retailer's e-commerce storefront.",
    highlights: [
      "Developed reactive variant selection engine managing media assets dynamically",
      "Engineered native tiered discount system (Buy More, Save More) driving AOV increases",
      "Rebuilt Add-to-Cart flow with AJAX, slide-out drawer, shipping progress bars, and upsells",
      "Refactored legacy codebases improving maintainability and load times"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Venna",
    period: "June 2025 - August 2025",
    location: "Remote (Portugal)",
    description: "Shopify specialist leading technical customizations and conversion strategies for high-performance stores.",
    highlights: [
      "Advanced JavaScript and Liquid customizations using Shopify CLI",
      "Developed upsell offers and dynamic personalized checkouts",
      "Implemented UX/UI optimized interfaces with mobile responsiveness",
      "Created email automations with Mailchimp, Zapier, and Wati.io (WhatsApp)"
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("about")
  const { t } = useLanguage()

  const achievements = [
    {
      icon: TrendingUp,
      title: t('about.achievements.revenue'),
      description: t('about.achievements.revenue.desc')
    },
    {
      icon: Code,
      title: t('about.achievements.projects'),
      description: t('about.achievements.projects.desc')
    },
    {
      icon: Globe,
      title: t('about.achievements.international'),
      description: t('about.achievements.international.desc')
    },
    {
      icon: Award,
      title: t('about.achievements.excellence'),
      description: t('about.achievements.excellence.desc')
    }
  ]

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient inline-block py-2">
          {t('about.title')}
        </span>
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Professional Summary */}
        <Card className="bg-secondary/10 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="pt-6">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {t('about.summary.paragraph1')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {t('about.summary.paragraph2')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t('about.summary.paragraph3')}
            </p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-secondary/10 backdrop-blur-sm border-none shadow-lg text-center">
              <CardContent className="pt-6">
                <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{achievement.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            {["about", "skills", "experience", "timeline"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm ${activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:shadow-md"
                  }`}
              >
                {tab === "about" && <Briefcase className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                {tab === "skills" && <Code className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                {tab === "experience" && <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                {tab === "timeline" && <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />}
                {tab === "about" && t('about.title')}
                {tab === "skills" && t('about.skills.title')}
                {tab === "experience" && t('about.experience.title')}
                {tab === "timeline" && t('about.timeline.title')}
              </button>
            ))}
          </div>

          {activeTab === "about" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">{t('about.professional.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('about.professional.excellence.title')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t('about.professional.excellence.desc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('about.professional.business.title')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t('about.professional.business.desc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('about.professional.learning.title')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t('about.professional.learning.desc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{t('about.professional.client.title')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t('about.professional.client.desc')}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "skills" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">{t('about.skills.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-3 hover:bg-secondary/70 transition-colors duration-200">
                      <i className={`${skill.icon} text-lg sm:text-xl lg:text-2xl`}></i>
                      <span className="text-xs sm:text-sm lg:text-base font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "experience" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">{t('about.experience.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-primary pl-4 sm:pl-6 pb-6 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="absolute -left-1 sm:-left-2 top-0 w-2 h-2 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.period}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-3">{exp.description}</p>
                      </div>
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-xs sm:text-sm lg:text-base flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "timeline" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">{t('about.timeline.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-primary ml-3">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="mb-8 sm:mb-10 ml-4 sm:ml-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="absolute flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full -left-2 sm:-left-3 ring-4 sm:ring-8 ring-background">
                        <Briefcase className="w-2 h-2 sm:w-3 sm:h-3 text-primary-foreground" />
                      </span>
                      <h3 className="flex items-center mb-1 text-sm sm:text-base lg:text-lg font-semibold">{exp.title} at {exp.company}</h3>
                      <time className="block mb-2 text-xs sm:text-sm font-normal text-muted-foreground">{exp.period}</time>
                      <p className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base font-normal text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </motion.div>
    </div>
  )
}