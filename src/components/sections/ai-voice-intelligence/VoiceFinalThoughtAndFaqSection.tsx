"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceFinalThoughtAndFaqSection() {
  const { finalThought, faq } = aiVoiceIntelligenceContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Final Thought Banner */}
        <div className="text-center mb-24 sm:mb-32">
          {/* Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-4">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{finalThought.kicker}</span>
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-8">
            {finalThought.headingPart1}
            <span className="text-[#E02424]">{finalThought.headingHighlight1}</span>
            <br />
            <span className="text-[#E02424]">{finalThought.headingHighlight2}</span>
          </h2>

          {/* 3 Step Progression */}
          <div className="space-y-1.5 text-sm sm:text-base text-slate-500 mb-8 font-medium">
            <div>{finalThought.progression[0]}</div>
            <div>{finalThought.progression[1]}</div>
            <div className="text-[#0A2540] font-extrabold text-base sm:text-lg">
              {finalThought.progression[2]}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            {finalThought.tagline}
          </p>
        </div>

        {/* 2. FAQ Accordion */}
        <div>
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
              <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
              <span>{faq.kicker}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              {faq.headingNormal}
              <span className="text-[#E02424]">{faq.headingHighlight}</span>
            </h3>
          </div>

          {/* Accordion Container */}
          <div className="rounded-2xl border border-[#DCE9F6] bg-white shadow-xs divide-y divide-[#DCE9F6] overflow-hidden">
            {faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#E02424]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 pt-1">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
