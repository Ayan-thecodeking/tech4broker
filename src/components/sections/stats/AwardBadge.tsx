import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { cn } from "@/lib/cn";
import type { AwardData } from "@/types/content";

export interface AwardBadgeProps {
  award: AwardData;
  className?: string;
}

export function AwardBadge({ award, className }: AwardBadgeProps) {
  if (!award.enabled) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left select-none",
        className
      )}
    >
      {/* Award Badge Card (~92x60 on mobile, ~115x75 on desktop) */}
      <div className="w-[92px] h-[60px] sm:w-[115px] sm:h-[75px] shrink-0 rounded-2xl bg-white border border-[var(--color-border)] shadow-xs flex items-center justify-center p-2 overflow-hidden">
        {award.badgeImage ? (
          <Image
            src={award.badgeImage}
            alt={award.badgeAlt || "Award badge"}
            width={115}
            height={75}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-primary)]">
            <Award className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.8} aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Award Text (~18px on mobile) */}
      <span className="text-[17px] sm:text-[19px] lg:text-award-label font-[number:var(--fw-regular)] text-[var(--color-text)] leading-snug">
        {award.text}
      </span>
    </div>
  );
}
