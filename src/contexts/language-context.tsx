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
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Homepage
    'home.badge': 'Open to Remote Opportunities',
    'home.title': 'I Build Systems That Drive Revenue',
    'home.subtitle': 'Senior Full Stack Engineer',
    'home.description': '5+ years building production web applications. Built and operated an e-commerce platform generating $90K+ in online sales. I ship scalable React/Next.js frontends, robust Node.js APIs, and revenue-driving Shopify integrations.',
    'home.stats.experience': 'Years Experience',
    'home.stats.revenue': 'E-commerce Revenue',
    'home.stats.projects': 'Production Systems',
    'home.stats.remote': 'Remote Experience',
    'home.cta.projects': 'View My Work',
    'home.cta.contact': "Let's Talk",
    'home.cta.title': 'Ready to Build Something Great?',
    'home.cta.desc': 'Looking for a Full Stack Engineer who understands both code and business? Let\'s talk.',
    'home.skills.title': 'Core Technologies',
    'home.skills.subtitle': 'Technologies I use to build production-ready web applications and e-commerce platforms',
    'home.connect.title': "Let's Connect",
    'home.connect.subtitle': 'Open to remote opportunities as a Senior Full Stack Engineer',

    // About page
    'about.title': 'Senior Full Stack Engineer',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I build scalable, maintainable systems using React, Next.js, Node.js, and TypeScript. Every solution is designed for performance, reliability, and long-term maintainability.',
    'about.professional.business.title': 'Business Impact',
    'about.professional.business.desc': 'Engineering decisions should drive business outcomes. I focus on solutions that deliver measurable value—from $90K+ in e-commerce revenue to automated workflows that reduce operational costs.',
    'about.professional.learning.title': 'Continuous Improvement',
    'about.professional.learning.desc': 'The web evolves rapidly. I stay current with React patterns, Node.js best practices, and modern DevOps tooling to deliver the best possible solutions.',
    'about.professional.client.title': 'Product Ownership',
    'about.professional.client.desc': 'I take end-to-end ownership—from architecture and implementation to production delivery. I collaborate closely with stakeholders and translate requirements into well-engineered solutions.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.achievements.revenue': '$90K+ Revenue',
    'about.achievements.revenue.desc': 'Built and operated a profitable e-commerce platform generating over $90,000 in total sales',
    'about.achievements.projects': '10+ Production Systems',
    'about.achievements.projects.desc': 'Delivered diverse projects across e-commerce, SaaS, and enterprise platforms',
    'about.achievements.international': 'Global Remote Work',
    'about.achievements.international.desc': 'Experience working with international teams across USA, Canada, Portugal, and Brazil',
    'about.achievements.excellence': 'Technical Leadership',
    'about.achievements.excellence.desc': 'End-to-end technical ownership from architecture to deployment',
    'about.summary.paragraph1': "I'm a Senior Full Stack Engineer who has built and operated a profitable e-commerce platform generating over $90,000 in total sales, alongside 5+ years of hands-on experience developing production-grade web applications.",
    'about.summary.paragraph2': 'I specialize in building scalable frontend architectures with React and Next.js, robust backend services with Node.js and TypeScript, and custom business logic for e-commerce, SaaS products, and internal platforms. My work consistently balances clean code, performance, and measurable business impact.',
    'about.summary.paragraph3': "I've worked in international, fully remote environments, taking ownership of features end-to-end—from architecture and implementation to production delivery and continuous optimization.",

    // Contact page
    'contact.title': "Let's Work Together",
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Have a project in mind or looking for a Full Stack Engineer? I\'d love to hear from you! Whether you need an e-commerce platform, SaaS application, or web development expertise, feel free to reach out.',
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
    'footer.subtitle': 'Senior Full Stack Engineer',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Contact',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Full Stack development tips',
    'footer.newsletter.cta': 'Read the Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. All rights reserved.',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Full Stack Development Insights',
    'blog.description': 'Thoughts, tutorials, and insights about Full Stack development, React, Node.js, and web engineering.',
    'blog.readmore': 'Read More',
    'blog.coming': 'Coming Soon',
    'blog.coming.desc': 'Stay tuned for Full Stack development articles and tutorials.',
  },
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Homepage
    'home.badge': 'Aberto a Oportunidades Remotas',
    'home.title': 'Construo Sistemas Que Geram Receita',
    'home.subtitle': 'Engenheiro Full Stack Sênior',
    'home.description': '5+ anos construindo aplicações web de produção. Construí e operei uma plataforma de e-commerce gerando $90K+ em vendas online. Entrego frontends React/Next.js escaláveis, APIs Node.js robustas e integrações Shopify que geram receita.',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.revenue': 'Receita E-commerce',
    'home.stats.projects': 'Sistemas em Produção',
    'home.stats.remote': 'Experiência Remota',
    'home.cta.projects': 'Ver Meu Trabalho',
    'home.cta.contact': 'Vamos Conversar',
    'home.cta.title': 'Pronto para Construir Algo Incrível?',
    'home.cta.desc': 'Procurando um Engenheiro Full Stack que entende código e negócios? Vamos conversar.',
    'home.skills.title': 'Tecnologias Principais',
    'home.skills.subtitle': 'Tecnologias que uso para construir aplicações web e plataformas e-commerce prontas para produção',
    'home.connect.title': 'Vamos Conectar',
    'home.connect.subtitle': 'Aberto a oportunidades remotas como Engenheiro Full Stack Sênior',

    // About page
    'about.title': 'Engenheiro Full Stack Sênior',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Construo sistemas escaláveis e sustentáveis usando React, Next.js, Node.js e TypeScript. Toda solução é projetada para performance, confiabilidade e manutenibilidade a longo prazo.',
    'about.professional.business.title': 'Impacto no Negócio',
    'about.professional.business.desc': 'Decisões de engenharia devem gerar resultados de negócio. Foco em soluções que entregam valor mensurável—de $90K+ em receita de e-commerce a workflows automatizados que reduzem custos operacionais.',
    'about.professional.learning.title': 'Melhoria Contínua',
    'about.professional.learning.desc': 'A web evolui rapidamente. Me mantenho atualizado com padrões React, melhores práticas Node.js e ferramentas modernas de DevOps para entregar as melhores soluções possíveis.',
    'about.professional.client.title': 'Ownership de Produto',
    'about.professional.client.desc': 'Assumo ownership de ponta a ponta—da arquitetura e implementação até entrega em produção. Colaboro de perto com stakeholders e traduzo requisitos em soluções bem engenheiradas.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.achievements.revenue': 'Receita $90K+',
    'about.achievements.revenue.desc': 'Construiu e operou plataforma e-commerce lucrativa gerando mais de $90.000 em vendas totais',
    'about.achievements.projects': '10+ Sistemas em Produção',
    'about.achievements.projects.desc': 'Entregou projetos diversos em e-commerce, SaaS e plataformas enterprise',
    'about.achievements.international': 'Trabalho Remoto Global',
    'about.achievements.international.desc': 'Experiência trabalhando com times internacionais nos EUA, Canadá, Portugal e Brasil',
    'about.achievements.excellence': 'Liderança Técnica',
    'about.achievements.excellence.desc': 'Ownership técnico de ponta a ponta, da arquitetura ao deployment',
    'about.summary.paragraph1': 'Sou um Engenheiro Full Stack Sênior que construiu e operou uma plataforma de e-commerce lucrativa gerando mais de $90.000 em vendas totais, junto com 5+ anos de experiência prática desenvolvendo aplicações web de produção.',
    'about.summary.paragraph2': 'Me especializo em construir arquiteturas frontend escaláveis com React e Next.js, serviços backend robustos com Node.js e TypeScript, e lógica de negócio customizada para e-commerce, produtos SaaS e plataformas internas. Meu trabalho consistentemente equilibra código limpo, performance e impacto mensurável no negócio.',
    'about.summary.paragraph3': 'Trabalhei em ambientes internacionais, totalmente remotos, assumindo ownership de features de ponta a ponta—da arquitetura e implementação até entrega em produção e otimização contínua.',

    // Contact page
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Tem um projeto em mente ou está procurando um Engenheiro Full Stack? Adoraria ouvir de você! Seja uma plataforma e-commerce, aplicação SaaS ou expertise em desenvolvimento web, sinta-se à vontade para entrar em contato.',
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
    'footer.subtitle': 'Engenheiro Full Stack Sênior',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Contato',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Dicas de desenvolvimento Full Stack',
    'footer.newsletter.cta': 'Leia o Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. Todos os direitos reservados.',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights de Desenvolvimento Full Stack',
    'blog.description': 'Pensamentos, tutoriais e insights sobre desenvolvimento Full Stack, React, Node.js e engenharia web.',
    'blog.readmore': 'Ler Mais',
    'blog.coming': 'Em Breve',
    'blog.coming.desc': 'Fique ligado para artigos e tutoriais de desenvolvimento Full Stack.',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check for saved language preference, default to English
    const savedLanguage = localStorage.getItem('language') as Language
    setLanguage(savedLanguage || 'en')
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