"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberBadge } from "./NumberBadge";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        "relative w-full bg-[#0b0f19] text-white overflow-hidden scroll-mt-[var(--navbar-height)]",
        className
      )}
    >
      {/* =========================================================================
          DESKTOP PINNED VIEW (>= 1024px): Full-width, full-height, borderless horizontal transition
          ========================================================================= */}
      <div
        ref={pinContainerRef}
        className="hidden lg:flex w-full min-h-screen flex-col justify-center pt-[calc(var(--navbar-height)+20px)] pb-6 lg:pb-8 relative z-10 box-border"
      >
        {/* Eyebrow & Main Section Title */}
        <Container className="w-full flex flex-col items-center max-w-[1320px] shrink-0 mb-4 xl:mb-6">
          <SectionHeading
            id="key-features-heading"
            title={title}
            align="center"
            titleAs="h2"
            titleClassName="text-white text-[28px] lg:text-[34px] xl:text-[42px] leading-tight"
            className="mb-2"
          />

          {/* Subtitle */}
          <p className="text-[13px] lg:text-[14px] xl:text-[15px] text-slate-400 text-center max-w-[560px] leading-relaxed">
            {subtitle}
          </p>
        </Container>

        {/* Full-Width Features Stage: Viewport-height responsive across all laptop/desktop heights */}
        <div className="w-full h-[clamp(360px,52vh,560px)] xl:h-[clamp(400px,56vh,620px)] relative overflow-hidden shrink-0">
          {tabs.map((tab, idx) => (
            <div
              key={tab.id}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full bg-[#0b0f19] flex items-center justify-center overflow-hidden"
            >
              {/* Inner Content Centered in Max-Width with Balanced Padding */}
              <div className="w-full max-w-[1400px] h-full mx-auto px-6 sm:px-8 lg:px-10 xl:px-16 flex flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12">
                {/* Left Column: Details & CTA placed directly below description */}
                <div className="w-[320px] lg:w-[360px] xl:w-[420px] shrink-0 flex flex-col justify-center z-10">
                  {/* Step Badge & Kicker */}
                  <div className="flex items-center gap-3 select-none mb-3 xl:mb-4">
                    <NumberBadge number={tab.step} />
                    <span className="text-[12px] sm:text-[13px] font-semibold text-blue-400 tracking-tight uppercase">
                      {tab.kicker}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-[22px] xl:text-[28px] font-bold text-white leading-[1.2] tracking-tight mb-2.5 xl:mb-3">
                    {tab.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] xl:text-[15px] text-slate-400 leading-relaxed max-w-[440px]">
                    {tab.description}
                  </p>                 
                </div>

                {/* Right Column: Visual Preview Image (Responsive, unclipped across all screens) */}
                <div className="flex-1 min-w-0 h-full flex items-center justify-center p-2">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <Image
                      src={tab.visual.src || "/images/5.webp"}
                      alt={tab.visual.alt || tab.heading}
                      width={1520}
                      height={1035}
                      priority={idx === 0}
                      className="max-w-full max-h-full w-auto h-auto object-contain select-none pointer-events-none drop-shadow-md"
                      sizes="(min-width: 1024px) 65vw, 100vw"
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
            className="w-full max-w-[560px] sm:max-w-[620px] relative bg-transparent flex flex-col gap-6 touch-pan-y"
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

            {/* Visual Image */}
            <div className="w-full flex items-center justify-center py-2">
              <div className="w-full max-w-[560px] sm:max-w-[620px] flex items-center justify-center">
                <Image
                  src={tabs[activeStep].visual.src || "/images/5.webp"}
                  alt={tabs[activeStep].visual.alt || tabs[activeStep].heading}
                  width={1520}
                  height={1035}
                  priority
                  className="w-full h-auto max-h-[360px] sm:max-h-[440px] object-contain select-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 620px, 800px"
                />
              </div>
            </div>

            {/* Bottom Controls: Prev/Next */}
            <div className="flex items-center justify-center pt-2 gap-3">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Previous feature"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setActiveStep((prev) => Math.min(tabs.length - 1, prev + 1))}
                disabled={activeStep === tabs.length - 1}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Next feature"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
