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
          "radial-gradient(circle at 45% 35%, #141d32 0%, #0f172a 65%, #0b0f19 100%)",
        boxShadow:
          "0 20px 45px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.2), inset 0 0 30px rgba(11, 15, 25, 0.95)",
      }}
    >
      {/* Outer border ring */}
      <div className="absolute inset-0 rounded-full border border-sky-400/20 pointer-events-none" />

      {/* Subtle dotted matrix continent pattern */}
      <div
        className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148, 163, 184, 0.75) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(circle, black 65%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 95%)",
        }}
      />

      {/* Simulated jurisdiction beacon markers */}
      <div className="absolute top-[32%] left-[48%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ring-2 ring-blue-400 animate-pulse" />
      <div className="absolute top-[42%] left-[55%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ring-2 ring-blue-400 animate-pulse" />
      <div className="absolute bottom-[35%] right-[28%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ring-2 ring-blue-400 animate-pulse" />
    </div>
  );
}
