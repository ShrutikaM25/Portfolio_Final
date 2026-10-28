import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import resume from '../../utils/Resume.pdf';
import { personalData, stats } from '../../utils/data/personal-data';
import CountUp from '../helper/count-up';

// three.js is heavy, so the globe loads in its own chunk after the text renders
const HeroScene = lazy(() => import('../helper/hero-scene'));

const floatingChips = [
  { label: 'RAG · ChromaDB', className: 'left-[2%] top-[12%]', delay: '0s' },
  { label: 'Multi-Agent Systems', className: 'right-[0%] top-[22%]', delay: '1.2s' },
  { label: 'FastAPI · Go', className: 'bottom-[24%] left-[0%]', delay: '2.1s' },
  { label: 'LangChain · Ollama', className: 'bottom-[10%] right-[8%]', delay: '0.6s' },
];

// Cycles through roles with a 3D flip on the X axis
const RoleRotator = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex [perspective:600px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="inline-block origin-center font-semibold text-cyan-300"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const wordVariants = {
  hidden: { opacity: 0, rotateX: -80, y: 40 },
  show: (i) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
});

const Intro = () => {
  const [firstName, lastName] = personalData.name.split(' ');

  return (
    <section id="home" className="relative isolate overflow-hidden pb-16 pt-28 lg:pt-32">
      {/* Backdrop: aurora glow + receding 3D grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 50% at 75% 35%, rgba(139,92,246,0.22), transparent 70%), radial-gradient(40% 40% at 10% 75%, rgba(34,211,238,0.10), transparent 70%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-floor" />
      </div>

      <div className="container-x grid items-center gap-6 lg:min-h-[calc(100svh-15rem)] lg:grid-cols-[1.05fr_1fr]">
        {/* Text */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.span {...fadeUp(0)} className="chip mb-6 !text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {personalData.currentRole} @ {personalData.currentCompany}
          </motion.span>

          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-white [perspective:800px] sm:text-7xl lg:text-8xl">
            <motion.span custom={0} variants={wordVariants} initial="hidden" animate="show" className="inline-block origin-bottom">
              {firstName}
            </motion.span>
            <br />
            <motion.span custom={1} variants={wordVariants} initial="hidden" animate="show" className="text-gradient inline-block origin-bottom pb-2">
              {lastName}
            </motion.span>
          </h1>

          <motion.p {...fadeUp(0.45)} className="mt-6 text-xl text-slate-300 sm:text-2xl">
            <span className="text-slate-400">I'm a </span>
            <RoleRotator roles={personalData.roles} />
          </motion.p>

          <motion.p {...fadeUp(0.55)} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
            {personalData.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore my work <FiArrowRight />
            </a>
            <a href={resume} download="Shrutika_Malve_Resume.pdf" className="btn-ghost w-full sm:w-auto">
              <FiDownload /> Download résumé
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.75)} className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[
              { href: personalData.github, label: 'GitHub', icon: <FiGithub /> },
              { href: personalData.linkedIn, label: 'LinkedIn', icon: <FiLinkedin /> },
              { href: `mailto:${personalData.email}`, label: 'Email', icon: <FiMail /> },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/60 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* 3D globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[340px] w-full max-w-[560px] sm:h-[440px] lg:h-[560px]"
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>

          {floatingChips.map((chip) => (
            <span
              key={chip.label}
              className={`chip pointer-events-none absolute hidden animate-float bg-ink-900/80 !text-xs shadow-lg shadow-black/40 backdrop-blur sm:inline-flex ${chip.className}`}
              style={{ animationDelay: chip.delay }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {chip.label}
            </span>
          ))}

          <p className="pointer-events-none absolute inset-x-0 bottom-0 hidden text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500 lg:block">
            drag to spin the network
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container-x mt-12">
        <motion.dl {...fadeUp(0.9)} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card px-5 py-4 text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </dd>
              <dd className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Intro;
