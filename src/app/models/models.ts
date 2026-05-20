export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

export interface NavLink {
  label: string;
  anchor: string;
}
