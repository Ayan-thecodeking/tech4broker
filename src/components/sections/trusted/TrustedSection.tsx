import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMarquee } from "./LogoMarquee";
import { cn } from "@/lib/cn";
import type { TrustedData } from "@/types/content";

export interface TrustedSectionProps {
  trusted: TrustedData;
  className?: string;
}

export function TrustedSection({ trusted, className }: TrustedSectionProps) {
  const formattedTitle = trusted.title.replace("{count}", `${trusted.count}`);

  return (
    <section
      id="trusted"
      aria-labelledby="trusted-heading"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-[var(--section-gap,5rem)] overflow-hidden",
        className
      )}
    >
      {/* Large soft blue ambient glow bleeding from the bottom-right behind the card */}
      <div className="trusted-section-ambient-glow" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Main Floating Rounded Card */}
        <SectionCard
          maxWidth="wide"
          glow="trusted"
          className="min-h-[260px] sm:min-h-[392px] justify-between pt-7 sm:pt-[clamp(2.5rem,3.5vw,3.75rem)] pb-7 sm:pb-[clamp(3rem,4.2vw,4.75rem)] px-3 sm:px-[clamp(1rem,2vw,2.5rem)]"
        >
          {/* Heading: Eyebrow 'TRUSTED' + Title */}
          <SectionHeading
            eyebrow={trusted.eyebrow}
            title={formattedTitle}
            align="center"
            titleAs="h2"
            className="w-full"
          />

          {/* Logo Marquee Row */}
          <div className="w-full mt-8 sm:mt-14 lg:mt-22">
            <LogoMarquee logos={trusted.logos} />
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
