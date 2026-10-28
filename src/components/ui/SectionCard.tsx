import React from "react";
import { cn } from "@/lib/cn";

export interface SectionCardProps {
  maxWidth?: "wide" | "medium" | "narrow" | "compact";
  glow?: "trusted" | "payments" | "keyfeatures" | "none";
  className?: string;
  children: React.ReactNode;
}

export function SectionCard({
  maxWidth = "wide",
  glow = "none",
  className,
  children,
}: SectionCardProps) {
  const widthClass =
    maxWidth === "compact"
      ? "w-full max-w-[var(--card-width-compact)] mx-auto"
      : maxWidth === "narrow"
      ? "w-full max-w-[var(--card-width-narrow)] mx-auto"
      : maxWidth === "medium"
      ? "w-full max-w-[var(--card-width-medium)] mx-auto"
      : "w-full";

  return (
    <div
      className={cn(
        "relative bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[var(--shadow-card-soft)] overflow-hidden flex flex-col items-center",
        widthClass,
        className
      )}
    >
      {/* Background card-level glows */}
      {glow === "trusted" && (
        <div className="trusted-card-glow" aria-hidden="true" />
      )}
      {glow === "payments" && (
        <div className="payments-card-glow" aria-hidden="true" />
      )}
      {glow === "keyfeatures" && (
        <div className="keyfeatures-card-glow" aria-hidden="true" />
      )}

      {/* Card Content with proper z-index above the ambient tint */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
