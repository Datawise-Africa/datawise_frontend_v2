export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
    dropdownItems: [],
  },
  {
    id: "1",
    title: "Projects",
    url: "/projects",
    dropdownItems: [],
  },
  {
    id: "2",
    title: "Tools",
    url: "/tools",
    dropdownItems: [
      {title: "JOURN-GPT", url:"/tools/GPT"},
      {title: "SHERIA-AI", url:"/tools/sheria-ai"}
    ],
  },
  {
    id: "3",
    title: "Datalab",
    url: "/datalab",
    dropdownItems: [],
  },
  {
    id: "4",
    title: "About Us",
    url: "/about-us",
    dropdownItems: [],
  },
  {
    id: "5",
    title: "Contact Us",
    url: "/contact-us",
    dropdownItems: [],
  },
];

export const socials = [
  {
    id: "0",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/datawise-africa",
  },
  {
    id: "1",
    name: "Github",
    url: "https://github.com/Datawise-Africa",
  },
  {
    id: "2",
    name: "X",
    url: "https://x.com/datawise_AFR",
  },
];

export const teamMembers = [
  {
    id: "0",
    name: "Dr. Albert Kahira",
    title: "Director",
    image: "/assets/teamMembers/albert-kahira.jpeg",
    description:
      "Albert Kahira is a research scientist at Julich Supercomputing Center(JSC) where he works on Reconfigurable Computing and Machine Learning. He holds a PhD in Computer Architectures from Universitat Politècnica de Catalunya (BarcelonaTech). Prior to joining JSC, he was a predoctoral researcher at Barcelona Supercomputiing Center where he developed tools to scale Machine Learning in HPC. Besides research, he serves in several HPC and ML conferences and workshop committees.",
    linkedin_url: "https://www.linkedin.com/in/albertkahira",
    twitter_url: "https://x.com/ankahira",
    email: "albert@datawise.africa"
  },
  {
    id: "1",
    name: "Brian Odhiambo",
    title: "Engineering Lead",
    image: "/assets/teamMembers/brianp.jpg",
    description:
      "Brian is a data scientist at Datawise. He has a BSc in Information Technology from Zetech University (Nairobi, Kenya). Having keen interest in machine learning, Brian has participated in building models for different use cases including but not limited to recommendation systems, computer vision projects and NLP. Brian is also well-versed in software engineering majorly focusing on backend engineering.",
    linkedin_url: "https://www.linkedin.com/in/brian-odhiambo-6b036b181",
    twitter_url: "https://x.com/__Obrian",
    email: "brian@datawise.africa",
  },
  {
    id: "2",
    name: "Dorothy Chepkonga",
    title: "Operations Lead",
    image: "/assets/teamMembers/dorothy.jpg",
    description: "",
    linkedin_url: "https://linkedin.com/in/dorothychepkonga",
    twitter_url: "",
    email: "dorothy@datawise.africa"
  },
  {
    id: "3",
    name: "Winny C. Sigilai",
    title: "Software Engineer",
    image: "/assets/teamMembers/winny.jpg",
    description: "",
    linkedin_url: "https://www.linkedin.com/in/winny-sigilai-a64648222/",
    twitter_url: "",
    email: "winny@datawise.africa"
  },
  {
    id: "4",
    name: "Felix Orinda",
    title: "Software Engineer",
    image: "/assets/teamMembers/forinda.jpg",
    description: "",
    linkedin_url: "https://www.linkedin.com/in/felixorinda/",
    twitter_url: "",
    email: "felix@datawise.africa"
  },
];

export const what_you_will_do = [
  "Analyse datasets produced by Datawise and partners to uncover patterns, insights, and stories.",
  "Conduct desk and field research to contextualise data within Africa's policy and innovation landscape.",
  "Write analytical reports, white papers, and policy briefs that communicate findings clearly and powerfully.",
  "Contribute to thought leadership pieces, blogs, commentaries that shape public discourse on AI and data.",
  "Collaborate with engineers, data scientists, and communications specialists to ensure our research is rigorous, relevant, and accessible.",
  "Support proposal development and reporting for ongoing research and partnerships."
]

export const qualifications = [
  "You have a background in Economics, Data Science, Public Policy, Development Studies, or related fields.",
  "You can work comfortably with structured data (Excel, Google Sheets, or basic Python/R)",
  "You're a strong writer - able to turn data into insights and insight into narrative.",
  "You think critically, ask the right questions, and back your answers with evidence.",
  "You are organised, self-driven, and can manage multiple projects in a dynamic environment.",
  "You are passionate about Africa's future - and you believe in the power of data to shape it."
]

export const bonus_qualifications = [
  "Have published articles, reports or blogs.",
  "Understand data governance, AI ethics, or digital policy in Africa.",
  "Have experience in research lab, think tank, or data-driven organisations."
]

export const what_we_offer = [
  "A chance to turn data into ideas that shape Africa's digital future.",
  "Work alongside brilliant engineers, researchers,and storytellers.",
  "Direct collaboration with the Founder and Head of Research.",
  "Freedom to explore, learn, and publish your work.",
  "Competitive compensation based on experience and potential.",
  "A culture that values curiosity, integrity, and big thinking."
]

export const available_positions = [
  {
    id: "0",
    title: "Research Analyst Intern",
    overview: "We are looking for a sharp, curious, and analytical Research Associate (Data & Policy) to help us transform complex data into stories that matter. You will work at the intersection of data, research and policy - analysing datasets, uncovering insights, and crafting reports and publications that make sense of Africa's digital transformation. From dataset analysis to policy briefs, your work will help governments, researchers, and innovators see the bigger picture behind numbers.",
    responsibilities: what_you_will_do,
    qualifications: qualifications,
    bonus_qualifications: bonus_qualifications,
    work_period: "Full-time",
    workmode: "Hybrid",
    position: "Internship",
    what_we_offer: what_we_offer
  }
]

// export const REACT_PUBLIC_API_HOST = "http://localhost:8000"
export const REACT_PUBLIC_API_HOST = "https://gpt.datawiseafrica.com"

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