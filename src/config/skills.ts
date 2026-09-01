import type { SkillCategory } from "@/types";

/**
 * Skills grouped by category. Add/remove entries freely —
 * the Skills section renders whatever is in this array.
 */
export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud",
    accent: "sky",
    skills: ["AWS", "EC2", "EBS"],
  },
  {
    name: "Containers",
    accent: "violet",
    skills: ["Docker", "Kubernetes", "Docker Compose"],
  },
  {
    name: "CI/CD",
    accent: "mint",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD"],
  },
  {
    name: "DevSecOps",
    accent: "amber",
    skills: ["SonarQube", "Trivy", "OWASP Dependency-Check"],
  },
  {
    name: "Infrastructure as Code",
    accent: "sky",
    skills: ["Terraform"],
  },
  {
    name: "Programming / Scripting",
    accent: "violet",
    skills: ["Python", "Bash", "JavaScript"],
  },
  {
    name: "Version Control",
    accent: "mint",
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    name: "Other",
    accent: "amber",
    skills: ["Linux", "Nginx"],
  },
];
