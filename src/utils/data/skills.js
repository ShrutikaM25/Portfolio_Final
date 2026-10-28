// Skills grouped as on the resume. Names are matched to icons in utils/svg/skills
// (see components/skills/skill-icon.js); skills without an icon get a monogram.
export const skillsCategorized = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / GenAI',
    items: [
      'LLMs',
      'RAG',
      'Multi-Agent Systems',
      'LangChain',
      'Prompt Engineering',
      'Vector Search',
      'ChromaDB',
      'FAISS',
      'Ollama',
      'Federated Learning',
      'TensorFlow',
      'Pandas',
    ],
  },
  {
    title: 'Backend & Frontend',
    items: ['FastAPI', 'Spring Boot', 'Flask', 'Node.js', 'REST APIs', 'WebSockets', 'Angular', 'React.js'],
  },
  {
    title: 'Testing & DevOps',
    items: ['JUnit 5', 'Pytest', 'Integration Testing', 'Test Automation', 'Docker', 'Maven', 'Git', 'Artifactory', 'Puppet', 'CI/CD'],
  },
  {
    title: 'Databases & Search',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'ZODB'],
  },
];

// Flat, de-duplicated list of every skill.
export const skillsData = [...new Set(skillsCategorized.flatMap((group) => group.items))];

// Skills without a logo that still belong on the 3D globe (shown as monograms).
// Everything else on the globe is picked automatically from skills that have a logo.
export const globeMonograms = ['LLMs', 'RAG', 'LangChain', 'FastAPI', 'ChromaDB', 'FAISS', 'Ollama', 'Redis', 'Elasticsearch'];
