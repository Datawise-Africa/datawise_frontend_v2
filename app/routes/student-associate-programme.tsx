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
        'A nine-month programme for university students and recent graduates: hands-on experience and mentorship in research, engineering and AI, and communications.',
      url: href('/student-associate-programme'),
      keywords:
        'student associate programme, industrial attachment Kenya, internship Nairobi, graduate programme Africa, data science internship, AI internship Africa, research internship, Datawise Africa',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        name: 'Datawise Africa Student Associate Programme',
        description:
          'Build skills. Gain experience. Do meaningful work. A nine-month programme for university students and recent graduates at Datawise Africa.',
        provider: {
          '@type': 'Organization',
          name: 'Datawise Africa',
          url: 'https://datawiseafrica.com',
        },
        timeToComplete: 'P9M',
        programPrerequisites:
          'Enrolled in or recently completed a relevant academic programme',
      },
    }),
  ];
}

const stages = [
  {
    label: 'Stage 1 · First 3 months',
    title: 'Industrial Attachment',
    text: 'Gain practical experience in an assigned department, working under the guidance of a supervisor and contributing to defined projects and responsibilities.',
    dot: 'bg-primary',
  },
  {
    label: 'Stage 2 · Next 6 months',
    title: 'Student Associate Engagement',
    text: 'Selected participants may progress to a more substantive, part-time role of about 20 hours a week, with clearer responsibilities and deliverables. Progression is competitive and based on performance, organisational needs and available opportunities.',
    dot: 'bg-accent-blue',
  },
];

const areas = [
  {
    icon: 'tabler:microscope',
    title: 'Research & Intelligence',
    text: 'Support applied research, evidence synthesis, research mapping, data collection and intelligence generation.',
    accent: 'text-primary bg-primary/10 dark:bg-primary/20',
  },
  {
    icon: 'tabler:code',
    title: 'Engineering & AI',
    text: 'Support software development, data engineering and AI, including product design, UX/UI, web design and development, and prototyping digital tools.',
    accent: 'text-accent-blue bg-accent-blue/10 dark:bg-accent-blue/20',
  },
  {
    icon: 'tabler:speakerphone',
    title: 'Communication & Digital Marketing',
    text: 'Support content creation, digital marketing, social media management, branding, stakeholder communication and engaging communication materials.',
    accent: 'text-accent-pink bg-accent-pink/10 dark:bg-accent-pink/20',
  },
];

const targetGroups = [
  {
    icon: 'tabler:school',
    title: 'University students',
    text: 'Seeking industrial attachment, with priority for final-year and penultimate-year students.',
  },
  {
    icon: 'tabler:certificate',
    title: 'Recent graduates',
    text: 'Within 12–18 months of completing their studies.',
  },
  {
    icon: 'tabler:bulb',
    title: 'Curious minds',
    text: 'With a relevant academic background and an interest in data, research, technology, AI, communications or business operations.',
  },
];

const benefits = [
  {
    icon: 'tabler:briefcase-2',
    title: 'Real projects',
    text: 'Practical experience working on real organisational projects.',
  },
  {
    icon: 'tabler:user-check',
    title: 'Supervision & mentorship',
    text: 'Professional supervision and mentorship throughout the programme.',
  },
  {
    icon: 'tabler:users-group',
    title: 'Multidisciplinary teams',
    text: 'Exposure to multidisciplinary teams and working environments.',
  },
  {
    icon: 'tabler:chart-arrows-vertical',
    title: 'Skills that grow',
    text: 'Opportunities to develop technical, analytical and professional skills.',
  },
  {
    icon: 'tabler:world',
    title: 'Work that matters',
    text: 'Contribute to research, products and initiatives addressing African data and technology challenges.',
  },
];

const selectionSteps = [
  {
    title: 'Choose your area',
    text: 'Pick the area that fits your academic background, skills and interests.',
  },
  {
    title: 'Apply',
    text: 'When the programme is recruiting, roles are listed under our open positions. Apply through the listing.',
  },
  {
    title: 'Screening & shortlisting',
    text: 'We review every application. Only shortlisted applicants will be contacted.',
  },
  {
    title: 'Interview or assessment',
    text: 'Shortlisted applicants have an interview, a practical assessment, or both, depending on the placement.',
  },
];

const documents = [
  'An updated CV',
  'A short statement of interest covering your preferred area and why you are applying',
  'Academic transcripts or relevant academic documents',
  'A portfolio or samples of previous work, where applicable',
  'University industrial attachment documents, where required',
];

const faqs = [
  {
    q: 'How long is the programme?',
    a: 'Nine months: a 3-month industrial attachment, followed by a possible 6-month part-time Student Associate engagement of about 20 hours a week.',
  },
  {
    q: 'Does everyone move on to Stage 2?',
    a: 'No. Progression is competitive and depends on your performance, organisational needs and available opportunities.',
  },
  {
    q: 'Can I apply to more than one area?',
    a: 'Choose the area that best matches your academic background, skills and interests, and name it in your statement of interest.',
  },
  {
    q: 'Will I hear back if I am not shortlisted?',
    a: 'Only shortlisted applicants will be contacted.',
  },
  {
    q: 'Does the programme lead to a job?',
    a: 'Taking part does not guarantee employment. Strong performers may be considered for future opportunities when there is a need and an open role.',
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

function OpenPositionsLink({ className }: { className?: string }) {
  return (
    <Button asChild size="lg" className={cn('h-auto px-6 py-3', className)}>
      <Link to={`${href('/careers')}#open-positions`}>
        View open positions
        <Icon icon="tabler:arrow-right" className="ml-1 h-5 w-5" />
      </Link>
    </Button>
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
              <p className="text-xl sm:text-2xl font-semibold text-teal-300">
                Build skills. Gain experience. Do meaningful work.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Work alongside experienced professionals, contribute to real
                projects and gain exposure to an organisation building
                Africa&rsquo;s data and intelligent systems. Open to university
                students and recent graduates.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {[
                  { icon: 'tabler:calendar', text: '9 months' },
                  { icon: 'tabler:stairs-up', text: '2 stages' },
                  { icon: 'tabler:layout-grid', text: '3 areas' },
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
                <OpenPositionsLink />
                <Button
                  asChild
                  variant="link"
                  className="text-white px-0 h-auto"
                >
                  <a href="#areas">
                    Explore the areas
                    <Icon icon="tabler:arrow-down" className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- STRUCTURE ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading
            eyebrow="Programme structure"
            title="Nine months, two stages"
          />
          <StaggerChildren className="relative grid gap-10 md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
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

      {/* ---------- AREAS ---------- */}
      <section
        id="areas"
        className="bg-section-green dark:bg-section-green-dark scroll-mt-24"
      >
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading
            eyebrow="Areas of engagement"
            title="Where you could work"
            className="mb-4"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Participants are placed in one of three areas, depending on their
            academic background, skills and interests.
          </p>
          <StaggerChildren className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {areas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="h-full flex flex-col rounded-2xl border border-border bg-background dark:bg-background/50 p-6 shadow-sm">
                  <div
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-xl',
                      area.accent
                    )}
                  >
                    <Icon icon={area.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {area.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ---------- WHO SHOULD APPLY ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="Who should apply" title="Is this for you?" />
          <StaggerChildren className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {targetGroups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
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
            <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
              We look for curiosity, initiative, a willingness to learn, strong
              communication skills and the ability to work collaboratively.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------- WHAT YOU WILL GAIN ---------- */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="What you will gain" title="Grow with us" />
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

      {/* ---------- HOW TO APPLY ---------- */}
      <section id="apply" className="bg-background scroll-mt-24">
        <div className="container mx-auto px-5 lg:px-8 py-14 lg:py-20">
          <SectionHeading eyebrow="How to apply" title="Your application" />
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
            <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="font-bold text-lg text-foreground">
                What to prepare
              </h3>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
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
                  Ready to apply?
                </h2>
                <p className="text-gray-300">
                  Applications go through screening, shortlisting and an
                  interview or practical assessment. Only shortlisted applicants
                  will be contacted. Progression to the Student Associate stage
                  is not guaranteed and depends on performance and
                  organisational capacity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <OpenPositionsLink />
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
