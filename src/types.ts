import { IconType } from 'react-icons';

export type Experience = {
  title: string;
  date: string;
  description: string;
};

export type Project = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

export type Skill = {
  name: string;
  icon: string;
  progress: number;
};

export type SocialLink = {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
};

export type Distro = {
  name: string;
  icon: IconType | string;
  url?: string;
};

export type Theme = 'dark' | 'light'; 