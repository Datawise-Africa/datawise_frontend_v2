import { href, Link } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';

export default function HomeAboutUsSection() {
  return (
    <div className="w-full bg-section-green dark:bg-section-green-dark py-14 lg:py-20">
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
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Datawise Africa is a research and development company focused on
            building the technical foundations for Africa’s data and intelligent
            systems. Our work centres on parts of the stack that are often
            overlooked but absolutely necessary: well structured datasets,
            locally relevant AI models, and the compute infrastructure needed to
            run them reliably. Much of what we do is applied research, including
            building datasets, conducting technical studies, and generating
            practical insights that help close data gaps slowing progress in
            sectors such as law, health, and agriculture. Through platforms like
            Datalab and our broader engineering and data work, we turn raw
            information into usable systems and evidence that others can build
            on. At its core, our work is about making sure developers,
            institutions, and decision makers have the basic tools needed to
            build technology that works in their own contexts.
          </p>{' '}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto ">
            We exist to research, build, and deploy reliable data and
            intelligent systems that accelerate Africa{'\u2019'}s digital
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
