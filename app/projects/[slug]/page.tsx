import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Code2, Calendar, Tag } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Nama Kamu`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-5xl">
        
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              {project.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Calendar className="w-4 h-4" />
              {project.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-zinc-400 mb-8">{project.longDescription}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                Source Code
              </Link>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tech Stack */}
        <BentoCard className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </BentoCard>

        {/* Case Study */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {project.challenges && (
            <BentoCard>
              <h3 className="text-lg font-bold mb-3 text-red-400">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-red-400">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </BentoCard>
          )}

          {project.solutions && (
            <BentoCard>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Solutions</h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-blue-400">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </BentoCard>
          )}

          {project.results && (
            <BentoCard>
              <h3 className="text-lg font-bold mb-3 text-green-400">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex gap-2">
                    <span className="text-green-400">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </BentoCard>
          )}
        </div>

        {/* Gallery */}
        {project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}