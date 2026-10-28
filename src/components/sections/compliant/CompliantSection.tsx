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
        "relative w-full pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-[80px] overflow-hidden",
        className
      )}
    >
      {/* Background ambient glow: lilac top-right, soft blue bottom-right */}
      <div className="compliant-ambient-glow" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Eyebrow 'COMPLIANT' Centered over the entire section */}
        <div className="w-full flex justify-center mb-10 sm:mb-12 lg:mb-16">
          <SectionHeading
            id="compliant-heading"
            eyebrow={compliant.eyebrow}
            title=""
            align="center"
            eyebrowClassName="mb-0"
          />
        </div>

        {/* Two-Column Grid: 3D Animated Globe on Left, Content & Pills on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 xl:gap-[120px]">
          {/* Left Column: Globe Canvas */}
          <div className="flex justify-center items-center w-full">
            <GlobeCanvas
              activeJurisdictionId={activeJurisdictionId}
              onSelectJurisdiction={setActiveJurisdictionId}
            />
          </div>

          {/* Right Column: Copy, Jurisdictions & Centered CTA */}
          <div className="flex justify-center lg:justify-start w-full">
            <CompliantContent
              content={compliant}
              activeJurisdictionId={activeJurisdictionId}
              onSelectJurisdiction={setActiveJurisdictionId}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
