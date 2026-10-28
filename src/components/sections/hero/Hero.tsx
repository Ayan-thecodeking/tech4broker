import React from "react";
import { RollingButton } from "@/components/ui/RollingButton";
import type { HeroContentData } from "@/types/content";

export interface HeroProps {
  content: HeroContentData;
  foundedYear: number;
}

export function Hero({ content, foundedYear }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-[calc(var(--navbar-height)+40px)] sm:pt-[calc(var(--navbar-height)+60px)] pb-[60px] sm:pb-[80px] select-none bg-white"
    >
      {/* 1. Pristine Background Video covering 100% of the screen length on mobile & desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg absolute inset-0 w-full !h-full min-h-full object-cover pointer-events-none"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Soft, clean bottom transition into Stats section (doesn't cut into Earth continents) */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 sm:h-28 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 3. Center-aligned Content Canvas */}
      <div className="w-[min(1180px,92%)] mx-auto relative flex flex-col items-center text-center z-10">
        <div className="relative z-10 flex flex-col items-center">
          {/* Top Chip: "Since 2008" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/80 text-[12px] font-semibold text-[#1E293B] uppercase tracking-wider mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            {content.sincePrefix || "Since"} {foundedYear || 2008}
          </div>

          {/* Main Headline: "Built for FX Brokers & Prop Firms" */}
          <h1 className="text-[clamp(38px,5.5vw,66px)] leading-[1.08] tracking-tight mt-2 mb-6 font-bold text-[#1E2E4E] max-w-[850px]">
            Built for<br />
            <span className="text-[#0B192C]">FX Brokers &amp; Prop Firms</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#334155] max-w-[680px] mx-auto font-normal">
            {content.paragraph}
          </p>

          {/* Action Buttons with Interactive Rolling Text */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-10 mb-6">
            <RollingButton
              variant="outline-white"
              text={content.ctaButtonText || "Book a demo"}
              href={content.ctaButtonUrl || "#demo"}
            />
            <RollingButton
              variant="blue"
              text="Build Your Brokerage"
              href="#contact"
            />
          </div>

          {/* Tagline: "Trusted. Integrated. Compliant." */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/80 text-[12px] sm:text-[13px] font-medium text-[#1E293B] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span>Trusted</span>
            <span className="opacity-40">•</span>
            <span>Integrated</span>
            <span className="opacity-40">•</span>
            <span>Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
