export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const FILL = (label: string) =>
  process.env.NODE_ENV === "development" ? `[FILL: ${label}]` : "";
