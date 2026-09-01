import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-muted">
          © {year} {siteConfig.name}. Built with Next.js &amp; TypeScript.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-ink-secondary transition-colors hover:text-signal-sky"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-ink-secondary transition-colors hover:text-signal-sky"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label="Send an email"
            className="text-ink-secondary transition-colors hover:text-signal-sky"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
