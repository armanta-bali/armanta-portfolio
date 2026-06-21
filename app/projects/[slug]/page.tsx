import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/lib/projects";

// Custom GitHub Icon (karena lucide-react Github icon bermasalah)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Armanta Bali`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Armanta Bali`,
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 pt-16 md:pt-20 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-5xl">
        
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          aria-label="Back to projects list"
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
                aria-label={`View live demo of ${project.title}`}
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
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
                Source Code
              </Link>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={`${project.title} hero image`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
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
          {project.challenges && project.challenges.length > 0 && (
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

          {project.solutions && project.solutions.length > 0 && (
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

          {project.results && project.results.length > 0 && (
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
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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