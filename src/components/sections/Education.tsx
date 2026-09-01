import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="05 — Education" title="Academic background" />

        <div className="space-y-6">
          {siteConfig.education.map((entry) => (
            <div key={entry.degree} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-signal-sky/40 bg-signal-sky/10">
                  <GraduationCap className="h-4 w-4 text-signal-sky" aria-hidden />
                </div>
                <div className="mt-1 w-px flex-1 bg-base-border" />
              </div>
              <div className="pb-2">
                <div className="font-mono text-xs text-ink-muted">{entry.period}</div>
                <h3 className="mt-1 font-display text-lg font-medium text-ink-primary">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-ink-secondary">
                  {entry.institution} · {entry.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
