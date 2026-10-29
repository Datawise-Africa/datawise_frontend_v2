import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/products';
import { href, Link } from 'react-router';
import { Icon } from '@iconify/react';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';
import { datasets, featuredProjects, publications } from '~/lib/data/products';

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
        // {
        //   '@context': 'https://schema.org',
        //   '@type': 'Dataset',
        //   name: 'Eduken',
        //   description:
        //     'Education dataset capturing learning outcomes and access across African contexts.',
        //   creator: { '@type': 'Organization', name: 'Datawise Africa' },
        // },
        // {
        //   '@context': 'https://schema.org',
        //   '@type': 'Dataset',
        //   name: 'Afyaken',
        //   description:
        //     'Health dataset surfacing care delivery, outcomes, and public health signals across Kenya.',
        //   creator: { '@type': 'Organization', name: 'Datawise Africa' },
        // },
      ],
    }),
  ];
}

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
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
      {/* Platforms Section */}
      <ProductSection
        eyebrow="Our Products"
        title="Platforms"
        intro="We provide and build solutions that turn ideas into real-world impact. From AI tools and data platforms to tech stacks and knowledge hubs, our initiatives combine innovation and insight to tackle real challenges."
      >
        <StaggerChildren className="divide-y divide-border border-y border-border">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <article
                id={project.slug}
                className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 sm:items-start sm:gap-x-8 py-6 sm:py-8 scroll-mt-24"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 dark:bg-primary/20 sm:row-span-3">
                  <Icon
                    icon={project.icon}
                    className="h-5 w-5 sm:h-7 sm:w-7 text-primary"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {project.title}
                </h3>
                <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <div className="col-span-2 sm:col-span-1 sm:col-start-2">
                    <ArrowLink
                      href={project.link}
                      label={`Explore ${project.title}`}
                    />
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </ProductSection>

      {/* Datasets Section */}
      <ProductSection
        id="datasets"
        eyebrow="Our Datasets"
        title="Datasets"
        intro="Structured, high-quality, well-documented datasets built for African contexts, available via DataLab."
      >
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {datasets.map((dataset) => (
            <StaggerItem
              key={dataset.slug}
              className="md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <article
                id={dataset.slug}
                className="flex flex-col gap-3 h-full py-6 md:py-8 scroll-mt-24"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Icon icon={dataset.icon} className="h-4 w-4" />
                  {dataset.category}
                </span>
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {dataset.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {dataset.description}
                </p>
                <ArrowLink
                  href="https://datalabafrica.com/"
                  label={`View ${dataset.title}`}
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </ProductSection>

      {/* Publications Section */}
      <ProductSection
        id="publications"
        eyebrow="Research"
        title="Publications"
        intro="Research on the state of AI-ready data across Africa."
      >
        <StaggerChildren className="divide-y divide-border border-y border-border">
          {publications.map((publication) => (
            <StaggerItem key={publication.slug}>
              <article
                id={publication.slug}
                className="flex gap-6 py-6 sm:py-8 scroll-mt-24"
              >
                <div className="flex-1 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Report
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                    {publication.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {publication.abstract}
                  </p>
                  {publication.link && (
                    <div className="sm:hidden">
                      <ArrowLink href={publication.link} label="Read report" />
                    </div>
                  )}
                </div>
                {publication.link && (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${publication.title}`}
                    className="hidden sm:flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-border text-foreground hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  >
                    <Icon icon="tabler:arrow-up-right" className="h-5 w-5" />
                  </a>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </ProductSection>

      {/* CTA Section */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
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

function ProductSection({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-background scroll-mt-24">
      <div className="container mx-auto px-5 lg:px-8 pt-12 lg:pt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:gap-16">
        <FadeIn>
          <div className="space-y-3 lg:sticky lg:top-28">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{intro}</p>
          </div>
        </FadeIn>
        {children}
      </div>
    </section>
  );
}

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit min-h-11 sm:min-h-0 items-center text-sm font-semibold text-primary hover:text-primary/80"
    >
      {label}
      <Icon
        icon="tabler:arrow-right"
        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}
