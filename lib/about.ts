import { Skill, Experience } from "./types";

export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript (ES6+)", level: 90, category: "Programming Languages" },
  { name: "TypeScript", level: 85, category: "Programming Languages" },
  { name: "HTML5", level: 95, category: "Programming Languages" },
  { name: "CSS3", level: 95, category: "Programming Languages" },

  // Frameworks & Libraries
  { name: "React.js", level: 90, category: "Frameworks & Libraries" },
  { name: "Next.js", level: 85, category: "Frameworks & Libraries" },
  { name: "Tailwind CSS", level: 90, category: "Frameworks & Libraries" },
  { name: "Framer Motion", level: 75, category: "Frameworks & Libraries" },

  // Tools & Technologies
  { name: "Git", level: 85, category: "Tools & Technologies" },
  { name: "GitHub", level: 85, category: "Tools & Technologies" },
  { name: "Vite", level: 80, category: "Tools & Technologies" },
  { name: "Webpack", level: 70, category: "Tools & Technologies" },
  { name: "Vercel", level: 85, category: "Tools & Technologies" },
  { name: "RESTful APIs", level: 80, category: "Tools & Technologies" },

  // Concepts & Practices
  {
    name: "Responsive Web Design",
    level: 95,
    category: "Concepts & Practices",
  },
  { name: "UI/UX Implementation", level: 85, category: "Concepts & Practices" },
  {
    name: "Web Performance Optimization",
    level: 85,
    category: "Concepts & Practices",
  },
  { name: "State Management", level: 80, category: "Concepts & Practices" },
  {
    name: "Mobile-First Development",
    level: 90,
    category: "Concepts & Practices",
  },
];

export const experiences: Experience[] = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed / Freelance",
    period: "Feb 2026 - Present",
    description:
      "Developing and deploying production-ready websites for real clients, translating UI/UX designs into responsive, pixel-perfect interfaces. Managing full frontend development lifecycle from requirement gathering to deployment.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "Universitas Tabanan",
    period: "2025 - Present",
    gpa: "", // Kosongkan karena belum ada IPK
  },
];

export const certifications = [
  {
    name: "Responsive Web Design Professional Certificate",
    issuer: "freeCodeCamp",
    date: "2026",
    url: "https://www.freecodecamp.org/certification/armanta/responsive-web-design-v9",
  },
];
