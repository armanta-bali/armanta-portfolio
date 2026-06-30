import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { ContactForm } from "./contact-form";

// Custom SVG for LinkedIn
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Custom SVG for GitHub (karena lucide-react Github icon bermasalah)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact | Armanta Bali",
  description:
    "Get in touch with me. Available for freelance projects, collaborations, and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-5xl mt-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Interested in collaborating or have a project in mind? Don't
            hesitate to reach out. I'm always open to discussing new
            opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <BentoCard>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <Link
                    href="mailto:armanta.dev95@gmail.com"
                    className="text-zinc-400 hover:text-blue-400 transition-colors break-all"
                  >
                    armanta.dev95@gmail.com
                  </Link>
                  <p className="text-zinc-500 text-sm mt-2">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-zinc-400">Indonesia</p>
                  <p className="text-zinc-500 text-sm mt-2">
                    Open to remote work worldwide
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Availability</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 font-medium">
                      Available for work
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Open for freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Social Links */}
            <BentoCard delay={0.3}>
              <h3 className="text-lg font-bold mb-4">Connect with me</h3>
              <div className="space-y-3">
                <Link
                  href="https://github.com/armanta-bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>

                <Link
                  href="https://bit.ly/linkedin-armanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </BentoCard>
          </div>

          {/* Contact Form - Menggunakan Client Component */}
          <BentoCard>
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <ContactForm />
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
