import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { projectsData } from '../../utils/data/projects-data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    console.log(project);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-[#1e1e2f] text-white py-12 px-4 lg:px-24 mb-0">
      {/* Header */}
      <div className="relative flex justify-center items-center mb-32" data-aos="zoom-in-up">
          {/* Glowing backdrop rings */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 blur-[100px] opacity-25 animate-pulse"></div>
            <div className="absolute w-64 h-64 border-2 border-purple-600/20 rounded-full animate-spin-slow"></div>
            <div className="absolute w-40 h-40 border border-blue-500/10 rounded-full animate-spin-slower"></div>
          </div>

          {/* Heading */}
          <div className="relative z-10 px-10 mt-10 py-4 rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] border border-white/10 shadow-[0_0_60px_#7c3aed33] hover:shadow-[0_0_80px_#9333ea44] transition-shadow duration-500 backdrop-blur-md">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500 animate-gradientText">
              PROJECTS
            </h2>
            <div className="mt-4 h-1 w-40 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto z-10 relative px-2 sm:px-4">
        {projectsData.map((project, index) => (
          <Tilt
          key={project.id}
          glareEnable={true}
          glareMaxOpacity={0.2}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className="cursor-pointer bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden p-3 sm:p-4 shadow-[0_0_20px_#00000033] hover:shadow-[0_0_40px_#7f5af088] transform transition duration-500 group"
          >
          {/* Make this the clickable wrapper */}
          <div onClick={() => openModal(project)} data-aos="fade-right"  data-aos-delay={index * 100} >
          <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl mb-3 sm:mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-4">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:translate-y-[-6px] transition-transform duration-300">
              {project.name}
                </h3>
              </div>
            </div>
            <div className="text-gray-400 text-sm mb-3">Domain: {project.role}</div>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 rounded-full bg-gradient-to-tr from-[#312e81] via-[#9333ea] to-[#c026d3] text-white shadow-md shadow-indigo-600/30 hover:brightness-125 hover:scale-105 transition-all"
                  >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Tilt>        
        ))}
      </div>


      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="bg-[#1e1e2f] w-11/12 lg:w-90 max-w-[500px] p-3 rounded-lg relative">
            {/* Close Button */}
            <button
              className="text-white text-xl absolute top-2 right-2"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-35 object-cover rounded-md mb-2"
            />
            <h3 className="text-sm font-semibold mb-2">{selectedProject.name}</h3>
            <p className="text-xs text-gray-400 mb-2">Role: {selectedProject.role}</p>
            <p className="text-xs text-gray-300 mb-2">{selectedProject.description}</p>

            {/* Tech Stack */}
            <p className="text-xs text-gray-400 mb-1">Tech Stack:</p>
            <div className="flex flex-wrap gap-1 mb-2 justify-center">
              {selectedProject.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-violet-500 text-[10px] px-2 py-1 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-3">
              {selectedProject.code && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md"
                >
                  Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded-md"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
