export const featuredProjects: {
  slug: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
}[] = [
  {
    slug: 'datalab',
    icon: 'tabler:database',
    title: 'Datalab',
    description:
      'DataLab is a platform for hosting, managing, and publishing data products. It enables creators to create and upload datasets, while also supporting richer data products such as dashboards and reports that deliver actionable insights. Designed for accessibility and usability, DataLab helps users discover, share, and turn data into meaningful impact.',
    link: 'https://datalabafrica.com',
  },
  {
    slug: 'sheria-ai',
    icon: 'tabler:scale',
    title: 'Sheria AI',
    description:
      'Sheria AI is a Kenyan legal intelligence platform designed for lawyers, researchers, and anyone navigating the legal system. It combines an AI-powered chatbot with advanced search and filtering to help users quickly find relevant court rulings, understand legal principles, and generate practical legal insights. ',
    link: 'https://sheria.africa',
  },
  {
    slug: 'african-stack',
    icon: 'tabler:stack-2',
    title: 'African Stack',
    description:
      'The African Stack covers the ideas, research, and technologies shaping the continent’s future. Through in-depth articles, podcast conversations, and monthly newsletter updates, we connect Africa’s next wave of change makers with the insights that matter.',
    link: 'https://theafricanstack.com',
  },
];

export const datasets: {
  slug: string;
  icon: string;
  category: string;
  title: string;
  description: string;
}[] = [
  {
    slug: 'eduken',
    icon: 'tabler:school',
    category: 'Education',
    title: 'Eduken',
    description:
      'A dataset of institutions of higher learning, course programmes, and facilities that support academic growth in Kenya. Built to support education research, planning, and policy.',
  },
  {
    slug: 'afyaken',
    icon: 'tabler:building-hospital',
    category: 'Health',
    title: 'Afyaken',
    description:
      'A comprehensive health facilities dataset covering Level 4 and 5 hospitals across Kenya, mapping hospital distribution, ownership, and capacity across the country.',
  },
  {
    slug: 'sheria-corpus',
    icon: 'tabler:scale',
    category: 'Legal',
    title: 'Sheria Corpus',
    description:
      'A curated legal dataset of landmark rulings from Kenya’s judiciary. Structured and annotated to enhance transparency, accessibility, and innovation in legal research and AI.',
  },
];

export const publications: {
  slug: string;
  title: string;
  abstract: string;
  link?: string;
}[] = [
  {
    slug: 'africa-data-landscape',
    title: "Africa's Data Landscape: A Foundation for AI Readiness",
    abstract:
      "Africa's AI ambitions depend on data, not just computing power and skills. This report examines dataset availability across the continent—analyzing geographic coverage, sector trends, accessibility, and licensing standards. While continental data is growing, significant gaps persist in underrepresented countries, local languages, and metadata completeness. The findings highlight why data availability alone is insufficient for true AI readiness.",
    link: 'https://africadatalab.org/research/reports',
  },
  {
    slug: 'ai-readiness-frameworks-gap-analysis',
    title: 'Gap Analysis Report of Existing AI Readiness Frameworks',
    abstract:
      "Global AI data frameworks often fail to reflect the practical realities of African data ecosystems. This report evaluates six leading assessment models—Bridge2AI, ABC of Data, METRIC, the ODI AI-Ready Data Framework, IBM's Data Readiness Report, and AIDRIN 2.0—revealing systemic biases tailored to Western research settings. It identifies five core structural gaps in areas such as data sovereignty, cultural relevance, and empirical usability, emphasizing context-first framework design.",
    link: 'https://africadatalab.org/research/reports',
  },
];
