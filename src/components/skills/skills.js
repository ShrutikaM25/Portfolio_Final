import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';
import { skillsData, skillsCategorized } from "../../utils/data/skills"; // Using both data sources
import './skills.css';

const skillsImages = (() => {
  const images = {};
  const importAll = (r) => {
    r.keys().forEach((item) => {
      const key = item.replace('./', '').replace('.svg', '').toLowerCase();
      images[key] = r(item);
    });
  };
  importAll(require.context('../../utils/svg/skills', false, /\.svg$/));
  return images;
})();

const Skills = () => {
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) setRadius(150); // Small screens
      else if (screenWidth <= 768) setRadius(200); // Tablets
      else setRadius(300); // Larger screens
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);

    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    const container = '.tagcloud';

    const options = {
      radius,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    };

    const tagCloud = TagCloud(container, skillsData, options);

    // Apply random colors to each text
    const tags = document.querySelectorAll('.tagcloud span');
    tags.forEach((tag) => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      tag.style.color = randomColor;
    });

    return () => {
      tagCloud && tagCloud.destroy();
    };
  }, [radius]);

  return (
    <div id="skills" className="relative z-50 bg-gradient-to-br from-[#121212] via-[#1a1a2d] to-[#2a2a3f] py-10">
      {/* Section Heading */}
      <div
  className="flex justify-center items-center mb-20 relative"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  {/* Glowing aura behind the card */}
  <div className="absolute w-72 h-40 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 blur-[90px] opacity-30 rounded-full z-0 animate-pulse" />

  {/* Heading Card */}
  <div className="relative z-10 px-10 py-4 sm:py-6 border border-white/10 bg-black/50 backdrop-blur-xl rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.4)] transition-all duration-500 overflow-hidden group">
    
    {/* Animated border shimmer */}
    <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-borderGlow"></span>

    {/* Heading Text */}
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradientText">
      Skills
    </h2>

    {/* Underline effect */}
    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto animate-pulseShadow" />
  </div>
</div>


      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left: Skills Buttons */}
        <div
          className="lg:w-3/4 flex flex-col gap-6"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {Object.keys(skillsCategorized).map((category, idx) => (
            <div key={idx} className="w-full">
              <h3
                className="text-lg font-semibold text-violet-500 mb-3 capitalize"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                {category}
              </h3>
              <div
                className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-3"
                data-aos="zoom-in"
                data-aos-duration="1600"
              >
                {skillsCategorized[category].map((skill, id) => {
                  const skillKey = skill.toLowerCase().replace(/\s+/g, '');
                  const imageSrc = skillsImages[skillKey];

                  return (
                    <div
                    className="flex flex-col items-center justify-center bg-[#25213b] text-white p-2 rounded-md 
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:text-white 
                    transition-all duration-300 ease-in-out shadow-md text-center"
                      key={id}
                      style={{ minWidth: '70px', minHeight: '70px' }}
                      data-aos="flip-up"
                      data-aos-duration="1800"
                    >
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={skill}
                          className="h-6 w-6 sm:h-8 sm:w-8 mb-2"
                        />
                      ) : (
                        <span className="h-4 w-4 flex items-center  justify-center text-xs mb-2">?</span>
                      )}
                      <span className="font-medium text-xs sm:text-sm truncate">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Responsive TagCloud Globe */}
        <div
          className="lg:w-1/2 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <span className="tagcloud text-white font-semibold text-xs sm:text-sm"></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
