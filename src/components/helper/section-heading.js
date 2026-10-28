import React from 'react';
import Reveal from './reveal';

const SectionHeading = ({ index, eyebrow, title, highlight, subtitle, align = 'left' }) => (
  <Reveal className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
      <span className="text-cyan-300">{index}</span>
      <span className="mx-2 text-slate-600">/</span>
      {eyebrow}
    </p>
    <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
      {title} {highlight && <span className="text-gradient">{highlight}</span>}
    </h2>
    {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
