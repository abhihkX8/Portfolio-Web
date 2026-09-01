"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { supabase } from "@/lib/supabase";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(formData: FormData): FormErrors {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({ name, email, message });

      if (error) throw error;

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something reliable"
          description="Open to DevOps / Cloud Engineer roles, internships, and conversations about infrastructure."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="flex items-center gap-3 rounded-xl border border-base-border bg-base-surface/50 p-4 text-sm text-ink-primary transition-colors hover:border-signal-sky/40"
            >
              <Mail className="h-4 w-4 text-signal-sky" />
              {siteConfig.links.email}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-xl border border-base-border bg-base-surface/50 p-4 text-sm text-ink-primary transition-colors hover:border-signal-sky/40"
            >
              <Linkedin className="h-4 w-4 text-signal-sky" />
              LinkedIn profile
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-xl border border-base-border bg-base-surface/50 p-4 text-sm text-ink-primary transition-colors hover:border-signal-sky/40"
            >
              <Github className="h-4 w-4 text-signal-sky" />
              GitHub profile
            </a>
          </div>

          <GlowCard accent="violet">
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-lg border border-base-border bg-base-bg/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-signal-sky focus:outline-none"
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-lg border border-base-border bg-base-bg/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-signal-sky focus:outline-none"
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-lg border border-base-border bg-base-bg/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted focus:border-signal-sky focus:outline-none"
                  placeholder="Tell me a bit about the role or project..."
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>

              <div role="status" aria-live="polite">
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-sm text-signal-mint">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent — thanks for reaching out, I&apos;ll get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </p>
                ) : null}
              </div>
            </form>
          </GlowCard>
        </div>
      </Container>
    </section>
  );
}
