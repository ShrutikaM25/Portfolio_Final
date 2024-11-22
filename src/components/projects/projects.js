import React, { useState } from 'react';
import { projectsData } from '../../utils/data/projects-data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-[#1e1e2f] text-white py-12 px-4 lg:px-24 mb-0">
      {/* Header */}
      <div className="flex justify-center sm:mt-20 mt-10 mb-10" data-aos="fade-up">
        <div className="flex items-center gap-4 relative">
          {/* Left Line */}
          <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-blue-500"></span>

          {/* Title */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md shadow-blue-300 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">Projects</h2>
          </div>

          {/* Right Line */}
          <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></span>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 blur-xl opacity-50"></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-4 sm:gap-8 md:gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="bg-[#25213b] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:rotate-3 hover:scale-105 p-2 sm:p-3"
            onClick={() => openModal(project)}
            style={{  width: '100%', minHeight: '320px' }}
            data-aos="fade-right" 
            data-aos-delay={index * 100} 
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 sm:h-52 lg:h-64 object-cover rounded-md"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-xs sm:text-sm text-gray-400">Domain: {project.role}</p>
            </div>
          </div>
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
