import type { NavigationItem } from '~/lib/types/navigation';

export const navigation: NavigationItem[] = [
  {
    title: 'Home',
    url: '/',
    dropdownItems: [],
  },
  {
    title: 'Services',
    url: '/services',
    dropdownItems: [],
    megaMenu: {
      groups: [
        {
          heading: 'Data & Research',
          items: [
            { title: 'Data Infrastructure', url: '/services#data' },
            { title: 'Strategic Intelligence', url: '/services#data' },
            { title: 'Applied Research', url: '/services#data' },
          ],
        },
        {
          heading: 'Engineering',
          items: [
            { title: 'Custom Applications', url: '/services#engineering' },
            { title: 'API Development', url: '/services#engineering' },
            { title: 'Project Management', url: '/services#engineering' },
          ],
        },
        {
          heading: 'AI Services',
          items: [
            { title: 'AI Engineering', url: '/services#ai' },
            { title: 'Generative AI', url: '/services#ai' },
            { title: 'Natural Language Processing', url: '/services#ai' },
          ],
        },
        {
          heading: 'Infrastructure',
          items: [
            { title: 'Cloud Architecture', url: '/services#infrastructure' },
            {
              title: 'Compute Infrastructure',
              url: '/services#infrastructure',
            },
            { title: 'DevOps & CI/CD', url: '/services#infrastructure' },
          ],
        },
      ],
      featured: [
        {
          title: 'End-to-End Solutions',
          description:
            'From data collection and research to AI deployment and infrastructure.',
          url: '/services',
        },
      ],
    },
  },
  {
    title: 'Products',
    url: '/products',
    dropdownItems: [],
    megaMenu: {
      groups: [
        {
          heading: 'Platforms',
          items: [
            {
              title: 'Datalab',
              url: '/products#datalab',
              description: 'Open dataset discovery and collaboration.',
            },
            {
              title: 'African Stack',
              url: '/products#african-stack',
              description:
                'The Nerve Center of Africa’s Data, AI & Infrastructure Evolution',
            },
            {
              title: 'Sheria AI',
              url: '/products#sheria-ai',
              description:
                'Sheria AI is a Kenyan legal platform providing court rulings, legal insights, and an AI chatbot with advanced search and filtering.',
            },
          ],
        },
        {
          heading: 'Datasets',
          items: [
            {
              title: 'Eduken',
              url: '/products#eduken',
              description:
                'Education dataset capturing learning outcomes and access across African contexts.',
            },
            {
              title: 'Afyaken',
              url: '/products#afyaken',
              description:
                'Health dataset surfacing care delivery, outcomes, and public health signals.',
            },
            {
              title: 'Sheria Corpus',
              url: '/products#sheria-corpus',
              description:
                'Legal corpus of Kenyan court rulings, statutes, and regulatory texts.',
            },
          ],
        },
      ],
      featured: [
        {
          title: 'Data for Africa',
          description:
            'Open-access datasets and platforms for researchers, policymakers, and innovators.',
          url: '/products',
        },
      ],
    },
  },
  {
    title: 'About Us',
    url: '/about-us',
    dropdownItems: [],
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
    dropdownItems: [],
  },
];
