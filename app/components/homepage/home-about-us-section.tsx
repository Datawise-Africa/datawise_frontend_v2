import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <section className="bg-section-green dark:bg-section-green-dark">
      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <FadeIn direction="up">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
              Who we are
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text — left column */}
          <FadeIn direction="up" delay={0.1} className="space-y-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Datawise Africa is a research and development company building
              Africa{'\u2019'}s data and intelligent systems, from high-quality
              datasets to AI models and compute infrastructure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We exist to research, build, and deploy reliable data and
              intelligent systems that accelerate Africa{'\u2019'}s digital
              transformation.
            </p>
            <Button
              asChild
              variant="link"
              className="text-md font-semibold px-0 text-primary"
            >
              <Link to={href('/about-us')}>Learn More {'\u2192'}</Link>
            </Button>
          </FadeIn>

          {/* Image — right column */}
          <FadeIn direction="up" delay={0.2} className="flex justify-center">
            <img
              src="/assets/cuate.png"
              alt="Team collaboration"
              className="w-full max-w-md object-contain"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
