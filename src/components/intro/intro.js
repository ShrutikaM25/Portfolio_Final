import React from 'react';
import './intro.css';
import resume from '../../utils/Resume.pdf';
import Typewriter from 'typewriter-effect';
import Logo from '../../utils/5.png';
import { Link } from 'react-router-dom/dist';

const Intro = () => {
  const name = "Shrutika Malve";

  return (
    <div className="relative w-full bg-transparent">
      <section className="hero relative w-full bg-transparent overflow-hidden text-white py-10 sm:py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 w-full bg-gradient-to-r from-[#121212] via-[#1a1a2d] to-[#2a2a3f] animate-gradient bg-opacity-95"></div>

        {/* Floating Shapes */}
        <div className="absolute top-10 sm:top-20 left-1/4 sm:left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-[#ff7eb3] to-[#ff758c] rounded-full animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-5 right-1/4 sm:right-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-[#6a83f4] to-[#4c61d4] rounded-full animate-float animation-delay-2s"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left Content (Text) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-[#ffa45c]" data-aos="slide-right">
              Hi,
            </h1>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#a5f3eb] to-[#b3cfff] flex justify-center lg:justify-start">
              <span className="mr-2">I'm</span>
              {name.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`group relative inline-block cursor-pointer ${
                    letter === " " ? "whitespace-pre" : ""
                  } text-transparent bg-clip-text bg-gradient-to-r from-[#ffa1e3] to-[#a1d1ff] hover:from-[#ff85d4] hover:to-[#ffed9b] hover-rubber-band`}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  {letter}
                </span>
              ))}
            </h2>

            {/* Typewriter Effect */}
            <div className="flex text-lg sm:text-2xl lg:text-3xl mb-8 max-w-2xl justify-center lg:justify-start">
              <span className="mr-2" data-aos="slide-right">
                I'm a
              </span>
              <span
                className="text-[#ffdb70] font-bold"
                data-aos="slide-right"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "MERN Stack Developer",
                      "Open Source Contributor",
                      "Software Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6" data-aos="fade-up">
              <Link
                to="/projects"
                className="relative inline-block text-[#ffdb70] font-semibold py-2 px-6 rounded-lg shadow-xl overflow-hidden transition-all duration-300 group border-2 border-[#4c61d4]"
                data-aos="fade-right"
              >
                <span className="relative z-10 group-hover:text-white text-lg transition-colors duration-300">
                  View My Work
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4c61d4] to-[#6a83f4] group-hover:from-[#ff758c] group-hover:to-[#ff7eb3] transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              </Link>

              <a
                href={resume}
                download="Shrutika_Malve_Resume.pdf"
                className="relative inline-block bg-[#ffdb70] text-[#1a1a2d] font-semibold py-2 px-6 rounded-lg shadow-xl overflow-hidden transition-all duration-300 group border-2 border-[#4c61d4]"
                data-aos="fade-left"
              >
                <span className="relative z-10 group-hover:text-white text-lg transition-colors duration-300">
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff758c] to-[#ff7eb3] group-hover:from-[#4c61d4] group-hover:to-[#6a83f4] transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              </a>
            </div>
          </div>

          {/* Right Content (Logo) */}
          <div className="lg:w-1/2 flex justify-center items-center" data-aos="slide-right">
            <img
              src={Logo}
              alt="Shrutika's Logo"
              className="mt-7 rounded-lg max-w-full h-[200px] sm:h-[250px] lg:h-[360px] transform rotate-45"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Intro;
