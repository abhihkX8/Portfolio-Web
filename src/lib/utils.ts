/**
 * Merge class name fragments, skipping falsy values.
 * Intentionally dependency-free (no clsx/tailwind-merge) per the
 * "avoid unnecessary dependencies" requirement.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
