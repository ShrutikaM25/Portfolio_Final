import React, { useState } from 'react';
import logo from '../../utils/2.png';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaBars,
} from 'react-icons/fa';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/education', label: 'Education' },
    { to: '/experience', label: 'Work Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const sidebarLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/about', label: 'About', icon: <FaInfoCircle /> },
    { to: '/skills', label: 'Skills', icon: <FaLaptopCode /> },
    { to: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { to: '/experience', label: 'Work Experience', icon: <FaBriefcase /> },
    { to: '/projects', label: 'Projects', icon: <FaLaptopCode /> },
    { to: '/contact', label: 'Contact', icon: <FaPhone /> },
  ];

  return (
    <header className="bg-transparent text-white py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Shrutika Malve Logo"
            className="h-14 w-auto cursor-pointer"
          />
          <button
            className="text-xl lg:hidden text-white hover:text-[#ffdb70] transition"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex space-x-10 text-lg"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative group text-[#a5f3eb] hover:text-[#ffdb70] transition-all text-lg duration-300 ${
                location.pathname === link.to ? 'text-[#ffdb70]' : ''
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ffdb70] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full z-40 flex justify-start">
          <div className="flex flex-col rounded-r-2xl w-60 h-fit bg-black/40 backdrop-blur-lg p-6 space-y-6 relative shadow-2xl">
              <button
                className="absolute top-5 right-5 text-2xl text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                &times;
              </button>
              {sidebarLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center space-x-3 text-[#a5f3eb] hover:text-[#ffdb70] transition-all"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
        </div>
      )}
    </header>
  );
};

export default Home;
