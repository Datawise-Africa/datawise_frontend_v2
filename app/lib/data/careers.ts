import type { JobCareerPositionType } from '~/lib/types/careers';
import { slugify } from '~/utils/slugify';

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

/**
 * Every position we have ever posted. Entries are kept here permanently so the
 * record (and their `/career-description/:slug` pages) survives; whether a
 * position is advertised is decided by its `deadline`, not by deleting it.
 */
export const all_positions: JobCareerPositionType[] = [
  {
    id: 'student-associate-product-web-design',
    title: 'Student Associate – Product & Web Design',
    work_period: 'Industrial attachment (3 months)',
    overview:
      'Datawise Africa is seeking a creative, curious and technology-driven Student Associate to support its Product and Web Design function. This role offers practical experience in product design, user experience (UX/UI), web design and development, prototyping and the creation of digital tools and interfaces. You will work alongside the product and engineering teams to translate ideas, user needs and product requirements into intuitive, functional and user-friendly digital experiences.',
    what_you_will_do: [
      'Support the design and improvement of digital products, websites and web applications.',
      'Translate product requirements and user needs into functional and intuitive user interfaces.',
      'Develop wireframes, mockups, user flows and interactive prototypes.',
      'Support UX research, usability testing and the identification of opportunities to improve digital products.',
      'Design responsive and accessible interfaces that work consistently across devices and screen sizes.',
      'Help develop and maintain design systems, reusable components and interface guidelines.',
      'Translate design concepts and prototypes into functional web interfaces using HTML, CSS, JavaScript and modern frameworks.',
      'Contribute to the development, testing and improvement of digital product features.',
      'Collaborate with engineers to make sure designs are technically feasible and properly implemented.',
      'Conduct usability reviews and identify design inconsistencies, interface issues and opportunities for improvement.',
      'Support website maintenance, interface updates and ongoing product enhancements.',
      'Take part in product brainstorming, planning sessions, design reviews and development sprints.',
      'Explore emerging design tools, technologies and approaches to improve how we build products.',
      'Support the creation of internal digital tools, prototypes and technology solutions.',
      'Keep design files, prototypes, documentation and development assets organised.',
      'Incorporate feedback from users, team members and supervisors into design iterations.',
    ],
    qualifications: [
      'Final or penultimate year of an undergraduate programme, or a recent graduate (within 12–18 months) with a diploma or degree in Computer Science, Information Technology, Software Engineering, Interaction Design, Graphic Design, Digital Media or a related field.',
      'Strong interest in product design, web design, user experience or frontend development.',
      'Basic understanding of UI/UX design principles and responsive web design.',
      'Familiarity with Figma or similar design and prototyping tools.',
      'Basic knowledge of HTML, CSS and JavaScript.',
      'Understanding of website layouts, interface components and digital product design concepts.',
      'Ability to turn ideas and requirements into visual designs, wireframes or prototypes.',
      'Good problem-solving skills, creativity and attention to detail.',
      'Strong visual awareness and an appreciation for intuitive, user-centred design.',
      'Good communication and collaboration skills.',
      'Willingness to learn new technologies, take feedback and work collaboratively.',
    ],
    bonus_qualifications: [
      'Familiarity with frontend frameworks such as React, Vue or similar.',
      'Experience using Git and GitHub for version control and collaboration.',
      'Web application development through academic, personal or self-directed projects.',
      'Familiarity with design systems, component libraries and prototyping workflows.',
      'Basic understanding of accessibility, website performance and cross-browser compatibility.',
      'Interest in emerging technologies, artificial intelligence and digital product innovation.',
      'A portfolio of design projects, websites, prototypes or other digital products.',
    ],
    what_we_offer: [
      'Practical experience designing and developing real-world digital products and web applications.',
      'Exposure to the full product development process, from ideation and prototyping to implementation.',
      'Supervision, mentorship and guidance from the Engineering and Product teams.',
      'Hands-on experience with modern design tools, frontend technologies and collaborative workflows.',
      'The chance to contribute to live company products, internal tools and innovation initiatives.',
      'A professional portfolio built through practical design and development assignments.',
      'Exposure to multidisciplinary teams working on technology, research and innovation.',
      'Potential progression into a more substantive part-time Student Associate role, based on performance and organisational needs.',
    ],
    link: 'https://airtable.com/appQCD9An8BnqG6J6/pagno5SgieeTrEtnz/form',
    date_posted: '2026-11-27',
    employment_type: 'INTERN',
    programme: true,
  },
  {
    id: 'communications-marketing-intern',
    title: 'Communications & Marketing Intern',
    work_period: 'Full-time Internship (4 months)',
    position: 'Nairobi, Kenya',
    workmode: 'Hybrid (Remote & In-office)',
    overview:
      'We are looking for a creative, proactive, and curious Communications & Marketing Intern to support Datawise Africa’s communications, digital presence, storytelling, and marketing activities. The ideal candidate is a strong communicator who can turn ideas, projects, research, and technical work into engaging content for different audiences. You should be comfortable working across written, visual, social, and increasingly audio/video content. This is a full-time internship running for 4 months, with a possible 2-month extension and the possibility of being absorbed into the role once the internship is complete. Recent graduates and students nearing completion of their studies are encouraged to apply.',
    what_you_will_do: [
      'Develop engaging content for social media, websites, newsletters, campaigns, and other communication channels.',
      'Support the management and growth of Datawise Africa’s social media and digital presence.',
      'Translate technical, research, and project information into clear and accessible stories.',
      'Support communications and marketing campaigns for our projects, products, events, and initiatives.',
      'Research relevant trends, conversations, and opportunities across technology, AI, data, research, and innovation.',
      'Support the planning and production of podcasts, interviews, webinars, and other multimedia content.',
      'Assist with event communications, including promotion, coverage, interviews, photography/video, and post-event storytelling.',
      'Track communication and content performance and contribute ideas for improving reach and engagement.',
      'Help maintain consistency in Datawise Africa’s messaging, tone, and brand across communication channels.',
    ],
    qualifications: [
      'Strong written and verbal communication skills.',
      'Creativity and a strong interest in storytelling and digital content.',
      'Good understanding of major social media platforms and digital communication.',
      'Strong research, organizational, and analytical skills.',
      'Attention to detail and ability to deliver quality work within deadlines.',
      'Confidence working independently while collaborating effectively with a team.',
      'Curiosity and willingness to learn about technology, AI, data, research, and innovation.',
      'A background in Communications, Marketing, Journalism, Public Relations, Media Studies, Digital Marketing, or a related field.',
    ],
    bonus_qualifications: [
      'Hosting or co-hosting podcasts, interviews, webinars, panel discussions, or similar conversations.',
      'Interviewing guests, moderating discussions, presenting, or appearing comfortably on camera.',
      'Creating short-form video, photography, or other multimedia content.',
      'Basic graphic design and content creation using tools such as Canva.',
      'Basic audio or video recording and editing.',
      'Managing a blog, newsletter, podcast, YouTube channel, social media page, or other digital platform.',
    ],
    what_we_offer: [
      'Hands-on communications and marketing experience within a technology and research environment.',
      'Opportunities to work across content, digital marketing, podcasts, events, research, and storytelling.',
      'Exposure to projects involving AI, data, technology, and innovation across Africa.',
      'Mentorship and opportunities to develop your professional portfolio.',
      'A monthly internship stipend.',
      'A 4-month full-time internship, with a possible 2-month extension and the opportunity to be absorbed into the role afterwards.',
    ],
    deadline: '2026-09-23',
    employment_type: 'INTERN',
    link: 'https://airtable.com/appQCD9An8BnqG6J6/pag20Hx3LPoGgMhfQ/form',
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * A position is open until the end of its deadline day (UTC). A position with
 * no deadline — or an unparseable one — is treated as open.
 */
export function isPositionOpen(
  position: JobCareerPositionType,
  now: Date = new Date()
): boolean {
  if (!position.deadline) return true;
  const deadline = new Date(position.deadline);
  if (Number.isNaN(deadline.getTime())) return true;
  return now.getTime() < deadline.getTime() + DAY_MS;
}

/** Positions still accepting applications — what the careers page advertises. */
export function getOpenPositions(
  now: Date = new Date()
): JobCareerPositionType[] {
  return all_positions.filter((position) => isPositionOpen(position, now));
}

/** Look a position up by its title slug, open or closed. */
export function getPositionBySlug(
  slug: string
): JobCareerPositionType | undefined {
  return all_positions.find((position) => slugify(position.title) === slug);
}

/** Stable `23 Sep 2026` formatting — identical on the server and the client. */
export function formatDeadline(deadline: Date | string): string {
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) return '';
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** ISO date (`YYYY-MM-DD`) for JobPosting structured data. */
export function toISODate(deadline: Date | string): string {
  const date = new Date(deadline);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
}

export const REACT_PUBLIC_API_HOST = 'https://gpt.datawiseafrica.com';
