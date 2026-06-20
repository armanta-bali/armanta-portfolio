import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, Code2, Briefcase, ExternalLink } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. Available for freelance projects, collaborations, and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:p-8 lg:p-12">
      <div className="container-bento max-w-5xl">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Tertarik untuk berkolaborasi atau punya project yang ingin dikerjakan bersama? Jangan ragu untuk menghubungi saya!
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
                    href="mailto:emailkamu@gmail.com"
                    className="text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    emailkamu@gmail.com
                  </Link>
                  <p className="text-zinc-500 text-sm mt-2">
                    Respon dalam 24 jam
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
                  <h3 className="text-lg font-bold mb-1">Lokasi</h3>
                  <p className="text-zinc-400">Indonesia</p>
                  <p className="text-zinc-500 text-sm mt-2">
                    Remote work friendly
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
                    <span className="text-green-400 font-medium">Available for work</span>
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
                  href="https://github.com/usernamekamu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-zinc-400" />
                    <span className="text-zinc-300">GitHub</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>

                <Link 
                  href="https://linkedin.com/in/usernamekamu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-zinc-400" />
                    <span className="text-zinc-300">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </BentoCard>
          </div>

          {/* Contact Form */}
          <BentoCard>
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Send Message
              </button>

              <p className="text-xs text-zinc-500 text-center">
                * Form ini akan diintegrasikan dengan Formspree/EmailJS setelah deploy
              </p>
            </form>
          </BentoCard>

        </div>

      </div>
    </div>
  );
}