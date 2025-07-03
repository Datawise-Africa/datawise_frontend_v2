import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-0 px-6 py-12 space-y-12">
      
      {/* Hero Section */}
      <section className="mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="lora-font font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            We're Here to
            <span className="text-[#26A37E]"> Help!</span>
          </h1>
          <p className="sora-font text-gray-700 mt-6 text-lg sm:text-xl leading-relaxed">
            Have any questions, need support, or just want to learn more about Datawise Africa?
            Reach out—we'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            src="/assets/contactus/contactUs.svg"
            alt="Contact Us"
          />
        </div>
      </section>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-[#F7FDFA] px-6 py-12 rounded-lg shadow-sm">
        
        {/* Contact Information */}
        <div className="bg-[#D1F2E5] p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
          <p className="text-lg text-gray-600 mt-2">
            For inquiries, feedback, or assistance, reach us at:
          </p>
          
          <div className="mt-6 space-y-4">
            {/* Phone Number */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📞</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Phone Number:</p>
                <p className="text-gray-700 text-sm sm:text-base">+254 710 891 741</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📧</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Email Address:</p>
                <p className="text-gray-700 text-sm sm:text-base">info@datawiseafrica.com</p>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📍</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">Office Location:</p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="text-lg text-gray-900 font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#26A37E]"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-lg text-gray-900 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#26A37E]"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#26A37E]"
            />
          </div>

          {/* Subject */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">Your Subject</label>
            <input
              type="text"
              placeholder="Your subject"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#26A37E]"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">Message</label>
            <textarea
              placeholder="Input your message here"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-[#26A37E]"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-[#26A37E] text-white text-lg font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300">
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
