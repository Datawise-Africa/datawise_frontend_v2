import type { Route } from './+types/home';
import { generateSEOTags } from '~/utils/seo';
import { organizationSchema, websiteSchema } from '~/utils/structured-data';
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
      jsonLd: [organizationSchema(), websiteSchema()],
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
