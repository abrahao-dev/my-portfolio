"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
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
      // Sem backend: a mensagem é entregue pelo cliente de e-mail do visitante.
      // É feio, mas chega — o setTimeout que estava aqui antes descartava o lead.
      const subject = `New project inquiry from ${formData.name}`
      const body = `${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}\nSent from matheusabrahao.com.br`
      window.location.href =
        `mailto:contato.matheusabrahao@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 8000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="type-display max-w-3xl">{t('contact.title')}</h1>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.connect.title')}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('contact.connect.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {/* min-w-0 + break-all: the address is a single 241px token and
                  the icon is 48px, so at 320px this row pushed the whole page
                  into horizontal scroll. shrink-0 keeps the icon circular. */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <Mail className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:contato.matheusabrahao@gmail.com"
                    className="break-all text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato.matheusabrahao@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511988512788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 98851-2788
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    São Paulo, Brazil (UTC-3)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-medium">Availability</h3>
                  <p className="text-muted-foreground">
                    Remote, working with e-commerce brands in the US and Canada.
                    UTC-3 means near-full overlap with US business hours — same-day
                    replies, live calls, no overnight handoffs. Fluent English,
                    invoiced in USD.
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
                  className={`bg-card border border-border ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  disabled={isLoading}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-destructive flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1 shrink-0" aria-hidden />
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
                  className={`bg-card border border-border ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  disabled={isLoading}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1 shrink-0" aria-hidden />
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
                  className={`bg-card border border-border min-h-[150px] ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  disabled={isLoading}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-sm text-destructive flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1 shrink-0" aria-hidden />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-full"
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
                className="mt-4 flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="font-medium">{t('contact.form.success')}</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}