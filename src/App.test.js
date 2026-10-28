import { featuredProjects, projectsData, projectCategories } from './utils/data/projects-data';
import { experiences, earlierExperiences } from './utils/data/experience';
import { educations } from './utils/data/educations';
import { skillsCategorized, skillsData } from './utils/data/skills';
import { topAchievements, otherAchievements } from './utils/data/achievements';
import { personalData, stats } from './utils/data/personal-data';

// Content checks: duplicate ids break React keys, and empty fields render blank cards.
const unique = (items) => new Set(items).size === items.length;

test('contact details are filled in', () => {
  ['name', 'email', 'phone', 'github', 'linkedIn'].forEach((key) => expect(personalData[key]).toBeTruthy());
  expect(personalData.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  expect(stats.length).toBeGreaterThan(0);
});

test('projects have unique ids, required fields and known categories', () => {
  const all = [...featuredProjects, ...projectsData];
  expect(unique(all.map((p) => p.id))).toBe(true);
  all.forEach((p) => {
    expect(p.name).toBeTruthy();
    expect(p.description).toBeTruthy();
    expect(p.tools.length).toBeGreaterThan(0);
  });
  projectsData.forEach((p) => p.categories.forEach((c) => expect(projectCategories).toContain(c)));
});

test('experience entries have unique ids and content', () => {
  const all = [...experiences, ...earlierExperiences];
  expect(unique(all.map((e) => e.id))).toBe(true);
  experiences.forEach((e) => {
    expect(e.metrics.length).toBeGreaterThan(0);
    expect(e.highlights.length).toBeGreaterThan(0);
  });
});

test('education has one featured entry and scores (or a status) for each', () => {
  expect(educations.filter((e) => e.featured)).toHaveLength(1);
  expect(educations.find((e) => e.featured).score).toBeTruthy();
  educations.forEach((e) => {
    if (e.score === undefined) {
      expect(e.status).toBeTruthy();
      return;
    }
    expect(e.score).toBeGreaterThan(0);
    expect(e.score).toBeLessThanOrEqual(e.scoreMax);
  });
});

test('skills and achievements are populated without duplicates', () => {
  skillsCategorized.forEach((group) => expect(group.items.length).toBeGreaterThan(0));
  expect(unique(skillsData)).toBe(true);
  expect(unique([...topAchievements, ...otherAchievements].map((a) => a.title))).toBe(true);
});
