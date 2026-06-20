import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my journey as a Frontend Developer, my skills, and what drives my passion for building great web experiences.",
  openGraph: {
    title: "About Me | armanta",
    description: "Learn more about my journey and skills as a Frontend Developer",
    images: ['/og-about.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Get to know me better.
        </p>
        
        {/* About content akan ditambahkan nanti */}
        <div className="text-zinc-500">Coming soon...</div>
      </div>
    </div>
  );
}