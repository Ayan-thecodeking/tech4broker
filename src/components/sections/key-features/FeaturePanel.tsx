import React from "react";
import Image from "next/image";
import { NumberBadge } from "./NumberBadge";
import { AcquisitionMockup } from "./mockups/AcquisitionMockup";
import { MockupPlaceholder } from "./mockups/MockupPlaceholder";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/cn";
import type {
  KeyFeaturesTabItem,
  KeyFeaturesMockupData,
} from "@/types/content";

export interface FeaturePanelProps {
  tab: KeyFeaturesTabItem;
  mockup: KeyFeaturesMockupData;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}

export function FeaturePanel({
  tab,
  mockup,
  cta,
  className,
}: FeaturePanelProps) {
  return (
    <div
      className={cn(
        "w-full min-h-[var(--kf-panel-min-height)] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-10 xl:gap-14",
        className
      )}
    >
      {/* =========================================================================
          LEFT COLUMN: Step Badge + Kicker, Heading, Description, and CTA (Desktop)
          ========================================================================= */}
      <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-between">
        <div className="flex flex-col items-center lg:items-start">
          {/* Step Badge & Kicker Row */}
          <div className="flex items-center gap-2.5 select-none">
            <NumberBadge number={tab.step} />
            <span className="text-[13px] sm:text-[14px] font-[number:var(--fw-semibold)] text-[var(--color-primary)] tracking-tight">
              {tab.kicker}
            </span>
          </div>

          {/* Heading */}
          <h3 className="mt-4 sm:mt-5 text-[20px] sm:text-[23px] lg:text-[26px] font-[number:var(--fw-semibold)] text-white leading-[1.22] tracking-tight max-w-[440px]">
            {tab.heading}
          </h3>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] font-[number:var(--fw-regular)] text-slate-400 leading-relaxed max-w-[440px]">
            {tab.description}
          </p>
        </div>

        {/* CTA Button: Visible on Desktop (>=1024px) LEFT-ALIGNED at bottom */}
        <div className="hidden lg:flex mt-10 pt-2">
          <Button
            variant="gradient"
            size="md"
            href={cta.href}
            className="h-[40px] px-6 min-w-[168px] text-sm font-semibold shadow-[0_4px_18px_rgba(10,108,255,0.32)] gap-1.5"
          >
            <Calendar size={15} strokeWidth={2.2} className="shrink-0" />
            <span>{cta.label}</span>
          </Button>
        </div>
      </div>

      {/* =========================================================================
          RIGHT COLUMN: Visual Mockup (Expanded to ~740px max)
          ========================================================================= */}
      <div className="w-full lg:flex-1 flex items-center justify-center max-w-[760px]">
        {tab.visual.src ? (
          <div className="w-full max-w-[740px] flex items-center justify-center">
            <Image
              src={tab.visual.src}
              alt={tab.visual.alt || tab.heading}
              width={1589}
              height={990}
              priority={tab.step === 1}
              className="w-full h-auto max-h-[440px] object-contain select-none pointer-events-none drop-shadow-md transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 740px"
            />
          </div>
        ) : tab.visual.type === "acquisition" ? (
          <div className="relative w-full max-w-[520px] h-[240px] min-[360px]:h-[265px] min-[400px]:h-[295px] sm:h-[340px] md:h-[370px] lg:h-[385px] flex items-center justify-center overflow-hidden lg:overflow-visible">
            <div className="relative w-[520px] h-[385px] shrink-0 origin-center scale-[0.60] min-[360px]:scale-[0.66] min-[400px]:scale-[0.74] sm:scale-[0.85] md:scale-[0.95] lg:scale-100 transition-transform duration-300">
              <AcquisitionMockup mockup={mockup} />
            </div>
          </div>
        ) : (
          <MockupPlaceholder
            src={tab.visual.src}
            alt={tab.visual.alt || tab.heading}
          />
        )}
      </div>

      {/* CTA Button: Mobile & Tablet View (<1024px) Centered below the mockup */}
      <div className="flex lg:hidden w-full justify-center mt-2">
        <Button
          variant="gradient"
          size="md"
          href={cta.href}
          className="w-full max-w-[280px] h-[40px] text-sm font-semibold shadow-[0_4px_18px_rgba(10,108,255,0.32)] gap-1.5"
        >
          <Calendar size={15} strokeWidth={2.2} className="shrink-0" />
          <span>{cta.label}</span>
        </Button>
      </div>
    </div>
  );
}
