import React from "react";
import { ArrowRight } from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersLifecycleSection() {
  const { theProblem } = tradersRoomContent;

  return (
    <section className="w-full bg-[#F2F7FD] py-16 sm:py-24 border-b border-[#E1EEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading (5 cols) */}
          <div className="lg:col-span-5">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
              <span>{theProblem.kicker}</span>
            </div>

            {/* Headline with vivid red highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18]">
              {theProblem.headingNormal}
              <span className="text-[#E02424]">{theProblem.headingHighlight}</span>
            </h2>
          </div>

          {/* Right Column: Paragraphs & Lifecycle Step Pills (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Emphasized Paragraph */}
            <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed mb-4">
              Modern brokerages need <strong className="font-bold text-[#0A2540]">faster onboarding</strong>,{" "}
              <strong className="font-bold text-[#0A2540]">reduced friction</strong>,{" "}
              <strong className="font-bold text-[#0A2540]">higher FTD conversion</strong>,{" "}
              <strong className="font-bold text-[#0A2540]">stronger retention</strong>,{" "}
              <strong className="font-bold text-[#0A2540]">compliance automation</strong> and{" "}
              <strong className="font-bold text-[#0A2540]">operational scalability</strong> - all without sacrificing regulatory control.
            </p>

            <p className="text-sm font-medium text-slate-600 mb-6">
              {theProblem.paragraph2}
            </p>

            {/* Lifecycle Flow Pills Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {theProblem.lifecycleSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="traders-lifecycle-pill">
                    {step}
                  </div>
                  {idx < theProblem.lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#00B4E6] shrink-0" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
