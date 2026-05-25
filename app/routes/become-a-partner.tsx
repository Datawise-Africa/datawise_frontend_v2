import PartnersForm from '~/components/partners/partners-form';
import { generateSEOTags } from '~/utils/seo';
import { href } from 'react-router';
import type { Route } from './+types/become-a-partner';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Become a Partner | Datawise Africa',
      description:
        'Partner with Datawise Africa to drive data and AI innovation across the continent. Submit your partnership application and collaborate with us on research, infrastructure, and technology projects.',
      url: href('/become-a-partner'),
      keywords:
        'datawise africa partnership, data science partnership, AI collaboration africa, technology partnerships',
    }),
  ];
}

export default function BecomeAPartner() {
  return <PartnersForm />;
}
