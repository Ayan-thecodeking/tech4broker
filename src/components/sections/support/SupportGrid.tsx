"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SupportFeature } from "./SupportFeature";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import type { SupportFeatureItem } from "@/types/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SupportGridProps {
  features: SupportFeatureItem[];
  className?: string;
}

export function SupportGrid({ features, className }: SupportGridProps) {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".support-feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        y: 14,
        scale: 0.96,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <ul
      ref={containerRef}
      role="list"
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 items-start justify-items-center w-full list-none m-0 p-0",
        "gap-y-[44px] md:gap-y-0 md:gap-x-4 lg:gap-x-6",
        className
      )}
    >
      {features.map((feature) => (
        <li
          key={feature.title}
          className="support-feature-card w-full flex justify-center"
        >
          <SupportFeature feature={feature} />
        </li>
      ))}
    </ul>
  );
}
