"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { ArrowRight, Award, Code, Github, Linkedin, Mail, Smartphone, Instagram, MessageCircle } from "lucide-react";
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const IPhone3D = dynamic(() => import('@/components/three/iPhone3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-40 rounded-3xl bg-gradient-to-b from-primary/20 to-primary/5 animate-pulse"></div>
      </div>
    </div>
  )
});

const technologies = [
  { name: "Swift", category: "Language", icon: "🔶" },
  { name: "SwiftUI", category: "Framework", icon: "📱" },
  { name: "UIKit", category: "Framework", icon: "🎨" },
  { name: "MVVM", category: "Architecture", icon: "🏗️" },
  { name: "Combine", category: "Reactive", icon: "🔄" },
  { name: "SwiftData", category: "Persistence", icon: "💾" },
  { name: "Core Data", category: "Persistence", icon: "🗄️" },
  { name: "WidgetKit", category: "Extensions", icon: "📊" },
  { name: "XCTest", category: "Testing", icon: "✅" },
  { name: "Git", category: "Version Control", icon: "🔀" },
  { name: "CI/CD", category: "DevOps", icon: "🚀" },
  { name: "App Store", category: "Distribution", icon: "🍎" },
];

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { label: t('home.stats.apps'), value: t('home.stats.apps.value'), icon: Smartphone },
    { label: t('home.stats.experience'), value: "5+", icon: Award },
    { label: t('home.stats.projects'), value: "10+", icon: Code },
    { label: t('home.stats.technologies'), value: "15+", icon: Smartphone },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 py-8 lg:py-0 max-w-7xl mx-auto gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10 max-w-2xl order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to remote opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-gradient">{t('home.title')}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-primary font-medium mb-4">
            {t('home.subtitle')}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('home.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8">
              <Link href="/projects" className="flex items-center">
                {t('home.cta.projects')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group border-2 hover:bg-primary/5 transition-all duration-300 h-12 px-8">
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('home.cta.contact')}
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              { href: "https://github.com/abrahao-dev", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/abrahao-dev", icon: Linkedin, label: "LinkedIn" },
              { href: "https://instagram.com/abrahao.dev", icon: Instagram, label: "Instagram" },
              { href: "mailto:contato.matheusabrahao@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D iPhone */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full lg:w-auto order-1 lg:order-2"
        >
          <IPhone3D />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-primary" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t('home.skills.title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build production-ready iOS applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{tech.icon}</span>
                  <div>
                    <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{tech.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t('home.connect.title')}</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              {t('home.connect.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { href: "https://github.com/abrahao-dev", icon: Github, label: "GitHub", color: "hover:bg-[#333]/10 hover:text-[#333] dark:hover:bg-white/10 dark:hover:text-white" },
                { href: "https://linkedin.com/in/abrahao-dev", icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]" },
                { href: "https://instagram.com/abrahao.dev", icon: Instagram, label: "Instagram", color: "hover:bg-[#E4405F]/10 hover:text-[#E4405F]" },
                { href: "mailto:contato.matheusabrahao@gmail.com", icon: Mail, label: "Email", color: "hover:bg-primary/10 hover:text-primary" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 text-sm sm:text-base ${social.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('home.newsletter.title')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {t('home.newsletter.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
              />
              <Button className="px-6 py-3 h-auto rounded-xl">
                {t('home.newsletter.cta')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}