import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "Dashboard analitik real-time untuk monitoring penjualan dan inventory toko online.",
    longDescription: "Dashboard komprehensif yang membantu pemilik toko online memantau performa bisnis mereka secara real-time. Dilengkapi dengan visualisasi data interaktif, laporan otomatis, dan integrasi dengan berbagai payment gateway.",
    image: "/projects/ecommerce-dashboard/hero.jpg",
    images: [
      "/projects/ecommerce-dashboard/1.jpg",
      "/projects/ecommerce-dashboard/2.jpg",
      "/projects/ecommerce-dashboard/3.jpg",
    ],
    tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS", "Prisma"],
    category: "Web App",
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/armanta-bali/ecommerce-dashboard",
    featured: true,
    date: "2026-03",
    challenges: [
      "Menghandle real-time data dari multiple sources",
      "Optimasi performa untuk dataset besar (100k+ rows)",
      "Membuat chart yang responsive dan interaktif",
    ],
    solutions: [
      "Implementasi WebSocket untuk real-time updates",
      "Server-side pagination dan virtual scrolling",
      "Custom chart components dengan Chart.js",
    ],
    results: [
      "Loading time berkurang 60% dibanding solusi sebelumnya",
      "User satisfaction meningkat 40%",
      "Digunakan oleh 50+ toko online",
    ],
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Aplikasi manajemen tugas kolaboratif dengan fitur drag-and-drop dan real-time sync.",
    longDescription: "Aplikasi produktivitas yang memungkinkan tim mengelola tugas secara kolaboratif. Fitur utama termasuk kanban board, timeline view, dan integrasi dengan calendar.",
    image: "/projects/task-app/hero.jpg",
    images: [
      "/projects/task-app/1.jpg",
      "/projects/task-app/2.jpg",
    ],
    tech: ["React", "TypeScript", "Redux", "Socket.io", "MongoDB"],
    category: "Web App",
    liveUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/armanta-bali/task-app",
    featured: true,
    date: "2026-01",
    challenges: [
      "Real-time collaboration tanpa conflict",
      "Drag-and-drop yang smooth di mobile",
      "Offline support dengan sync otomatis",
    ],
    solutions: [
      "Conflict resolution algorithm dengan CRDT",
      "Touch-optimized drag-and-drop library",
      "Service Worker untuk offline caching",
    ],
    results: [
      "10k+ active users",
      "4.8/5 rating di Product Hunt",
      "Featured di Hacker News",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Website portfolio personal dengan Bento Grid layout dan animasi modern.",
    longDescription: "Website portfolio yang saya bangun untuk menampilkan karya-karya saya. Menggunakan teknologi modern seperti Next.js 15, Tailwind CSS v4, dan Framer Motion untuk animasi yang smooth.",
    image: "/projects/portfolio/hero.jpg",
    images: [
      "/projects/portfolio/1.jpg",
      "/projects/portfolio/2.jpg",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Website",
    liveUrl: "https://portfolio-kamu.vercel.app",
    githubUrl: "https://github.com/armanta-bali/armanta-portfolio",
    featured: true,
    date: "2026-06",
    challenges: [
      "Membuat Bento Grid yang responsive di semua device",
      "Optimasi performa untuk Lighthouse score 90+",
      "Implementasi dark mode tanpa flicker",
    ],
    solutions: [
      "CSS Grid dengan auto-rows dan breakpoints kustom",
      "Image optimization dengan next/image dan lazy loading",
      "next-themes dengan suppressHydrationWarning",
    ],
    results: [
      "Lighthouse score: 98/100",
      "First Contentful Paint: 0.8s",
      "Zero layout shift (CLS: 0)",
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