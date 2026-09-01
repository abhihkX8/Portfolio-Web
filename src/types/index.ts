export type AccentColor = "sky" | "violet" | "mint" | "amber";

export interface SkillCategory {
  name: string;
  accent: AccentColor;
  skills: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string | null;
}

export interface PipelineStage {
  id: string;
  label: string;
  detail: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
}
