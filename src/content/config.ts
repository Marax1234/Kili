// src/content/config.ts
export const siteConfig = {
  title: "Kilian Siebert Photography",
  description: "Capturing moments, creating memories. Explore the visual stories through the lens of Kilian Siebert - a passionate photographer discovering the art of light and emotion.",
  url: "https://kilian-siebert-photography.com", // Anpassen
  keywords: [
    "Fotografie",
    "Photography", 
    "Kilian Siebert",
    "Portrait",
    "Landschaft",
    "Street Photography",
    "Creative Photography",
    "Visual Storytelling"
  ],

  author: {
    name: "Kilian Siebert",
    avatar: "/images/profile.jpg", // Dein Profilbild hinzufügen
    bio: "Passionate photographer exploring the world through my lens. Always learning, always creating. 📸✨",
    email: "hello@kilian-siebert.com", // Anpassen
    location: "Germany", // Anpassen
    social: [
      { name: "Instagram", url: "https://instagram.com/kilian.siebert", icon: "Instagram" },
      { name: "500px", url: "#", icon: "Camera" }, // Später hinzufügen
      { name: "LinkedIn", url: "#", icon: "Linkedin" }, // Optional
      { name: "Email", url: "mailto:hello@kilian-siebert.com", icon: "Mail" },
    ],
  },

  // Neue Portfolio-Navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }, // Optional - für SEO behalten
  ],

  // Portfolio-Kategorien (flexibel für zukünftige Erweiterung)
  portfolioCategories: [
    { 
      slug: "all", 
      name: "All Work", 
      description: "Complete collection of my photography",
      count: 0 // Wird dynamisch befüllt
    },
    { 
      slug: "portraits", 
      name: "Portraits", 
      description: "Capturing the essence of people",
      count: 0,
      featured: true
    },
    { 
      slug: "landscapes", 
      name: "Landscapes", 
      description: "Nature's beauty through my lens",
      count: 0,
      featured: true
    },
    { 
      slug: "street", 
      name: "Street", 
      description: "Life in its natural moments",
      count: 0,
      featured: true
    },
    { 
      slug: "creative", 
      name: "Creative", 
      description: "Experimental and artistic work",
      count: 0
    }
  ],

  // Homepage Konfiguration
  home: {
    hero: {
      title: "Visual Stories, Captured with Passion",
      subtitle: "Kilian Siebert",
      description: "Welcome to my photographic journey. I'm a passionate photographer who believes every moment has a story worth telling. Through my lens, I capture the beauty, emotion, and authentic moments that make life extraordinary.",
      buttons: {
        primary: { text: "View Portfolio", url: "/portfolio" },
        secondary: { text: "Get in Touch", url: "/contact" },
      },
      image: {
        src: "/images/hero-image.jpg", // Dein bestes Foto als Hero
        alt: "Kilian Siebert Photography - Hero Image",
        hint: "professional photography hero shot"
      },
    },
    
    // Portfolio Highlights für Homepage
    portfolioHighlights: {
      title: "Featured Work",
      description: "A selection of my favorite captures that showcase different styles and moments.",
      cta: {
        text: "View All Work",
        url: "/portfolio"
      }
    },

    // About Preview für Homepage
    aboutPreview: {
      title: "About My Journey",
      description: "Photography chose me as much as I chose it. What started as curiosity has become a passionate pursuit of capturing authentic moments and telling visual stories.",
      stats: [
        { number: "500+", label: "Photos Taken" },
        { number: "2+", label: "Years Exploring" },
        { number: "∞", label: "Stories to Tell" }
      ],
      cta: {
        text: "Learn More About Me",
        url: "/about"
      }
    },

    // Call to Action
    contactCTA: {
      title: "Let's Create Something Beautiful Together",
      description: "Have a project in mind or just want to connect? I'd love to hear from you and discuss how we can bring your vision to life.",
      buttonText: "Start a Conversation"
    }
  },

  // About Page (angepasst für jungen Fotografen)
  about: {
    intro: "Hi, I'm Kilian – a photographer on a journey of discovery, learning, and creative expression. 📸",
    
    story: [
      "My photography journey began with a simple fascination for capturing moments that others might miss. What started as experimenting with my camera has evolved into a passionate pursuit of visual storytelling.",
      "I believe that every photograph should tell a story, evoke emotion, or capture a fleeting moment that deserves to be remembered. Whether it's the quiet confidence in a portrait, the raw beauty of a landscape, or the spontaneous energy of street life, I'm always searching for those authentic moments.",
      "As a developing photographer, I'm constantly learning, experimenting with new techniques, and pushing my creative boundaries. Each shoot is an opportunity to grow and discover new ways to see the world through my lens."
    ],

    approach: {
      title: "My Approach",
      description: "I believe great photography comes from connection, patience, and genuine curiosity about the world around us.",
      points: [
        {
          title: "Authentic Moments",
          description: "I focus on capturing genuine emotions and natural interactions"
        },
        {
          title: "Creative Vision", 
          description: "Always exploring new perspectives and artistic approaches"
        },
        {
          title: "Continuous Learning",
          description: "Growing my skills and style with every project"
        }
      ]
    },

    equipment: {
      title: "Tools of the Trade",
      description: "Quality gear that helps bring creative visions to life",
      items: [
        "Camera Body: [Deine Kamera]", // Anpassen
        "Primary Lenses: [Deine Objektive]", // Anpassen  
        "Editing: Lightroom & Photoshop",
        "Always: Curiosity and passion"
      ]
    },

    cta: {
      title: "Ready to Collaborate?",
      description: "Whether you're looking for portraits, event coverage, or have a creative project in mind, I'd love to discuss how we can work together.",
      buttonText: "Let's Connect"
    }
  },

  // Contact Konfiguration
  contact: {
    title: "Let's Connect",
    description: "Have a project idea, want to collaborate, or just want to say hello? I'd love to hear from you.",
    
    methods: [
      {
        type: "email",
        value: "hello@kilian-siebert.com", // Anpassen
        label: "Email me directly",
        icon: "Mail"
      },
      {
        type: "instagram", 
        value: "@kilian.siebert", // Anpassen
        label: "Follow my journey",
        icon: "Instagram"
      }
    ],

    form: {
      title: "Send me a message",
      fields: {
        name: "Your Name",
        email: "Email Address", 
        subject: "What's this about?",
        message: "Tell me about your project or idea",
        type: "Project Type" // Optional für später
      },
      buttonText: "Send Message",
      successMessage: "Thanks for reaching out! I'll get back to you soon. 📸"
    },

    availability: {
      title: "Availability",
      description: "Currently accepting new projects and collaborations. Response time is typically within 24-48 hours.",
      status: "Available" // "Available" | "Busy" | "Booking Ahead"
    }
  },

  // Footer
  footer: {
    newsletter: {
      title: "Stay Updated",
      description: "Get occasional updates about my latest work, photography tips, and behind-the-scenes stories. No spam, just genuine content. 📮",
      buttonText: "Subscribe",
      placeholder: "Your email address"
    },
    
    links: [
      { name: "Portfolio", url: "/portfolio" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
      { name: "Privacy", url: "/privacy" },
      { name: "Terms", url: "/terms" }
    ],
    
    copyright: "© {year} Kilian Siebert Photography. All rights reserved.",
    
    statement: "All photographs are original work by Kilian Siebert unless otherwise noted."
  },

  // SEO & Meta
  seo: {
    defaultTitle: "Kilian Siebert Photography",
    titleTemplate: "%s | Kilian Siebert Photography",
    defaultDescription: "Capturing moments, creating memories. Explore visual stories through the lens of Kilian Siebert - passionate photography with authentic emotion.",
    siteUrl: "https://kilian-siebert-photography.com", // Anpassen
    defaultImage: "/images/og-image.jpg", // Open Graph Bild erstellen
    twitterHandle: "@kilian_siebert" // Falls vorhanden
  },

  // Blog Konfiguration (SEO-optimiert behalten)
  blog: {
    enabled: true, // Für SEO und Content Marketing
    title: "Behind the Lens",
    description: "Photography insights, behind-the-scenes stories, and creative inspiration.",
    categories: [
      "Photography Tips",
      "Behind the Scenes", 
      "Gear Reviews",
      "Creative Process",
      "Personal Projects"
    ]
  }
};

export type SiteConfig = typeof siteConfig;