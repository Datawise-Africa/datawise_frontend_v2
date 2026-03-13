import type { TsFixMe } from '~/types/glob';

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
    title: 'Services',
    url: '/services',
    dropdownItems: [],
  },
  {
    id: '2',
    title: 'Projects',
    url: '/projects',
    dropdownItems: [],
  },
  // {
  //   id: '3',
  //   title: 'Tools',
  //   url: '/tools',
  //   dropdownItems: [
  //     { title: 'JOURN-GPT', url: '/tools/GPT' },
  //     { title: 'SHERIA-AI', url: '/tools/sheria-ai' },
  //   ],
  // },
  {
    id: '4',
    title: 'Datalab',
    url: '/datalab',
    dropdownItems: [],
  },
  {
    id: '5',
    title: 'About Us',
    url: '/about-us',
    dropdownItems: [],
  },
  {
    id: '6',
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
    title: 'Director & Head of Research',
    image: '/assets/teamMembers/albert-kahira.jpeg',
    description:
      'Albert started out in computer science and research, and over time became interested in how data and computation can be used to solve real problems, especially in underrepresented contexts. He has worked on data, AI, and compute infrastructure for Africa, development of large-scale African datasets in areas such as language, governance, agriculture, and health. He also played an advisory role to Lacuna Fund on data quality, dataset design, and impact evaluation. The gap in access to high-quality African data is what pushed him deeper into data, AI, and infrastructure, and eventually into building Datawise Africa.',
    linkedin_url: 'https://www.linkedin.com/in/albertkahira',
    twitter_url: 'https://x.com/ankahira',
    email: 'albert@datawiseafrica.com',
  },
  {
    id: '1',
    name: 'Brian Odhiambo',
    title: 'Engineering Lead',
    image: '/assets/teamMembers/brian.webp',
    description:
      'Brian is deeply motivated by building solutions that transform ideas into real-world impact. What began as curiosity about how technology works quickly evolved into a commitment to understanding how systems are designed, optimised, and deployed to solve complex problems. He works in AI and machine learning, using data to build intelligent systems that can learn, adapt, and support better decision-making. Some of his projects include our Datalab platform, Sheria AI, and Maisha Registry, just to name a few. For Brian, this field sits at the intersection of creativity and logic, and it gives him the tools to create technology that is not only functional but meaningful.',
    linkedin_url: 'https://www.linkedin.com/in/brian-odhiambo-6b036b181',
    twitter_url: 'https://x.com/__Obrian',
    email: 'brian@datawiseafrica.com',
  },
  {
    id: '2',
    name: 'Dorothy Chepkonga',
    title: 'Operations Lead',
    image: '/assets/teamMembers/dorothy.jpg',
    description:
      'Dorothy believes operations is an integration of strategy, people, and execution. She enjoys turning ideas into systems, improving how teams collaborate, and ensuring that projects move smoothly from planning to impact. She has led planning and performance reviews, coordinated cross-functional projects, improved Datawise\u2019s internal workflows, and much more. At Datawise Africa, the operations allow Dorothy to support innovativeness by creating structure, clarity, and sustainable processes to support the mission.',
    linkedin_url: 'https://linkedin.com/in/dorothychepkonga',
    twitter_url: '',
    email: 'dorothy@datawiseafrica.com',
  },
  {
    id: '3',
    name: 'Winny Chelangat',
    title: 'Data and Insights Lead',
    image: '/assets/teamMembers/winny.jpg',
    description:
      'For Winny, data becomes most powerful when it is transformed into evidence that drives real-world decisions. They lead the Data & Insights function, guiding the team in generating insights from complex datasets, producing structured reports, and synthesizing research into clear, actionable findings for partners and stakeholders. Winny has worked closely with our partners, leading impact assessments, data quality initiatives, evidence-based research, and data-driven strategy across projects focused on technology, development, and innovation in Africa. At Datawise Africa, Winny focuses on strengthening how data is translated into insight at both a technical and strategic level, ensuring that research outputs, datasets, and analyses meaningfully inform policy, platforms, and real-world impact.',
    linkedin_url: 'https://www.linkedin.com/in/winny-sigilai-a64648222/',
    twitter_url: '',
    email: 'winny@datawise.africa',
  },
  {
    id: '4',
    name: 'Sylvia Murkomen',
    title: 'Research Analyst',
    image: '/assets/teamMembers/sylvia.webp',
    description:
      'For Sylvia, statistics is where curiosity meets real-world problem-solving. She has worked on comparisons, research analysis, private and public domains, and much more, assessing how these things affect the functioning of the communities around us. The curiosity of what statistical evidence shapes real world outcomes led her to pursue applied research in development and public systems.',
    linkedin_url: 'https://www.linkedin.com/in/sylvia-murkomen/',
    twitter_url: '',
    email: 'sylvia@datawise.africa',
  },
  {
    id: '5',
    name: 'Mohammed Ghalib',
    title: 'Software Engineer',
    image: '/assets/teamMembers/mohammed.webp',
    description:
      'Mohammed works across backend, frontend, and chatbot development. He enjoys the idea of building scalable, intelligent solutions that address real-world problems and make a meaningful impact. His projects have been Sheria AI and CREAN, contributing to their development and assisting with both backend and frontend development.',
    linkedin_url: 'https://www.linkedin.com/in/mohammad-ghalib-8a18932b0/',
    twitter_url: '',
    email: 'mohammed@datawiseafrica.com',
  },
  {
    id: '6',
    name: 'Wawuda Osiemo',
    title: 'Marketing and Communications',
    image: '/assets/teamMembers/wawuda.webp',
    description:
      "Wawuda has experience in social media, marketing, and communications, with a background in journalism. Her work reflects a passion for shaping how Datawise is seen and understood, helping the company grow its presence and influence. She enjoys writing, storytelling, and building meaningful relationships that strengthen both Datawise and its community. Wawuda also serves as the voice behind Datawise's podcast, The African Stack, where she helps share the stories behind Africa's growing technology ecosystem and innovation.",
    linkedin_url: 'https://www.linkedin.com/in/wawuda-osiemo-23375a20a/',
    twitter_url: '',
    email: 'wawuda@datawiseafrica.com',
  },
  {
    id: '7',
    name: 'Felix Orinda',
    title: 'Software Engineer',
    image: '/assets/teamMembers/forinda.jpg',
    description:
      "Felix is the mind behind Web Dev Insights and has been instrumental in shaping the UI and UX implementation for key Datawise products, including The African Stack, Datalab, Maisha Registry, and the Datawise website. He has also collaborated on a number of internal tool projects, bringing a keen eye for detail and a passion for building intuitive, high-quality user experiences that power Datawise's digital presence.",
    linkedin_url: 'https://www.linkedin.com/in/felixorinda/',
    twitter_url: 'https://x.com/felix_orinda',
    email: 'felix@datawiseafrica.com',
  },
  // {
  //   id: '8',
  //   name: 'Brandon Ruoro',
  //   title: 'Design Consultant',
  //   image: 'https://ca.slack-edge.com/T06ASTVPVMH-U096PGHF69Y-12f77e3a3e5c-512',
  //   description: '',
  //   linkedin_url: 'https://www.linkedin.com/in/ruorobee/',
  //   twitter_url: '',
  //   email: '__',
  // },
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
} & Record<string, TsFixMe>;
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
  // {
  //   id: '0',
  //   title: 'Full-Stack Developer Intern',
  //   overview:
  //     'We are seeking a motivated, self-driven, and talented Full-Stack Developer Intern to join our team. This role offers a unique opportunity to gain hands-on experience building modern web applications across both the frontend and backend. You will collaborate closely with our development team, contributing to real projects that support our mission. The internship runs for 4 months starting January 2026, with a strong possibility of transitioning to a full-time role based on performance.',
  //   what_you_will_do: fullstack_what_you_will_do,
  //   qualifications: fullstack_qualifications,
  //   bonus_qualifications: bonus_qualifications,
  //   what_we_offer: what_we_offer,
  //   link: 'https://airtable.com/appQCD9An8BnqG6J6/pagkCIJO6pITiJI1U/form',
  // },
];

// export const REACT_PUBLIC_API_HOST = "http://localhost:8000"
export const REACT_PUBLIC_API_HOST = 'https://gpt.datawiseafrica.com';

// const baseRoutes = [
//   { path: "/" },
//   { path: "/projects" },
//   { path: "/datalab" },
//   { path: "/about-us" },
//   { path: "/contact-us" },
//   { path: "/careers" },
//   { path: "/become-a-partner" },
//   { path: "/partners" }
// ];

// export default baseRoutes;

// "generate:sitemap": "node generateSitemap.js"
