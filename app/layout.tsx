import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
  metadataBase: new URL('https://myportfolio.vercel.app'), // GANTI dengan URL production kamu
  title: {
    default: 'Nama Kamu | Frontend Developer Portfolio',
    template: `%s | Nama Kamu`
  },
  description: 'Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building fast, accessible, and beautiful web experiences.',
  keywords: [
    'frontend developer',
    'react developer',
    'next.js developer',
    'typescript',
    'tailwind css',
    'web developer indonesia',
    'portfolio',
    'freelance developer',
    'ui/ux developer'
  ],
  authors: [
    { 
      name: 'armanta', 
      url: 'https://github.com/armanta-bali' 
    }
  ],
  creator: 'armanta',
  publisher: 'armanta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://myportfolio.vercel.app',
    languages: {
      'id-ID': 'https://myportfolio.vercel.app',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://myportfolio.vercel.app',
    siteName: 'armanta Portfolio',
    title: 'armanta | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js, and modern web technologies',
    images: [
      {
        url: '/api/og?title=Nama%20Kamu&subtitle=Frontend%20Developer',
        width: 1200,
        height: 630,
        alt: 'armanta - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nama Kamu | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js, and modern web technologies',
    images: ['/og-image.png'],
    creator: '@twitterhandlekamu', // GANTI dengan Twitter handle kamu
    site: '@twitterhandlekamu',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          <Navbar />
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}