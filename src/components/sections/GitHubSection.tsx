import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Github, GitCommitHorizontal } from "lucide-react";

export function GitHubSection() {
  return (
    <section id="github" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="06 — GitHub"
          title="Recent repositories"
          description="A snapshot of what I've been shipping. Replace these with your real repositories in src/config/projects.ts."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="block"
            >
              <GlowCard accent="sky" className="h-full">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-ink-secondary" aria-hidden />
                    <span className="font-mono text-sm text-ink-primary">
                      {project.slug}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-ink-muted">
                  <GitCommitHorizontal className="h-3 w-3" aria-hidden />
                  <span>{project.tech[0]}</span>
                </div>
              </GlowCard>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <LinkButton
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            variant="secondary"
          >
            View full GitHub profile
            <ArrowUpRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
