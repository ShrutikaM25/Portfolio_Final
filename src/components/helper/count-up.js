import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

// 3200 -> "3,200"; keeps a fixed number of decimals (9.22)
const format = (value, decimals) =>
  value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts from 0 to `value` once it scrolls into view.
const CountUp = ({ value, decimals = 0, suffix = '', duration = 1.8 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(format(0, decimals));

  useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion()) {
      setDisplay(format(value, decimals));
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
