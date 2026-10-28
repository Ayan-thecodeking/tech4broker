import React from "react";
import { cn } from "@/lib/cn";

export interface GlobeFallbackProps {
  className?: string;
}

export function GlobeFallback({ className }: GlobeFallbackProps) {
  return (
    <div
      aria-label="3D Globe loading preview"
      className={cn(
        "relative w-[var(--globe-size)] h-[var(--globe-size)] aspect-square rounded-full flex items-center justify-center select-none overflow-hidden",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F1F5F9 55%, #E2E8F0 100%)",
        boxShadow:
          "0 20px 50px rgba(100, 116, 139, 0.16), inset 0 0 35px rgba(255, 255, 255, 0.9)",
      }}
    >
      {/* Graticule grid rings */}
      <div
        className="absolute inset-0 rounded-full border border-slate-300/40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(148, 163, 184, 0.18) 32px, rgba(148, 163, 184, 0.18) 33px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full border border-slate-300/40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 32px, rgba(148, 163, 184, 0.18) 32px, rgba(148, 163, 184, 0.18) 33px)",
        }}
      />

      {/* Subtle dotted matrix continent pattern */}
      <div
        className="absolute inset-0 rounded-full opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100, 116, 139, 0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(circle, black 65%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 95%)",
        }}
      />

      {/* Simulated jurisdiction beacon markers */}
      <div className="absolute top-[32%] left-[48%] w-2.5 h-2.5 rounded-full bg-blue-600 shadow-md ring-2 ring-white animate-pulse" />
      <div className="absolute top-[42%] left-[55%] w-2.5 h-2.5 rounded-full bg-blue-600 shadow-md ring-2 ring-white animate-pulse" />
      <div className="absolute bottom-[35%] right-[28%] w-2.5 h-2.5 rounded-full bg-blue-600 shadow-md ring-2 ring-white animate-pulse" />
    </div>
  );
}
