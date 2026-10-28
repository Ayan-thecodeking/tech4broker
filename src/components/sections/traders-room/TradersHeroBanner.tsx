"use client";

import React from "react";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersHeroBanner() {
  const { hero } = tradersRoomContent;

  return (
    <section className="relative w-full bg-[#031830] bg-tech-grid pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden text-center">
      {/* Decorative Left Circular Bubble with Smooth Floating Up/Down Animation */}
      <div
        className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 pointer-events-none animate-bubble-float-1 z-0"
        aria-hidden="true"
      >
        <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-white/10 bg-gradient-to-br from-[#1b264f]/40 to-transparent shadow-2xl relative">
          <div className="absolute inset-4 rounded-full bg-[#00B4E6]/10 blur-2xl" />
        </div>
      </div>

      {/* Decorative Right Cyan Tilted Rounded Square with Smooth Floating Up/Down Animation */}
      <div
        className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 pointer-events-none animate-bubble-float-2 z-0"
        aria-hidden="true"
      >
        <div className="w-36 h-36 sm:w-56 sm:h-56 rounded-3xl sm:rounded-[2.5rem] bg-[#00B4E6]/15 border border-[#00B4E6]/25 shadow-2xl relative">
          <div className="absolute -inset-3 rounded-3xl bg-[#00B4E6]/15 blur-3xl" />
        </div>
      </div>

      {/* Center Content Matching Screenshot 1 */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022244]/80 border border-[#00B4E6]/40 text-[#00B4E6] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00B4E6]" />
          <span>{hero.badge || "TRADERS ROOM KEY FEATURES AT A GLANCE"}</span>
        </div>

        {/* Main Title: Client Area */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 sm:mb-5">
          {hero.title || "Client Area"}
        </h1>

        {/* Subtitle with decorative red accent lines: — FOREX TRADER ROOM — */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">
          <span className="w-8 sm:w-12 h-[1.5px] bg-[#E02424]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-200 uppercase">
            FOREX TRADER <span className="text-white font-extrabold">ROOM</span>
          </span>
          <span className="w-8 sm:w-12 h-[1.5px] bg-[#E02424]" aria-hidden="true" />
        </div>

        {/* Carousel / Slider Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/70" />
          <span className="w-5 h-1.5 rounded-full bg-[#00B4E6]" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/70" />
        </div>
      </div>
    </section>
  );
}
