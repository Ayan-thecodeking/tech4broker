import React from "react";
import { StatItem } from "./StatItem";
import { cn } from "@/lib/cn";
import type { StatItemData } from "@/types/content";

export interface StatsGridProps {
  stats: StatItemData[];
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 items-stretch w-full max-w-full mx-auto",
        className
      )}
    >
      {stats.map((stat, index) => {
        // Compute responsive borders to create clean dividers:
        // Desktop: border-l on items 1, 2, 3 (no top/bottom borders)
        // 2x2 grid (mobile & tablet): border-l on odd items (1, 3); border-t on row 2 (items 2, 3)
        const isOdd = index % 2 === 1;
        const isSecondRow = index >= 2;

        const borderClasses = cn(
          // Vertical divider between columns on 2x2
          isOdd && "border-l border-[var(--color-border)]",
          // Horizontal divider between row 1 and row 2 on mobile/tablet
          isSecondRow && "border-t border-[var(--color-border)] lg:border-t-0 pt-8 sm:pt-10 lg:pt-0",
          !isSecondRow && "pb-8 sm:pb-10 lg:pb-0",
          // Desktop: divider on columns 2, 3, 4 (index 1, 2, 3)
          index === 2 && "lg:border-l lg:border-[var(--color-border)]"
        );

        return (
          <div key={index} className={borderClasses}>
            <StatItem stat={stat} />
          </div>
        );
      })}
    </dl>
  );
}
