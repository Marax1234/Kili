// src/components/portfolio/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/config";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, Camera, Mail, Instagram } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import dynamic from "next/dynamic";

// Dynamic import für bessere Performance
const ContactDialog = dynamic(() => import("./ContactDialog"), {
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  ),
});

// Icon Map für Social Links
const iconMap: { [key: string]: React.ElementType } = {
  Instagram,
  Camera, 
  Mail,
};

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  // Scroll-Effekt für Header
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4">
          {/* Logo/Brand */}
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              href="/" 
              className="group flex items-center space-x-3"
            >
              <div className="relative">
                <Camera className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
                <div className="absolute -inset-1 rounded-full bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold tracking-tight text-foreground">
                  {siteConfig.author.name}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">
                  Photography
                </div>
              </div>
            </Link>
          </MotionDiv>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {siteConfig.navLinks.map((link) => (
              <MotionDiv
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    "hover:text-primary hover:bg-primary/5",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <MotionDiv
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </MotionDiv>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Quick Contact Button */}
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <MotionDiv
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button size="sm" className="hidden lg:flex">
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                </MotionDiv>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                {isContactOpen && <ContactDialog />}
              </DialogContent>
            </Dialog>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-1 ml-2 pl-2 border-l border-border/40">
              {siteConfig.author.social.slice(0, 2).map((social) => {
                const Icon = iconMap[social.icon] || Camera;
                return (
                  <MotionDiv
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </Button>
                  </MotionDiv>
                );
              })}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <MobileNavContent onClose={() => setIsSheetOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </MotionDiv>
  );
};

// Mobile Navigation Content
const MobileNavContent = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold">{siteConfig.author.name}</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-1 flex-1">
        {siteConfig.navLinks.map((link) => (
          <SheetClose asChild key={link.name}>
            <Link
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex items-center py-3 px-4 text-lg font-medium transition-colors rounded-md",
                "hover:text-primary hover:bg-primary/5",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          </SheetClose>
        ))}
      </nav>

      {/* Mobile Contact Section */}
      <div className="border-t border-border pt-6 mt-6">
        <div className="space-y-4">
          <SheetClose asChild>
            <Button className="w-full" onClick={onClose} asChild>
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Link>
            </Button>
          </SheetClose>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {siteConfig.author.social.map((social) => {
              const Icon = iconMap[social.icon] || Camera;
              return (
                <Button key={social.name} variant="ghost" size="sm" asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            {siteConfig.author.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;