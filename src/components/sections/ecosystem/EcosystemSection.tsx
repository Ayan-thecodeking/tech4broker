import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { EcosystemData } from "@/types/content";

export interface EcosystemSectionProps {
  ecosystem: EcosystemData;
  className?: string;
}

export function EcosystemSection({
  ecosystem,
  className,
}: EcosystemSectionProps) {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className={cn(
        "relative w-full overflow-hidden bg-[var(--color-bg)] py-16 sm:py-20 lg:py-[90px] xl:py-[100px]",
        className
      )}
    >
      {/* 2. Main Content Container */}
      <Container className="relative z-10 flex flex-col items-center">
        {/* Eyebrow & Title */}
        <SectionHeading
          id="ecosystem-heading"
          eyebrow={ecosystem.eyebrow}
          title={ecosystem.title}
          align="center"
          titleAs="h2"
          eyebrowClassName="text-[12px] md:text-[16px] tracking-[var(--ls-eyebrow)] mb-7 md:mb-10"
        />

        {/* Subtitle */}
        <p className="mt-4 md:mt-5 text-[14px] md:text-[length:var(--fs-small-body)] font-[number:var(--fw-regular)] text-[var(--color-text)] text-center max-w-[320px] md:max-w-[620px] leading-relaxed">
          {ecosystem.subtitle}
        </p>

        {/* 3. Central Ecosystem Graphic */}
        <div className="w-full max-w-[1020px] mt-8 md:mt-[36px] flex justify-center items-center">
          <Image
            src={ecosystem.image?.src || "/images/4.webp"}
            alt={ecosystem.image?.alt || "Tech4Broker Ecosystem"}
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-contain select-none pointer-events-none border-none shadow-none mix-blend-multiply"
            sizes="(max-width: 1020px) 100vw, 1020px"
          />
        </div>
      </Container>
    </section>
  );
}
