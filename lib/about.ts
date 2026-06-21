import { Skill, Experience } from "./types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express", level: 65, category: "Backend" },
  { name: "PostgreSQL", level: 60, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Backend" },
  
  // Tools
  { name: "Git", level: 80, category: "Tools" },
  { name: "Docker", level: 50, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
];

export const experiences: Experience[] = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2024 - Present",
    description: "Building custom websites and web applications for local and international clients. Focused on creating responsive, user-friendly interfaces with modern technologies.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    role: "Personal Projects",
    company: "Self-learning",
    period: "2023 - Present",
    description: "Developing various web projects to enhance skills and explore new technologies. Building portfolio websites, landing pages, and full-stack applications.",
    tech: ["React", "Vue.js", "JavaScript", "MongoDB", "PostgreSQL"],
  },
];

export const education = [
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "Universitas Tabanan",
    period: "Aug 2025 - Present",
    gpa: "Active Student",
  },
];

export const certifications = [
  {
    name: "React Bootcamp",
    issuer: "wpu course",
    date: "In Progress",
    url: "https://wpucourse.id",
  },
  {
    name: "Full Stack Next JS : Realtime Point Of Sale Apps",
    issuer: "wpu course",
    date: "In Progress",
    url: "https://wpucourse.id",
  },
  {
    name: "Belajar MERN Stack : MongoDB, Express, React, Node JS",
    issuer: "wpu course",
    date: "In Progress",
    url: "https://wpucourse.id",
  },
];