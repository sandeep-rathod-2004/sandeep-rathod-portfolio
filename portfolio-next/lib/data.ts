import type { Project, TimelineStep, SkillRating, BlogPost } from '@/types';

export const SITE = {
  name: 'Sandeep Rathod',
  role: 'Generative AI Engineer / Full Stack Developer',
  email: 'sandeeprathod352005@gmail.com',
  github: 'https://github.com/sandeep-rathod-2004',
  githubUser: 'sandeep-rathod-2004',
  linkedin: 'https://www.linkedin.com/in/sandeep-rathod-1a8b46284/',
  leetcode: 'https://leetcode.com/sandeep-rathod-2004/',
  location: 'Bengaluru, India',
  url: 'https://sandeeprathod.dev',
};

export const HERO = {
  eyebrow: 'Open to Full-time · Available Immediately',
  headline: 'AI Engineer | Full Stack Developer | Building Production AI Agents & RAG Systems',
  subtitle:
    'I build production-ready AI applications using Python, FastAPI, React.js, LangGraph, Retrieval-Augmented Generation (RAG), Vector Databases, LLMs, and Machine Learning. I focus on creating intelligent systems that automate real-world workflows.',
};

export const PIPELINE_STAGES = ['PDF', 'OCR', 'Embeddings', 'Vector DB', 'LLM', 'AI Agent', 'Dashboard'];

export const ABOUT_POINTS = [
  'B.Tech Computer Science graduate (2026)',
  'Full-stack developer across React, Next.js, FastAPI, and Node.js',
  'AI / Machine Learning engineer focused on applied systems, not just notebooks',
  'Builds multi-agent, RAG, and document-intelligence pipelines end to end',
  'Open to relocation and visa sponsorship',
  'Looking for AI Engineering / Founding Engineer roles',
];

export const TECH_STACK: Record<string, string[]> = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  Backend: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  'AI / Machine Learning': [
    'LangChain', 'LangGraph', 'RAG', 'OpenAI APIs', 'Gemini APIs',
    'Hugging Face', 'Sentence Transformers', 'PyTorch', 'TensorFlow', 'Scikit-learn',
  ],
  Databases: ['MongoDB', 'PostgreSQL', 'SQLite', 'ChromaDB'],
  Cloud: ['AWS', 'Render', 'Vercel'],
  DevOps: ['Git', 'GitHub', 'Docker'],
};

export const EXPERIENCE = {
  company: 'ZSkillup',
  title: 'Software / AI Engineering Intern',
  stack: ['Python', 'React.js', 'FastAPI', 'Generative AI', 'REST APIs', 'MongoDB', 'Git', 'SQL'],
  achievements: [
    'Shipped full-stack features end-to-end, from FastAPI services to React interfaces',
    'Integrated generative AI into internal workflows, cutting manual review time',
    'Built and documented REST APIs consumed by multiple internal tools',
    'Worked directly with MongoDB data models powering production features',
  ],
};

export const PROJECTS: Project[] = [
  {
    slug: 'comply-take-home',
    name: 'Comply Take-Home — PDF Filing Extraction Platform',
    featured: true,
    tagline: 'PDF filing extraction and structured review platform',
    description:
      'A full-stack PDF filing extraction platform that allows users to register, authenticate, upload PDF documents, and convert unstructured filing content into structured sections with headings, body text, page numbers, hierarchy, and confidence information.',
    stack: ['React', 'Vite', 'Python', 'FastAPI', 'PyMuPDF', 'JWT', 'SQLite', 'Docker', 'Vercel', 'Render'],
    architecture: [
      'User Registration/Login',
      'JWT Authentication',
      'PDF Upload',
      'FastAPI Backend',
      'PyMuPDF PDF Processing',
      'Heading Detection',
      'Structured Results',
      'React Results Viewer',
    ],
    features: [
      'User registration and login',
      'JWT-protected extraction',
      'PDF upload and validation',
      'Heading detection',
      'Section/body association',
      'Page number extraction',
      'Heading hierarchy',
      'Heading confidence',
      'Repeated header/footer filtering',
      'Structured results viewer',
      'Search',
      'JSON export',
      'Responsive interface',
      'Production deployment',
    ],
    github: 'https://github.com/sandeep-rathod-2004/comply-take-home',
    demo: 'https://comply-take-home-frontend.vercel.app',
  },
  {
    slug: 'auranest-interiors',
    name: 'Auranest Interiors',
    tagline: 'Modern interior design brand website',
    description:
      'A modern interior design website created to showcase interior design services, projects, visual content, brand information, and customer contact/enquiry options.',
    stack: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Cloudflare Workers'],
    architecture: ['Landing Page', 'Services', 'Projects/Gallery', 'Business Information', 'Contact/Enquiry'],
    features: ['Modern service presentation', 'Project showcase gallery', 'Customer enquiry flow', 'Responsive design'],
    demo: 'https://sandeep-rathod-2004-auranest-interiors-demo.auranest-interiors-demo.workers.dev',
  },
  {
    slug: 'elevate-estates',
    name: 'Elevate Estates',
    tagline: 'Premium property showcase platform',
    description:
      'A modern real-estate website/application designed to present properties through a premium and responsive user interface.',
    stack: ['React', 'Vite', 'Responsive UI', 'Vercel'],
    architecture: ['Landing Page', 'Browse Properties', 'Property Details', 'Property Information', 'Contact/Enquiry'],
    features: ['Premium property browsing', 'Property detail presentation', 'Responsive interface', 'Lead/contact flow'],
    demo: 'https://elevate-estates-gamma.vercel.app',
  },
  {
    slug: 'tea-macha',
    name: 'Tea Macha',
    tagline: 'Restaurant and tea-brand landing experience',
    description:
      'A restaurant and tea-brand website designed to showcase the brand, products/menu, gallery, information, and customer contact options.',
    stack: ['React', 'JavaScript', 'Vite', 'Responsive UI', 'Vercel'],
    architecture: ['Landing Page', 'Products/Menu', 'Gallery', 'About', 'Contact/Enquiry'],
    features: ['Food and tea brand showcase', 'Gallery presentation', 'Brand information pages', 'Customer contact options'],
    demo: 'https://tea-macha-demo.vercel.app/',
  },
  {
    slug: 'luxe-salon-pro',
    name: 'Luxe Salon Pro',
    tagline: 'Professional salon brand and service website',
    description:
      'A professional salon website focused on presenting salon services, branding, information, visual content, and customer contact/booking options.',
    stack: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Vercel'],
    architecture: ['Landing Page', 'Services', 'Salon Information', 'Visual Content', 'Contact/Booking'],
    features: ['Salon service presentation', 'Brand-focused information blocks', 'Visual gallery', 'Booking/contact flow'],
    demo: 'https://luxe-salon-pro.vercel.app',
  },
  {
    slug: 'a-crew-digital-stage',
    name: 'A-Crew Digital Stage',
    tagline: 'Interactive digital stage experience',
    description:
      'A modern digital-stage website designed around an interactive and visually engaging frontend experience.',
    stack: ['React', 'TypeScript', 'Vite', 'Responsive UI', 'Vercel'],
    architecture: ['Landing Experience', 'Explore Content', 'Interactive Sections', 'Information/Experiences', 'Call to Action'],
    features: ['Interactive frontend experience', 'Content exploration flow', 'Visual storytelling sections', 'Call-to-action conversion path'],
    demo: 'https://a-crew-digital-stage.vercel.app',
  },
  {
    slug: 'agentinvoiceai',
    name: 'AgentInvoiceAI — AI Invoice Processing & Audit',
    tagline: 'AI invoice processing and compliance auditing platform',
    description:
      'An AI-powered invoice processing and auditing platform that extracts invoice information, performs compliance validation, detects potential fraud risks, supports semantic search, and provides an analytics dashboard.',
    stack: ['Python', 'FastAPI', 'React', 'RAG', 'ChromaDB', 'Sentence Transformers', 'SQLAlchemy', 'Celery', 'RabbitMQ', 'Redis'],
    architecture: ['Invoice PDF', 'PDF Extraction', 'Data/Text Processing', 'Embeddings', 'Vector Database', 'RAG Retrieval', 'Compliance Validation', 'Fraud Risk Detection', 'Analytics Dashboard'],
    features: [
      'Invoice PDF processing',
      'Compliance validation',
      'Fraud risk detection',
      'Semantic search',
      'Analytics dashboard',
      'RAG-backed document retrieval',
    ],
    github: 'https://github.com/sandeep-rathod-2004/AgentInvoiceAI',
  },
  {
    slug: 'ai-invoice-audit-agent',
    name: 'AI Invoice Audit Agent',
    tagline: 'Multi-agent document intelligence and audit workflow',
    description:
      'A multi-agent RAG-powered document intelligence system that processes PDF documents, retrieves relevant rules, performs AI-assisted validation, and generates audit results.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'RAG', 'Google Gemini', 'FAISS'],
    architecture: ['PDF', 'Text Extraction', 'RAG Retrieval', 'Relevant Rules', 'AI Validation', 'Audit Analysis', 'Report'],
    features: ['PDF-based document processing', 'RAG rule retrieval', 'AI-assisted validation', 'Audit result generation'],
    github: 'https://github.com/sandeep-rathod-2004/ai-invoice-audit-agent',
  },
  {
    slug: 'texconnect',
    name: 'TexConnect — B2B Textile Marketplace',
    tagline: 'B2B textile marketplace with supplier and buyer workflows',
    description:
      'A B2B textile marketplace connecting buyers and suppliers with product discovery, supplier inventory management, authentication, and order management.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    architecture: ['Registration/Login', 'Role-Based Access', 'Buyer Marketplace', 'Supplier Dashboard', 'Products & Inventory', 'Orders', 'Order Management'],
    features: ['Role-based access', 'Buyer marketplace', 'Supplier inventory management', 'Order management', 'Authentication flow'],
    github: 'https://github.com/sandeep-rathod-2004/TexConnect',
    demo: 'https://tex-connect.vercel.app',
  },
  {
    slug: 'mern-gemini-chat',
    name: 'MERN Gemini Chat',
    tagline: 'Real-time AI chat app with Gemini integration',
    description:
      'A real-time AI chat application built with the MERN stack and Google Gemini, providing an interactive conversational experience with a responsive frontend.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Google Gemini', 'Socket.IO'],
    architecture: ['Frontend', 'Authentication', 'Real-time Messaging', 'Gemini Integration', 'Data Storage'],
    features: ['Real-time messaging', 'Responsive frontend', 'Gemini-powered chat', 'MERN architecture'],
    github: 'https://github.com/sandeep-rathod-2004/mern-gemini-chat',
    demo: 'https://mern-gemini-chat.vercel.app',
  },
  {
    slug: 'lead-management-system',
    name: 'Lead Management System',
    tagline: 'Full-stack lead tracking and assignment platform',
    description:
      'A full-stack lead management platform for managing leads, assignments, notes, activity logs, users, and dashboard information.',
    stack: ['React', 'Vite', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Bootstrap'],
    architecture: ['Lead Capture', 'Assignments', 'Notes', 'Activity Logs', 'User Management', 'Dashboard'],
    features: ['Lead tracking', 'Assignment workflows', 'Activity logs', 'User management', 'Dashboard reporting'],
    github: 'https://github.com/sandeep-rathod-2004/LeadManagementSystem',
    demo: 'https://lead-management-system-virid-zeta.vercel.app',
  },
  {
    slug: 'document-ai-model',
    name: 'Document AI Model',
    tagline: 'Document processing application with AI-assisted analysis',
    description:
      'A document-processing application with a React frontend and Python backend for working with uploaded documents and AI-assisted document analysis.',
    stack: ['React', 'Python', 'SQLite', 'Document Processing'],
    architecture: ['Document Upload', 'Processing', 'React Interface', 'AI-Assisted Analysis'],
    features: ['Document upload workflow', 'Backend processing', 'AI-assisted analysis', 'Structured frontend experience'],
    github: 'https://github.com/sandeep-rathod-2004/document_react_model',
  },
  {
    slug: 'ai-coding-agent',
    name: 'AI Coding Agent',
    tagline: 'AI agent that plans and modifies repository code',
    description:
      'An AI-powered coding agent that explores an existing codebase, summarizes the repository, generates a plan with Google Gemini, modifies the relevant files, and produces a concise implementation summary.',
    stack: ['Python 3.11+', 'Google Gemini 2.5 Flash', 'LangChain', 'python-dotenv', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    architecture: ['User Requirement', 'Repository Explorer', 'Repository Summary', 'Gemini Planner', 'Execution Plan', 'Code Modifier', 'Summary Generator'],
    features: ['Repository exploration', 'Automatic planning', 'Targeted file modification', 'Summary generation', 'Backup before edits'],
    github: 'https://github.com/sandeep-rathod-2004/ai-coding-agent',
  },
  {
    slug: 'crop-recommendation-system',
    name: 'Crop Recommendation System',
    tagline: 'Machine-learning crop recommendation project',
    description:
      'A machine-learning crop recommendation project that uses agricultural and environmental inputs such as nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall to recommend suitable crops.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Joblib', 'Random Forest'],
    architecture: ['Input Features', 'Preprocessing', 'Random Forest Model', 'Crop Recommendation'],
    features: ['Agricultural input-based recommendations', 'Feature-driven model workflow', 'Crop suitability prediction', 'Reusable model artifacts'],
    github: 'https://github.com/sandeep-rathod-2004/crop_recommendation_project',
  },
];

export const AI_ARCHITECTURE = ['User', 'React', 'FastAPI', 'Authentication', 'LangGraph', 'RAG', 'Vector DB', 'LLM', 'Response'];

export const TIMELINE: TimelineStep[] = [
  { label: 'Started B.Tech', year: '2022' },
  { label: 'Learned Python' },
  { label: 'Machine Learning' },
  { label: 'Full Stack Development' },
  { label: 'Generative AI' },
  { label: 'Internship at ZSkillup' },
  { label: 'Built AgentInvoiceAI' },
  { label: 'Graduated', year: '2026' },
  { label: 'Looking for a Founding AI Engineer role' },
];

export const SKILLS: SkillRating[] = [
  { name: 'Python', rating: 5 },
  { name: 'React', rating: 4 },
  { name: 'FastAPI', rating: 4 },
  { name: 'Machine Learning', rating: 4 },
  { name: 'LLMs', rating: 4 },
  { name: 'RAG', rating: 4 },
  { name: 'LangGraph', rating: 4 },
  { name: 'MongoDB', rating: 4 },
  { name: 'SQL', rating: 4 },
  { name: 'Git', rating: 4 },
];

export const STATS = [
  { value: 7, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '+', label: 'Git Commits' },
  { value: 1000, suffix: '+', label: 'Hours Learning AI' },
  { value: 2026, suffix: '', label: 'Graduate' },
  { value: 1, suffix: '', label: 'Internship' },
];

export const BLOG_POSTS: BlogPost[] = [
  { title: 'Building Multi-Agent Systems', excerpt: 'Notes on orchestrating cooperating LLM agents with LangGraph.', status: 'Coming soon' },
  { title: 'What I Learned From FastAPI', excerpt: 'Patterns that held up in production, and ones that didn\u2019t.', status: 'Coming soon' },
  { title: 'Understanding RAG', excerpt: 'A practical breakdown of retrieval-augmented generation.', status: 'Coming soon' },
  { title: 'LangGraph Explained', excerpt: 'How stateful graphs beat linear chains for agent workflows.', status: 'Coming soon' },
  { title: 'My AI Journey', excerpt: 'From first Python script to shipping agents in production.', status: 'Coming soon' },
];

export const RECRUITER = {
  roles: ['AI Engineer', 'Generative AI Engineer', 'Machine Learning Engineer', 'Full Stack Engineer', 'Founding Engineer', 'Software Engineer'],
  location: 'India',
  openTo: ['Remote', 'Relocation', 'Visa Sponsorship'],
  joining: 'Immediate',
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#playground', label: 'Playground' },
  { href: '#contact', label: 'Contact' },
];
