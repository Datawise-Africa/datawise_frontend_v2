import { useState } from 'react';
import { Icon } from '@iconify/react';
import { href, Link, redirect } from 'react-router';
import {
  formatDeadline,
  getPositionBySlug,
  isPositionOpen,
  toISODate,
} from '~/lib/data/careers';
import type { JobCareerPositionType } from '~/lib/types/careers';
import { FadeIn } from '~/components/motion';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { generateSEOTags } from '~/utils/seo';
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
        ...(job.date_posted ? { datePosted: job.date_posted } : {}),
        ...(job.employment_type ? { employmentType: job.employment_type } : {}),
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Datawise Africa',
          sameAs: 'https://datawiseafrica.com',
        },
        ...(job.deadline ? { validThrough: toISODate(job.deadline) } : {}),
        ...(job.remote
          ? {
              jobLocationType: 'TELECOMMUTE',
              applicantLocationRequirements: {
                '@type': 'Country',
                name: 'Kenya',
              },
            }
          : {
              jobLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Nairobi',
                  addressCountry: 'KE',
                },
              },
            }),
      },
    }),
  ];
}

const VISIBLE_ITEMS = 6;

function ListSection({ title, items }: { title: string; items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  if (!items?.length) return null;

  const collapsible = items.length > VISIBLE_ITEMS + 2;
  const shown =
    collapsible && !expanded ? items.slice(0, VISIBLE_ITEMS) : items;

  return (
    <section className="space-y-4">
      <h2 className="font-semibold text-xl text-foreground">{title}</h2>
      <ul className="space-y-3">
        {shown.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon
              icon="tabler:circle-check-filled"
              className="h-5 w-5 mt-0.5 shrink-0 text-primary"
            />
            <span className="text-muted-foreground leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          {expanded ? 'Show less' : `Show all ${items.length}`}
          <Icon
            icon="tabler:chevron-down"
            className={cn(
              'h-4 w-4 transition-transform',
              expanded && 'rotate-180'
            )}
          />
        </button>
      )}
    </section>
  );
}

function ApplyButton({ url, className }: { url: string; className?: string }) {
  if (!url) {
    return (
      <p className={cn('text-sm text-muted-foreground', className)}>
        The application form will be available here soon.
      </p>
    );
  }
  return (
    <Button asChild size="lg" className={cn('h-auto px-6 py-3', className)}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Apply now
        <span className="sr-only">(opens in a new tab)</span>
        <Icon icon="tabler:external-link" className="ml-1 h-5 w-5" />
      </a>
    </Button>
  );
}

function getFacts(pos: JobCareerPositionType) {
  return [
    { icon: 'tabler:briefcase', label: 'Type', value: pos.work_period },
    { icon: 'tabler:map-pin', label: 'Location', value: pos.position },
    { icon: 'tabler:building', label: 'Work mode', value: pos.workmode },
    {
      icon: 'tabler:calendar-due',
      label: 'Apply by',
      value: pos.deadline ? formatDeadline(pos.deadline) : undefined,
    },
  ].filter((f): f is { icon: string; label: string; value: string } =>
    Boolean(f.value)
  );
}

export default function CareerDescription({
  loaderData,
}: Route.ComponentProps) {
  const pos = loaderData.job;
  const applyUrl = pos.link || '';
  const facts = getFacts(pos);

  return (
    <div className="container mx-auto px-5 lg:px-8 pt-10 pb-28 lg:pb-20">
      <Link
        to={`${href('/careers')}#open-positions`}
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <Icon icon="tabler:arrow-left" className="h-4 w-4" />
        All open positions
      </Link>

      {/* Header */}
      <header className="mt-6 max-w-3xl space-y-4">
        {pos.programme && (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Icon icon="tabler:school" className="h-4 w-4" />
            Student Associate Programme
          </span>
        )}
        <h1 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-foreground">
          {pos.title}
        </h1>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {facts.map((f) => (
            <li key={f.label} className="inline-flex items-center gap-1.5">
              <Icon icon={f.icon} className="h-4 w-4 text-primary" />
              <span className="sr-only">{f.label}:</span>
              {f.value}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 items-start">
        {/* Main content */}
        <FadeIn direction="up">
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="font-semibold text-xl text-foreground">
                About the role
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {pos.overview}
              </p>
            </section>

            {pos.programme && (
              <aside className="rounded-2xl border border-primary/30 bg-primary/5 dark:bg-primary/10 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon icon="tabler:stairs-up" className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-foreground">
                    Part of the Student Associate Programme
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Start with a 3-month industrial attachment, with the chance
                    to progress to a part-time Student Associate role.
                  </p>
                </div>
                <Link
                  to={href('/student-associate-programme')}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline shrink-0"
                >
                  How it works
                  <Icon icon="tabler:arrow-right" className="h-4 w-4" />
                </Link>
              </aside>
            )}

            <ListSection title="What you'll do" items={pos.what_you_will_do} />
            <ListSection
              title="What we're looking for"
              items={pos.qualifications}
            />
            <ListSection
              title="Nice to have"
              items={pos.bonus_qualifications}
            />
            <ListSection title="What you'll gain" items={pos.what_we_offer} />

            <section className="rounded-2xl border border-border p-6 space-y-4">
              <h2 className="font-semibold text-xl text-foreground">
                Ready to apply?
              </h2>
              <ApplyButton url={applyUrl} />
              <p className="text-sm text-muted-foreground">
                Not the right fit?{' '}
                <Link
                  to={`${href('/careers')}#open-positions`}
                  className="font-medium text-primary hover:underline"
                >
                  See other open roles
                </Link>
                .
              </p>
            </section>
          </div>
        </FadeIn>

        {/* Sticky summary (desktop) */}
        <aside className="hidden lg:block sticky top-28">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
            <p className="font-semibold text-foreground">{pos.title}</p>
            <dl className="space-y-3 text-sm">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <Icon
                    icon={f.icon}
                    className="h-5 w-5 shrink-0 text-primary"
                  />
                  <div>
                    <dt className="text-muted-foreground">{f.label}</dt>
                    <dd className="font-medium text-foreground">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <ApplyButton url={applyUrl} className="w-full" />
          </div>
        </aside>
      </div>

      {/* Apply bar (mobile) */}
      {applyUrl && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <ApplyButton url={applyUrl} className="w-full" />
        </div>
      )}
    </div>
  );
}
