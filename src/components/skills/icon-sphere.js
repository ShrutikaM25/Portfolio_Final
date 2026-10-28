import React, { useEffect, useMemo, useRef } from 'react';
import SkillIcon from './skill-icon';

const BASE_SPEED = { x: 0.0016, y: 0.0035 };

/**
 * Skill logos distributed on a rotating 3D sphere. Items are projected every frame
 * (so they always face the viewer); depth controls their scale and opacity.
 * Hovering steers the spin, dragging flings it; it rests when off-screen.
 */
const IconSphere = ({ items }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const motionState = useRef({
    rotX: 0,
    rotY: 0,
    vx: BASE_SPEED.x,
    vy: BASE_SPEED.y,
    targetVx: BASE_SPEED.x,
    targetVy: BASE_SPEED.y,
    dragging: false,
    lastX: 0,
    lastY: 0,
    radius: 200,
    visible: true,
  });

  // Evenly spread points on a unit sphere (Fibonacci lattice)
  const points = useMemo(
    () =>
      items.map((_, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / items.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        return [Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)];
      }),
    [items]
  );

  useEffect(() => {
    const container = containerRef.current;
    const state = motionState.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      state.targetVx = 0;
      state.targetVy = 0;
      state.vx = 0;
      state.vy = 0.0;
    }

    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // Leave room for the widest chip label so nothing spills past the container
      state.radius = Math.max(80, Math.min(width, height) / 2 - 48);
    });
    resize.observe(container);

    const visibility = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
    });
    visibility.observe(container);

    let frame;
    const render = () => {
      frame = requestAnimationFrame(render);
      if (!state.visible) return;

      if (!state.dragging) {
        state.vx += (state.targetVx - state.vx) * 0.04;
        state.vy += (state.targetVy - state.vy) * 0.04;
      }
      state.rotX += state.vx;
      state.rotY += state.vy;

      const cosX = Math.cos(state.rotX);
      const sinX = Math.sin(state.rotX);
      const cosY = Math.cos(state.rotY);
      const sinY = Math.sin(state.rotY);

      points.forEach(([x, y, z], i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        // Rotate around Y, then X
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const depth = (z2 + 1) / 2; // 0 = back, 1 = front
        const scale = 0.55 + depth * 0.65;
        el.style.transform = `translate3d(${x1 * state.radius}px, ${y2 * state.radius}px, 0) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = String(0.2 + depth * 0.8);
        el.style.zIndex = String(Math.round(depth * 100));
      });
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      visibility.disconnect();
    };
  }, [points]);

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') return;
    const state = motionState.current;
    state.dragging = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const state = motionState.current;
    if (state.dragging) {
      state.vy = (event.clientX - state.lastX) * 0.004;
      state.vx = -(event.clientY - state.lastY) * 0.004;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      return;
    }
    // Steer: spin toward the side the cursor is on
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    state.targetVy = dx * 0.03;
    state.targetVx = -dy * 0.03;
  };

  const handlePointerUp = () => {
    motionState.current.dragging = false;
  };

  const handlePointerLeave = () => {
    const state = motionState.current;
    state.dragging = false;
    state.targetVx = BASE_SPEED.x;
    state.targetVy = BASE_SPEED.y;
  };

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={`Skill globe: ${items.join(', ')}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="relative h-full w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
    >
      {/* Faint wireframe sphere for depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-[10%] rounded-full border border-violet-400/10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-[10%] rounded-full border border-cyan-400/10 [transform:rotateX(70deg)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[25%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)' }}
      />

      {items.map((name, i) => (
        <div
          key={name}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1 will-change-transform"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/95 shadow-lg shadow-violet-950/50">
            <SkillIcon name={name} className="h-6 w-6" />
          </span>
          <span className="whitespace-nowrap font-mono text-[10px] text-slate-300">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconSphere;
