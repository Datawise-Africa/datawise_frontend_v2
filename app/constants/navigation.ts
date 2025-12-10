export type NavigationItem = {
  id: string;
  title: string;
  url: string;
  dropdownItems: { title: string; url: string }[];
};
export const navigation: NavigationItem[] = [
  {
    id: '0',
    title: 'Home',
    url: '/',
    dropdownItems: [],
  },
  {
    id: '1',
    title: 'Projects',
    url: '/projects',
    dropdownItems: [],
  },
  {
    id: '2',
    title: 'Tools',
    url: '/tools',
    dropdownItems: [
      { title: 'JOURN-GPT', url: '/tools/GPT' },
      { title: 'SHERIA-AI', url: '/tools/sheria-ai' },
    ],
  },
  {
    id: '3',
    title: 'Datalab',
    url: '/datalab',
    dropdownItems: [],
  },
  {
    id: '4',
    title: 'About Us',
    url: '/about-us',
    dropdownItems: [],
  },
  {
    id: '5',
    title: 'Contact Us',
    url: '/contact-us',
    dropdownItems: [],
  },
];

export const socials = [
  {
    id: '0',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/datawise-africa',
  },
  {
    id: '1',
    name: 'Github',
    url: 'https://github.com/Datawise-Africa',
  },
  {
    id: '2',
    name: 'X',
    url: 'https://x.com/datawise_AFR',
  },
];

export const teamMembers = [
  {
    id: '0',
    name: 'Dr. Albert Kahira',
    title: 'Director',
    image: '/assets/teamMembers/albert-kahira.jpeg',
    description:
      'Albert Kahira is a research scientist at Julich Supercomputing Center(JSC) where he works on Reconfigurable Computing and Machine Learning. He holds a PhD in Computer Architectures from Universitat Politècnica de Catalunya (BarcelonaTech). Prior to joining JSC, he was a predoctoral researcher at Barcelona Supercomputiing Center where he developed tools to scale Machine Learning in HPC. Besides research, he serves in several HPC and ML conferences and workshop committees.',
    linkedin_url: 'https://www.linkedin.com/in/albertkahira',
    twitter_url: 'https://x.com/ankahira',
    email: 'albert@datawise.africa',
  },
  {
    id: '1',
    name: 'Brian Odhiambo',
    title: 'Engineering Lead',
    image: '/assets/teamMembers/brianp.jpg',
    description:
      'Brian is a data scientist at Datawise. He has a BSc in Information Technology from Zetech University (Nairobi, Kenya). Having keen interest in machine learning, Brian has participated in building models for different use cases including but not limited to recommendation systems, computer vision projects and NLP. Brian is also well-versed in software engineering majorly focusing on backend engineering.',
    linkedin_url: 'https://www.linkedin.com/in/brian-odhiambo-6b036b181',
    twitter_url: 'https://x.com/__Obrian',
    email: 'brian@datawise.africa',
  },
  {
    id: '2',
    name: 'Dorothy Chepkonga',
    title: 'Operations Lead',
    image: '/assets/teamMembers/dorothy.jpg',
    description: '',
    linkedin_url: 'https://linkedin.com/in/dorothychepkonga',
    twitter_url: '',
    email: 'dorothy@datawise.africa',
  },
  {
    id: '3',
    name: 'Winny C. Sigilai',
    title: 'Software Engineer',
    image: '/assets/teamMembers/winny.jpg',
    description: '',
    linkedin_url: 'https://www.linkedin.com/in/winny-sigilai-a64648222/',
    twitter_url: '',
    email: 'winny@datawise.africa',
  },
  {
    id: '4',
    name: 'Felix Orinda',
    title: 'Software Engineer',
    image: '/assets/teamMembers/forinda.jpg',
    description: '',
    linkedin_url: 'https://www.linkedin.com/in/felixorinda/',
    twitter_url: '',
    email: 'felix@datawise.africa',
  },
  {
    id: '5',
    name: 'Brandon Ruoro',
    title: 'Design Consultant',
    image: 'https://ca.slack-edge.com/T06ASTVPVMH-U096PGHF69Y-12f77e3a3e5c-512',
    description: '',
    linkedin_url: 'https://www.linkedin.com/in/ruorobee/',
    twitter_url: '',
    email: '__',
  },
];
export type JobCareerPositionType = {
  id: string;
  title: string;
  overview: string;
  what_you_will_do: string[];
  qualifications: string[];
  bonus_qualifications: string[];
  what_we_offer: string[];
  link: string;
} & Record<string, any>;
export const fullstack_what_you_will_do = [
  'Develop and maintain backend services and APIs using Django (Python).',
  'Work with PostgreSQL databases – design schemas, write efficient queries, and optimize performance.',
  'Containerize services using Docker and manage deployments.',
  'Integrate third-party APIs and internal services securely.',
  'Build responsive and performant frontend interfaces using React, Next.js, and Tailwind CSS.',
  'Connect frontend components seamlessly with backend APIs.',
  'Participate in code reviews, write clean & documented code, and follow best practices.',
  'Collaborate with designers, developers, and product leads on new features from planning to deployment.',
  'Use Git/GitHub for version control and collaborative workflows.',
];

export const fullstack_qualifications = [
  'Strong proficiency in Python and hands-on experience with Django or Django REST Framework.',
  'Solid understanding of PostgreSQL and relational database design.',
  'Experience with React.js (hooks, context) and/or Next.js.',
  'Proficiency in modern frontend tooling: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS.',
  'Familiarity with Docker and basic containerization concepts.',
  'Experience building and consuming RESTful APIs.',
  'Comfortable with Git and GitHub workflows (branching, PRs, code reviews).',
  'Strong problem-solving skills and attention to detail.',
  'Excellent communication and ability to work independently or in a team.',
];

export const bonus_qualifications = [
  'Experience with TypeScript',
  'Knowledge of testing frameworks (Jest, React Testing Library, PyTest)',
  'Familiarity with CI/CD pipelines',
  'Previous contribution to open-source projects or a strong GitHub portfolio',
  'Understanding of security best practices (OWASP, authentication, etc.)',
  'Experience with Redis, Celery, or other backend tools',
];

export const what_we_offer = [
  'Working in a fast paced environment.',
  'Collaborating with like minded individuals.',
  'Opportunity to build and refine your skills.',
  'Access to resources and tools for learning.',
  'Monthly stipend plus career progression.',
];

export const available_positions: JobCareerPositionType[] = [
  {
    id: '0',
    title: 'Full-Stack Developer Intern',
    overview:
      'We are seeking a motivated, self-driven, and talented Full-Stack Developer Intern to join our team. This role offers a unique opportunity to gain hands-on experience building modern web applications across both the frontend and backend. You will collaborate closely with our development team, contributing to real projects that support our mission. The internship runs for 4 months starting January 2026, with a strong possibility of transitioning to a full-time role based on performance.',
    what_you_will_do: fullstack_what_you_will_do,
    qualifications: fullstack_qualifications,
    bonus_qualifications: bonus_qualifications,
    what_we_offer: what_we_offer,
    link: 'https://airtable.com/appQCD9An8BnqG6J6/pagkCIJO6pITiJI1U/form',
  },
];

// export const REACT_PUBLIC_API_HOST = "http://localhost:8000"
export const REACT_PUBLIC_API_HOST = 'https://gpt.datawiseafrica.com';

// const baseRoutes = [
//   { path: "/" },
//   { path: "/projects" },
//   { path: "/datalab" },
//   { path: "/about-us" },
//   { path: "/contact-us" },
//   { path: "/jobs" },
//   { path: "/become-a-partner" },
//   { path: "/partners" }
// ];

// export default baseRoutes;

// "generate:sitemap": "node generateSitemap.js"
