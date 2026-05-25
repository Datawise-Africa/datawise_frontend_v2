import type { ContactUsFormData } from '~/schema/contact-us-schema';
import { contactUsFormResolver } from '~/schema/contact-us-schema';
import { showToast } from '~/utils/toast';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import type { Route } from './+types/contact-us';
import { generateSEOTags } from '~/utils/seo';
import { href, useFetcher } from 'react-router';
import { FadeIn } from '~/components/motion';
import { Form } from '~/components/ui/form';
import { FormTextField, FormTextareaField } from '~/components/form-fields';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { env } from '~/lib/env';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Contact Us',
      description:
        'Get in touch with Datawise Africa for inquiries, support, or to learn more about our data and AI solutions driving innovation across Africa.',
      url: href('/contact-us'),
      keywords:
        'contact Datawise Africa, data science inquiries, AI solutions support, African technology contact, data and AI innovation, research and development Africa',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Datawise Africa',
          email: 'info@datawiseafrica.com',
          telephone: '+254704237879',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Highway Heights, Marcus Garvey Rd, Kilimani',
            addressLocality: 'Nairobi',
            addressCountry: 'KE',
          },
        },
      },
    }),
  ];
}

export async function action({ request }: Route.ActionArgs) {
  try {
    const data = await request.json();
    const response = await fetch(`${env.VITE_API_URL}/users/general-inquiry/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return { success: false, error: 'Submission failed' };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Network error' };
  }
}

const contactInfo = [
  {
    icon: 'tabler:phone',
    label: 'Phone Number',
    value: '+254 704 237 879',
  },
  {
    icon: 'tabler:mail',
    label: 'Email Address',
    value: 'info@datawiseafrica.com',
  },
  {
    icon: 'tabler:map-pin',
    label: 'Office Location',
    value: 'Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya',
  },
];

export default function ContactUs() {
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state === 'submitting';
  const isSuccess = fetcher.data?.success === true;

  const form = useForm<ContactUsFormData>({
    resolver: contactUsFormResolver,
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (fetcher.data?.success) {
      showToast(
        'success',
        'Form Submitted',
        'Your inquiry has been submitted successfully.'
      );
      form.reset();
    } else if (fetcher.data && !fetcher.data.success) {
      showToast(
        'error',
        'Submission Failed',
        'There was an error submitting your form. Please try again later.'
      );
    }
  }, [fetcher.data, form]);

  const onSubmit = (data: ContactUsFormData) => {
    fetcher.submit(data, { method: 'POST', encType: 'application/json' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center md:text-left space-y-6">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                Get in
                <span className="text-primary"> Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg">
                Have any questions, need support, or just want to learn more
                about Datawise Africa? Reach out&mdash;we&rsquo;d love to hear
                from you.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-576/400"
                src="/assets/contactus/contactUs.svg"
                alt="Contact Us"
                width={576}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-section-green dark:bg-section-green-dark">
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Contact Information */}
            <FadeIn direction="left" className="w-full lg:w-1/2">
              <Card className="h-full">
                <CardHeader>
                  <p className="text-lg font-semibold text-primary uppercase tracking-wide mb-1">
                    Get In Touch
                  </p>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <p className="text-muted-foreground">
                    For inquiries, feedback, or assistance, reach us at:
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item) => {
                    return (
                      <div
                        key={item.label}
                        className="bg-muted p-4 rounded-xl flex items-start gap-4"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0">
                          <Icon
                            icon={item.icon}
                            className="h-5 w-5 text-primary"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.label}
                          </p>
                          <p className="text-muted-foreground text-sm mt-0.5">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" className="w-full lg:w-1/2">
              <Card className="h-full">
                <CardHeader>
                  {isSuccess ? (
                    <div className="text-center bg-primary/10 dark:bg-primary/20 p-6 rounded-xl">
                      <CardTitle className="text-2xl text-primary">
                        Thank You!
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">
                        Your message has been sent successfully.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg font-semibold text-primary uppercase tracking-wide mb-1">
                        Reach Out
                      </p>
                      <CardTitle className="text-2xl">
                        Send Us a Message
                      </CardTitle>
                    </>
                  )}
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        name="subject"
                        label="Your Subject"
                        placeholder="Your subject"
                        required
                      />

                      <FormTextareaField
                        control={form.control}
                        name="message"
                        label="Message"
                        placeholder="Input your message here"
                        rows={4}
                        required
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Icon
                              icon="tabler:loader-2"
                              className="animate-spin h-5 w-5 mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Icon icon="tabler:send" className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
