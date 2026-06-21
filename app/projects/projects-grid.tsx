"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export function ProjectsGrid() {
  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  // State untuk filter kategori
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Logic filtering
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Filter by Category */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge 
          variant="secondary" 
          className={`cursor-pointer transition-colors ${
            activeCategory === "All" 
              ? "bg-blue-500/10 text-blue-400 border-blue-500/50" 
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge 
            key={category}
            variant="secondary" 
            className={`cursor-pointer transition-colors ${
              activeCategory === category 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/50" 
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-zinc-500 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
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

                {/* Link - Sekarang mengarah ke liveUrl jika ada */}
                {project.liveUrl ? (
                  <Link 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mt-auto"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    View Live Demo <ExternalLink className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
                  </Link>
                ) : (
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mt-auto"
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
                  </Link>
                )}
              </div>
            </BentoCard>
          ))
        )}
      </div>
    </>
  );
}