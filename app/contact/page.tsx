import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. Available for freelance projects, collaborations, and full-time opportunities.",
  openGraph: {
    title: "Contact | armanta",
    description: "Get in touch for collaborations and opportunities",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Let's connect and build something great together.
        </p>
        
        {/* Contact form akan ditambahkan nanti */}
        <div className="text-zinc-500">Coming soon...</div>
      </div>
    </div>
  );
}