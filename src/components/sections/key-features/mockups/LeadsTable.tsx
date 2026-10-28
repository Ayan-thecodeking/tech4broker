import React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import type { KeyFeaturesLeadItem } from "@/types/content";

export interface LeadsTableProps {
  leads: KeyFeaturesLeadItem[];
  className?: string;
}

const avatarColors = [
  "bg-[#E9D5FF] text-[#7E22CE]",
  "bg-[#FBCFE8] text-[#BE185D]",
  "bg-[#E0E7FF] text-[#4338CA]",
  "bg-[#CFFAFE] text-[#0E7490]",
  "bg-[#FEF08A] text-[#A16207]",
  "bg-[#DCFCE7] text-[#15803D]",
  "bg-[#F3E8FF] text-[#6B21A8]",
];

export function LeadsTable({ leads, className }: LeadsTableProps) {
  // Always render 7 rows
  const displayLeads = leads.slice(0, 7);

  return (
    <div
      className={cn(
        "w-[390px] sm:w-[400px] h-[245px] rounded-[16px] bg-[var(--color-surface-muted)] shadow-[0_8px_24px_rgba(15,23,42,0.06)] border border-black/5 p-3 flex flex-col justify-between overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col divide-y divide-black/[0.04]">
        {displayLeads.map((lead, idx) => {
          const isFirst = idx === 0;
          const avatarColor = avatarColors[idx % avatarColors.length];

          return (
            <div
              key={lead.name || idx}
              className="flex items-center justify-between py-1.5 px-1 h-[29px]"
            >
              {/* Left: Avatar + Name or blurred bar */}
              <div className="flex items-center gap-2 w-[110px] shrink-0">
                <div
                  className={cn(
                    "w-[18px] h-[18px] rounded-full flex items-center justify-center text-[7.5px] font-[number:var(--fw-bold)] shrink-0",
                    avatarColor
                  )}
                >
                  {lead.initials}
                </div>

                {isFirst ? (
                  <span className="text-[7.5px] font-[number:var(--fw-bold)] text-[var(--color-text)] tracking-tight">
                    {lead.name}
                  </span>
                ) : (
                  <div className="h-[6.5px] w-[60px] rounded-full bg-black/10 blur-[0.5px]" />
                )}
              </div>

              {/* Middle: Long horizontal gray bar */}
              <div className="hidden sm:block flex-1 mx-3">
                <div className="h-[2px] w-full bg-black/10 rounded-full" />
              </div>

              {/* Right: Phone icon + small bar + "New" green badge */}
              <div className="flex items-center gap-2.5 shrink-0">
                <Phone size={9} className="text-gray-400 shrink-0" />
                <div className="w-[30px] sm:w-[40px] h-[2px] bg-black/10 rounded-full" />

                <div className="px-1.5 py-0.5 rounded-[4px] bg-[#E6F8EF] border border-[#A7F3D0]/60 flex items-center justify-center">
                  <span className="text-[7.5px] font-[number:var(--fw-medium)] text-[var(--color-success)] leading-none">
                    {lead.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
