import React from 'react';
import { globeMonograms, skillsCategorized, skillsData } from '../../utils/data/skills';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import IconSphere from './icon-sphere';
import SkillIcon, { getSkillIcon } from './skill-icon';

// Logos read well on the globe; a wall of monograms doesn't, so only a few key ones join
const globeSkills = skillsData.filter((skill) => getSkillIcon(skill) || globeMonograms.includes(skill));

const Skills = () => (
  <section id="skills" className="relative py-24 sm:py-32">
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10"
      style={{ background: 'radial-gradient(40% 40% at 25% 50%, rgba(34,211,238,0.08), transparent 70%)' }}
    />
    <div className="container-x">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="My"
        highlight="toolkit"
        subtitle="Languages, frameworks and AI tooling I use day to day. Hover or drag the globe to explore."
      />

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal className="relative mx-auto aspect-square w-full max-w-[520px] lg:sticky lg:top-28">
          <IconSphere items={globeSkills} />
        </Reveal>

        <div className="space-y-4">
          {skillsCategorized.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i} className="card rounded-2xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900/70 py-1.5 pl-1.5 pr-3 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/50"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-white/95">
                      <SkillIcon name={skill} className="h-4 w-4" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
