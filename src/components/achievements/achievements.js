import React from "react";
import { FaTrophy, FaMedal, FaAward, FaLightbulb } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
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
      title: "Semifinalist - Flipkart Grid 3.0",
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
    // New Achievements
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
    {
      icon: <FaMedal className="text-[#85d7ff] text-5xl mb-4" />,
      title: "Participant - Seed Hackathon 2024",
      description:
        "Participated in the Seed Hackathon held in 2024.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative bg-[#1e1e2f] text-[#d3d3d3] py-12 px-6 lg:px-24"
    >
      <div className="absolute inset-0 bg-[#1e1e2f] opacity-80 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#85d7ff] to-[#ffa45c]"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          🌟 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-[#ffa45c]">Achievements</span>
        </h2>

        <p
          className="text-sm sm:text-md lg:text-lg text-[#e0e0e0] max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          A collection of milestones showcasing my journey in technology, arts,
          and leadership. Each step reflects growth and perseverance. 🚀
        </p>

        {/* Achievements Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative bg-[#252539] p-6 rounded-2xl shadow-xl group transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-[#3b3b5e] to-[#1e1e2f]"
              data-aos="fade-up"
              data-aos-duration={`${1400 + index * 200}`}
            >
              {/* Icon */}
              <div className="absolute top-0 right-0 m-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-center">{achievement.icon}</div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#ffdb70] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-[#d3d3d3] text-sm lg:text-base">
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
