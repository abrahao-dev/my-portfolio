"use client"

import { useLanguage } from "@/contexts/language-context";
import Link from 'next/link';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 p-6 bg-background border-t text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold mb-2">{t('footer.title')}</h3>
            <p className="text-xs opacity-70">{t('footer.subtitle')}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('footer.quicklinks')}</h3>
            <div className="space-y-1 text-xs">
              <Link href="/about" className="block hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link href="/projects" className="block hover:text-primary transition-colors">{t('nav.projects')}</Link>
              <Link href="/services" className="block hover:text-primary transition-colors">{t('nav.services')}</Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('footer.connect')}</h3>
            <div className="space-y-1 text-xs">
              <a href="https://github.com/abrahao-dev" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/abrahao-dev" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:contato.matheusabrahao@gmail.com" className="block hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2 text-xs opacity-70">
            {t('footer.built')}
          </p>
        </div>
      </div>
    </footer>
  )
}