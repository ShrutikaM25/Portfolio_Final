import React from "react";
import { FaTrophy, FaMedal, FaAward, FaLightbulb } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="text-[#ffdb70] text-5xl mb-4" />,
      title: "Winner - INC Technical Competition",
      description:
        "Secured 3rd place in a competitive event hosted by PICT during the INC technical fest.",
    },
    {
      icon: <FaTrophy className="text-[#ffa45c] text-5xl mb-4" />,
      title: "Winner - AIT Innovex Ideathon",
      description:
        "Crowned winner at the Innovex Ideathon hosted by AIT Pune for an impactful and innovative solution.",
    },
    {
      icon: <FaMedal className="text-[#85d7ff] text-5xl mb-4" />,
      title: "Runner-up - MMCOE Hackathon",
      description:
        "Achieved runner-up position at the Hackathon conducted by MMCOE, Pune.",
    },
    {
      icon: <FaTrophy className="text-[#ff70b3] text-5xl mb-4" />,
      title: "Finalist - Amdocs GenAI Hackathon",
      description:
        "Selected as one of the finalists in the prestigious GenAI Hackathon organized by Amdocs.",
    },
    {
      icon: <FaTrophy className="text-[#ffdb70] text-5xl mb-4" />,
      title: "Semi-Finalist - All India Women Hackathon",
      description:
        "Participated in a technical hackathon hosted by Persistent in August 2023.",
    },
    {
      icon: <FaMedal className="text-[#85d7ff] text-5xl mb-4" />,
      title: "Top 20 - Innovate and Inspire Hackathon",
      description:
        "Ranked in the top 20 in the coding round hosted by K. Ramakrishnan College of Engineering in June 2024.",
    },
    {
      icon: <FaAward className="text-[#ffa45c] text-5xl mb-4" />,
      title: "Website Development Head",
      description:
        "Led web development initiatives at GameDevUtopia Club from January to April 2024.",
    },
    {
      icon: <FaLightbulb className="text-[#d8b4fe] text-5xl mb-4" />,
      title: "Participant - Xiaomi Ode2Code 3.0",
      description:
        "Participated in a technical hackathon organized by Xiaomi India in July 2023.",
    },
    {
      icon: <FaTrophy className="text-[#ffdb70] text-5xl mb-4" />,
      title: "Semi-Finalist - Flipkart Grid 3.0",
      description:
        "Competed in Flipkart's national hackathon in July 2023.",
    },
    {
      icon: <FaMedal className="text-[#85d7ff] text-5xl mb-4" />,
      title: "2nd Prize - Bharatnatyam Competition",
      description:
        "Won 2nd prize in an inter-school competition hosted by Tata Motors Pvt. Ltd.",
    },
    {
      icon: <FaAward className="text-[#ffa45c] text-5xl mb-4" />,
      title: "Madhyama Purna Certification",
      description:
        "Completed the Gandharva Degree in Classical Dance Bharatnatyam.",
    },
    {
      icon: <FaTrophy className="text-[#ffdb70] text-5xl mb-4" />,
      title: "Semi-Finalist - Tachython 2024",
      description:
        "Participated in a 36-hour hackathon hosted by IIT Tirupati in 2024.",
    },
    {
      icon: <FaLightbulb className="text-[#d8b4fe] text-5xl mb-4" />,
      title: "Participant - ACM W's NariYukthi Techhackathon 2024",
      description:
        "Participated in the ACM W's NariYukthi Techhackathon held in November 2024.",
    },
    {
      icon: <FaTrophy className="text-[#ffdb70] text-5xl mb-4" />,
      title: "Participant - Amazon Sambhav Hackathon 2024",
      description:
        "Participated in the Amazon Sambhav Hackathon in 2024.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative bg-gradient-to-br from-[#0d0d0d] via-[#1c1c2c] to-[#2e2e3e] text-[#d3d3d3] py-20 px-6 lg:px-24 overflow-hidden"
    >
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[#ffdb70]/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#85d7ff]/20 blur-2xl rounded-full animate-float" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] via-[#ffa45c] to-[#ff70b3] drop-shadow-lg tracking-tight"
          data-aos="zoom-in"
        >
          🏆 Milestone Moments
        </h2>
        <p
          className="text-md sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-14"
          data-aos="fade-up"
        >
          Showcasing a journey through code, creativity, and achievement — where passion meets impact.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
        >
          {achievements.map((achievement, index) => (
            <div
            key={index}
            className={`relative bg-[#1f1f2f] p-6 rounded-3xl shadow-xl group transform transition-transform duration-500 hover:scale-[1.06] hover:ring-2 hover:ring-[#ffdb70]/70 hover:bg-gradient-to-br from-[#2e2e4d] to-[#1a1a2a] hover:shadow-[0_0_30px_#ffdb70aa] ${
              achievement.title.includes("Winner") || achievement.title.includes("Runner-up") || achievement.title.includes("Finalist")
                ? "ring-2 ring-[#ff70b3]/60 animate-pulse"
                : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            {/* Top badge for special wins */}
            {(achievement.title.includes("Winner") || achievement.title.includes("Runner-up") || achievement.title.includes("Finalist")) && (
              <div className="absolute top-0 left-0 bg-[#ff70b3] text-black font-bold px-3 py-1 text-xs rounded-br-xl z-20">
                Highlight
              </div>
            )}
              {/* Glow behind icon */}
              <div className="absolute top-0 right-0 m-4 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
                {achievement.icon}
              </div>
              <div className="relative z-10">
                <div className="mb-4 text-center scale-105 group-hover:scale-125 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#ffdb70] mb-2 tracking-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
