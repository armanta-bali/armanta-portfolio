import { Metadata } from "next";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects | Armanta Bali",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 pt-16 md:pt-20 py-8 md:p-8 lg:p-12">
      <div className="container-bento mt-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A collection of projects I've built with modern web technologies. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid - Client Component */}
        <ProjectsGrid />
      </div>
    </div>
  );
}