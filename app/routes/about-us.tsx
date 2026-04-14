import AboutUsTeam from '~/components/about-us/about-us-team';
import type { Route } from './+types/about-us';
import { generateSEOTags } from '~/utils/seo';
import { href, Link } from 'react-router';
import {
  IconArrowRight,
  IconRocket,
  IconHeartHandshake,
  IconUsersGroup,
} from '@tabler/icons-react';
import { FadeIn, PageTransition } from '~/components/motion';
import { Button } from '~/components/ui/button';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - About Us',
      description:
        'Datawise Africa builds the foundations for Africa\u2019s data and AI ecosystem. We create high-quality datasets, develop practical AI systems, and research sustainable compute infrastructure.',
      url: href('/about-us'),
      keywords:
        'about Datawise Africa, data science africa, AI innovation, African technology, data and AI solutions, research and development Africa, data infrastructure, machine learning Africa, data-driven impact',
    }),
  ];
}

const values = [
  {
    icon: IconRocket,
    title: 'Excellence in Innovation',
    description:
      'We pursue cutting-edge solutions with a commitment to high-quality research, data, and technology, ensuring innovation is not just an idea, but a reality. We get things done with precision and efficiency.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: IconHeartHandshake,
    title: 'Integrity and Impact',
    description:
      'Our datasets, models, and infrastructure are built with responsibility and a deep focus on creating real, lasting change.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
  {
    icon: IconUsersGroup,
    title: 'Collaboration for Growth',
    description:
      'Whether through open data, community training, or partnerships, we believe in sharing knowledge and working together to build an inclusive ecosystem.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

export default function AboutUs() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="max-w-4xl">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Datawise Africa
              </span>
              <h1 className="mt-4 font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                <span className="text-accent-blue">Research.</span>{' '}
                <span className="text-accent-orange">Build.</span>{' '}
                <span className="text-primary">Deploy.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Datawise Africa is a research and development company focused on
                building the technical foundations for Africa{'\u2019'}s data
                and intelligent systems.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 max-w-5xl border-t border-border pt-10 lg:pt-14">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed md:pr-8 lg:pr-12 md:border-r md:border-border">
                Our work centres on parts of the stack that are often overlooked
                but absolutely necessary: well-structured datasets, locally
                relevant AI models, and the compute infrastructure needed to run
                them reliably. Much of what we do is applied research {'\u2014'}{' '}
                building datasets, conducting technical studies, and generating
                practical insights that help close data gaps in sectors such as
                law, health, and agriculture.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-8 md:mt-0 md:pl-8 lg:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-border">
                Through platforms like Datalab and our broader engineering and
                data work, we turn raw information into usable systems and
                evidence that others can build on. At its core, our work is
                about making sure developers, institutions, and decision makers
                have the tools they need to build technology that works in their
                own contexts.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story & Values Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Our Story */}
            <FadeIn direction="up">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
                  Our Story
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 2019, we set out to create African-centred data
                  that supports more intelligent and informed decision-making
                  across the continent.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our work focuses on designing and managing reliable and
                  ethical data and AI systems that accelerate Africa’s digital
                  transformation.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At the same time, we are working toward a future where Africa
                  can build a its own intelligent systems solving Africa’s
                  problems with African solutions.
                </p>
              </div>
            </FadeIn>

            {/* Our Values */}
            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide">
                  Our Values
                </h3>
                <div className="space-y-6">
                  {values.map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="flex items-start gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-xl ${value.accentBgClass} shrink-0 mt-0.5`}
                        >
                          <Icon className={`h-5 w-5 ${value.accentClass}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <AboutUsTeam />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <FadeIn direction="up">
            <div className="bg-primary text-white rounded-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Want to be part of our mission?
                </h3>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  We{'\u2019'}re always looking for talented individuals to join
                  our team.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    <Link to={href('/careers')}>
                      View Open Roles
                      <IconArrowRight className="ml-1 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/assets/aboutus/ctajoin.svg"
                  alt="Join our team"
                  className="w-full max-w-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
