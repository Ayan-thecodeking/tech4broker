import React from "react";
import Image from "next/image";
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

  const imageSrc = award.badgeImage || "/voted.png";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center select-none pb-6 sm:pb-8 md:pb-10",
        className
      )}
    >
      {/* Voted Image - renders the golden wreath and crown emblem cleanly */}
      <div className="relative w-auto h-[52px] sm:h-[62px] md:h-[72px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={award.badgeAlt || "Voted #1 CRM"}
          width={240}
          height={120}
          priority
          className="h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(234,179,8,0.12)]"
        />
      </div>

      {/* Render text only if non-empty */}
      {award.text ? (
        <span className="mt-2 text-[17px] sm:text-[19px] font-[number:var(--fw-regular)] text-[var(--color-text)] leading-snug">
          {award.text}
        </span>
      ) : null}
    </div>
  );
}
