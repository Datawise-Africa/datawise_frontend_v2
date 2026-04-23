import PartnersForm from '~/components/partners/partners-form';

export const handle = {
  sitemap: (domain: string, url: string) => ({
    route: `${domain}${url}`,
    changefreq: 'monthly',
    priority: 0.4,
    lastmod: new Date().toISOString(),
  }),
};

export default function BecomeAPartner() {
  return <PartnersForm />;
}
