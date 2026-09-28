// src/components/portfolio/AboutPreview.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { ArrowRight, Camera, Award, Users, Calendar } from "lucide-react";

const AboutPreview = () => {
  const { aboutPreview } = siteConfig.home;

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <MotionDiv
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <MotionDiv variants={itemVariant}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Camera className="w-3 h-3" />
                <span>About Kilian</span>
              </div>
            </MotionDiv>

            {/* Title */}
            <MotionDiv variants={itemVariant}>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {aboutPreview.title}
              </h2>
            </MotionDiv>

            {/* Description */}
            <MotionDiv variants={itemVariant}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutPreview.description}
              </p>
            </MotionDiv>

            {/* Stats Grid */}
            <MotionDiv variants={itemVariant}>
              <div className="grid grid-cols-3 gap-6">
                {aboutPreview.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Highlights */}
            <MotionDiv variants={itemVariant}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What I Bring</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Camera, text: "Creative Vision" },
                    { icon: Award, text: "Quality Focus" },
                    { icon: Users, text: "Personal Approach" },
                    { icon: Calendar, text: "Reliable Service" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background border border-border/50">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* CTA Button */}
            <MotionDiv variants={itemVariant}>
              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" variant="outline" asChild className="group">
                  <Link href={aboutPreview.cta.url}>
                    {aboutPreview.cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>

          {/* Image Section */}
          <MotionDiv
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-preview.jpg" // Dein Portrait/BTS Foto
                  alt="Kilian Siebert - Photographer"
                  fill
                  className="object-cover"
                  data-ai-hint="photographer portrait behind the scenes"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-background rounded-lg p-4 shadow-lg border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Canon EOS R5</div>
                    <div className="text-xs text-muted-foreground">Primary Camera</div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg border border-border/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </MotionDiv>

              {/* Decorative Background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl -z-10" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;