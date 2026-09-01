import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { Cloud, Container as ContainerIcon, GitBranch, Server, ShieldCheck, Workflow } from "lucide-react";

const focusAreas = [
  { label: "Cloud computing", icon: Cloud },
  { label: "CI/CD", icon: Workflow },
  { label: "Kubernetes", icon: Server },
  { label: "Infrastructure automation", icon: GitBranch },
  { label: "DevSecOps", icon: ShieldCheck },
  { label: "Containerization", icon: ContainerIcon },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="01 — About"
          title="Building infrastructure that just works"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink-secondary">
            <p>
              I&apos;m a {siteConfig.education[0]?.degree} graduate and an aspiring
              DevOps Engineer based in {siteConfig.location}. I&apos;m early in my
              career, but I&apos;ve spent that time deliberately: building and
              deploying real projects end-to-end rather than only studying theory.
            </p>
            <p>
              I&apos;m drawn to the systems side of software — the pipelines,
              containers, and cloud infrastructure that let an application ship
              reliably and scale under load. I care about getting the fundamentals
              right: reproducible builds, automated deployments, and security
              checks that run before code ever reaches production.
            </p>
            <p>
              I&apos;m currently focused on deepening my AWS and Kubernetes
              knowledge and looking for a {siteConfig.goal} where I can keep
              building on that foundation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {focusAreas.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-xl border border-base-border bg-base-surface/50 p-4"
              >
                <Icon className="h-5 w-5 text-signal-sky" aria-hidden />
                <span className="text-sm text-ink-primary">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
