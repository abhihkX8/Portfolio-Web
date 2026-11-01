import type { Project } from "@/types";

/**
 * Project data. Replace the placeholder `github` / `demo` URLs with your
 * real repository and live-demo links once they're available.
 */
export const projects: Project[] = [
  {
    slug: "why-is-my-site-down",
    title: "Why Is My Site Down? Dockerized Diagnostic Tool on AWS",
    description:
      "A Python web tool that finds out why a website is failing and explains the fix in plain English, deployed on AWS EC2 with Docker, Nginx and HTTPS.",
    highlights: [
      "Checks DNS, TCP connection, TLS certificate, HTTP status, response time and redirect loops, then gives a plain-English cause and fix",
      "Explains different failures separately, such as 502, 503, 504, expired or self-signed certificates, and connection refused versus timed out",
      "Deployed on AWS EC2 inside a VPC public subnet, with a security group that opens only ports 80 and 443",
      "Docker Compose setup with a multi-stage, non-root image and a PostgreSQL volume that keeps data across restarts",
    
    ],
    tech: ["AWS EC2", "AWS VPC", "Docker Compose", "Docker", "Ubantu Linux", "Python", "PostgreSQL"],
    github: "https://github.com/abhihkX8/why-is-my-site-down",
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
