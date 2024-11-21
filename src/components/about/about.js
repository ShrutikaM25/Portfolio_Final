import React from 'react';
import myImage from '../../utils/Photo.jpg'; // Replace with the actual path to your image
import './about.css';
import { Link } from 'react-router-dom/dist';

const AboutMe = () => {
  
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center bg-[#1e1e2f] text-[#d3d3d3] py-8 px-4 lg:py-12 lg:px-24"
    >
      {/* Image Section */}
      <div
        className="relative mb-6 lg:mb-0 lg:mr-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden">
          <img
            src={myImage}
            alt="Shrutika Malve"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative Circle */}
        <div className="absolute broken-circle animate-spin-slow"></div>
      </div>

      {/* Text Section */}
      <div
        className="text-center lg:text-left lg:w-2/3 space-y-4"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-[#ffa45c]"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          👩‍💻 About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85d7ff] to-[#d8b4fe]">Me</span>
        </h2>

        <p
          className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Hello, I’m <strong className="text-[#ffd700]">Shrutika Malve</strong> 🌟 — a tech enthusiast driven by curiosity and innovation. Currently pursuing a{' '}
          <strong className="text-[#85d7ff]">Bachelor’s in Computer Engineering</strong> at{' '}
          <strong className="text-[#ffd700]">PICT</strong>, with a stellar GPA of{' '}
          <strong className="text-[#ffa45c]">9.17</strong>. I am also a{' '}
          <strong className="text-[#85d7ff]">Project Intern at Dell Technologies</strong>, tackling impactful real-world challenges.
        </p>

        <p
          className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          My journey includes developing projects like a{' '}
          <strong className="text-[#85d7ff]">Mental Health Analyzer</strong> and an{' '}
          <strong className="text-[#ffa45c]">ATS Tracker</strong>, showcasing my problem-solving skills. Check out my{' '}
          <Link
            to="/experience"
            className="text-[#ffdb70] font-bold underline hover:text-[#ffd85f]"
          >
            Experience
          </Link>{' '}
          and{' '}
          <Link
            to="/projects"
            className="text-[#ffdb70] font-bold underline hover:text-[#ffd85f]"
          >
            Projects
          </Link>{' '}
          for more!
        </p>

        <p
          className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          Beyond tech, I’ve mastered <strong className="text-[#ffa45c]">Bharatanatyam</strong>, earning a{' '}
          <em className="italic text-[#d8b4fe]">Madhyama Purna</em> certification, and I indulge in creative
          pursuits like pearl jewelry design, origami, and DIY crafts ✨.
        </p>

        <p
          className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          I’m eager to contribute, grow, and thrive in a dynamic, innovative environment. 🌱
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
