import type { Route } from './+types/home';
import { generateSEOTags } from '~/utils/seo';
import { href } from 'react-router';
import HomeHeroSection from '~/components/homepage/home-hero-section';
import HomeAboutUsSection from '~/components/homepage/home-about-us-section';
import HomeWhatWeDoSection from '~/components/homepage/home-what-we-do-section';
import HomeHowWeWork from '~/components/homepage/home-how-we-work';
import HomePartnersSection from '~/components/homepage/home-partners-section';
import { Separator } from '~/components/ui/separator';

export const links: Route.LinksFunction = () => [
  {
    rel: 'preload',
    href: '/115d86f6c670c9128d8eb6151d1221f54e24603a-dwise-2.jpg?w=1920&h=1080&fit=crop&crop=center',
    as: 'image',
  },
];

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
