import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <section className="bg-section-green dark:bg-section-green-dark">
      <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-primary uppercase tracking-wide">
              Who we are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a research and development company that helps businesses,
              governments and other organizations make better decisions and
              build stronger systems through data, AI and infrastructure. We
              combine rigorous research, engineering and a deep understanding of
              Africa and the Global South.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our research gives policymakers and leaders the evidence they need
              to act, while our engineering turns that evidence into systems
              that work.
            </p>
            <Button
              asChild
              variant="link"
              className="text-md font-semibold px-0 text-primary"
            >
              <Link to={href('/about-us')}>Learn More &rarr;</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
