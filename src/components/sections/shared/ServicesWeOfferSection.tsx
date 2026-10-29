"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ServicesWeOfferSection() {
  const leftServices = [
    "CRM and Client-Facing Touchpoints Customization",
    "24/7 Support & Maintenance",
    "Hosting",
  ];

  const rightServices = [
    "Requirement Analysis",
    "Trading Systems Infrastructure Resourcing",
    "Syntellicore CRM Integration Services",
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative Dark Navy Circle (Top-Right) - Crisp outside, blurred under frosted glass */}
          <div
            className="absolute -top-7 right-16 sm:right-28 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-[#1b3d63] pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Decorative Cyan Circle (Bottom-Left) - Crisp outside, blurred under frosted glass */}
          <div
            className="absolute -bottom-7 left-12 sm:left-24 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-[#00AEEF] pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Frosted Glass Outer Container with High-Fidelity Backdrop Blur */}
          <div className="relative z-10 p-4 sm:p-6 lg:p-7 rounded-[28px] sm:rounded-[34px] bg-white/45 backdrop-blur-2xl border border-white/70 shadow-[0_20px_60px_-15px_rgba(0,180,230,0.12),0_10px_30px_rgba(10,37,64,0.06)]">
            {/* Main Elevated Inner White Card */}
            <div className="bg-white rounded-2xl sm:rounded-[24px] border border-[#dce8f5] p-7 sm:p-10 lg:p-12 shadow-xs">
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1E38] tracking-tight mb-8">
                Services we offer
              </h3>

              {/* Checklist Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {/* Left Column */}
                <div className="space-y-4">
                  {leftServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#00B4E6] shrink-0"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <span className="text-[14px] sm:text-[15px] font-medium text-[#0F294A]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {rightServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#00B4E6] shrink-0"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <span className="text-[14px] sm:text-[15px] font-medium text-[#0F294A]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Teal Action Button */}
              <div>
                <Link
                  href={siteConfig.cta.bookDemoUrl}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#007567] hover:bg-[#006054] text-white font-semibold text-sm sm:text-[15px] transition-all shadow-md shadow-[#007567]/20 active:scale-95"
                >
                  Services Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
