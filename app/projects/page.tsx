import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.",
  openGraph: {
    title: "Projects | Nama Kamu",
    description: "Explore my portfolio of web development projects",
    images: ['/og-projects.png'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-zinc-400 text-lg mb-12">
          A collection of projects I've built with modern web technologies.
        </p>
        
        {/* Projects grid akan ditambahkan nanti */}
        <div className="text-zinc-500">Coming soon...</div>
      </div>
    </div>
  );
}