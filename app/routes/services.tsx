import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/services';
import { href, Link } from 'react-router';
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
import {
  IconDatabase,
  IconBrain,
  IconChartBar,
  IconDeviceMobile,
  IconApi,
  IconClipboardList,
  IconTool,
  IconRobot,
  IconSparkles,
  IconLanguage,
  IconCloud,
  IconServer,
  IconRefresh,
  IconArrowRight,
} from '@tabler/icons-react';
import { Button } from '~/components/ui/button';
import type { FC } from 'react';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Services - Datawise Africa',
      description:
        'Datawise Africa offers data infrastructure, AI engineering, software development, and cloud infrastructure services tailored to African contexts.',
      url: href('/services'),
      keywords:
        'data services africa, AI services, software engineering africa, cloud infrastructure, applied research, NLP, generative AI, DevOps',
    }),
  ];
}

const serviceImages: Record<string, string> = {
  data: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  engineering:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  infrastructure:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
};

function ServiceImage({ id, title }: { id: string; title: string }) {
  const src = serviceImages[id];
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-cover aspect-4/3"
          loading="lazy"
        />
      </div>
    </div>
  );
}

const serviceCategories: {
  id: string;
  label: string;
  title: string;
  description: string;
  accentClass: string;
  accentBgClass: string;
  capabilities: {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
  }[];
}[] = [
  {
    id: 'data',
    label: 'Data & Research',
    title: 'Data, Insights & Applied Research',
    description:
      'We operate at the intersection of high-quality data infrastructure, strategic intelligence, and applied research. Developing AI-ready sector datasets, we translate them into actionable insights, executive reports, dashboards, and decision-support tools.',
    accentClass: 'text-accent-orange',
    accentBgClass: 'bg-accent-orange/10 dark:bg-accent-orange/20',
    capabilities: [
      {
        icon: IconDatabase,
        title: 'Data Infrastructure',
        description:
          'We build AI-ready datasets and structured data systems that enable organizations to access reliable and well-organized information.',
      },
      {
        icon: IconChartBar,
        title: 'Strategic Intelligence',
        description:
          'We transform complex datasets into actionable intelligence through executive reports, analytical briefs, and interactive dashboards.',
      },
      {
        icon: IconBrain,
        title: 'Applied Research',
        description:
          'We conduct applied research on emerging technologies, sector challenges, and AI deployment opportunities within real-world environments.',
      },
    ],
  },
  {
    id: 'engineering',
    label: 'Software Engineering',
    title: 'Engineering',
    description:
      'Designing and building AI models, software systems, and infrastructure that translate research into working technology. This includes machine learning systems, edge AI solutions, and scalable digital platforms built for real-world use.',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
    capabilities: [
      {
        icon: IconDeviceMobile,
        title: 'Custom Application Development',
        description:
          'We design and build web, mobile, and enterprise applications that solve specific operational challenges.',
      },
      {
        icon: IconApi,
        title: 'API Development & Integration',
        description:
          'We design and implement APIs that enable systems to exchange data seamlessly.',
      },
      {
        icon: IconClipboardList,
        title: 'Software Project Management',
        description:
          'We manage projects using modern agile methodologies for efficient development cycles and continuous improvement.',
      },
      {
        icon: IconTool,
        title: 'Maintenance & Support',
        description:
          'We provide long-term software support including monitoring, optimization, security updates, and bug fixes.',
      },
    ],
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    title: 'AI Services',
    description:
      'Our AI services focus on building practical, scalable AI systems that organizations can deploy in real-world environments.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
    capabilities: [
      {
        icon: IconRobot,
        title: 'AI Engineering',
        description:
          'We design and deploy production-ready AI systems that integrate machine learning models into real applications and workflows.',
      },
      {
        icon: IconSparkles,
        title: 'Generative AI Solutions',
        description:
          'We build custom generative AI systems tailored to organizational workflows.',
      },
      {
        icon: IconLanguage,
        title: 'Natural Language Processing',
        description:
          'We develop systems that allow machines to understand and analyze human language.',
      },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    title: 'Infrastructure Engineering',
    description:
      'We design and manage cloud and compute infrastructure to enable organisations to integrate structured data, access intelligence tools, and operate AI systems in real-world environments. Our work includes storing data, and running and maintaining the systems that we develop and build.',
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10 dark:bg-primary/20',
    capabilities: [
      {
        icon: IconCloud,
        title: 'Cloud Infrastructure & Architecture',
        description:
          'We design and implement scalable cloud environments across leading cloud platforms.',
      },
      {
        icon: IconServer,
        title: 'Compute Infrastructure',
        description:
          'We design and manage compute infrastructure capable of supporting AI systems, data platforms, and research workloads.',
      },
      {
        icon: IconRefresh,
        title: 'DevOps & Continuous Delivery',
        description:
          'We implement DevOps practices that enable faster and more reliable software delivery.',
      },
    ],
  },
];

export default function Services() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-3">
                Services
              </h3>
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                What We <span className="text-primary">Offer</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                End-to-end data, AI, software, and infrastructure services
                designed to help organizations make better decisions and build
                impactful technology.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={category.id}
            id={category.id}
            className={
              isEven ? 'bg-section-green dark:bg-card' : 'bg-background'
            }
          >
            <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
              {/* Alternating text + illustration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <FadeIn
                  direction={isEven ? 'left' : 'right'}
                  className={!isEven ? 'lg:order-2' : ''}
                >
                  <h3
                    className={`text-lg font-semibold uppercase tracking-wide mb-2 ${category.accentClass}`}
                  >
                    {category.label}
                  </h3>
                  <h2 className="font-bold text-3xl sm:text-4xl text-foreground mb-4">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </FadeIn>
                <FadeIn
                  direction={isEven ? 'right' : 'left'}
                  delay={0.2}
                  className={!isEven ? 'lg:order-1' : ''}
                >
                  <ServiceImage id={category.id} title={category.title} />
                </FadeIn>
              </div>

              {/* Capability cards */}
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <StaggerItem key={capability.title}>
                      <div className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-xl ${category.accentBgClass} mb-4 group-hover:bg-primary transition-colors duration-300`}
                        >
                          <Icon
                            className={`h-6 w-6 ${category.accentClass} group-hover:text-white transition-colors duration-300`}
                          />
                        </div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">
                          {capability.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <FadeIn direction="up">
            <div className="bg-primary text-white rounded-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-8 md:justify-between">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Ready to get started?
                </h3>
                <p className="mt-3 text-lg text-white/80 leading-relaxed">
                  Let{'\u2019'}s discuss how we can support your goals.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 h-auto py-3 dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/20 shrink-0"
              >
                <Link to={href('/contact-us')}>
                  Contact Us
                  <IconArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
