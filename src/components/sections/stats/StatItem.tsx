"use client";

import React from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/cn";
import type { StatItemData } from "@/types/content";

export interface StatItemProps {
  stat: StatItemData;
  className?: string;
}

export function StatItem({ stat, className }: StatItemProps) {
  const { count, ref } = useCountUp({ end: stat.value });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center text-center w-full px-3 sm:px-6 lg:px-8 py-2",
        className
      )}
    >
      {/* Number with bold highlighted styling + suffix */}
      <dd className="text-stat-number select-none flex items-baseline justify-center font-bold tracking-tight text-[var(--color-text)]">
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </dd>

      {/* Label positioned tightly underneath the count */}
      <dt className="text-stat-label mt-2 sm:mt-2.5 max-w-[190px] mx-auto select-none">
        {stat.label}
      </dt>
    </div>
  );
}
