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
    'home.subtitle': 'Senior Software Engineer & Shopify Operator',
    'home.description': 'Senior Software Engineer and Shopify Operator with 5+ years scaling production-grade e-commerce ecosystems. Apple Swift Student Challenge 2026 Winner. Founded and operated my own brand to $90K+ in sales. Drove +455% sessions, +114% orders, and +74% revenue for an international luxury brand through technical SEO, catalog data management, and system automation.',
    'home.stats.experience': 'Years Experience',
    'home.stats.revenue': 'Revenue Built',
    'home.stats.projects': 'Production Systems',
    'home.stats.remote': 'Countries Served',
    'home.cta.projects': 'View My Work',
    'home.cta.contact': "Let's Talk",
    'home.cta.title': 'Ready to Scale Your Shopify Stack?',
    'home.cta.desc': 'Looking for an engineer who thinks like an operator? Catalog data, technical SEO, system automation — let\'s talk.',
    'home.skills.title': 'Core Technologies',
    'home.skills.subtitle': 'Stack I use to ship production-grade e-commerce ecosystems, web apps, mobile apps, and AI/automation systems',
    'home.connect.title': "Let's Connect",
    'home.connect.subtitle': 'Open to remote roles as a Senior Software Engineer and Shopify Operator',

    // About page
    'about.title': 'Senior Software Engineer & Shopify Operator',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I build scalable, maintainable systems using React, Next.js, Node.js, TypeScript, Swift, and SwiftUI. Every solution is designed for performance, reliability, and long-term maintainability.',
    'about.professional.business.title': 'Business Impact',
    'about.professional.business.desc': 'Engineering decisions should drive business outcomes. I focus on solutions that deliver measurable value — from $90K+ in e-commerce revenue to automated workflows that reduce operational costs.',
    'about.professional.learning.title': 'Continuous Improvement',
    'about.professional.learning.desc': 'The web evolves rapidly. I stay current with React patterns, Node.js best practices, and modern DevOps tooling to deliver the best possible solutions.',
    'about.professional.client.title': 'Product Ownership',
    'about.professional.client.desc': 'I take end-to-end ownership — from architecture and implementation to production delivery. I collaborate closely with stakeholders and translate requirements into well-engineered solutions.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.skills.shopify': 'Shopify Ecosystem',
    'about.skills.ecommerce': 'E-commerce Stack',
    'about.skills.web': 'Web Engineering',
    'about.skills.data': 'Data & Analytics',
    'about.skills.ai': 'AI & Automation',
    'about.skills.devops': 'DevOps & Tooling',
    'about.skills.mobile': 'iOS / Native',
    'about.achievements.apple': 'Apple WWDC Winner',
    'about.achievements.apple.desc': 'Selected as a global winner of the Apple Swift Student Challenge 2026, building a complete App Playground from scratch with Swift',
    'about.achievements.revenue': '+455% Growth',
    'about.achievements.revenue.desc': 'Drove +455% platform sessions, +114% orders, and +74% sales for an international luxury brand through technical SEO and optimization',
    'about.achievements.projects': '$90K+ Founder Revenue',
    'about.achievements.projects.desc': 'Built and operated my own e-commerce brand Martin end-to-end, generating over $90,000 in sales as a single founder',
    'about.achievements.international': 'Global Remote Work',
    'about.achievements.international.desc': 'Delivered solutions to clients across 10+ countries — USA, Canada, France, Portugal, and Brazil',
    'about.achievements.excellence': 'Technical Leadership',
    'about.achievements.excellence.desc': 'End-to-end technical ownership from architecture to deployment',
    'about.summary.paragraph1': "My first line of code was a C++ mod for a Rainbow Six Siege videogame. I was 14, had no idea what I was doing, and couldn't stop. That feeling — making a machine do exactly what I wanted — never went away.",
    'about.summary.paragraph2': "By 16, I was building websites for clients. But I didn't just want to write code; I wanted to see how technical architecture drives real business. So, I founded my own e-commerce brand, Martin. I built the entire technical stack from scratch, ran the marketing, and operated the business end-to-end, generating over $90,000 in sales.",
    'about.summary.paragraph3': "That experience shifted my entire career. It taught me how to think like an operator and a founder, making engineering decisions based on direct, measurable impact.",
    'about.summary.paragraph4': "Today, I bring that same end-to-end ownership to international brands. As a Senior Software Engineer and Shopify Operator at Scale Army, I design, implement, and scale production-grade e-commerce ecosystems — specializing in complex catalog data management, technical SEO, and system automation for high-volume B2B and B2C environments.",

    // Contact page
    'contact.title': "Let's Work Together",
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Have a project in mind or looking for a Software Engineer? I\'d love to hear from you! Whether you need an e-commerce platform, iOS app, SaaS application, or web development expertise, feel free to reach out.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell me about your project or how I can help...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your email app is opening with the message ready — just hit send. Prefer WhatsApp? Use the button below.',
    'contact.form.error.name': 'Name is required',
    'contact.form.error.name.length': 'Name must be at least 2 characters',
    'contact.form.error.email': 'Email is required',
    'contact.form.error.email.invalid': 'Please enter a valid email address',
    'contact.form.error.message': 'Message is required',
    'contact.form.error.message.length': 'Message must be at least 10 characters',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Senior Software Engineer & Shopify Operator',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Contact',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Full Stack development tips',
    'footer.newsletter.cta': 'Read the Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. All rights reserved.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',

    // Cookie consent banner
    'cookie.banner.title': 'A quick question about analytics',
    'cookie.banner.text': 'This site would like to use analytics cookies to measure which pages people read. Nothing loads until you choose, and no data is ever sold or used for advertising.',
    'cookie.banner.link': 'Read the cookie policy',
    'cookie.banner.accept': 'Accept',
    'cookie.banner.reject': 'Essential only',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Shopify Operations, E-commerce Engineering & SEO',
    'blog.description': 'Field notes on Shopify Operations, technical SEO, catalog data management, and e-commerce engineering — drawn from running production stores at high volume.',
    'blog.readmore': 'Read More',
    'blog.coming': 'Coming Soon',
    'blog.coming.desc': 'New articles on Shopify Operations and e-commerce engineering coming soon.',
    'blog.featured': 'Featured Articles',
    'blog.all': 'All Articles',
    'blog.subscribe': 'Subscribe to RSS feed for updates',
    'blog.newsletter.title': 'Stay Updated',
    'blog.newsletter.desc': 'Get notified when I publish new articles on Shopify Operations, technical SEO, catalog data, and e-commerce engineering.',
    'blog.newsletter.placeholder': 'Enter your email',
    'blog.newsletter.cta': 'Subscribe',

    // Projects
    'projects.title': 'Production Projects',
    'projects.subtitle': 'Shopify ecosystems, e-commerce platforms, and engineering work I\'ve shipped — each project built or operated end-to-end with measurable business impact.',
    'projects.featured': 'Featured Work',
    'projects.other': 'Open Source & Side Projects',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.impact': 'Impact',
    'projects.code': 'Code',
    'projects.live': 'View Live',
    'projects.github.title': 'More on GitHub',
    'projects.github.desc': 'More projects, contributions, and experiments are available on my GitHub profile.',
    'projects.github.cta': 'View GitHub Profile',
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
    'home.subtitle': 'Engenheiro de Software Sênior & Shopify Operator',
    'home.description': 'Engenheiro de Software Sênior e Shopify Operator com 5+ anos escalando ecossistemas de e-commerce em produção. Vencedor do Apple Swift Student Challenge 2026. Fundei e operei minha própria marca chegando a $90K+ em vendas. Gerei +455% de sessões, +114% de pedidos e +74% de receita para uma marca de luxo internacional via SEO técnico, gestão de catálogo e automação de sistemas.',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.revenue': 'Receita Gerada',
    'home.stats.projects': 'Sistemas em Produção',
    'home.stats.remote': 'Países Atendidos',
    'home.cta.projects': 'Ver Meu Trabalho',
    'home.cta.contact': 'Vamos Conversar',
    'home.cta.title': 'Pronto para Escalar sua Operação Shopify?',
    'home.cta.desc': 'Procurando um engenheiro que pensa como operador? Catálogo, SEO técnico, automação — vamos conversar.',
    'home.skills.title': 'Tecnologias Principais',
    'home.skills.subtitle': 'Stack que uso para entregar ecossistemas e-commerce, aplicações web, apps mobile e sistemas de IA/automação em produção',
    'home.connect.title': 'Vamos Conectar',
    'home.connect.subtitle': 'Aberto a posições remotas como Engenheiro de Software Sênior e Shopify Operator',

    // About page
    'about.title': 'Engenheiro de Software Sênior & Shopify Operator',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Construo sistemas escaláveis e sustentáveis usando React, Next.js, Node.js, TypeScript, Swift e SwiftUI. Toda solução é projetada para performance, confiabilidade e manutenibilidade a longo prazo.',
    'about.professional.business.title': 'Impacto no Negócio',
    'about.professional.business.desc': 'Decisões de engenharia devem gerar resultados de negócio. Foco em soluções que entregam valor mensurável — de $90K+ em receita de e-commerce a fluxos automatizados que reduzem custos operacionais.',
    'about.professional.learning.title': 'Melhoria Contínua',
    'about.professional.learning.desc': 'A web evolui rapidamente. Me mantenho atualizado com padrões React, melhores práticas Node.js e ferramentas modernas de DevOps para entregar as melhores soluções possíveis.',
    'about.professional.client.title': 'Ownership de Produto',
    'about.professional.client.desc': 'Assumo ownership ponta a ponta — da arquitetura e implementação até a entrega em produção. Colaboro de perto com stakeholders e traduzo requisitos em soluções bem engenheiradas.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.skills.shopify': 'Ecossistema Shopify',
    'about.skills.ecommerce': 'Stack E-commerce',
    'about.skills.web': 'Engenharia Web',
    'about.skills.data': 'Dados & Analytics',
    'about.skills.ai': 'IA & Automação',
    'about.skills.devops': 'DevOps & Ferramentas',
    'about.skills.mobile': 'iOS / Nativo',
    'about.achievements.apple': 'Apple WWDC Vencedor',
    'about.achievements.apple.desc': 'Selecionado como vencedor global do Apple Swift Student Challenge 2026, construindo um App Playground completo do zero com Swift',
    'about.achievements.revenue': '+455% de Crescimento',
    'about.achievements.revenue.desc': 'Gerei +455% de sessões, +114% de pedidos e +74% de vendas para uma marca de luxo internacional via SEO técnico e otimização',
    'about.achievements.projects': '$90K+ como Fundador',
    'about.achievements.projects.desc': 'Construí e operei minha própria marca de e-commerce Martin do zero, gerando mais de $90.000 em vendas como fundador único',
    'about.achievements.international': 'Trabalho Remoto Global',
    'about.achievements.international.desc': 'Entreguei soluções para clientes em 10+ países — EUA, Canadá, França, Portugal e Brasil',
    'about.achievements.excellence': 'Liderança Técnica',
    'about.achievements.excellence.desc': 'Ownership técnico de ponta a ponta, da arquitetura ao deployment',
    'about.summary.paragraph1': "Minha primeira linha de código foi um mod em C++ para o videogame Rainbow Six Siege. Eu tinha 14 anos, nenhuma ideia do que estava fazendo, e não conseguia parar. Aquela sensação — fazer uma máquina executar exatamente o que eu queria — nunca foi embora.",
    'about.summary.paragraph2': "Aos 16, já construía sites para clientes. Mas eu não queria só escrever código; queria ver como a arquitetura técnica gera negócio real. Então fundei minha própria marca de e-commerce, Martin. Construí toda a stack técnica do zero, conduzi o marketing e operei o negócio ponta a ponta, gerando mais de $90.000 em vendas.",
    'about.summary.paragraph3': "Essa experiência mudou minha carreira. Me ensinou a pensar como operador e fundador, tomando decisões de engenharia baseadas em impacto direto e mensurável.",
    'about.summary.paragraph4': "Hoje, levo essa mesma propriedade ponta a ponta para marcas internacionais. Como Engenheiro de Software Sênior e Shopify Operator na Scale Army, projeto, implemento e escalo ecossistemas de e-commerce em produção — especializado em gestão de dados de catálogo complexos, SEO técnico e automação de sistemas para ambientes B2B e B2C de alto volume.",

    // Contact page
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Tem um projeto em mente ou está procurando um Engenheiro de Software? Adoraria ouvir de você! Seja uma plataforma e-commerce, app iOS, aplicação SaaS ou expertise em desenvolvimento web, sinta-se à vontade para entrar em contato.',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto ou como posso ajudar...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Seu app de e-mail está abrindo com a mensagem pronta — é só enviar. Prefere WhatsApp? Use o botão abaixo.',
    'contact.form.error.name': 'Nome é obrigatório',
    'contact.form.error.name.length': 'Nome deve ter pelo menos 2 caracteres',
    'contact.form.error.email': 'Email é obrigatório',
    'contact.form.error.email.invalid': 'Por favor, insira um email válido',
    'contact.form.error.message': 'Mensagem é obrigatória',
    'contact.form.error.message.length': 'Mensagem deve ter pelo menos 10 caracteres',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Engenheiro de Software Sênior & Shopify Operator',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Contato',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Dicas de desenvolvimento Full Stack',
    'footer.newsletter.cta': 'Leia o Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. Todos os direitos reservados.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.cookies': 'Política de Cookies',

    // Banner de consentimento de cookies
    'cookie.banner.title': 'Uma pergunta rápida sobre analytics',
    'cookie.banner.text': 'Este site gostaria de usar cookies de analytics para medir quais páginas as pessoas leem. Nada carrega antes de você escolher, e nenhum dado é vendido ou usado para publicidade.',
    'cookie.banner.link': 'Leia a política de cookies',
    'cookie.banner.accept': 'Aceitar',
    'cookie.banner.reject': 'Somente essenciais',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Shopify Operations, Engenharia de E-commerce & SEO',
    'blog.description': 'Anotações de campo sobre Shopify Operations, SEO técnico, gestão de catálogo e engenharia de e-commerce — extraídas da operação de lojas em produção em alto volume.',
    'blog.readmore': 'Ler Mais',
    'blog.coming': 'Em Breve',
    'blog.coming.desc': 'Novos artigos sobre Shopify Operations e engenharia de e-commerce em breve.',
    'blog.featured': 'Artigos em Destaque',
    'blog.all': 'Todos os Artigos',
    'blog.subscribe': 'Assine o feed RSS para atualizações',
    'blog.newsletter.title': 'Fique Atualizado',
    'blog.newsletter.desc': 'Seja notificado quando publico novos artigos sobre Shopify Operations, SEO técnico, dados de catálogo e engenharia de e-commerce.',
    'blog.newsletter.placeholder': 'Digite seu e-mail',
    'blog.newsletter.cta': 'Inscrever',

    // Projects
    'projects.title': 'Projetos em Produção',
    'projects.subtitle': 'Ecossistemas Shopify, plataformas de e-commerce e trabalho de engenharia que eu entreguei — cada projeto construído ou operado ponta a ponta com impacto mensurável no negócio.',
    'projects.featured': 'Trabalhos em Destaque',
    'projects.other': 'Open Source & Projetos Pessoais',
    'projects.problem': 'Problema',
    'projects.solution': 'Solução',
    'projects.impact': 'Impacto',
    'projects.code': 'Código',
    'projects.live': 'Ver Online',
    'projects.github.title': 'Mais no GitHub',
    'projects.github.desc': 'Mais projetos, contribuições e experimentos estão disponíveis no meu perfil do GitHub.',
    'projects.github.cta': 'Ver Perfil do GitHub',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage === 'en' || savedLanguage === 'pt-BR') {
      setLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage === 'pt-BR' ? 'pt-BR' : 'en'
      return
    }
    // First visit: detect browser language. Domain is .com.br, so default to pt-BR
    // unless the user's browser is explicitly English-speaking.
    const browser = typeof navigator !== 'undefined' ? navigator.language || '' : ''
    const next: Language = browser.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
    setLanguage(next)
    document.documentElement.lang = next === 'pt-BR' ? 'pt-BR' : 'en'
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLanguage === 'pt-BR' ? 'pt-BR' : 'en'
    }
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