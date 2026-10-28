import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export interface HeroContentProps {
  eyebrow: string;
  headingLines: string[];
  sincePrefix: string;
  foundedYear: number;
  paragraph: string;
  tagline: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  className?: string;
}

export function HeroContent({
  eyebrow,
  headingLines,
  sincePrefix,
  foundedYear,
  paragraph,
  tagline,
  ctaButtonText,
  ctaButtonUrl,
  className,
}: HeroContentProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-[700px] z-10 mx-auto lg:mx-0 w-full",
        className
      )}
    >
      {/* Eyebrow */}
      <p className="text-[clamp(1.125rem,2vw,1.5rem)] font-[number:var(--fw-regular)] text-[var(--color-text)] mb-2 sm:mb-3">
        {eyebrow}
      </p>

      {/* Main H1 Headline */}
      <h1 className="text-hero-headline leading-[1.12] mb-4 sm:mb-6">
        {headingLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
        <span className="block text-[var(--color-primary)]">
          {sincePrefix} {foundedYear}
        </span>
      </h1>

      {/* Paragraph + Tagline */}
      <div className="text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-text-muted)] max-w-[34ch] sm:max-w-[48ch] lg:max-w-[560px] mx-auto lg:mx-0">
        <p className="mb-2">{paragraph}</p>
        <p className="font-[number:var(--fw-bold)] text-[var(--color-text)]">
          {tagline}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-5 sm:mt-8 w-full flex justify-center lg:justify-start">
        <Button
          variant="gradient"
          size="md"
          href={ctaButtonUrl}
          className="shadow-[0_8px_25px_rgba(10,108,255,0.35)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.48)] px-8 h-[40px] text-sm font-semibold w-full sm:w-auto max-w-[320px] justify-center"
        >
          <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{ctaButtonText}</span>
        </Button>
      </div>
    </div>
  );
}
