/**
 * Single source of truth for personal / site-wide data.
 *
 * Replace the placeholder values below with your real details.
 * Everything in this file is imported by components — you should not need
 * to touch component code to update personal info.
 */

export const siteConfig = {
  name: "Abhijeet Maske",
  role: "Aspiring DevOps Engineer / Cloud Engineer",
  tagline: "DevOps Engineer | Cloud | DevSecOps",
  description:
    "I build secure, scalable and automated infrastructure using modern DevOps and cloud-native technologies.",
  location: "Mumbai, Maharashtra, India",
  experienceLevel: "Fresher",
  goal: "DevOps / Cloud Engineer role",

  // --- SEO ---
  seo: {
    title: "Abhijeet Maske | DevOps Engineer",
    description:
      "Portfolio of Abhijeet Maske, a DevOps and Cloud Engineer specializing in AWS, Docker, Kubernetes, CI/CD and DevSecOps.",
    keywords: [
      "Abhijeet Maske",
      "DevOps Engineer",
      "Cloud Engineer",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "DevSecOps",
      "Jenkins",
      "Terraform",
      "Portfolio",
    ],
    // TODO: replace with your real deployed domain (also set NEXT_PUBLIC_SITE_URL).
    url: "https://abhijeetmaske.dev",
    ogImage: "/og-image.png",
  },

  // --- TODO: replace these placeholders with your real links ---
  links: {
    github: "https://github.com/your-github-username",
    linkedin: "https://www.linkedin.com/in/your-linkedin-id",
    email: "your.email@example.com",
    resume: "/resume.pdf",
  },

  // --- Education ---
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Balbhim College, Beed",
      location: "Beed, Maharashtra",
      period: "2022 – 2025",
    },
  ],

  // --- CTAs shown in the hero ---
  heroCtas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
    tertiary: { label: "Contact Me", href: "#contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
