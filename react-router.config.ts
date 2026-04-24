import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  // Pre-render static public pages for fast TTFB + better SEO.
  prerender: [
    '/',
    '/about-us',
    '/services',
    '/products',
    '/datalab',
    '/become-a-partner',
    '/contact-us',
    '/careers',
    '/partners',
    '/privacy-policy',
    '/robots.txt',
    '/sitemap.xml',
  ],
} satisfies Config;
