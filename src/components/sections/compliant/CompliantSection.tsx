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
        "relative w-full py-16 sm:py-20 lg:py-0 lg:h-auto lg:aspect-[16/9] flex items-center overflow-hidden bg-[#0b0f19] text-white",
        className
      )}
    >
      <Container className="relative lg:static z-10 w-full">
        {/* Eyebrow 'COMPLIANT' Centered over the entire section (rendered only if provided) */}
        {compliant.eyebrow && (
          <div className="w-full flex justify-center mb-10 sm:mb-12 lg:mb-16">
            <SectionHeading
              id="compliant-heading"
              eyebrow={compliant.eyebrow}
              title=""
              align="center"
              eyebrowClassName="mb-0"
            />
          </div>
        )}

        {/* 50 / 50 Responsive Grid: Left 50% for Globe, Right 50% for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 w-full">
          {/* Left Column (50% area): Oversized globe bleeding from top, bottom, and left */}
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-[38%] lg:w-auto lg:h-auto z-10 pointer-events-auto">
              <GlobeCanvas
                activeJurisdictionId={activeJurisdictionId}
                onSelectJurisdiction={setActiveJurisdictionId}
              />
            </div>
          </div>

          {/* Right Column (50% area): Copy, Jurisdictions & CTA filling the right half */}
          <div className="flex justify-center lg:justify-start w-full z-20">
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
