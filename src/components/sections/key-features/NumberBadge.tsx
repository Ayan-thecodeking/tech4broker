import React from "react";
import { cn } from "@/lib/cn";

export interface NumberBadgeProps {
  number: number | string;
  className?: string;
}

export function NumberBadge({ number, className }: NumberBadgeProps) {
  return (
    <div
      className={cn(
        "w-[42px] h-[42px] rounded-full bg-[var(--color-badge-bg)] flex items-center justify-center shrink-0 select-none shadow-2xs",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[28px] sm:text-[30px] font-[number:var(--fw-regular)] italic leading-none text-[var(--color-primary)] select-none font-serif -translate-y-px">
        {number}
      </span>
    </div>
  );
}
