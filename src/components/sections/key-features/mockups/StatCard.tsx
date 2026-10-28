import React from "react";
import { cn } from "@/lib/cn";
import type { KeyFeaturesStatCardData } from "@/types/content";

export interface StatCardProps {
  data: KeyFeaturesStatCardData;
  variant: "primary" | "dark";
  className?: string;
}

export function StatCard({ data, variant, className }: StatCardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={cn(
        "rounded-[16px] p-3 flex flex-col justify-between select-none transition-transform duration-200 hover:-translate-y-0.5",
        isPrimary
          ? "text-white shadow-[0_12px_28px_rgba(10,108,255,0.38)]"
          : "bg-[var(--color-surface-dark)] text-white shadow-[var(--shadow-float)] border border-white/5",
        className
      )}
      style={
        isPrimary
          ? {
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-cyan-bright) 100%)",
            }
          : undefined
      }
    >
      {/* Card Header Title */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-[number:var(--fw-semibold)] tracking-tight leading-none">
          {data.title}
        </span>
      </div>

      {/* 3 Columns with thin vertical dividers */}
      <div className="grid grid-cols-3 divide-x mt-2 pt-1 border-t border-white/10">
        {data.columns.map((col, idx) => {
          const isUp = col.tone === "up";
          const isDown = col.tone === "down";

          const valueColorClass = isPrimary
            ? idx === 2
              ? "text-white/85"
              : "text-white"
            : isUp
            ? "text-[var(--color-success)]"
            : isDown
            ? "text-[var(--color-danger)]"
            : "text-white";

          const subColorClass = isPrimary
            ? "text-white/70"
            : isUp
            ? "text-[var(--color-success)]/90"
            : isDown
            ? "text-[var(--color-danger)]/90"
            : "text-white/60";

          return (
            <div
              key={col.label}
              className={cn(
                "flex flex-col items-center justify-center px-1 text-center",
                isPrimary ? "divide-white/20 border-white/20" : "divide-white/10 border-white/10"
              )}
            >
              {/* Column Label */}
              <span
                className={cn(
                  "text-[6.5px] uppercase tracking-wider font-[number:var(--fw-regular)] leading-none mb-1",
                  isPrimary ? "text-white/70" : "text-gray-400"
                )}
              >
                {col.label}
              </span>

              {/* Big Value */}
              <span
                className={cn(
                  "text-[18px] sm:text-[19px] font-[number:var(--fw-semibold)] leading-tight tracking-tight tabular-nums",
                  valueColorClass
                )}
              >
                {col.value}
              </span>

              {/* Sub-value */}
              <span
                className={cn(
                  "text-[6px] tracking-tight tabular-nums leading-none mt-0.5",
                  subColorClass
                )}
              >
                {col.sub}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
