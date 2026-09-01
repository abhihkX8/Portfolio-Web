"use client";

import { cn } from "@/lib/utils";
import type { AccentColor } from "@/types";
import type { ReactNode } from "react";

const accentBorder: Record<AccentColor, string> = {
  sky: "hover:border-signal-sky/50 hover:shadow-glow",
  violet: "hover:border-signal-violet/50 hover:shadow-glow-violet",
  mint: "hover:border-signal-mint/50 hover:shadow-[0_0_0_1px_rgba(55,214,166,0.15),0_0_24px_rgba(55,214,166,0.15)]",
  amber: "hover:border-signal-amber/50 hover:shadow-[0_0_0_1px_rgba(244,184,96,0.15),0_0_24px_rgba(244,184,96,0.15)]",
};

export function GlowCard({
  children,
  accent = "sky",
  className,
}: {
  children: ReactNode;
  accent?: AccentColor;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-base-border bg-base-surface/60 p-6 backdrop-blur-sm transition-all duration-300",
        accentBorder[accent],
        className
      )}
    >
      {children}
    </div>
  );
}
