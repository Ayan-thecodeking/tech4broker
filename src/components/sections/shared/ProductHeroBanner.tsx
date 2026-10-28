"use client";

import React from "react";

export interface ProductHeroBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function ProductHeroBanner({
  title,
  subtitle,
  badge,
  className = "",
}: ProductHeroBannerProps) {
  return (
    <section
      className={`relative w-full bg-[#031830] pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 md:pb-24 overflow-hidden text-center ${className}`}
    >
      {/* Decorative Left Deep Slate-Blue Semi-Circle (Flush against left edge) */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-14 sm:w-20 md:w-24 h-28 sm:h-36 md:h-44 rounded-r-full bg-[#1e4672] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Top-Right Vibrant Teal/Cyan Quarter-Circle (Flush against top-right corner) */}
      <div
        className="absolute top-0 right-0 w-20 sm:w-28 md:w-36 h-20 sm:h-28 md:h-36 rounded-bl-full bg-[#00BFA5] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container (No Breadcrumbs) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Optional Pill Badge */}
        {badge && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#022244]/80 border border-[#00B4E6]/40 text-[#00B4E6] text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
            {badge}
          </div>
        )}

        {/* Main Title (e.g. Operations & Back office) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtitle (e.g. Back Office System) */}
        {subtitle && (
          <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-white/90 tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
