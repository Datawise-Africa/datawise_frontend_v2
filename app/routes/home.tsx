import type { Route } from './+types/home';
import { generateSEOTags } from '~/utils/seo';
import { href } from 'react-router';
import { Link } from 'react-router';
import HomeHeroSection from '~/components/homepage/home-hero-section';
import HomeAboutUsSection from '~/components/homepage/home-about-us-section';
import HomeWhatWeDoSection from '~/components/homepage/home-what-we-do-section';
import HomeHowWeWork from '~/components/homepage/home-how-we-work';
import HomePartnersSection from '~/components/homepage/home-partners-section';
import { Separator } from '~/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  IconArrowRight,
  IconBriefcase,
  IconInfoCircle,
  IconMail,
  IconPackage,
} from '@tabler/icons-react';
import type { FC } from 'react';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title:
        "Datawise Africa | Building the technical foundations for Africa's data and intelligent systems",
      description:
        "Datawise Africa is a research and development company committed to solving Africa's pressing challenges through data and AI innovation. We build trusted data systems, conduct applied research, and develop critical infrastructure while fostering local research leadership across Africa.",
      url: href('/'),
      keywords:
        'data science africa, artificial intelligence research, AI solutions, African technology, data infrastructure, machine learning, research and development, data analytics, AI innovation, African tech solutions, data systems, applied research',
    }),
  ];
}

export const handle = {
  sitemap: (domain: string, url: string) => ({
    route: `${domain}${url}`,
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  }),
};

const primaryPageLinks: {
  title: string;
  description: string;
  to: string;
  icon: FC<{ className?: string }>;
}[] = [
  {
    title: 'About Us',
    description:
      'Learn about our mission, team, and how we build for African contexts.',
    to: href('/about-us'),
    icon: IconInfoCircle,
  },
  {
    title: 'Services',
    description:
      'Explore our data, AI, software engineering, and infrastructure services.',
    to: href('/services'),
    icon: IconBriefcase,
  },
  {
    title: 'Products',
    description:
      'See the platforms and products we are building across data and AI.',
    to: href('/products'),
    icon: IconPackage,
  },
  {
    title: 'Contact Us',
    description: 'Reach out for partnerships, projects, and general inquiries.',
    to: href('/contact-us'),
    icon: IconMail,
  },
];

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <HomeHeroSection />
      <Separator />
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Explore Datawise Africa
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Start with our core pages to understand who we are, what we offer,
              what we build, and how to get in touch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {primaryPageLinks.map((page) => {
              const Icon = page.icon;
              return (
                <Card key={page.title} className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{page.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col">
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {page.description}
                    </p>
                    <Link
                      to={page.to}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      Visit page
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Separator />
      <HomeAboutUsSection />
      <Separator />
      <HomeWhatWeDoSection />
      <Separator />
      <HomeHowWeWork />
      <Separator />
      <HomePartnersSection />
    </div>
  );
}
