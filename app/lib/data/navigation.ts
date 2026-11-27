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
        {
          eyebrow: 'New programme',
          title: 'Student Associate Programme',
          description:
            'Nine months of hands-on experience and mentorship for students and recent graduates.',
          url: '/student-associate-programme',
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
              icon: 'tabler:database',
              description: 'Open dataset discovery and collaboration.',
            },
            {
              title: 'SheriaLab',
              url: '/products#sherialab',
              icon: 'tabler:scale',
              description: 'Kenyan legal research with an AI assistant.',
            },
            {
              title: 'African Stack',
              url: '/products#african-stack',
              icon: 'tabler:stack-2',
              description: "Insights on Africa's data, AI & infrastructure.",
            },
          ],
        },
        {
          heading: 'Datasets',
          items: [
            {
              title: 'Eduken',
              url: '/products#eduken',
              icon: 'tabler:school',
              description: 'Higher learning institutions and programmes.',
            },
            {
              title: 'Afyaken',
              url: '/products#afyaken',
              icon: 'tabler:building-hospital',
              description: 'Level 4 and 5 hospitals across Kenya.',
            },
            {
              title: 'Sheria Corpus',
              url: '/products#sheria-corpus',
              icon: 'tabler:file-text',
              description: 'Annotated landmark rulings from Kenyan courts.',
            },
          ],
          seeAll: {
            title: 'Browse on Datalab',
            url: 'https://datalabafrica.com',
            external: true,
          },
        },
        {
          heading: 'Publications',
          items: [
            {
              title: "Africa's Data Landscape",
              url: '/products#africa-data-landscape',
              icon: 'tabler:chart-pie',
              description: 'Dataset availability and AI readiness in Africa.',
            },
            {
              title: 'AI Readiness Gap Analysis',
              url: '/products#ai-readiness-frameworks-gap-analysis',
              icon: 'tabler:zoom-scan',
              description: 'Six AI-ready data frameworks, African lens.',
            },
          ],
          seeAll: {
            title: 'See all reports',
            url: 'https://africadatalab.org/research/reports',
            external: true,
          },
        },
      ],
      featured: [
        {
          eyebrow: 'New report',
          title: "Africa's Data Landscape: A Foundation for AI Readiness",
          description:
            'Why data availability alone is insufficient for AI readiness across the continent.',
          url: 'https://africadatalab.org/research/reports',
          external: true,
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
