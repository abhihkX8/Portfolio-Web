"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  { prompt: "$", text: "kubectl get deployments" },
  { prompt: ">", text: "portfolio-app   3/3   Running", dim: true },
  { prompt: "$", text: "terraform apply" },
  { prompt: ">", text: "Apply complete. Resources: 12 added.", dim: true },
  { prompt: "$", text: "docker build -t abhijeet/infra:latest ." },
  { prompt: ">", text: "Successfully built and tagged", dim: true },
];

function TerminalCard() {
  const reduceMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reduceMotion ? terminalLines.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setVisibleLines((v) => (v >= terminalLines.length ? 0 : v + 1));
    }, 1100);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="relative w-full max-w-md rounded-2xl border border-base-border bg-base-surface/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-base-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
        <span className="ml-3 font-mono text-xs text-ink-muted">deploy.sh</span>
      </div>
      <div className="min-h-[220px] space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.dim ? "text-signal-mint" : "text-ink-primary"}>
            <span className="text-signal-sky">{line.prompt}</span> {line.text}
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-blink bg-signal-sky align-middle" aria-hidden />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden />
      <div className="absolute inset-0 bg-aurora" aria-hidden />

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-raised/60 px-4 py-1.5 font-mono text-xs text-signal-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-mint" aria-hidden />
            Open to DevOps / Cloud Engineer roles
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {siteConfig.name}
          </h1>

          <p className="mt-4 font-mono text-base text-signal-sky sm:text-lg">
            {siteConfig.tagline}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton href={siteConfig.heroCtas.primary.href} variant="primary">
              {siteConfig.heroCtas.primary.label}
              <ArrowDown className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href={siteConfig.heroCtas.secondary.href}
              variant="secondary"
              download
            >
              {siteConfig.heroCtas.secondary.label}
              <Download className="h-4 w-4" />
            </LinkButton>
            <LinkButton href={siteConfig.heroCtas.tertiary.href} variant="ghost">
              {siteConfig.heroCtas.tertiary.label}
            </LinkButton>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-ink-secondary transition-colors hover:text-signal-sky"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-ink-secondary transition-colors hover:text-signal-sky"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Send an email"
              className="text-ink-secondary transition-colors hover:text-signal-sky"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-floaty">
            <TerminalCard />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
