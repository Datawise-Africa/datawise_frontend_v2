import { teamMembers } from '@/constants/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutUsTeam() {
  return (
    <div className="bg-white py-2 px-6">
      <div className="text-center mb-12 ">
        <p
          className="text-sm text-[#26A37E] text-[14px] uppercase tracking-widest font-extralight"
          style={{ letterSpacing: '0.20em' }}
        >
          Our Team
        </p>
        <h2 className="text-5xl lora-font text-gray-800 mt-6">
          Meet the Minds Behind <br /> Datawise Africa
        </h2>
        <p className="text-lg text-gray-600 mt-4 text-[22px]">
          A diverse team of researchers, engineers,
          <br /> and innovators united by a shared vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-80  object-cover mb-4 shadow-md"
            />
            <a
              href={member.linkedin_url}
              target="_blank"
              rel="nooponer noreferrer"
              className="text-[#0A66C2] mb-2"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
            <p className="text-[#26A37E] font-extralight">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
