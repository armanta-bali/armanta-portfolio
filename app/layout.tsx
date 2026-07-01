import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://armanta-portfolio.vercel.app"), // GANTI dengan URL production kamu setelah deploy
  title: {
    default: "I Wayan Armanta | Frontend Developer Portfolio",
    template: `%s | I Wayan Armanta`,
  },
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building fast, accessible, and beautiful web experiences.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript",
    "tailwind css",
    "web developer indonesia",
    "portfolio",
    "freelance developer",
    "ui/ux developer",
    "armanta bali",
    "bali developer",
  ],
  authors: [
    {
      name: "I Wayan Armanta",
      url: "https://github.com/armanta-bali",
    },
  ],
  creator: "I Wayan Armanta",
  publisher: "I Wayan Armanta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://armanta-portfolio.vercel.app",
    languages: {
      "id-ID": "https://armanta-portfolio.vercel.app",
      "en-US": "https://armanta-portfolio.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://armanta-portfolio.vercel.app",
    siteName: "Armanta Bali Portfolio",
    title: "I Wayan Armanta | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies. Building fast, accessible, and beautiful web experiences.",
    images: [
      {
        url: "/logo-ads.png", // Ganti dengan path og-image kalau kamu punya
        width: 1200,
        height: 630,
        alt: "I Wayan Armanta - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Wayan Armanta | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies",
    images: ["/logo-ads.png"],
    creator: "@armanta_bali", // Ganti dengan Twitter handle kamu kalau ada
    site: "@armanta_bali",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
