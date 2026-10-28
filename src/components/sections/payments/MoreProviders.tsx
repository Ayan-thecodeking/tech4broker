import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export interface MoreProvidersProps {
  moreCount: number;
  href?: string;
  className?: string;
}

export function MoreProviders({
  moreCount,
  href = "/integrations",
  className,
}: MoreProvidersProps) {
  return (
    <Link
      href={href}
      aria-label={`View ${moreCount} more supported payment providers`}
      className={cn(
        "group inline-flex items-center gap-4 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-pill)] p-1",
        className
      )}
    >
      {/* Circle + Icon Button */}
      <div
        className="w-[var(--more-circle-size-lg)] h-[var(--more-circle-size-lg)] aspect-square rounded-full flex items-center justify-center shrink-0 border border-[var(--color-border)] bg-slate-50/80 dark:bg-slate-900/60 shadow-2xs transition-all duration-[var(--transition-base)] group-hover:scale-105 group-hover:shadow-md group-hover:border-[var(--color-primary)]"
        aria-hidden="true"
      >
        <Plus
          size={30}
          strokeWidth={1.5}
          className="text-[var(--color-text-muted)] transition-transform duration-[var(--transition-base)] group-hover:rotate-90 group-hover:text-[var(--color-primary)]"
        />
      </div>

      {/* Label "+250 More" placed to the right of the circle */}
      <span className="text-[length:var(--fs-platform-label)] font-[number:var(--fw-regular)] text-[var(--color-text)] tracking-tight whitespace-nowrap transition-colors duration-[var(--transition-base)] group-hover:text-[var(--color-primary)]">
        +{moreCount} More
      </span>
    </Link>
  );
}
