// src/app/page.tsx - Neue Portfolio Homepage
import { Metadata } from "next";
import { siteConfig } from "@/content/config";
import HeroSection from "@/components/portfolio/HeroSection";
import PortfolioHighlights from "@/components/portfolio/PortfolioHighlights";
import AboutPreview from "@/components/portfolio/AboutPreview";
import ContactCTA from "@/components/portfolio/ContactCTA";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.home.hero.title,
    description: siteConfig.home.hero.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.home.hero.image.src,
        width: 1200,
        height: 630,
        alt: siteConfig.home.hero.image.alt,
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.home.hero.title,
    description: siteConfig.home.hero.description,
    images: [siteConfig.home.hero.image.src],
    creator: siteConfig.seo.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Highlights */}
      <Suspense fallback={<PortfolioHighlightsSkeleton />}>
        <PortfolioHighlights />
      </Suspense>

      {/* About Preview */}
      <AboutPreview />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

// Loading Skeleton für Portfolio Highlights
function PortfolioHighlightsSkeleton() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-8 bg-muted animate-pulse rounded-md w-48 mx-auto mb-4" />
          <div className="h-4 bg-muted animate-pulse rounded-md w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}