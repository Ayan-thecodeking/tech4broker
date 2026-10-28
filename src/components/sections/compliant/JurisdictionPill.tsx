import React from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { JurisdictionItem } from "@/types/content";

export interface JurisdictionPillProps {
  item?: JurisdictionItem;
  isMore?: boolean;
  moreLabel?: string;
  isActive?: boolean;
  onSelect?: () => void;
  onHover?: (isHovered: boolean) => void;
  className?: string;
}

export function JurisdictionPill({
  item,
  isMore = false,
  moreLabel = "+ more jurisdictions",
  isActive = false,
  onSelect,
  onHover,
  className,
}: JurisdictionPillProps) {
  if (isMore) {
    return (
      <div
        className={cn(
          "jurisdiction-pill h-[36px] sm:h-[var(--pill-height)] cursor-pointer !bg-[#131b2e] border border-white/12 hover:!bg-[#1a253c] hover:border-white/20 transition-all",
          className
        )}
      >
        {/* Teal circular checkmark */}
        <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center shrink-0 bg-white/[0.05] border border-white/10 text-emerald-400">
          <CheckCircle2
            className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400"
            strokeWidth={2}
          />
        </div>
        <span className="ml-2 sm:ml-2.5 text-[13px] sm:text-[length:var(--fs-pill)] font-[number:var(--fw-regular)] text-slate-200 tracking-tight whitespace-nowrap">
          {moreLabel}
        </span>
      </div>
    );
  }

  if (!item) return null;

  const FlagComponent = Flags[item.countryCode as keyof typeof Flags];

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      onFocus={() => onHover?.(true)}
      onBlur={() => onHover?.(false)}
      aria-label={`Inspect ${item.label} on globe`}
      className={cn(
        "jurisdiction-pill h-[36px] sm:h-[var(--pill-height)] cursor-pointer transition-all duration-200 text-left",
        isActive
          ? "!bg-blue-600/40 border border-blue-400 ring-2 ring-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.35)]"
          : "!bg-[#131b2e] border border-white/12 hover:!bg-[#1a253c] hover:border-white/20",
        className
      )}
    >
      {/* Circular Flag (28px on mobile, 30px on desktop) */}
      <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-full overflow-hidden shrink-0 flex items-center justify-center border border-white/15">
        {FlagComponent ? (
          <FlagComponent
            title={`${item.label} flag`}
            className="w-full h-full object-cover scale-125"
          />
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-200">
            {item.countryCode}
          </div>
        )}
      </div>

      {/* Jurisdiction Label */}
      <span className={cn(
        "ml-2 sm:ml-2.5 text-[13px] sm:text-[length:var(--fs-pill)] font-[number:var(--fw-regular)] tracking-tight whitespace-nowrap",
        isActive ? "text-white font-medium" : "text-slate-200"
      )}>
        {item.label}
      </span>
    </button>
  );
}
