import { env } from '~/lib/env';
import type { Route } from './+types/llms.txt';

export const loader = ({ request }: Route.LoaderArgs) => {
  const origin = env.VITE_SITE_URL ?? new URL(request.url).origin;

  const body = `# Datawise Africa

> Research and development company building trusted data systems, AI solutions, and critical infrastructure for Africa.

## About

Datawise Africa is a research and development company committed to solving Africa's pressing challenges through data and AI innovation. Based in Nairobi, Kenya, we build trusted data systems, conduct applied research, and develop critical infrastructure while fostering local research leadership across Africa.

## Services

- [Data & Research](${origin}/services): Data infrastructure, strategic intelligence, and applied research services
- [Software Engineering](${origin}/services): Custom applications, API development, and project management
- [AI Services](${origin}/services): AI engineering, generative AI, and natural language processing
- [Infrastructure](${origin}/services): Cloud architecture, compute infrastructure, and DevOps

## Products

- [Datalab](https://datalabafrica.com): Open dataset discovery and collaboration platform for African datasets
- [African Stack](${origin}/products): The nerve center of Africa's data, AI & infrastructure evolution
- [Sheria AI](${origin}/products): Kenyan legal platform with court rulings, legal insights, and AI chatbot
- [Eduken](${origin}/products): Education dataset capturing learning outcomes across African contexts
- [Afyaken](${origin}/products): Health dataset surfacing care delivery and public health signals
- [Sheria Corpus](${origin}/products): Legal corpus of Kenyan court rulings, statutes, and regulatory texts

## Key Pages

- [Home](${origin}/): Landing page with company overview and mission
- [About Us](${origin}/about-us): Our mission, team, and how we build for African contexts
- [Services](${origin}/services): Full list of data, AI, engineering, and infrastructure services
- [Products](${origin}/products): Platforms and datasets we are building
- [Datalab](https://datalabafrica.com): Curated African dataset discovery platform
- [Careers](${origin}/careers): Open positions and job opportunities
- [Partners](${origin}/partners): Our partnership network
- [Become a Partner](${origin}/become-a-partner): Partnership application form
- [Contact Us](${origin}/contact-us): Reach out for partnerships, projects, and inquiries
- [Privacy Policy](${origin}/privacy-policy): How we collect, use, and protect personal information

## Contact

- Email: info@datawiseafrica.com
- Phone: +254 704 237 879
- Address: Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya
- LinkedIn: https://www.linkedin.com/company/datawise-africa

## Optional

- For the full detailed content of this site, see [llms-full.txt](${origin}/llms-full.txt)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
