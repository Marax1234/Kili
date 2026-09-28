// src/components/portfolio/ContactCTA.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { Mail, ArrowRight, Send, Instagram, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { contactCTA } = siteConfig.home;

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <MotionDiv
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <MotionDiv variants={itemVariant}>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                {contactCTA.title}
              </h2>
            </MotionDiv>

            <MotionDiv variants={itemVariant}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {contactCTA.description}
              </p>
            </MotionDiv>

            {/* Contact Methods */}
            <MotionDiv variants={itemVariant}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <MotionDiv
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="lg" asChild className="group min-w-[200px]">
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      {contactCTA.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </MotionDiv>

                <MotionDiv
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="lg" variant="outline" asChild className="group min-w-[200px]">
                    <Link 
                      href={siteConfig.author.social.find(s => s.name === "Instagram")?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Link>
                  </Button>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>

          {/* Newsletter Section */}
          <MotionDiv
            variants={itemVariant}
            className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">
                {siteConfig.footer.newsletter.title}
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {siteConfig.footer.newsletter.description}
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={siteConfig.footer.newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[120px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {siteConfig.footer.newsletter.buttonText}
                        </>
                      )}
                    </Button>
                  </MotionDiv>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No spam, unsubscribe at any time. Just beautiful photography and creative insights.
                </p>
              </form>
            ) : (
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Welcome aboard! 🎉</h4>
                <p className="text-muted-foreground">
                  Thanks for subscribing! You'll receive updates about my latest work and photography insights.
                </p>
              </MotionDiv>
            )}
          </MotionDiv>

          {/* Quick Contact Info */}
          <MotionDiv variants={itemVariant}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Email */}
              <div className="text-center p-6 rounded-lg bg-background/50 border border-border/30">
                <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-1">Email</h4>
                <Link 
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.author.email}
                </Link>
              </div>

              {/* Response Time */}
              <div className="text-center p-6 rounded-lg bg-background/50 border border-border/30">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <h4 className="font-semibold mb-1">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  Usually within 24 hours
                </p>
              </div>

              {/* Availability */}
              <div className="text-center p-6 rounded-lg bg-background/50 border border-border/30">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
                <h4 className="font-semibold mb-1">Availability</h4>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.contact.availability.status} for new projects
                </p>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactCTA;