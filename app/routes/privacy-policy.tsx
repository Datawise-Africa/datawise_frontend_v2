import { generateSEOTags } from '~/utils/seo';
import type { Route } from './+types/privacy-policy';
import { href } from 'react-router';
import { FadeIn, PageTransition } from '~/components/motion';

export function meta(_args: Route.MetaArgs) {
  return [
    ...generateSEOTags({
      title: 'Datawise Africa - Privacy Policy',
      description:
        'Read the Datawise Africa Privacy Policy to understand how we collect, use, and protect your personal information.',
      url: href('/privacy-policy'),
    }),
  ];
}

const sections = [
  {
    title: '1. Acceptance of This Privacy Policy',
    content: [
      'By clicking "accept" or "agree" during registration or by continuing to use the Services, you acknowledge that you have been presented with and agree to the terms of this Privacy Policy. This Privacy Policy explains how we handle personal information specifically, not general data. We may use aggregated, anonymized data derived from your personal information (prior to deletion) in ways that do not personally identify you.',
      'We will request your consent before using your information for purposes not described in this Privacy Policy. If you choose not to share certain personal information, some features or functionalities of the Services may not be accessible.',
    ],
  },
  {
    title: '2. Information We Collect',
    subsections: [
      {
        subtitle: 'a. Information You Provide',
        content:
          'When you create a Datawise account or use our Services, you may provide us with personal information such as your name, email address, phone number, and password. You may also provide additional data such as institutional affiliation, or content (e.g., datasets). Certain personal data is necessary for entering into our Terms of Use and using specific Services. Without this information, we may be unable to fulfill our contractual obligations.',
      },
      {
        subtitle: 'b. Information from Your Use of Services',
        content:
          'We collect data as you interact with our Services. This includes device and browser details, IP address, usage patterns (such as dataset views/downloads and page visits), cookies and local storage data, and communication history. This information is collected using tools like cookies, pixel tags, local storage, and server logs.',
      },
    ],
  },
  {
    title: '3. Why We Collect Your Information',
    content: [
      'We use your information to improve the Services, personalize your experience, and fulfill our contractual obligations. We do not use personal data for unrelated purposes without your consent.',
    ],
  },
  {
    title: '4. Managing and Deleting Your Information',
    content: [
      "You can access, update, or delete your personal information through your account settings. You may also delete content you've posted or request complete account deletion. Please note that some data may be retained for legal or operational reasons.",
      'Datawise uses encrypted backups and secure deletion protocols. Full deletion from all systems may take up to 60 days.',
    ],
  },
  {
    title: '5. Sharing Your Information',
    subsections: [
      {
        subtitle: 'a. When You Choose to Share',
        content:
          'If you make data public or interact in shared spaces (e.g. datasets), that information is visible to others. Use caution when choosing what to share.',
      },
      {
        subtitle: 'b. When Datawise Shares Your Information',
        content:
          'We do not sell your personal data. However, we may share information with:',
        list: [
          'Service providers performing services on our behalf',
          'Competition hosts, where applicable, per the competition rules',
          'Legal authorities, when required by law',
          'Third parties, with your explicit consent',
          'In case of business changes (e.g., merger, acquisition), we will inform you and honor the commitments made in this Privacy Policy',
        ],
      },
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'We employ physical, technical, and administrative safeguards to protect your information. If we experience a data breach, we will notify you as required by law.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    content: [
      'This Privacy Policy may be updated periodically. We will notify users of significant changes via email or through the Services. Continued use of the Services constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-3">
                Legal
              </h3>
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                Privacy Policy
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Welcome, and thank you for your interest in{' '}
                <strong className="text-foreground">Datawise Africa</strong> (
                {'\u201C'}Datawise{'\u201D'}, {'\u201C'}we{'\u201D'}, or{' '}
                {'\u201C'}us{'\u201D'}), and our website(s), products, services,
                and applications (collectively, the {'\u201C'}Services
                {'\u201D'}). This Privacy Policy is meant to help you understand
                what information we collect, why we collect it, and how you can
                update, manage, export, and delete your information.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Effective Date: May 9, 2025 &middot; Questions?{' '}
                <a
                  href="mailto:info@datawiseafrica.com"
                  className="text-primary hover:underline"
                >
                  info@datawiseafrica.com
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-section-green dark:bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section) => (
              <FadeIn key={section.title} direction="up">
                <div className="bg-background dark:bg-background/50 rounded-2xl border border-border p-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>

                  {section.content?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground text-sm leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.subsections?.map((sub) => (
                    <div key={sub.subtitle} className="mt-6 first:mt-0">
                      <h3 className="text-base font-semibold text-primary mb-2">
                        {sub.subtitle}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {sub.content}
                      </p>
                      {sub.list && (
                        <ul className="mt-3 space-y-1.5">
                          {sub.list.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-muted-foreground text-sm"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}

            {/* Contact Section */}
            <FadeIn direction="up">
              <div className="bg-primary text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">8. Contact Us</h2>
                <p className="text-white/80 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy,
                  contact us at{' '}
                  <a
                    href="mailto:info@datawiseafrica.com"
                    className="text-white underline hover:no-underline font-semibold"
                  >
                    info@datawiseafrica.com
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
