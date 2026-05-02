"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Code, ExternalLink, Globe, TrendingUp } from "lucide-react"
import { useState } from "react"

type SkillCategoryKey =
  | 'about.skills.shopify'
  | 'about.skills.ecommerce'
  | 'about.skills.web'
  | 'about.skills.data'
  | 'about.skills.ai'
  | 'about.skills.devops'
  | 'about.skills.mobile'

type SkillGroup = { categoryKey: SkillCategoryKey; items: { name: string; icon: string }[] }

const skillGroups: SkillGroup[] = [
  {
    categoryKey: 'about.skills.shopify',
    items: [
      { name: "Shopify Plus", icon: "devicon-shopify-plain colored" },
      { name: "Shopify Liquid", icon: "devicon-shopify-plain colored" },
      { name: "Hydrogen + Remix", icon: "devicon-shopify-plain colored" },
      { name: "Matrixify", icon: "devicon-shopify-plain colored" },
      { name: "Shopify Admin & Storefront API", icon: "devicon-shopify-plain colored" },
      { name: "Theme & Sections", icon: "devicon-shopify-plain colored" },
      { name: "Checkout Extensibility", icon: "devicon-shopify-plain colored" },
      { name: "App Integrations", icon: "devicon-shopify-plain colored" },
    ],
  },
  {
    categoryKey: 'about.skills.ecommerce',
    items: [
      { name: "Klaviyo", icon: "devicon-mailchimp-plain colored" },
      { name: "Meta CAPI / Pixel", icon: "devicon-facebook-plain colored" },
      { name: "Google Merchant Center", icon: "devicon-google-plain colored" },
      { name: "Amazon Seller Central", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Technical SEO", icon: "devicon-google-plain colored" },
      { name: "Schema / JSON-LD", icon: "devicon-google-plain colored" },
      { name: "Core Web Vitals", icon: "devicon-google-plain colored" },
      { name: "Conversion Optimization", icon: "devicon-shopify-plain colored" },
    ],
  },
  {
    categoryKey: 'about.skills.web',
    items: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Framer Motion", icon: "devicon-react-original colored" },
      { name: "REST + GraphQL", icon: "devicon-graphql-plain colored" },
      { name: "Prisma", icon: "devicon-prisma-original" },
    ],
  },
  {
    categoryKey: 'about.skills.data',
    items: [
      { name: "GA4", icon: "devicon-google-plain colored" },
      { name: "PostHog", icon: "devicon-react-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "CSV / Bulk Workflows", icon: "devicon-shopify-plain colored" },
    ],
  },
  {
    categoryKey: 'about.skills.ai',
    items: [
      { name: "LangGraph", icon: "devicon-python-plain colored" },
      { name: "LangChain", icon: "devicon-python-plain colored" },
      { name: "OpenAI APIs", icon: "devicon-python-plain colored" },
      { name: "RAG Pipelines", icon: "devicon-python-plain colored" },
      { name: "Workflow Automation", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    categoryKey: 'about.skills.devops',
    items: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "GCP", icon: "devicon-googlecloud-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "GitHub Actions / CI/CD", icon: "devicon-github-plain" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
    ],
  },
  {
    categoryKey: 'about.skills.mobile',
    items: [
      { name: "Swift", icon: "devicon-swift-plain colored" },
      { name: "SwiftUI", icon: "devicon-swift-plain colored" },
    ],
  },
]

const experiences = [
  {
    title: "Senior Shopify Operator",
    company: "Scale Army",
    period: "May 2026 - Present · Full-time",
    location: "Charlotte, NC, United States · Remote",
    description: "Leading complex Shopify operations, technical SEO, and data management for high-volume B2B and B2C environments.",
    highlights: [
      "Catalog & Data Management: bulk updates, pricing adjustments, and inventory synchronization across multi-level variant configurations using Matrixify and complex CSV workflows",
      "Technical SEO & Performance: structured data, schema markup, and site architecture for high crawlability and AI-search readiness",
      "Analytics & Strategy: cross-referencing GA4 sales data to drive upselling, cross-selling, and merchandising strategies",
      "Ecosystem Stability: monitoring Shopify app integrations, building lead-capture forms, and optimizing navigation and checkout flows to eliminate friction"
    ],
  },
  {
    title: "Shopify Specialist",
    company: "Virtustant",
    period: "August 2025 - Present · 10 months · Part-time",
    location: "New York, NY, United States · Remote",
    description: "Acting as the technical partner and sole engineer for an international luxury fashion brand, owning the engineering, reliability, and scalability of their e-commerce ecosystem. Responsible for designing, implementing, and operating production-grade systems that directly support business growth, automation, and multi-channel operations.",
    highlights: [
      "Business Growth: drove +455% increase in platform sessions, +114% in orders, and +74% in total sales since joining through technical optimizations, SEO improvements, and marketing integrations",
      "Frontend Engineering: designed and implemented custom frontend components and UI logic, heavily prioritizing performance, Core Web Vitals, and UX across a large-scale product catalog",
      "Omnichannel Integrations: led and maintained critical platform integrations, including Amazon Seller Central, Google Merchant Center, and advanced Meta Ads tracking (CAPI / Pixel)",
      "System Automation: built and maintained robust automation workflows for marketing, inventory management, and post-purchase operations using Klaviyo, custom flows, and AI-assisted content pipelines",
      "Technical Leadership: served as the primary technical decision-maker, balancing platform constraints, scalability, and business priorities in a fully remote, international environment"
    ],
  },
  {
    title: "Founder",
    company: "NEX Agency",
    period: "September 2020 - Present · 5 years 9 months · Self-employed",
    location: "São Paulo, Brazil · Remote",
    description: "Founded a software engineering consultancy serving clients across 10+ countries, delivering end-to-end solutions in software development, performance marketing, UI/UX design, and branding.",
    highlights: [
      "Led technical architecture and full-stack development for clients in the US, Canada, France, Portugal, and Brazil — acting as the sole engineer and technical decision-maker",
      "Built an AI-powered chatbot using LangGraph, LangChain, and OpenAI APIs for a US-based govtech platform, including PDF-to-Markdown data pipelines and structured SQL analytics",
      "Re-architected e-commerce storefronts with custom frontend logic, checkout optimization, and tiered pricing systems for international clients",
      "Delivered production-ready institutional websites, SPAs, and lead-conversion systems using React.js, Next.js, and Tailwind CSS",
      "Managed $20,000+ in ad spend across Google Ads and Meta Ads with measurable ROI"
    ],
    link: "https://nexagency.com.br",
  },
  {
    title: "Founder",
    company: "Martin",
    period: "November 2022 - April 2026 · 3 years 6 months · Self-employed",
    location: "Brazil · Remote",
    description: "Founded and scaled a men's fashion e-commerce platform from zero, leading every aspect of the business as a single founder: engineering, branding, content creation, social media, and operations.",
    highlights: [
      "Built and maintained the entire technical stack, custom frontend components, checkout logic, and internal tooling",
      "Scaled the platform to 6-figure revenue ($90K+), nearly 2,000 orders, and 297,000+ sessions — operated end-to-end without additional resources",
      "Grew TikTok to 51,000+ followers and 500,000+ likes, with individual videos reaching over 1.7M views — all content produced, edited, and published independently",
      "Built an Instagram presence to 5,100+ followers with a cohesive brand identity, product photography, and video content",
      "Implemented marketing integrations, inventory automation, and performance reporting pipelines",
      "This experience strengthened my ability to build products from zero, wear every hat, and make engineering and business decisions with direct, measurable impact"
    ],
    link: "https://martin4shop.com.br",
  },
  {
    title: "Full Stack Mentor",
    company: "Télos.IA",
    period: "January 2026 - May 2026 · 5 months",
    location: "São Paulo, Brazil · Remote",
    description: "Mentor for an inclusive Full Stack training program for People with Disabilities (PCDs), covering backend technologies and developer tooling through hands-on instruction.",
    highlights: [
      "Mentored students through the intermediate and backend modules of a structured curriculum, balancing technical depth with accessibility and inclusion",
      "Built custom interactive learning materials and delivered live sessions covering macOS development environments, Git/GitHub, Python Fundamentals, Object-Oriented Programming (OOP), Node.js, and NoSQL databases (MongoDB)",
      "Hosted exclusive support sessions for macOS learners, troubleshooting environment setup, tooling differences, and platform-specific workflows across Apple Silicon and Intel machines",
      "Provided real-time troubleshooting and technical guidance during live classes to ensure a solid understanding of backend architecture and logic"
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("about")
  const { t } = useLanguage()

  const achievements = [
    {
      icon: Award,
      title: t('about.achievements.apple'),
      description: t('about.achievements.apple.desc')
    },
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
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              {t('about.summary.paragraph3')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t('about.summary.paragraph4')}
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
              <CardContent className="space-y-6 sm:space-y-8">
                {skillGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.categoryKey}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.06 }}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wider mb-3">
                      {t(group.categoryKey)}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-3 hover:bg-secondary/70 hover:scale-[1.02] transition-all duration-200"
                        >
                          <i className={`${skill.icon} text-lg sm:text-xl lg:text-2xl shrink-0`}></i>
                          <span className="text-xs sm:text-sm lg:text-base font-medium leading-tight">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
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
                          {'link' in exp && exp.link ? (
                            <a
                              href={exp.link as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="font-medium">{exp.company}</span>
                          )}
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