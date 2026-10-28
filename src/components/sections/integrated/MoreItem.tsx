import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export interface MoreItemProps {
  moreCount: number;
  href?: string;
  className?: string;
}

export function MoreItem({
  moreCount,
  href = "/integrations",
  className,
}: MoreItemProps) {
  return (
    <Link
      href={href}
      aria-label={`View ${moreCount} more supported platforms`}
      className={cn(
        "group flex flex-col items-center justify-between text-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-md)]",
        className
      )}
    >
      {/* Circle Icon Slot */}
      <div className="relative flex items-center justify-center h-[var(--platform-logo-height)] max-h-[var(--platform-logo-height)] shrink-0">
        <div
          className="w-[var(--more-circle-size)] h-[var(--more-circle-size)] aspect-square rounded-full flex items-center justify-center border border-[var(--color-border)] bg-slate-50/80 dark:bg-slate-900/60 shadow-2xs transition-all duration-[var(--transition-base)] group-hover:scale-105 group-hover:border-[var(--color-primary)]"
          aria-hidden="true"
        >
          <Plus
            size={24}
            strokeWidth={1.5}
            className="text-[var(--color-text-muted)] transition-transform duration-[var(--transition-base)] group-hover:rotate-90 group-hover:text-[var(--color-primary)]"
          />
        </div>
      </div>

      {/* Label (aligned with all other row labels) */}
      <div className="mt-[var(--platform-label-gap)]">
        <span className="text-[length:var(--fs-platform-label)] font-[number:var(--fw-regular)] text-[var(--color-text)] tracking-tight text-center whitespace-nowrap transition-colors duration-[var(--transition-base)] group-hover:text-[var(--color-primary)]">
          +{moreCount} More
        </span>
      </div>
    </Link>
  );
}
