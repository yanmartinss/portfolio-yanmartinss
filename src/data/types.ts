import type { ReactNode } from "react";

export interface Experience {
  id: string;
  hash: string;
  fileName: string;
  period: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
  stack: string[];
  current?: boolean;
  isCLT?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  glyph: string;
  skills: string[];
}

export type EducationStatus = "concluído" | "em andamento";

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: EducationStatus;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  bio: ReactNode[];
  location: string;
  availability: string;
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
}
