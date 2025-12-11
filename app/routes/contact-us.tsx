import { useApi } from '@/hooks/use-api';
import { contactUsFormResolver } from '@/schema/contact-us-schema';
import { showToast } from '@/utils/toast';
import { Loader, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { Route } from './+types/contact-us';
import { generateSEOTags } from '@/utils/seo';
import { href } from 'react-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Contact Us',
      description:
        'Get in touch with Datawise Africa for inquiries, support, or to learn more about our data and AI solutions driving innovation across Africa.',
      url: href('/contact-us'),
      keywords:
        'contact Datawise Africa, data science inquiries, AI solutions support, African technology contact, data and AI innovation, research and development Africa',
    }),
  ];
}

export default function ContactUs() {
  const api = useApi();
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm({
    resolver: contactUsFormResolver,
  });

  const submitForm = handleSubmit(async (data) => {
    setHasFormBeenSubmitted(false);
    try {
      await api.post('/users/general-inquiry/', data);
      // Here you can handle the form submission, e.g., send data to an API
      setHasFormBeenSubmitted(true);
      showToast(
        'success',
        'Form Submitted',
        'Your inquiry has been submitted successfully.'
      );
      // Optionally, reset the form or redirect the user
      resetForm(); // Uncomment if you want to reset the form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast(
        'error',
        'Submission Failed',
        'There was an error submitting your form. Please try again later.'
      );
    }
  });

  return (
    <div className="container mx-auto pt-24 md:pt-0 lg:mt-0 px-6 py-12 space-y-12">
      {/* Hero Section */}
      <section className="mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="lora-font font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            We're Here to
            <span className="text-[#26A37E]"> Help!</span>
          </h1>
          <p className="sora-font text-gray-700 mt-6 text-lg sm:text-xl leading-relaxed">
            Have any questions, need support, or just want to learn more about
            Datawise Africa? Reach out—we'd love to hear from you.
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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 bg-[#F7FDFA] px-6 py-12 rounded-lg shadow-sm">
        {/* Contact Information */}
        <div className="bg-[#D1F2E5] p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            For inquiries, feedback, or assistance, reach us at:
          </p>

          <div className="mt-6 space-y-4">
            {/* Phone Number */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📞</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">
                  Phone Number:
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  +254 704 237 879
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📧</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">
                  Email Address:
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  info@datawiseafrica.com
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white p-4 rounded shadow flex items-center">
              <span className="text-green-600 text-2xl">📍</span>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900">
                  Office Location:
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={submitForm}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-1/2"
        >
          {hasFormBeenSubmitted ? (
            <div className="text-center bg-green-50 p-6 rounded-lg shadow  mb-2">
              <h2 className="text-2xl font-semibold text-green-600">
                Thank You!
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h2>
            </>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="text-lg text-gray-900 font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                {...register('first_name')}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:ring-[#26A37E]"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="text-lg text-gray-900 font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                {...register('last_name')}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:ring-[#26A37E]"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              {...register('email')}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:ring-[#26A37E]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">
              Your Subject
            </label>
            <input
              type="text"
              placeholder="Your subject"
              {...register('subject')}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:ring-[#26A37E]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="text-lg text-gray-900 font-medium">Message</label>
            <textarea
              placeholder="Input your message here"
              {...register('message')}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:ring-[#26A37E]"
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Send Message"
            className="mt-6 w-full flex items-center justify-center bg-[#26A37E] text-white text-lg font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
