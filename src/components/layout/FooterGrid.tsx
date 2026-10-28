"use client";

import React, { useEffect, useRef, useState } from "react";
import { FooterColumn } from "./FooterColumn";
import { Logo } from "@/components/ui/Logo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import type { FooterColumnItem } from "@/types/content";

export interface FooterGridProps {
  columns: FooterColumnItem[];
  className?: string;
}

export function FooterGrid({ columns, className }: FooterGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentEl = containerRef.current;
    if (!currentEl) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  // If not mounted yet (SSR) or prefers reduced motion, always fully visible
  const shouldAnimate = hasMounted && !prefersReducedMotion;
  const isShown = !shouldAnimate || isVisible;

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full grid",
        // Mobile (<768px): single column accordion list, 0 gap
        "grid-cols-1 gap-0",
        // Tablet (768px - 1279px): 3 equal columns, equal gap-x, gap-y-10
        "md:grid-cols-3 md:gap-x-[var(--footer-grid-gap-x)] md:gap-y-10",
        // Desktop (>=1280px): 4 equal columns (Logo col 1 + 3 content cols), equal gap-x
        "xl:grid-cols-4 xl:gap-x-[var(--footer-grid-gap-x)] xl:gap-y-[var(--footer-grid-gap-y)]",
        className
      )}
    >
      {/* Desktop Column 1: Logo aligned to top, spanning row 1 and row 2 */}
      <div className="hidden xl:block xl:col-start-1 xl:row-start-1 xl:row-span-2 xl:self-start pt-0.5">
        <Logo className="w-auto h-auto" />
      </div>

      {/* Six Footer Columns in reading order */}
      {columns.map((column, idx) => (
        <div
          key={column.id}
          className={cn(
            "transition-all duration-400 ease-out",
            isShown
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10px]"
          )}
          style={{
            transitionDelay: shouldAnimate ? `${idx * 50}ms` : "0ms",
          }}
        >
          <FooterColumn column={column} staggerIndex={idx} />
        </div>
      ))}
    </div>
  );
}
