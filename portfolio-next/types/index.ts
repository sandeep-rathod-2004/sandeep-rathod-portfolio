export interface Project {
  slug: string;
  name: string;
  featured?: boolean;
  tagline: string;
  description: string;
  stack: string[];
  architecture: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  demo?: string;
}

export interface TimelineStep {
  label: string;
  year?: string;
}

export interface SkillRating {
  name: string;
  rating: number; // out of 5
}

export interface BlogPost {
  title: string;
  excerpt: string;
  status: 'Coming soon' | 'Draft';
}
