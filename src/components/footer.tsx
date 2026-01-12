"use client"

import { useLanguage } from "@/contexts/language-context";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 py-12 px-6 bg-secondary/5 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('footer.title')}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t('footer.subtitle')}</p>
            <div className="flex space-x-4">
              <a href="https://github.com/abrahao-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/abrahao-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/abrahao.dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contato.matheusabrahao@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wider">{t('footer.quicklinks')}</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">{t('nav.projects')}</Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">{t('nav.blog')}</Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wider">{t('footer.connect')}</h3>
            <div className="space-y-2 text-sm">
              <a href="https://wa.me/5511988512788" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
              <a href="mailto:contato.matheusabrahao@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">contato.matheusabrahao@gmail.com</a>
              <p className="text-muted-foreground">São Paulo, Brazil</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground uppercase tracking-wider">{t('footer.newsletter')}</h3>
            <p className="text-sm text-muted-foreground mb-3">{t('footer.newsletter.desc')}</p>
            <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
              {t('footer.newsletter.cta')} →
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}