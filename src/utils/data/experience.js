import NewtonsApple from '../../utils/na2.png';
import Downpour from '../../utils/downpour.jpeg';
import Dell from '../../utils/dell.jpg';
import Pict from '../../utils/pict.jpeg';
import gamedev from '../../utils/gamedev.jpeg';
import nullclass from '../../utils/nullclass.png';
import Altometa from '../../utils/Altometa.jpeg';

// Roles on the current resume, newest first.
export const experiences = [
  {
    id: 'dell-se',
    position: 'Software Engineer',
    company: 'Dell Technologies · Data Protection (DPSE)',
    duration: 'Aug 2025 – Present',
    logo: Dell,
    badge: "ISG President's Award (Q3)",
    metrics: [
      { value: '95%', label: 'Less test-creation time' },
      { value: '70–95%', label: 'Code coverage (from 30%)' },
      { value: '6wk→3d', label: 'Prototype build time' },
      { value: '<5%', label: 'Migration errors (from 30%)' },
    ],
    highlights: [
      'Built and shipped a RAG-based AI assistant for PowerProtect Data Manager and PowerProtect One: PDF and knowledge-base ingestion, ChromaDB retrieval and conversational context, deployed via RPM, Artifactory, SSL, Puppet, Eureka and Zuul.',
      'Designed a multi-agent platform with external-agent registration, asymmetric key-exchange authentication, health polling and remote execution; delivered the Restore Agent as a standalone FastAPI/Docker service.',
      'Re-architected agent boundaries with a configuration-driven tool framework: 36 tools consolidated into shared JSON (40+ files down to 19) and 18 data-retrieval capabilities moved into a dedicated PPDM agent.',
      'Built an AI-powered migration framework that turns product manuals into YAML and generates 3,200+ lines of Go adapter code, with an Angular wizard and WebSocket progress.',
      'Automated JUnit generation and quality analysis across 22+ PowerProtect One components.',
      'Prototyped a federated-learning anomaly detector in Go (115+ tests, 50 simulated clients) with an ensemble reaching a 2% false-positive rate.',
      'Resolved release-blocking defects for the 20.4 AI Assistant release across task completion, telemetry and scheduled-report routing.',
    ],
    techStack: ['Python', 'Go', 'Java', 'FastAPI', 'Spring Boot', 'ChromaDB', 'Multi-Agent Systems', 'Angular', 'WebSockets', 'Docker', 'JUnit 5', 'Artifactory', 'Puppet'],
  },
  {
    id: 'altometa',
    position: 'Analyst Trainee',
    company: 'Altometa Consulting',
    duration: 'Jan 2025 – Jun 2025',
    logo: Altometa,
    metrics: [
      { value: '−500ms', label: 'LLM response time' },
      { value: '+40%', label: 'Throughput' },
      { value: '+30%', label: 'Model accuracy' },
    ],
    highlights: [
      'Built a real-time LLM chat system with streaming responses over WebSockets.',
      'Added OCR-based PDF ingestion and versioned FAISS indexing for retrieval.',
      'Composed the pipeline from modular MCP workflows.',
    ],
    techStack: ['Python', 'Django', 'LangChain', 'FAISS', 'MCP', 'OCR', 'WebSockets', 'React.js'],
  },
  {
    id: 'dell',
    position: 'Project Intern',
    company: 'Dell Technologies',
    duration: 'Aug 2024 – Apr 2025',
    logo: Dell,
    metrics: [
      { value: '20K+', label: 'Anomalies / month' },
      { value: '5×', label: 'Faster detection' },
    ],
    highlights: [
      'Built an LLM-powered anomaly detection system with real-time ZODB logging and ensemble ML models.',
      'Used Ollama (Llama 3) to explain each anomaly in plain language.',
      'Sped up detection with Redis caching and built React-based analytics dashboards.',
    ],
    techStack: ['Python', 'Flask', 'ZODB', 'React.js', 'Ollama · Llama 3', 'Redis', 'SSE', 'Anomaly Detection', 'ML'],
  },
  {
    id: 'newtons-apple',
    position: 'Product Developer Intern',
    company: "Newton's Apple",
    duration: 'Apr 2024 – Jul 2024',
    logo: NewtonsApple,
    metrics: [
      { value: '−92%', label: 'Phishing susceptibility' },
      { value: '60%', label: 'Faster response' },
      { value: '+85%', label: 'Detection accuracy' },
    ],
    highlights: [
      'Pioneered PhishInstinct, an AI-powered phishing simulation platform.',
      'Implemented automated attack campaigns, real-time threat analytics and behavior tracking.',
      'Built an SMTP-integrated email system on Amazon SES with device fingerprinting and phishing-link tracking.',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS SES', 'Cybersecurity'],
  },
];

// Earlier roles that are no longer on the one-page resume, shown in a compact list.
export const earlierExperiences = [
  {
    id: 'downpour',
    position: 'Node.js Developer Intern',
    company: 'Downpour Consultancy Services',
    duration: 'Jun 2024 – Jul 2024',
    logo: Downpour,
    summary: 'Scalable Firestore backend with Razorpay payments and Msg91/Firebase verification APIs; 30% performance boost.',
  },
  {
    id: 'pict-research',
    position: 'Research Intern',
    company: 'Pune Institute of Computer Technology',
    duration: 'Jan 2024 – Apr 2024',
    logo: Pict,
    summary: 'Privacy-preserving Federated Learning framework for depression analysis and prediction.',
  },
  {
    id: 'gamedevutopia',
    position: 'Web Developer',
    company: 'GameDevUtopia Club, PICT',
    duration: 'Jan 2024 – Apr 2024',
    logo: gamedev,
    summary: 'Launched the official club website for 50+ members, raising engagement by 40%.',
  },
  {
    id: 'nullclass',
    position: 'Full Stack Web Developer Intern',
    company: 'Nullclass Technologies',
    duration: 'Dec 2023 – Mar 2024',
    logo: nullclass,
    summary: 'Social platform with Firebase auth, media posts, video calls for 100+ users and paid subscriptions.',
  },
];
