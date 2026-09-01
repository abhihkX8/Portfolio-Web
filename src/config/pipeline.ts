import type { PipelineStage } from "@/types";

/**
 * Stages rendered in the interactive DevOps Architecture section.
 * Order matters — this is rendered top-to-bottom (desktop: left-to-right).
 */
export const pipelineStages: PipelineStage[] = [
  { id: "developer", label: "Developer", detail: "Code is written and pushed" },
  { id: "github", label: "GitHub", detail: "Source control & pull requests" },
  { id: "ci", label: "Jenkins / GitLab CI", detail: "Pipeline is triggered" },
  { id: "build", label: "Build", detail: "Application is compiled & packaged" },
  { id: "sonarqube", label: "SonarQube", detail: "Static code analysis" },
  { id: "owasp", label: "OWASP Dependency-Check", detail: "Dependency vulnerability scan" },
  { id: "trivy", label: "Trivy", detail: "Container image scanning" },
  { id: "docker", label: "Docker", detail: "Image is built" },
  { id: "registry", label: "Docker Registry", detail: "Image is pushed & versioned" },
  { id: "kubernetes", label: "Kubernetes", detail: "Deployment is rolled out" },
  { id: "aws", label: "AWS EC2", detail: "Workload runs in production" },
];
