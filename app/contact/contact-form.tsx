"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
    );
    formData.append(
      "subject",
      `New Contact from Portfolio: ${formData.get("subject")}`,
    );
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
        <p className="text-zinc-400 mb-6">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>
        <h4 className="text-xl font-bold mb-2">Oops! Something went wrong</h4>
        <p className="text-zinc-400 mb-6">
          Failed to send your message. Please try again or email me directly.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        I'll get back to you within 24 hours.
      </p>
    </form>
  );
}
