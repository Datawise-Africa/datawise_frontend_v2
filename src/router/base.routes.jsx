import Home from "../pages/home/Home"; 
import Projects from "../pages/projects/Projects";
import Datalab from "../pages/datalab/Datalab";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";
import Jobs from "../pages/jobs/Jobs";
import JobDescription from "@/pages/jobs/JobDescription";
import Partners from "../pages/partners/Partners";
import PartnerForm from "../pages/partners/partnersform";
import GPTInterface from "../pages/tools/GPTinterface";
import PrivacyPolicy from "../pages/Docs/Privacypolicy";
import SheriaAI from "../pages/tools/SheriaAI";

const baseRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/tools/GPT",
        element: <GPTInterface/>,
    },
    {
        path: "/tools/sheria-ai",
        element: <SheriaAI/>,
    },
    {
        path: "/datalab",
        element: <Datalab />,
    },
    {
        path: "/about-us",
        element: <AboutUs />,
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },
    {
        path: "/jobs",
        element: <Jobs />,
    },
    {
        path: "/job-description/:slug",
        element: <JobDescription  />,
    },
    {
        path: "/become-a-partner",
        element: <PartnerForm/>
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
    },
    {
        path: "/partners",
        element: <Partners />,
    },

]

export default baseRoutes;