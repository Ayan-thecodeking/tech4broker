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
        "w-[42px] h-[42px] rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center shrink-0 select-none",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[26px] sm:text-[28px] font-[number:var(--fw-regular)] italic leading-none text-blue-400 select-none font-serif -translate-y-px">
        {number}
      </span>
    </div>
  );
}
