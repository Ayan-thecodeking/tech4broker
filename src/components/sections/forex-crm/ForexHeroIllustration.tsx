"use client";

import React from "react";

export function ForexHeroIllustration() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto flex items-center justify-center p-4">
      {/* Decorative organic background elements matching Screenshot 1 */}
      <div
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-44 bg-[#00B4E6]/25 rounded-l-full blur-[2px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-4 -bottom-4 w-28 h-28 bg-[#19C3B2]/30 rounded-full blur-[4px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Elevated White Card */}
      <div className="relative z-10 w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(10,37,64,0.12)] border border-[#E2EEF8] p-5 sm:p-6 transition-transform duration-300 hover:shadow-[0_24px_60px_rgba(0,180,230,0.18)]">
        {/* Top Header Indicators */}
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
          <div className="h-3 w-14 rounded-full bg-[#00B4E6]" />
          <div className="h-3 w-14 rounded-full bg-[#0F294A]" />
          <div className="h-3 w-14 rounded-full bg-[#19C3B2]" />
          <div className="h-3 w-14 rounded-full bg-[#1E3A5F]" />
        </div>

        {/* Dual Chart Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Chart 1: Candlesticks & Trend */}
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between h-[180px]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Live Volume
            </span>

            {/* SVG Candlestick & Trend */}
            <div className="relative h-28 w-full flex items-end justify-between px-1">
              {/* Candlestick 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1.5px] h-20 bg-[#0F294A]" />
                <div className="absolute top-4 w-3 h-10 bg-[#0F294A] rounded-xs" />
              </div>

              {/* Candlestick 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1.5px] h-24 bg-[#00B4E6]" />
                <div className="absolute top-6 w-3 h-12 bg-[#00B4E6] rounded-xs" />
              </div>

              {/* Candlestick 3 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1.5px] h-20 bg-[#19C3B2]" />
                <div className="absolute top-8 w-3 h-8 bg-[#19C3B2] rounded-xs" />
              </div>

              {/* Candlestick 4 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1.5px] h-26 bg-[#0F294A]" />
                <div className="absolute top-3 w-3 h-14 bg-[#0F294A] rounded-xs" />
              </div>

              {/* Candlestick 5 */}
              <div className="relative flex flex-col items-center">
                <div className="w-[1.5px] h-22 bg-[#00B4E6]" />
                <div className="absolute top-5 w-3 h-10 bg-[#00B4E6] rounded-xs" />
              </div>

              {/* Upward Trend Line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 160 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 80 Q 45 60, 80 40 T 150 15"
                  fill="none"
                  stroke="#00B4E6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Chart 2: Circular Donut / Pie Allocation */}
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between items-center h-[180px]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 self-start">
              Desk Share
            </span>

            {/* SVG Pie Chart matching Screenshot 1 */}
            <div className="relative w-28 h-28 my-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {/* Wedge 1: Dark Navy (25%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#0F294A"
                  strokeWidth="24"
                  strokeDasharray="60 180"
                  strokeDashoffset="0"
                />
                {/* Wedge 2: Light Cyan (20%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#7DD3FC"
                  strokeWidth="24"
                  strokeDasharray="48 192"
                  strokeDashoffset="-62"
                />
                {/* Wedge 3: Vibrant Cyan (35%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#00B4E6"
                  strokeWidth="24"
                  strokeDasharray="84 156"
                  strokeDashoffset="-112"
                />
                {/* Wedge 4: Slate Gray (20%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#94A3B8"
                  strokeWidth="24"
                  strokeDasharray="46 194"
                  strokeDashoffset="-198"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
