import { env } from '~/lib/env';
import type { Route } from './+types/llms-full.txt';

export const loader = ({ request }: Route.LoaderArgs) => {
  const origin = env.VITE_SITE_URL ?? new URL(request.url).origin;

  const body = `# Datawise Africa — Full Site Content

> Research and development company building trusted data systems, AI solutions, and critical infrastructure for Africa.

Website: ${origin}
Email: info@datawiseafrica.com
Phone: +254 704 237 879
Address: Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya
LinkedIn: https://www.linkedin.com/company/datawise-africa

---

## About Datawise Africa

Datawise Africa is a research and development company committed to solving Africa's pressing challenges through data and AI innovation. Based in Nairobi, Kenya, we build trusted data systems, conduct applied research, and develop critical infrastructure while fostering local research leadership across the continent.

We create high-quality datasets, develop practical AI systems, and research sustainable compute infrastructure. Our work spans across data science, machine learning, natural language processing, software engineering, and cloud infrastructure — all tailored to African contexts and challenges.

### Our Values

- **Excellence in Innovation**: We pursue cutting-edge solutions with a commitment to high-quality research, data, and technology.
- **Integrity and Impact**: Our datasets, models, and infrastructure are built with responsibility and a deep focus on creating real, lasting change.
- **Collaboration**: We believe in the power of partnerships across research institutions, governments, and the private sector.

---

## Services

### Data & Research
- **Data Infrastructure**: Designing and building robust data pipelines, warehouses, and governance frameworks
- **Strategic Intelligence**: Transforming raw data into actionable insights for decision-making
- **Applied Research**: Conducting rigorous research to solve real-world problems across African contexts

### Software Engineering
- **Custom Applications**: Full-stack web and mobile application development
- **API Development**: Designing, building, and maintaining scalable RESTful and GraphQL APIs
- **Project Management**: End-to-end technical project management and delivery

### AI Services
- **AI Engineering**: Building and deploying machine learning models at scale
- **Generative AI**: Developing generative AI solutions including large language models and content generation
- **Natural Language Processing**: Text analytics, sentiment analysis, and language understanding for African languages

### Infrastructure
- **Cloud Architecture**: Designing scalable, secure cloud solutions on AWS, GCP, and Azure
- **Compute Infrastructure**: GPU clusters, HPC, and edge computing for AI workloads
- **DevOps & CI/CD**: Automated deployment pipelines, monitoring, and infrastructure as code

---

## Products

### Platforms

**Datalab** — https://datalabafrica.com
Open dataset discovery and collaboration platform. Search, filter, and download curated African datasets to accelerate analytics, machine learning, and policy projects while rewarding dataset creators.

**African Stack** — ${origin}/products
The nerve center of Africa's data, AI & infrastructure evolution. A comprehensive platform tracking and connecting the continent's technology ecosystem.

**Sheria AI** — ${origin}/products
A Kenyan legal platform providing court rulings, legal insights, and an AI chatbot with advanced search and filtering. Designed for legal professionals, researchers, and citizens seeking accessible legal information.

### Datasets

**Eduken**
Education dataset capturing learning outcomes and access across African contexts. Covers school enrollment, performance metrics, infrastructure, and educational policy indicators.

**Afyaken**
Health dataset surfacing care delivery, outcomes, and public health signals. Includes hospital data, disease prevalence, treatment outcomes, and healthcare infrastructure metrics across Kenya.

**Sheria Corpus**
Legal corpus of Kenyan court rulings, statutes, and regulatory texts. A comprehensive collection of legal documents powering the Sheria AI platform.

---

## Careers

Datawise Africa is always looking for talented individuals passionate about data, AI, and African development. Open positions span data science, machine learning engineering, software development, research, and operations.

Visit ${origin}/careers for current openings.

---

## Partnerships

We partner with research institutions, governments, NGOs, and private sector organizations to drive data and AI innovation across Africa. Partnership opportunities include joint research, data sharing, technology transfer, and capacity building.

Apply to become a partner: ${origin}/become-a-partner

---

## Contact

For inquiries, partnerships, projects, and general questions:

- **Email**: info@datawiseafrica.com
- **Phone**: +254 704 237 879
- **Address**: Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya
- **Contact Form**: ${origin}/contact-us
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
