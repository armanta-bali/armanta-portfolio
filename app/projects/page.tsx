import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern technologies.",
};

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A collection of projects I've built with modern web technologies. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter by Category */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/50 cursor-pointer">
            All
          </Badge>
          {categories.map((category) => (
            <Badge 
              key={category}
              variant="secondary" 
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <BentoCard 
              key={project.slug}
              className="group/card overflow-hidden flex flex-col"
              delay={index * 0.1}
            >
              {/* Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 -mx-6 -mt-6 w-[calc(100%+3rem)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-blue-500 text-white">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-zinc-500">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover/card:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Link */}
                <Link 
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mt-auto"
                >
                  View Details <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </div>
  );
}