import React from 'react';
import myImage from '../../utils/Photo.jpg'; // Replace with the actual path to your image
import './about.css';
import { Link } from 'react-router-dom/dist';

const AboutMe = () => {
  
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#121212] via-[#1a1a2d] to-[#2a2a3f] text-[#d3d3d3] py-8 px-4 lg:py-12 lg:px-24"
    >
      {/* Image Section */}
      <div
        className="relative mb-6 lg:mb-0 lg:mr-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden">
          <img
            src={myImage}
            alt="Shrutika Malve"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative Circle */}
        <div className="absolute broken-circle animate-spin-slow"></div>
      </div>

      {/* Text Section */}
<div
  className="text-center lg:text-left lg:w-2/3 space-y-4"
  data-aos="fade-left"
  data-aos-duration="1000"
>
<h2
  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center gap-2"
  data-aos="fade-down"
  data-aos-duration="800"
>
  <span role="img" aria-label="laptop woman">👩‍💻</span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-[#ffa45c]">
    About <span className="bg-gradient-to-r from-[#85d7ff] to-[#d8b4fe] bg-clip-text text-transparent">Me</span>
  </span>
</h2>


  <p
  className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
  data-aos="fade-up"
  data-aos-duration="1200"
>
  Hi, I’m <strong className="text-[#ffd700]">Shrutika Malve</strong> 🌟 — a final-year Computer Engineering student at <strong className="text-[#ffd700]">PICT</strong> (GPA: <strong className="text-[#ffa45c]">9.3</strong>), currently interning at <strong className="text-[#85d7ff]">Altometa</strong>. I’m passionate about building scalable systems that blend tech with real-world impact.
</p>

<p
  className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
  data-aos="fade-up"
  data-aos-duration="1300"
>
  My BE project focuses on <strong className="text-[#ffa45c]">Explainable AI for Anomaly Detection</strong>, integrating LLaMA3 for interpretability, real-time logging, and ZODB-backed storage. It also features file categorization, MIME verification, and clustered anomaly alerts.
</p>

<p
  className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
  data-aos="fade-up"
  data-aos-duration="1400"
>
  I’m exploring <strong className="text-[#85d7ff]">Federated Learning</strong> with <strong className="text-[#d8b4fe]">Differential Privacy</strong> as a research topic, and have worked with RL, backend optimization, and WebSocket streaming.
</p>

<p
  className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
  data-aos="fade-up"
  data-aos-duration="1500"
>
I've also been recognized as a <strong className="text-[#85d7ff]">Winner at INC and AIT competitions</strong> 🏆, where my solutions stood out for innovation and technical depth. Alongside internships at <strong>Dell</strong>, <strong>Altometa</strong>, <strong>Newton’s Apple</strong>, and <strong>Downpour</strong>, I’ve built projects like a <strong className="text-[#85d7ff]">Mental Health Analyzer</strong> and <strong className="text-[#ffa45c]">ATS Tracker</strong>. Check out my{' '}
  <Link to="/experience" className="text-[#ffdb70] font-bold underline hover:text-[#ffd85f]">Experience</Link> &{' '}
  <Link to="/projects" className="text-[#ffdb70] font-bold underline hover:text-[#ffd85f]">Projects</Link>.
</p>

<p
  className="text-sm sm:text-xs lg:text-lg text-[#e0e0e0]"
  data-aos="fade-up"
  data-aos-duration="1600"
>
  Outside of tech, I’m a certified <strong className="text-[#ffa45c]">Bharatanatyam</strong> dancer (<em className="italic text-[#d8b4fe]">Madhyama Purna</em>) and enjoy origami, DIY crafts, and pearl jewelry design ✨
</p>

</div>

    </section>
  );
};

export default AboutMe;
