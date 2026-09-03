import { Project, TechItem, FocusArea, Goal } from '../types';

export const PROFILE_INFO = {
  name: "Rahul Chaudhary",
  title: "AI/ML Developer • Python Developer • Software Engineer",
  headline: "Building practical software, exploring Artificial Intelligence & Machine Learning, and improving one project at a time.",
  bio: "I'm a Computer Science student passionate about software development, Artificial Intelligence, and Machine Learning. I enjoy turning ideas into real-world applications and learning through hands-on projects.",
  location: "Nepal",
  github: "https://github.com/chaudharirahul10",
  githubUsername: "chaudharirahul10",
  portfolio: "https://rahulchaudhary07.com.np",
  email: "chaudharyraul07@gmail.com",
  philosophy: "I believe in learning by doing — writing code, solving problems, building projects, and improving every day.",
  quote: "Consistency beats intensity.",
  stats: {
    contributions: "100+ Days of Code",
    specialty: "AI/ML & Full-Stack",
    dsaLanguage: "C++ (DSA)",
    backend: "Node.js & Spring Boot"
  }
};

export const HIGHLIGHTS = [
  { icon: "Rocket", label: "Building full-stack & AI-powered applications" },
  { icon: "Bot", label: "Exploring Artificial Intelligence & Machine Learning" },
  { icon: "Code2", label: "Strengthening Data Structures & Algorithms with C++" },
  { icon: "Sprout", label: "Continuously learning new cloud & data technologies" },
  { icon: "Target", label: "Focused on becoming a strong software engineer" }
];

export const TECH_STACK: TechItem[] = [
  // Languages
  { name: "C++", iconSlug: "cpp", category: "languages", description: "Competitive programming & DSA" },
  { name: "Java", iconSlug: "java", category: "languages", description: "Enterprise software & Spring Boot" },
  { name: "Python", iconSlug: "python", category: "languages", description: "AI, Machine Learning & scripting" },
  { name: "JavaScript", iconSlug: "javascript", category: "languages", description: "Modern ES6+ web development" },
  
  // Frontend & Backend
  { name: "React", iconSlug: "react", category: "frontend_backend", description: "Component-driven responsive UIs" },
  { name: "Tailwind CSS", iconSlug: "tailwind", category: "frontend_backend", description: "Utility-first design systems" },
  { name: "HTML5", iconSlug: "html", category: "frontend_backend", description: "Semantic web architecture" },
  { name: "CSS3", iconSlug: "css", category: "frontend_backend", description: "Styling and responsive layouts" },
  { name: "Node.js", iconSlug: "nodejs", category: "frontend_backend", description: "Server-side JavaScript runtime" },
  { name: "Express.js", iconSlug: "express", category: "frontend_backend", description: "REST APIs and web microservices" },
  { name: "Spring Boot", iconSlug: "spring", category: "frontend_backend", description: "Java backend application framework" },
  
  // Databases & Tools
  { name: "MongoDB", iconSlug: "mongodb", category: "databases_tools", description: "NoSQL document database" },
  { name: "MySQL", iconSlug: "mysql", category: "databases_tools", description: "Relational database management" },
  { name: "SQLite", iconSlug: "sqlite", category: "databases_tools", description: "Lightweight embedded SQL storage" },
  { name: "Git", iconSlug: "git", category: "databases_tools", description: "Distributed version control" },
  { name: "GitHub", iconSlug: "github", category: "databases_tools", description: "Open source collaboration & CI/CD" },
  { name: "VS Code", iconSlug: "vscode", category: "databases_tools", description: "Primary development IDE" },
  
  // AI, Data & Cloud
  { name: "TensorFlow", iconSlug: "tensorflow", category: "ai_cloud", description: "Deep learning neural network modeling" },
  { name: "Python ML", iconSlug: "python", category: "ai_cloud", description: "NumPy, Pandas, Scikit-learn" },
  { name: "Azure", iconSlug: "azure", category: "ai_cloud", description: "Cloud computing & deployment" }
];

export const OTHER_EXPLORATIONS = [
  "Power BI",
  "Microsoft Fabric",
  "OneLake",
  "Data Science",
  "Cloud Architecture",
  "Prompt Engineering"
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Building and experimenting with machine learning models, AI integrations, data analysis, and intelligent applications using Python.",
    icon: "Brain",
    badge: "Core Focus",
    topics: ["Machine Learning Models", "Deep Learning with TensorFlow", "Data Wrangling & Analysis", "AI-Powered Integrations"]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Developing modern web applications and robust APIs using React, Node.js, Express, Spring Boot, and modern databases.",
    icon: "Globe",
    badge: "Active Projects",
    topics: ["React Single Page Apps", "RESTful API Design", "Spring Boot & Express", "Database Architecture"]
  },
  {
    id: "dsa",
    title: "Problem Solving & DSA",
    description: "Practicing Data Structures & Algorithms with C++ and improving problem-solving skills through consistent daily coding.",
    icon: "Cpu",
    badge: "Daily Practice",
    topics: ["Arrays, Trees & Graphs", "Dynamic Programming", "C++ STL Mastery", "Algorithm Optimization"]
  },
  {
    id: "data-cloud",
    title: "Data & Cloud Engineering",
    description: "Exploring Power BI, Microsoft Fabric, OneLake, Azure, and modern enterprise data analytics technologies.",
    icon: "Cloud",
    badge: "Exploring",
    topics: ["Power BI Dashboards", "Microsoft Fabric Pipelines", "OneLake Data Lakes", "Azure Cloud Services"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ai-ml-apps",
    title: "AI & Machine Learning Lab",
    category: "ai",
    description: "Intelligent applications and predictive machine learning models built with Python, TensorFlow, and scientific data libraries.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy"],
    iconName: "Sparkles",
    status: "Active Development",
    features: [
      "Supervised & unsupervised learning pipelines",
      "Model training, evaluation and metric tracking",
      "Interactive data visualizations and inference APIs"
    ]
  },
  {
    id: "fullstack-apps",
    title: "Full-Stack Web Suite & APIs",
    category: "fullstack",
    description: "Scalable web applications and backend services featuring React frontend interfaces, Express/Spring Boot microservices, and database persistence.",
    technologies: ["React", "Node.js", "Express", "Spring Boot", "MongoDB", "MySQL"],
    iconName: "Layers",
    status: "Production Ready",
    features: [
      "Modular component architecture with Tailwind CSS",
      "RESTful API design and secure middleware",
      "Database schema modeling with SQL & NoSQL engines"
    ]
  },
  {
    id: "dsa-arena",
    title: "C++ DSA Problem Solving Suite",
    category: "dsa",
    description: "Structured repository of competitive programming challenges, algorithmic pattern analyses, and data structure implementations in C++.",
    technologies: ["C++", "STL", "Algorithms", "Data Structures"],
    iconName: "Terminal",
    status: "Continuous Growth",
    features: [
      "Optimized graph, tree, and dynamic programming solutions",
      "Time and space complexity profiling",
      "Systematic 100 Days of Code algorithmic roadmap"
    ]
  },
  {
    id: "bi-data-dashboard",
    title: "Data & Business Intelligence Suite",
    category: "data",
    description: "Data analysis pipelines, ETL processes, and interactive visualization dashboards created with Power BI, Microsoft Fabric, and Azure.",
    technologies: ["Power BI", "Microsoft Fabric", "OneLake", "Azure", "SQL"],
    iconName: "BarChart3",
    status: "Exploring",
    features: [
      "Interactive executive and operational dashboards",
      "Data ingestion and transformation with Microsoft Fabric",
      "Unified storage integration with OneLake"
    ]
  }
];

export const INITIAL_GOALS: Goal[] = [
  { id: "1", text: "Become stronger in Data Structures & Algorithms (C++)", completed: true, category: "DSA" },
  { id: "2", text: "Build production-ready full-stack applications (React + Spring/Node)", completed: true, category: "Full-Stack" },
  { id: "3", text: "Develop practical AI/ML projects with real-world datasets", completed: false, category: "AI/ML" },
  { id: "4", text: "Strengthen backend development & distributed systems skills", completed: false, category: "Backend" },
  { id: "5", text: "Explore cloud architecture (Azure) and modern data engineering (Fabric)", completed: false, category: "Cloud & Data" },
  { id: "6", text: "Build a strong, high-impact software engineering portfolio", completed: true, category: "Career" }
];
