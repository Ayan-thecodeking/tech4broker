import React from "react";
import { Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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

        {/* CTA Button: Book a demo with Calendar Icon */}
        <div className="mt-[var(--integrated-cta-gap)] flex justify-center w-full px-4">
          <Button
            variant="gradient"
            size="md"
            href={integrated.cta.href}
            className="w-full max-w-[280px] sm:w-auto sm:min-w-[200px] h-[40px] px-6 text-sm font-semibold shadow-[0_6px_24px_rgba(10,108,255,0.36)] hover:shadow-[0_8px_30px_rgba(10,108,255,0.48)] justify-center"
          >
            <Calendar className="w-4 h-4 mr-1 shrink-0" aria-hidden="true" />
            <span>{integrated.cta.label}</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
