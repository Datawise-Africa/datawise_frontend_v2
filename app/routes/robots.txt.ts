import type { Route } from './+types/robots.txt';

export const loader = ({ request }: Route.LoaderArgs) => {
  const { origin } = new URL(request.url);
  const noIndex = Boolean(import.meta.env.VITE_NOINDEX);

  const body = noIndex
    ? `User-agent: *\nDisallow: /\n`
    : [
        'User-agent: *',
        'Allow: /',
        '',
        'Disallow: /.well-known/',
        '',
        '# AI / LLM crawlers — explicitly welcomed',
        'User-agent: GPTBot',
        'Allow: /',
        '',
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'User-agent: ChatGPT-User',
        'Allow: /',
        '',
        'User-agent: ClaudeBot',
        'Allow: /',
        '',
        'User-agent: anthropic-ai',
        'Allow: /',
        '',
        'User-agent: PerplexityBot',
        'Allow: /',
        '',
        'User-agent: Google-Extended',
        'Allow: /',
        '',
        'User-agent: CCBot',
        'Allow: /',
        '',
        `Sitemap: ${origin}/sitemap.xml`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
