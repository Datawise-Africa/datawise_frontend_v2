import { useApi } from '@/hooks/use-api';
import { becomePartnerResolver } from '@/schema/become-partner-schema';
import { showToast } from '@/utils/toast';
import { Loader, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function PartnersForm() {
  const api = useApi();
  const [hasFormBeenSubmitted, setHasFormBeenSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm({
    resolver: becomePartnerResolver,
  });

  const submitForm = handleSubmit(async (data) => {
    try {
      await api.post('/users/partner-interest/', data);
      // Here you can handle the form submission, e.g., send data to an API
      setHasFormBeenSubmitted(true);
      showToast(
        'success',
        'Form Submitted',
        'Your partnership interest has been submitted successfully.'
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
  return !hasFormBeenSubmitted ? (
    <section className="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 shadow-lg mt-14  rounded-lg">
      <h2 className="text-2xl md:text-3xl lora-font font-bold text-center text-[#0F2542] mb-8">
        Join Our Partners Network
      </h2>

      <form className="space-y-6 mt-4" onSubmit={submitForm}>
        {/* Row 1 - First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mt-4 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register('first_name')}
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mt-4 mb-1">
              Last Name
            </label>
            <input
              type="text"
              {...register('last_name')}
              placeholder="Last Name"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2 - Email Address & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder="Email Address"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              {...register('phone_number')}
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone_number.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3 - Job Title & Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Job Title"
              {...register('job_title')}
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.job_title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.job_title.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">
              Organization
            </label>
            <input
              type="text"
              placeholder="Organization"
              {...register('organization')}
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
            {errors.organization && (
              <p className="text-red-500 text-sm mt-1">
                {errors.organization.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 4 - Partnership Type (Full Width) */}
        <div>
          <label className="block text-[#0F2542] font-medium mb-1">
            How would you like to partner with us?
          </label>
          <input
            type="text"
            placeholder="Partnership Type"
            {...register('partnership_type')}
            className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
          />
          {errors.partnership_type && (
            <p className="text-red-500 text-sm mt-1">
              {errors.partnership_type.message}
            </p>
          )}
        </div>

        {/* Row 5 - Message (Full Width) */}
        <div>
          <label className="block text-[#0F2542] font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            {...register('message')}
            className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full min-h-[120px] rounded-md focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Submit Application"
            className="w-full md:w-[250px] h-[50px] px-6 py-3 flex items-center justify-center gap-2 bg-[#26A37E] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#1e8b66] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                <span className="whitespace-nowrap">Submit Application</span>
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  ) : (
    <section className="py-12 border shadow-md rounded-lg bg-white mt-14">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg">
          Your application has been submitted successfully.
        </p>
      </div>
    </section>
  );
}
