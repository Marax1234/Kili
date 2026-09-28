// src/components/portfolio/PortfolioHighlights.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { ArrowRight, Eye, Heart, Camera } from "lucide-react";
import type { PortfolioImage } from "@/lib/types";

// Mock Data für Portfolio-Highlights (später aus CMS/Database)
const mockHighlights: PortfolioImage[] = [
  {
    id: "1",
    src: "/images/portfolio/highlight-1.jpg",
    alt: "Portrait Photography - Natural Light",
    title: "Golden Hour Portrait",
    description: "Capturing authentic emotions in natural light",
    width: 800,
    height: 1000,
    category: "portraits",
    tags: ["natural-light", "golden-hour", "portrait"],
    featured: true,
    location: "Munich, Germany",
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L",
      aperture: "f/2.8",
      shutterSpeed: "1/250",
      iso: "200"
    }
  },
  {
    id: "2", 
    src: "/images/portfolio/highlight-2.jpg",
    alt: "Landscape Photography - Mountain Vista",
    title: "Alpine Sunrise",
    description: "First light over the Bavarian Alps",
    width: 1200,
    height: 800,
    category: "landscapes",
    tags: ["sunrise", "mountains", "nature"],
    featured: true,
    location: "Bavarian Alps, Germany",
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 24-70mm f/2.8L",
      aperture: "f/8",
      shutterSpeed: "1/125",
      iso: "100"
    }
  },
  {
    id: "3",
    src: "/images/portfolio/highlight-3.jpg", 
    alt: "Street Photography - Urban Life",
    title: "City Rhythms",
    description: "Finding poetry in everyday moments",
    width: 800,
    height: 1200,
    category: "street",
    tags: ["urban", "black-white", "candid"],
    featured: true,
    location: "Berlin, Germany",
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 35mm f/1.8",
      aperture: "f/4",
      shutterSpeed: "1/500",
      iso: "800"
    }
  },
  {
    id: "4",
    src: "/images/portfolio/highlight-4.jpg",
    alt: "Creative Photography - Abstract",
    title: "Light & Shadow",
    description: "Exploring abstract compositions",
    width: 1000,
    height: 1000,
    category: "creative",
    tags: ["abstract", "shadows", "creative"],
    featured: true,
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 50mm f/1.2L",
      aperture: "f/1.4",
      shutterSpeed: "1/1000",
      iso: "400"
    }
  },
  {
    id: "5",
    src: "/images/portfolio/highlight-5.jpg",
    alt: "Portrait Photography - Studio Setup",
    title: "Studio Elegance",
    description: "Controlled lighting for dramatic effect",
    width: 800,
    height: 1200,
    category: "portraits",
    tags: ["studio", "dramatic", "portrait"],
    featured: true,
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L",
      aperture: "f/2",
      shutterSpeed: "1/160",
      iso: "100"
    }
  },
  {
    id: "6",
    src: "/images/portfolio/highlight-6.jpg",
    alt: "Landscape Photography - Coastal Scene",
    title: "Ocean's Edge",
    description: "Where land meets sea",
    width: 1200,
    height: 800,
    category: "landscapes",
    tags: ["ocean", "long-exposure", "coastal"],
    featured: true,
    location: "North Sea, Germany",
    camera: {
      camera: "Canon EOS R5",
      lens: "RF 16-35mm f/2.8L",
      aperture: "f/11",
      shutterSpeed: "30s",
      iso: "50"
    }
  }
];

const PortfolioHighlights = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const { portfolioHighlights } = siteConfig.home;

  // Filter highlights basierend auf Kategorie
  const filteredHighlights = selectedCategory === "all" 
    ? mockHighlights 
    : mockHighlights.filter(img => img.category === selectedCategory);

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Camera className="w-3 h-3 mr-2" />
            {portfolioHighlights.title}
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {portfolioHighlights.description}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { slug: "all", name: "All Work" },
              ...siteConfig.portfolioCategories.filter(cat => cat.featured)
            ].map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.slug
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </MotionDiv>

        {/* Portfolio Grid */}
        <MotionDiv
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredHighlights.map((image, index) => (
            <MotionDiv
              key={image.id}
              variants={itemVariant}
              layout
              className={`group relative overflow-hidden rounded-lg bg-muted ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-md bg-background/90">
                    {siteConfig.portfolioCategories.find(cat => cat.slug === image.category)?.name || image.category}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="backdrop-blur-md bg-background/90">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="secondary" className="backdrop-blur-md bg-background/90">
                    <Heart className="h-3 w-3" />
                  </Button>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80 mb-3">{image.description}</p>
                    
                    {/* Camera Info */}
                    {image.camera && hoveredImage === image.id && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs text-white/60 space-y-1"
                      >
                        <div>{image.camera.camera} • {image.camera.lens}</div>
                        <div>
                          {image.camera.aperture} • {image.camera.shutterSpeed} • ISO {image.camera.iso}
                        </div>
                        {image.location && <div>📍 {image.location}</div>}
                      </MotionDiv>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* CTA Button */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <MotionDiv
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" asChild className="group">
              <Link href={portfolioHighlights.cta.url}>
                {portfolioHighlights.cta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MotionDiv>
          
          <p className="text-sm text-muted-foreground mt-4">
            Explore the complete collection of {filteredHighlights.length}+ photographs
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default PortfolioHighlights;