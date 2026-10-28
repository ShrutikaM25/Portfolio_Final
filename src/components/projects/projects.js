import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiX } from 'react-icons/fi';
import { featuredProjects, projectCategories, projectsData } from '../../utils/data/projects-data';
import SectionHeading from '../helper/section-heading';
import Reveal from '../helper/reveal';
import TiltCard from '../helper/tilt-card';

// Screenshot inside a browser frame that rotates in 3D as it scrolls past
const BrowserMockup = ({ image, name, reverse }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const direction = reverse ? 1 : -1;
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [22 * direction, 8 * direction, -6 * direction]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 4, -6]);

  return (
    <div ref={ref} className="[perspective:1400px]">
      <motion.div style={{ rotateY, rotateX, transformStyle: 'preserve-3d' }} className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-[32px] opacity-70 lg:-inset-6"
          style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.35), transparent 70%)' }}
        />
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/60"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-700/80 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-slate-500">
              {name.toLowerCase().replace(/\s+/g, '')}.app
            </span>
          </div>
          <img src={image} alt={`${name} screenshot`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const FeaturedProject = ({ project, index }) => {
  const reverse = index % 2 === 1;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <BrowserMockup image={project.image} name={project.name} reverse={reverse} />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Featured · 0{index + 1}</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{project.name}</h3>
        <p className="mt-1 text-lg text-slate-400">{project.subtitle}</p>

        <div className="mt-6 inline-flex items-baseline gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3">
          <span className="text-gradient font-display text-2xl font-semibold">{project.metric.value}</span>
          <span className="text-sm text-slate-300">{project.metric.label}</span>
        </div>

        <p className="mt-6 leading-relaxed text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>

        <a href={project.code} target="_blank" rel="noreferrer" className="btn-ghost mt-8">
          <FiGithub /> View on GitHub <FiArrowUpRight />
        </a>
      </Reveal>
    </article>
  );
};

// Screenshots fill the frame from the top; logos are shown whole on a soft backdrop
const imageClass = (project) =>
  project.imageFit === 'contain'
    ? 'object-contain bg-gradient-to-br from-violet-950/60 to-ink-900 p-8'
    : 'object-cover object-top';

const ProjectCard = ({ project, onOpen }) => (
  <TiltCard max={8} className="card flex h-full flex-col overflow-hidden rounded-2xl">
    <button type="button" onClick={() => onOpen(project)} className="text-left" aria-label={`Open details for ${project.name}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition-transform duration-700 group-hover:scale-110 ${imageClass(project)}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
        <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-widest text-cyan-200">
          {project.categories.join(' · ')}
        </span>
      </div>
    </button>

    <div className="flex flex-1 flex-col p-5">
      <h4 className="font-display text-lg font-semibold text-white">{project.name}</h4>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.slice(0, 4).map((tool) => (
          <span key={tool} className="chip !px-2.5 !text-[10px]">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-5">
        <button type="button" onClick={() => onOpen(project)} className="text-sm font-medium text-violet-300 hover:text-white">
          View details →
        </button>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="text-lg text-slate-400 hover:text-white"
        >
          <FiGithub />
        </a>
      </div>
    </div>
  </TiltCard>
);

const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-md [perspective:1200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, rotateX: 18, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, rotateX: -12, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-800 shadow-2xl shadow-black"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink-950/70 text-xl text-white hover:bg-ink-950"
        >
          <FiX />
        </button>
        <img src={project.image} alt={`${project.name} screenshot`} className={`aspect-video w-full ${imageClass(project)}`} />
        <div className="p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-300">{project.categories.join(' · ')}</p>
          <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="chip">
                {tool}
              </span>
            ))}
          </div>
          <a href={project.code} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            <FiGithub /> View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const visible = filter === 'All' ? projectsData : projectsData.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've"
          highlight="built"
          subtitle="Featured work from my résumé, followed by more builds across GenAI, full-stack and security."
        />

        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects */}
        <div className="mt-28">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">More projects</h3>
            <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={filter === category}
                  onClick={() => setFilter(category)}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                    filter === category ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter === category && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600/70 to-cyan-600/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard project={project} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
};

export default Projects;
