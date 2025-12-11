import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  layout('layouts/base-layout.tsx', [
    index('routes/home.tsx'),
    route('about-us', 'routes/about-us.tsx'),
    route('projects', 'routes/projects.tsx'),
    route('datalab', 'routes/datalab.tsx'),
    ...prefix('tools', [
      route('GPT', 'routes/tools.GPT.tsx'),
      route('sheria-ai', 'routes/tools.sheria-ai.tsx'),
    ]),
    route('job-description/:slug', 'routes/job-description.$slug.tsx'),

    route('become-a-partner', 'routes/become-a-partner.tsx'),
    route('contact-us', 'routes/contact-us.tsx'),
    route('jobs', 'routes/jobs.tsx'),
    route('partners', 'routes/partners.tsx'),
    route('privacy-policy', 'routes/privacy-policy.tsx'),
    route('sitemap.xml', 'routes/sitemap.xml.ts'),
    route(
      '.well-known/appspecific/com.chrome.devtools.json',
      'routes/[.]well-known.appspecific.[com.chrome.devtools.json].ts'
    ),
  ]),
] satisfies RouteConfig;
