import React from "react";
import image1 from "/assets/amico.png";
import image2 from "/assets/AI.jpeg"; 
import image3 from "/assets/infrastructure.jpg";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto w-full px-4 py-6 text-[#0F2542]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
        We conduct research in several thematic areas and emerging technologies.
      </p>

      {/* Section Styling */}
      <div className="space-y-4 mt-4">
        {/* First Section - Data */}
        <div className="flex flex-col lg:flex-row items-center gap-16   bg-[#FDF9ED] p-3">
          <img
            src={image1}
            alt="Data"
            className="flex-1 w-full h-auto object-cover rounded-md shadow"
          />
          <div className="flex-1 text-center lg:text-left px-2">
            <h4 className="text-xl text-[#DD8823] font-semiboldmb-2 ">Data</h4>
            <p className="text-base mt-1">
            We collect, clean, and structure data that reflects African realities—languages, farms, clinics, courts, classrooms. Our mission is simple: to make African data accessible, ethical, and useful for the communities that need it most. We’re building Africa’s largest ethical dataset repository and helping clients create custom datasets that power real-world solutions across sectors like agriculture, education, justice, and healthcare.            </p>
          </div>
        </div>

        {/* Second Section - AI */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 bg-[#EDFCFE] p-3">
          <img
            src={image2}
            alt="Artificial Intelligence"
            className="w-1/2 h-auto object-cover  "
          />
          <div className="flex-1 text-center lg:text-left px-2">
            <h4 className="text-xl text-[#129FC8] font-semibold mb-2 font-lora">Artificial Intelligence</h4>
            <p className="text-base mt-1">
              We create AI models designed for African communities. Think recommender systems, computer vision, and language models that solve specific, local problems.
            </p>
          </div>
        </div>

        {/* Third Section - Infrastructure */}
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-[#FDF2F7] p-3">
          <img
            src={image3}
            alt="Infrastructure"
            className="w-1/2 h-auto object-cover  "
            // className="flex-1 w-full h-auto object-cover rounded-md shadow"
          />
          <div className="flex-1 text-center lg:text-left px-2">
            <h4 className="text-xl text-[#EE3481] font-semibold mb-2 ">Infrastructure</h4>
            <p className="text-base mt-1">
              We’re researching sustainable and affordable compute systems. Partnering with hardware vendors, we prototype the infrastructure Africa needs to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
