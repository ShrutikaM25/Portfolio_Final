import NewtonsApple from '../../utils/na2.png'
import Downpour from '../../utils/downpour.jpeg';
import Dell from '../../utils/dell.jpg';
import Pict from '../../utils/pict.jpeg';

export const experiences = [
  {
    id: 1,
    position: 'Project Intern',
    company: 'Dell Technologies',
    duration: 'August 2024 - Present',
    description:
      'Assisted in developing scalable web applications. Utilized MongoDB, Express, and JavaScript for data management and UI improvements. Enhanced app performance by implementing caching strategies.',
    techStack: ['Machine Learning', 'Flask', 'Numpy', 'Pandas', 'BeautifulSoup4', 'Python', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
    logo: Dell
  },
  {
    id: 2,
    position: 'Backend Developer',
    company: 'Newton’s Apple',
    duration: 'Apr 2024 - July 2024',
    description:
      'Engineered an advanced email system using SMTP and Amazon SES, featuring device-specific tracking for opens/clicks, while implementing encrypted login details for enhanced security.Spearheaded the development of dynamic APIs for user registration, profile updates, and email template management, optimizing performance through a TTL server and ensuring airtight data protection.',
    techStack: ['Node.js', 'Express.js', 'MySQL', 'AWS S3', 'AWS EC2'],
    logo: NewtonsApple
  },

    {
    id: 3,
    position: 'Node.js Developer Intern',
    company: 'Downpour Consultancy Services',
    duration: 'Jun 2024 - July 2024',
    description:
      ' Spearheaded the development of a scalable backend architecture with Firestore for data management and Razorpay for payments. Delivered high-performance APIs for user verification (Msg91, Firebase), dynamic event and organization management, and CRUD operations, driving a 30% system performance boost.',
    techStack: ['Node.js','Express.js','Next.js', 'Firebase', 'Firestore', 'GitHub'],
    logo: Downpour
  },
  {
    id: 4,
    position: 'Research Intern',
    company: 'Pune Institute of Computer Technology ',
    duration: 'Jan 2024 - April 2024',
    description:
      'Contributed to backend systems using Node.js, Firebase, Firestore, and GitHub. Collaborated with frontend teams to deliver end-to-end functionality for multiple projects.',
    techStack: ['Tensorflow', 'Keras', 'Numpy', 'GitHub', 'Pandas', 'HTML', 'CSS', 'Javascript', 'JSON'],
    logo: Pict
  },

]