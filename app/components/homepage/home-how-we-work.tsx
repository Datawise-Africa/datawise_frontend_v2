import { Icon } from '@iconify/react';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';

const phases = [
  {
    number: '01',
    title: 'RESEARCH',
    description:
      'We identify data gaps and opportunities through rigorous technical study, sector analysis, and local context mapping. This phase defines what needs to be built and why.',
    icon: 'tabler:search',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue',
    borderTopClass: 'bg-accent-blue',
  },
  {
    number: '02',
    title: 'BUILD',
    description:
      'We design and engineer datasets, AI models, platforms, and software systems that are structured for real-world use not just proof-of-concept.',
    icon: 'tabler:code',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange',
    borderTopClass: 'bg-accent-orange',
  },
  {
    number: '03',
    title: 'DEPLOY',
    description:
      'We integrate, host, and maintain the systems we build ensuring reliable access, operational continuity, and long-term impact for every solution.',
    icon: 'tabler:server',
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary',
    borderTopClass: 'bg-primary',
  },
];

export default function HomeHowWeWork() {
  return (
    <section className="bg-section-green dark:bg-section-green-dark">
      <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <FadeIn direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-semibold text-primary text-center uppercase tracking-wide">
              How we work
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <StaggerItem key={phase.number}>
              <div className="relative flex flex-col h-full rounded-md bg-card border border-border overflow-hidden shadow-lg">
                <div className={`h-1.5 w-full ${phase.borderTopClass}`} />
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-start justify-between mb-10">
                    <span
                      className={`font-mono text-4xl font-bold ${phase.accentClass}`}
                    >
                      {phase.number}
                    </span>
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full ${phase.accentBgClass}`}
                    >
                      <Icon icon={phase.icon} className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 tracking-wide ${phase.accentClass}`}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
