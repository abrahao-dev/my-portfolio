/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // O site é servido no www (o apex faz 308 para lá); o apex fica na lista
      // porque links antigos ainda apontam para ele.
      {
        protocol: 'https',
        hostname: 'www.matheusabrahao.com.br',
      },
      {
        protocol: 'https',
        hostname: 'matheusabrahao.com.br',
      },
    ],
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        // llms.txt e llms-full.txt são text/plain, então não têm como carregar
        // <link rel="canonical">. Estão no sitemap (é como os crawlers de IA
        // acham eles), e sem canonical o Google marcou os dois como
        // "Duplicate without user-selected canonical": os textos se sobrepõem
        // entre si e com o conteúdo do site. O header Link resolve: canonical
        // apontando para ele mesmo, sem tirar do sitemap.
        source: '/llms.txt',
        headers: [
          {
            key: 'Link',
            value: '<https://www.matheusabrahao.com.br/llms.txt>; rel="canonical"',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Link',
            value: '<https://www.matheusabrahao.com.br/llms-full.txt>; rel="canonical"',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
