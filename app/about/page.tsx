import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";
import { skills, experiences, education, certifications } from "@/lib/about";
import { ProfileLinks } from "@/components/profile-links"; // <-- Import komponen baru

export const metadata: Metadata = {
  title: "About | I Wayan Armanta",
  description:
    "Learn more about I Wayan Armanta, a Frontend Developer specializing in React, Next.js, and TypeScript.",
};

export default function AboutPage() {
  const skillCategories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 pt-16 md:pt-20 py-8 md:p-8 lg:p-12">
      <div className="mt-20 container-bento max-w-5xl mx-auto">
        {/* Header / Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center md:items-start">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shrink-0 ring-4 ring-blue-500/20">
            <Image
              src="/profile.jpeg"
              alt="I Wayan Armanta"
              fill
              className="object-cover"
              priority
              sizes="192px"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              I Wayan Armanta
            </h1>
            <p className="text-blue-400 text-xl font-medium mb-4">
              Frontend Developer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 mb-6">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Tabanan, Bali, Indonesia</span>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Detail-oriented Frontend Developer with hands-on experience
              building responsive, high-performance web applications using
              React, Next.js, and TypeScript. Proven ability to deliver
              production-ready websites for real clients, including a law firm
              and a transportation company.
            </p>

            {/* Panggil komponen ProfileLinks di sini */}
            <ProfileLinks />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <BentoCard key={category}>
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-zinc-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-zinc-500 text-sm">
                            {skill.level}%
                          </span>
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
                    <p className="text-blue-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-zinc-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-zinc-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-300 text-xs"
                        >
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
                <p className="text-zinc-500 text-sm">{edu.period}</p>
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
                  {cert.url && cert.url !== "#" && (
                    <Link
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-2"
                    >
                      View Credential <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
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
              When I'm not coding, I enjoy exploring single-origin coffee,
              reading sci-fi books, and playing indie games. I'm also actively
              learning new technologies and working on personal projects to
              continuously improve my skills.
            </p>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
