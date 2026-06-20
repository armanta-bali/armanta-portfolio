import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, MapPin, Coffee, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio. I'm a Frontend Developer specializing in React, Next.js, and modern web technologies.",
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(160px,auto)] md:auto-rows-[minmax(180px,auto)]">
        
        {/* HERO CARD */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-linear-to-br from-zinc-900 to-zinc-950">
          <div>
            <Badge variant="outline" className="mb-3 md:mb-4 border-blue-500/50 text-blue-400 bg-blue-500/10 text-xs md:text-sm">
              <Sparkles className="w-3 h-3 mr-1" /> Available for work
            </Badge>
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4">
              Halo, Saya <br />
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Nama Kamu
              </span>
            </h1>
            <p className="text-sm xs:text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed">
              Frontend Developer yang fokus membangun antarmuka web yang cepat, aksesibel, dan secara visual memukau menggunakan React & Next.js.
            </p>
          </div>
          
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 mt-6 md:mt-8">
            <Link 
              href="/projects" 
              className="flex items-center gap-2 bg-white text-zinc-900 px-4 xs:px-5 py-2.5 rounded-full font-medium hover:bg-zinc-200 transition-colors text-sm md:text-base w-full xs:w-auto justify-center"
            >
              Lihat Karya <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </BentoCard>

        {/* TECH STACK */}
        <BentoCard className="md:col-span-1" delay={0.1}>
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-auto">
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">Next.js</Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">Tailwind</Badge>
            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">React</Badge>
          </div>
        </BentoCard>

        {/* LOCATION */}
        <BentoCard className="md:col-span-1" delay={0.2}>
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm text-zinc-400">Online</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Lokasi</h3>
          <div className="flex items-center gap-2 text-zinc-300 mt-auto text-sm md:text-base">
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Indonesia, WIB</span>
          </div>
        </BentoCard>

        {/* FEATURED PROJECTS */}
        {featuredProjects.slice(0, 2).map((project, index) => (
          <BentoCard 
            key={project.slug}
            className="md:col-span-3 group/card overflow-hidden" 
            delay={0.3 + index * 0.1}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-64 h-48 md:h-auto rounded-xl overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="mb-2 border-zinc-700 text-zinc-400 text-xs">
                    Featured Project
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View Case Study <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </BentoCard>
        ))}

        {/* FUN FACT */}
        <BentoCard className="md:col-span-3 bg-linear-to-r from-zinc-900 via-zinc-900 to-blue-950/30" delay={0.5}>
          <div className="flex items-center gap-3 md:gap-4">
            <Coffee className="w-8 h-8 md:w-10 md:h-10 text-amber-500 shrink-0" />
            <div>
              <h3 className="text-base md:text-lg font-semibold">Saat tidak coding...</h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Saya sedang mengeksplore kopi single origin, membaca buku sci-fi, atau bermain game indie.
              </p>
            </div>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}