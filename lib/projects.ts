import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4, featuring Bento Grid layout and smooth animations.",
    longDescription:
      "A personal portfolio website designed to showcase my projects and skills. Built with the latest web technologies including Next.js 15 for optimal performance, TypeScript for type safety, Tailwind CSS v4 for styling, and Framer Motion for smooth animations. The site features a responsive Bento Grid layout, dark mode support, and optimized image loading.",
    image: "/projects/portfolio/hero.webp",
    images: ["/projects/portfolio/1.jpg", "/projects/portfolio/2.jpg"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Website",
    liveUrl: "https://armanta-portfolio.vercel.app", // Update with your actual deployed URL
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
    description:
      "A responsive landing page for a local business client, built with React and Tailwind CSS, featuring contact form integration.",
    longDescription:
      "Developed a professional landing page for a local business client. The project focused on creating a clean, modern design that effectively showcases the client's services and encourages conversions. Implemented a responsive layout, smooth scroll animations, and integrated a contact form with email notification.",
    image: "/projects/armanta-transport/hero.webp",
    images: ["/projects/landing-page/1.png", "/projects/landing-page/2.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Formspree"],
    category: "Website",
    liveUrl: "https://armanta-transport-bali.vercel.app/", // Update with actual URL or remove if not deployed
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
  {
    slug: "yulin-law-office",
    title: "Yulin Law Office Website",
    description:
      "A professional corporate website for a law firm, built with Next.js and Tailwind CSS, featuring pixel-perfect responsive design and optimized Core Web Vitals.",
    longDescription:
      "Developed a professional corporate website for Yulin Law Office, translating Figma wireframes into pixel-perfect, fully responsive interfaces. The project included multiple sections such as Services, Insights, About Us, and Contact, with integrated email notification services for client inquiries. Achieved excellent Core Web Vitals with LCP under 2.0s and CLS of 0, ensuring optimal user experience and SEO performance.",
    image: "/projects/yulin-law/hero.webp",
    images: ["/projects/yulin-law/1.png", "/projects/yulin-law/2.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    category: "Website",
    liveUrl: "https://yulinlawoffice.com/",
    githubUrl: "https://github.com/armanta-bali/yulin-law-office",
    featured: true,
    date: "2026-06",
    challenges: [
      "Translating complex Figma wireframes into pixel-perfect, responsive interfaces",
      "Implementing multi-page routing with Next.js App Router for Services, Insights, About Us, and Contact sections",
      "Optimizing Core Web Vitals for excellent user experience and SEO",
      "Integrating contact form with email notification services for instant client communication",
    ],
    solutions: [
      "Mobile-first approach with Tailwind CSS for consistent design across devices",
      "Next.js App Router with dynamic routing and Server Components for optimal performance",
      "Image optimization and lazy loading for fast page loads",
      "Contact form integration with Web3Forms for reliable email delivery",
    ],
    results: [
      "Largest Contentful Paint (LCP): under 2.0 seconds",
      "Cumulative Layout Shift (CLS): 0 (perfect stability)",
      "Reduced client inquiry response time from 48 hours to under 2 hours",
      "100% responsive across all devices with pixel-perfect implementation",
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
