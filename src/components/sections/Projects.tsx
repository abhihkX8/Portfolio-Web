"use client";

import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/config/projects";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built and deployed"
          description="Each project was containerized, pipelined, and deployed — not just built and left on a laptop."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="h-full"
            >
              <GlowCard accent={i === 0 ? "sky" : i === 1 ? "violet" : "mint"} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-ink-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-sky" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 pt-2">
                  <LinkButton
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="secondary"
                    className="flex-1 justify-center text-xs"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </LinkButton>
                  {project.demo ? (
                    <LinkButton
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      variant="primary"
                      className="flex-1 justify-center text-xs"
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </LinkButton>
                  ) : (
                    <LinkButton
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      variant="ghost"
                      className="flex-1 justify-center text-xs"
                    >
                      View Details
                    </LinkButton>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
