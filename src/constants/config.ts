/**
 * Application Configuration Constants
 * Centralized configuration for the application to improve maintainability
 */

export const SITE_CONFIG = {
  name: 'Ryska Freds',
  domain: 'https://www.ryskafreds.se',
  description: 'Ryska Freds - Fredens organisation',
  tagline: 'För en värld av fred och nedrustning',
} as const;

export const EXTERNAL_LINKS = {
  donation: 'https://stod.svenskafreds.se/medlem/~se-min-donation',
  twitter: 'https://x.com/ryskafreds',
} as const;

export const ROUTES = {
  home: '/',
  allNews: '/nyheter',
  newsArticle: (slug: string) => `/nyheter/${slug}`,
  privacy: '/integritetspolicy',
  terms: '/anvandarvillkor',
  cookies: '/cookies',
  program: (slug: string) => `/program/${slug}`,
  splash: '/splash',
} as const;

export const CONTACT_INFO = {
  email: 'info@ryskafreds.se',
  emailPress: 'press@ryskafreds.se',
} as const;

export const SITE_STATS = {
  countries: '25+',
  members: '15,000+',
  yearsActive: '75',
} as const;
