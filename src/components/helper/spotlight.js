import React, { useEffect, useRef } from 'react';

// Soft glow that follows the cursor (mouse/trackpad only).
const Spotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion || !ref.current) return undefined;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current.style.setProperty('--x', `${event.clientX}px`);
        ref.current.style.setProperty('--y', `${event.clientY}px`);
        ref.current.style.opacity = '1';
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.07), transparent 60%)',
      }}
    />
  );
};

export default Spotlight;
