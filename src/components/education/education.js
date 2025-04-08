import { educations } from '../../utils/data/educations';
import { BsPersonWorkspace } from 'react-icons/bs';
import './education.css';

function Education() {
  return (
    <section id="education" className="bg-[#1e1e2f] py-20 px-4 sm:px-8 lg:px-24">
      {/* Header */}
      <div className="relative flex justify-center items-center mb-32" data-aos="zoom-in-up">
  {/* Glowing backdrop rings */}
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 blur-[100px] opacity-25 animate-pulse"></div>
    <div className="absolute w-64 h-64 border-2 border-purple-600/20 rounded-full animate-spin-slow"></div>
    <div className="absolute w-40 h-40 border border-blue-500/10 rounded-full animate-spin-slower"></div>
  </div>

  {/* Heading */}
  <div className="relative z-10 px-10 py-6 rounded-3xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000] border border-white/10 shadow-[0_0_60px_#7c3aed33] hover:shadow-[0_0_80px_#9333ea44] transition-shadow duration-500 backdrop-blur-md">
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500 animate-gradientText">
      EDUCATION
    </h2>
    <div className="mt-4 h-1 w-40 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
  </div>
</div>


      {/* Horizontal Timeline */}
      <div className="relative w-full overflow-x-auto no-scrollbar">
        <div className="flex items-start justify-start min-w-[100%] px-6 sm:px-12 space-x-28">
          {educations.map((education, index) => (
            <div
              key={education.id}
              className="relative flex flex-col items-center w-[280px] sm:w-[320px] shrink-0"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Connector Line */}
              {index !== 0 && (
                <div className="absolute top-10 left-[-210px] w-[310px] h-[4px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full z-0">
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
              )}

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-700 shadow-2xl border-[5px] border-[#1e1e2f] text-white text-3xl z-10">
                <BsPersonWorkspace />
              </div>

              {/* Card */}
              <div className="mt-8 bg-gradient-to-br from-[#25213b] to-[#1e1e2f] text-white px-8 py-6 rounded-2xl shadow-[0_0_25px_#00000099] text-center w-full border border-[#33314d] transition-transform duration-300 hover:scale-[1.07]">
                <h3 className="text-xl font-bold text-[#ffd700] mb-2">{education.title}</h3>
                <h4 className="text-sm text-[#85d7ff] mb-1">{education.institution}</h4>
                <p className="text-sm text-[#ffa45c] font-medium">{education.score}</p>
                <p className="text-xs text-gray-400 mt-2 italic">{education.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
