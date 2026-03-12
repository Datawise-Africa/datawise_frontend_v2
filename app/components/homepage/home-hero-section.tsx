import { IconArrowRight } from '@tabler/icons-react';
import { href, Link } from 'react-router';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';

const impactStats = [
  { value: '10+', label: 'Datasets Created' },
  { value: '5+', label: 'Countries Reached' },
  { value: '20+', label: 'Research Partners' },
  { value: '50+', label: 'Researchers Supported' },
];

export default function HomeHeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-24 md:pt-0 min-h-[60vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/115d86f6c670c9128d8eb6151d1221f54e24603a-dwise-2.jpg?w=1920&h=1080&fit=crop&crop=center')",
      }}
    >
      {/* Gradient Overlay from top-left to bottom-right */}
      <div className="absolute inset-0 bg-linear-to-br from-teal-900 via-teal-800/80 to-blue-500/30"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3Ccircle cx=27 cy=7 r=1/%3E%3Ccircle cx=47 cy=7 r=1/%3E%3Ccircle cx=7 cy=27 r=1/%3E%3Ccircle cx=27 cy=27 r=1/%3E%3Ccircle cx=47 cy=27 r=1/%3E%3Ccircle cx=7 cy=47 r=1/%3E%3Ccircle cx=27 cy=47 r=1/%3E%3Ccircle cx=47 cy=47 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-4 lg:px-8 py-12 lg:py-16 h-full">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 lg:space-y-8">
            <FadeIn direction="up" delay={0}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-lg">
                Powering Africa{'\u2019'}s AI Future
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-teal-100 sm:text-xl lg:text-2xl leading-relaxed drop-shadow-md">
                Building trusted datasets, practical AI systems, and sustainable
                infrastructure for the continent.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg h-auto"
                >
                  <Link to={href('/about-us')}>
                    Discover Our Work
                    <IconArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg h-auto dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <Link to={href('/datalab')}>Explore Datasets</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Impact Stats - Hidden on mobile */}
          <div className="hidden lg:flex justify-center items-center">
            <StaggerChildren className="grid grid-cols-2 gap-6 w-full max-w-md">
              {impactStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                    <p className="text-4xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-teal-100 mt-1">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
