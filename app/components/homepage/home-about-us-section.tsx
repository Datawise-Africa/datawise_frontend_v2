import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <div className="w-full bg-section-green dark:bg-card py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
            ABOUT US
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Datawise Africa is a research and development company building
            Africa&apos;s data and intelligence systems, from high-quality
            datasets to AI models and compute infrastructure.
          </p>
          <Button asChild variant="link" className="text-md font-semibold">
            <Link to={href('/about-us')}>Learn More →</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
