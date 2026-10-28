"use client";

import React, { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
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

  const kickerText = content.showRankBadge
    ? content.kicker.startsWith("#")
      ? content.kicker
      : `#1 ${content.kicker}`
    : content.kicker;

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
        "flex flex-col items-center text-center lg:items-start lg:text-left max-w-[620px] w-full",
        className
      )}
    >
      {/* 1. Kicker */}
      <div className="animate-compliant-text">
        <span className="text-[15px] sm:text-[length:var(--fs-kicker)] font-[number:var(--fw-regular)] text-[var(--color-text)] tracking-tight">
          {kickerText}
        </span>
      </div>

      {/* 2. Main Title */}
      <div className="animate-compliant-text mt-5 sm:mt-8 lg:mt-12">
        <h2 className="text-[length:var(--fs-section-title)] font-[number:var(--fw-bold)] leading-[1.15] text-[var(--color-text)] tracking-tight max-w-[560px]">
          <span className="block">Keeping You</span>
          <span className="block">Compliant Wherever</span>
          <span className="block">You Are Regulated</span>
        </h2>
      </div>

      {/* 3. Description */}
      <div className="animate-compliant-text mt-5 sm:mt-8 lg:mt-12">
        <p className="text-[14px] sm:text-[15px] lg:text-[length:var(--fs-body-md)] font-[number:var(--fw-regular)] leading-[1.35] text-[var(--color-text)]/90 max-w-[580px]">
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

      {/* 5. CTA Button: Centered under the pill group */}
      <div className="animate-compliant-cta mt-7 sm:mt-8 flex justify-center w-full">
        <Button
          variant="outline"
          size="md"
          href={content.cta.href}
          className="w-full max-w-[280px] sm:w-auto sm:min-w-[195px] h-[48px] px-6 text-xs sm:text-sm font-semibold tracking-[var(--ls-button)] shadow-2xs hover:shadow-sm justify-center"
        >
          <Calendar className="w-4 h-4 mr-1 shrink-0" aria-hidden="true" />
          <span>{content.cta.label}</span>
        </Button>
      </div>
    </div>
  );
}
