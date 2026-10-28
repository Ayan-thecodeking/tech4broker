import React from "react";
import { ArrowRight } from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceCustomerEvolutionSection() {
  const { customerIntelligence } = aiVoiceIntelligenceContent;
  const { evolutionWidget } = customerIntelligence;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Customer Score Evolution Graph Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-16 sm:mb-20">
          {/* Card Top Chrome */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
            <span className="font-mono text-xs font-bold text-slate-700 tracking-wider">
              {evolutionWidget.title}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold text-[#E02424] border border-[#E02424]/40 bg-red-50/50">
              {evolutionWidget.badge}
            </span>
          </div>

          {/* SVG Smooth Curve Area Chart */}
          <div className="w-full h-44 sm:h-56 mb-8 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="evolutionRedGrad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#E02424" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#E02424" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Gradient Area */}
              <path
                d="M0 160 C 200 140, 350 130, 450 95 C 550 65, 680 45, 800 30 L 800 200 L 0 200 Z"
                fill="url(#evolutionRedGrad)"
              />

              {/* Curve Stroke Line */}
              <path
                d="M0 160 C 200 140, 350 130, 450 95 C 550 65, 680 45, 800 30"
                stroke="#E02424"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Bottom 3 Milestone Boxes */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            {evolutionWidget.milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50/60 border border-slate-100 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mb-0.5">
                  {m.score}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Section Header: 04 · Customer Intelligence */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{customerIntelligence.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
            {customerIntelligence.headingNormal}
            <span className="text-[#E02424]">
              {customerIntelligence.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {customerIntelligence.description}
          </p>
        </div>

        {/* 5 Full-Width Pill Rows */}
        <div className="space-y-3 mb-10">
          {customerIntelligence.signals.map((sig, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-[#E02424] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E02424] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {sig}
              </span>
            </div>
          ))}
        </div>

        {/* Outcome Bullets */}
        <div>
          <div className="text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-3">
            {customerIntelligence.outcomesTitle}
          </div>
          <div className="space-y-2">
            {customerIntelligence.outcomes.map((out, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#E02424] shrink-0" />
                <span>{out}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
