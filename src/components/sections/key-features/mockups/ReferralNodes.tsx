import React from "react";
import { cn } from "@/lib/cn";
import type { KeyFeaturesReferralNode } from "@/types/content";

export interface ReferralNodesProps {
  referrals: KeyFeaturesReferralNode[];
  className?: string;
}

export function ReferralNodes({ referrals, className }: ReferralNodesProps) {
  return (
    <div className={cn("flex items-start gap-6 sm:gap-8", className)}>
      {referrals.map((item, idx) => {
        return (
          <div key={item.label} className="flex flex-col items-center select-none">
            {/* Upward Arrow Line (~32px) pointing up into table */}
            <div className="flex flex-col items-center pointer-events-none mb-1.5" aria-hidden="true">
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none" className="-mb-[1px]">
                <path d="M3.5 0L6.5 4.5H0.5L3.5 0Z" fill="#94A3B8" />
              </svg>
              <div className="w-[1px] h-[26px] sm:h-[30px] bg-[#94A3B8]/60" />
            </div>

            {/* Glowing Periwinkle / Violet Icon Glyphs (~40px) */}
            <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(168,85,247,0.12)] border border-[#C084FC]/30">
              {idx === 0 ? (
                /* Affiliates network butterfly / connection glyph */
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9333EA"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_1px_4px_rgba(147,51,234,0.3)]"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 9V5" />
                  <circle cx="12" cy="4" r="1.5" />
                  <path d="M14.5 13.5L18 16" />
                  <circle cx="19" cy="17" r="1.5" />
                  <path d="M9.5 13.5L6 16" />
                  <circle cx="5" cy="17" r="1.5" />
                  <path d="M9.5 10.5L6 8" />
                  <circle cx="5" cy="7" r="1.5" />
                  <path d="M14.5 10.5L18 8" />
                  <circle cx="19" cy="7" r="1.5" />
                </svg>
              ) : (
                /* Introducing brokers radiating network glyph */
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_1px_4px_rgba(139,92,246,0.3)]"
                >
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="4" r="1.5" />
                  <circle cx="12" cy="20" r="1.5" />
                  <circle cx="4" cy="12" r="1.5" />
                  <circle cx="20" cy="12" r="1.5" />
                  <path d="M12 9V5.5M12 18.5V15M9 12H5.5M18.5 12H15" />
                  <circle cx="6.5" cy="6.5" r="1" />
                  <circle cx="17.5" cy="17.5" r="1" />
                  <path d="M10 10L7.5 7.5M16.5 16.5L14 14" />
                </svg>
              )}
            </div>

            {/* Label below */}
            <span className="text-[8.5px] sm:text-[9px] font-[number:var(--fw-semibold)] text-[var(--color-text)] text-center mt-1.5 max-w-[65px] leading-tight">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
