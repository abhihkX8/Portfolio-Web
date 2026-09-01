"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pipelineStages } from "@/config/pipeline";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function Architecture() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % pipelineStages.length);
    }, 1400);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section id="architecture" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="04 — Architecture"
          title="How code becomes production"
          description="A commit doesn't reach production without passing through security scanning first. This is the pipeline every one of my projects runs through — hover or tap a stage to inspect it."
        />

        {/* Desktop: horizontal flow */}
        <div className="hidden overflow-x-auto pb-4 lg:block">
          <div className="flex min-w-max items-stretch gap-0">
            {pipelineStages.map((stage, i) => {
              const isActive = i === activeIndex;
              return (
                <div key={stage.id} className="flex items-center">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    className={cn(
                      "group w-[168px] rounded-xl border p-4 text-left transition-all duration-300",
                      isActive
                        ? "border-signal-sky/60 bg-base-raised shadow-glow"
                        : "border-base-border bg-base-surface/50 hover:border-signal-sky/30"
                    )}
                  >
                    <div className="mb-2 font-mono text-[10px] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className={cn(
                        "font-display text-sm font-medium transition-colors",
                        isActive ? "text-signal-sky" : "text-ink-primary"
                      )}
                    >
                      {stage.label}
                    </div>
                    <div className="mt-1.5 text-xs leading-snug text-ink-secondary">
                      {stage.detail}
                    </div>
                  </button>

                  {i < pipelineStages.length - 1 ? (
                    <div className="relative mx-1 h-px w-8 shrink-0 bg-base-border">
                      {!reduceMotion && (
                        <motion.span
                          className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-signal-sky shadow-[0_0_8px_2px_rgba(79,184,255,0.6)]"
                          animate={{ left: ["0%", "90%"] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.05,
                          }}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="space-y-0 lg:hidden">
          {pipelineStages.map((stage, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={stage.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show detail for ${stage.label}`}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-colors",
                      isActive
                        ? "border-signal-sky bg-signal-sky/10 text-signal-sky"
                        : "border-base-border text-ink-muted"
                    )}
                  >
                    {i + 1}
                  </button>
                  {i < pipelineStages.length - 1 ? (
                    <div className="my-1 w-px flex-1 bg-base-border" style={{ minHeight: 28 }} />
                  ) : null}
                </div>
                <div className={cn("pb-7", isActive ? "opacity-100" : "opacity-80")}>
                  <div
                    className={cn(
                      "font-display text-sm font-medium",
                      isActive ? "text-signal-sky" : "text-ink-primary"
                    )}
                  >
                    {stage.label}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-ink-secondary">
                    {stage.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
