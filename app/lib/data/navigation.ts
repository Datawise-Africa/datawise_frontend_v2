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
              url: '/datalab',
              description: 'Open dataset discovery and collaboration.',
            },
          ],
        },
        {
          heading: 'Datasets',
          items: [
            {
              title: 'Sheria AI',
              url: '/products#sheria-ai',
              description:
                'Sheria AI is a Kenyan legal platform providing court rulings, legal insights, and an AI chatbot with advanced search and filtering.',
            },
            {
              title: 'African Stack',
              url: '/products#african-stack',
              description:
                'The Nerve Center of Africa’s Data, AI & Infrastructure Evolution',
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
