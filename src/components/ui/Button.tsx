import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-sky disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-signal-sky text-base-bg shadow-glow hover:bg-[#6BC5FF] active:bg-[#3AA3EE]",
  secondary:
    "border border-base-border bg-base-raised/60 text-ink-primary backdrop-blur hover:border-signal-sky/50 hover:text-signal-sky",
  ghost: "text-ink-secondary hover:text-ink-primary",
};

type Variant = keyof typeof variants;

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: "a";
  variant?: Variant;
  icon?: ReactNode;
}

export function LinkButton({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
      {icon}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {icon}
    </button>
  );
}
