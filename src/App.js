import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import Home from './components/home/home';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import AboutMe from './components/about/about';
import Projects from './components/projects/projects';
import WorkExperience from './components/experience/experience';
import Education from './components/education/education';
import ContactSection from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration (in ms)
      once: true,     // Animations occur only once
    });
  }, []);

  return (
    <div className="App">
      <Home />
      <Intro />
      <AboutMe />
      <Skills />
      <Router>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
      <WorkExperience />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;
