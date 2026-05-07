/**
 * Schema.org JSON-LD builders for Datawise Africa.
 */
import { env } from '~/lib/env';

const SITE_NAME = 'Datawise Africa';
const SITE_URL = env.VITE_SITE_URL;
const LOGO_URL = `${SITE_URL}/assets/datawise-logo-dark.png`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: ['https://www.linkedin.com/company/datawise-africa'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export interface ArticleLike {
  title: string;
  description: string;
  slug: string;
  basePath?: string;
  author?: string;
  published_at?: string;
  updated_at?: string;
  image?: string;
}

export function articleSchema(article: ArticleLike) {
  const base = article.basePath ?? '/articles';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${base}/${article.slug}`,
    ...(article.image ? { image: article.image } : {}),
    ...(article.author
      ? { author: { '@type': 'Person', name: article.author } }
      : {}),
    ...(article.published_at ? { datePublished: article.published_at } : {}),
    ...(article.updated_at ? { dateModified: article.updated_at } : {}),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
  };
}
