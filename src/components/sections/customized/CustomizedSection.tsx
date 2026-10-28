"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CustomizedTabs } from "./CustomizedTabs";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import type { CustomizedData } from "@/types/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CustomizedSectionProps {
  customized: CustomizedData;
  className?: string;
}

export function CustomizedSection({
  customized,
  className,
}: CustomizedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered fade-up for header, showcase items, and CTA
      gsap.from(".customized-anim-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="customized"
      aria-labelledby="customized-title"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-[90px] overflow-hidden bg-[#0b0f19] text-white",
        className
      )}
    >
      <Container className="relative z-10 flex flex-col items-center">
        {/* Eyebrow + Section Title */}
        <SectionHeading
          id="customized-title"
          eyebrow={customized.eyebrow}
          title={customized.title}
          align="center"
          titleAs="h2"
          titleClassName="text-white"
          className="w-full max-w-4xl customized-anim-item"
        />

        {/* Feature Showcase: Points with Ticks, CTA, & Prev/Next on Left, Mockup on Right */}
        <div className="customized-anim-item w-full mt-10 sm:mt-14 lg:mt-16">
          <CustomizedTabs data={customized} />
        </div>
      </Container>
    </section>
  );
}

