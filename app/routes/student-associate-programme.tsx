import { Icon } from '@iconify/react';
import { href, Link } from 'react-router';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/student-associate-programme';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Student Associate Programme | Datawise Africa',
      description:
        'A six-month programme (Jan–Jun 2027) giving university students and recent graduates hands-on experience and mentorship in data, AI, research and more.',
      url: href('/student-associate-programme'),
      keywords:
        'student associate programme, industrial attachment Kenya, internship Nairobi, graduate programme Africa, data science internship, AI internship Africa, research internship, Datawise Africa',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        name: 'Datawise Africa Student Associate Programme',
        description:
          'A structured pathway for university students and recent graduates to gain practical industry experience, professional mentorship and progressive responsibility.',
        provider: {
          '@type': 'Organization',
          name: 'Datawise Africa',
          url: 'https://datawiseafrica.com',
        },
        startDate: '2027-01',
        endDate: '2027-06',
        timeToComplete: 'P6M',
        programPrerequisites:
          'Enrolled in or recently completed a relevant academic programme',
      },
    }),
  ];
}

const stages = [
  {
    label: 'Stage 1 · Months 1–3',
    title: 'Industrial Attachment',
    text: 'You join a department with a named supervisor and a clear work plan. We check in with you at the end of each month. At the end of Month 3, your supervisor recommends whether you move to Stage 2.',
    dot: 'bg-primary',
  },
  {
    label: 'Stage 2 · Months 4–6',
    title: 'Student Associate',
    text: 'Selected participants take on a bigger role with clear deliverables and about 20 hours of work a week. Places in Stage 2 are competitive and depend on performance and team capacity.',
    dot: 'bg-accent-blue',
  },
  {
    label: 'After the pilot',
    title: 'Longer engagements',
    text: 'Student Associate roles of up to 12 months may be introduced once the pilot has been reviewed. Strong performers may be considered for future openings.',
    dot: 'bg-accent-orange',
  },
];

const targetGroups = [
  {
    icon: 'tabler:school',
    title: 'University students',
    text: 'Seeking an industrial attachment. Final-year and penultimate-year students get priority.',
  },
  {
    icon: 'tabler:certificate',
    title: 'Recent graduates',
    text: 'Within 12–18 months of graduating, with a relevant academic background.',
  },
  {
    icon: 'tabler:rocket',
    title: 'Emerging professionals',
    text: 'Looking for structured exposure to data, AI, research and the other areas we work in.',
  },
];

const eligibility = [
  'Be enrolled in, or have recently completed, a relevant academic programme',
  'Show interest in data, research, technology, AI, communications, business operations or a related field',
  'Be willing to learn, take ownership and contribute to team goals',
  'Have foundational communication, organisational and problem-solving skills',
  'Be available for the full programme period',
  'Follow Datawise professional conduct, confidentiality and information security requirements',
];

const tracks = [
  {
    icon: 'tabler:chart-bar',
    title: 'Data & Analytics',
    text: 'Data management, analytics, BI and visualisation',
    accent: 'text-accent-orange bg-accent-orange/10 dark:bg-accent-orange/20',
  },
  {
    icon: 'tabler:microscope',
    title: 'Research & Intelligence',
    text: 'Applied research, evidence synthesis, research mapping',
    accent: 'text-primary bg-primary/10 dark:bg-primary/20',
  },
  {
    icon: 'tabler:code',
    title: 'Engineering & AI',
    text: 'Software development, data engineering, AI research and support',
    accent: 'text-accent-blue bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: 'tabler:speakerphone',
    title: 'Communications & Strategy',
    text: 'Digital communications, content, design, strategic communications',
    accent: 'text-accent-pink bg-accent-pink/10 dark:bg-accent-pink/20',
  },
  {
    icon: 'tabler:briefcase',
    title: 'Business & Operations',
    text: 'Business development, project coordination, operational support',
    accent: 'text-accent-orange bg-accent-orange/10 dark:bg-accent-orange/20',
  },
];

const benefits = [
  {
    icon: 'tabler:user-check',
    title: 'A named supervisor',
    text: 'Someone who sets your work plan, reviews your work and gives regular feedback.',
  },
  {
    icon: 'tabler:map-2',
    title: 'Structured onboarding',
    text: 'Our organisation, products, ways of working, and how we protect data.',
  },
  {
    icon: 'tabler:users-group',
    title: 'Mentorship & exposure',
    text: 'Career conversations, cross-team work and knowledge-sharing sessions.',
  },
  {
    icon: 'tabler:books',
    title: 'Learning sessions',
    text: 'Data analytics and AI, research methods, data governance, product practice and project management.',
  },
  {
    icon: 'tabler:briefcase-2',
    title: 'Real work for your portfolio',
    text: 'Deliverables that contribute to live projects, with learning goals set in your work plan.',
  },
  {
    icon: 'tabler:award',
    title: 'Certificate on completion',
    text: 'A participation or attachment certificate where applicable.',
  },
];

const selectionSteps = [
  {
    title: 'Apply',
    text: 'Send your application through the Datawise website. We check that it is complete.',
  },
  {
    title: 'Screening & shortlisting',
    text: 'We review applications against the requirements for each placement.',
  },
  {
    title: 'Interview or assessment',
    text: 'Shortlisted applicants have an interview, a practical task, or both.',
  },
  {
    title: 'Offer & onboarding',
    text: 'Selected applicants receive written terms and start with onboarding.',
  },
];

const documents = [
  'An updated CV',
  'A short statement of interest',
  'Academic transcripts or other relevant documents',
  'A portfolio or work samples, where relevant',
  'University attachment documents, where your university requires them',
];

const faqs = [
  {
    q: 'Is the programme paid?',
    a: 'Any stipend, allowance or support (such as transport, equipment or connectivity) is confirmed before recruitment and set out in your engagement documents.',
  },
  {
    q: 'Will I work in the office or remotely?',
    a: 'It depends on the placement. Each role is office-based, hybrid or remote, and this is stated in your engagement terms.',
  },
  {
    q: 'How many hours will I work?',
    a: 'During the attachment stage, your schedule is agreed to fit around your university requirements. In the Student Associate stage, expect about 20 hours a week, with flexibility for academic commitments.',
  },
  {
    q: 'Does everyone move on to Stage 2?',
    a: 'No. Progression depends on your performance, your supervisor’s recommendation, and whether a suitable role and team capacity are available.',
  },
  {
    q: 'Does the programme lead to a job?',
    a: 'Taking part does not guarantee employment. Strong performers may be considered for future opportunities when there is a need and an open role.',
  },
  {
    q: 'Can I choose my track?',
    a: 'You can tell us which track interests you. Participants are placed only in approved placements, each with its own technical and academic requirements.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <FadeIn>
      <div className={cn('text-center mb-10', className)}>
        <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
          {eyebrow}
        </h3>
        <h2 className="font-bold text-3xl sm:text-4xl text-foreground">
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}

export default function StudentAssociateProgramme() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
                Student Associate Programme
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                A structured pathway for university students and recent
                graduates to gain practical industry experience, professional
                mentorship and growing responsibility at Datawise Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {[
                  { icon: 'tabler:calendar', text: '6 months' },
                  { icon: 'tabler:stairs-up', text: '2 stages' },
                  { icon: 'tabler:layout-grid', text: '5 tracks' },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-gray-200"
                  >
                    <Icon icon={item.icon} className="h-4 w-4 text-teal-300" />
                    {item.text}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button asChild size="lg" className="h-auto px-6 py-3">
                  <Link to={`${href('/careers')}#open-positions`}>
                    View open positions
                    <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="text-white px-0 h-auto"
                >
                  <a href="#eligibility">
                    Check if you&rsquo;re eligible
                    <Icon icon="tabler:arrow-down" className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading
            eyebrow="How it works"
            title="A two-stage programme"
          />
          <StaggerChildren className="relative grid gap-10 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            <div
              aria-hidden
              className="hidden md:block absolute top-1.5 left-0 right-0 h-px bg-border"
            />
            {stages.map((stage) => (
              <StaggerItem key={stage.title}>
                <div className="relative space-y-3">
                  <span
                    className={cn(
                      'relative block h-3 w-3 rounded-sm',
                      stage.dot
                    )}
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stage.label}
                  </p>
                  <h3 className="font-bold text-xl text-foreground">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stage.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- WHO IT'S FOR ---------- */}
      <section
        id="eligibility"
        className="bg-section-green dark:bg-section-green-dark scroll-mt-24"
      >
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="Who it's for" title="Is this for you?" />
          <StaggerChildren className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {targetGroups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="h-full rounded-2xl border border-border bg-background dark:bg-background/50 p-6 shadow-sm">
                  <Icon icon={group.icon} className="h-7 w-7 text-primary" />
                  <h3 className="mt-3 font-bold text-lg text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {group.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn direction="up">
            <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-border bg-background dark:bg-background/50 p-6 lg:p-8">
              <h3 className="font-bold text-lg text-foreground">
                To apply, you should:
              </h3>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Icon
                      icon="tabler:circle-check"
                      className="h-5 w-5 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Each placement may have its own technical or academic
                requirements. We select on merit and actively welcome applicants
                from a wide range of institutions, backgrounds, genders and
                regions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- TRACKS ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="Tracks" title="Where you could work" />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {tracks.map((track) => (
              <StaggerItem key={track.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-xl',
                      track.accent
                    )}
                  >
                    <Icon icon={track.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-foreground">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {track.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- WHAT YOU GET ---------- */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading
            eyebrow="What you get"
            title="Support at every step"
          />
          <StaggerChildren className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                    <Icon
                      icon={benefit.icon}
                      className="h-5 w-5 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- SELECTION ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading
            eyebrow="Selection"
            title="How we select participants"
          />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {selectionSteps.map((step, idx) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-2xl bg-muted/50 p-6">
                  <span className="text-sm font-bold text-primary">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-bold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn direction="up">
            <div className="mt-10 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  What to prepare
                </h3>
                <ul className="mt-4 space-y-3">
                  {documents.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Icon
                        icon="tabler:file-check"
                        className="h-5 w-5 shrink-0 text-primary"
                      />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Technical roles may ask for more.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  What we look for
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  A relevant academic background, problem-solving and analytical
                  ability, practical skills, clear communication, genuine
                  interest in our work, and a willingness to learn and adapt.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <FadeIn direction="up">
            <Accordion
              type="single"
              collapsible
              className="max-w-3xl mx-auto rounded-2xl border border-border bg-background dark:bg-background/50 px-6"
            >
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-base text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <FadeIn direction="up">
            <div className="rounded-3xl bg-navy px-6 py-10 lg:px-12 lg:py-14 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h2 className="font-bold text-2xl sm:text-3xl">
                  Ready to take the first step?
                </h2>
                <p className="text-gray-300">
                  Programme roles are listed with our open positions. Pick a
                  track that fits you and apply.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-auto px-6 py-3">
                  <Link to={`${href('/careers')}#open-positions`}>
                    View open positions
                    <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto px-6 py-3 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Link to={href('/contact-us')}>Ask a question</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
