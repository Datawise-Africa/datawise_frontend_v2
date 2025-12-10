import {
  available_positions,
  type JobCareerPositionType,
} from '@/constants/navigation';
import { useJobCareerContext } from '@/context/career-context';
import { slugify } from '@/utils/slugify';
import { useNavigate } from 'react-router';

export default function Jobs() {
  const navigate = useNavigate();
  const { state, dispatch } = useJobCareerContext();

  const handleViewDetails = (position: JobCareerPositionType) => {
    const slug = slugify(position.title); // <-- generate slug
    dispatch({ type: 'SET_POSITION', payload: position });
    navigate(`/job-description/${slug}`); // <-- navigate with slug
  };

  return (
    <div className="container mx-auto pt-20 px-5 lg:px-15 xl:px-20 max-lg:py-4">
      {/* ---------- HERO ---------- */}
      <section className="pt-5 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-15 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            Shape Africa’s Future <br />
            <span className="text-[#26A37E]">Through Data</span>
          </h1>
          <p className="sora-font pt-6 pb-6 text-[#0F2542] font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            Join a passionate team leveraging data to drive impactful <br />
            decisions in health, education, and governance.
          </p>
          <button
            onClick={() =>
              document
                .getElementById('open-positions')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex items-center justify-center gap-2 bg-[#26A37E] text-white font-medium py-2 px-3 rounded-md hover:bg-[#1e8c68] transition duration-300"
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

        <div className="md:pt-20 lg:pt-0">
          <img
            className="w-full max-w-[845px] lg:h-[400.69px]"
            src={'/assets/jobs/Jobs Hero.svg'}
            alt="jobs hero"
          />
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="w-screen bg-[#F7FDFA] pt-4 pb-15 relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
            Why work with us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
            {[
              {
                img: '/assets/jobs/lucide_goal.png',
                title: 'Impact-Driven Projects',
                text: 'We focus on transformative data solutions…',
              },
              {
                img: '/assets/jobs/hugeicons_ai-magic.png',
                title: 'Commitment to Innovation',
                text: 'We value creativity and innovation…',
              },
              {
                img: '/assets/jobs/fluent_people-community-24-regular.png',
                title: 'Collaborative Growth',
                text: 'We foster a collaborative environment…',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="border border-[#B1E9D1] rounded-md bg-white p-3"
              >
                <img src={c.img} alt="" width={40} height={40} />
                <h3 className="lora-font font-bold text-[22px] leading-[100%] tracking-[-0.02em] pt-2 text-[#26A37E]">
                  {c.title}
                </h3>
                <p className="sora-font text-[#0F2542] pt-2 text-left">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STEPS ---------- */}
      <section className="w-screen bg-[#F7FDFA] pt-4 pb-15 relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
            Steps to Join Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
            {['Apply Online', 'Interviews', 'Onboarding'].map((step, idx) => (
              <div key={idx} className="p-3 text-center">
                <div className="w-16 h-16 bg-[#26A37E] text-white flex items-center justify-center rounded-full text-[24px] font-bold mx-auto">
                  {idx + 1}
                </div>
                <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] pt-2 text-[#0F2542]">
                  {step}
                </h3>
                <p className="sora-font text-[#0F2542] pt-2">
                  {idx === 0
                    ? 'Submit your resume and cover letter for the desired role.'
                    : idx === 1
                      ? 'Showcase your expertise through discussions with our team.'
                      : 'Start your journey with a comprehensive onboarding program.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OPEN POSITIONS ---------- */}
      <section id="open-positions" className="pt-4 pb-15">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
            Open Positions
          </h2>

          {available_positions.length === 0 ? (
            <p className="pt-8 text-center text-[#0F2542] text-lg">
              No open positions yet
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {available_positions.map((pos) => {
                return (
                  <div
                    key={pos.id}
                    className="border border-[#B1E9D1] bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="lora-font font-semibold text-[22px] text-[#0F2542]">
                      {pos.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-[#E6F4F1] text-[#26A37E] text-xs px-2 py-1 rounded">
                        {pos.work_period}
                      </span>
                      <span className="bg-[#E6F4F1] text-[#26A37E] text-xs px-2 py-1 rounded">
                        {pos.position}
                      </span>
                      <span className="bg-[#E6F4F1] text-[#26A37E] text-xs px-2 py-1 rounded">
                        {pos.workmode}
                      </span>
                    </div>

                    <p className="mt-3 text-[#0F2542] line-clamp-3">
                      {pos.overview}
                    </p>

                    <button
                      onClick={() => handleViewDetails(pos)}
                      className="mt-4 flex items-center gap-1 text-[#26A37E] font-medium underline hover:no-underline"
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
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
