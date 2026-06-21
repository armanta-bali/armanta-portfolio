import { Metadata } from "next";
import Image from "next/image";
import { Terminal, Briefcase, GraduationCap, Award, Heart } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { skills, experiences, education, certifications } from "@/lib/about";

export const metadata: Metadata = {
  title: "About | Armanta Bali",
  description: "Learn more about me, my journey as a Frontend Developer, my skills, and what drives my passion for building great web experiences.",
};

export default function AboutPage() {
  const skillCategories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 pt-16 md:pt-20 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-5xl mt-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
            <Image
              src="/profile.jpeg"
              alt="Armanta Bali - Frontend Developer"
              fill
              className="object-cover"
              priority
              sizes="192px"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I'm a Frontend Developer passionate about building web interfaces that are not only beautiful but also fast, accessible, and user-friendly. With over 2 years of experience, I've worked on various projects ranging from startups to enterprise-level applications.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I believe the best technology is invisible — it allows users to focus on their goals, not the interface. That's what I strive for in every project I work on.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <BentoCard key={category}>
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter(s => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-zinc-300 font-medium">{skill.name}</span>
                          <span className="text-zinc-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <BentoCard key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-zinc-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-zinc-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            {education.map((edu, index) => (
              <BentoCard key={index}>
                <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                <p className="text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-zinc-500 text-sm mb-2">{edu.period}</p>
                <p className="text-zinc-400">GPA: {edu.gpa}</p>
              </BentoCard>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <BentoCard key={index} delay={index * 0.1}>
                  <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                  <p className="text-blue-400 mb-1">{cert.issuer}</p>
                  <p className="text-zinc-500 text-sm">{cert.date}</p>
                </BentoCard>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold">Beyond Coding</h2>
          </div>
          <BentoCard>
            <p className="text-zinc-400 text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring single-origin coffee from different regions, reading sci-fi and tech books, playing indie games, and hiking on weekends. I'm also actively contributing to open-source projects and writing technical articles on my personal blog.
            </p>
          </BentoCard>
        </div>

      </div>
    </div>
  );
}