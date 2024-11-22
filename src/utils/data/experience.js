import NewtonsApple from '../../utils/na2.png'
import Downpour from '../../utils/downpour.jpeg';
import Dell from '../../utils/dell.jpg';
import Pict from '../../utils/pict.jpeg';
import gamedev from '../../utils/gamedev.jpeg';
import nullclass from '../../utils/nullclass.png';

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
      'Developed a privacy-focused FML framework for depression analysis and prediction, enabling local data processing to safeguard user privacy. The model incorporates diverse datasets across demographics to deliver accurate, inclusive, and scalable predictions, aiming to revolutionize mental health care analytics with personalized treatment insights.',
    techStack: ['Tensorflow', 'Keras', 'Numpy', 'GitHub', 'Pandas', 'HTML', 'CSS', 'Javascript', 'JSON', 'Fedarated Machine Learning', 'Data Privacy Techniques',
    'Scalable Model Training','Mental Health Analytics'],
    logo: Pict
  },
  {
    id: 5,
    position: 'Web Developer',
    company: 'GameDevUtopia - Game Development Club (PICT)',
    duration: 'Jan 2024 - April 2024',
    description:
      'Launched an official club website that improved collaboration for 50+ members, boosted event updates, and increased engagement by 40 %. Empowering students to showcase their talents on a global stage.',
    techStack: ['Nextjs', 'Material-UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'GitHub', 'Render', 'Vercel',],
    logo: gamedev
  },
  {
    id: 6,
    position: 'Full Stack Web Developer Intern',
    company: 'GameDevUtopia - Game Development Club (PICT)',
    duration: 'Jan 2024 - April 2024',
    description:
      'Developed an innovative social media platform featuring real-time user authentication and profile updates with Firebase, dynamic content posting (images, videos, messages), and live weather-based animations. Implemented a video conferencing system supporting 100+ users, and a subscription model with Razorpay for premium features. Scaled the platform globally using MongoDB for seamless data management, boosting user engagement and interaction.',
    techStack: ['React.js', 'Material-UI', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'Render', 'JWT', 'Stripe'],
    logo: nullclass
  },


]