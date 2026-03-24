import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/products';
import { href, Link } from 'react-router';
import {
  IconArrowRight,
  IconBrain,
  IconServer,
  IconShieldCheck,
  IconDatabase,
  IconSchool,
  IconHeartbeat,
} from '@tabler/icons-react';
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
import { Button } from '~/components/ui/button';
import type { FC } from 'react';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Products',
      description: `Explore Datawise Africa's innovative products leveraging data and AI to tackle Africa's challenges in economic, Tech and Infrastructure development.`,
      url: href('/products'),
      keywords:
        'datawise, datalab, afyaken, eduken, data products africa, ai for development, data infrastructure',
    }),
  ];
}

const focusAreas: {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  accentClass: string;
  accentBgClass: string;
}[] = [
  {
    icon: IconBrain,
    title: 'AI for Development',
    description:
      'Leveraging AI to address social and economic challenges across the continent.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: IconServer,
    title: 'Data Infrastructure',
    description:
      'Building sustainable and affordable compute solutions for African contexts.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
  {
    icon: IconShieldCheck,
    title: 'Ethical Data Practices',
    description:
      'Ensuring data collection and usage are transparent, ethical, and community-centered.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
];

const featuredProjects: {
  slug: string;
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
  accentClass: string;
  accentBgClass: string;
}[] = [
  {
    slug: 'datalab',
    icon: IconDatabase,
    title: 'Datalab',
    description:
      'A platform that maintains transparency in data use while ensuring creator sovereignty. Discover datasets, upload your own, and collaborate with others.',
    link: 'https://datalab.datawiseafrica.com',
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10 dark:bg-primary/20',
  },
  {
    slug: 'eduken',
    icon: IconSchool,
    title: 'Eduken',
    description:
      'A catalog of Kenyan institutions of higher learning, detailing names, locations, and courses offered \u2014 a resource for students, researchers, and policymakers.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    slug: 'afyaken',
    icon: IconHeartbeat,
    title: 'Afyaken',
    description:
      'An open-access dataset on Kenyan healthcare facilities, empowering policymakers, researchers, and innovators with data-driven insights to improve healthcare access.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

export default function Projects() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="text-center md:text-left space-y-6">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                  Driving Change Through
                  <span className="text-primary"> Data Research</span>
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
                  Our research initiatives focus on solving Africa{'\u2019'}s
                  most pressing challenges, from climate resilience to economic
                  development.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg" className="h-auto px-6 py-3">
                    <Link to={href('/partners')}>
                      Collaborate With Us
                      <IconArrowRight className="ml-1 h-5 w-5" />
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
      </section>

      {/* Focus Areas Section */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                What We Focus On
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Focus Areas
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <StaggerItem key={area.title}>
                  <div className="flex flex-col items-center text-center bg-background dark:bg-background/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${area.accentBgClass} mb-5`}
                    >
                      <Icon className={`h-7 w-7 ${area.accentClass}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {area.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Our Work
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Featured Projects
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
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
                          >
                            Visit Project
                            <IconArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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

      {/* CTA Section */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="bg-primary text-white rounded-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-8 md:justify-between">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Have a project idea?
                </h3>
                <p className="mt-3 text-lg text-white/80 leading-relaxed">
                  We{'\u2019'}re open to collaborations with researchers,
                  organizations, and governments.
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
                  <IconArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
