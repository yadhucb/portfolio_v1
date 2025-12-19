
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Yadhu Krishna C B",
  title: "Senior Software Engineer",
  email: "yadhu.krishna@example.com",
  linkedin: "https://www.linkedin.com/in/yadhu-krishna-c-b-308106242/",
  github: "https://github.com/",
  location: "India",
  bio: "Senior Software Engineer with a passion for building scalable, high-performance web applications and distributed systems. Expert in React, Node.js, and Cloud Infrastructure, with a focus on delivering clean, maintainable code and exceptional user experiences.",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Tech Mahindra",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: [
      "Leading front-end architecture for high-traffic enterprise platforms.",
      "Optimized application performance reducing load times by 40%.",
      "Mentoring junior developers and implementing CI/CD best practices."
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
  },
  {
    company: "Freelance / Independent Consultant",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description: [
      "Developed custom SaaS solutions for various startups in the FinTech space.",
      "Built robust GraphQL APIs and real-time dashboard systems.",
      "Managed end-to-end product lifecycles from ideation to deployment."
    ],
    skills: ["Next.js", "PostgreSQL", "GraphQL", "Redis"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Analytics Suite",
    description: "A comprehensive dashboard for real-time data visualization with predictive modeling integration.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://picsum.photos/seed/analytics/800/600",
    link: "#"
  },
  {
    title: "Cloud Infrastructure Monitor",
    description: "Distributed monitoring system providing instant alerts and health checks for Kubernetes clusters.",
    tags: ["Go", "Kubernetes", "Prometheus", "Grafana"],
    image: "https://picsum.photos/seed/cloud/800/600",
    link: "#"
  },
  {
    title: "Eco-Stream Platform",
    description: "Energy-efficient video streaming protocol implementation focused on reducing carbon footprint.",
    tags: ["WebRTC", "Rust", "TypeScript"],
    image: "https://picsum.photos/seed/stream/800/600",
    link: "#"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "NestJS", "Python", "Go", "GraphQL"]
  },
  {
    name: "Cloud & Devops",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Serverless"]
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI version of Yadhu Krishna C B's portfolio assistant. 
Your goal is to answer questions about Yadhu's professional background, skills, and projects based on the following info:
Name: Yadhu Krishna C B
Title: Senior Software Engineer
Skills: React, Node.js, AWS, Kubernetes, TypeScript, Next.js, etc.
Experience: Senior SE at Tech Mahindra, previously a Freelance Consultant.
Focus: Scalability, performance, and clean code.
Tone: Professional, helpful, creative, and tech-savvy. 
If someone asks about hiring Yadhu, provide his LinkedIn profile link: https://www.linkedin.com/in/yadhu-krishna-c-b-308106242/
Keep answers concise and engaging.
`;
