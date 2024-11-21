import React, { useState } from 'react';
import logo from '../../utils/2.png';

import { FaHome, FaInfoCircle, FaLaptopCode, FaGraduationCap, FaBriefcase, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom/dist';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  return (
    <header 
      className="bg-transparent text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <div className="container mx-auto bg-transparent flex justify-between items-center px-6">
        {/* Logo (with sidebar toggle for smaller screens) */}
        <div 
          className="bg-transparent" 
          data-aos="zoom-in" 
          data-aos-duration="1000"
        >
          <img
            src={logo} 
            alt="Shrutika Malve Logo"
            className="h-14 w-auto mx-0 cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar
          />
        </div>

        {/* Hamburger Icon for small screens */}
        <button 
          className="lg:hidden text-[#ffdb70]" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex space-x-8 text-base sm:text-sm md:text-lg" data-aos="fade-left" data-aos-delay="300">
        <Link to="/" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Home</Link>
          <Link to="/about" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">About</Link>
          <Link to="/skills" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Skills</Link>
          <Link to="/education" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Education</Link>
          <Link to="/experience" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Work Experience</Link>
          <Link to="/projects" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Projects</Link>
          <Link to="/contact" className="text-[#a5f3eb] hover:text-[#ffdb70] bg-transparent hover:underline transition-all duration-300">Contact</Link>
        </nav>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="w-64 bg-gray-900 text-white h-full p-4">
            <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaHome />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaInfoCircle />
                <span>About</span>
              </Link>
              <Link to="/skills" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaLaptopCode />
                <span>Skills</span>
              </Link>
              <Link to="/education" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaGraduationCap />
                <span>Education</span>
              </Link>
              <Link to="/experience" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaBriefcase />
                <span>Work Experience</span>
              </Link>
              <Link to="/projects" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaLaptopCode />
                <span>Projects</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 text-[#a5f3eb] hover:text-[#ffdb70]" onClick={() => setIsSidebarOpen(false)}>
                <FaPhone />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Home;
