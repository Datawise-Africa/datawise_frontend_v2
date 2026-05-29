import {
  type RouteConfig,
  index,
  layout,
  // prefix,
  route,
} from '@react-router/dev/routes';

export default [
  // Datawise public site (base layout with header/footer)
  layout('layouts/base-layout.tsx', [
    index('routes/home.tsx'),
    route('about-us', 'routes/about-us.tsx'),
    route('services', 'routes/services.tsx'),
    route('products', 'routes/products.tsx'),
    // datalab is hosted externally at datalab.datawiseafrica.com
    // ...prefix('tools', [
    //   route('GPT', 'routes/tools.GPT.tsx'),
    //   route('sheria-ai', 'routes/tools.sheria-ai.tsx'),
    // ]),
    route('career-description/:slug', 'routes/career-description.$slug.tsx'),
    route('become-a-partner', 'routes/become-a-partner.tsx'),
    route('contact-us', 'routes/contact-us.tsx'),
    route('careers', 'routes/careers.tsx'),
    route('partners', 'routes/partners.tsx'),
    route('privacy-policy', 'routes/privacy-policy.tsx'),
  ]),
  route('sitemap.xml', 'routes/sitemap.xml.ts'),
  route('robots.txt', 'routes/robots.txt.ts'),
  route('llms.txt', 'routes/llms.txt.ts'),
  route('llms-full.txt', 'routes/llms-full.txt.ts'),
  route(
    '.well-known/appspecific/com.chrome.devtools.json',
    'routes/[.]well-known.appspecific.[com.chrome.devtools.json].ts'
  ),
] satisfies RouteConfig;
