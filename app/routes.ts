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
    route('datalab', 'routes/datalab.tsx'),
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
  route(
    '.well-known/appspecific/com.chrome.devtools.json',
    'routes/[.]well-known.appspecific.[com.chrome.devtools.json].ts'
  ),
] satisfies RouteConfig;
