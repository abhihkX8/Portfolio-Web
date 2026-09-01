import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <div
        className={cn(
          "mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal-sky",
          align === "center" && "justify-center"
        )}
      >
        <span aria-hidden className="h-px w-6 bg-signal-sky/60" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
