import React from "react";
// import { useNavigate } from "react-router-dom"
// import project_hero from "/assets/projects/Projects - Hero.svg"
// import vector1 from "/assets/projects/Vector1.png";
// import vector2 from "/assets/projects/Vector2.png";
// import vector3 from "/assets/projects/Vector3.png";

const Projects = () => {
  // const navigate = useNavigate();

  return (
    <div className="container mx-auto pt-24 md:pt-0 mt-10 md:mt-5 px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="mt-10 lg:mt-0 text-center md:text-left">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            Driving Change Through
            <span className="text-[#26A37E]"> Data Research</span>
          </h1>
          <p className="text-gray-800 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
            Our research initiatives focus on solving Africa's most pressing
            challenges, from climate resilience to economic development.

          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#26A37E] text-white font-medium py-2 px-4 rounded-md hover:bg-[#1e8c68] transition duration-300"
              // onClick={navigate("/partners")}
            >
              Collaborate With Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src="/assets/projects/Projects - Hero.svg"
            alt="Project Hero"
            className="object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="text-center mt-12">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl">
          Focus Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              img: "/assets/projects/Vector1.png",
              title: "AI for Development",
              desc: "Leveraging AI to address social and economic challenges",
              bg: "bg-sky-50 border-sky-200",
            },
            {
              img: "/assets/projects/Vector2.png",
              title: "Data Infrastructure",
              desc: "Building sustainable and affordable compute solutions",
              bg: "bg-pink-50 border-pink-200",

            },
            {
              img: "/assets/projects/Vector3.png",
              title: "Ethical Data Practices",
              desc: "Ensuring data collection and usage are transparent and ethical",
              bg: "bg-green-50 border-green-200",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 border rounded-md shadow-sm ${item.bg}`}
            >
              <div className="flex justify-center">
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mt-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="text-center mt-12">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              img: "/assets/projects/Vector2.png",
              title: "Datalab",
              desc: "Datalab is a platform that maintains transparency in data use while ensuring creator sovereignty.It enable users discover datasets, upload datasets, and collaborate with others.",
            },
            {
              img: "/assets/projects/Vector2.png",
              title: "Eduken",
              desc: "Eduken catalogs Kenyan institutions of higher learning, detailing their names, location and courses offered. Serves as a valuable resource for students, researchers, policymakers and organizations seeking comprehensive information on Kenya's higher learning education landscape.",
            },
            {
              img: "/assets/projects/Vector2.png",
              title: "Afyaken",
              desc: "AfyaKen is an open-access dataset on Kenyan healthcare facilities, providing key details and empowering policymakers, researchers, and innovators with data-driven insights to improve healthcare access and efficiency.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 border rounded-md shadow-sm bg-white"
            >
              <div className="flex justify-center">
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mt-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Projects;
