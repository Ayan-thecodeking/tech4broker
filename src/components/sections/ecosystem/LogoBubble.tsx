import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { EcosystemItem } from "@/types/content";

export interface LogoBubbleProps {
  item?: EcosystemItem;
  moreCount?: number;
  isMore?: boolean;
  className?: string;
}

export function LogoBubble({
  item,
  moreCount,
  isMore = false,
  className,
}: LogoBubbleProps) {
  // 1. "+N" Counter Bubble
  if (isMore && moreCount) {
    return (
      <div
        className={cn(
          "h-[var(--bubble-size)] w-[var(--bubble-size)] rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xs select-none border border-[var(--color-border)]/60",
          className
        )}
        aria-label={`${moreCount} more integrations available`}
      >
        <span className="text-[13px] sm:text-[14px] font-[number:var(--fw-semibold)] text-[var(--color-text)] tracking-tight">
          +{moreCount}
        </span>
      </div>
    );
  }

  // 2. Partner Logo with real image
  if (item?.logo) {
    return (
      <div
        className={cn(
          "h-[var(--bubble-size)] min-w-[var(--bubble-size)] px-3 rounded-[var(--radius-pill)] bg-white flex items-center justify-center shrink-0 shadow-2xs select-none border border-[var(--color-border)]/60",
          className
        )}
      >
        <Image
          src={item.logo}
          alt={item.alt || item.name}
          width={80}
          height={24}
          className="max-h-[24px] w-auto max-w-[80px] object-contain select-none"
        />
      </div>
    );
  }

  // 3. Blank neutral placeholder (soft gray circle with subtle dashed outline and name fallback)
  return (
    <div
      className={cn(
        "h-[var(--bubble-size)] min-w-[var(--bubble-size)] px-2.5 rounded-[var(--radius-pill)] bg-white/95 flex items-center justify-center shrink-0 shadow-2xs select-none border border-dashed border-[var(--color-border)]",
        className
      )}
      title={item?.name || "Integration Partner"}
    >
      <span className="text-[10.5px] sm:text-[11px] font-[number:var(--fw-medium)] text-[var(--color-text-muted)] tracking-tight truncate max-w-[70px]">
        {item?.name || "Partner"}
      </span>
    </div>
  );
}
