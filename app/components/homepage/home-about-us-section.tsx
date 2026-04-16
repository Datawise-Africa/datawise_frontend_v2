import { IconDatabase, IconBrain, IconServer } from '@tabler/icons-react';
import { href, Link } from 'react-router';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';

const pillars = [
  {
    title: 'Data Infrastructure',
    description: 'Well-structured, AI-ready datasets and data systems.',
    icon: IconDatabase,
    accentClass: 'text-primary',
  },
  {
    title: 'AI & Intelligent Systems',
    description: 'Locally relevant models and machine learning pipelines.',
    icon: IconBrain,
    accentClass: 'text-primary',
  },
  {
    title: 'Compute & Platforms',
    description: 'Infrastructure and platforms that run reliably at scale.',
    icon: IconServer,
    accentClass: 'text-primary',
  },
];

export default function HomeAboutUsSection() {
  return (
    <section className="bg-section-green dark:bg-section-green-dark">
      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <FadeIn direction="up">
          <div className="flex flex-col items-center mb-10 gap-3">
            <h3 className="text-lg font-semibold text-primary text-center uppercase tracking-wide">
              Who we are
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center max-w-2xl">
              Building Africa{'\u2019'}s data and AI foundations.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Text — left column */}
          <FadeIn direction="up" delay={0.1} className="space-y-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Datawise Africa is a research and development company focused on
              building the technical foundations for Africa{'\u2019'}s data and
              intelligent systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our work centres on parts of the stack that are often overlooked
              but absolutely necessary; well-structured datasets, locally
              relevant AI models, and the compute infrastructure needed to run
              them reliably.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Through applied research, platforms like DataLab, and our broader
              engineering work, we turn raw information into usable systems and
              evidence. The goal is simple: make sure developers, institutions,
              and decision-makers have the tools to build technology that
              actually works in African contexts.
            </p>
            <Button
              asChild
              variant="link"
              className="text-md font-semibold px-0 text-primary"
            >
              <Link to={href('/about-us')}>Learn More {'\u2192'}</Link>
            </Button>
          </FadeIn>

          {/* Pillars — right column */}
          <StaggerChildren className="flex flex-col gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="flex items-start gap-5 rounded-xl bg-card border border-border p-6">
                    <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-lg bg-primary/15">
                      <Icon className={`h-6 w-6 ${pillar.accentClass}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
