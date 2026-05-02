import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // AI / LLM crawlers explicitly allowed so the portfolio surfaces in
  // ChatGPT, Claude, Perplexity, Gemini, Copilot, and similar AI search.
  const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'GoogleOther',
    'Applebot',
    'Applebot-Extended',
    'Bytespider',
    'Amazonbot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'CCBot',
    'cohere-ai',
    'YouBot',
    'DuckAssistBot',
    'MistralAI-User',
    'PetalBot',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      ...aiCrawlers.map((bot) => ({
        userAgent: bot,
        allow: '/',
      })),
    ],
    sitemap: 'https://matheusabrahao.com.br/sitemap.xml',
    host: 'https://matheusabrahao.com.br',
  }
}