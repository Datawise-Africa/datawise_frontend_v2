import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/datalab';
import { href } from 'react-router';
import {
  IconArrowRight,
  IconSearch,
  IconUpload,
  IconUsers,
  IconBulb,
  IconShieldCheck,
  IconAdjustments,
} from '@tabler/icons-react';
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
import { Button } from '~/components/ui/button';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Discover verified African datasets | Datalab Africa',
      description: `DataLab is DataWise Africa's platform for hosting, managing, and publishing our data products.`,
      url: href('/datalab'),
      image: '/d-lab-ico.png',
      keywords:
        'african datasets, data catalog, open data africa, data marketplace, datalab, africa, datasets, open data, data collaboration, data sharing, data governance',
    }),
  ];
}

const DATALAB_URL = 'https://datalab.datawiseafrica.com';

const exploreCards = [
  {
    icon: IconSearch,
    title: 'Discover Datasets',
    description:
      'Access high-quality datasets across critical domains like agriculture, healthcare, and languages.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: IconUpload,
    title: 'Upload Your Data',
    description:
      'Contribute to Africa\u2019s data ecosystem by sharing your datasets with the community.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
  {
    icon: IconUsers,
    title: 'Collaborate',
    description:
      'Join a growing network of data enthusiasts, researchers, and innovators.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
];

const empowerCards = [
  {
    icon: IconBulb,
    title: 'Make Smarter Decisions',
    description:
      'Use data-driven insights to enhance your projects, research, or business strategies.',
  },
  {
    icon: IconShieldCheck,
    title: 'Access Trusted Data',
    description:
      'Access curated, high-quality datasets from leading sources across industries.',
  },
  {
    icon: IconAdjustments,
    title: 'Customizable Downloads',
    description:
      'Tailor your data to focus on the metrics and information that matter most.',
  },
];

export default function Datalab() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <FadeIn direction="left" className="md:w-1/2">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Power Your Insights with{' '}
                  <span className="text-primary">Trusted Data</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Datalab is a platform that maintains transparency in data use
                  while ensuring creator sovereignty.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg" className="h-auto px-6 py-3">
                    <a
                      href={DATALAB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                      <IconArrowRight className="ml-1 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="md:w-1/2">
              <div className="flex justify-center">
                <img
                  src="/assets/Datalab Hero.svg"
                  alt="Datalab Hero"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <FadeIn direction="left" className="lg:w-2/5">
              <div className="space-y-4 lg:sticky lg:top-32">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
                  Platform Features
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                  Explore, Analyze, and Share Data with{' '}
                  <span className="text-primary">Datalab</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your gateway to Africa{'\u2019'}s most comprehensive data
                  platform.
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exploreCards.map((card) => {
                const Icon = card.icon;
                return (
                  <StaggerItem key={card.title}>
                    <div className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${card.accentBgClass} mb-4`}
                      >
                        <Icon className={`h-6 w-6 ${card.accentClass}`} />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Why Datalab
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Empower Your Work with DataLab
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a comprehensive catalog of high-quality datasets that
                empower you to:
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {empowerCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div className="flex flex-col items-center text-center bg-background dark:bg-background/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 mb-5">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="h-auto px-8 py-3">
                <a href={DATALAB_URL} target="_blank" rel="noopener noreferrer">
                  Explore Datasets
                  <IconArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
