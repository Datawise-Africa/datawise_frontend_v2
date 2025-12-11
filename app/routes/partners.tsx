import PartnersForm from '@/components/partners/partners-form';
import { useRef } from 'react';
import type { Route } from './+types/partners';
import { generateSEOTags } from '@/utils/seo';
import { href } from 'react-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Partners',
      description:
        'Join hands with Datawise Africa to leverage data and AI for transformative solutions across the continent. Explore partnership opportunities that drive innovation and impact.',
      url: href('/partners'),
      keywords:
        'legal assistant, Kenyan law, case insights, legal information, African tech solutions, data systems, applied research',
    }),
  ];
}

const partners = [
  { name: 'Lacuna Fund', logo: '/assets/homepage/lacuna-fund-logo.png' },
  { name: 'Eduonix', logo: '/assets/homepage/eduonix-logo.png' },
  { name: 'Kaggle', logo: '/assets/homepage/Kaggle-logo.png' },
  { name: 'Kodak', logo: '/assets/homepage/kodak-logo.png' },
  { name: 'CREA-N', logo: '/assets/homepage/crea-n-logo.webp' },
];
export default function Partners() {
  // Create a ref for the form section
  const formRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the form section
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="container mx-auto pt-24 md:pt-0 w-full flex flex-col items-center p-6 mt-12 space-y-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] px-4 sm:px-6 md:px-16 py-10 rounded-2xl gap-6 md:gap-12 lg:gap-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Partner With Us to{' '}
            <span className="text-[#26A37E]">Drive Impact</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Together, we can harness the power of data and AI to shape Africa's
            future.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToForm}
              className="w-64px h-[41px] px-4 py-3 flex items-center gap-2 bg-[#26A37E] text-white font-medium rounded-lg hover:bg-[#1e8c68] transition-colors duration-300"
            >
              Become a Partner
              <img
                src={'/assets/datalab7.png'}
                alt="Arrow Icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={'/assets/PartnerHero.svg'}
            alt="Partner With Us Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="w-full max-w-[90%] text-center space-y-8 px-8">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-center text-[#0F2542]">
          Why Partner With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/partner1.png'}
              alt="Access Exclusive Data"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">
              Access Exclusive Data
            </h4>
            <p className="mt-4">
              Gain insights from high-quality datasets to drive innovation and
              decision-making.
            </p>
          </div>
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/partner2.png'}
              alt="Collaborate on AI Solutions"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">
              Collaborate on AI Solutions
            </h4>
            <p className="mt-4">
              Work with leading experts to develop AI-driven solutions for
              real-world challenges.
            </p>
          </div>
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/partners3.png'}
              alt="Expand Your Reach"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">Expand Your Reach</h4>
            <p className="mt-4">
              Connect with a growing network of innovators, researchers, and
              organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full max-w-7xl bg-[#F7FDFA] px-6 py-12 text-center">
        <h3
          className="text-[#26A37E] text-sm font-bold tracking-widest uppercase"
          style={{ letterSpacing: '0.20em' }}
        >
          Our Partners
        </h3>
        <h1 className="text-3xl font-serif text-[#0F2542] mt-2">
          Collaborating for a Smarter Africa
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-items-center">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo || '/placeholder.svg'}
              alt={partner.name}
              className="h-20 max-w-[180px] object-contain"
            />
          ))}
        </div>
      </section>

      {/* Form Section - Adding ref here */}
      <div ref={formRef} id="partner-form" className="w-full scroll-mt-16">
        <PartnersForm />
      </div>
    </div>
  );
}
