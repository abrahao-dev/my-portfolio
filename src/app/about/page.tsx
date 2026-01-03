"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Code, ExternalLink, Globe, Smartphone, Users } from "lucide-react"
import { useState } from "react"

const skills = [
  { name: "Swift", icon: "devicon-swift-plain colored" },
  { name: "SwiftUI", icon: "devicon-swift-plain colored" },
  { name: "UIKit", icon: "devicon-apple-plain colored" },
  { name: "Combine", icon: "devicon-swift-plain colored" },
  { name: "MVVM", icon: "devicon-swift-plain colored" },
  { name: "Clean Architecture", icon: "devicon-swift-plain colored" },
  { name: "SwiftData", icon: "devicon-swift-plain colored" },
  { name: "Core Data", icon: "devicon-apple-plain colored" },
  { name: "WidgetKit", icon: "devicon-apple-plain colored" },
  { name: "XCTest", icon: "devicon-swift-plain colored" },
  { name: "App Store Connect", icon: "devicon-apple-plain colored" },
  { name: "Xcode", icon: "devicon-xcode-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "REST APIs", icon: "devicon-swift-plain colored" },
];

const experiences = [
  {
    title: "iOS Developer",
    company: "Greenstand",
    period: "October 2025 - Present",
    location: "Remote (USA)",
    description: "Contributing to open-source technology fighting climate change through mobile development of the Treetracker ecosystem.",
    highlights: [
      "Developing iOS features using Swift, SwiftUI, UIKit, MVVM and Clean Architecture",
      "Building reliable, scalable and user-centered mobile features",
      "Collaborating with distributed engineering team on GitHub-based workflows",
      "Working on CI/CD improvements and automated testing",
      "Contributing to open-source iOS development best practices"
    ],
  },
  {
    title: "iOS Developer (Independent)",
    company: "Prism - Subscription Manager",
    period: "November 2025 - Present",
    location: "Brazil",
    description: "End-to-end development of a native iOS subscription management app published on the App Store.",
    highlights: [
      "Built entire app with SwiftUI using MVVM architecture",
      "Implemented local data persistence with SwiftData (@Model)",
      "Privacy-by-design: no external servers, optional encrypted iCloud sync",
      "Local notifications using UNUserNotificationCenter",
      "Home Screen widget with WidgetKit and App Groups",
      "Multi-language support (PT, EN, ES) with String Catalog",
      "Native Charts visualization and full Dark Mode support"
    ],
  },
  {
    title: "iOS Developer",
    company: "MasterCode Academy",
    period: "September 2025 - Present",
    location: "Brazil",
    description: "Development of native iOS applications within an advanced mobile bootcamp focused on architecture and best practices.",
    highlights: [
      "Developed NutriScan iOS app using Swift and UIKit",
      "Implemented MVVM architecture for separation of concerns",
      "Integration with REST APIs and local persistence (Core Data/Realm)",
      "Built reusable UI components and Custom Views",
      "Adopted Git best practices with Conventional Commits",
      "Close collaboration using Figma prototypes"
    ],
  },
  {
    title: "iOS Developer",
    company: "Agroger",
    period: "August 2025 - September 2025",
    location: "Brazil",
    description: "Contributing to iOS apps for farms and agribusiness operations across Brazil.",
    highlights: [
      "Built and improved features in Swift/SwiftUI",
      "Integrated and maintained REST APIs",
      "Improved UI components for farm task management",
      "Supported debugging and code reviews",
      "Published updates on App Store"
    ],
  },
  {
    title: "iOS Developer",
    company: "iOS Lab",
    period: "September 2024 - April 2025",
    location: "Brazil",
    description: "Hands-on iOS development training with Swift, UIKit, SwiftUI, and ViewCode.",
    highlights: [
      "Native iOS development using Swift",
      "UI development using ViewCode and UIKit",
      "SwiftUI for modern interfaces",
      "API consumption using URLSession and Codable",
      "Final project: iOS app with Marvel Heroes API"
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("about")
  const { t } = useLanguage()

  const achievements = [
    {
      icon: Smartphone,
      title: t('about.achievements.apps'),
      description: t('about.achievements.apps.desc')
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