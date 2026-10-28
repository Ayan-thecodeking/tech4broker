import React from "react";
import { EcosystemHub } from "./EcosystemHub";
import { LogoBubble } from "./LogoBubble";
import { cn } from "@/lib/cn";
import type { EcosystemCategory } from "@/types/content";

export interface EcosystemMobileListProps {
  categories: EcosystemCategory[];
  hubLabel: string;
  className?: string;
}

export function EcosystemMobileList({
  categories,
  hubLabel,
  className,
}: EcosystemMobileListProps) {
  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      {/* 1. Mobile Hub Circle (~120px with glow and 2 rings) */}
      <div className="my-6">
        <EcosystemHub label={hubLabel} isMobile />
      </div>

      {/* 2. Top Vertical Connector from Hub to Categories */}
      <div className="flex flex-col items-center">
        <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-primary)] shadow-xs" />
        <div className="w-[1px] h-[28px] bg-[var(--color-line)]" />
      </div>

      {/* 3. Category Cards with Vertical Spine Line */}
      <div className="relative w-full max-w-[420px] px-2 sm:px-4">
        {/* Left Spine Line behind cards with subtle opacity */}
        <div
          className="absolute left-[18px] top-0 bottom-6 w-[1px] bg-[var(--color-line)] opacity-35 pointer-events-none"
          aria-hidden="true"
        />

        <ul role="list" className="flex flex-col gap-3.5 w-full m-0 p-0 list-none">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="relative pl-6"
              aria-label={`${cat.label} integrations`}
            >
              {/* Connector dot on the spine aligned to card center */}
              <div
                className="absolute left-[15.5px] top-[26px] w-[6px] h-[6px] rounded-full bg-[var(--color-primary)] border border-white shadow-2xs z-10"
                aria-hidden="true"
              />

              {/* Category Card */}
              <div className="w-full rounded-[var(--radius-lg)] bg-[var(--color-surface-glass)] backdrop-blur-md border border-[var(--color-border)] p-3.5 shadow-[var(--shadow-card)]">
                {/* Card Header Label */}
                <span className="text-[11px] uppercase font-[number:var(--fw-medium)] tracking-[var(--ls-eyebrow-wide)] text-[var(--color-text)] block mb-2.5">
                  {cat.label}
                </span>

                {/* Horizontal Scrollable Row of Bubbles */}
                <div className="w-full relative [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]">
                  <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 py-0.5">
                    {cat.items.map((item, idx) => (
                      <LogoBubble
                        key={`${cat.id}-${item.name || idx}`}
                        item={item}
                        className="shrink-0"
                      />
                    ))}

                    {cat.more && cat.more > 0 ? (
                      <LogoBubble
                        isMore
                        moreCount={cat.more}
                        className="shrink-0"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
