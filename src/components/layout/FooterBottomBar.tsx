import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { FooterLegalLink } from "@/types/content";

export interface FooterBottomBarProps {
  brand: string;
  year: number;
  copyrightTemplate: string;
  legalLinks: FooterLegalLink[];
  className?: string;
}

export function FooterBottomBar({
  brand,
  year,
  copyrightTemplate,
  legalLinks,
  className,
}: FooterBottomBarProps) {
  // Replace tokens {brand} and {year} in copyright template
  const copyrightText = copyrightTemplate
    .replace("{brand}", brand)
    .replace("{year}", String(year));

  return (
    <div
      className={cn(
        "w-full flex flex-col-reverse md:flex-row items-start md:items-center justify-between",
        "min-h-[45px] gap-4 md:gap-0",
        className
      )}
    >
      {/* Copyright notice */}
      <p className="text-[13px] md:text-[length:var(--fs-footer-meta)] font-[number:var(--fw-regular)] text-[var(--color-text-muted)] tracking-normal m-0">
        {copyrightText}
      </p>

      {/* Legal navigation */}
      <nav aria-label="Legal" className="flex items-center gap-[20px] md:gap-[16px]">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-[14px] md:text-[length:var(--fs-footer-meta)] font-[number:var(--fw-regular)] text-[var(--color-text-muted)]",
              "min-h-[44px] md:min-h-0 flex items-center",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-sm)]",
              "[@media(hover:hover)]:hover:underline [@media(hover:hover)]:hover:text-[var(--color-text-muted-strong)]"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
