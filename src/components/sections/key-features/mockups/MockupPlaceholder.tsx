import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export interface MockupPlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function MockupPlaceholder({
  src,
  alt = "Product feature preview",
  className,
}: MockupPlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "w-full h-full rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] border border-[var(--color-border)] bg-[var(--color-surface)] relative",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover select-none"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full h-full rounded-[var(--radius-lg)] bg-[#E8F2FF]/70 border-2 border-dashed border-[#BCD8FC] flex flex-col items-center justify-center p-6 text-center shadow-xs select-none",
        className
      )}
      aria-hidden="true"
    >
      <div className="w-12 h-12 rounded-full bg-[#D4E7FF] flex items-center justify-center text-[var(--color-primary)] mb-3 shadow-2xs">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <span className="text-xs font-[number:var(--fw-medium)] text-[var(--color-primary)]">
        Interactive Visual Preview
      </span>
      <span className="text-[11px] text-[var(--color-text-muted)] mt-1 max-w-[240px]">
        Asset will render dynamically in this slot.
      </span>
    </div>
  );
}
