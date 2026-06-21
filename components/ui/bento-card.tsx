"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  variant?: "default" | "featured" | "minimal";
}

export function BentoCard({ 
  className, 
  children, 
  delay = 0,
  variant = "default",
}: BentoCardProps) {
  // Variant styles
  const variantStyles = {
    default: "border-zinc-800/50 bg-zinc-900/40 hover:border-zinc-700",
    featured: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50",
    minimal: "border-zinc-800/30 bg-zinc-900/20 hover:border-zinc-700/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border backdrop-blur-sm shadow-lg transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      {/* Gradient Overlay - Lebih subtle */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glow Effect - Lebih smooth */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6">
        {children}
      </div>
    </motion.div>
  );
}