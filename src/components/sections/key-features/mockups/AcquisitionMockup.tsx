import React from "react";
import { SourceIcons } from "./SourceIcons";
import { LeadsTable } from "./LeadsTable";
import { StatCard } from "./StatCard";
import { ReferralNodes } from "./ReferralNodes";
import { cn } from "@/lib/cn";
import type { KeyFeaturesMockupData } from "@/types/content";

export interface AcquisitionMockupProps {
  mockup: KeyFeaturesMockupData;
  className?: string;
}

export function AcquisitionMockup({ mockup, className }: AcquisitionMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[520px] h-[385px] shrink-0 select-none overflow-visible",
        className
      )}
    >
      <span className="sr-only">
        Preview of a lead management dashboard with first-time deposit and deposit statistics and referral sources
      </span>

      {/* a) SOURCE ICONS (top-left, pointing down into the table) */}
      <div className="absolute top-0 left-[24px] z-10" aria-hidden="true">
        <SourceIcons sources={mockup.sources} />
      </div>

      {/* b) LEADS TABLE (middle base layer, ~400x245px) */}
      <div className="absolute top-[65px] left-[20px] z-0" aria-hidden="true">
        <LeadsTable leads={mockup.leads} />
      </div>

      {/* c) FIRST-DEPOSITS STAT CARD (front layer, top-right, vivid blue gradient, overlapping table) */}
      <div
        className="absolute top-[45px] right-0 z-20 w-[225px] animate-float-subtle-c"
        aria-hidden="true"
      >
        <StatCard data={mockup.firstDeposits} variant="primary" />
      </div>

      {/* d) DEPOSITS STAT CARD (front layer, bottom-left, dark card, overlapping table) */}
      <div
        className="absolute bottom-[40px] left-0 z-20 w-[235px] animate-float-subtle-d"
        aria-hidden="true"
      >
        <StatCard data={mockup.deposits} variant="dark" />
      </div>

      {/* e) REFERRAL NODES (bottom-right, below table with arrows pointing up) */}
      <div className="absolute bottom-0 right-[25px] z-10" aria-hidden="true">
        <ReferralNodes referrals={mockup.referrals} />
      </div>
    </div>
  );
}
