import React from "react";
import { mobileAppKycContent } from "@/content/mobile-app-kyc";

export function MobileHeroBanner() {
  const { hero } = mobileAppKycContent;

  return (
    <section className="relative w-full bg-[#031830] pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden text-center">
      {/* Decorative Left Dark Slate-Blue Semi-Circle (Matching Screenshot 1) */}
      <div
        className="absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-32 sm:h-48 rounded-r-full bg-[#1A385C] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Right Vibrant Teal Curved Shape (Matching Screenshot 1) */}
      <div
        className="absolute right-8 sm:right-20 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-16 sm:h-24 rounded-bl-full bg-[#00B4E6]/70 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Main Title: Mobile App with online-KYC */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
