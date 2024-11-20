import React, { useState } from 'react';
import logo from '../../utils/2.png';
import { FaHome, FaInfoCircle, FaLaptopCode, FaGraduationCap, FaBriefcase, FaPhone } from 'react-icons/fa';

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
          className='bg-transparent' 
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
          className="lg:hidden text-white" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex space-x-8 text-base sm:text-sm md:text-lg" data-aos="fade-left" data-aos-delay="300">
          <a href="#about" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">About</a>
          <a href="#skills" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">Skills</a>
          <a href="#education" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">Education</a>
          <a href="#experience" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">Work Experience</a>
          <a href="#projects" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 bg-transparent hover:underline transition-all duration-300">Contact</a>
        </nav>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="w-64 bg-gray-800 text-white h-full p-4">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaInfoCircle />
                <span>About</span>
              </a>
              <a href="#skills" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaLaptopCode />
                <span>Skills</span>
              </a>
              <a href="#education" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaGraduationCap />
                <span>Education</span>
              </a>
              <a href="#experience" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaBriefcase />
                <span>Work Experience</span>
              </a>
              <a href="#projects" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaLaptopCode />
                <span>Projects</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 hover:text-yellow-500" onClick={() => setIsSidebarOpen(false)}>
                <FaPhone />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Home;
