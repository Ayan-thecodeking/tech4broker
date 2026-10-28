import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersValuePropSection() {
  const { valueProp } = tradersRoomContent;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description, Checklist & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
              <span>{valueProp.kicker}</span>
            </div>

            {/* Headline with vivid red highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-6">
              {valueProp.headingNormal1}
              <span className="text-[#E02424]">{valueProp.headingHighlight}</span>
              {valueProp.headingNormal2}
            </h2>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {valueProp.description}
            </p>

            {/* Checklist in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
              <div className="space-y-3.5">
                {valueProp.checklistLeft.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#19C3B2]/15 text-[#19C3B2] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm font-semibold text-[#0A2540]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3.5">
                {valueProp.checklistRight.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#19C3B2]/15 text-[#19C3B2] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm font-semibold text-[#0A2540]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row: Red Demo Button + See all Features Link */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={siteConfig.cta.bookDemoUrl}
                className="btn-request-demo-red inline-flex items-center gap-2 group"
              >
                <span>{valueProp.ctaButton}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A2540] hover:text-[#00B4E6] transition-colors group"
              >
                <span>{valueProp.ctaLink}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Stat Cards (5 cols) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {valueProp.stats.map((item, idx) => (
                <div key={idx} className="traders-stat-card">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-1">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-bold text-[#00B4E6] uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
