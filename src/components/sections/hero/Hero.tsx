import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
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
      className="relative overflow-hidden min-h-screen flex items-center pt-[calc(var(--navbar-height)+40px)] sm:pt-[calc(var(--navbar-height)+60px)] pb-[60px] sm:pb-[80px] select-none bg-white"
    >
      {/* 1. Hero Image from /video/hero.webp covering the section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/video/hero.webp"
          alt="Tech4Broker FX & Prop Trading CRM Platform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-center pointer-events-none select-none"
        />
        {/* Soft mobile overlay to ensure optimal contrast on smaller screens */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:hidden pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 2. Soft, clean bottom transition into Stats section */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 sm:h-28 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 3. Left-placed Content Canvas */}
      <Container className="relative z-10 w-full">
        <div className="max-w-[620px] xl:max-w-[700px] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Top Chip: "Since 2008" */}

          {/* Main Headline: "The Platform Behind Your Trading Business" */}
          <h1 className="text-[clamp(38px,5vw,66px)] leading-[1.08] tracking-tight mt-2 mb-6 font-bold text-[#1E2E4E]">
            The Platform Behind<br />
            <span className="text-[#0B192C]">Your Trading Business</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#334155] max-w-[580px] font-normal">
            {content.paragraph}
          </p>

          {/* Action Buttons with Interactive Rolling Text */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 sm:mt-10 mb-6">
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
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[12px] sm:text-[13px] font-medium text-[#1E293B] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span>Trusted</span>
            <span className="opacity-40">•</span>
            <span>Integrated</span>
            <span className="opacity-40">•</span>
            <span>Compliant</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
