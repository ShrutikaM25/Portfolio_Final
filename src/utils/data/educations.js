// `featured` gets the large card with a score ring; the rest stack beside it.
// Entries without a score (degrees in progress) show a status pill instead of a bar.
export const educations = [
  {
    id: 'pict',
    featured: true,
    title: 'Bachelor of Engineering, Computer Engineering',
    institution: 'Pune Institute of Computer Technology (PICT)',
    duration: '2021 – June 2025',
    score: 9.22,
    scoreMax: 10,
    scoreLabel: 'CGPA',
    highlights: [
      'BE project: DeepTraceAI, Explainable AI for compliance & anomaly detection',
      'Research on privacy-preserving Federated Learning',
      'Website Development Head, GameDevUtopia Club',
    ],
  },
  {
    id: 'bits',
    title: 'M.Tech, Artificial Intelligence & Machine Learning',
    institution: 'BITS Pilani · Work Integrated Learning Programme',
    duration: '2026 – Present',
    status: 'In progress',
  },
  {
    id: 'hsc',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Sou. Tarabai Shankarlal Mutha Kanya Prashala and Junior College',
    duration: '2019 – 2021',
    score: 96,
    scoreMax: 100,
    scoreLabel: '%',
  },
  {
    id: 'ssc',
    title: 'Secondary School Certificate (SSC)',
    institution: 'C.M.S English Medium Higher Secondary School',
    duration: 'Till 2019',
    score: 89,
    scoreMax: 100,
    scoreLabel: '%',
  },
];
