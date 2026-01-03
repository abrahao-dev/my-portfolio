"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.error.name')
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.error.name.length')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.error.email')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.error.email.invalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.error.message')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.error.message.length')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData)

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error state here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8 text-center text-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('contact.title')}
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.connect.title')}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('contact.connect.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:contato.matheusabrahao@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato.matheusabrahao@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511992431835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 99243-1835
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    São Paulo, Brazil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  placeholder={t('contact.form.name.placeholder')}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-secondary/50 border-none ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                  disabled={isLoading}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.email.placeholder')}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-secondary/50 border-none ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('contact.form.message.placeholder')}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`bg-secondary/50 border-none min-h-[150px] ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                  disabled={isLoading}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full group relative overflow-hidden"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t('contact.form.send')}</span>
                    <Send className="ml-2 h-4 w-4 inline-block relative z-10" />
                  </>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <motion.div
                className="flex items-center justify-center text-green-500 mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                <span className="font-medium">{t('contact.form.success')}</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}