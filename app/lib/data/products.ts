export const featuredProjects: {
  slug: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
  accentClass: string;
  accentBgClass: string;
}[] = [
  {
    slug: 'datalab',
    icon: 'tabler:database',
    title: 'Datalab',
    description:
      'DataLab is a platform for hosting, managing, and publishing data products. It enables creators to create and upload datasets, while also supporting richer data products such as dashboards and reports that deliver actionable insights. Designed for accessibility and usability, DataLab helps users discover, share, and turn data into meaningful impact.',
    link: 'https://datalabafrica.com',
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10 dark:bg-primary/20',
  },
  {
    slug: 'sheria-ai',
    icon: 'tabler:school',
    title: 'Sheria AI',
    description:
      'Sheria AI is a Kenyan legal intelligence platform designed for lawyers, researchers, and anyone navigating the legal system. It combines an AI-powered chatbot with advanced search and filtering to help users quickly find relevant court rulings, understand legal principles, and generate practical legal insights. ',
    accentClass: 'text-accent-blue',
    accentBgClass: 'bg-accent-blue/10 dark:bg-accent-blue/20',
    link: 'https://sheria.africa',
  },
  {
    slug: 'african-stack',
    icon: 'tabler:heartbeat',
    title: 'African Stack',
    description:
      'The African Stack covers the ideas, research, and technologies shaping the continent’s future. Through in-depth articles, podcast conversations, and monthly newsletter updates, we connect Africa’s next wave of change makers with the insights that matter.',
    accentClass: 'text-accent-pink',
    accentBgClass: 'bg-accent-pink/10 dark:bg-accent-pink/20',
    link: 'https://theafricanstack.com',
  },
];

export const datasets: {
  slug: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  headerBgClass: string;
}[] = [
  {
    slug: 'eduken',
    icon: 'tabler:school',
    category: 'Education',
    title: 'Eduken',
    description:
      'A dataset of institutions of higher learning, course programmes, and facilities that support academic growth in Kenya. Built to support education research, planning, and policy.',
    headerBgClass: 'bg-teal-600 dark:bg-teal-700',
  },
  {
    slug: 'afyaken',
    icon: 'tabler:building-hospital',
    category: 'Health',
    title: 'Afyaken',
    description:
      'A comprehensive health facilities dataset covering Level 4 and 5 hospitals across Kenya, mapping hospital distribution, ownership, and capacity across the country.',
    headerBgClass: 'bg-emerald-700 dark:bg-emerald-800',
  },
  {
    slug: 'sheria-corpus',
    icon: 'tabler:scale',
    category: 'Legal',
    title: 'Sheria Corpus',
    description:
      'A curated legal dataset of landmark rulings from Kenya’s judiciary. Structured and annotated to enhance transparency, accessibility, and innovation in legal research and AI.',
    headerBgClass: 'bg-yellow-700 dark:bg-yellow-800',
  },
];

export const publications: {
  slug: string;
  icon: string;
  title: string;
  abstract: string[];
  link?: string;
}[] = [
  {
    slug: 'data-availability-report',
    icon: 'tabler:chart-pie',
    title: 'Data Availability Report',
    abstract: [
      "Artificial intelligence is becoming central to Africa's digital transformation, but its potential depends on more than computing power and skills — it rests on data that is diverse, representative, accessible, well-documented, and reusable. This report assesses the state of that foundation across the continent, examining observable patterns in available datasets rather than offering a complete census, and analysing their geographic, sectoral, modality, linguistic, access, and licensing characteristics.",
      'The findings reveal breadth without balance: continental data is abundant, yet country-level data concentrates in a few nations and coverage skews toward Economy & Finance, Health, and Education. Access and licensing are relatively strong, with most datasets multimodal and openly licensed, though some lack licence information and metadata gaps persist. The report concludes that availability is necessary but insufficient for AI readiness, urging stronger discovery infrastructure, investment in underrepresented countries, sectors, and African languages, and clearer metadata and licensing standards.',
    ],
  },
  {
    slug: 'gap-analysis-report',
    icon: 'tabler:zoom-scan',
    title: 'Gap Analysis Report',
    abstract: [
      "Artificial intelligence development across Africa is constrained not only by data scarcity but by the absence of reliable methods for verifying whether data is genuinely fit for AI use. This report presents a critical gap analysis of six major AI-ready data assessment frameworks — Bridge2AI, ABC of Data, METRIC, the ODI AI-Ready Data Framework, IBM's Data Readiness Report, and AIDRIN 2.0 — evaluated against the realities of African AI data ecosystems. The analysis finds that no existing framework is adequate for the African context, and that this inadequacy is structural rather than incidental, reflecting assumptions built for Western research environments.",
      'Five structural gaps are identified: absent empirical AI-learnability testing, a lack of contextual and cultural relevance metrics, inadequate treatment of data sovereignty and post-colonial ethics, missing infrastructure and usability readiness assessment, and no valid method for cross-modality composite scoring. These gaps carry direct implications for dataset curators, researchers, funders, and framework developers, who must treat African contexts as a primary design consideration rather than an edge case.',
    ],
  },
];
