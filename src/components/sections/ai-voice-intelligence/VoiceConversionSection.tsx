import React from "react";
import { Zap, GitBranch, Flag } from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

function ConversionIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-4 h-4 text-[#E02424]" };

  switch (icon) {
    case "sales":
      return <Zap {...iconProps} />;
    case "routing":
      return <GitBranch {...iconProps} />;
    case "triggers":
      return <Flag {...iconProps} />;
    default:
      return <Zap {...iconProps} />;
  }
}

export function VoiceConversionSection() {
  const { conversionAcceleration } = aiVoiceIntelligenceContent;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-3">
            <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
            <span>{conversionAcceleration.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-4">
            {conversionAcceleration.headingNormal}
            <span className="text-[#E02424]">
              {conversionAcceleration.headingHighlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {conversionAcceleration.description}
          </p>
        </div>

        {/* 3 Columns Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {conversionAcceleration.cards.map((card) => (
            <div
              key={card.step}
              className={`p-6 sm:p-8 rounded-2xl bg-white shadow-xs transition-all flex flex-col justify-between ${
                card.highlighted
                  ? "border-2 border-[#E02424]/60 shadow-sm"
                  : "border border-[#DCE9F6] hover:border-[#E02424]"
              }`}
            >
              {/* Top Row: Icon & Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <ConversionIcon icon={card.icon} />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  {card.step}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
