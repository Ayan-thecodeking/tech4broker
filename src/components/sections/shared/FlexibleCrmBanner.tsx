"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FlexibleCrmBanner() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 mb-16 sm:mb-20">
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#001733] border border-[#0d2a4d] shadow-2xl p-6 sm:p-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden">
        {/* Left: Candlestick Graphic Box with Glassmorphism, Offset Blur Layer & Geometric Blobs */}
        <div className="relative shrink-0 flex items-center justify-center w-36 h-28">
          {/* Decorative Cyan Circle (Top-Right of Icon) */}
          <div
            className="absolute top-1 right-1 w-14 h-14 rounded-full bg-[#00B4E6] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Decorative Teal Circle (Bottom-Left of Icon) */}
          <div
            className="absolute bottom-1 left-1 w-14 h-14 rounded-full bg-[#00BFA5] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Frosted Glassmorphism Offset Layer with Backdrop Blur */}
          <div
            className="absolute bottom-0 right-1 w-28 h-20 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Solid White Candlestick Card */}
          <div className="relative z-20 w-28 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-between px-4 py-2 border border-white/90">
            <div className="flex items-center justify-between w-full h-full px-1.5">
              {/* Candlestick 1 (Cyan) */}
              <div className="relative flex flex-col items-center">
                <div className="w-[2px] h-11 bg-[#00B4E6]" />
                <div className="absolute top-2.5 w-3 h-5 bg-[#00B4E6] rounded-xs" />
              </div>

              {/* Candlestick 2 (Dark Navy - Taller in Center) */}
              <div className="relative flex flex-col items-center">
                <div className="w-[2px] h-13 bg-[#001733]" />
                <div className="absolute top-1.5 w-3 h-8 bg-[#001733] rounded-xs" />
              </div>

              {/* Candlestick 3 (Cyan) */}
              <div className="relative flex flex-col items-center">
                <div className="w-[2px] h-10 bg-[#00B4E6]" />
                <div className="absolute top-2.5 w-3 h-4 bg-[#00B4E6] rounded-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Title & Tagline */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00B4E6] tracking-tight leading-tight">
            Flexible & Customisable CRM
          </h3>
          <p className="text-sm sm:text-[15px] font-semibold text-white mt-2 tracking-wide flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <span>Automate</span>
            <span className="text-slate-400 font-normal">|</span>
            <span>Coordinate</span>
            <span className="text-slate-400 font-normal">|</span>
            <span>Increase Sales</span>
          </p>
        </div>

        {/* Right: Deep Teal Request a Demo Button */}
        <div className="shrink-0">
          <Link
            href={siteConfig.cta.bookDemoUrl}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#007567] hover:bg-[#006054] text-white font-semibold text-sm sm:text-[15px] transition-all shadow-md shadow-black/30 active:scale-95"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
