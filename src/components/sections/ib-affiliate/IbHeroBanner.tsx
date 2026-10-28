import React from "react";
import { ibAffiliateContent } from "@/content/ib-affiliate";

export function IbHeroBanner() {
  const { hero } = ibAffiliateContent;

  return (
    <section className="relative w-full bg-[#031830] pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden text-center">
      {/* Decorative Left Cyan Shape & Dot (Matching Screenshot 1) */}
      <div
        className="absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-16 sm:w-24 h-28 sm:h-40 rounded-tl-full rounded-bl-full bg-[#00B4E6]/40 rotate-180" />
        <div className="w-5 sm:w-8 h-5 sm:h-8 rounded-full bg-[#00B4E6]/50" />
      </div>

      {/* Decorative Right Lavender/Slate Semi-Circle Shape (Matching Screenshot 1) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-32 sm:h-44 rounded-l-full bg-[#94A3B8]/30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Main Title: Partner & IB management */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
