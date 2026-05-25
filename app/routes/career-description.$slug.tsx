import { available_positions } from '~/lib/data/careers';
import { FadeIn } from '~/components/motion';
import { slugify } from '~/utils/slugify';
import { generateSEOTags } from '~/utils/seo';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import type { Route } from './+types/career-description.$slug';

export function meta({ params }: Route.MetaArgs) {
  const job = available_positions.find(
    (pos) => slugify(pos.title) === params.slug
  );

  if (!job) {
    return [
      ...generateSEOTags({
        title: 'Career Opportunity | Datawise Africa',
        description:
          'Explore career opportunities at Datawise Africa and join our team building data and AI solutions for the African continent.',
        url: '/careers',
      }),
    ];
  }

  return [
    ...generateSEOTags({
      title: `${job.title} | Careers at Datawise Africa`,
      description: job.overview.slice(0, 160),
      url: `/career-description/${params.slug}`,
      keywords:
        'data science jobs africa, AI careers, machine learning jobs, datawise africa',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.overview,
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Datawise Africa',
          sameAs: 'https://datawiseafrica.com',
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
      },
    }),
  ];
}

export default function CareerDescription() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pos = slug
    ? available_positions.find((p) => slugify(p.title) === slug)
    : null;

  useEffect(() => {
    if (!pos) {
      navigate('/careers', { replace: true });
    }
  }, [pos, navigate]);

  if (!pos) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p>Loading job details...</p>
      </div>
    );
  }

  const applyUrl = pos.link || '';

  return (
    <>
      <div className="container mx-auto pt-20 px-5 lg:px-16 xl:px-20">
        <section className="max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl leading-[110%] tracking-tight text-center mb-8">
            {pos.title}
          </h1>

          {/* About the role */}
          <FadeIn direction="up" delay={0}>
            <div className="mb-12">
              <h2 className="font-semibold text-2xl text-primary mb-4">
                About the role
              </h2>
              <p className="text-foreground leading-relaxed">{pos.overview}</p>
            </div>
          </FadeIn>

          {/* Responsibilities */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mb-12">
              <h2 className="font-semibold text-2xl text-primary mb-4">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {pos.what_you_will_do.map((r, i) => (
                  <li key={i} className="flex gap-3">
                    <img
                      src={'/assets/list-circle.svg'}
                      alt=""
                      className="w-5 h-5 mt-0.5 shrink-0"
                    />
                    <span className="text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Qualifications */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-12">
              <h2 className="font-semibold text-2xl text-primary mb-4">
                Qualifications
              </h2>
              <ul className="space-y-3">
                {pos.qualifications.map((q, i) => (
                  <li key={i} className="flex gap-3">
                    <img
                      src={'/assets/list-circle.svg'}
                      alt=""
                      className="w-5 h-5 mt-0.5 shrink-0"
                    />
                    <span className="text-foreground">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Bonus Qualifications */}
          {pos.bonus_qualifications?.length > 0 && (
            <FadeIn direction="up" delay={0.3}>
              <div className="mb-12">
                <h2 className="font-semibold text-2xl text-primary mb-4">
                  Bonus Qualifications
                </h2>
                <ul className="space-y-3">
                  {pos.bonus_qualifications.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <img
                        src={'/assets/list-circle.svg'}
                        alt=""
                        className="w-5 h-5 mt-0.5 shrink-0"
                      />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          {/* What we offer */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mb-12">
              <h2 className="font-semibold text-2xl text-primary mb-4">
                What we offer
              </h2>
              <ul className="space-y-3">
                {pos.what_we_offer.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <img
                      src={'/assets/list-circle.svg'}
                      alt=""
                      className="w-5 h-5 mt-0.5 shrink-0"
                    />
                    <span className="text-foreground">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Apply Button */}
          <FadeIn direction="up" delay={0.5}>
            <div className="flex justify-center">
              <button
                onClick={() =>
                  window.open(applyUrl, '_blank', 'noopener,noreferrer')
                }
                className="bg-primary text-white font-medium py-6 px-20 rounded-md hover:bg-primary-hover transition flex items-center gap-2 mb-5"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
