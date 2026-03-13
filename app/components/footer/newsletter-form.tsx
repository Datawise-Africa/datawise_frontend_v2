import { useForm } from 'react-hook-form';
import { IconArrowRight } from '@tabler/icons-react';
import type { NewsletterFormData } from '~/schema/newsletter-schema';
import { newsletterFormResolver } from '~/schema/newsletter-schema';
import { Form } from '~/components/ui/form';
import { FormTextField } from '~/components/form-fields';
import { Button } from '~/components/ui/button';

export default function NewsletterForm() {
  const form = useForm<NewsletterFormData>({
    resolver: newsletterFormResolver,
    defaultValues: {
      full_name: '',
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    // TODO: wire up newsletter subscription API
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <FormTextField
          control={form.control}
          name="full_name"
          label="Full Name"
          placeholder="Enter your full name"
        />
        <FormTextField
          control={form.control}
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Subscribe to Newsletter
          <IconArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}
