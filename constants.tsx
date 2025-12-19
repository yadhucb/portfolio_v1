
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Yadhu Krishna C B",
  title: "Senior Software Engineer | AI & Backend Architect",
  email: "yadhucb96@gmail.com",
  linkedin: "https://www.linkedin.com/in/yadhukrishna-c-b-308106242",
  github: "https://github.com/yadhucb",
  location: "Ernakulam, Kerala, India",
  bio: "Senior Software Engineer with 3.4+ years of specialized experience in the Python/Django ecosystem. I specialize in architecting resilient backend systems for enterprise GRC platforms like AUREX, with a deep interest in AI integration, high-concurrency APIs, and microservice orchestration.",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Beinex",
    role: "Senior Software Engineer",
    period: "Sept 2025 - Present",
    description: [
      "Leading the technical evolution of AUREX (GRC platform), orchestrating the transition from monolithic to microservice-oriented architecture for enhanced scalability.",
      "Spearheading the implementation of containerized workflows using Docker and managing complex AWS deployments for enterprise-tier clients.",
      "Optimizing core ORM performance and introducing high-efficiency handling for many-to-many field historical data and dynamic charting modules.",
      "Mentoring a high-growth team of developers and overseeing the backend training of 50+ interns and junior engineers to foster engineering excellence."
    ],
    skills: ["Microservices", "Docker", "Architecture", "AWS", "Code Review"]
  },
  {
    company: "Beinex",
    role: "Software Engineer",
    period: "Sept 2023 - Sept 2025",
    description: [
      "Architected the standard API layer for AUREX using Django REST Framework, ensuring consistent data structures across high-traffic modules.",
      "Conducted thorough technical reviews for over 200+ merge requests, focusing on standardization, security, and query efficiency.",
      "Developed advanced permission and authorization systems at license, group, and user levels to support complex governance requirements.",
      "Engineered automated record history and audit trail features, providing critical transparency for GRC platform users."
    ],
    skills: ["DRF", "PostgreSQL", "System Design", "Audit Trails", "API Gateway"]
  },
  {
    company: "Beinex",
    role: "Associate Software Engineer",
    period: "Aug 2021 - Sept 2023",
    description: [
      "Full-lifecycle development of 200+ RESTful APIs for the AUREX core engine, focusing on secure authentication and real-time notifications.",
      "Contributed to the design of the platform's initial user management and identity provisioning modules.",
      "Enhanced system reliability by identifying and mitigating performance bottlenecks in the early-stage Django application layers."
    ],
    skills: ["Python", "Django", "SQL", "Authentication", "User Management"]
  },
  {
    company: "Luminar Technolab",
    role: "Web Developer",
    period: "March 2022 - August 2022",
    description: [
      "Designed and deployed responsive web solutions with Django, focusing on process automation for internal administrative tasks.",
      "Built clean, maintainable front-end interfaces that integrated seamlessly with Python-based backend logic."
    ],
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AUREX GRC Ecosystem",
    description: "Enterprise Governance, Risk, and Compliance platform. Engineered complex microservices, automated multi-tenant audits, and dynamic data engines for global risk management.",
    tags: ["GRC", "Django", "Microservices", "Docker"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "https://www.aurex.ai/"
  },
  {
    title: "Smart Pharmacy Management",
    description: "Advanced healthcare ERP featuring granular batch-level tracking, intelligent inventory replenishment suggestions based on usage trends, and a high-concurrency billing system.",
    tags: ["Django", "Inventory", "Analytics", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/yadhucb"
  },
  {
    title: "Scalable E-commerce Engine",
    description: "A high-performance retail backend with ElasticSearch integration for instant product discovery, secure Stripe payment orchestration, and automated order fulfillment.",
    tags: ["DRF", "ElasticSearch", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/yadhucb"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Core Engineering",
    skills: ["Python", "Django", "Django REST Framework", "Microservices", "FastAPI", "HTTP Protocols"]
  },
  {
    name: "System & Cloud",
    skills: ["Docker", "AWS (EC2, S3, RDS)", "Nginx", "Linux/Bash", "CI/CD", "Redis"]
  },
  {
    name: "Data & Security",
    skills: ["PostgreSQL", "ORM Optimization", "Auth (JWT/OAuth)", "Permission Design", "ElasticSearch"]
  },
  {
    name: "AI & Leadership",
    skills: ["AI Agents", "LLM Integration", "Code Review (200+ MRs)", "Team Mentoring", "Testing (Pytest)"]
  }
];
