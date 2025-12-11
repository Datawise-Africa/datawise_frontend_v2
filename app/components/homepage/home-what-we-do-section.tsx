
const whatWeDoCards = [
  {
    title: 'Data',
    description:
      'We collect, clean, and structure data that reflects African realities—languages, farms, clinics, courts, classrooms. Our mission is simple: to make African data accessible, ethical, and useful for the communities that need it most. We’re building Africa’s largest ethical dataset repository and helping clients create custom datasets that power real-world solutions across sectors like agriculture, education, justice, and healthcare.',
    image: '/assets/amico.png',
    bgColor: '#FDF9ED',
    textColor: '#DD8823',
  },
  {
    title: 'Artificial Intelligence',
    description:
      ' We create AI models designed for African communities. Think recommender systems, computer vision, and language models that solve specific, local problems.',
    image: '/assets/AI.jpeg',
    bgColor: '#EDFCFE',
    textColor: '#129FC8',
  },
  {
    title: 'Infrastructure',
    description:
      'We’re researching sustainable and affordable compute systems. Partnering with hardware vendors, we prototype the infrastructure Africa needs to thrive.',
    image: '/assets/infrastructure.jpg',
    bgColor: '#FDF2F7',
    textColor: '#EE3481',
  },
];
export default function HomeWhatWeDoSection() {
  return (
    <div className="container mx-auto font-sora w-full px-4 py-10 text-[#0F2542]">
      <div className="flex flex-col items-center mb-8 gap-6">
        {/* Small Heading */}
        <h3 className="text-lg font-semibold text-[#26A37E] text-center uppercase tracking-wide mb-2 ">
          WHAT WE DO
        </h3>

        {/* Big Heading */}
        <h2 className="text-3xl font-lora  font-bold text-center mt-1 mb-2 ">
          Solving Real Problems With Data and AI
        </h2>

        {/* Description */}
        <p className="text-lg text-center max-w-3xl mx-auto mt-1">
          We conduct research in several thematic areas and emerging
          technologies.
        </p>
      </div>
      {/* Section Styling */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {whatWeDoCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-16 rounded border-opacity-25"
            style={{
              backgroundColor: card.bgColor,
              border: `0.8px solid ${card.textColor}`,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-1/2 object-cover rounded-md"
            />
            <div className="flex-1 text-center lg:text-left p-4 md:p-6">
              <h4
                className="text-xl font-semibold mb-2"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h4>
              <p className="text-base mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
