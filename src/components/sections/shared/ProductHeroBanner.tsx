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
      className={`relative w-full bg-[#031730] pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 md:pb-32 overflow-hidden text-center ${className}`}
    >
      {/* Decorative Left Deep Slate-Blue Semi-Circle (Exact to Reference Screenshot) */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-28 lg:w-32 h-48 sm:h-64 md:h-72 lg:h-80 rounded-r-full bg-[#1A4168] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Decorative Top-Right Vibrant Emerald-Teal Corner Shape (Exact to Reference Screenshot) */}
      <div
        className="absolute top-0 right-0 w-24 sm:w-36 md:w-44 lg:w-52 h-20 sm:h-28 md:h-36 lg:h-40 rounded-bl-full bg-[#00BFA5] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Content Container (No Breadcrumbs) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Optional Pill Badge */}
        {badge && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#022244]/80 border border-[#00B4E6]/40 text-[#00B4E6] text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
            {badge}
          </div>
        )}

        {/* Main Title (e.g. Mobile App with online-KYC, Partner & IB management, Operations & Back office) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base font-semibold text-white/90 tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
