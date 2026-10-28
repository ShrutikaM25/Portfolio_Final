# Shrutika Malve – Portfolio

Single-page portfolio built with React (Create React App), Tailwind CSS, Three.js via React Three Fiber, and Framer Motion.

Live: https://shrutikam.netlify.app

## What's inside

- **Hero:** an interactive 3D neural-network globe (drag to spin, leans toward the cursor) over a receding 3D grid, with count-up stats.
- **About:** a layered 3D photo card whose badges float at different depths.
- **Experience:** a timeline whose rail fills on scroll, with impact metrics per role and a collapsible list of earlier roles.
- **Projects:** featured projects in 3D browser mockups that rotate as you scroll, plus a filterable grid and a detail modal.
- **Skills:** a draggable 3D icon globe and grouped skill lists.
- **Education:** an animated CGPA ring and score bars.
- **Achievements:** 3D flip cards for podium finishes, plus a list of other milestones.
- **Contact:** an EmailJS form, copy-to-clipboard email, and social links.

Motion respects `prefers-reduced-motion`. The 3D scenes pause when scrolled off-screen, and three.js loads in a separate chunk.

## Editing content

All content lives in `src/utils/data/`:

| File | Controls |
| --- | --- |
| `personal-data.js` | Name, roles, tagline, contact details, hero stats, "What I do" cards |
| `experience.js` | Résumé roles (metrics, highlights, stack) and earlier roles |
| `projects-data.js` | Featured projects, the project grid and filter categories |
| `skills.js` | Skill groups (also feeds the 3D globe) |
| `educations.js` | Degree and school scores |
| `achievements.js` | Podium flip cards, other milestones, "Beyond code" |

Skill logos come from `src/utils/svg/skills/`, matched by name. Skills without a logo show a monogram. The résumé download is `src/utils/Resume.pdf`.

## Scripts

- `npm start`: development server at http://localhost:3000
- `npm run build`: production build in `build/`
- `npm test`: content consistency tests

## Contact form

Set these in `.env` (EmailJS):

```
REACT_APP_EMAILJS_USER_ID=
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
```

The template receives `name`, `email` and `message`.

## Deploying

`public/_redirects` sends every path to `index.html` on Netlify, so old links like `/projects` still work. They scroll to the matching section.
