import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <div className="w-full bg-section-green dark:bg-card py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn direction="up" className="space-y-2">
          {/* <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
            ABOUT US
          </h3>
          <h4 className="font-semibold text-xlg text-foreground mb-2">
            Who we are
          </h4> */}
          <h3 className="text-lg font-semibold text-primary text-center uppercase tracking-wide">
            Who we are
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            About us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Datawise Africa is a research and development company building
            Africa&apos;s data and intelligence systems, from high-quality
            datasets to AI models and compute infrastructure.
          </p>{' '}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto ">
            We exist to research, build, and deploy reliable data and
            intelligence systems that accelerate Africa{'\u2019'}s digital
            transformation.
          </p>
          <Button asChild variant="link" className="text-md font-semibold">
            <Link to={href('/about-us')}>Learn More →</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
