import PartnersForm from '~/components/partners/partners-form';
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
import { useRef } from 'react';
import type { Route } from './+types/partners';
import { generateSEOTags } from '~/utils/seo';
import { href } from 'react-router';
import { partners } from '~/constants/partners';
import {
  IconArrowDown,
  IconDatabase,
  IconBulb,
  IconNetwork,
} from '@tabler/icons-react';
import { Button } from '~/components/ui/button';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Partners',
      description:
        'Partner with Datawise Africa to leverage data and AI for transformative solutions. Explore opportunities that drive innovation across Africa.',
      url: href('/partners'),
      keywords:
        'legal assistant, Kenyan law, case insights, legal information, African tech solutions, data systems, applied research',
    }),
  ];
}

const whyPartnerCards = [
  {
    icon: IconDatabase,
    title: 'Access Exclusive Data',
    description:
      'Gain insights from high-quality datasets to drive innovation and decision-making.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
  {
    icon: IconBulb,
    title: 'Collaborate on AI Solutions',
    description:
      'Work with leading experts to develop AI-driven solutions for real-world challenges.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: IconNetwork,
    title: 'Expand Your Reach',
    description:
      'Connect with a growing network of innovators, researchers, and organizations.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

export default function Partners() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
                  Partner With Us to{' '}
                  <span className="text-primary">Drive Impact</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Together, we can harness the power of data and AI to shape
                  Africa{'\u2019'}s future.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="h-auto px-6 py-3"
                    onClick={scrollToForm}
                  >
                    Become a Partner
                    <IconArrowDown className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="flex justify-center">
                <img
                  src="/assets/PartnerHero.svg"
                  alt="Partner With Us"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Benefits
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Why Partner With Us
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyPartnerCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div className="flex flex-col items-center text-center bg-background dark:bg-background/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${card.accentBgClass} mb-5`}
                    >
                      <Icon className={`h-7 w-7 ${card.accentClass}`} />
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
      </section>

      {/* Partners Logos */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Our Partners
              </h3>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Collaborating for a Smarter Africa
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded-xl bg-background dark:bg-background/50 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-24"
                >
                  <img
                    src={partner.logo || '/placeholder.svg'}
                    alt={partner.name}
                    className="h-10 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div ref={formRef} id="partner-form" className="scroll-mt-16">
            <FadeIn direction="up">
              <PartnersForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
