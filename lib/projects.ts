import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4, featuring Bento Grid layout and smooth animations.",
    longDescription: "A personal portfolio website designed to showcase my projects and skills. Built with the latest web technologies including Next.js 15 for optimal performance, TypeScript for type safety, Tailwind CSS v4 for styling, and Framer Motion for smooth animations. The site features a responsive Bento Grid layout, dark mode support, and optimized image loading.",
    image: "/projects/portfolio/hero.jpg",
    images: [
      "/projects/portfolio/1.jpg",
      "/projects/portfolio/2.jpg",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Website",
    liveUrl: "https://armanta-bali.vercel.app", // Update with your actual deployed URL
    githubUrl: "https://github.com/armanta-bali/armanta-portfolio",
    featured: true,
    date: "2026-06",
    challenges: [
      "Creating a responsive Bento Grid layout that works on all devices",
      "Optimizing performance for Lighthouse score 90+",
      "Implementing dark mode without flicker",
    ],
    solutions: [
      "CSS Grid with auto-rows and custom breakpoints",
      "Image optimization with next/image and lazy loading",
      "next-themes with suppressHydrationWarning",
    ],
    results: [
      "Lighthouse score: 98/100",
      "First Contentful Paint: 0.8s",
      "Zero layout shift (CLS: 0)",
    ],
  },
  {
    slug: "Transport-landing-page",
    title: "Armanta Transport bali Landing Page",
    description: "A responsive landing page for a local business client, built with React and Tailwind CSS, featuring contact form integration.",
    longDescription: "Developed a professional landing page for a local business client. The project focused on creating a clean, modern design that effectively showcases the client's services and encourages conversions. Implemented a responsive layout, smooth scroll animations, and integrated a contact form with email notification.",
    image: "/projects/landing-page/hero.png",
    images: [
      "/projects/landing-page/1.png",
      "/projects/landing-page/2.png",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Formspree"],
    category: "Website",
    liveUrl: "https://armanta-transport-bali-gj1n.vercel.app/", // Update with actual URL or remove if not deployed
    githubUrl: "https://github.com/armanta-bali/armanta-transport-bali",
    featured: false,
    date: "2026-04",
    challenges: [
      "Creating a design that matches the client's brand identity",
      "Ensuring mobile responsiveness across all devices",
      "Integrating contact form with email notifications",
    ],
    solutions: [
      "Custom Tailwind theme with client's brand colors",
      "Mobile-first approach with responsive breakpoints",
      "Formspree integration for form handling",
    ],
    results: [
      "Client satisfaction: positive feedback on design and functionality",
      "Mobile-friendly: 100% responsive across devices",
      "Contact form successfully integrated and tested",
    ],
  },
  
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}