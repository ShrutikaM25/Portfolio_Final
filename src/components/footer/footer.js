import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 relative overflow-hidden">
      {/* Gradient Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-purple-700 opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 relative z-10">
        {/* Personal Info */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            Shrutika Malve
          </h2>
          <p className="text-sm text-gray-400">
            Full-Stack Developer | Open Source Contributor | Tech Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-300 hover:text-teal-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-start space-x-4" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://github.com/ShrutikaM25"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/shrutika-malve"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:shrutim2409@gmail.com"
            className="text-gray-300 hover:text-pink-400 transform hover:scale-110 transition"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
        <div className="mt-4 flex justify-center" >
  <a
    href="/"
    className="group relative inline-block text-white font-medium px-6 py-3 rounded-full shadow-lg transform transition animate-bounce
      bg-gradient-to-r from-purple-500 to-blue-500"
  >
    <span
      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 "
    ></span>
    <span className="relative text-white"> 
      <FiArrowUp size={30} />
    </span>
  </a>
</div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center relative z-10">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Shrutika Malve. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
