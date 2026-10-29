"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersFaqSection() {
  const { faqSection } = tradersRoomContent;
  // Initialize with index 0 open to match Screenshot 5 exactly
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F2F7FD] py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>{faqSection.kicker}</span>
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18]">
            {faqSection.headingNormal}
            <span className="text-[#E02424]">
              {faqSection.headingHighlight}
            </span>
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="rounded-2xl border border-[#DCE9F6] bg-white shadow-xs divide-y divide-[#DCE9F6] overflow-hidden">
          {faqSection.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A2540]">
                    {item.question}
                  </span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#00B4E6] shrink-0">
                    {isOpen ? (
                      <X className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1">
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
    </section>
  );
}
