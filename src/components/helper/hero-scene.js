import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A rotating "neural network" globe: nodes on a sphere, links between neighbours,
// and signal pulses travelling along the links. Drag to spin, the pointer tilts it.

const NODE_COUNT = 260;
const RADIUS = 2.1;
const LINK_DISTANCE = 0.6;
const PULSE_COUNT = 46;

const VIOLET = new THREE.Color('#8b5cf6');
const CYAN = new THREE.Color('#22d3ee');
const PINK = new THREE.Color('#f0abfc');

// Small deterministic PRNG so the network looks the same on every load.
const mulberry32 = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const buildNetwork = () => {
  const random = mulberry32(25);
  const nodes = [];
  const nodePositions = new Float32Array(NODE_COUNT * 3);
  const nodeColors = new Float32Array(NODE_COUNT * 3);
  const color = new THREE.Color();

  for (let i = 0; i < NODE_COUNT; i += 1) {
    // Fibonacci sphere with a little jitter so it doesn't look like a lattice
    const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = RADIUS * (0.94 + random() * 0.12);
    const v = new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
    nodes.push(v);
    v.toArray(nodePositions, i * 3);
    color.copy(VIOLET).lerp(CYAN, (v.y / RADIUS + 1) / 2);
    if (random() > 0.93) color.copy(PINK);
    color.toArray(nodeColors, i * 3);
  }

  const links = [];
  for (let i = 0; i < NODE_COUNT; i += 1) {
    for (let j = i + 1; j < NODE_COUNT; j += 1) {
      if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) links.push([i, j]);
    }
  }

  const linkPositions = new Float32Array(links.length * 6);
  const linkColors = new Float32Array(links.length * 6);
  links.forEach(([a, b], k) => {
    nodes[a].toArray(linkPositions, k * 6);
    nodes[b].toArray(linkPositions, k * 6 + 3);
    linkColors.set(nodeColors.subarray(a * 3, a * 3 + 3), k * 6);
    linkColors.set(nodeColors.subarray(b * 3, b * 3 + 3), k * 6 + 3);
  });

  const pulses = Array.from({ length: PULSE_COUNT }, () => ({
    link: links[Math.floor(random() * links.length)],
    speed: 0.25 + random() * 0.5,
    offset: random(),
  }));

  return { nodes, nodePositions, nodeColors, linkPositions, linkColors, pulses };
};

// Soft round sprite so points render as glowing dots instead of squares.
const useDotTexture = () =>
  useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);

const Network = ({ drag, reduceMotion }) => {
  const spin = useRef();
  const tilt = useRef();
  const core = useRef();
  const pulseAttr = useRef();
  const data = useMemo(buildNetwork, []);
  const dot = useDotTexture();
  const pulsePositions = useMemo(() => new Float32Array(PULSE_COUNT * 3), []);

  useFrame((state, delta) => {
    const d = drag.current;
    const autoSpin = reduceMotion ? 0 : 0.12;

    // Drag adds velocity that decays back to the gentle auto-spin
    spin.current.rotation.y += autoSpin * delta + d.vx;
    spin.current.rotation.x = THREE.MathUtils.clamp(spin.current.rotation.x + d.vy, -0.6, 0.6);
    if (!d.dragging) {
      d.vx *= 0.94;
      d.vy *= 0.94;
    }

    // Lean toward the pointer for parallax depth
    const { x, y } = state.pointer;
    tilt.current.rotation.x += (-y * 0.25 - tilt.current.rotation.x) * 0.05;
    tilt.current.rotation.z += (x * 0.12 - tilt.current.rotation.z) * 0.05;

    if (!reduceMotion) {
      const t = state.clock.elapsedTime;
      core.current.rotation.x += delta * 0.25;
      core.current.rotation.y -= delta * 0.35;
      core.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.05);

      // Move each pulse along its link
      data.pulses.forEach((pulse, i) => {
        const progress = (t * pulse.speed + pulse.offset) % 1;
        const a = data.nodes[pulse.link[0]];
        const b = data.nodes[pulse.link[1]];
        pulsePositions[i * 3] = a.x + (b.x - a.x) * progress;
        pulsePositions[i * 3 + 1] = a.y + (b.y - a.y) * progress;
        pulsePositions[i * 3 + 2] = a.z + (b.z - a.z) * progress;
      });
      if (pulseAttr.current) pulseAttr.current.needsUpdate = true;
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        {/* Nodes */}
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={NODE_COUNT} array={data.nodePositions} itemSize={3} />
            <bufferAttribute attach="attributes-color" count={NODE_COUNT} array={data.nodeColors} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial
            size={0.09}
            map={dot}
            vertexColors
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Links */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={data.linkPositions.length / 3}
              array={data.linkPositions}
              itemSize={3}
            />
            <bufferAttribute attach="attributes-color" count={data.linkColors.length / 3} array={data.linkColors} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial vertexColors transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
        </lineSegments>

        {/* Signal pulses */}
        <points frustumCulled={false}>
          <bufferGeometry>
            <bufferAttribute
              ref={pulseAttr}
              attach="attributes-position"
              count={PULSE_COUNT}
              array={pulsePositions}
              itemSize={3}
              usage={THREE.DynamicDrawUsage}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.16}
            map={dot}
            color="#e0f2fe"
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.45} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
        </mesh>
      </group>

      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[2.85, 0.006, 8, 220]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.5, 0.3]}>
        <torusGeometry args={[3.2, 0.004, 8, 220]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const FallbackOrb = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/50 to-cyan-400/40 shadow-[0_0_120px_rgba(139,92,246,0.5)]" />
  </div>
);

const HeroScene = () => {
  const wrapper = useRef(null);
  const drag = useRef({ dragging: false, vx: 0, vy: 0, lastX: 0, lastY: 0 });
  const [visible, setVisible] = useState(true);
  const reduceMotion = useMemo(prefersReducedMotion, []);

  // Stop rendering while the hero is scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    if (wrapper.current) observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  // Mouse/pen drag spins the globe; touch is left alone so the page still scrolls
  const onPointerDown = (event) => {
    if (event.pointerType === 'touch') return;
    drag.current.dragging = true;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    const d = drag.current;
    if (!d.dragging) return;
    d.vx = (event.clientX - d.lastX) * 0.004;
    d.vy = (event.clientY - d.lastY) * 0.004;
    d.lastX = event.clientX;
    d.lastY = event.clientY;
  };
  const onPointerUp = () => {
    drag.current.dragging = false;
  };

  return (
    <div
      ref={wrapper}
      className="h-full w-full cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        fallback={<FallbackOrb />}
      >
        <Network drag={drag} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
