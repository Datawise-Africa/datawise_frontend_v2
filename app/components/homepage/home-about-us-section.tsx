export default function HomeAboutUsSection() {
  return (
    <div className="w-full bg-[#F7FDFA] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-[#26A37E] uppercase tracking-wide mb-2">
          ABOUT US
        </h3>
        <h1 className="text-3xl font-bold lora-font text-[#0F2542] mb-4">
          Driving Africa's Data and AI Revolution
        </h1>
        <p className="text-[#0F2542] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          We are a research and development company conducting applied research
          in Data and AI while building the critical infrastructure and tools to
          connect the two. Our goal is to leverage Data to develop AI and other
          tools that are relevant and appropriate for the communities we live in
          while building research capacity and leadership in the continent.
        </p>
        <a
          href="/about-us"
          className="text-md font-semibold text-[#26A37E] tracking-normal hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
