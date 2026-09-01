"use client";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-base-border bg-base-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink-primary"
        >
          <Terminal className="h-4 w-4 text-signal-sky" aria-hidden />
          abhijeet<span className="text-signal-sky">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wide text-ink-secondary transition-colors hover:text-signal-sky"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
        </div>

        <button
          type="button"
          className="text-ink-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <nav
          aria-label="Mobile"
          className="border-t border-base-border bg-base-bg/95 backdrop-blur-md md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-mono text-sm uppercase tracking-wide text-ink-secondary transition-colors hover:bg-base-raised hover:text-signal-sky"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
