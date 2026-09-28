export type Reply = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
};

export type Comment = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
  reply?: Reply;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  author: string;
  tags: string[];
  readingTime: string;
  comments?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

// Neue Portfolio Types
export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width: number;
  height: number;
  category: string;
  tags: string[];
  featured: boolean;
  capturedAt?: string; // Datum der Aufnahme
  location?: string;
  camera?: CameraSettings;
  order?: number; // Für Sortierung
}

export interface CameraSettings {
  camera?: string; // z.B. "Canon EOS R5"
  lens?: string; // z.B. "RF 50mm f/1.2L"
  focalLength?: string; // z.B. "50mm"
  aperture?: string; // z.B. "f/2.8"
  shutterSpeed?: string; // z.B. "1/250"
  iso?: string; // z.B. "400"
}

export interface PortfolioCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
  featured?: boolean;
  coverImage?: string;
  order?: number;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  images: PortfolioImage[];
  coverImage: PortfolioImage;
  featured: boolean;
  createdAt: string;
  location?: string;
  client?: string; // Für zukünftige kommerzielle Arbeiten
  collaborators?: string[]; // Für Team-Projekte
  tags: string[];
  published: boolean;
}

// Gallery Display Types
export interface GalleryFilter {
  category: string;
  tags: string[];
  sortBy: 'date' | 'title' | 'featured' | 'order';
  sortOrder: 'asc' | 'desc';
}

export interface GalleryView {
  type: 'grid' | 'masonry' | 'slideshow';
  itemsPerPage: number;
  showInfo: boolean;
  showCategories: boolean;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  projectType?: 'portrait' | 'event' | 'commercial' | 'personal' | 'collaboration' | 'other';
  timeline?: string;
  budget?: string;
  heardAbout?: string;
  newsletter?: boolean;
  privacy: boolean;
}

// Lightbox Types
export interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
  images: PortfolioImage[];
}

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  external?: boolean;
}

// SEO Types
export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

// Statistics Types (für About Page)
export interface Statistic {
  number: string;
  label: string;
  description?: string;
}

// Equipment Types
export interface EquipmentItem {
  type: 'camera' | 'lens' | 'accessory' | 'software';
  brand: string;
  model: string;
  description?: string;
  primary?: boolean;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  name?: string;
  source?: string;
  interests?: string[];
  timestamp: string;
}

// Error Types
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

// Utility Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

// Animation Types (für Framer Motion)
export interface AnimationVariant {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    transition?: {
      duration?: number;
      delay?: number;
      type?: string;
      stiffness?: number;
      damping?: number;
      staggerChildren?: number;
    };
  };
}

// Theme Types (für zukünftige Dark Mode Unterstützung)
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  defaultTheme: Theme;
  enableSystem: boolean;
  storageKey: string;
}