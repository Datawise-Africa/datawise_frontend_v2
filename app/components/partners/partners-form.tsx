import type { BecomePartnerFormData } from '~/schema/become-partner-schema';
import { becomePartnerResolver } from '~/schema/become-partner-schema';
import { useSubmitPartnerForm } from '~/features/partners';
import { showToast } from '~/utils/toast';
import { IconLoader2, IconSend } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { Form } from '~/components/ui/form';
import { FormTextField, FormTextareaField } from '~/components/form-fields';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export default function PartnersForm() {
  const submitForm = useSubmitPartnerForm();

  const form = useForm<BecomePartnerFormData>({
    resolver: becomePartnerResolver,
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      job_title: '',
      organization: '',
      partnership_type: '',
      message: '',
    },
  });

  const onSubmit = async (data: BecomePartnerFormData) => {
    try {
      await submitForm.mutateAsync(data);
      showToast(
        'success',
        'Form Submitted',
        'Your partnership interest has been submitted successfully.'
      );
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      showToast(
        'error',
        'Submission Failed',
        'There was an error submitting your form. Please try again later.'
      );
    }
  };

  if (submitForm.isSuccess) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground">
              Your application has been submitted successfully.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-center">
          Join Our Partners Network
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormTextField
                control={form.control}
                name="first_name"
                label="First Name"
                placeholder="First Name"
                required
              />
              <FormTextField
                control={form.control}
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormTextField
                control={form.control}
                name="email"
                label="Email Address"
                placeholder="Email Address"
                type="email"
                required
              />
              <FormTextField
                control={form.control}
                name="phone_number"
                label="Phone Number"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormTextField
                control={form.control}
                name="job_title"
                label="Job Title"
                placeholder="Job Title"
                required
              />
              <FormTextField
                control={form.control}
                name="organization"
                label="Organization"
                placeholder="Organization"
                required
              />
            </div>

            <FormTextField
              control={form.control}
              name="partnership_type"
              label="How would you like to partner with us?"
              placeholder="Partnership Type"
              required
            />

            <FormTextareaField
              control={form.control}
              name="message"
              label="Message"
              placeholder="Write your message here..."
              rows={4}
              required
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-62.5"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <IconLoader2 className="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <IconSend className="h-5 w-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
