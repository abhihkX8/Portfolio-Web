import type { Project } from "@/types";

/**
 * Project data. Replace the placeholder `github` / `demo` URLs with your
 * real repository and live-demo links once they're available.
 */
export const projects: Project[] = [
  {
    slug: "kubernetes-three-tier-app",
    title: "Kubernetes Three-Tier Application",
    description:
      "Deployed a three-tier application (React frontend, Node.js API, MongoDB) on Kubernetes, with containerized components, defined Services and Deployments, configured scaling, and infrastructure hosted on AWS EC2.",
    highlights: [
      "Deployed a three-tier application using Kubernetes",
      "Containerized application components using Docker",
      "Used Kubernetes Services and Deployments",
      "Configured horizontal scaling",
      "Hosted infrastructure on AWS EC2",
    ],
    tech: ["Kubernetes", "Docker", "AWS EC2", "MongoDB", "Node.js", "React"],
    github: "https://github.com/your-github-username/kubernetes-three-tier-app",
    demo: null,
  },
  {
    slug: "devsecops-cicd-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    description:
      "Built an automated CI/CD pipeline with integrated security scanning at every stage — static code analysis, dependency vulnerability checks, and container image scanning — before building and deploying Docker images.",
    highlights: [
      "Automated CI/CD pipeline with Jenkins",
      "Static code analysis with SonarQube",
      "Dependency vulnerability scanning with OWASP Dependency-Check",
      "Container image scanning with Trivy",
      "Docker image build and deployment",
    ],
    tech: ["Jenkins", "Docker", "SonarQube", "Trivy", "OWASP Dependency-Check", "GitHub"],
    github: "https://github.com/your-github-username/devsecops-cicd-pipeline",
    demo: null,
  },
  {
    slug: "two-tier-flask-app",
    title: "Two-Tier Flask Application",
    description:
      "Containerized a Flask web application with a MySQL backend and automated its deployment pipeline using GitLab CI/CD, removing manual deployment steps.",
    highlights: [
      "Containerized Flask application with Docker",
      "Integrated MySQL as the persistence layer",
      "Automated deployment using GitLab CI/CD",
    ],
    tech: ["Flask", "MySQL", "Docker", "GitLab CI/CD"],
    github: "https://github.com/your-github-username/two-tier-flask-app",
    demo: null,
  },
];
