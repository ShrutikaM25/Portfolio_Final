// Single source of truth for identity, contact details and headline numbers.
// Everything here comes from the latest resume (src/utils/Resume.pdf).
export const personalData = {
  name: 'Shrutika Malve',
  firstName: 'Shrutika',
  title: 'AI Software Engineer',
  currentRole: 'Software Engineer',
  currentCompany: 'Dell Technologies',
  roles: ['AI Software Engineer', 'LLM & RAG Systems Builder', 'Multi-Agent Systems Engineer', 'Full Stack Developer'],
  tagline:
    'I ship production LLM, RAG and multi-agent systems for enterprise data-protection platforms at Dell Technologies, owning the full lifecycle from design to deployment.',
  location: 'Pune, Maharashtra, India',
  email: 'shrutikam03@gmail.com',
  phone: '+91 90284 83896',
  github: 'https://github.com/ShrutikaM25',
  linkedIn: 'https://linkedin.com/in/shrutika-malve',
  website: 'https://shrutikam.netlify.app',
};

export const stats = [
  { value: 95, suffix: '%', label: 'Less time to create tests (22+ components)' },
  { value: 3200, suffix: '+', label: 'Lines of Go adapter code AI-generated' },
  { value: 20, suffix: 'K+', label: 'Anomalies tracked / month' },
  { value: 9.22, decimals: 2, label: 'CGPA, Computer Engg. at PICT' },
];

// "What I do" cards in the About section
export const focusAreas = [
  {
    title: 'GenAI, RAG & Agents',
    text: 'RAG assistants on ChromaDB and FAISS, multi-agent platforms with secure agent registration, prompt engineering and Ollama.',
    icon: 'brain',
  },
  {
    title: 'Backend & Full Stack',
    text: 'FastAPI, Spring Boot, Go and Node services with Angular and React front ends, REST APIs and WebSocket progress.',
    icon: 'stack',
  },
  {
    title: 'Quality & DevOps',
    text: 'Automated JUnit and Pytest generation, integration testing, Docker, Maven, Artifactory, Puppet and CI/CD.',
    icon: 'chart',
  },
];
