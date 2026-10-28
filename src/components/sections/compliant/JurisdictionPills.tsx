import React from "react";
import { JurisdictionPill } from "./JurisdictionPill";
import { cn } from "@/lib/cn";
import type { JurisdictionItem } from "@/types/content";

export interface JurisdictionPillsProps {
  jurisdictions: JurisdictionItem[];
  moreLabel: string;
  activeJurisdictionId?: string | null;
  onSelectJurisdiction?: (id: string | null) => void;
  onHoverJurisdiction?: (id: string | null) => void;
  className?: string;
}

export function JurisdictionPills({
  jurisdictions,
  moreLabel,
  activeJurisdictionId = null,
  onSelectJurisdiction,
  onHoverJurisdiction,
  className,
}: JurisdictionPillsProps) {
  return (
    <ul
      role="list"
      className={cn(
        "flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-2.5 list-none m-0 p-0 max-w-[620px]",
        className
      )}
    >
      {jurisdictions.map((item) => {
        const id = item.countryCode.toLowerCase();
        const isActive = activeJurisdictionId === id;

        return (
          <li key={item.label} className="jurisdiction-pill-item">
            <JurisdictionPill
              item={item}
              isActive={isActive}
              onSelect={() => {
                // Toggle selection or focus
                onSelectJurisdiction?.(isActive ? null : id);
              }}
              onHover={(isHovered) => {
                onHoverJurisdiction?.(isHovered ? id : null);
              }}
            />
          </li>
        );
      })}

      {/* "+ more jurisdictions" Pill */}
      <li key="more-jurisdictions" className="jurisdiction-pill-item">
        <JurisdictionPill isMore moreLabel={moreLabel} />
      </li>
    </ul>
  );
}
