"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlobeCanvas } from "./globe/GlobeCanvas";
import { CompliantContent } from "./CompliantContent";
import { cn } from "@/lib/cn";
import type { CompliantData } from "@/types/content";

export interface CompliantSectionProps {
  compliant: CompliantData;
  className?: string;
}

export function CompliantSection({
  compliant,
  className,
}: CompliantSectionProps) {
  // Bi-directional state between 3D Globe and Jurisdiction Pills
  const [activeJurisdictionId, setActiveJurisdictionId] = useState<string | null>(null);

  return (
    <section
      id="compliant"
      aria-labelledby="compliant-heading"
      className={cn(
        "relative w-full pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-[90px] overflow-hidden bg-[#0b0f19] text-white",
        className
      )}
    >
      {/* Eyebrow 'COMPLIANT' Centered over the entire section (rendered only if provided) */}
      {compliant.eyebrow && (
        <Container className="relative z-10 mb-10 sm:mb-12 lg:mb-16">
          <SectionHeading
            id="compliant-heading"
            eyebrow={compliant.eyebrow}
            title=""
            align="center"
            eyebrowClassName="mb-0"
          />
        </Container>
      )}

      {/* Main Content Area: Snug spacing between globe and content on desktop */}
      <div className="relative w-full flex flex-col lg:flex-row items-center lg:min-h-[640px] xl:min-h-[720px]">
        {/* Left Column: On desktop, stuck to extreme left edge showing half; on mobile, centered */}
        <div className="flex justify-center items-center w-full lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:w-auto lg:h-auto z-10 pointer-events-auto mb-10 lg:mb-0">
          <GlobeCanvas
            activeJurisdictionId={activeJurisdictionId}
            onSelectJurisdiction={setActiveJurisdictionId}
          />
        </div>

        {/* Right / Copy Column: Positioned snug right beside the half globe on desktop, centered on mobile */}
        <div className="w-full px-[var(--container-padding-x)] lg:px-0 lg:pl-[calc(var(--globe-size)/2+32px)] xl:pl-[calc(var(--globe-size)/2+48px)] z-20 flex justify-center lg:justify-start">
          <CompliantContent
            content={compliant}
            activeJurisdictionId={activeJurisdictionId}
            onSelectJurisdiction={setActiveJurisdictionId}
          />
        </div>
      </div>
    </section>
  );
}
