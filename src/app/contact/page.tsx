"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000) // Reset after 3 seconds
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-center text-muted-foreground mb-8">
          Have a question or want to work together? I&apos;d love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" placeholder="Your name" required className="bg-secondary/50 border-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your email" required className="bg-secondary/50 border-none" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" placeholder="Your message" required className="bg-secondary/50 border-none min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full group relative overflow-hidden">
            <span className="relative z-10">Send Message</span>
            <motion.div
              className="absolute inset-0 bg-primary-foreground"
              initial={{ x: "-100%" }}
              animate={isSubmitted ? { x: 0 } : { x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            />
            <Send className="ml-2 h-4 w-4 inline-block relative z-10" />
          </Button>
        </form>
        {isSubmitted && (
          <motion.div
            className="flex items-center justify-center text-green-500 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CheckCircle className="mr-2" />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}