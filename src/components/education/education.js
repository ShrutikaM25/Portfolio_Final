import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCheck } from 'react-icons/fi';
import { educations } from '../../utils/data/educations';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import TiltCard from '../helper/tilt-card';

const RING_RADIUS = 54;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

// Circular gauge that fills to the score when scrolled into view
const ScoreRing = ({ score, max, label }) => (
  <div className="relative h-36 w-36 shrink-0" style={{ transform: 'translateZ(50px)' }}>
    <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
      <defs>
        <linearGradient id="score-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r={RING_RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
      <motion.circle
        cx="64"
        cy="64"
        r={RING_RADIUS}
        fill="none"
        stroke="url(#score-gradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={RING_LENGTH}
        initial={{ strokeDashoffset: RING_LENGTH }}
        whileInView={{ strokeDashoffset: RING_LENGTH * (1 - score / max) }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="font-display text-4xl font-semibold text-white">{score}</span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">{label}</span>
    </div>
  </div>
);

function Education() {
  const degree = educations.find((item) => item.featured);
  const others = educations.filter((item) => !item.featured);

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Education" title="Academic" highlight="foundation" />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <TiltCard max={7} className="card h-full rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center" style={{ transformStyle: 'preserve-3d' }}>
                <ScoreRing score={degree.score} max={degree.scoreMax} label={degree.scoreLabel} />
                <div>
                  <span className="chip">{degree.duration}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{degree.title}</h3>
                  <p className="mt-1 text-cyan-300">{degree.institution}</p>
                </div>
              </div>
              <ul className="mt-8 space-y-2.5">
                {degree.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300 sm:text-base">
                    <FiCheck className="mt-1 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <div className="grid gap-6">
            {others.map((item, i) => (
              <Reveal key={item.id} delay={0.1 * (i + 1)}>
                <TiltCard max={8} className="card h-full rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-lg text-violet-300">
                      <FiBookOpen />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                        {item.score ? (
                          <span className="text-gradient font-display text-2xl font-semibold">{item.score}%</span>
                        ) : (
                          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            {item.status}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                      <p className="mt-1 font-mono text-[11px] text-slate-500">{item.duration}</p>
                      {item.score && (
                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.score / item.scoreMax) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
