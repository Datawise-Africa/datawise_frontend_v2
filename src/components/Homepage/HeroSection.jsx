import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-24 md:pt-0 min-h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/115d86f6c670c9128d8eb6151d1221f54e24603a-dwise-2.jpg?w=1920&h=1080&fit=crop&crop=center')",
      }}
    >
      {/* Gradient Overlay from top-left to bottom-right */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800/80 to-blue-500/30"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=7 cy=7 r=1/%3E%3Ccircle cx=27 cy=7 r=1/%3E%3Ccircle cx=47 cy=7 r=1/%3E%3Ccircle cx=7 cy=27 r=1/%3E%3Ccircle cx=27 cy=27 r=1/%3E%3Ccircle cx=47 cy=27 r=1/%3E%3Ccircle cx=7 cy=47 r=1/%3E%3Ccircle cx=27 cy=47 r=1/%3E%3Ccircle cx=47 cy=47 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="container z-10 mx-auto px-4 lg:px-8 py-12 lg:py-24 h-full">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold font-lora leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-lg">
              Driving Africa's Data and AI Revolution
            </h1>
            <p className="text-lg text-teal-100 sm:text-xl lg:text-2xl leading-relaxed drop-shadow-md">
              Applied Data and AI research for Africa, building tools,
              infrastructure, and local research leadership.
            </p>
            <Link to={'/about-us'} className="w-fit bg-emerald-600 hover:bg-emerald-700  text-white font-semibold px-8 py-4 rounded-lg flex items-center transition-colors duration-200 text-lg shadow-lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Isometric Illustration - Hidden on mobile */}
          <div className="hidden lg:flex justify-center items-center">
            {/* <img
              src="/hero-svg-illustration.svg?w=600&h=500&fit=crop&crop=center"
              alt="Data and AI illustration"
              className="w-full h-auto max-w-lg xl:max-w-xl rounded-lg shadow-2xl"
              priority
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
