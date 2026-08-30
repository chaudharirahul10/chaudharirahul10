export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'dsa' | 'data';
  description: string;
  technologies: string[];
  iconName: string;
  status: string;
  features?: string[];
  link?: string;
  github?: string;
}

export interface TechItem {
  name: string;
  iconSlug: string;
  category: 'languages' | 'frontend_backend' | 'databases_tools' | 'ai_cloud';
  description?: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
  badge: string;
}

export interface Goal {
  id: string;
  text: string;
  completed: boolean;
  category: string;
}
