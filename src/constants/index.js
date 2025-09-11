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
    {
    id: "5",
    name: "Brandon Ruoro",
    title: "Design Consultant",
    image: "https://ca.slack-edge.com/T06ASTVPVMH-U096PGHF69Y-12f77e3a3e5c-512",
    description: "",
    linkedin_url: "https://www.linkedin.com/in/ruorobee/",
    twitter_url: "",
    email: "__"
  },
];

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