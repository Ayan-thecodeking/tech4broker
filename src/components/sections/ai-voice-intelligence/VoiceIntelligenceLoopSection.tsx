import React from "react";
import { CircleDot, Activity, MessageSquare, Zap } from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

function LoopStepIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-4 h-4 text-[#E02424]" };

  switch (icon) {
    case "understand":
      return <CircleDot {...iconProps} />;
    case "learn":
      return <Activity {...iconProps} />;
    case "interpret":
      return <MessageSquare {...iconProps} />;
    case "act":
      return <Zap {...iconProps} />;
    default:
      return <CircleDot {...iconProps} />;
  }
}

export function VoiceIntelligenceLoopSection() {
  const { intelligenceLoop } = aiVoiceIntelligenceContent;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{intelligenceLoop.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-5">
            {intelligenceLoop.headingNormal}
            <span className="text-[#E02424]">
              {intelligenceLoop.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {intelligenceLoop.description}
          </p>
        </div>

        {/* 4 Sequential Step Cards (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceLoop.steps.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#E02424] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              {/* Top Row: Icon & Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <LoopStepIcon icon={step.icon} />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  {step.step}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
