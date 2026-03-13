import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <div className="w-full bg-section-green dark:bg-card py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
            ABOUT US
          </h3>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Datawise Africa builds the foundations for Africa{'\u2019'}s data
            and AI ecosystem. We create high-quality datasets, develop practical
            AI systems, and research sustainable compute infrastructure for the
            continent. We work with governments, researchers, companies, and
            civil society to make better decisions from data and to build AI
            that is locally relevant, ethical, and impactful.
          </p>
          <Button asChild variant="link" className="text-md font-semibold">
            <Link to={href('/about-us')}>Learn More →</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
