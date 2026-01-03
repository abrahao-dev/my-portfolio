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
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'iOS Software Engineer',
    'home.description': 'Building and shipping real-world mobile applications, from architecture design to App Store delivery. Specialized in Swift, SwiftUI, UIKit, and MVVM with a focus on clean architecture and Apple platform best practices.',
    'home.stats.apps': 'Apps Published',
    'home.stats.apps.value': '2+',
    'home.newsletter.title': 'iOS Development Insights',
    'home.newsletter.desc': 'Subscribe to get the latest iOS development tips, Swift tutorials, and industry insights.',
    'home.newsletter.placeholder': 'Enter your email',
    'home.newsletter.cta': 'Subscribe',
    'home.stats.experience': 'Years Experience',
    'home.stats.projects': 'iOS Projects',
    'home.stats.technologies': 'Technologies',
    'home.cta.projects': 'View Projects',
    'home.cta.resume': 'Resume',
    'home.cta.contact': 'Get in Touch',
    'home.skills.title': 'Core Technologies',
    'home.connect.title': "Let's Connect",
    'home.connect.subtitle': 'Open to remote opportunities as an iOS Software Engineer',

    // About page
    'about.title': 'About Me',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I believe in writing clean, maintainable Swift code that follows SOLID principles and clean architecture patterns. Every iOS solution I build is designed to be scalable, performant, and aligned with Apple Human Interface Guidelines.',
    'about.professional.business.title': 'User-Centered Design',
    'about.professional.business.desc': 'My approach prioritizes excellent user experience and strict alignment with Apple platform best practices. I focus on delivering solutions that not only work technically but also provide real value to users.',
    'about.professional.learning.title': 'Continuous Learning',
    'about.professional.learning.desc': 'The Apple ecosystem evolves rapidly, and I stay current with the latest iOS APIs, SwiftUI updates, and best practices. I\'m passionate about modern iOS development patterns and architectural approaches.',
    'about.professional.client.title': 'Product Ownership',
    'about.professional.client.desc': 'I am comfortable taking technical ownership, collaborating closely with designers and backend engineers, and translating product requirements into well-engineered, maintainable solutions.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.achievements.apps': 'Apps on App Store',
    'about.achievements.apps.desc': 'Successfully built and published production iOS applications on the App Store',
    'about.achievements.projects': 'iOS Projects Delivered',
    'about.achievements.projects.desc': 'Completed diverse projects across native iOS development with Swift and SwiftUI',
    'about.achievements.international': 'Open Source Contributor',
    'about.achievements.international.desc': 'Contributing to open-source iOS projects including Greenstand Treetracker',
    'about.achievements.excellence': 'Technical Excellence',
    'about.achievements.excellence.desc': 'Consistently delivered high-quality iOS solutions following Apple platform standards',
    'about.summary.paragraph1': 'I am an iOS Software Engineer focused on building and shipping real-world mobile applications, from architecture design to App Store delivery. I work primarily with Swift, SwiftUI, UIKit, and MVVM, developing native iOS apps with a strong emphasis on clean architecture, performance, scalability, and long-term maintainability.',
    'about.summary.paragraph2': 'I have hands-on experience delivering production iOS applications, including independent apps published on the App Store, open-source contributions, and collaborative projects within distributed teams. I have worked across the full product lifecycle, covering UI development, business logic, local data persistence, notifications, widgets, localization, and deployment.',
    'about.summary.paragraph3': 'With a background in Computer Engineering, I bring a solid foundation in data structures, systems, and software design, which I apply daily to mobile development. I am currently open to remote opportunities as an iOS Software Engineer, where engineering quality, product thinking, and real user impact are valued.',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Have an iOS project in mind or want to work together? I\'d love to hear from you! Whether you need a native iOS app or just want to discuss mobile development, feel free to reach out.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell me about your iOS project or how I can help...',
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
    'footer.subtitle': 'iOS Software Engineer',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Get iOS tips and updates',
    'footer.newsletter.cta': 'Read the Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. All rights reserved.',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'iOS Development Insights',
    'blog.description': 'Thoughts, tutorials, and insights about iOS development, Swift, and mobile engineering.',
    'blog.readmore': 'Read More',
    'blog.coming': 'Coming Soon',
    'blog.coming.desc': 'Stay tuned for iOS development articles and tutorials.',
  },
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Homepage
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'Engenheiro de Software iOS',
    'home.description': 'Construindo e publicando aplicativos móveis do mundo real, desde o design da arquitetura até a entrega na App Store. Especializado em Swift, SwiftUI, UIKit e MVVM com foco em arquitetura limpa e melhores práticas da plataforma Apple.',
    'home.stats.apps': 'Apps Publicados',
    'home.stats.apps.value': '2+',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.projects': 'Projetos iOS',
    'home.stats.technologies': 'Tecnologias',
    'home.cta.projects': 'Ver Projetos',
    'home.cta.contact': 'Entre em Contato',
    'home.skills.title': 'Tecnologias Principais',
    'home.connect.title': 'Vamos Conectar',
    'home.connect.subtitle': 'Aberto a oportunidades remotas como Engenheiro de Software iOS',
    'home.newsletter.title': 'Insights de Desenvolvimento iOS',
    'home.newsletter.desc': 'Inscreva-se para receber dicas de desenvolvimento iOS, tutoriais de Swift e insights da indústria.',
    'home.newsletter.placeholder': 'Digite seu email',
    'home.newsletter.cta': 'Inscrever-se',

    // About page
    'about.title': 'Sobre Mim',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Acredito em escrever código Swift limpo e sustentável que segue os princípios SOLID e padrões de arquitetura limpa. Toda solução iOS que construo é projetada para ser escalável, performática e alinhada com as Human Interface Guidelines da Apple.',
    'about.professional.business.title': 'Design Centrado no Usuário',
    'about.professional.business.desc': 'Minha abordagem prioriza excelente experiência do usuário e alinhamento estrito com as melhores práticas da plataforma Apple. Foco em entregar soluções que não apenas funcionam tecnicamente, mas também fornecem valor real aos usuários.',
    'about.professional.learning.title': 'Aprendizado Contínuo',
    'about.professional.learning.desc': 'O ecossistema Apple evolui rapidamente, e eu me mantenho atualizado com as últimas APIs iOS, atualizações do SwiftUI e melhores práticas. Sou apaixonado por padrões modernos de desenvolvimento iOS e abordagens arquiteturais.',
    'about.professional.client.title': 'Ownership Técnico',
    'about.professional.client.desc': 'Me sinto confortável assumindo ownership técnico, colaborando de perto com designers e engenheiros backend, e traduzindo requisitos de produto em soluções bem engenheiradas e sustentáveis.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.achievements.apps': 'Apps na App Store',
    'about.achievements.apps.desc': 'Construiu e publicou com sucesso aplicativos iOS de produção na App Store',
    'about.achievements.projects': 'Projetos iOS Entregues',
    'about.achievements.projects.desc': 'Completou projetos diversos em desenvolvimento iOS nativo com Swift e SwiftUI',
    'about.achievements.international': 'Contribuidor Open Source',
    'about.achievements.international.desc': 'Contribuindo para projetos iOS open-source incluindo Greenstand Treetracker',
    'about.achievements.excellence': 'Excelência Técnica',
    'about.achievements.excellence.desc': 'Entregou consistentemente soluções iOS de alta qualidade seguindo padrões da plataforma Apple',
    'about.summary.paragraph1': 'Sou um Engenheiro de Software iOS focado em construir e publicar aplicativos móveis do mundo real, desde o design da arquitetura até a entrega na App Store. Trabalho principalmente com Swift, SwiftUI, UIKit e MVVM, desenvolvendo apps iOS nativos com forte ênfase em arquitetura limpa, performance, escalabilidade e manutenibilidade a longo prazo.',
    'about.summary.paragraph2': 'Tenho experiência prática entregando aplicativos iOS de produção, incluindo apps independentes publicados na App Store, contribuições open-source e projetos colaborativos em equipes distribuídas. Trabalhei em todo o ciclo de vida do produto, cobrindo desenvolvimento de UI, lógica de negócio, persistência de dados local, notificações, widgets, localização e deployment.',
    'about.summary.paragraph3': 'Com formação em Engenharia da Computação, trago uma base sólida em estruturas de dados, sistemas e design de software, que aplico diariamente no desenvolvimento mobile. Estou atualmente aberto a oportunidades remotas como Engenheiro de Software iOS, onde qualidade de engenharia, pensamento de produto e impacto real no usuário são valorizados.',

    // Contact page
    'contact.title': 'Entre em Contato',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Tem um projeto iOS em mente ou quer trabalhar junto? Adoraria ouvir de você! Seja um app iOS nativo ou apenas quer discutir desenvolvimento mobile, sinta-se à vontade para entrar em contato.',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto iOS ou como posso ajudar...',
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
    'footer.subtitle': 'Engenheiro de Software iOS',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Contato',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Receba dicas de iOS',
    'footer.newsletter.cta': 'Leia o Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. Todos os direitos reservados.',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights de Desenvolvimento iOS',
    'blog.description': 'Pensamentos, tutoriais e insights sobre desenvolvimento iOS, Swift e engenharia mobile.',
    'blog.readmore': 'Ler Mais',
    'blog.coming': 'Em Breve',
    'blog.coming.desc': 'Fique ligado para artigos e tutoriais de desenvolvimento iOS.',
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