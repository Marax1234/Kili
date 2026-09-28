// src/app/layout.tsx - Updated für Portfolio
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PortfolioHeader from "@/components/portfolio/Header"; // Neue Portfolio Header
import { siteConfig } from "@/content/config";
import { Space_Grotesk } from "next/font/google";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";

const Footer = dynamic(() => import("@/components/blog/Footer"));

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.seo.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.defaultImage],
    creator: siteConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
};

// Structured Data für Photographer
const photographerSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "ProfessionalService"],
  "name": siteConfig.author.name,
  "jobTitle": "Fotograf & Photographer",
  "description": siteConfig.description,
  "url": siteConfig.url,
  "image": siteConfig.author.avatar,
  "email": siteConfig.author.email,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE"
  },
  "serviceType": [
    "Fotografie",
    "Photography", 
    "Portrait Photography",
    "Event Photography",
    "Creative Photography"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "sameAs": siteConfig.author.social.map(social => social.url).filter(url => url !== "#")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(photographerSchema) }}
        />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/hero-image.jpg" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Spotlight />
        
        <div className="relative z-40 flex flex-col min-h-screen">
          {/* Portfolio Header instead of Blog Header */}
          <PortfolioHeader />
          
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          
          <Footer />
        </div>
        
        <Toaster />
      </body>
    </html>
  );
}