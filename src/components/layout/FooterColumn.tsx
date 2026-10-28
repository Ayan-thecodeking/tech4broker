"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FooterColumnItem } from "@/types/content";

export interface FooterColumnProps {
  column: FooterColumnItem;
  staggerIndex?: number;
  className?: string;
}

export function FooterColumn({
  column,
  staggerIndex = 0,
  className,
}: FooterColumnProps) {
  // Mobile accordion state (defaults to closed, toggleable on click)
  const [isOpen, setIsOpen] = useState(false);
  const regionId = `footer-col-${column.id}`;
  const headingId = `footer-heading-${column.id}`;

  return (
    <div
      role="group"
      aria-labelledby={headingId}
      className={cn(
        "border-b border-[var(--color-border-strong)] md:border-b-0 transition-opacity duration-500 ease-out",
        className
      )}
      style={{
        transitionDelay: `${staggerIndex * 50}ms`,
      }}
    >
      {/* Mobile Accordion Toggle / Desktop Static Header */}
      <button
        type="button"
        id={headingId}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={regionId}
        className={cn(
          "flex items-center justify-between w-full py-3.5 min-h-[52px] text-left transition-colors",
          "md:py-0 md:min-h-0 md:cursor-default md:pointer-events-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-[var(--radius-sm)]"
        )}
      >
        <h2 className="text-[16px] md:text-[length:var(--fs-footer-heading)] font-[number:var(--fw-semibold)] text-[var(--color-text-muted-strong)] tracking-tight m-0">
          {column.title}
        </h2>
        <ChevronDown
          size={18}
          className={cn(
            "text-[var(--color-text-muted)] shrink-0 transition-transform duration-200 ease-out md:hidden",
            isOpen && "rotate-180 text-[var(--color-primary)]"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Accordion Content Container (Animated height on mobile via grid-template-rows, static open on >=768px) */}
      <div
        id={regionId}
        role="region"
        aria-labelledby={headingId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200 ease-in-out",
          "md:!grid-rows-[1fr] md:!opacity-100",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 pb-0 md:pb-0"
        )}
      >
        <div className="overflow-hidden">
          <ul
            className={cn(
              "list-disc pl-[16px] space-y-[8px] w-full max-w-[280px] m-0 text-left",
              "mt-2 md:mt-[12px]"
            )}
          >
            {column.items.map((item, itemIdx) => (
              <li
                key={itemIdx}
                className="text-[14px] md:text-[length:var(--fs-footer-item)] font-[number:var(--fw-regular)] leading-[1.4] md:leading-[1.35] text-[var(--color-text-muted)] tracking-normal marker:text-[var(--color-text-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
