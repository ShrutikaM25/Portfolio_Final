import React from 'react';
import { FiActivity, FiAward, FiBriefcase, FiCpu, FiHeart, FiLayers } from 'react-icons/fi';
import photo from '../../utils/Photo.jpg';
import { focusAreas } from '../../utils/data/personal-data';
import { beyondCode } from '../../utils/data/achievements';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import TiltCard from '../helper/tilt-card';

const focusIcons = { brain: FiCpu, stack: FiLayers, chart: FiActivity };

// Badges float at different depths above the tilting photo card
const depthBadges = [
  { text: "ISG President's Award", icon: FiAward, className: 'left-2 top-8 sm:-left-8', z: 80 },
  { text: 'LLMs · RAG · Agents', icon: FiCpu, className: 'right-2 top-[45%] sm:-right-10', z: 110 },
  { text: 'Software Engineer · Dell', icon: FiBriefcase, className: '-bottom-4 left-6', z: 60 },
];

const AboutMe = () => (
  <section id="about" className="relative py-24 sm:py-32">
    <div className="container-x">
      <SectionHeading index="01" eyebrow="About" title="An engineer who turns AI into" highlight="real products" />

      <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Layered 3D photo card */}
        <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <TiltCard max={14} hoverScale={1.03} className="rounded-[28px]">
            <div
              className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-violet-500/25 via-ink-800 to-cyan-500/20 p-3 shadow-2xl shadow-violet-950/50"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={photo}
                alt="Shrutika Malve"
                className="aspect-[4/5] w-full rounded-[20px] object-cover object-top"
                style={{ transform: 'translateZ(24px)' }}
              />
              {depthBadges.map(({ text, icon: Icon, className, z }) => (
                <span
                  key={text}
                  className={`absolute flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-ink-900/90 px-3.5 py-2 text-xs font-medium text-white shadow-xl shadow-black/50 sm:text-sm ${className}`}
                  style={{ transform: `translateZ(${z}px)` }}
                >
                  <Icon className="text-cyan-300" />
                  {text}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              I'm an <strong className="text-white">AI Software Engineer at Dell Technologies</strong> in Data Protection (DPSE), shipping
              production LLM, RAG and multi-agent systems for PowerProtect Data Manager and PowerProtect One.
            </p>
            <p>
              I built the product's RAG-based AI assistant end to end, designed a multi-agent platform with secure agent registration,
              and automated test generation across 22+ components. That work earned the{' '}
              <strong className="text-white">ISG President's Award (Q3)</strong>.
            </p>
            <p>
              Before that I built real-time LLM chat at <strong className="text-white">Altometa</strong> and AI phishing simulation at{' '}
              <strong className="text-white">Newton's Apple</strong>. I hold a BE in Computer Engineering from{' '}
              <strong className="text-white">PICT</strong> (CGPA 9.22) and am now pursuing an{' '}
              <strong className="text-white">M.Tech in AI & ML at BITS Pilani</strong>.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[area.icon];
              return (
                <Reveal key={area.title} delay={0.08 * i}>
                  <TiltCard max={12} className="card h-full rounded-2xl p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-lg text-white">
                      <Icon />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{area.text}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="card mt-4 flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-start">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pink-500/15 text-lg text-pink-300">
              <FiHeart />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-white">Beyond code</h3>
              <ul className="mt-1 space-y-1 text-sm text-slate-400">
                {beyondCode.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
