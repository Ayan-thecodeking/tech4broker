import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupportGrid } from "./SupportGrid";
import { cn } from "@/lib/cn";
import type { SupportData } from "@/types/content";

export interface SupportSectionProps {
  support: SupportData;
  className?: string;
}

export function SupportSection({ support, className }: SupportSectionProps) {
  return (
    <section
      id="support"
      aria-labelledby="support-heading"
      className={cn(
        "relative w-full pt-12 sm:pt-14 lg:pt-[50px] pb-12 sm:pb-14 lg:pb-[55px] overflow-hidden",
        className
      )}
    >
      <Container className="relative z-10 max-w-[var(--container-narrow)] flex flex-col items-center">
        {/* Eyebrow 'SUPPORT' + Section Title */}
        <SectionHeading
          id="support-heading"
          eyebrow={support.eyebrow}
          title={support.title}
          align="center"
          titleAs="h2"
          className="w-full max-w-4xl"
        />

        {/* 3-Column Feature Grid */}
        <div className="w-full mt-10 sm:mt-12 lg:mt-[50px]">
          <SupportGrid features={support.features} />
        </div>
      </Container>
    </section>
  );
}
