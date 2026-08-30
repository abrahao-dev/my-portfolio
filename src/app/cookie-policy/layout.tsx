import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Política de Cookies',
  description:
    'Which cookies and browser storage matheusabrahao.com.br uses, what each one is for, and how to inspect or clear them.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/cookie-policy',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/cookie-policy',
      'en': 'https://matheusabrahao.com.br/cookie-policy',
      'x-default': 'https://matheusabrahao.com.br/cookie-policy',
    },
  },
  openGraph: {
    title: 'Cookie Policy | Matheus Abrahão',
    description:
      'This site sets no tracking cookies. Here is exactly what it does store in your browser and how to clear it.',
    url: 'https://matheusabrahao.com.br/cookie-policy',
  },
  robots: { index: true, follow: true },
}

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
