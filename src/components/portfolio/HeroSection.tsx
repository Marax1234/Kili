// src/components/portfolio/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { ArrowRight, Camera, MapPin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { hero } = siteConfig.home;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-bg-pattern opacity-50" />
      
      {/* Background Image (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <MotionDiv
            variants={containerVariant}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Status Badge */}
            <MotionDiv variants={itemVariant}>
              <Badge 
                variant="outline" 
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                {siteConfig.contact.availability.status} for new projects
              </Badge>
            </MotionDiv>

            {/* Main Title */}
            <MotionDiv variants={itemVariant} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">
                  {hero.title.split(',')[0]},
                </span>
                <span className="block text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {hero.title.split(',')[1]}
                </span>
              </h1>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Camera className="h-5 w-5" />
                <span className="text-lg font-medium">{hero.subtitle}</span>
                <span className="text-sm">•</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{siteConfig.author.location}</span>
                </div>
              </div>
            </MotionDiv>

            {/* Description */}
            <MotionDiv variants={itemVariant}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {hero.description}
              </p>
            </MotionDiv>

            {/* Action Buttons */}
            <MotionDiv variants={itemVariant} className="flex flex-col sm:flex-row gap-4">
              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" asChild className="min-w-[160px] group">
                  <Link href={hero.buttons.primary.url}>
                    {hero.buttons.primary.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MotionDiv>

              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" variant="outline" asChild className="min-w-[160px] group">
                  <Link href={hero.buttons.secondary.url}>
                    <Mail className="mr-2 h-4 w-4" />
                    {hero.buttons.secondary.text}
                  </Link>
                </Button>
              </MotionDiv>
            </MotionDiv>

            {/* Social Proof */}
            <MotionDiv variants={itemVariant} className="pt-8">
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                {siteConfig.home.aboutPreview.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Hero Image */}
          <MotionDiv
            variants={imageVariant}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-background/20 rounded-xl" />
              
              {/* Main Image */}
              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  data-ai-hint={hero.image.hint}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm font-medium">Currently Available</div>
                    <div className="text-xs text-muted-foreground">Booking new projects</div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default HeroSection;