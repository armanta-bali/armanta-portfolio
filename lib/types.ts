export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}