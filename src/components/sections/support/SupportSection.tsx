import React from "react";
import { Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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
      {/* Background ambient glow: periwinkle top, vivid pink-lilac edge, soft lilac bottom */}
      <div className="support-section-ambient-glow" aria-hidden="true" />

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

        {/* Centered CTA: BOOK A DEMO with Calendar Icon */}
        <div className="mt-10 sm:mt-12 lg:mt-[50px] flex justify-center w-full px-4">
          <Button
            variant="gradient"
            size="md"
            href={support.cta.href}
            className="w-full max-w-[280px] sm:w-auto sm:min-w-[190px] h-[48px] px-6 text-xs sm:text-sm font-bold tracking-[var(--ls-button)] shadow-[0_6px_24px_rgba(10,108,255,0.36)] hover:shadow-[0_8px_30px_rgba(10,108,255,0.48)] justify-center"
          >
            <Calendar className="w-4 h-4 mr-1 shrink-0" aria-hidden="true" />
            <span>{support.cta.label}</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
