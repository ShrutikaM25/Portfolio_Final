import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../utils/data/experience';

const WorkExperience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="experience"
      className="bg-[#1e1e2f] text-white py-12 px-4 sm:py-16 sm:px-6 lg:px-24"
    >
      {/* Header Section */}
      <div className="relative flex justify-center items-center mb-32" data-aos="zoom-in-up">
        {/* Glowing backdrop rings */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 blur-[100px] opacity-25 animate-pulse"></div>
          <div className="absolute w-64 h-64 border-2 border-purple-600/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-40 h-40 border border-blue-500/10 rounded-full animate-spin-slower"></div>
        </div>

        {/* Heading */}
        <div className="relative z-10 px-10 py-4 mt-4 rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] border border-white/10 shadow-[0_0_60px_#7c3aed33] hover:shadow-[0_0_80px_#9333ea44] transition-shadow duration-500 backdrop-blur-md">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500 animate-gradientText uppercase">
            Experience
          </h2>
          <div className="mt-4 h-1 w-40 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <VerticalTimeline>
        {experiences.map((exp, index) => {
          const isExpanded = expanded[exp.id];
          const previewDescription = exp.description.slice(0, 100);

          return (
            <VerticalTimelineElement
              key={exp.id}
              date={exp.duration}
              iconStyle={{
                background: '#6d28d9',
                color: '#fff',
              }}
              icon={
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain rounded-full bg-[#fff]"
                />
              }
              contentStyle={{ background: '#25213b', color: '#d3d3d3' }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-[#ffd700] bg-[#25213b]">
                {exp.position}
              </h3>
              <h4 className="text-xs sm:text-sm lg:text-base text-[#85d7ff] bg-[#25213b]">
                {exp.company}
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-[#e0e0e0] bg-[#25213b]">
                {isExpanded ? exp.description : `${previewDescription}...`}
              </p>
              {isExpanded && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#d8b4fe] text-[#1e1e2f] text-[7px] sm:text-xs py-1 px-2 sm:px-3 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={() => toggleExpand(exp.id)}
                className="mt-2 text-[#85d7ff] text-xs underline hover:text-[#ffd700] focus:outline-none"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
