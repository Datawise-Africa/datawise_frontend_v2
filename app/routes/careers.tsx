import { available_positions } from '~/lib/data/careers';
import type { JobCareerPositionType } from '~/lib/types/careers';
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  PageTransition,
} from '~/components/motion';
import { useAppDispatch } from '~/store';
import { setPosition } from '~/store/slices/career-slice';
import { slugify } from '~/utils/slugify';
import { useNavigate } from 'react-router';
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '~/components/ui/button';

export default function Careers() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleViewDetails = (position: JobCareerPositionType) => {
    const slug = slugify(position.title);
    dispatch(setPosition(position));
    navigate(`/career-description/${slug}`);
  };

  return (
    <PageTransition>
      {/* ---------- HERO ---------- */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="text-center md:text-left space-y-6">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                  Shape Africa{'\u2019'}s Future <br />
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
                    <IconArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="flex justify-center">
                <img
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  src={'/assets/careers/Careers Hero.svg'}
                  alt="career hero"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
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
                text: 'We focus on transformative data solutions\u2026',
              },
              {
                img: '/assets/careers/hugeicons_ai-magic.png',
                title: 'Commitment to Innovation',
                text: 'We value creativity and innovation\u2026',
              },
              {
                img: '/assets/careers/fluent_people-community-24-regular.png',
                title: 'Collaborative Growth',
                text: 'We foster a collaborative environment\u2026',
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
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
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
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
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

          {available_positions.length === 0 ? (
            <FadeIn direction="up">
              <div className="text-center max-w-md mx-auto py-8">
                <p className="text-muted-foreground text-lg">
                  No open positions at the moment. Check back soon!
                </p>
              </div>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {available_positions.map((pos) => {
                return (
                  <StaggerItem key={pos.id}>
                    <div className="border border-border bg-background dark:bg-background/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                      <h3 className="font-semibold text-xl text-foreground">
                        {pos.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                          {pos.work_period}
                        </span>
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                          {pos.position}
                        </span>
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary text-xs px-2 py-1 rounded">
                          {pos.workmode}
                        </span>
                      </div>

                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {pos.overview}
                      </p>

                      <button
                        onClick={() => handleViewDetails(pos)}
                        className="mt-4 flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                      >
                        View Details
                        <IconArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
