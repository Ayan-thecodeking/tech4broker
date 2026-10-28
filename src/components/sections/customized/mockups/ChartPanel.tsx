import React from "react";
import { Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MockupChartItem } from "@/types/content";

export interface ChartPanelProps {
  charts: MockupChartItem[];
  className?: string;
}

const statusColors = [
  "#A855F7", // purple: No answer
  "#94A3B8", // gray: Blank
  "#FFFFFF", // white: New
  "#06B6D4", // cyan: Interested
  "#F59E0B", // amber: Call back
  "#EF4444", // red: Call back future
];

export function ChartPanel({ charts, className }: ChartPanelProps) {
  const leadChart = charts[0] || {
    title: "Lead by Status",
    bars: [12, 4, 15, 8, 17, 18],
    legend: ["No answer", "Blank", "New", "Interested", "Call back", "Call back future"],
  };

  const depositChart = charts[1] || {
    title: "Deposit by Day",
    bars: [140, 60, 195, 85],
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full max-w-[540px] h-[265px] rounded-[20px] bg-gradient-to-br from-[#0A6CFF] via-[#0A73FF] to-[#00A1FF] p-3 sm:p-3.5 shadow-lg select-none flex gap-2.5 sm:gap-3",
        className
      )}
    >
      {/* =========================================================================
          1. Sub-panel: Lead by Status
          ========================================================================= */}
      <div className="flex-1 bg-[#092B6B]/55 backdrop-blur-sm rounded-[14px] p-2.5 sm:p-3 border border-white/10 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-1">
          <span className="text-[10px] sm:text-[11px] font-[number:var(--fw-medium)] text-white tracking-tight">
            {leadChart.title}
          </span>
          <div className="flex items-center gap-1 opacity-70">
            <Minus size={8} className="text-white" />
            <Square size={7} className="text-white" />
            <X size={8} className="text-white" />
          </div>
        </div>

        {/* Chart area with Y-axis */}
        <div className="flex items-end gap-1.5 h-[115px] pt-4 pb-1 relative">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full text-[7px] sm:text-[8px] text-white/60 font-mono pr-1 select-none">
            <span>20</span>
            <span>15</span>
            <span>10</span>
            <span>5</span>
            <span>0</span>
          </div>

          {/* Grid lines background */}
          <div className="absolute left-4 right-0 top-4 bottom-1 flex flex-col justify-between pointer-events-none opacity-15">
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
          </div>

          {/* 6 Vertical Bars */}
          <div className="flex-1 flex items-end justify-between px-1 h-full z-10">
            {leadChart.bars.map((val, idx) => {
              const heightPct = Math.min(100, Math.max(10, (val / 20) * 100));
              const isHighlight = idx === 2; // "New: 15" highlighted bar
              const color = statusColors[idx] || "#FFFFFF";

              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center justify-end h-full w-[10px] sm:w-[12px]"
                >
                  {/* Tooltip on highlighted bar */}
                  {isHighlight && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black/85 text-white text-[7px] sm:text-[7.5px] px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-md flex items-center gap-0.5 z-20">
                      <span className="w-1 h-1 rounded-full bg-white inline-block" />
                      <span>New: 15</span>
                    </div>
                  )}

                  {/* The Bar */}
                  <div
                    className={cn(
                      "w-full rounded-full overflow-hidden transition-all duration-300",
                      isHighlight ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" : "bg-white/20"
                    )}
                    style={{ height: `${heightPct}%` }}
                  >
                    {!isHighlight && (
                      <div
                        className="w-full h-[6px] sm:h-[8px] mt-auto rounded-b-full"
                        style={{ backgroundColor: color }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        {leadChart.legend && (
          <div className="grid grid-cols-3 gap-x-1 gap-y-0.5 pt-1 border-t border-white/10 text-[6.5px] sm:text-[7px] text-white/75">
            {leadChart.legend.map((item, idx) => (
              <div key={item} className="flex items-center gap-1 truncate">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: statusColors[idx] || "#FFFFFF" }}
                />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          2. Sub-panel: Deposit by Day
          ========================================================================= */}
      <div className="w-[38%] sm:w-[40%] bg-[#092B6B]/55 backdrop-blur-sm rounded-[14px] p-2.5 sm:p-3 border border-white/10 flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-1">
          <span className="text-[10px] sm:text-[11px] font-[number:var(--fw-medium)] text-white tracking-tight">
            {depositChart.title}
          </span>
        </div>

        {/* Chart area with Y-axis */}
        <div className="flex items-end gap-1.5 h-[115px] pt-4 pb-1 relative">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-full text-[7px] sm:text-[8px] text-white/60 font-mono pr-1 select-none">
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>

          {/* Grid lines background */}
          <div className="absolute left-4 right-0 top-4 bottom-1 flex flex-col justify-between pointer-events-none opacity-15">
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
            <div className="w-full h-px bg-white" />
          </div>

          {/* 4 Vertical Bars */}
          <div className="flex-1 flex items-end justify-between px-2 h-full z-10">
            {depositChart.bars.map((val, idx) => {
              const heightPct = Math.min(100, Math.max(10, (val / 200) * 100));
              const isHighlight = idx === 2; // solid white tallest bar

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-end h-full w-[10px] sm:w-[12px]"
                >
                  <div
                    className={cn(
                      "w-full rounded-full overflow-hidden transition-all duration-300",
                      isHighlight
                        ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                        : "bg-white/25"
                    )}
                    style={{ height: `${heightPct}%` }}
                  >
                    {!isHighlight && (
                      <div
                        className="w-full h-[6px] sm:h-[8px] mt-auto rounded-b-full"
                        style={{
                          backgroundColor:
                            idx === 0
                              ? "#06B6D4"
                              : idx === 1
                              ? "#EC4899"
                              : "#22C55E",
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom space filler matching legend height */}
        <div className="h-[14px] flex items-center justify-center border-t border-white/10 text-[7px] text-white/60">
          <span>Weekly trends</span>
        </div>
      </div>
    </div>
  );
}
