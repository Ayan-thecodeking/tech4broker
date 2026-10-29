import React from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { CrmDashboardMockup } from "./mockups/CrmDashboardMockup";
import { MockupPlaceholder } from "./mockups/MockupPlaceholder";
import { cn } from "@/lib/cn";
import type { CustomizedTabItem, CustomizedMockupData } from "@/types/content";

export interface CustomizedPanelProps {
  tab: CustomizedTabItem;
  mockup: CustomizedMockupData;
  currentIndex?: number;
  totalItems?: number;
  items?: CustomizedTabItem[];
  onPrev?: () => void;
  onNext?: () => void;
  onSelectIndex?: (index: number) => void;
  className?: string;
}

export function CustomizedPanel({
  tab,
  mockup,
  currentIndex = 0,
  totalItems = 1,
  items,
  onPrev,
  onNext,
  onSelectIndex,
  className,
}: CustomizedPanelProps) {
  return (
    <div
      className={cn(
        "w-full max-w-6xl mx-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[var(--panel-min-height)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 xl:gap-12",
        className
      )}
    >
      {/* =========================================================================
          LEFT COLUMN: Heading + Bullets with Tick Icons + Prev/Next Navigation
          ========================================================================= */}
      <div className="w-full lg:w-[440px] xl:w-[460px] shrink-0 flex flex-col text-left">
        <h3 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[number:var(--fw-semibold)] text-white leading-[1.25] tracking-tight max-w-[480px]">
          {tab.heading}
        </h3>

        {tab.subheading && (
          <p className="mt-3 sm:mt-3.5 text-[14px] sm:text-[15px] font-[number:var(--fw-regular)] text-slate-400 leading-relaxed max-w-[480px]">
            {tab.subheading}
          </p>
        )}

        {/* Bullets with Tick Icon */}
        <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5 text-[14px] sm:text-[15px] font-[number:var(--fw-regular)] leading-relaxed max-w-[480px]">
          {tab.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              <span className="text-slate-300">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Previous and Next Navigation Buttons */}
        <div className="mt-7 sm:mt-8 flex items-center gap-2.5">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous feature"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/[0.08] hover:bg-white/[0.18] hover:border-white/30 text-white shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next feature"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/[0.08] hover:bg-white/[0.18] hover:border-white/30 text-white shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          RIGHT COLUMN: Visual Mockup (Expanded to ~740px max)
          ========================================================================= */}
      <div className="w-full lg:flex-1 flex items-center justify-center max-w-[620px]">
        {tab.visual.type === "image" && tab.visual.src ? (
          <div className="w-full flex items-center justify-center">
            <Image
              src={tab.visual.src}
              alt={tab.visual.alt || tab.heading}
              width={1496}
              height={1051}
              priority={tab.id === "white-label"}
              className="w-full h-auto max-h-[440px] object-contain select-none pointer-events-none drop-shadow-md transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 740px"
            />
          </div>
        ) : tab.visual.type === "dashboard" ? (
          <div className="relative w-full max-w-[560px] h-[225px] min-[360px]:h-[250px] min-[400px]:h-[285px] sm:h-[330px] md:h-[370px] lg:h-[385px] flex items-center justify-center overflow-hidden lg:overflow-visible">
            <div className="relative w-[560px] h-[385px] shrink-0 origin-center scale-[0.56] min-[360px]:scale-[0.62] min-[400px]:scale-[0.70] sm:scale-[0.82] md:scale-[0.92] lg:scale-100 transition-transform duration-300">
              <CrmDashboardMockup mockup={mockup} />
            </div>
          </div>
        ) : (
          <MockupPlaceholder
            src={"src" in tab.visual ? tab.visual.src : undefined}
            alt={"alt" in tab.visual ? tab.visual.alt || tab.heading : tab.heading}
          />
        )}
      </div>
    </div>
  );
}
