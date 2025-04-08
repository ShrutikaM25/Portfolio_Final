import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
<footer className="relative bg-[#0d0d1e] text-white py-10 px-6 overflow-hidden shadow-inner shadow-purple-500/10">
      {/* Glowing Gradient Ring */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-r from-[#4c1d95] via-[#3730a3] to-[#1e3a8a] rounded-full blur-[160px] opacity-20 animate-pulse z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Name & Title */}
        <div data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Shrutika Malve
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Full-Stack Developer | Open Source Contributor | Tech Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" className="text-sm">
          <h3 className="text-lg font-semibold text-gradient-to-r from-blue-400 to-purple-400 mb-3">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/about" className="hover:text-blue-400 transition">About Me</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400 transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-teal-400 transition">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div data-aos="fade-up" className="flex md:justify-end space-x-4">
          {[{
            href: "https://github.com/ShrutikaM25",
            icon: <FaGithub />,
            color: "hover:text-purple-400"
          }, {
            href: "https://linkedin.com/in/shrutika-malve",
            icon: <FaLinkedin />,
            color: "hover:text-blue-400"
          }, {
            href: "mailto:shrutim2409@gmail.com",
            icon: <FaEnvelope />,
            color: "hover:text-pink-400"
          }].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`text-gray-300 ${item.color} transform hover:scale-125 transition-all duration-300`}
            >
              {React.cloneElement(item.icon, { size: 28 })}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="flex justify-center mt-8">
        <Link to="/" className="relative group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition">
            <FiArrowUp size={24} className="text-white animate-bounce" />
          </div>
        </Link>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs text-gray-500 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Shrutika Malve. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
