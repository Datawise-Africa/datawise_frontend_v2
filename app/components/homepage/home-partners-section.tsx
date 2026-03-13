import { partners } from '~/constants/partners';
import { href, Link } from 'react-router';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';
import { IconArrowRight } from '@tabler/icons-react';

export default function HomePartnersSection() {
  return (
    <>
      {/* Partners Logos */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
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

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center justify-center p-4 rounded-xl bg-background dark:bg-background/50 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-24">
                  <img
                    src={partner.logo || '/placeholder.svg'}
                    alt={partner.name}
                    className="h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
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
