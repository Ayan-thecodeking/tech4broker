import React from "react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceLeadScoringSection() {
  const { leadIntelligence } = aiVoiceIntelligenceContent;
  const { engine } = leadIntelligence;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{leadIntelligence.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
            {leadIntelligence.headingNormal}
            <span className="text-[#E02424]">
              {leadIntelligence.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
            {leadIntelligence.description}
          </p>

          {/* Outcome Bullets */}
          <div>
            <div className="text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-2">
              {leadIntelligence.outcomesTitle}
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              {leadIntelligence.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E02424]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lead Score Engine Mockup Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          {/* Card Top Chrome */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#E02424] animate-pulse" />
              <span>{engine.title}</span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold text-[#E02424] border border-[#E02424]/40 bg-red-50/50">
              {engine.badge}
            </span>
          </div>

          {/* 4 Metric Horizontal Bars */}
          <div className="space-y-5 mb-8">
            {engine.metrics.map((m, idx) => {
              const pct = (m.score / 1000) * 100;

              return (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-2">
                    <span>{m.label}</span>
                    <span className="font-mono font-bold text-[#0A2540]">
                      {m.score}
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#E02424] transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Composite Score Row */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {engine.compositeLabel}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
                  {engine.compositeScore}
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  {engine.compositeMax}
                </span>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-lg border border-[#E02424]/40 bg-red-50/40 text-[#E02424] text-xs font-bold tracking-wider uppercase">
              {engine.intentBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
