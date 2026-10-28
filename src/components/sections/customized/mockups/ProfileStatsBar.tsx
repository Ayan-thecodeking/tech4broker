import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type { CustomizedMockupData } from "@/types/content";

export interface ProfileStatsBarProps {
  data: CustomizedMockupData;
  className?: string;
}

export function ProfileStatsBar({ data, className }: ProfileStatsBarProps) {
  const { profile, stats } = data;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full max-w-[540px] h-auto min-h-[104px] px-5 py-3.5 rounded-[26px] sm:rounded-[28px] bg-[var(--color-surface-dark)] border border-white/10 shadow-[var(--shadow-float)] select-none flex items-center gap-4 sm:gap-6 backdrop-blur-md",
        className
      )}
    >
      {/* 1. Profile Avatar + Name */}
      <div className="flex flex-col items-center shrink-0 w-[58px]">
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={50}
            height={50}
            className="w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] rounded-full object-cover border border-white/20"
          />
        ) : (
          <div className="relative w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300 border border-white/25 flex items-center justify-center text-gray-800 font-semibold text-xs shadow-inner">
            <ImagePlaceholder
              width={50}
              height={50}
              shape="circle"
              colorToken="primary"
              alt={profile.name}
            />
          </div>
        )}
        <span className="text-[10px] sm:text-[11px] font-[number:var(--fw-medium)] text-white/90 text-center mt-1 truncate max-w-[56px]">
          {profile.name}
        </span>
      </div>

      {/* Vertical subtle divider */}
      <div className="h-10 w-px bg-white/10 hidden sm:block shrink-0" />

      {/* 2. Stats Grid (3 columns, 2 visible on narrowest screens) */}
      <div className="flex-1 grid grid-cols-2 min-[420px]:grid-cols-3 gap-2 sm:gap-4 items-center">
        {stats.map((stat, idx) => {
          const isUp = stat.trend === "up";
          const trendColor = isUp ? "var(--color-success)" : "var(--color-danger)";

          return (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col",
                idx === 2 && "hidden min-[420px]:flex"
              )}
            >
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white/60 font-medium truncate">
                {stat.label}
              </span>

              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[15px] sm:text-[18px] lg:text-[19px] font-[number:var(--fw-semibold)] text-white tracking-tight">
                  {stat.value}
                </span>
                <span
                  className="text-[8px] sm:text-[9px] font-[number:var(--fw-semibold)] flex items-center shrink-0"
                  style={{ color: trendColor }}
                >
                  {isUp ? (
                    <ArrowUpRight size={10} strokeWidth={2.5} className="mr-0.5 shrink-0" />
                  ) : (
                    <ArrowDownRight size={10} strokeWidth={2.5} className="mr-0.5 shrink-0" />
                  )}
                  {stat.delta}
                </span>
              </div>

              {/* Sparkline curve */}
              <div className="w-full h-[14px] mt-1 overflow-hidden">
                <svg
                  viewBox="0 0 80 16"
                  fill="none"
                  className="w-full h-full preserve-3d"
                  preserveAspectRatio="none"
                >
                  {idx === 0 && (
                    <path
                      d="M 0 13 Q 20 14, 35 8 T 60 4 T 80 2"
                      stroke={trendColor}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  )}
                  {idx === 1 && (
                    <path
                      d="M 0 14 Q 25 15, 45 9 T 65 6 T 80 2"
                      stroke={trendColor}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  )}
                  {idx === 2 && (
                    <path
                      d="M 0 3 Q 25 4, 45 9 T 65 12 T 80 14"
                      stroke={trendColor}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
