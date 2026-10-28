"use client";

import React, { useEffect, useRef, useState } from "react";
import { PlatformItem } from "./PlatformItem";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import type { TradingPlatform } from "@/types/content";

export interface PlatformGridProps {
  platforms: TradingPlatform[];
  moreCount?: number;
  moreHref?: string;
  className?: string;
}

export function PlatformGrid({
  platforms,
  className,
}: PlatformGridProps) {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const isShown = prefersReducedMotion || isVisible;

  return (
    <ul
      ref={containerRef}
      role="list"
      className={cn(
        "flex flex-wrap justify-center items-center list-none m-0 p-0 max-w-[1140px] mx-auto",
        "gap-x-4 sm:gap-x-8 lg:gap-x-12",
        "gap-y-[var(--platform-row-gap)]",
        className
      )}
    >
      {platforms.map((platform, index) => {
        const staggerDelay = prefersReducedMotion ? 0 : index * 60;

        return (
          <li
            key={`platform-${platform.name}`}
            className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-2rem)] lg:w-[calc(20%-2.4rem)] min-w-[130px] max-w-[200px] flex justify-center transition-all duration-500 ease-out"
            style={{
              opacity: isShown ? 1 : 0,
              transform: isShown ? "translateY(0)" : "translateY(12px)",
              transitionDelay: `${staggerDelay}ms`,
            }}
          >
            <PlatformItem platform={platform} className="w-full max-w-[200px]" />
          </li>
        );
      })}
    </ul>
  );
}
