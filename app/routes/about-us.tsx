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
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
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
      'We pursue cutting-edge solutions with a commitment to high-quality research, data, and technology\u2014ensuring innovation is not just an idea, but a reality. We get things done with precision and efficiency.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: IconHeartHandshake,
    title: 'Integrity and Impact',
    description:
      'We believe in doing meaningful work, ethically. Our datasets, models, and infrastructure are built with responsibility and a deep focus on creating real, lasting change.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
  },
  {
    icon: IconUsersGroup,
    title: 'Collaboration for Growth',
    description:
      'We grow by lifting others. Whether through open data, community training, or partnerships, we believe in sharing knowledge and working together to build an inclusive ecosystem.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

export default function AboutUs() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="text-center md:text-left space-y-6">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                  Powering Africa{'\u2019'}s AI Future
                  <br />
                  <span className="text-primary">with Trusted Data</span>
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
                  Datawise Africa builds the foundations for Africa{'\u2019'}s
                  data and AI ecosystem. We work with governments, researchers,
                  companies, and civil society to make better decisions from
                  data and to build AI that is locally relevant, ethical, and
                  impactful.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="flex justify-center">
                <img
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
                  src="/assets/aboutus/aboutus.svg"
                  alt="About Us"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center">
            <FadeIn direction="up" delay={0}>
              <div className="border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-12">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                  Our Mission
                </h3>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To design and manage reliable and ethical data and AI systems
                  that accelerate Africa{'\u2019'}s digital transformation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="md:pl-12">
                <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                  Our Vision
                </h3>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To enable Africa to build and govern its own intelligence
                  systems, solving Africa{'\u2019'}s problems with African
                  solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                What Drives Us
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Our Values
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="flex flex-col items-center text-center bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${value.accentBgClass} mb-5`}
                    >
                      <Icon className={`h-7 w-7 ${value.accentClass}`} />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <AboutUsTeam />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
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
