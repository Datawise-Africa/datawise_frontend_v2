import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/products';
import { href, Link } from 'react-router';
import { Icon } from '@iconify/react';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Products | Datawise Africa',
      description:
        'Products applying AI, data, and digital infrastructure to real African challenges — practical tools for research, law, health, and education.',
      url: href('/products'),
      keywords:
        'datawise, datalab, afyaken, eduken, data products africa, ai for development, data infrastructure',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Datalab',
          applicationCategory: 'DataApplication',
          description:
            'Open dataset discovery and collaboration platform for curated African datasets.',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Sheria AI',
          applicationCategory: 'LegalApplication',
          description:
            'Kenyan legal platform providing court rulings, legal insights, and an AI chatbot with advanced search and filtering.',
          operatingSystem: 'Web',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'Eduken',
          description:
            'Education dataset capturing learning outcomes and access across African contexts.',
          creator: { '@type': 'Organization', name: 'Datawise Africa' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'Afyaken',
          description:
            'Health dataset surfacing care delivery, outcomes, and public health signals across Kenya.',
          creator: { '@type': 'Organization', name: 'Datawise Africa' },
        },
      ],
    }),
  ];
}

const featuredProjects: {
  slug: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
  accentClass: string;
  accentBgClass: string;
}[] = [
  {
    slug: 'datalab',
    icon: 'tabler:database',
    title: 'Datalab',
    description:
      'DataLab is a platform for hosting, managing, and publishing data products. It enables creators to create and upload datasets, while also supporting richer data products such as dashboards and reports that deliver actionable insights. Designed for accessibility and usability, DataLab helps users discover, share, and turn data into meaningful impact.',
    link: 'https://datalabafrica.com',
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10 dark:bg-primary/20',
  },
  {
    slug: 'sheria-ai',
    icon: 'tabler:school',
    title: 'Sheria AI',
    description:
      'Sheria AI is a Kenyan legal intelligence platform designed for lawyers, researchers, and anyone navigating the legal system. It combines an AI-powered chatbot with advanced search and filtering to help users quickly find relevant court rulings, understand legal principles, and generate practical legal insights. ',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
    link: 'https://sheria.africa',
  },
  {
    slug: 'african-stack',
    icon: 'tabler:heartbeat',
    title: 'African Stack',
    description:
      'The African Stack covers the ideas, research, and technologies shaping the continent’s future. Through in-depth articles, podcast conversations, and monthly newsletter updates, we connect Africa’s next wave of change makers with the insights that matter.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
    link: 'https://theafricanstack.com',
  },
];

const datasets: {
  slug: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  headerBgClass: string;
}[] = [
  {
    slug: 'eduken',
    icon: 'tabler:school',
    category: 'Education',
    title: 'Eduken',
    description:
      'A dataset of institutions of higher learning, course programmes, and facilities that support academic growth in Kenya. Built to support education research, planning, and policy.',
    headerBgClass: 'bg-teal-600 dark:bg-teal-700',
  },
  {
    slug: 'afyaken',
    icon: 'tabler:building-hospital',
    category: 'Health',
    title: 'Afyaken',
    description:
      'A comprehensive health facilities dataset covering Level 4 and 5 hospitals across Kenya, mapping hospital distribution, ownership, and capacity across the country.',
    headerBgClass: 'bg-emerald-700 dark:bg-emerald-800',
  },
  {
    slug: 'sheria-corpus',
    icon: 'tabler:scale',
    category: 'Legal',
    title: 'Sheria Corpus',
    description:
      'A curated legal dataset of landmark rulings from Kenya’s judiciary. Structured and annotated to enhance transparency, accessibility, and innovation in legal research and AI.',
    headerBgClass: 'bg-yellow-700 dark:bg-yellow-800',
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="text-center md:text-left space-y-6">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                  Driving Change Through
                  <span className="text-primary"> Data Research</span>
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
                  Our research initiatives focus on solving Africa&rsquo;s
                  most pressing challenges, from climate resilience to economic
                  development.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg" className="h-auto px-6 py-3">
                    <Link to={href('/partners')}>
                      Collaborate With Us
                      <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="flex justify-center">
                <img
                  src="/assets/projects/Projects - Hero.svg"
                  alt="Projects"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section> */}
      {/* Featured Projects Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="text-center mb-12 space-y-2">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
              Our Products
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              We provide and build solutions that turn ideas into real-world
              impact. From AI tools and data platforms to tech stacks and
              knowledge hubs, our initiatives combine innovation and insight to
              tackle real challenges. We transform information into actionable
              insights that drive meaningful outcomes.
            </p>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => {
              return (
                <StaggerItem key={project.slug}>
                  <div
                    id={project.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full scroll-mt-24"
                  >
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${project.accentBgClass} mb-5 group-hover:bg-primary transition-colors duration-300`}
                    >
                      <Icon
                        icon={project.icon}
                        className={`h-7 w-7 ${project.accentClass} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <h4
                      className={`text-xl font-bold mb-2 ${project.accentClass}`}
                    >
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>
                    {project.link && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button
                          asChild
                          variant="ghost"
                          className="p-0 h-auto text-sm font-semibold text-primary hover:bg-transparent hover:text-primary/80 group/btn"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Explore ${project.title}`}
                          >
                            Explore {project.title}
                            <Icon
                              icon="tabler:arrow-right"
                              className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                            />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Datasets Section */}
      <section
        id="datasets"
        className="bg-section-green dark:bg-section-green-dark scroll-mt-24"
      >
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-12 space-y-2">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
                Our Datasets
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                Structured, high-quality, well-documented datasets built for
                African contexts available via DataLab.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {datasets.map((dataset) => {
              return (
                <StaggerItem key={dataset.slug}>
                  <article
                    id={dataset.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full scroll-mt-24"
                  >
                    <div
                      className={`flex items-center gap-3 px-6 py-4 ${dataset.headerBgClass}`}
                    >
                      <Icon
                        icon={dataset.icon}
                        className="h-7 w-7 text-white shrink-0"
                      />
                      <span className="text-sm font-semibold uppercase tracking-wider text-white">
                        {dataset.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 p-6 flex-1">
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">
                        {dataset.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {dataset.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-border">
                        <Button
                          asChild
                          variant="ghost"
                          className="p-0 h-auto text-sm font-semibold text-primary hover:bg-transparent hover:text-primary/80 group/btn"
                        >
                          <a
                            href="https://datalabafrica.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${dataset.title} dataset on Datalab`}
                          >
                            View {dataset.title}
                            <Icon
                              icon="tabler:arrow-right"
                              className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                            />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="bg-primary text-white rounded-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-8 md:justify-between">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Have a project idea?
                </h3>
                <p className="mt-3 text-lg text-white/80 leading-relaxed">
                  Collaboration is at the heart of our mission. We welcome
                  diverse partners ready to co‑create solutions for Africa’s
                  future
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 h-auto py-3 dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20 shrink-0"
              >
                <Link to={href('/contact-us')}>
                  Get In Touch
                  <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
