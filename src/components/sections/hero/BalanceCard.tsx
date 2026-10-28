import React from "react";
import { Wallet } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BalanceCardContent } from "@/types/content";

export interface BalanceCardProps {
  content: BalanceCardContent;
  className?: string;
}

export function BalanceCard({ content, className }: BalanceCardProps) {
  const { label, amount, buttonLabel, depositUrl } = content;

  return (
    <div
      className={cn(
        "w-[295px] min-h-[140px] bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-border)] p-4 sm:p-5 flex flex-col justify-between select-none z-20",
        className
      )}
    >
      {/* Top: Lilac rounded-square wallet icon + Balance info */}
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-[#EDE9FE] flex items-center justify-center shrink-0 shadow-sm">
          <Wallet className="w-5 h-5 text-[#6366F1]" aria-hidden="true" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-[var(--color-text-muted)] tracking-normal">
            {label}
          </span>
          <span className="text-2xl sm:text-[26px] font-bold text-[var(--color-text)] tracking-tight leading-none mt-1">
            {amount}
          </span>
        </div>
      </div>

      {/* Bottom: Outlined blue pill button */}
      <div className="pt-3">
        <a
          href={depositUrl}
          className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-1.5 rounded-[var(--radius-pill)] border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-semibold hover:bg-[rgba(10,108,255,0.06)] transition-[background,transform] duration-[var(--transition-base)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
