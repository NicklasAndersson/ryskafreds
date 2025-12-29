/**
 * Type definitions for common data structures
 * Improves type safety across the application
 */

export interface NavigationLink {
  href: string;
  text: string;
}

export interface SocialLink {
  url: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
