import PartnersForm from '~/components/partners/partners-form';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { useRef } from 'react';
import type { Route } from './+types/partners';
import { generateSEOTags } from '~/utils/seo';
import { href, useFetcher } from 'react-router';
import { env } from '~/lib/env';
import { partners } from '~/constants/partners';
import { Icon } from '@iconify/react';
import { Button } from '~/components/ui/button';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Partners | Datawise Africa',
      description:
        'Datawise Africa partners with organizations to expand data access, co-develop AI, and strengthen digital infrastructure across Africa. Explore who we work with.',
      url: href('/partners'),
      keywords:
        'datawise africa partners, data sharing partnerships, AI collaboration africa, research partnerships, technology alliances africa',
    }),
  ];
}

export async function action({ request }: Route.ActionArgs) {
  try {
    const data = await request.json();
    const response = await fetch(
      `${env.VITE_API_URL}/users/partner-interest/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      return { success: false, error: 'Submission failed' };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Network error' };
  }
}

const whyPartnerCards = [
  {
    icon: 'tabler:database',
    title: 'Access Exclusive Data',
    description:
      'Gain insights from high-quality datasets to drive innovation and decision-making.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
  {
    icon: 'tabler:bulb',
    title: 'Collaborate on AI Solutions',
    description:
      'Work with leading experts to develop AI-driven solutions for real-world challenges.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: 'tabler:network',
    title: 'Expand Your Reach',
    description:
      'Connect with a growing network of innovators, researchers, and organizations.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

export default function Partners() {
  const fetcher = useFetcher<typeof action>();
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
                Partner With Us to{' '}
                <span className="text-primary">Drive Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Together, we can harness the power of data and AI to shape
                Africa&rsquo;s future.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  size="lg"
                  className="h-auto px-6 py-3"
                  onClick={scrollToForm}
                >
                  Become a Partner
                  <Icon icon="tabler:arrow-down" className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/PartnerHero.svg"
                alt="Partner With Us"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
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
              return (
                <StaggerItem key={card.title}>
                  <div className="flex flex-col items-center text-center bg-background dark:bg-background/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${card.accentBgClass} mb-5`}
                    >
                      <Icon
                        icon={card.icon}
                        className={`h-7 w-7 ${card.accentClass}`}
                      />
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
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
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
            <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee gap-6">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="shrink-0 flex items-center justify-center w-52 h-32 p-4 rounded-xl bg-background dark:bg-background/50 border border-border"
                  >
                    <img
                      src={partner.logo || '/placeholder.svg'}
                      alt={partner.name}
                      className="h-20 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {partners.map((partner) => (
                  <div
                    key={`${partner.name}-dup`}
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-52 h-32 p-4 rounded-xl bg-background dark:bg-background/50 border border-border"
                  >
                    <img
                      src={partner.logo || '/placeholder.svg'}
                      alt=""
                      className="h-20 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <div ref={formRef} id="partner-form" className="scroll-mt-16">
            <FadeIn direction="up">
              <PartnersForm fetcher={fetcher} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
