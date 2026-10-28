import React, { useState } from 'react';
import { FiAward, FiRotateCw } from 'react-icons/fi';
import { FaMedal, FaTrophy } from 'react-icons/fa';
import { topAchievements, otherAchievements } from '../../utils/data/achievements';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';

// Flips on hover (mouse), on tap, or with Enter/Space when focused
const FlipCard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${item.rank}, ${item.title}. ${item.detail}`}
      className={`flip-scene block h-64 w-full text-left ${flipped ? 'is-flipped' : ''}`}
    >
      <div className="flip-inner">
        {/* Front */}
        <div className="flip-face card flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/20 via-ink-800 to-ink-900 p-6">
          <div className="flex items-start justify-between">
            {item.icon === 'award' ? (
              <FaMedal className="text-3xl text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.5)]" />
            ) : (
              <FaTrophy className="text-3xl text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.5)]" />
            )}
            <FiRotateCw className="text-slate-500" aria-hidden="true" />
          </div>
          <div>
            <p className="text-gradient font-display text-4xl font-bold">{item.rank}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.org}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-face flip-back flex flex-col justify-center rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-600/25 via-ink-800 to-violet-700/25 p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-300">{item.rank} · {item.title}</p>
          <p className="mt-3 leading-relaxed text-slate-200">{item.detail}</p>
        </div>
      </div>
    </button>
  );
};

const Achievements = () => (
  <section id="achievements" className="relative py-24 sm:py-32">
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10"
      style={{ background: 'radial-gradient(45% 40% at 80% 40%, rgba(251,191,36,0.07), transparent 70%)' }}
    />
    <div className="container-x">
      <SectionHeading
        index="06"
        eyebrow="Achievements"
        title="Awards &"
        highlight="recognition"
        subtitle="An ISG President's Award at Dell, plus podium finishes and finals at national hackathons. Hover or tap a card to flip it."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topAchievements.map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i}>
            <FlipCard item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">More milestones</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherAchievements.map((item) => (
            <li key={item.title} className="card flex gap-3 rounded-xl p-4 transition hover:-translate-y-0.5 hover:border-violet-400/40">
              <FiAward className="mt-0.5 shrink-0 text-violet-300" />
              <div>
                <p className="text-sm font-medium text-slate-200">{item.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.org}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Achievements;
