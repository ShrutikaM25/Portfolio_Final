import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FiAward, FiChevronDown } from 'react-icons/fi';
import { experiences, earlierExperiences } from '../../utils/data/experience';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import TiltCard from '../helper/tilt-card';

const VISIBLE_HIGHLIGHTS = 4;

// Tailwind needs literal class names, so map metric counts to grid layouts here
const metricGrid = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
};

const ExperienceItem = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = exp.highlights.length - VISIBLE_HIGHLIGHTS;
  const highlights = expanded ? exp.highlights : exp.highlights.slice(0, VISIBLE_HIGHLIGHTS);

  return (
    <li className="relative pl-16 sm:pl-24">
      <span className="absolute left-0 top-2 grid h-10 w-10 place-items-center overflow-hidden rounded-full border-2 border-violet-400/70 bg-white shadow-[0_0_0_6px_#05050a,0_0_30px_rgba(139,92,246,0.45)] sm:h-12 sm:w-12">
        <img src={exp.logo} alt="" className="h-full w-full object-contain p-1" />
      </span>

      <Reveal>
        <TiltCard max={4} hoverScale={1.01} className="card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{exp.position}</h3>
              <p className="mt-1 text-cyan-300">{exp.company}</p>
            </div>
            <span className="chip">{exp.duration}</span>
          </div>

          {exp.badge && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
              <FiAward /> {exp.badge}
            </p>
          )}

          <dl className={`mt-6 grid grid-cols-2 gap-3 ${metricGrid[exp.metrics.length] || 'sm:grid-cols-3'}`}>
            {exp.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-ink-900/70 p-4">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="text-gradient whitespace-nowrap font-display text-xl font-semibold sm:text-2xl lg:text-3xl">
                  {metric.value}
                </dd>
                <dd className="mt-1 text-xs text-slate-400">{metric.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 space-y-2.5">
            {highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                {point}
              </li>
            ))}
          </ul>
          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              className="mt-3 inline-flex items-center gap-1.5 pl-[18px] text-sm font-medium text-violet-300 hover:text-white"
            >
              {expanded ? 'Show less' : `Show ${hidden} more`}
              <FiChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </TiltCard>
      </Reveal>
    </li>
  );
};

const WorkExperience = () => {
  const timelineRef = useRef(null);
  const [showEarlier, setShowEarlier] = useState(false);

  // The gradient rail fills as the timeline scrolls past
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 55%'] });
  const railScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(40% 35% at 0% 30%, rgba(139,92,246,0.10), transparent 70%)' }}
      />
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've"
          highlight="shipped"
          subtitle="From production GenAI at Dell Technologies to real-time LLM systems and security tooling, each role with measurable impact."
        />

        <div ref={timelineRef} className="relative">
          <div aria-hidden="true" className="absolute bottom-2 left-5 top-2 w-px bg-white/10 sm:left-6" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: railScale }}
            className="absolute bottom-2 left-5 top-2 w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-400 to-cyan-400 sm:left-6"
          />

          <ol className="space-y-10">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </ol>
        </div>

        {/* Earlier roles */}
        <div className="mt-14 pl-16 sm:pl-24">
          <button
            type="button"
            onClick={() => setShowEarlier((open) => !open)}
            aria-expanded={showEarlier}
            className="btn-ghost"
          >
            {showEarlier ? 'Hide' : 'Show'} earlier experience ({earlierExperiences.length})
            <FiChevronDown className={`transition-transform duration-300 ${showEarlier ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence initial={false}>
            {showEarlier && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 pt-6 sm:grid-cols-2">
                  {earlierExperiences.map((exp) => (
                    <div key={exp.id} className="card flex gap-4 rounded-2xl p-5">
                      <img src={exp.logo} alt="" className="h-11 w-11 shrink-0 rounded-xl bg-white object-contain p-1" />
                      <div>
                        <h4 className="font-semibold text-white">{exp.position}</h4>
                        <p className="text-sm text-cyan-300">{exp.company}</p>
                        <p className="mt-0.5 font-mono text-[11px] text-slate-500">{exp.duration}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{exp.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
