import HeroSection from "../../components/Homepage/HeroSection";
import WhatWeDo from "../../components/Homepage/WhatWeDo";
import Partners from "../../components/Homepage/Partners";
const Home = () => {
  return (
    <>
      <div className=" overflow-hidden" >
        <HeroSection />
        {/* <AboutUs /> */}
        <WhatWeDo />
        <Partners/>
      </div>
    </>
  );
};

export default Home;
