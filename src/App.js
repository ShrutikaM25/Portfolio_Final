import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';

import Navbar from './components/home/home';
import Intro from './components/intro/intro';
import AboutMe from './components/about/about';
import WorkExperience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Achievements from './components/achievements/achievements';
import ContactSection from './components/contact/contact';
import Footer from './components/footer/footer';
import ScrollProgress from './components/helper/scroll-progress';
import Spotlight from './components/helper/spotlight';

function App() {
  // The site used to have one route per section (/projects, /skills, ...).
  // Keep those links working by scrolling to the matching section.
  useEffect(() => {
    const id = window.location.hash.slice(1) || window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (!id) return;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      <main className="overflow-x-clip">
        <Intro />
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
