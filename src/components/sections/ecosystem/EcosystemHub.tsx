import React from "react";
import { cn } from "@/lib/cn";

export interface EcosystemHubProps {
  label?: string;
  isMobile?: boolean;
  className?: string;
}

export function EcosystemHub({
  label = "tech4broker",
  isMobile = false,
  className,
}: EcosystemHubProps) {
  if (isMobile) {
    return (
      <div className={cn("relative flex items-center justify-center select-none", className)}>
        {/* Soft Radial Glow */}
        <div
          className="absolute w-[240px] h-[240px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(var(--color-hub-glow) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Rings for mobile (2 rings) */}
        <div
          className="absolute w-[165px] h-[165px] rounded-full border border-[var(--color-ring)] animate-ring-pulse-1 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full border border-[var(--color-ring)]/60 animate-ring-pulse-2 pointer-events-none"
          aria-hidden="true"
        />

        {/* Central Hub Circle (Mobile: ~120px) */}
        <div
          className="relative z-10 w-[var(--hub-size-mobile)] h-[var(--hub-size-mobile)] rounded-full flex flex-col items-center justify-center text-white"
          style={{
            background:
              "radial-gradient(circle at 35% 25%, #4DB8FF 0%, var(--color-primary) 70%, #064EBD 100%)",
            boxShadow:
              "inset 0 2px 4px rgba(255, 255, 255, 0.45), inset 0 -4px 8px rgba(0, 0, 0, 0.25), 0 12px 30px rgba(10, 108, 255, 0.35)",
          }}
        >
          {/* Ascending bars icon */}
          <svg
            width="32"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]"
            aria-hidden="true"
          >
            <rect x="2" y="18" width="4.5" height="9" rx="2.25" fill="#FFFFFF" />
            <rect x="9.5" y="13" width="4.5" height="14" rx="2.25" fill="#FFFFFF" />
            <rect x="17" y="7" width="4.5" height="20" rx="2.25" fill="#FFFFFF" />
            <rect x="24.5" y="1" width="4.5" height="26" rx="2.25" fill="#FFFFFF" />
          </svg>
          <span className="text-white text-[13px] tracking-tight leading-none font-semibold mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
            {label}
          </span>
        </div>
      </div>
    );
  }

  // Desktop / Tablet Hub (~175px diameter + 3 rings + crosshairs)
  return (
    <div className={cn("relative flex items-center justify-center select-none", className)}>
      {/* 1. Ambient Radial Glow behind Hub (~380px) */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        style={{
          background: "radial-gradient(var(--color-hub-glow) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* 2. Cross-hair Hairlines (horizontal and vertical through center, ~300px) */}
      <div
        className="absolute w-[300px] h-[1px] bg-[var(--color-ring)] opacity-25 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute w-[1px] h-[300px] bg-[var(--color-ring)] opacity-25 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        aria-hidden="true"
      />

      {/* 3. Three Concentric Thin Rings (~245px, ~265px, ~300px) */}
      <div
        className="absolute w-[245px] h-[245px] rounded-full border border-[var(--color-ring)] animate-ring-pulse-1 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute w-[265px] h-[265px] rounded-full border border-[var(--color-ring)]/75 animate-ring-pulse-2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-ring)]/50 animate-ring-pulse-3 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        aria-hidden="true"
      />

      {/* 4. Center Circle Hub (~175px) */}
      <div
        className="relative z-10 w-[var(--hub-size)] h-[var(--hub-size)] rounded-full flex flex-col items-center justify-center text-white"
        style={{
          background:
            "radial-gradient(circle at 35% 25%, #4DB8FF 0%, var(--color-primary) 70%, #064EBD 100%)",
          boxShadow:
            "inset 0 2px 5px rgba(255, 255, 255, 0.45), inset 0 -5px 10px rgba(0, 0, 0, 0.28), 0 16px 36px rgba(10, 108, 255, 0.38)",
        }}
      >
        {/* Ascending bars icon */}
        <svg
          width="44"
          height="38"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          aria-hidden="true"
        >
          <rect x="2" y="18" width="4.5" height="9" rx="2.25" fill="#FFFFFF" />
          <rect x="9.5" y="13" width="4.5" height="14" rx="2.25" fill="#FFFFFF" />
          <rect x="17" y="7" width="4.5" height="20" rx="2.25" fill="#FFFFFF" />
          <rect x="24.5" y="1" width="4.5" height="26" rx="2.25" fill="#FFFFFF" />
        </svg>

        {/* Center Wordmark */}
        <span className="text-white text-[16px] sm:text-[18px] tracking-tight leading-none font-semibold mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
          {label}
        </span>
      </div>
    </div>
  );
}
