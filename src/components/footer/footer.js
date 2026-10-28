import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import logo from '../../utils/2.png';
import { personalData } from '../../utils/data/personal-data';
import { navLinks } from '../home/home';

const socials = [
  { href: personalData.github, label: 'GitHub', icon: FiGithub },
  { href: personalData.linkedIn, label: 'LinkedIn', icon: FiLinkedin },
  { href: `mailto:${personalData.email}`, label: 'Email', icon: FiMail },
];

const Footer = () => (
  <footer className="relative border-t border-white/10 py-12">
    <div className="container-x flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div className="max-w-xs">
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-9 w-auto" />
          <span className="font-display text-lg font-semibold text-white">{personalData.name}</span>
        </a>
        <p className="mt-3 text-sm text-slate-400">{personalData.title}. Building real-time, LLM-powered products from Pune, India.</p>
      </div>

      <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="text-slate-400 transition hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/60 hover:text-white"
          >
            <Icon />
          </a>
        ))}
        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 text-white transition hover:-translate-y-1"
        >
          <FiArrowUp />
        </a>
      </div>
    </div>

    <div className="container-x mt-10 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
      <p>Built with React, Three.js & Framer Motion.</p>
    </div>
  </footer>
);

export default Footer;
