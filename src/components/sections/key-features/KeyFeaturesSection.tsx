import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KeyFeaturesTabs } from "./KeyFeaturesTabs";
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
  return (
    <section
      id="key-features"
      aria-labelledby="key-features-heading"
      className={cn(
        "relative w-full overflow-hidden bg-[var(--color-bg)] pt-[30px] pb-12 sm:pb-14 md:pb-[60px]",
        className
      )}
    >
      {/* 1. Page-level Ambient Cyan & Blue Background Glow behind Card on Right */}
      <div className="keyfeatures-section-ambient-glow" aria-hidden="true" />

      {/* 2. Main Container with White Compact Card (~1010px) */}
      <Container className="relative z-10 flex flex-col items-center">
        <SectionCard
          maxWidth="compact"
          glow="keyfeatures"
          className="pt-8 sm:pt-[38px] pb-10 sm:pb-[44px] px-6 sm:px-10 lg:px-12 xl:px-14"
        >
          {/* Eyebrow & Title */}
          <SectionHeading
            id="key-features-heading"
            eyebrow={keyFeatures.eyebrow}
            title={keyFeatures.title}
            align="center"
            titleAs="h2"
            eyebrowClassName="text-[12px] md:text-[16px] tracking-[var(--ls-eyebrow)] mb-7 md:mb-10 text-[var(--color-text)]"
          />

          {/* Subtitle (~15px, max-width ~460px wrapping to 2 lines, line-height 1.2) */}
          <p className="mt-4 md:mt-[25px] text-[14px] md:text-[15px] font-[number:var(--fw-regular)] text-[var(--color-text)] text-center max-w-[320px] md:max-w-[460px] leading-[1.25]">
            {keyFeatures.subtitle}
          </p>

          {/* Tabs Row (Gap ~75px on desktop) & Active Feature Panel */}
          <div className="w-full mt-10 sm:mt-12 lg:mt-[75px]">
            <KeyFeaturesTabs data={keyFeatures} />
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
