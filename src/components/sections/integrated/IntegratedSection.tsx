import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformGrid } from "./PlatformGrid";
import { cn } from "@/lib/cn";
import type { IntegratedData } from "@/types/content";

export interface IntegratedSectionProps {
  integrated: IntegratedData;
  className?: string;
}

export function IntegratedSection({
  integrated,
  className,
}: IntegratedSectionProps) {
  return (
    <section
      id="integrated"
      aria-labelledby="integrated-heading"
      className={cn(
        "relative w-full pt-[var(--integrated-padding-top)] pb-[var(--integrated-padding-bottom)] overflow-hidden",
        className
      )}
    >
      <Container className="relative z-10 flex flex-col items-center">
        {/* Eyebrow + Section Title */}
        <SectionHeading
          id="integrated-heading"
          eyebrow={integrated.eyebrow}
          title={integrated.title}
          align="center"
          titleAs="h2"
          className="w-full"
        />

        {/* 5-Column Platform Grid */}
        <div className="w-full mt-[var(--integrated-title-gap)]">
          <PlatformGrid platforms={integrated.platforms} />
        </div>
      </Container>
    </section>
  );
}
