"use client";

import React, { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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
        "relative w-full py-16 sm:py-20 lg:py-[80px] overflow-hidden",
        className
      )}
    >
      {/* Lilac ambient glow outside at top-right */}
      <div className="customized-ambient-glow" aria-hidden="true" />

      <Container className="relative z-10 flex flex-col items-center">
        {/* Eyebrow + Section Title */}
        <SectionHeading
          id="customized-title"
          eyebrow={customized.eyebrow}
          title={customized.title}
          align="center"
          titleAs="h2"
          className="w-full max-w-4xl customized-anim-item"
        />

        {/* Feature Showcase: Points with Ticks & Prev/Next on Left, Mockup on Right */}
        <div className="customized-anim-item w-full mt-10 sm:mt-14 lg:mt-16">
          <CustomizedTabs data={customized} />
        </div>

        {/* Centered CTA Button: BOOK A DEMO */}
        <div className="customized-anim-item mt-12 sm:mt-16 lg:mt-20 flex justify-center w-full px-4">
          <Button
            variant="gradient"
            size="lg"
            href={customized.cta.href}
            className="w-full max-w-[280px] sm:w-auto sm:min-w-[237px] h-[52px] sm:h-[60px] text-xs sm:text-sm font-bold tracking-[var(--ls-button)] shadow-[0_6px_24px_rgba(10,108,255,0.36)] hover:shadow-[0_8px_30px_rgba(10,108,255,0.48)] justify-center"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1 shrink-0" aria-hidden="true" />
            <span>{customized.cta.label}</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

