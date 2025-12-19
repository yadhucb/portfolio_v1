
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
