"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Briefcase, Code } from "lucide-react"

const skills = [
  { name: "Swift", icon: "devicon-swift-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "NextJS", icon: "devicon-nextjs-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "iOS Development", icon: "devicon-apple-original colored" },
  { name: "Backend Development", icon: "devicon-nodejs-plain colored" },
  { name: "React", icon: "devicon-react-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Shopify", icon: "devicon-vuestorefront-plain colored" },
]

const experiences = [
  {
    title: "Freelancer Web Developer",
    company: "Alerthit.fr",
    period: "August 2024 - Setember 2024",
    responsibilities: [
      "Developed a website for a e-commerce at France using Shopify, Hydrogen, Oxygen and Liquid",
      "Developed the UI UX by Figma Design",
    ],
  },
  {
    title: "Freelancer Web Developer",
    company: "HDIL COMERCIO",
    period: "November 2023 - December 2023",
    responsibilities: [
      "Developed a Website for a local business using HTML CSS JS and Tailwind",
      "Integrate the website with LojaZap Platform",
    ],
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block py-2">
          About Me
        </span>
      </motion.h1>
      
      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="bg-secondary/10 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="pt-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Software Engineer specializing in backend and mobile development. 
              With expertise in Swift, Java, NextJS and SQL, I create efficient and scalable solutions 
              for complex problems. My goal is to build innovative applications that make a positive impact.
            </p>
          </CardContent>
        </Card>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["skills", "experience", "timeline"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base ${
                  activeTab === tab 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {tab === "skills" && <Code className="mr-2 h-4 w-4" />}
                {tab === "experience" && <Briefcase className="mr-2 h-4 w-4" />}
                {tab === "timeline" && <Calendar className="mr-2 h-4 w-4" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "skills" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-2 bg-secondary/50 rounded-md p-2">
                      <i className={`${skill.icon} text-xl sm:text-2xl custom-blue-icon`}></i>
                      <span className="text-sm sm:text-base">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "experience" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                      <h3 className="text-lg sm:text-xl font-semibold">{exp.title} at {exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-base">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "timeline" && (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Career Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-primary ml-3">
                  {experiences.map((exp, index) => (
                    <div key={index} className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
                        <Briefcase className="w-3 h-3 text-primary-foreground" />
                      </span>
                      <h3 className="flex items-center mb-1 text-base sm:text-lg font-semibold">{exp.title} at {exp.company}</h3>
                      <time className="block mb-2 text-sm font-normal text-muted-foreground">{exp.period}</time>
                      <p className="mb-4 text-sm sm:text-base font-normal text-muted-foreground">{exp.responsibilities[0]}</p>
                    </div>
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