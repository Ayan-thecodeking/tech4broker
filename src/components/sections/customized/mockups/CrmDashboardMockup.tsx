import React from "react";
import { ProfileStatsBar } from "./ProfileStatsBar";
import { ChartPanel } from "./ChartPanel";
import { FlowCard } from "./FlowCard";
import { cn } from "@/lib/cn";
import type { CustomizedMockupData } from "@/types/content";

export interface CrmDashboardMockupProps {
  mockup: CustomizedMockupData;
  className?: string;
}

export function CrmDashboardMockup({
  mockup,
  className,
}: CrmDashboardMockupProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[var(--mockup-width)] h-[var(--mockup-height)] select-none",
        className
      )}
    >
      {/* Visually hidden screen-reader description for accessibility */}
      <span className="sr-only">
        Dashboard preview showing account stats, lead and deposit charts, and an onboarding flow
      </span>

      {/* Composition Container with 3 Overlapping Layers */}
      <div className="relative w-full h-full" aria-hidden="true">
        {/* Layer A: Chart Panel (Back Layer, shifted left, top ~55px) */}
        <div className="chart-panel-layer absolute left-0 top-[52px] w-[94%] sm:w-[530px] z-10 transition-transform duration-500">
          <ChartPanel charts={mockup.charts} />
        </div>

        {/* Layer B: Profile Stats Bar (Top Layer, shifted right, top 0, floating gently) */}
        <div className="profile-stats-layer absolute right-0 top-0 w-[95%] sm:w-[530px] z-20 animate-float-gentle transition-transform duration-500">
          <ProfileStatsBar data={mockup} />
        </div>

        {/* Layer C: Flow Card (Front Layer, bottom-right, bottom 0, floating reverse) */}
        <div className="flow-card-layer absolute right-0 bottom-0 w-[65%] sm:w-[315px] z-30 animate-float-gentle-reverse transition-transform duration-500">
          <FlowCard flow={mockup.flow} />
        </div>
      </div>
    </div>
  );
}
