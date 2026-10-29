import React from "react";
import { tradersRoomContent } from "@/content/traders-room";
import { TradersDashboardMockup } from "./TradersDashboardMockup";

export function TradersComplianceSection() {
  const { complianceDriven } = tradersRoomContent;

  return (
    <section className="relative w-full bg-[#031830] bg-tech-grid py-20 sm:py-28 overflow-hidden text-white">
      {/* Decorative Bottom-Left Organic Teal Shape (Matching Screenshot 5) */}
      <div
        className="absolute bottom-0 left-0 w-24 sm:w-36 h-24 sm:h-36 bg-[#00B4E6]/25 rounded-tr-[5rem] blur-[1px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Title & Subtitle Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-xl">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
              <span>{complianceDriven.kicker}</span>
            </div>

            {/* Headline with cyan highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
              {complianceDriven.headingNormal}
              <span className="text-[#00B4E6]">{complianceDriven.headingHighlight}</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed md:text-right">
            {complianceDriven.description}
          </p>
        </div>

        {/* Middle Two-Column Grid: 6 Capabilities vs Interactive Browser Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column: 6 Capabilities arranged in 2 sub-columns (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {/* Sub-column 1 */}
            <div className="space-y-8">
              {complianceDriven.capabilitiesLeft.map((item, idx) => (
                <div key={idx} className="border-l border-slate-700/80 pl-4 hover:border-[#00B4E6] transition-colors">
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub-column 2 */}
            <div className="space-y-8">
              {complianceDriven.capabilitiesRight.map((item, idx) => (
                <div key={idx} className="border-l border-slate-700/80 pl-4 hover:border-[#00B4E6] transition-colors">
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive / SVG macOS Dashboard Mockup (6 cols) */}
          <div className="lg:col-span-6">
            <TradersDashboardMockup />
          </div>
        </div>

        {/* Direct Answer Callout Box (Dark Theme) */}
        <div className="direct-answer-callout-dark">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-2">
            <span className="w-3.5 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>DIRECT ANSWER</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-2">
            {complianceDriven.directAnswer.question}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {complianceDriven.directAnswer.answer}
          </p>
        </div>
      </div>
    </section>
  );
}
