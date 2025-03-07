"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Moon } from "lucide-react";
import Link from 'next/link';

interface FloatingIconProps {
  className?: string;
  children: React.ReactNode;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ className, children }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-background to-secondary/10 overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcon className="top-10 left-4 sm:top-20 sm:left-20 md:top-32 md:left-32">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="bottom-10 right-4 sm:top-1/2 sm:right-20 md:right-32 sm:transform sm:-translate-y-1/2">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1254 8.0625L5.84541 19.4917C5.55352 19.8833 5.67898 20.4453 6.07061 20.7372C6.46224 21.0291 7.02421 20.9036 7.3161 20.512L15.596 9.08281C15.8879 8.69118 15.7624 8.12921 15.3708 7.83732C14.9792 7.54543 14.4172 7.67088 14.1254 8.0625Z" fill="currentColor" />
          <path d="M8.12558 2.0625L3.84541 8.49167C3.55352 8.8833 3.67898 9.44527 4.07061 9.73716C4.46224 10.0291 5.02421 9.90361 5.3161 9.51198L9.59627 3.08281C9.88816 2.69118 9.7627 2.12921 9.37107 1.83732C8.97944 1.54543 8.41747 1.67088 8.12558 2.0625Z" fill="currentColor" />
          <path d="M21.1254 2.0625L16.8452 8.49167C16.5533 8.8833 16.6788 9.44527 17.0704 9.73716C17.462 10.0291 18.024 9.90361 18.3159 9.51198L22.5961 3.08281C22.888 2.69118 22.7625 2.12921 22.3709 1.83732C21.9793 1.54543 21.4173 1.67088 21.1254 2.0625Z" fill="currentColor" />
        </svg>
      </FloatingIcon>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Matheus Abrahão
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Software Developer | Building Scalable, Robust, and Efficient Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="group bg-primary/90 hover:bg-primary/100 transition-colors duration-300">
            <Link href="/projects" className="flex items-center">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 transition-colors duration-300">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-20 z-10"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next JS", "React", "Typescript", "Swift", "MySQL"].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="px-4 py-2 bg-primary/10 rounded-full text-primary backdrop-blur-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 text-center z-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/abrahao-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abrahao-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:contato.matheusabrahao@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>

      <motion.button
        className="fixed top-4 right-4 p-2 bg-primary/10 rounded-full backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {/* Toggle theme logic */ }}
      >
        <Moon className="h-6 w-6 text-primary" />
      </motion.button>
    </div>
  );
}