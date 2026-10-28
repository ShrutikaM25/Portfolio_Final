import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import logo from '../../utils/2.png';
import resume from '../../utils/Resume.pdf';
import { personalData } from '../../utils/data/personal-data';

// Section ids rendered in App.js
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section crosses the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...navLinks.map((link) => link.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/5 bg-ink-950/75 py-3 backdrop-blur-lg' : 'border-b border-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
          <img src={logo} alt="" className="h-9 w-auto" />
          <span className="hidden font-display text-base font-semibold text-white sm:inline">{personalData.firstName}</span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main"
          className={`hidden items-center rounded-full border p-1.5 backdrop-blur-xl transition-colors duration-500 lg:flex ${
            scrolled ? 'border-white/10 bg-ink-900/80 shadow-xl shadow-black/40' : 'border-white/5 bg-white/[0.03]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                activeId === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600/60 to-cyan-600/50"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={resume} download="Shrutika_Malve_Resume.pdf" className="btn-ghost hidden !px-4 !py-2 sm:inline-flex">
            <FiDownload /> Résumé
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xl text-white lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu: a sibling of <header>, because the header's backdrop-filter
          would otherwise become the containing block for this fixed overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 px-6 pb-10 pt-6 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <img src={logo} alt="" className="h-9 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xl text-white"
              >
                <FiX />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-12 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -24, rotateY: -30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-baseline gap-4 py-2 font-display text-3xl font-semibold text-white"
                >
                  <span className="font-mono text-xs text-cyan-300">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex items-center gap-3">
              <a href={resume} download="Shrutika_Malve_Resume.pdf" className="btn-primary flex-1">
                <FiDownload /> Résumé
              </a>
              <a href={personalData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-ghost !px-4">
                <FiGithub />
              </a>
              <a href={personalData.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-ghost !px-4">
                <FiLinkedin />
              </a>
              <a href={`mailto:${personalData.email}`} aria-label="Email" className="btn-ghost !px-4">
                <FiMail />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
