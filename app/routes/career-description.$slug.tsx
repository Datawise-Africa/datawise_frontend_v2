import {
  formatDeadline,
  getPositionBySlug,
  isPositionOpen,
  toISODate,
} from '~/lib/data/careers';
import { FadeIn } from '~/components/motion';
import { generateSEOTags } from '~/utils/seo';
import { redirect } from 'react-router';
import type { Route } from './+types/career-description.$slug';

/** Truncate to maxLength at a word boundary, appending an ellipsis if cut. */
function truncateDescription(text: string, maxLength = 157) {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

/**
 * Closed positions stay in the data file for the record, but they are not
 * publicly reachable: an expired (or unknown) slug is redirected to /careers
 * on the server, so a direct link never renders the posting.
 */
export function loader({ params }: Route.LoaderArgs) {
  const job = getPositionBySlug(params.slug);

  if (!job || !isPositionOpen(job)) {
    throw redirect('/careers');
  }

  return { job };
}

export function meta({ params }: Route.MetaArgs) {
  const job = getPositionBySlug(params.slug);

  if (!job || !isPositionOpen(job)) {
    return [
      ...generateSEOTags({
        title: 'Career Opportunity | Datawise Africa',
        description:
          'Explore career opportunities at Datawise Africa and join the team building AI, data, and digital infrastructure for Africa.',
        url: '/careers',
      }),
    ];
  }

  return [
    ...generateSEOTags({
      title: `${job.title} | Careers at Datawise Africa`,
      description: truncateDescription(job.overview),
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
        ...(job.deadline ? { validThrough: toISODate(job.deadline) } : {}),
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

export default function CareerDescription({
  loaderData,
}: Route.ComponentProps) {
  const pos = loaderData.job;
  const applyUrl = pos.link || '';

  return (
    <>
      <div className="container mx-auto pt-20 px-5 lg:px-16 xl:px-20">
        <section className="max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl leading-[110%] tracking-tight text-center mb-4">
            {pos.title}
          </h1>

          <ul className="flex flex-wrap justify-center gap-2 mb-8">
            {[pos.work_period, pos.position, pos.workmode]
              .filter(Boolean)
              .map((tag) => (
                <li
                  key={tag}
                  className="bg-primary/10 dark:bg-primary/20 text-primary text-sm px-3 py-1 rounded"
                >
                  {tag}
                </li>
              ))}
            {pos.deadline && (
              <li className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded">
                Apply by {formatDeadline(pos.deadline)}
              </li>
            )}
          </ul>

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
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-medium py-6 px-20 rounded-md hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition flex items-center gap-2 mb-5"
              >
                Apply Now
                <span className="sr-only">(opens in a new tab)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
