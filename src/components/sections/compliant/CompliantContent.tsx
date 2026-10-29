"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JurisdictionPills } from "./JurisdictionPills";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import type { CompliantData } from "@/types/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CompliantContentProps {
  content: CompliantData;
  activeJurisdictionId?: string | null;
  onSelectJurisdiction?: (id: string | null) => void;
  onHoverJurisdiction?: (id: string | null) => void;
  className?: string;
}

export function CompliantContent({
  content,
  activeJurisdictionId = null,
  onSelectJurisdiction,
  onHoverJurisdiction,
  className,
}: CompliantContentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const kickerText = content.kicker
    ? content.showRankBadge
      ? content.kicker.startsWith("#")
        ? content.kicker
        : `#1 ${content.kicker}`
      : content.kicker
    : "";

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".animate-compliant-text", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      })
        .from(
          ".jurisdiction-pill-item",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )
        .from(
          ".animate-compliant-cta",
          {
            y: 12,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl xl:max-w-3xl w-full",
        className
      )}
    >
      {/* 1. Kicker (rendered only if present) */}
      {kickerText ? (
        <div className="animate-compliant-text mb-4 sm:mb-6">
          <span className="text-[15px] sm:text-[length:var(--fs-kicker)] font-[number:var(--fw-regular)] text-[var(--color-text)] tracking-tight">
            {kickerText}
          </span>
        </div>
      ) : null}

      {/* 2. Main Title */}
      <div className={cn("animate-compliant-text", kickerText && "mt-5 sm:mt-8 lg:mt-12")}>
        <h2 className="text-[length:var(--fs-section-title)] font-[number:var(--fw-bold)] leading-[1.15] text-white tracking-tight max-w-2xl xl:max-w-3xl">
          {content.title}
        </h2>
      </div>

      {/* 3. Description */}
      <div className="animate-compliant-text mt-5 sm:mt-8 lg:mt-12">
        <p className="text-[14px] sm:text-[15px] lg:text-[length:var(--fs-body-md)] font-[number:var(--fw-regular)] leading-[1.4] text-slate-300 max-w-2xl xl:max-w-3xl">
          {content.description}
        </p>
      </div>

      {/* 4. Jurisdiction Pills */}
      <div className="mt-6 sm:mt-7 w-full flex justify-center lg:justify-start">
        <JurisdictionPills
          jurisdictions={content.jurisdictions}
          moreLabel={content.moreLabel}
          activeJurisdictionId={activeJurisdictionId}
          onSelectJurisdiction={onSelectJurisdiction}
          onHoverJurisdiction={onHoverJurisdiction}
        />
      </div>

    
    </div>
  );
}
