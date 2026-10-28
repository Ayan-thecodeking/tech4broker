import React from "react";
import { LogoBubble } from "./LogoBubble";
import { cn } from "@/lib/cn";
import type { EcosystemCategory } from "@/types/content";

export interface CategoryPillProps {
  category: EcosystemCategory;
  className?: string;
  style?: React.CSSProperties;
}

export function CategoryPill({ category, className, style }: CategoryPillProps) {
  const isLabelBelow = category.position === "bottom";

  const labelElement = (
    <span className="text-[11px] sm:text-[12px] uppercase font-[number:var(--fw-regular)] tracking-[var(--ls-eyebrow-wide)] text-[var(--color-text)] select-none text-center block">
      {category.label}
    </span>
  );

  return (
    <div
      style={style}
      className={cn(
        "flex flex-col items-center gap-1.5 transition-transform duration-[var(--transition-base)] hover:-translate-y-0.5 group",
        className
      )}
    >
      {/* 1. Label Above (all except bottom) */}
      {!isLabelBelow && labelElement}

      {/* 2. Capsule holding bubbles */}
      <div
        className="h-[var(--capsule-height)] px-[5px] rounded-[var(--radius-pill)] bg-[var(--color-capsule-bg)] border-[1.5px] border-[var(--color-capsule-border)] flex items-center gap-[5px] shadow-[0_4px_16px_rgba(15,23,42,0.06)] backdrop-blur-xs select-none"
        aria-label={`${category.label} tools`}
      >
        {/* Logo Bubbles */}
        {category.items.map((item, idx) => (
          <LogoBubble key={`${category.id}-${item.name || idx}`} item={item} />
        ))}

        {/* "+N" Counter Bubble if more > 0 */}
        {category.more && category.more > 0 ? (
          <LogoBubble isMore moreCount={category.more} />
        ) : null}
      </div>

      {/* 3. Label Below (for bottom category 'MARKETING') */}
      {isLabelBelow && labelElement}
    </div>
  );
}
