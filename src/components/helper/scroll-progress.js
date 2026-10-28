import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Thin gradient bar across the top that fills as the page is scrolled.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
    />
  );
};

export default ScrollProgress;
