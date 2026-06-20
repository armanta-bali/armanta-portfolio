"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll untuk background navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu saat route berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50"
            : "bg-transparent"
        )}
      >
        <nav className="container-bento flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors"
            aria-label="Home"
          >
            Portfolio<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === link.href
                    ? "text-blue-400"
                    : "text-zinc-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/armanta-bali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Code2 className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/usernamekamu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:emailkamu@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-zinc-950 border-l border-zinc-800 z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "text-2xl font-semibold py-4 px-4 rounded-lg transition-colors",
                          pathname === link.href
                            ? "bg-blue-500/10 text-blue-400"
                            : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-8 border-t border-zinc-800" />

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                    Connect
                  </h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/armanta-bali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Code2 className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/armanta-bali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <User className="w-5 h-5" />
                    </Link>
                    <Link
                      href="mailto:emailkamu@gmail.com"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-8 border-t border-zinc-800"
                >
                  <p className="text-sm text-zinc-500">
                    © 2026 Nama Kamu. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}