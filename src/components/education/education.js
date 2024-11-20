import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educations } from '../../utils/data/educations';
import { BsPersonWorkspace } from 'react-icons/bs';

function Education() {
  return (
    <section id="education" className="bg-[#1e1e2f] py-12 px-4 sm:py-16 sm:px-6 lg:px-24" data-aos="fade-up">
      {/* Header Section */}
      <div className="flex justify-center mb-8 sm:mb-10" data-aos="fade-up">
        <div className="flex items-center gap-2 sm:gap-4 relative">
          {/* Left Line */}
          <span className="w-12 sm:w-16 lg:w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-blue-500"></span>
          
          {/* Text Container */}
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md shadow-blue-300 relative z-10" 
            data-aos="zoom-in" 
            data-aos-delay="200"
          >
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-wide">Education</h2>
          </div>
          
          {/* Right Line */}
          <span className="w-12 sm:w-16 lg:w-20 h-[1px] bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></span>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 blur-lg sm:blur-xl opacity-40"></div>
        </div>
      </div>

      {/* Timeline Section */}
       {/* Timeline Section */}
       <VerticalTimeline>
        {educations.map((education, index) => (
          <VerticalTimelineElement
            key={education.id}
            date={education.duration}
            iconStyle={{
              background: '#85d7ff',
              color: '#fff',
            }}
            icon={<BsPersonWorkspace size={28} />}
            contentStyle={{ background: '#25213b', color: '#e0e0e0' }}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={index * 150}
          >
            <h3
              className="text-sm sm:text-base lg:text-xl font-semibold text-[#ffd700]"
              data-aos="flip-up"
              data-aos-delay="100"
            >
              {education.title}
            </h3>
            <h4
              className="text-xs sm:text-sm lg:text-base text-[#85d7ff]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {education.institution}
            </h4>
            <p
              className="text-xs sm:text-sm lg:text-base text-[#ffa45c]"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {education.score}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Education;
