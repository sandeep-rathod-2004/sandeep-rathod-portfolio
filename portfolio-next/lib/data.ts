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
    slug: 'agentinvoiceai',
    name: 'AgentInvoiceAI',
    featured: true,
    tagline: 'Autonomous invoice audit agent with fraud detection',
    description:
      'A production-style agent that ingests invoice PDFs, extracts structured data via OCR, retrieves supporting context with RAG, and flags anomalies before they hit a dashboard — built to mirror how a finance team would actually review invoices.',
    stack: ['FastAPI', 'React', 'LangGraph', 'RAG', 'ChromaDB', 'Redis', 'Celery', 'Sentence Transformers'],
    architecture: ['PDF', 'OCR', 'Vector DB', 'RAG', 'LLM', 'Fraud Detection', 'Dashboard'],
    features: [
      'Async ingestion queue with Celery + Redis',
      'Semantic retrieval over historical invoices via ChromaDB',
      'LLM-driven anomaly and fraud scoring with explanations',
      'Live dashboard for reviewers with audit trail',
    ],
    metrics: [
      { label: 'Docs / min', value: '40+' },
      { label: 'Fields extracted', value: '18' },
      { label: 'Flag precision', value: '~91%' },
    ],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'ai-invoice-audit-agent',
    name: 'AI Invoice Audit Agent',
    tagline: 'RAG-powered document audit pipeline',
    description:
      'A focused audit agent that pairs OCR extraction with retrieval-augmented generation to cross-check invoice line items against contracts and purchase orders.',
    stack: ['Python', 'RAG', 'OCR', 'LLM'],
    architecture: ['Invoice', 'OCR', 'RAG', 'LLM', 'Fraud Detection', 'Dashboard'],
    features: ['Line-item cross-referencing', 'Confidence-scored flags', 'Structured JSON output for downstream tools'],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'texconnect',
    name: 'TexConnect',
    tagline: 'Marketplace with AI-assisted search',
    description:
      'A full-stack marketplace with authentication, real-time chat between buyers and sellers, a seller dashboard, and semantic AI search across listings.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'AI Search'],
    architecture: ['Marketplace', 'Authentication', 'Chat', 'Dashboard', 'AI Search'],
    features: ['JWT authentication', 'Real-time buyer/seller chat', 'Semantic listing search', 'Seller analytics dashboard'],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'mern-gemini-chat',
    name: 'MERN Gemini Chat',
    tagline: 'Real-time chat app powered by Gemini',
    description: 'A real-time messaging application with Socket.io, JWT-secured accounts, and a Gemini-powered assistant embedded directly in the chat.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Gemini API', 'Socket.io', 'JWT'],
    architecture: ['React', 'Node.js', 'Socket.io', 'Gemini API', 'MongoDB'],
    features: ['Real-time messaging via Socket.io', 'Gemini-powered chat assistant', 'JWT-secured sessions'],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'crop-recommendation',
    name: 'Crop Recommendation',
    tagline: 'ML model for crop prediction',
    description: 'A Random Forest classification model that recommends the best crop to plant based on soil and climate features, trained and evaluated on a labeled agricultural dataset.',
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas'],
    architecture: ['Dataset', 'Feature Engineering', 'Random Forest', 'Prediction'],
    features: ['Random Forest classifier', 'Feature importance analysis', 'Cross-validated accuracy reporting'],
    metrics: [{ label: 'Accuracy', value: '~97%' }],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'lead-management-system',
    name: 'Lead Management System',
    tagline: 'CRM for tracking and converting leads',
    description: 'A lightweight CRM for sales teams to capture, assign, and track leads through a pipeline, with authenticated dashboards and exportable reports.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    architecture: ['CRM', 'Authentication', 'Dashboard', 'Reports'],
    features: ['Role-based authentication', 'Pipeline dashboard', 'Exportable reports'],
    github: 'https://github.com/sandeep-rathod-2004',
  },
  {
    slug: 'document-react-model',
    name: 'Document React Model',
    tagline: 'Document intelligence with OCR + summarization',
    description: 'A document-intelligence tool that extracts, structures, and summarizes long documents, built to demonstrate an end-to-end OCR-to-summary pipeline.',
    stack: ['Python', 'OCR', 'LLM', 'React'],
    architecture: ['Document', 'OCR', 'Extraction', 'Summarization'],
    features: ['OCR text extraction', 'Structured field extraction', 'LLM-based summarization'],
    github: 'https://github.com/sandeep-rathod-2004',
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
