const partners = [
  { name: 'Lacuna Fund', logo: '/assets/homepage/lacuna-fund-logo.png' },
  { name: 'e', logo: '/assets/homepage/eduonix-logo.png' },
  { name: 'Kaggle', logo: '/assets/homepage/Kaggle-logo.png' },
  { name: 'Kodak', logo: '/assets/homepage/kodak-logo.png' },
];
export default function HomePartnersSection() {
  return (
    <div className="w-full overflow-hidden">
      {/* Partners section */}
      <div
        className="container mx-auto w-full px-4 py-10 sm:py-14 text-[#0F2542] min-h-[300px] sm:min-h-[400px]"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        <h3 className="text-[#26A37E] text-sm font-medium tracking-widest uppercase text-center">
          Our Partners
        </h3>
        <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 text-center mt-2">
          Collaborating for a Smarter Africa
        </h1>
        <div className="justify-center items-center grid grid-cols-2 place-items-center md:grid-cols-4 sm:gap-12 mt-8">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo || '/placeholder.svg'}
              alt={partner.name}
              className="h-auto max-w-[150px] sm:max-w-[180px] object-contain"
            />
          ))}
        </div>
      </div>

      {/* Partner with us section */}
      <div
        className="container mx-auto w-full px-4 py-10 sm:py-14 text-[#0F2542] min-h-[400px] sm:min-h-[500px]"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        <div className="bg-[#26A37E] text-white rounded-xl p-10 sm:p-14 flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-20">
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold lora-font">
              Partner With Us
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              Looking to drive impact with data and AI in Africa? We're open to
              collaborations with researchers, policymakers, and businesses
              ready to shape the future together.
            </p>
            <div className="mt-6">
              <a
                href="/partners"
                className="text-base font-semibold tracking-wide text-white hover:underline flex items-center"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/assets/aboutus/ctapartner.svg"
              alt="Collaboration"
              className="w-80 h-80 sm:w-64 sm:h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
