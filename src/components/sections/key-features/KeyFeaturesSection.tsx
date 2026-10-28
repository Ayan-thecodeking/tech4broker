"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberBadge } from "./NumberBadge";
import { Button } from "@/components/ui/Button";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { KeyFeaturesData } from "@/types/content";

export interface KeyFeaturesSectionProps {
  keyFeatures: KeyFeaturesData;
  className?: string;
}

export function KeyFeaturesSection({
  keyFeatures,
  className,
}: KeyFeaturesSectionProps) {
  const { eyebrow, title, subtitle, tabs, cta } = keyFeatures;
  const [activeStep, setActiveStep] = useState(0);

  // Desktop Pin & Animation Refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinContainerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeStep < tabs.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
    if (isRightSwipe && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  // 1. GSAP ScrollTrigger Pinned Horizontal Folding Animation for Desktop (>= 1024px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
        if (slides.length < 2 || !pinContainerRef.current) return;

        // Initial setup for the 4 slides: clean horizontal position
        gsap.set(slides[0], {
          xPercent: 0,
          opacity: 1,
          zIndex: 10,
        });

        for (let i = 1; i < slides.length; i++) {
          gsap.set(slides[i], {
            xPercent: 100,
            opacity: 0,
            zIndex: 10 + i,
          });
        }

        // Timeline with defined resting plateaus and snap so 1 scroll changes feature cleanly
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: "+=1500",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            snap: {
              snapTo: [0, 1 / 3, 2 / 3, 1],
              duration: { min: 0.2, max: 0.4 },
              delay: 0.02,
              ease: "power2.out",
            },
            onUpdate: (self) => {
              const p = self.progress;
              if (p < 0.2) setActiveStep(0);
              else if (p < 0.53) setActiveStep(1);
              else if (p < 0.86) setActiveStep(2);
              else setActiveStep(3);
            },
          },
        });

        // Step 0 -> Step 1:
        // Rest on Slide 0 from 0 to 0.15
        // Transition 0 -> 1 from 0.15 to 0.85
        tl.to(slides[0], { xPercent: -100, opacity: 0, ease: "power2.inOut", duration: 0.7 }, 0.15);
        tl.to(slides[1], { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 0.7 }, 0.15);
        // Rest on Slide 1 from 0.85 to 1.15 (center = 1.0, progress = 1/3)

        // Step 1 -> Step 2:
        // Transition 1 -> 2 from 1.15 to 1.85
        tl.to(slides[1], { xPercent: -100, opacity: 0, ease: "power2.inOut", duration: 0.7 }, 1.15);
        tl.to(slides[2], { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 0.7 }, 1.15);
        // Rest on Slide 2 from 1.85 to 2.15 (center = 2.0, progress = 2/3)

        // Step 2 -> Step 3:
        // Transition 2 -> 3 from 2.15 to 2.85
        tl.to(slides[2], { xPercent: -100, opacity: 0, ease: "power2.inOut", duration: 0.7 }, 2.15);
        tl.to(slides[3], { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 0.7 }, 2.15);
        // Rest on Slide 3 from 2.85 to 3.0 (center = 3.0, progress = 1.0)
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="key-features"
      aria-labelledby="key-features-heading"
      className={cn(
        "relative w-full bg-[#0b0f19] text-white overflow-hidden",
        className
      )}
    >
      {/* =========================================================================
          DESKTOP PINNED VIEW (>= 1024px): Full-width, full-height, borderless horizontal transition
          ========================================================================= */}
      <div
        ref={pinContainerRef}
        className="hidden lg:flex w-full min-h-screen flex-col justify-center py-10 relative z-10"
      >
        {/* Eyebrow & Main Section Title */}
        <Container className="w-full flex flex-col items-center max-w-[1320px] mb-8">
          <SectionHeading
            id="key-features-heading"
            title={title}
            align="center"
            titleAs="h2"
            titleClassName="text-white"
            className="mb-3"
          />

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] text-slate-400 text-center max-w-[540px] leading-relaxed">
            {subtitle}
          </p>
        </Container>

        {/* Full-Width Features Stage: Edge-to-edge across the screen */}
        <div className="w-full h-[520px] xl:h-[550px] relative overflow-hidden">
          {tabs.map((tab, idx) => (
            <div
              key={tab.id}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full bg-[#0b0f19] flex items-center justify-center overflow-hidden"
            >
              {/* Inner Content Centered in Max-Width with Generous Horizontal Padding */}
              <div className="w-full max-w-[1400px] h-full mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 flex flex-row items-center justify-between gap-8 xl:gap-16">
                {/* Left Column: Details & CTA placed directly below description */}
                <div className="w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-center">
                  {/* Step Badge & Kicker */}
                  <div className="flex items-center gap-3 select-none mb-4 xl:mb-5">
                    <NumberBadge number={tab.step} />
                    <span className="text-[13px] sm:text-[14px] font-semibold text-blue-400 tracking-tight uppercase">
                      {tab.kicker}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-[26px] xl:text-[32px] font-bold text-white leading-[1.2] tracking-tight mb-3.5 xl:mb-4">
                    {tab.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] xl:text-[16px] text-slate-400 leading-relaxed max-w-[440px] mb-6 xl:mb-7">
                    {tab.description}
                  </p>                 
                </div>

                {/* Right Column: Visual Preview Image (No border, no shadow, no inner box) */}
                <div className="flex-1 h-full flex items-center justify-center p-2">
                  <div className="w-full h-full max-h-[480px] flex items-center justify-center relative">
                    <Image
                      src={tab.visual.src || "/images/5.webp"}
                      alt={tab.visual.alt || tab.heading}
                      width={1400}
                      height={850}
                      priority={idx === 0}
                      className="w-full h-full object-contain p-2 select-none pointer-events-none"
                      sizes="(min-width: 1024px) 800px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (< 1024px): Borderless, shadowless, tabless touch deck
          ========================================================================= */}
      <div className="block lg:hidden w-full py-14 px-4 sm:px-6 relative z-10">
        <Container className="w-full flex flex-col items-center">
          {/* Eyebrow & Title */}
          <SectionHeading
            id="key-features-heading-mobile"
            eyebrow={eyebrow}
            title={title}
            align="center"
            titleAs="h2"
            titleClassName="text-white"
            className="mb-3"
          />

          {/* Subtitle */}
          <p className="text-[14px] text-slate-400 text-center max-w-[420px] leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* Mobile Feature Presentation Container (No border, no shadow) */}
          <div
            className="w-full max-w-[560px] relative bg-transparent flex flex-col gap-6 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Step badge & Kicker */}
            <div className="flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <NumberBadge number={tabs[activeStep].step} />
                <span className="text-xs sm:text-sm font-semibold text-blue-400 tracking-tight uppercase">
                  {tabs[activeStep].kicker}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                0{activeStep + 1} / 0{tabs.length}
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
              {tabs[activeStep].heading}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed">
              {tabs[activeStep].description}
            </p>

            {/* Visual Image (No border, no shadow, no inner box) */}
            <div className="w-full flex items-center justify-center min-h-[220px]">
              <Image
                src={tabs[activeStep].visual.src || "/images/5.webp"}
                alt={tabs[activeStep].visual.alt || tabs[activeStep].heading}
                width={800}
                height={500}
                className="w-full h-auto max-h-[280px] object-contain select-none"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            {/* Bottom Controls: Prev/Next & CTA */}
            <div className="flex items-center justify-between pt-2 gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(tabs.length - 1, prev + 1))}
                  disabled={activeStep === tabs.length - 1}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <Button
                variant="gradient"
                size="sm"
                href={cta?.href || "/book-a-demo"}
                className="h-[40px] px-5 text-xs sm:text-sm font-semibold gap-1.5"
              >
                <Calendar size={14} strokeWidth={2.2} className="shrink-0" />
                <span>Book a demo</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
