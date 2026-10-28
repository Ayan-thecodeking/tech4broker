import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { TrustedLogo } from "@/types/content";

export interface LogoItemProps {
  logo: TrustedLogo;
  className?: string;
}

export function LogoItem({ logo, className }: LogoItemProps) {
  const content = logo.src ? (
    <div
      className={cn(
        "relative flex items-center justify-center h-[var(--logo-height)] max-h-[var(--logo-height)] shrink-0 transition-opacity duration-[var(--transition-base)]",
        className
      )}
      style={{
        opacity: "var(--logo-opacity, 1)",
        filter: "var(--logo-filter, none)",
      }}
    >
      <Image
        src={logo.src}
        alt={logo.alt || logo.name}
        width={220}
        height={64}
        loading="eager"
        priority
        unoptimized
        className="h-[var(--logo-height)] w-auto object-contain select-none"
      />
    </div>
  ) : (
    <div
      className={cn(
        "flex items-center justify-center w-[160px] sm:w-[180px] h-[var(--logo-height)] rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border)] bg-slate-50/70 px-4 shrink-0 shadow-2xs select-none transition-colors hover:border-[var(--color-primary)]",
        className
      )}
      aria-label={`${logo.name} logo placeholder`}
      style={{
        opacity: "var(--logo-opacity, 1)",
        filter: "var(--logo-filter, none)",
      }}
    >
      <span className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-text)]/80">
        {logo.name}
      </span>
    </div>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={logo.name}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-sm)] inline-flex shrink-0 transition-transform hover:scale-105 active:scale-95"
      >
        {content}
      </a>
    );
  }

  return content;
}
