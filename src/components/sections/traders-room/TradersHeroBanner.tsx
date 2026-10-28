import React from "react";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersHeroBanner() {
  const { hero } = tradersRoomContent;

  return (
    <section className="relative w-full bg-[#031830] bg-tech-grid pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden text-center">
      {/* Decorative Left Circular Graphic */}
      <div
        className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full border border-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-10 bottom-8 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#00B4E6]/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Right Soft Cyan Rounded Square with glow */}
      <div
        className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 w-40 sm:w-56 h-40 sm:h-56 rounded-3xl bg-[#00B4E6]/15 border border-[#00B4E6]/25 rotate-12 blur-[1px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-10 top-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#00B4E6]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#022244]/80 border border-[#00B4E6]/40 text-[#00B4E6] text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
          {hero.badge}
        </div>

        {/* Main Title: Client Area */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
          {hero.title}
        </h1>

        {/* Subtitle with decorative red accent lines: — FOREX TRADER ROOM — */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          <span className="w-6 sm:w-10 h-[2px] bg-[#E02424]" aria-hidden="true" />
          <span className="text-sm sm:text-base font-bold tracking-widest text-slate-100 uppercase">
            FOREX TRADER <span className="text-white font-extrabold">ROOM</span>
          </span>
          <span className="w-6 sm:w-10 h-[2px] bg-[#E02424]" aria-hidden="true" />
        </div>

        {/* Carousel / Indicator Dots (3 dots, middle active cyan pill) */}
        <div className="flex items-center justify-center gap-2 pt-2" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-slate-500/60" />
          <span className="w-6 h-2 rounded-full bg-[#00B4E6]" />
          <span className="w-2 h-2 rounded-full bg-slate-500/60" />
        </div>
      </div>
    </section>
  );
}
