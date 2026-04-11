import { partners } from '~/constants/partners';
import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';
import { IconArrowRight } from '@tabler/icons-react';

export default function HomePartnersSection() {
  return (
    <>
      {/* Partners Logos */}
      <section className="bg-section-green dark:bg-section-green-dark">
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

      {/* Partner With Us CTA */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="bg-primary text-white rounded-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Partner With Us
                </h3>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  Looking to drive impact with data and AI in Africa? We
                  {'\u2019'}re open to collaborations with researchers,
                  policymakers, and businesses ready to shape the future
                  together.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    <Link to={href('/partners')}>
                      Learn More
                      <IconArrowRight className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/assets/aboutus/ctapartner.svg"
                  alt="Collaboration"
                  className="w-full max-w-xs object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
