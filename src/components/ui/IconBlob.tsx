import React from "react";
import { cn } from "@/lib/cn";
import type { FeatureTone } from "@/types/content";

export interface IconBlobProps {
  tone?: FeatureTone;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const toneStyles: Record<
  FeatureTone,
  {
    blobBg: string;
    glowBg: string;
    iconFilter: string;
    iconColor: string;
  }
> = {
  pink: {
    blobBg: "bg-[var(--color-blob-pink)]",
    glowBg: "bg-pink-300/30",
    iconFilter: "drop-shadow(0 10px 18px rgba(224,69,123,0.22))",
    iconColor: "text-[var(--color-icon-pink)]",
  },
  blue: {
    blobBg: "bg-[var(--color-blob-blue)]",
    glowBg: "bg-blue-300/30",
    iconFilter: "drop-shadow(0 10px 18px rgba(10,108,255,0.22))",
    iconColor: "text-[var(--color-icon-blue)]",
  },
  teal: {
    blobBg: "bg-[var(--color-blob-teal)]",
    glowBg: "bg-teal-300/30",
    iconFilter: "drop-shadow(0 10px 18px rgba(0,180,230,0.22))",
    iconColor: "text-[var(--color-icon-teal)]",
  },
};

export function IconBlob({
  tone = "blue",
  size = "md",
  className,
  children,
}: IconBlobProps) {
  const currentTone = toneStyles[tone];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center select-none",
        size === "sm" ? "h-[140px] w-[140px]" : "h-[180px] w-[180px]",
        className
      )}
    >
      {/* Background shape layer: moves to the LEFT on hover */}
      <div className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out group-hover:-translate-x-3">
        {/* 1. Tall rounded pill blob: ~110px wide x ~180px tall, positioned slightly left of center */}
        <div
          className={cn(
            "absolute -left-1 sm:-left-2 top-0 w-[var(--blob-width)] h-[var(--blob-height)] rounded-[999px] transition-all duration-300 group-hover:brightness-105",
            currentTone.blobBg
          )}
        />

        {/* 2. Overlapping circular ambient glow behind the icon offset toward the right */}
        <div
          className={cn(
            "absolute left-6 top-6 w-[125px] sm:w-[130px] h-[125px] sm:h-[130px] rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-95",
            currentTone.glowBg
          )}
        />
      </div>

      {/* 3. The Icon in front: moves to the RIGHT on hover */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-3",
          currentTone.iconColor
        )}
        style={{
          filter: currentTone.iconFilter,
        }}
      >
        {children}
      </div>
    </div>
  );
}
