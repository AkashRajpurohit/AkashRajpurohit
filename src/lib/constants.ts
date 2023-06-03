export const allowedBlogTags = [
  'linux',
  'javascript',
  'security',
  'nodejs',
  'homelab',
  'bash',
  'interview',
  'engineering',
  'competition',
  'cloudflare',
  'database',
  'devops',
  'oss',
  'git',
  'gatsby',
  'nextjs',
  'postgres',
  'react',
  'golang',
  'projects',
  'performance',
  'personal',
  'system design',
  'database',
  'networking',
];

export const recentPostsLimit = 4;

export const heroImages = [
  {
    jpg: '/static/images/hero-image-1.jpg',
    webp: '/static/images/hero-image-1.webp',
  },
  {
    jpg: '/static/images/hero-image-2.jpg',
    webp: '/static/images/hero-image-2.webp',
  },
  {
    jpg: '/static/images/hero-image-3.jpg',
    webp: '/static/images/hero-image-3.webp',
  },
  {
    jpg: '/static/images/hero-image-4.jpg',
    webp: '/static/images/hero-image-4.webp',
  },
  {
    jpg: '/static/images/hero-image-5.jpg',
    webp: '/static/images/hero-image-5.webp',
  },
];

export type NewsletterFormInput = {
  email: string;
  first_name?: string;
  last_name?: string;
  from_url?: string;
};

export type ViewInput = {
  slug: string;
  type: ViewType;
};

export type ViewType = 'blog' | 'page' | 'project' | 'snippet';

export type SocialType =
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'github'
  | 'email';

export type PostClickedFrom = 'recent' | 'suggested' | 'previous' | 'next';
