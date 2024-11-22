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
      <div className="flex justify-center mt-10 mb-8 sm:mb-10" data-aos="fade-up">
        <div className="flex items-center gap-2 sm:gap-4 relative">
          <span className="w-12 sm:w-16 lg:w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-blue-500"></span>
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md shadow-blue-300 relative z-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-wide">
              Work Experience
            </h2>
          </div>
          <span className="w-12 sm:w-16 lg:w-20 h-[1px] bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 blur-lg sm:blur-xl opacity-40"></div>
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
