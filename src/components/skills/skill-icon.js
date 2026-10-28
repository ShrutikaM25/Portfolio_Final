import React from 'react';

// Icon files in utils/svg/skills are named after the skill (lowercase, no punctuation).
const icons = (() => {
  const map = {};
  const context = require.context('../../utils/svg/skills', false, /\.svg$/);
  context.keys().forEach((key) => {
    map[key.replace('./', '').replace('.svg', '').toLowerCase()] = context(key);
  });
  return map;
})();

// Resume names that differ from the icon file names
const aliases = {
  reactjs: 'react',
  html5: 'html',
  css3: 'css',
  tailwindcss: 'tailwind',
  firestore: 'firebase',
};

const normalize = (name) => name.toLowerCase().replace(/[^a-z0-9+#]/g, '');

export const getSkillIcon = (name) => {
  const key = normalize(name);
  return icons[key] || icons[aliases[key]] || null;
};

const monogram = (name) => {
  if (name.length <= 4) return name;
  const capitals = name.match(/[A-Z]/g);
  return capitals && capitals.length >= 2 ? capitals.slice(0, 2).join('') : name.slice(0, 2).toUpperCase();
};

// Renders the skill's logo, or a monogram when there is no icon file.
// Designed to sit on a light tile so dark logos (GitHub, Next.js) stay visible.
const SkillIcon = ({ name, className = 'h-5 w-5' }) => {
  const src = getSkillIcon(name);
  if (src) return <img src={src} alt="" className={`${className} object-contain`} loading="lazy" draggable="false" />;
  return (
    <span aria-hidden="true" className={`${className} flex items-center justify-center font-mono text-[9px] font-bold leading-none text-violet-700`}>
      {monogram(name)}
    </span>
  );
};

export default SkillIcon;
