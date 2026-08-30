import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Política de Privacidade',
  description:
    'How matheusabrahao.com.br handles personal data: what is collected, what is not, third parties involved, and your rights under LGPD, GDPR, CCPA/CPRA and PIPEDA.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/privacy-policy',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/privacy-policy',
      'en': 'https://matheusabrahao.com.br/privacy-policy',
      'x-default': 'https://matheusabrahao.com.br/privacy-policy',
    },
  },
  openGraph: {
    title: 'Privacy Policy | Matheus Abrahão',
    description:
      'What data this site collects (almost none), who processes it, and how to exercise your rights.',
    url: 'https://matheusabrahao.com.br/privacy-policy',
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
