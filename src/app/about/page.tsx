"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Briefcase, Calendar, Code } from "lucide-react"
import { useState } from "react"

const skills = [
  { name: "Next JS", icon: "devicon-nextjs-plain colored" },
  { name: "Typescript", icon: "devicon-typescript-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "Swift", icon: "devicon-swift-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "DBeaver", icon: "devicon-dbeaver-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
];

const experiences = [
  {
    title: "Software Developer (Internship)",
    company: "CLEATUS",
    period: "January 2025 - Present",
    responsibilities: [
      "At cleat.ai, an innovative AI-focused startup, I am part of a talented team developing advanced AI-driven solutions. As a Software Developer Intern, I am involved in both backend and frontend development while working with cutting-edge technologies and methodologies.",
      "Backend Development: Proficient in TypeScript for building scalable and efficient server-side applications.",
      "Frontend Development: Strong experience with React for creating dynamic, user-friendly interfaces.",
      "Database Management: Hands-on experience with MySQL and other SQL databases for efficient data storage and management.",
      "AI and Machine Learning: Integration of Large Language Models (LLMs), model APIs, and vector databases to enhance product functionality.",
      "Full-Stack Development: Collaborative approach to building end-to-end solutions, from database to UI.",
      "Agile Methodologies: Experience working in fast-paced, iterative development cycles within a startup environment.",
      "English Proficiency: Comfortable working in an English-speaking environment and collaborating with international teams."
    ],
  },
  {
    title: "Frontend Developer (Freelancer)",
    company: "Alerthit.fr",
    period: "August 2024 - October 2024",
    responsibilities: [
      "As a Frontend Developer, I was responsible for architecting, developing, and deploying the backend of a French e-commerce platform hosted on Shopify, leveraging technologies such as Hydrogen, Remix, and JavaScript.",
      "Designed and implemented custom APIs, ensuring seamless integration with external services and maintaining scalability and reliability of the backend infrastructure.",
      "Optimized backend processes, focusing on performance, security, and maintainability to support a high-traffic e-commerce environment.",
      "Collaborated with the client's design team to ensure backend functionalities aligned with technical requirements while adhering to high standards of security and performance.",
      "Contributed to the frontend layer using React to implement design changes and integrations, ensuring a consistent and functional user experience.",
      "Led client communications in English, effectively explaining technical requirements, providing updates, and addressing feedback to deliver a robust backend solution."
    ],
  },
  {
    title: "Full-Stack Developer (Freelancer)",
    company: "HDIL COMÉRCIO DE ACESSÓRIOS P/ MÓVEIS LTDA",
    period: "November 2022 - January 2023",
    responsibilities: [
      "Designed and developed the frontend for a local store’s e-commerce platform, utilizing PHP for email communication and backend logic optimization.",
      "Created and maintained APIs in PHP for sending and receiving emails, ensuring seamless communication and efficient data processing.",
      "Developed a full-stack website using HTML, CSS, JavaScript, Tailwind CSS, and deployed it on Vercel, ensuring responsiveness and high performance.",
      "Implemented and optimized the backend email system, ensuring reliable and secure communication between the store and customers.",
      "Integrated third-party services, such as the Lojazap platform, to synchronize product data in real-time, ensuring an efficient and scalable user experience.",
      "Focused on optimizing backend architecture for enhanced performance, scalability, and reliability to meet the needs of a growing local business.",
      "Ensured the backend solution was efficient and maintainable, applying best practices for PHP development and system integration."
    ],
  },
  {
    title: "CEO and Developer of an E-commerce",
    company: "Martin4Shop",
    period: "October 2021 - Present",
    responsibilities: [
      "CEO of Martin4Shop, leading the strategic vision, business development, and decision-making processes.",
      "Developed and managed a full-stack e-commerce platform using Shopify, focusing on both backend (customizations, API integrations) and frontend (design, user experience).",
      "Built and maintained backend functionality, including custom integrations with payment systems, order processing, and email communication systems (PHP backend for email services).",
      "Created and optimized frontend design and user experience with Shopify, ensuring responsiveness and performance across devices.",
      "Handled digital marketing efforts, including content creation, SEO, and online advertising campaigns to increase traffic and drive sales.",
      "Provided customer support and built strong relationships with clients, maintaining high satisfaction and repeat business.",
      "Implemented automated deployment processes and ensured smooth, secure updates to the platform.",
      "Utilized Vercel for deployment, ensuring fast, reliable hosting and seamless integration with the Shopify platform."
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
              I&apos;m a passionate Software Developer with expertise in modern web technologies including Next.js, TypeScript, and React.
              My experience spans from AI integration and e-commerce development to database management and cloud solutions.
              I specialize in building scalable applications with a focus on AI-driven solutions, having worked with LLMs and vector databases.
              With a strong foundation in both frontend and backend development, I create robust, user-centric applications while maintaining
              high standards of performance and security. My entrepreneurial background as a CEO of an e-commerce platform adds a unique
              perspective to my technical solutions, combining business acumen with technical expertise.
            </p>
          </CardContent>
        </Card>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["skills", "experience", "timeline"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base ${activeTab === tab
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