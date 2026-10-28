import ATS from '../Projects/1.jpg';
import Steganography from '../Projects/2.jpg';
import PageTalk from '../Projects/3.png';
import Currency from '../Projects/4.png';
import rapidcare from '../Projects/5.png';
import JusticeMet from '../Projects/6.png';
import Calorie from '../Projects/7.png';
import Chatbot from '../Projects/8.png';
import Twitter from '../Projects/9.png';
import handmade from '../Projects/10.png';
import FML from '../Projects/11.png';
import review from '../Projects/12.png';
import deeptrace from '../Projects/13.png';
import dreambridge from '../Projects/14.png';
import phishInstinct from '../na2.png';

const GITHUB = 'https://github.com/ShrutikaM25';

// Categories drive the filter tabs in the Projects section.
export const projectCategories = ['All', 'GenAI & ML', 'Full Stack', 'Security'];

// Resume projects, shown as large featured rows.
export const featuredProjects = [
  {
    id: 'deeptrace',
    name: 'DeepTraceAI',
    subtitle: 'Automated Compliance & Anomaly Detection',
    metric: { value: '1,200+', label: 'CIS guidelines parsed into audits' },
    description:
      'Automates CIS compliance audits: parses 1,200+ guidelines, stores embeddings in Redis and has an LLM generate the Bash audit scripts, run against an OS in Docker on GCP. A real-time file logger in ZODB feeds ensemble anomaly detection with DBSCAN clustering, and Ollama (Llama 3) explains every anomaly on an analytics dashboard.',
    tools: ['Python', 'Flask', 'React.js', 'Ollama · Llama 3', 'Redis', 'ZODB', 'Docker', 'GCP', 'DBSCAN', 'Bash'],
    code: GITHUB,
    image: deeptrace,
  },
  {
    id: 'dreambridge',
    name: 'DreamBridge',
    subtitle: 'AI-Powered Career Guidance Platform',
    metric: { value: '85%', label: 'Accuracy in skill-gap & job-role matching' },
    description:
      'Generates personalised career roadmaps. Google Generative AI and NLP parse resumes for ATS optimisation, pdf2image and PIL handle documents, and external APIs add market insights. Scenario-based evaluations and real-time mentorship suggestions keep students engaged.',
    tools: ['Python', 'Streamlit', 'NLP', 'Google Generative AI', 'Transformers', 'pdf2image', 'PIL'],
    code: GITHUB,
    image: dreambridge,
  },
];

// Everything else, shown in the filterable grid.
export const projectsData = [
  {
    id: 'justicemet',
    name: 'JusticeMet – AI Legal Chatbot',
    description:
      'Legal assistant that predicts case outcomes with Gemini-1.5-Flash and RAG, retrieving precedents from Pinecone, explaining its reasoning and handling case data with encryption.',
    tools: ['React Native', 'Flask', 'LangChain', 'Pinecone', 'FAISS'],
    categories: ['GenAI & ML'],
    code: GITHUB,
    image: JusticeMet,
  },
  {
    id: 'phishinstinct',
    name: 'PhishInstinct',
    description:
      "AI-powered phishing simulation built at Newton's Apple: automated attack campaigns, behaviour tracking and real-time threat analytics, cutting phishing susceptibility by 92%.",
    tools: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS SES'],
    categories: ['Security', 'Full Stack'],
    code: GITHUB,
    image: phishInstinct,
    imageFit: 'contain', // company logo rather than a screenshot
  },
  {
    id: 'mental-health',
    name: 'Mental Health Analyser (Federated ML)',
    description:
      'Privacy-preserving Federated Learning model for depression analysis, served through a Flask REST API that cut assessment response time by 50%, with Gemini API insights.',
    tools: ['TensorFlow', 'Keras', 'Flask', 'Gemini API', 'Pandas'],
    categories: ['GenAI & ML'],
    code: GITHUB,
    image: FML,
  },
  {
    id: 'ats',
    name: 'AI ATS Tracker & Resume Optimizer',
    description:
      'Resume analysis with Google Generative AI: skill-gap analysis, job-fit prediction and real-time feedback on a Streamlit dashboard processing 1,500+ data points.',
    tools: ['Python', 'Streamlit', 'Google Generative AI', 'pdf2image'],
    categories: ['GenAI & ML'],
    code: GITHUB,
    image: ATS,
  },
  {
    id: 'pagetalk',
    name: 'PageTalk',
    description:
      'Chat with your PDFs: search, retrieve and summarise documents in natural language, with speech-to-text input. Built on Next.js, LangChain and Supabase.',
    tools: ['Next.js', 'LangChain', 'Supabase', 'Node.js', 'Material-UI'],
    categories: ['GenAI & ML', 'Full Stack'],
    code: GITHUB,
    image: PageTalk,
  },
  {
    id: 'nutrilens',
    name: 'NutriLens – AI Calorie Advisor',
    description:
      'Upload a meal photo to identify food items, estimate calories and get a nutrient breakdown with personalised dietary advice from Google Generative AI.',
    tools: ['Python', 'Streamlit', 'Google Generative AI'],
    categories: ['GenAI & ML'],
    code: GITHUB,
    image: Calorie,
  },
  {
    id: 'chatbot',
    name: 'Personal AI Chatbot',
    description:
      'Context-aware conversational assistant with a Gradio interface, REST API integration, real-time feedback and robust error handling.',
    tools: ['Python', 'Gradio', 'REST API'],
    categories: ['GenAI & ML'],
    code: GITHUB,
    image: Chatbot,
  },
  {
    id: 'buzzstream',
    name: 'BuzzStream',
    description:
      'Social microblogging and live-streaming platform with Firebase auth, media posts, video calls for 100+ users and Razorpay subscriptions.',
    tools: ['React.js', 'Node.js', 'Firebase', 'MongoDB', 'JWT'],
    categories: ['Full Stack'],
    code: GITHUB,
    image: Twitter,
  },
  {
    id: 'fx-insight',
    name: 'FX-Insight',
    description:
      'Currency analyser with real-time exchange rates, bidirectional conversion and historical trend charts.',
    tools: ['React.js', 'Node.js', 'Express.js', 'Chart.js', 'Tailwind CSS'],
    categories: ['Full Stack'],
    code: GITHUB,
    image: Currency,
  },
  {
    id: 'cinecritiq',
    name: 'CineCritiq',
    description:
      'Community movie-review hub with personalised recommendations and trending titles, on a Spring Boot and MongoDB backend.',
    tools: ['React.js', 'Spring Boot', 'MongoDB', 'Bootstrap'],
    categories: ['Full Stack'],
    code: GITHUB,
    image: review,
  },
  {
    id: 'medibed',
    name: 'MediBed Connect',
    description:
      'Real-time emergency bed allocation that prioritises critical cases and tracks hospital availability.',
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    categories: ['Full Stack'],
    code: GITHUB,
    image: rapidcare,
  },
  {
    id: 'handmade',
    name: 'Handmade Emporium',
    description:
      'Marketplace connecting local artisans with buyers, with creator profiles and curated product pages.',
    tools: ['React.js', 'Redux', 'Stripe', 'Tailwind CSS'],
    categories: ['Full Stack'],
    code: GITHUB,
    image: handmade,
  },
  {
    id: 'invisitext',
    name: 'InvisiText',
    description: 'Steganography desktop app that hides encrypted messages inside images and retrieves them on demand.',
    tools: ['Python', 'Tkinter', 'Pillow', 'Stegano'],
    categories: ['Security'],
    code: GITHUB,
    image: Steganography,
  },
];
