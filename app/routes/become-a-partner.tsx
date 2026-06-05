import PartnersForm from '~/components/partners/partners-form';
import { generateSEOTags } from '~/utils/seo';
import { href, useFetcher } from 'react-router';
import type { Route } from './+types/become-a-partner';
import { env } from '~/lib/env';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Become a Partner | Datawise Africa',
      description:
        'Apply to partner with Datawise Africa — collaborate on AI, data, and digital infrastructure projects driving impact across the continent.',
      url: href('/become-a-partner'),
      keywords:
        'datawise africa partnership, data science partnership, AI collaboration africa, technology partnerships',
    }),
  ];
}

export async function action({ request }: Route.ActionArgs) {
  try {
    const data = await request.json();
    const response = await fetch(
      `${env.VITE_API_URL}/users/partner-interest/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      return { success: false, error: 'Submission failed' };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Network error' };
  }
}

export default function BecomeAPartner() {
  const fetcher = useFetcher<typeof action>();
  return <PartnersForm fetcher={fetcher} />;
}
