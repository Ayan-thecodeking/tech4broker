import React from "react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceAggregatedSourcesSection() {
  const { aggregatedIntelligence } = aiVoiceIntelligenceContent;

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{aggregatedIntelligence.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
            {aggregatedIntelligence.headingNormal}
            <span className="text-[#E02424]">
              {aggregatedIntelligence.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {aggregatedIntelligence.description}
          </p>
        </div>

        {/* 6 Source Cards in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {aggregatedIntelligence.sources.map((src) => (
            <div
              key={src.id}
              className="p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#E02424] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-6">
                {src.label}
              </span>

              <h3 className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                {src.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
