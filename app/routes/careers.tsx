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
      <div className="container mx-auto pt-20 px-5 lg:px-15 xl:px-20 max-lg:py-4">
        {/* ---------- HERO ---------- */}
        <section className="pt-5 grid grid-cols-1 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="pt-15 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
              <h1 className="font-bold text-5xl leading-[100%] tracking-tight">
                Shape Africa's Future <br />
                <span className="text-primary">Through Data</span>
              </h1>
              <p className="pt-6 pb-6 text-foreground font-normal text-xl leading-[167%] tracking-tight">
                Join a passionate team leveraging data to drive impactful <br />
                decisions in health, education, and governance.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('open-positions')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center justify-center gap-2 bg-primary text-white font-medium py-2 px-3 rounded-md hover:bg-primary-hover transition duration-300"
              >
                View Open Positions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="md:pt-20 lg:pt-0">
              <img
                className="w-full max-w-[845px] lg:h-[400.69px]"
                src={'/assets/careers/Careers Hero.svg'}
                alt="career hero"
              />
            </div>
          </FadeIn>
        </section>

        {/* ---------- WHY US ---------- */}
        <section className="w-screen bg-section-green dark:bg-card pt-4 pb-15 relative left-1/2 -translate-x-1/2">
          <div className="max-w-[1200px] mx-auto px-4">
            <FadeIn>
              <h2 className="font-bold text-4xl leading-[100%] tracking-tight text-center">
                Why work with us?
              </h2>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
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
                  <div className="border border-primary-light rounded-md bg-white p-3">
                    <img src={c.img} alt="" width={40} height={40} />
                    <h3 className="font-bold text-xl leading-[100%] tracking-tight pt-2 text-primary">
                      {c.title}
                    </h3>
                    <p className="text-foreground pt-2 text-left">{c.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ---------- STEPS ---------- */}
        <section className="w-screen bg-section-green dark:bg-card pt-4 pb-15 relative left-1/2 -translate-x-1/2">
          <div className="max-w-[1200px] mx-auto px-4">
            <FadeIn>
              <h2 className="font-bold text-4xl leading-[100%] tracking-tight text-center">
                Steps to Join Us
              </h2>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
              {['Apply Online', 'Interviews', 'Onboarding'].map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-3 text-center">
                    <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold mx-auto">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-xl leading-[150%] tracking-tight pt-2 text-foreground">
                      {step}
                    </h3>
                    <p className="text-foreground pt-2">
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
        <section id="open-positions" className="pt-4 pb-15">
          <div className="max-w-[1200px] mx-auto px-4">
            <FadeIn>
              <h2 className="font-bold text-4xl leading-[100%] tracking-tight text-center">
                Open Positions
              </h2>
            </FadeIn>

            {available_positions.length === 0 ? (
              <p className="pt-8 text-center text-foreground text-lg">
                No open positions yet
              </p>
            ) : (
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {available_positions.map((pos) => {
                  return (
                    <StaggerItem key={pos.id}>
                      <div className="border border-primary-light bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-xl text-foreground">
                          {pos.title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-primary-bg text-primary text-xs px-2 py-1 rounded">
                            {pos.work_period}
                          </span>
                          <span className="bg-primary-bg text-primary text-xs px-2 py-1 rounded">
                            {pos.position}
                          </span>
                          <span className="bg-primary-bg text-primary text-xs px-2 py-1 rounded">
                            {pos.workmode}
                          </span>
                        </div>

                        <p className="mt-3 text-foreground line-clamp-3">
                          {pos.overview}
                        </p>

                        <button
                          onClick={() => handleViewDetails(pos)}
                          className="mt-4 flex items-center gap-1 text-primary font-medium underline hover:no-underline"
                        >
                          View Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
