import { Skill, Experience } from "./types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  
  // Tools
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 60, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Tech Company ABC",
    period: "2025 - Present",
    description: "Membangun dan maintain aplikasi web skala enterprise dengan React dan Next.js.",
    tech: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    role: "Junior Web Developer",
    company: "Startup XYZ",
    period: "2024 - 2025",
    description: "Develop fitur-fitur baru untuk platform e-commerce dan optimasi performa.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2023 - 2024",
    description: "Mengerjakan berbagai project web untuk klien lokal dan internasional.",
    tech: ["React", "Vue.js", "PHP", "MySQL"],
  },
];

export const education = [
  {
    degree: "S1 Teknik Informatika",
    institution: "Universitas ABC",
    period: "2019 - 2023",
    gpa: "3.75/4.00",
  },
];

export const certifications = [
  {
    name: "Meta Frontend Developer Professional Certificate",
    issuer: "Coursera",
    date: "2025",
    url: "https://coursera.org/certificate/xxx",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "https://aws.amazon.com/certification/xxx",
  },
];