import ATS from '../Projects/1.jpg'
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


export const projectsData = [
    {
        id: 1,
        name: 'Personalized Mental Health Analyser using Federated Machine Learning',
        description: "Engineered a RESTful API with JSON integration to enhance the Mental Health System, achieving a 50% reduction in response time for personalized assessments using Flask, TensorFlow, and Gemini API.",
        tools: [' Tensorflow' , 'Keras' , 'Numpy', 'Pandas', 'HTML', 'CSS', 'Javascript', 'Flask' ,'Python', 'Gemini API', 'JSON'],
        role: 'Full Stack Development and Machine Learning',
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: FML,
    },
    {
        id: 2,
        name: ' AI-Powered ATS Tracker and Resume Optimization Platform',
        description: 'Built an ATS platform with Google Generative AI for smart resume analysis, featuring Skill Gap Analysis, Job Fit Prediction, and real-time feedback. The Streamlit dashboard processes over 1,500 data points, improving hiring decisions, with seamless PDF handling via pdf2image and PIL',
        tools: [ 'Python' , 'Streamlit' , 'Google Generative AI' , 'pdf2image' , 'PIL'],
        role: 'GenAI and Machine Learning',
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: ATS,
    },
    {
        id: 3,
        name: ' BuzzStream- Social Microblogging and Live Streaming Platform',
        description: 'Developed an innovative social media platform featuring real-time user authentication and profile updates with Firebase, dynamic content posting (images, videos, messages), and live weather-based animations. Implemented a video conferencing system supporting 100+ users, and a subscription model with Razorpay for premium features. Scaled the platform globally using MongoDB for seamless data management, boosting user engagement and interaction.',
        tools: [ 'React.js', 'Material-UI', 'Node.js', 'Express.js', 'Firebase', 'MongoDB', 'Render', 'JWT', 'Stripe'],
        code: 'https://github.com/ShrutikaM25',
        role: 'Full Stack Development',
        demo: 'https://github.com/ShrutikaM25',
        image: Twitter,
    },
    {
        id: 4,
        name: 'Personal AI Chatbot Application',
        description: "Engineered an intelligent, conversational AI chatbot application with seamless interaction capabilities using Python and Gradio. Powered by REST API integration, the chatbot provides dynamic, context-aware responses that evolve with each user input, creating a fluid and engaging dialogue experience. Designed a user-friendly Gradio interface that supports real-time feedback and ensures robust error handling for uninterrupted interactions, delivering a smooth and responsive AI assistant experience tailored to user prompts.",
        tools: ['Python', 'Gradio', 'REST API', 'Requests', 'JSON'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: Chatbot,
        role: 'GenAI and Machine Learning',
    },
    {
        id: 5,
        name: 'NutriLens – AI Calorie Advisor',
        description: "NutriLens is an intelligent, AI-powered calorie advisor that provides instant, detailed nutritional insights from food images. Simply upload a photo of your meal, and NutriLens analyzes the image to identify food items, calculate total calorie intake, and deliver a breakdown of key nutrients like carbs, fats, fiber, and sugar. Built with Python and Streamlit, NutriLens leverages Google’s Generative AI to offer personalized dietary advice and even evaluates the healthiness of your meal. This sleek, user-friendly app transforms nutritional guidance, empowering healthier choices in real-time.",
        tools: ['Python', 'Gradio', 'REST API', 'Requests', 'JSON'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: Calorie,
        role: 'GenAI and Machine Learning',
    },
    {
        id: 6,
        name: 'FX-Insight – Foreign Currency Analyzer',
        description: "FX-Insight is a powerful, full-stack application designed for comprehensive currency analysis and conversion. Built with React, Node.js, and Express, FX-Insight offers real-time exchange rates with bidirectional conversion and advanced trend visualization. The intuitive interface, enhanced by Bootstrap and Tailwind CSS, provides users with seamless access to historical trends, automated data updates, and easy currency comparisons for informed financial decisions.",
        tools: ['React.js', 'Node.js', 'Express.js', 'Bootstrap4', 'Tailwind CSS', 'csv', 'Charts.js', 'Pandas', 'Numpy'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: Currency,
        role: 'Full Stack Development',
    },

    {
        id: 7,
        name: 'CineCritiq – The Ultimate Movie Review Hub',
        description: "CineCritiq is an engaging, community-driven platform for movie lovers to discover, review, and discuss films. Powered by React, Spring Boot, and MongoDB, CineCritiq boasts a vast database of movies and personalized recommendations tailored to each user’s taste. Its sleek interface, enhanced by Bootstrap, invites users to explore trending titles, share reviews, and engage with fellow film enthusiasts, making it the go-to destination for everything cinema. Dive into the world of movies and connect with others who share your passion on CineCritiq!",
        tools: ['React.js' , 'Bootstrap' , 'Spring Boot', 'Gradle', 'MongoDB'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: review,
        role: 'Full Stack Development',
    },

    {
        id: 8,
        name: 'MediBed Connect – Emergency Bed Allocation System',
        description: "MediBed Connect revolutionizes emergency healthcare by providing an efficient, real-time bed booking solution that prioritizes critical cases and streamlines coordination between medical facilities. Built with React, Node.js, and MongoDB, this platform enables hospitals to optimize bed allocation, track availability instantly, and ensure resources are effectively utilized during crises. With a user-friendly interface and robust backend, MediBed Connect enhances patient care and response times, making it an indispensable tool for modern emergency management.",
        tools: [ 'React.js' ,'Bootstrap' , 'Node.js' , 'Express.js' , 'MongoDB'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: rapidcare,
        role: 'Full Stack Development',
    },
    {
        id: 9,
        name: 'Handmade Emporium – Empowering Local Artisans',
        description: "Handmade Emporium is an online marketplace crafted to connect talented local artisans with customers who value unique, handmade products. Built with React, Redux, Bootstrap, and Tailwind CSS, this platform enables artisans to showcase and sell their creations, while providing users with an engaging shopping experience. The homepage highlights popular products, and each product page offers in-depth information about the item, its creator, and a curated selection of the artisan’s other popular works. Handmade Emporium not only supports artisans in gaining visibility and income but also fosters a community that celebrates and sustains traditional craftsmanship.",
        tools: [ 'React.js' ,'Bootstrap' , 'Redux' , 'Stripe' , 'JSON'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: handmade,
        role: 'Frontend Development',
    },

    {
        id: 10,
        name: 'PageTalk – Intelligent Document Interaction Platform',
        description: "PageSpeak is an advanced conversational AI platform that transforms document interaction, enabling users to intuitively search, retrieve, and summarize PDF content using natural language. Built with Next.js, Node.js, and the Langchain framework, and powered by Supabase, PageSpeak combines speech-to-text capabilities with smart automation to streamline document access and analysis. With a sleek Material-UI design, this innovative tool empowers users to engage with documents like never before, making data retrieval faster, more efficient, and remarkably user-friendly.",
        tools: [ 'Next.js', 'Material-UI', 'Node.js', 'Express.js' , 'Langchain framework' , 'Supabase', 'Python', 'LLM', 'Tailwind CSS', 'MongoDB'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: PageTalk,
        role: 'Full Stack Development',
    },
    {
        id: 11,
        name: 'InvisiText – Encrypted Message Embedding Platform',
        description: "InvisiText is a powerful, user-friendly application that lets you discreetly embed and retrieve hidden messages within image files, blending digital security with an intuitive design. Using advanced steganography techniques, InvisiText allows users to select images, hide confidential text within them, and effortlessly retrieve hidden data when needed—all with just a few clicks. This innovative platform ensures message confidentiality while providing an engaging, seamless experience for users seeking to secure sensitive information in plain sight. Perfect for anyone who values privacy and creativity in equal measure!",
        tools: [ 'Python', 'Tkinter', 'PIL (Pillow)', 'Stegano',  'OS',  'Sys'],
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: Steganography,
        role: 'Cyber Security',
    },
    {
        id: 12,
        name: 'JusticeMet - AI-Driven Legal Chatbot',
        description: 'Developed an Android-based legal chatbot leveraging Gemini-1.5-Flash and Retrieval-Augmented Generation (RAG) for accurate "Guilty" or "Not Guilty" predictions. Integrated explainable AI, secure data handling with encryption, and a feedback mechanism to enhance prediction accuracy and user experience. Utilized Pinecone Vector DB for case precedent retrieval and Flask for seamless backend communication.',
        tools: [
          'React Native',
          'Flask',
          'MongoDB',
          'Gemini-1.5-Flash',
          'Pinecone Vector DB',
          'RAG',
          'Encryption'
        ],
        role: 'Full Stack Developer',
        code: 'https://github.com/ShrutikaM25',
        demo: 'https://github.com/ShrutikaM25',
        image: JusticeMet
      },

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },