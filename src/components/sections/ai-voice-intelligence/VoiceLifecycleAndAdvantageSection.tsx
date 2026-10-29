import React from "react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceLifecycleAndAdvantageSection() {
  const { lifecycleEmbedded, whyItMatters } = aiVoiceIntelligenceContent;

  return (
    <section className="w-full bg-white py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. 07 · Lifecycle Embedded */}
        <div className="mb-20 sm:mb-28">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
              <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
              <span>{lifecycleEmbedded.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
              {lifecycleEmbedded.headingNormal}
              <span className="text-[#E02424]">
                {lifecycleEmbedded.headingHighlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {lifecycleEmbedded.description}
            </p>
          </div>

          {/* 5 Lifecycle Stage Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {lifecycleEmbedded.stages.map((stage) => (
              <div
                key={stage.number}
                className="p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#E02424] transition-all flex flex-col justify-start"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-5 rounded-full bg-[#E02424] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {stage.number}
                  </span>
                  <h3 className="text-sm font-bold text-[#0A2540]">
                    {stage.title}
                  </h3>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-500 pl-1">
                  {stage.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#E02424]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 09 · Why It Matters */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
              <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
              <span>{whyItMatters.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
              {whyItMatters.headingNormal}
              <span className="text-[#E02424]">
                {whyItMatters.headingHighlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {whyItMatters.description}
            </p>
          </div>

          {/* 6 Competitive Advantage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItMatters.cards.map((card) => (
              <div
                key={card.step}
                className="p-6 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#E02424] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <span className="text-[11px] font-mono font-bold text-[#E02424] mb-4 block">
                  {card.step}
                </span>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0A2540] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
