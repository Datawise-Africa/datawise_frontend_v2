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
      title: 'Contact Us | Datawise Africa',
      description:
        'Get in touch with Datawise Africa for inquiries, support, or partnerships in AI, data, and digital infrastructure across Africa.',
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
    label: 'Phone',
    value: '+254 704 237 879',
    href: 'tel:+254704237879',
  },
  {
    icon: 'tabler:mail',
    label: 'Email',
    value: 'info@datawiseafrica.com',
    href: 'mailto:info@datawiseafrica.com',
  },
  {
    icon: 'tabler:map-pin',
    label: 'Office',
    value: 'Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya',
    href: 'https://www.google.com/maps/search/?api=1&query=Highway+Heights+Marcus+Garvey+Rd+Kilimani+Nairobi',
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
    <section className="bg-background lg:flex lg:items-center lg:min-h-[calc(100svh-5rem)]">
      <div className="container mx-auto px-5 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16">
        {/* Intro + contact details */}
        <FadeIn>
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Contact
              </span>
              <h1 className="font-bold text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Have any questions, need support, or just want to learn more
                about Datawise Africa? Reach out&mdash;we&rsquo;d love to hear
                from you.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-start gap-4 py-5"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 shrink-0">
                      <Icon icon={item.icon} className="h-5 w-5 text-primary" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block mt-1 text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="up">
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
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              )}
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormTextField
                      control={form.control}
                      name="first_name"
                      label="First name"
                      placeholder="Jane"
                      autoComplete="given-name"
                      required
                    />
                    <FormTextField
                      control={form.control}
                      name="last_name"
                      label="Last name"
                      placeholder="Doe"
                      autoComplete="family-name"
                      required
                    />
                  </div>

                  <FormTextField
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    type="email"
                    required
                  />

                  <FormTextField
                    control={form.control}
                    name="subject"
                    label="Subject"
                    placeholder="What’s this about?"
                    required
                  />

                  <FormTextareaField
                    control={form.control}
                    name="message"
                    label="Message"
                    placeholder="Tell us a little about your project or question"
                    rows={6}
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
    </section>
  );
}
