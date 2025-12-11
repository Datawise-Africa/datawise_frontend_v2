export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

// Update this with your actual domain when deploying
const baseUrl =
  typeof window !== 'undefined'
    ? window.location.origin
    : process.env.PUBLIC_URL || 'https://datawiseafrica.com';

const defaultImage = `${baseUrl}/datawise-logo-dark.png`; // Create a 1200x630px image and place it in /public

export function generateSEOTags(config: SEOConfig) {
  const {
    title,
    description,
    url,
    image = defaultImage,
    type = 'website',
    keywords,
  } = config;

  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return [
    // Basic Meta Tags
    { title },
    { name: 'description', content: description },
    ...(keywords ? [{ name: 'keywords', content: keywords }] : []),

    // Open Graph Tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: fullUrl },
    { property: 'og:image', content: fullImageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:site_name', content: 'Felix Orinda - Portfolio' },

    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: fullImageUrl },
    { name: 'twitter:image:alt', content: title },
    { name: 'twitter:creator', content: '@datawiseafrica' }, // Update with your Twitter handle if you have one

    // Additional SEO
    { name: 'author', content: 'Datawise Africa' },
    { name: 'robots', content: 'index, follow' },
  ];
}
