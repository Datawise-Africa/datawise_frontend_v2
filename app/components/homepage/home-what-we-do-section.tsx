import {
  IconDatabase,
  IconBrain,
  IconServer,
  IconArrowRight,
} from '@tabler/icons-react';
import { href, Link } from 'react-router';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { Button } from '~/components/ui/button';
import type { FC } from 'react';

const whatWeDoCards: {
  title: string;
  description: string;
  image: string;
  icon: FC<{ className?: string }>;
  accentClass: string;
  accentBgClass: string;
  link: string;
}[] = [
  {
    title: 'Data',
    description:
      'Designing high-quality, specialised datasets that power AI development across Africa.',
    image: '/assets/amico.png',
    icon: IconDatabase,
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
    link: '/services',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Developing innovative AI models tailored to local realities and African contexts.',
    image: '/assets/AI.jpeg',
    icon: IconBrain,
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
    link: '/services',
  },
  {
    title: 'Infrastructure',
    description:
      'Building sustainable compute and data infrastructure for the continent.',
    image: '/assets/infrastructure.jpg',
    icon: IconServer,
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
    link: '/services',
  },
];

export default function HomeWhatWeDoSection() {
  return (
    <div className="container mx-auto w-full px-4 py-20 lg:py-28 text-foreground">
      <FadeIn direction="up">
        <div className="flex flex-col items-center mb-12 gap-4">
          <h3 className="text-lg font-semibold text-primary text-center uppercase tracking-wide">
            WHAT WE DO
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Solving Real Problems With Data and AI
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            We create high-quality datasets, develop practical AI systems, and
            research sustainable compute infrastructure for the continent.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whatWeDoCards.map((card) => {
          const Icon = card.icon;
          return (
            <StaggerItem key={card.title}>
              <div className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className={`absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl ${card.accentBgClass} backdrop-blur-sm border border-white/20`}
                  >
                    <Icon className={`h-6 w-6 ${card.accentClass}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h4 className={`text-xl font-bold mb-2 ${card.accentClass}`}>
                    {card.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto text-sm font-semibold text-primary hover:bg-transparent hover:text-primary/80 group/btn"
                    >
                      <Link to={href(card.link as '/services')}>
                        Learn more
                        <IconArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </div>
  );
}
