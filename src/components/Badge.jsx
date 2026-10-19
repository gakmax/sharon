import React from "react";
import { STATUS, NOTICE_CATEGORIES } from "../lib/status";

const TONES = {
  primary: "bg-primary-soft text-primary",
  gold: "bg-gold-soft text-gold-deep",
  muted: "bg-surface-2 text-ink-muted",
  outline: "border border-line text-ink-muted bg-transparent",
};

export function Badge({ tone = "muted", children, className = "" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded px-2 py-0.5 text-xs font-semibold leading-5 ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ statusKey, className }) {
  const s = STATUS[statusKey];
  if (!s) return null;
  return (
    <Badge tone={s.tone} className={className}>
      {s.label}
    </Badge>
  );
}

export function CategoryBadge({ category, className }) {
  if (!category) return null;
  const tone = NOTICE_CATEGORIES[category]?.tone ?? "outline";
  return (
    <Badge tone={tone} className={className}>
      {category}
    </Badge>
  );
}
