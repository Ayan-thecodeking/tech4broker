import React from "react";
import { cn } from "@/lib/cn";
import type { KeyFeaturesSourceItem } from "@/types/content";

export interface SourceIconsProps {
  sources: KeyFeaturesSourceItem[];
  className?: string;
}

export function SourceIcons({ sources, className }: SourceIconsProps) {
  return (
    <div className={cn("flex items-start gap-4 sm:gap-[18px]", className)}>
      {sources.map((source, idx) => {
        const isThird = idx === 2;

        return (
          <div key={source.name || idx} className="flex flex-col items-center">
            {/* White Bubble Icon */}
            <div
              className={cn(
                "h-[34px] sm:h-[36px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(15,23,42,0.08)] border border-[var(--color-border)]/50 select-none",
                isThird ? "px-2.5 min-w-[54px] rounded-[var(--radius-pill)]" : "w-[34px] sm:w-[36px]"
              )}
              title={source.name}
            >
              {idx === 0 && (
                /* Meta / Social stylized mark */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#1877F2" />
                  <path
                    d="M13.5 8.5H15V6H13C11.3 6 10 7.3 10 9V11H8V13.5H10V18H12.5V13.5H14.5L15 11H12.5V9C12.5 8.7 12.7 8.5 13.5 8.5Z"
                    fill="white"
                  />
                </svg>
              )}
              {idx === 1 && (
                /* Ads / Triangle stylized mark */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 19L11 6L14 12L8 19H5Z"
                    fill="#4285F4"
                  />
                  <circle cx="17.5" cy="16.5" r="3.5" fill="#34A853" />
                  <path
                    d="M19 19L13 6L16 12L22 19H19Z"
                    fill="#FBBC05"
                    fillOpacity="0.8"
                  />
                </svg>
              )}
              {idx === 2 && (
                /* Video / Music stylized pill mark */
                <div className="flex items-center gap-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                    <path d="M19.5 7.05a4.5 4.5 0 0 1-3.5-3.55H13v13.5a2.5 2.5 0 1 1-2.5-2.5c.35 0 .68.07.98.2V9.82A6.5 6.5 0 1 0 16 16.5V9.5a6.5 6.5 0 0 0 3.5 1.55v-4z" />
                  </svg>
                  <span className="text-[9px] font-[number:var(--fw-bold)] text-black tracking-tighter">
                    TikTok
                  </span>
                </div>
              )}
            </div>

            {/* Downward Connector Line (~35px) + Arrowhead */}
            <div className="flex flex-col items-center mt-1 pointer-events-none" aria-hidden="true">
              <div className="w-[1px] h-[28px] sm:h-[32px] bg-[#94A3B8]/60" />
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none" className="-mt-[1px]">
                <path d="M3.5 5L0.5 0.5H6.5L3.5 5Z" fill="#94A3B8" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
