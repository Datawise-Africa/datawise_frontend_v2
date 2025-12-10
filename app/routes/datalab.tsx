import { generateSEOTags } from '@/utils/seo';
import type { Route } from './+types/datalab';
import { href } from 'react-router';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Discover verified African datasets | Datalab Africa',
      description:
        'Search, filter, and download curated African datasets to accelerate analytics, machine learning, and policy projects while rewarding dataset creators.',
      url: href('/datalab'),
      image: '/d-lab-ico.png',
      keywords:
        'african datasets, data catalog, open data africa, data marketplace, datalab, africa, datasets, open data, data collaboration, data sharing, data governance',
    }),
  ];
}
export default function Datalab() {
  const handleExploreDatasetsClick = () => {
    if (typeof window !== 'undefined')
      window.open(
        'https://datalab.datawiseafrica.com',
        '_blank',
        'noopener,noreferrer'
      );
  };
  return (
    <div className="container mx-auto w-full flex flex-col items-center p-6 space-y-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] px-6 md:px-16 py-10 rounded-2xl mt-10 gap-6 md:gap-12 lg:gap-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight lora-font">
            Power Your Insights with{' '}
            <span className="text-[#26A37E]">Trusted Data</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Datalab is a platform that maintains transparency in data use while
            ensuring creator sovereignty.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleExploreDatasetsClick}
              className="w-[164px] h-[41px] px-4 py-3 flex items-center gap-2 bg-[#26A37E] text-white font-medium rounded-lg"
            >
              Get Started
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
            src={'/assets/Datalab Hero.svg'}
            alt="Datalab Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Explore Section */}
      <section className="w-full flex flex-col md:flex-row px-6 md:px-16">
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="lora-font font-bold text-[#0F2542] text-[40px] leading-[100%] tracking-[-0.02em]">
            Explore, Analyze, and Share Data with{' '}
            <span className="text-[#26A37E]">Datalab</span>
          </h2>
          <p className="font-sora font-normal text-[22px] leading-[167%] tracking-[-0.03em] text-gray-600">
            Your gateway to Africa’s most comprehensive data platform.
          </p>
        </div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-0">
          <div className="border border-[#EDFCFE] p-6 rounded-md shadow bg-[#EDFCFE] flex flex-col items-start">
            <img
              src={'/assets/datalab1.png'}
              alt="Discover Datasets"
              className="w-12 h-12"
            />
            <h4 className="mt-4 font-semibold">Discover Datasets</h4>
            <p>
              Access high-quality datasets across critical domains like
              agriculture, healthcare, and languages.
            </p>
          </div>
          <div className="border border-[#FDF2F7] p-6 rounded-md bg-[#FDF2F7] flex flex-col items-start">
            <img
              src={'/assets/datalab2.png'}
              alt="Upload Your Data"
              className="w-12 h-12"
            />
            <h4 className="mt-4 font-semibold">Upload Your Data</h4>
            <p>
              Contribute to Africa’s data ecosystem by sharing your datasets
              with the community.
            </p>
          </div>
          <div className="border border-[#F7FDFA] p-6 rounded-md bg-[#F7FDFA] flex flex-col items-start">
            <img
              src={'/assets/datalab3.png'}
              alt="Collaborate"
              className="w-12 h-12"
            />
            <h4 className="mt-4 font-semibold">Collaborate</h4>
            <p>
              Join a growing network of data enthusiasts, researchers, and
              innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="w-full text-center bg-[#F7FDFA] space-y-6 px-6">
        <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center text-[#0F2542]">
          Empower Your Work with DataLab
        </h2>
        <p className="font-sora font-normal text-[22px] leading-[167%] tracking-[-0.03em] text-center text-[#4B5563]">
          We offer a comprehensive catalog of high-quality datasets that empower
          you to:
        </p>

        {/* Grid Section */}
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full min-h-[180px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/datalab4.png'}
              alt="Make Smarter Decisions"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">
              Make Smarter Decisions
            </h4>
            <p className="mt-4">
              Use data-driven insights to enhance your projects, research, or
              business strategies.
            </p>
          </div>
          <div className="w-full min-h-[180px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/datalab5.png'}
              alt="Access Trusted Data"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">Access Trusted Data</h4>
            <p className="mt-4">
              Access curated, high-quality datasets from leading sources across
              industries.
            </p>
          </div>
          <div className="w-full min-h-[180px] p-6 rounded-lg flex flex-col items-center text-center">
            <img
              src={'/assets/datalab6.png'}
              alt="Customizable Downloads"
              className="w-12 h-12"
            />
            <h4 className="text-lg font-semibold mt-4">
              Customizable Downloads
            </h4>
            <p className="mt-4">
              Tailor your data to focus on the metrics and information that
              matter most.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleExploreDatasetsClick}
          className="px-6 py-3 flex items-center gap-2 bg-[#26A37E] mx-auto text-white font-medium rounded-lg"
        >
          Explore Datasets
          <img
            src={'/assets/datalab7.png'}
            alt="Arrow Icon"
            className="w-5 h-5"
          />
        </button>
      </section>
    </div>
  );
}
