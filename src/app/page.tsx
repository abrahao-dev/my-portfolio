"use client"

import { AnimatedTechStack } from "@/components/AnimatedTechStack";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { TypingText } from "@/components/ui/typing-text";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2, Github, Instagram, Linkedin, Mail, MessageCircle, Server, TrendingUp } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamic import for ParticleField to avoid SSR issues with Three.js
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => null
});

const technologies = [
  { name: "React", category: "Frontend", icon: "devicon-react-original colored" },
  { name: "Next.js", category: "Framework", icon: "devicon-nextjs-plain" },
  { name: "TypeScript", category: "Language", icon: "devicon-typescript-plain colored" },
  { name: "Node.js", category: "Backend", icon: "devicon-nodejs-plain colored" },
  { name: "Express", category: "Backend", icon: "devicon-express-original" },
  { name: "PostgreSQL", category: "Database", icon: "devicon-postgresql-plain colored" },
  { name: "Prisma", category: "Prisma", icon: "devicon-prisma-original" },
  { name: "GraphQL", category: "API", icon: "devicon-graphql-plain colored" },
  { name: "REST APIs", category: "Integration", icon: "devicon-nodejs-plain colored" },
  { name: "Shopify", category: "E-commerce", icon: "devicon-shopify-plain colored" },
  { name: "Docker", category: "DevOps", icon: "devicon-docker-plain colored" },
  { name: "AWS/GCP", category: "Cloud", icon: "devicon-amazonwebservices-plain-wordmark colored" },
];

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { label: t('home.stats.experience'), value: "5+", icon: Briefcase },
    { label: t('home.stats.revenue'), value: "$90K+", icon: TrendingUp },
    { label: t('home.stats.projects'), value: "10+", icon: Code2 },
    { label: t('home.stats.remote'), value: "Global", icon: Server },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section - Full width, immersive */}
      <section className="relative min-h-[calc(100vh-5rem)] w-full aurora-bg">
        <ParticleField />

        {/* Content wrapper - centered with max-width */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
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
              {t('home.badge')}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-gradient">{t('home.title')}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-primary font-medium mb-4">
              <TypingText
                texts={[
                  "Full Stack Software Engineer",
                  "React & Next.js Specialist",
                  "E-commerce Expert",
                  "AI/ML Developer"
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('home.description')}
            </p>

            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticWrapper strength={0.2}>
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover-glow transition-all duration-300 h-12 px-8">
                  <Link href="/projects" className="flex items-center">
                    {t('home.cta.projects')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.2}>
                <Button asChild variant="outline" size="lg" className="group border-2 hover:bg-primary/5 hover-glow transition-all duration-300 h-12 px-8">
                  <Link href="/contact" className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('home.cta.contact')}
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
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
        </div>
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
              {t('home.skills.subtitle')}
            </p>
          </motion.div>

          <AnimatedTechStack technologies={technologies} />
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('home.cta.title')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {t('home.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/projects">
                  {t('home.cta.projects')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link href="/contact">
                  {t('home.cta.contact')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}