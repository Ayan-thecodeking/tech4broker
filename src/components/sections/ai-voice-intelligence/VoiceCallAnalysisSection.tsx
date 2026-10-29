import React from "react";
import {
  Mic,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Phone,
  RefreshCw,
  Headphones,
  Shield,
  FlaskConical,
} from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

function TeamIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-4 h-4 text-[#E02424]" };

  switch (icon) {
    case "phone":
      return <Phone {...iconProps} />;
    case "retention":
      return <RefreshCw {...iconProps} />;
    case "support":
      return <Headphones {...iconProps} />;
    case "compliance":
      return <Shield {...iconProps} />;
    case "market":
      return <FlaskConical {...iconProps} />;
    default:
      return <Phone {...iconProps} />;
  }
}

export function VoiceCallAnalysisSection() {
  const { voiceIntelligence } = aiVoiceIntelligenceContent;
  const { widget, builtFor } = voiceIntelligence;

  // 46 simulated waveform bar heights
  const waveformBars = [
    14, 22, 18, 30, 24, 38, 20, 28, 16, 32, 26, 42, 34, 20, 26, 36, 22, 30,
    18, 34, 28, 20, 32, 24, 40, 26, 18, 30, 22, 34, 26, 38, 24, 20,
    // Red active / highlighted peak audio segment
    45, 52, 48, 62, 54, 58, 65, 50, 42,
    // Trailing gray bars
    28, 34, 22, 26, 30, 24,
  ];

  return (
    <section className="w-full bg-[#FAFAFC] py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Upper: 03 - AI Voice Intelligence Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{voiceIntelligence.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
            {voiceIntelligence.headingNormal}
            <span className="text-[#E02424]">
              {voiceIntelligence.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {voiceIntelligence.description}
          </p>
        </div>

        {/* Live Call Analysis Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-20 sm:mb-28">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E02424] text-white flex items-center justify-center shrink-0">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {widget.statusLabel}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0A2540]">
                  {widget.agentInfo}
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {widget.filters.map((f, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-[10px] font-bold text-[#E02424] border border-[#E02424]/30 bg-red-50/40 uppercase tracking-wider"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Audio Waveform Visualization */}
          <div className="py-6 px-2 flex items-end justify-between gap-1 h-28 sm:h-32 mb-8 bg-slate-50/60 rounded-2xl border border-slate-100">
            {waveformBars.map((height, idx) => {
              const isRedSegment = idx >= 34 && idx <= 42;

              return (
                <div
                  key={idx}
                  className="flex-1 rounded-full transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isRedSegment ? "#E02424" : "#CBD5E1",
                  }}
                />
              );
            })}
          </div>

          {/* 3 Insight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Positive */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
              <TrendingUp className="w-4 h-4 text-[#E02424] mb-2" />
              <div className="text-xs font-bold text-[#0A2540] mb-1">
                {widget.insights[0].title}
              </div>
              <div className="text-[11px] text-slate-500 leading-relaxed">
                {widget.insights[0].description}
              </div>
            </div>

            {/* Negative */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
              <AlertTriangle className="w-4 h-4 text-[#E02424] mb-2" />
              <div className="text-xs font-bold text-[#0A2540] mb-1">
                {widget.insights[1].title}
              </div>
              <div className="text-[11px] text-slate-500 leading-relaxed">
                {widget.insights[1].description}
              </div>
            </div>

            {/* High Intent */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
              <Sparkles className="w-4 h-4 text-[#E02424] mb-2" />
              <div className="text-xs font-bold text-[#0A2540] mb-1">
                {widget.insights[2].title}
              </div>
              <div className="text-[11px] text-slate-500 leading-relaxed">
                {widget.insights[2].description}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Lower: Built For Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
                <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
                <span>{builtFor.kicker}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
                {builtFor.headingNormal}
                <span className="text-[#E02424]">{builtFor.headingHighlight}</span>
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              {builtFor.description}
            </p>
          </div>

          {/* 5 Team Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {builtFor.teams.map((t, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-white shadow-xs flex flex-col justify-between transition-all ${
                  t.highlighted
                    ? "border-2 border-[#E02424]/60 shadow-sm"
                    : "border border-slate-200/90 hover:border-[#E02424]"
                }`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <TeamIcon icon={t.icon} />
                  </div>

                  <h3 className="text-sm font-bold text-[#0A2540] mb-2 leading-snug">
                    {t.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {t.description}
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
