"use client";

import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/config/skills";
import type { AccentColor } from "@/types";
import { motion } from "motion/react";

const dotColor: Record<AccentColor, string> = {
  sky: "bg-signal-sky",
  violet: "bg-signal-violet",
  mint: "bg-signal-mint",
  amber: "bg-signal-amber",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I reach for"
          description="Organized by where they sit in the delivery pipeline — from writing code to running it in production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <GlowCard accent={category.accent} className="h-full">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${dotColor[category.accent]}`}
                    aria-hidden
                  />
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-secondary">
                    {category.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-base-border bg-base-bg/60 px-2.5 py-1 text-sm text-ink-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
