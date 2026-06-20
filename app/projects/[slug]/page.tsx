import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";

// Dummy data - nanti ganti dengan data real
const projects = {
  "ecommerce-dashboard": {
    title: "E-Commerce Dashboard",
    description: "Dashboard analitik real-time untuk toko online dengan fitur monitoring penjualan, inventory, dan customer analytics.",
    tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  // Tambah project lain di sini
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | armanta`,
      description: project.description,
      images: [`/projects/${params.slug}/og-image.png`],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects];
  
  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": `https://myportfolio.vercel.app/projects/${params.slug}`,
    "author": {
      "@type": "Person",
      "name": "Nama Kamu",
      "url": "https://myportfolio.vercel.app"
    },
    "datePublished": "2026-01-01", // GANTI dengan tanggal real
    "keywords": project.tech.join(", "),
    "programmingLanguage": project.tech.join(", "),
    "codeRepository": "https://github.com/armanta-bali/project-repo", // GANTI
    "image": `https://myportfolio.vercel.app/projects/${params.slug}/screenshot.png`
  };
  return (
    <>
      <JsonLd data={projectSchema} />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
        <div className="container-bento max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-zinc-400 text-lg mb-8">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

            {/* Project details akan ditambahkan nanti */}
            <div className="text-zinc-500">Project details coming soon...</div>
            </div>
        </div>
    </>
  );
}