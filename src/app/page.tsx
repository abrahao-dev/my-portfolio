"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { ArrowRight, Award, Code, Database, Download, Github, Linkedin, Mail, TrendingUp } from "lucide-react";
import Link from 'next/link';

interface FloatingIconProps {
  className?: string;
  children: React.ReactNode;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ className, children }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    className={`absolute ${className} animate-float`}
  >
    {children}
  </motion.div>
);

const technologies = [
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Java", category: "Language" },
  { name: "GraphQL", category: "API" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Git", category: "Version Control" },
];

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { label: t('home.stats.revenue'), value: t('home.stats.revenue.value'), icon: TrendingUp },
    { label: t('home.stats.experience'), value: "6+", icon: Award },
    { label: t('home.stats.projects'), value: "20+", icon: Code },
    { label: t('home.stats.technologies'), value: "25+", icon: Database },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-4 bg-gradient-to-br from-background to-secondary/10 overflow-hidden">
      {/* Floating Icons - Hidden on mobile for better performance */}
      <FloatingIcon className="hidden sm:block top-10 left-4 sm:top-20 sm:left-20 md:top-32 md:left-32 opacity-20">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="hidden sm:block bottom-10 right-4 sm:top-1/2 sm:right-20 md:right-32 sm:transform sm:-translate-y-1/2 opacity-20">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1254 8.0625L5.84541 19.4917C5.55352 19.8833 5.67898 20.4453 6.07061 20.7372C6.46224 21.0291 7.02421 20.9036 7.3161 20.512L15.596 9.08281C15.8879 8.69118 15.7624 8.12921 15.3708 7.83732C14.9792 7.54543 14.4172 7.67088 14.1254 8.0625Z" fill="currentColor" />
          <path d="M8.12558 2.0625L3.84541 8.49167C3.55352 8.8833 3.67898 9.44527 4.07061 9.73716C4.46224 10.0291 5.02421 9.90361 5.3161 9.51198L9.59627 3.08281C9.88816 2.69118 9.7627 2.12921 9.37107 1.83732C8.97944 1.54543 8.41747 1.67088 8.12558 2.0625Z" fill="currentColor" />
          <path d="M21.1254 2.0625L16.8452 8.49167C16.5533 8.8833 16.6788 9.44527 17.0704 9.73716C17.462 10.0291 18.024 9.90361 18.3159 9.51198L22.5961 3.08281C22.888 2.69118 22.7625 2.12921 22.3709 1.83732C21.9793 1.54543 21.4173 1.67088 21.1254 2.0625Z" fill="currentColor" />
        </svg>
      </FloatingIcon>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-5xl mx-auto px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-gradient leading-tight">
          {t('home.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed">
          {t('home.subtitle')}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('home.description')}
        </p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center p-3 sm:p-4 bg-secondary/20 rounded-lg backdrop-blur-sm"
            >
              <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 text-primary" />
              <div className="text-lg sm:text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-10 sm:mb-12">
          <Button asChild size="lg" className="group bg-primary/90 hover:bg-primary/100 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            <Link href="/projects" className="flex items-center justify-center">
              {t('home.cta.projects')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
            <a href="/resume.pdf" download className="flex items-center justify-center">
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('home.cta.resume')}
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 sm:mt-16 lg:mt-20 z-10 w-full max-w-5xl mx-auto px-4"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center">{t('home.skills.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-primary/10 rounded-lg text-primary backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default group"
            >
              <div className="font-medium text-sm sm:text-base">{tech.name}</div>
              <div className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 sm:mt-16 lg:mt-20 text-center z-10 px-4"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">{t('home.connect.title')}</h2>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <motion.a
            href="https://github.com/abrahao-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub Profile"
          >
            <Github size={24} className="sm:w-7 sm:h-7" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abrahao-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="sm:w-7 sm:h-7" />
          </motion.a>
          <motion.a
            href="mailto:contato.matheusabrahao@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Send Email"
          >
            <Mail size={24} className="sm:w-7 sm:h-7" />
          </motion.a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {t('home.connect.subtitle')}
        </p>
      </motion.div>
    </div>
  );
}