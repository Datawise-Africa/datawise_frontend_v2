import { formatDeadline, getOpenPositions } from '~/lib/data/careers';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import { slugify } from '~/utils/slugify';
import { Link, href } from 'react-router';
import { Icon } from '@iconify/react';
import { Button } from '~/components/ui/button';
import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/careers';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Careers at Datawise Africa | Join Our Team',
      description:
        'Explore open positions at Datawise Africa. Join the team building AI, data, and digital infrastructure for the African continent.',
      url: href('/careers'),
      keywords:
        'data science jobs africa, AI careers, machine learning jobs, technology careers africa, datawise africa careers',
    }),
  ];
}

export default function Careers() {
  const open_positions = getOpenPositions();

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                Shape Africa&rsquo;s Future <br />
                <span className="text-primary">Through Data</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
                Join a passionate team leveraging data to drive impactful
                decisions in health, education, and governance.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  size="lg"
                  className="h-auto px-6 py-3"
                  onClick={() =>
                    document
                      .getElementById('open-positions')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Open Positions
                  <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                src={'/assets/careers/Careers Hero.svg'}
                alt="career hero"
                width={645}
                height={437}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Benefits
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Why work with us?
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                img: '/assets/careers/lucide_goal.png',
                title: 'Impact-Driven Projects',
                text: 'We focus on transformative data solutions…',
              },
              {
                img: '/assets/careers/hugeicons_ai-magic.png',
                title: 'Commitment to Innovation',
                text: 'We value creativity and innovation…',
              },
              {
                img: '/assets/careers/fluent_people-community-24-regular.png',
                title: 'Collaborative Growth',
                text: 'We foster a collaborative environment…',
              },
            ].map((c, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center bg-background dark:bg-background/50 rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <img src={c.img} alt="" width={40} height={40} />
                  <h3 className="font-bold text-xl tracking-tight pt-3 text-primary">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground pt-2 text-sm leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- STEPS ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Process
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Steps to Join Us
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['Apply Online', 'Interviews', 'Onboarding'].map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold mx-auto">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-xl leading-tight tracking-tight pt-4 text-foreground">
                    {step}
                  </h3>
                  <p className="text-muted-foreground pt-2 text-sm leading-relaxed">
                    {idx === 0
                      ? 'Submit your resume and cover letter for the desired role.'
                      : idx === 1
                        ? 'Showcase your expertise through discussions with our team.'
                        : 'Start your journey with a comprehensive onboarding program.'}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- OPEN POSITIONS ---------- */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <FadeIn>
            <div className="text-center mb-10 scroll-mt-24" id="open-positions">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
                Opportunities
              </h3>
              <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
                Open Positions
              </h2>
            </div>
          </FadeIn>

          {open_positions.length === 0 ? (
            <FadeIn direction="up">
              <div className="text-center max-w-md mx-auto py-8">
                <p className="text-muted-foreground text-lg">
                  No open positions at the moment. Check back soon!
                </p>
              </div>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {open_positions.map((pos) => {
                return (
                  <StaggerItem key={pos.id}>
                    <div className="border border-border bg-background dark:bg-background/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                      {pos.programme && (
                        <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                          <Icon icon="tabler:school" className="h-4 w-4" />
                          Student Associate Programme
                        </span>
                      )}
                      <h3 className="font-semibold text-xl text-foreground">
                        {pos.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {[pos.work_period, pos.position, pos.workmode]
                          .filter(Boolean)
                          .map((tag) => (
                            <span
                              key={tag}
                              className="bg-primary/10 dark:bg-primary/20 text-primary text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        {pos.deadline && (
                          <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                            Apply by {formatDeadline(pos.deadline)}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {pos.overview}
                      </p>

                      <Link
                        to={`/career-description/${slugify(pos.title)}`}
                        className="mt-4 flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                      >
                        View Details
                        <Icon icon="tabler:arrow-right" className="w-4 h-4" />
                      </Link>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          )}
        </div>
      </section>
      {/* ---------- STUDENT ASSOCIATE PROGRAMME ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center max-w-5xl mx-auto rounded-3xl bg-navy text-white p-6 sm:p-10">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-teal-300 uppercase tracking-wide">
                  Early careers
                </h3>
                <h2 className="font-bold text-3xl sm:text-4xl">
                  Student Associate Programme
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our structured pathway for university students and recent
                  graduates. Start with an industrial attachment, then grow into
                  a Student Associate role with a named supervisor, mentorship
                  and real deliverables.
                </p>
                <Button asChild size="lg" className="h-auto px-6 py-3">
                  <Link to={href('/student-associate-programme')}>
                    How the programme works
                    <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <ul className="grid gap-3">
                {[
                  {
                    icon: 'tabler:school',
                    title: 'Industrial Attachment',
                    text: 'First 3 months: placement with a supervisor',
                  },
                  {
                    icon: 'tabler:stairs-up',
                    title: 'Student Associate',
                    text: 'Next 6 months: selected participants move to a part-time role',
                  },
                  {
                    icon: 'tabler:layout-grid',
                    title: '3 areas',
                    text: 'Research & intelligence, engineering & AI, communication & digital marketing',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                      <Icon
                        icon={item.icon}
                        className="h-5 w-5 text-teal-300"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-300">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
