import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-base-border bg-base-raised/60 px-3 py-1 font-mono text-xs text-ink-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
