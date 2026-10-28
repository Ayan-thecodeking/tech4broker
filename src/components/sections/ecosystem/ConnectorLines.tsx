import React from "react";
import { cn } from "@/lib/cn";

export interface ConnectorLinesProps {
  className?: string;
}

export function ConnectorLines({ className }: ConnectorLinesProps) {
  return (
    <svg
      viewBox="0 0 900 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-0 w-full h-full pointer-events-none select-none z-0", className)}
      aria-hidden="true"
    >
      <defs>
        {/* Gradient for Left Lines (Hub to Left Pills) */}
        <linearGradient id="line-grad-left" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-line)" stopOpacity="0.8" />
          <stop offset="85%" stopColor="var(--color-line)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-line)" stopOpacity="0" />
        </linearGradient>

        {/* Gradient for Right Lines (Hub to Right Pills) */}
        <linearGradient id="line-grad-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-line)" stopOpacity="0.8" />
          <stop offset="85%" stopColor="var(--color-line)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-line)" stopOpacity="0" />
        </linearGradient>

        {/* Gradient for Top Line */}
        <linearGradient id="line-grad-top" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-line)" stopOpacity="0.8" />
          <stop offset="85%" stopColor="var(--color-line)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-line)" stopOpacity="0" />
        </linearGradient>

        {/* Gradient for Bottom Line */}
        <linearGradient id="line-grad-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-line)" stopOpacity="0.8" />
          <stop offset="85%" stopColor="var(--color-line)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-line)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Top Connector (REGISTRATION) */}
      <path
        d="M 450 142 L 450 64"
        stroke="url(#line-grad-top)"
        strokeWidth="1.25"
        strokeDasharray="150"
        strokeDashoffset="0"
        className="transition-all duration-700"
      />
      <circle cx="450" cy="142" r="3" fill="var(--color-line)" />

      {/* 2. Left-Top Connector (TRADERS TOOLS) */}
      <path
        d="M 355 180 C 310 180, 270 120, 230 120"
        stroke="url(#line-grad-left)"
        strokeWidth="1.25"
        strokeDasharray="250"
        strokeDashoffset="0"
      />
      <circle cx="355" cy="180" r="3" fill="var(--color-line)" />

      {/* 3. Left-Middle Connector (PAYMENTS) */}
      <path
        d="M 315 275 L 245 275"
        stroke="url(#line-grad-left)"
        strokeWidth="1.25"
        strokeDasharray="150"
        strokeDashoffset="0"
      />
      <circle cx="315" cy="275" r="3" fill="var(--color-line)" />

      {/* 4. Left-Bottom Connector (PLATFORMS) */}
      <path
        d="M 355 370 C 310 370, 270 400, 230 400"
        stroke="url(#line-grad-left)"
        strokeWidth="1.25"
        strokeDasharray="250"
        strokeDashoffset="0"
      />
      <circle cx="355" cy="370" r="3" fill="var(--color-line)" />

      {/* 5. Right-Top Connector (BI) */}
      <path
        d="M 545 180 C 590 180, 630 120, 670 120"
        stroke="url(#line-grad-right)"
        strokeWidth="1.25"
        strokeDasharray="250"
        strokeDashoffset="0"
      />
      <circle cx="545" cy="180" r="3" fill="var(--color-line)" />

      {/* 6. Right-Middle Connector (VOIP) */}
      <path
        d="M 585 275 L 655 275"
        stroke="url(#line-grad-right)"
        strokeWidth="1.25"
        strokeDasharray="150"
        strokeDashoffset="0"
      />
      <circle cx="585" cy="275" r="3" fill="var(--color-line)" />

      {/* 7. Right-Bottom Connector (NEWS) */}
      <path
        d="M 545 370 C 590 370, 630 400, 670 400"
        stroke="url(#line-grad-right)"
        strokeWidth="1.25"
        strokeDasharray="250"
        strokeDashoffset="0"
      />
      <circle cx="545" cy="370" r="3" fill="var(--color-line)" />

      {/* 8. Bottom Connector (MARKETING) */}
      <path
        d="M 450 408 L 450 486"
        stroke="url(#line-grad-bottom)"
        strokeWidth="1.25"
        strokeDasharray="150"
        strokeDashoffset="0"
      />
      <circle cx="450" cy="408" r="3" fill="var(--color-line)" />
    </svg>
  );
}
