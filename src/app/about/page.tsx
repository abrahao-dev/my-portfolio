"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Code, ExternalLink, Globe, TrendingUp, Users } from "lucide-react"
import { useState } from "react"

const skills = [
  { name: "Next.js", icon: "devicon-nextjs-plain colored" },
  { name: "React", icon: "devicon-react-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "Shopify", icon: "devicon-shopify-plain colored" },
  { name: "OpenAI", icon: "devicon-openai-plain colored" },
  { name: "LangChain", icon: "devicon-langchain-plain colored" },
  { name: "GenAI", icon: "devicon-ai-plain colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "Swift", icon: "devicon-swift-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "DBeaver", icon: "devicon-dbeaver-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub Actions", icon: "devicon-github-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
];

const experiences = [
  {
    title: "Full Stack Developer & Shopify Specialist",
    company: "Venna Social",
    period: "June 2025 - Present",
    location: "Remote",
    description: "Working as a full stack developer and Shopify specialist at Venna, an international events and lifestyle startup.",
    highlights: [
      "Customized Shopify theme with JavaScript, CSS, and Liquid code",
      "Implemented integrations with Mailchimp via Zapier",
      "Integrated payment method configuration via Appmax",
      "Made UX/UI adjustments and improvements",
      "Configured multilingual flow (PT/EN/ES)",
      "Provided continuous technical support"
    ],
  },
  {
    title: "Full-Stack Software Developer (Freelancer)",
    company: "CLEATUS",
    period: "January 2025 - Present",
    location: "Remote",
    description: "AI-powered government contracting platform development with cutting-edge AI technologies.",
    highlights: [
      "Implemented LangGraph AI Chat Integration with LangChain",
      "Developed USAspending Contract Analysis feature",
      "Built data export functionality to .CSV format",
      "Used Next.js, TypeScript, Shadcn/UI, Node.js",
      "Integrated OpenAI and LangChain technologies",
      "Deployed on Vercel with PlanetScale database"
    ],
  },
  {
    title: "Frontend Developer (Freelancer)",
    company: "Alerthit.fr",
    period: "August 2025 - October 2025",
    location: "Remote",
    description: "French e-commerce platform development using Shopify, Hydrogen, and Remix.",
    highlights: [
      "Architected and developed backend for French e-commerce platform",
      "Designed custom APIs for external service integration",
      "Optimized backend processes for performance and security",
      "Collaborated with design team for technical requirements",
      "Contributed to frontend layer using React",
      "Led client communications in English"
    ],
  },
  {
    title: "Full-Stack Developer (Freelancer)",
    company: "HDIL COMÉRCIO DE ACESSÓRIOS P/ MÓVEIS LTDA",
    period: "November 2022 - January 2023",
    location: "Remote",
    description: "E-commerce platform development for local furniture store with PHP backend.",
    highlights: [
      "Designed and developed frontend for e-commerce platform",
      "Created APIs in PHP for email communication",
      "Developed full-stack website with HTML, CSS, JavaScript, Tailwind CSS",
      "Implemented backend email system optimization",
      "Integrated third-party services like Lojazap platform",
      "Optimized backend architecture for scalability"
    ],
  },
  {
    title: "CEO and Developer of an E-commerce",
    company: "Martin4Shop",
    period: "October 2021 - Present",
    location: "Remote",
    description: "Leading strategic vision and development of profitable e-commerce platform generating $80K+ revenue.",
    highlights: [
      "CEO responsibilities: strategic vision and business development",
      "Developed full-stack e-commerce platform using Shopify",
      "Built custom integrations with payment systems",
      "Created optimized frontend design and user experience",
      "Handled digital marketing, SEO, and online advertising",
      "Provided customer support and built client relationships"
    ],
  },
]

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
      icon: Users,
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