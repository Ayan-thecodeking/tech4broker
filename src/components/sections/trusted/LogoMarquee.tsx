"use client";

import React from "react";
import { LogoItem } from "./LogoItem";
import { cn } from "@/lib/cn";
import type { TrustedLogo } from "@/types/content";

export interface LogoMarqueeProps {
  logos: TrustedLogo[];
  direction?: "left" | "right";
  speed?: string | number;
  gap?: string;
  className?: string;
  pauseOnHover?: boolean;
}

export function LogoMarquee({
  logos,
  direction = "left",
  speed,
  gap,
  className,
  pauseOnHover = true,
}: LogoMarqueeProps) {
  // Ensure there are enough logos to exceed any ultra-wide screen (> 2500px)
  const baseLogos = logos.length < 8 ? [...logos, ...logos] : logos;

  const inlineStyles: React.CSSProperties = {
    ...(speed
      ? { "--marquee-duration": typeof speed === "number" ? `${speed}s` : speed }
      : {}),
    ...(gap ? { "--marquee-gap": gap } : {}),
    maskImage:
      "linear-gradient(to right, transparent, #000 var(--marquee-fade, 8%), #000 calc(100% - var(--marquee-fade, 8%)), transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, #000 var(--marquee-fade, 8%), #000 calc(100% - var(--marquee-fade, 8%)), transparent)",
  } as React.CSSProperties;

  const animationClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none py-2",
        className
      )}
      style={inlineStyles}
      aria-label="Partner and client logos marquee"
    >
      <div
        className={cn(
          "animate-marquee-track",
          animationClass,
          pauseOnHover && "marquee-pause-hover"
        )}
      >
        {/* Copy 1: Interactive & Accessible for Screen Readers */}
        <ul
          role="list"
          className="flex items-center shrink-0 list-none m-0 p-0"
          style={{
            gap: "var(--marquee-gap, 5rem)",
            paddingRight: "var(--marquee-gap, 5rem)",
          }}
        >
          {baseLogos.map((logo, index) => (
            <li
              key={`logo-primary-${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center"
            >
              <LogoItem logo={logo} />
            </li>
          ))}
        </ul>

        {/* Copy 2: Duplicated for Seamless Infinite CSS Loop (hidden from screen readers & tab order) */}
        <ul
          role="list"
          aria-hidden="true"
          tabIndex={-1}
          className="flex items-center shrink-0 list-none m-0 p-0 pointer-events-none"
          style={{
            gap: "var(--marquee-gap, 5rem)",
            paddingRight: "var(--marquee-gap, 5rem)",
          }}
        >
          {baseLogos.map((logo, index) => (
            <li
              key={`logo-loop-${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center"
            >
              <LogoItem logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
