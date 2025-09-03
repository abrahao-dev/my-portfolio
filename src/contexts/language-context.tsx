"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'pt-BR'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
  'en': {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Homepage
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'Full Stack Developer',
    'home.description': 'Building scalable, modern applications with clean architecture and solid engineering principles. Generated $80K+ revenue through e-commerce platforms and AI-powered solutions.',
    'home.stats.revenue': 'Revenue Generated',
    'home.stats.revenue.value': '$80K+',
    'home.stats.experience': 'Years Experience',
    'home.stats.projects': 'Projects Delivered',
    'home.stats.technologies': 'Technologies',
    'home.cta.projects': 'View Projects',
    'home.cta.resume': 'Resume',
    'home.cta.contact': 'Get in Touch',
    'home.skills.title': 'Core Technologies',
    'home.connect.title': "Let's Connect",
    'home.connect.subtitle': 'Available for freelance projects and full-time opportunities',

    // About page
    'about.title': 'About Me',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I believe in writing clean, maintainable code that follows SOLID principles and clean architecture patterns. Every solution I build is designed to be scalable, performant, and easy to maintain.',
    'about.professional.business.title': 'Business Impact',
    'about.professional.business.desc': 'My entrepreneurial background helps me understand the business side of technology. I focus on delivering solutions that not only work technically but also drive real business value.',
    'about.professional.learning.title': 'Continuous Learning',
    'about.professional.learning.desc': 'Technology evolves rapidly, and I stay current with the latest trends and best practices. I\'m particularly excited about AI/ML integration and its potential to transform businesses.',
    'about.professional.client.title': 'Client Success',
    'about.professional.client.desc': 'I measure my success by my clients\' success. I work closely with clients to understand their needs and deliver solutions that exceed their expectations.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.achievements.revenue': '$80K+ Revenue Generated',
    'about.achievements.revenue.desc': 'Successfully built and operated e-commerce platforms generating significant revenue',
    'about.achievements.projects': '20+ Projects Delivered',
    'about.achievements.projects.desc': 'Completed diverse projects across web development, e-commerce, and AI integration',
    'about.achievements.international': 'International Experience',
    'about.achievements.international.desc': 'Worked with clients from multiple countries including France, USA, and Brazil',
    'about.achievements.excellence': 'Technical Excellence',
    'about.achievements.excellence.desc': 'Consistently delivered high-quality solutions using modern technologies and best practices',
    'about.summary.paragraph1': 'I\'m a passionate Software Engineer focused on building modern, scalable full-stack applications grounded in clean architecture, automation, and solid software engineering principles. I work primarily with TypeScript, Docker, and Cloud technologies, delivering robust end-to-end solutions with strong foundations in algorithms, data structures, and systems design.',
    'about.summary.paragraph2': 'Since 2021, I\'ve independently led the technical operations of Martin4Shop, a self-owned e-commerce brand that has generated over $80,000 in revenue. I built the entire platform from scratch using Shopify Hydrogen, React, and Remix, along with custom automations. This experience gave me deep, hands-on insight into how engineering, product, and business intersect.',
    'about.summary.paragraph3': 'I have complete command of the development lifecycle: modern web applications, REST/GraphQL APIs, relational and NoSQL databases, CI/CD pipelines, containerization, testing, and clean, maintainable code using SOLID principles. I also have practical experience with machine learning models and AI-powered solutions.',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Have a question or want to work together? I\'d love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell me about your project or how I can help...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.form.error.name': 'Name is required',
    'contact.form.error.name.length': 'Name must be at least 2 characters',
    'contact.form.error.email': 'Email is required',
    'contact.form.error.email.invalid': 'Please enter a valid email address',
    'contact.form.error.message': 'Message is required',
    'contact.form.error.message.length': 'Message must be at least 10 characters',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Software Engineer & Full Stack Developer',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 Matheus Abrahão. All rights reserved.',
    'footer.built': 'Built with Next.js, TypeScript, and Tailwind CSS | São Paulo, Brazil',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',
  },
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Homepage
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'Desenvolvedor Full Stack',
    'home.description': 'Construindo aplicações modernas e escaláveis com arquitetura limpa e princípios sólidos de engenharia. Gerou mais de R$400.000 em receita através de plataformas de e-commerce e soluções com IA.',
    'home.stats.revenue': 'Receita Gerada',
    'home.stats.revenue.value': 'R$400K+',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.projects': 'Projetos Entregues',
    'home.stats.technologies': 'Tecnologias',
    'home.cta.projects': 'Ver Projetos',
    'home.cta.resume': 'Currículo',
    'home.cta.contact': 'Entre em Contato',
    'home.skills.title': 'Tecnologias Principais',
    'home.connect.title': 'Vamos Conectar',
    'home.connect.subtitle': 'Disponível para projetos freelancer e oportunidades em tempo integral',

    // About page
    'about.title': 'Sobre Mim',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Acredito em escrever código limpo e sustentável que segue os princípios SOLID e padrões de arquitetura limpa. Toda solução que construo é projetada para ser escalável, performática e fácil de manter.',
    'about.professional.business.title': 'Impacto nos Negócios',
    'about.professional.business.desc': 'Meu background empreendedor me ajuda a entender o lado comercial da tecnologia. Foco em entregar soluções que não apenas funcionam tecnicamente, mas também geram valor real para o negócio.',
    'about.professional.learning.title': 'Aprendizado Contínuo',
    'about.professional.learning.desc': 'A tecnologia evolui rapidamente, e eu me mantenho atualizado com as últimas tendências e melhores práticas. Estou particularmente animado com a integração de IA/ML e seu potencial para transformar negócios.',
    'about.professional.client.title': 'Sucesso do Cliente',
    'about.professional.client.desc': 'Meço meu sucesso pelo sucesso dos meus clientes. Trabalho de perto com os clientes para entender suas necessidades e entregar soluções que superam suas expectativas.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.achievements.revenue': 'R$400K+ Receita Gerada',
    'about.achievements.revenue.desc': 'Construiu e operou com sucesso plataformas de e-commerce gerando receita significativa',
    'about.achievements.projects': '20+ Projetos Entregues',
    'about.achievements.projects.desc': 'Completou projetos diversos em desenvolvimento web, e-commerce e integração de IA',
    'about.achievements.international': 'Experiência Internacional',
    'about.achievements.international.desc': 'Trabalhou com clientes de múltiplos países incluindo França, EUA e Brasil',
    'about.achievements.excellence': 'Excelência Técnica',
    'about.achievements.excellence.desc': 'Entregou consistentemente soluções de alta qualidade usando tecnologias modernas e melhores práticas',
    'about.summary.paragraph1': 'Sou um Engenheiro de Software apaixonado focado em construir aplicações full-stack modernas e escaláveis baseadas em arquitetura limpa, automação e princípios sólidos de engenharia de software. Trabalho principalmente com TypeScript, Docker e tecnologias Cloud, entregando soluções robustas de ponta a ponta com bases sólidas em algoritmos, estruturas de dados e design de sistemas.',
    'about.summary.paragraph2': 'Desde 2021, lidero independentemente as operações técnicas da Martin4Shop, uma marca de e-commerce própria que gerou mais de R$400.000 em receita. Construí toda a plataforma do zero usando Shopify Hydrogen, React e Remix, junto com automações customizadas. Esta experiência me deu insights profundos e práticos sobre como engenharia, produto e negócio se intersectam.',
    'about.summary.paragraph3': 'Tenho domínio completo do ciclo de vida de desenvolvimento: aplicações web modernas, APIs REST/GraphQL, bancos de dados relacionais e NoSQL, pipelines de CI/CD, containerização, testes e código limpo e sustentável usando princípios SOLID. Também tenho experiência prática com modelos de machine learning e soluções com IA.',

    // Contact page
    'contact.title': 'Entre em Contato',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Tem uma pergunta ou quer trabalhar junto? Adoraria ouvir de você! Seja um projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato.',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto ou como posso ajudar...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    'contact.form.error.name': 'Nome é obrigatório',
    'contact.form.error.name.length': 'Nome deve ter pelo menos 2 caracteres',
    'contact.form.error.email': 'Email é obrigatório',
    'contact.form.error.email.invalid': 'Por favor, insira um email válido',
    'contact.form.error.message': 'Mensagem é obrigatória',
    'contact.form.error.message.length': 'Mensagem deve ter pelo menos 10 caracteres',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Engenheiro de Software & Desenvolvedor Full Stack',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Conectar',
    'footer.copyright': '© 2025 Matheus Abrahão. Todos os direitos reservados.',
    'footer.built': 'Construído com Next.js, TypeScript e Tailwind CSS | São Paulo, Brasil',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR')

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem('language') as Language
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt-BR' : 'en'
    setLanguage(savedLanguage || browserLanguage)
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}