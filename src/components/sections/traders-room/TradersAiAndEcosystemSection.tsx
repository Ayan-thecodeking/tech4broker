import React from "react";
import {
  Sparkles,
  Users,
  Wallet,
  ShieldCheck,
  CreditCard,
  LineChart,
  RefreshCw,
  MessageSquare,
  Cpu,
} from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

function EcosystemIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-5 h-5 text-[#19C3B2]" };

  switch (icon) {
    case "crm":
      return <Users {...iconProps} />;
    case "wallet":
      return <Wallet {...iconProps} />;
    case "kyc":
      return <ShieldCheck {...iconProps} />;
    case "psp":
      return <CreditCard {...iconProps} />;
    case "platforms":
      return <LineChart {...iconProps} />;
    case "rebate":
      return <RefreshCw {...iconProps} />;
    case "comms":
      return <MessageSquare {...iconProps} />;
    case "ai":
      return <Cpu {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export function TradersAiAndEcosystemSection() {
  const { aiInfrastructure, unifiedEcosystem } = tradersRoomContent;

  return (
    <>
      {/* 1. Upper: AI-Powered Infrastructure (Dark Navy Section) */}
      <section className="w-full bg-[#031830] bg-tech-grid py-20 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Description (6 cols) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
                <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
                <span>{aiInfrastructure.kicker}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
                {aiInfrastructure.headingNormal}
                <span className="text-[#00B4E6]">
                  {aiInfrastructure.headingHighlight}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                {aiInfrastructure.description}
              </p>
            </div>

            {/* Right Column: 6 AI Chips (2x3 Grid) (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aiInfrastructure.chips.map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#091D34]/90 border border-[#00B4E6]/25 shadow-sm hover:border-[#00B4E6] hover:bg-[#0D2847] transition-all cursor-default"
                >
                  <Sparkles className="w-4 h-4 text-[#00B4E6] shrink-0" />
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-100">
                    {chip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lower: One Unified Ecosystem (Light Section) */}
      <section className="w-full bg-white py-20 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
              <span>{unifiedEcosystem.kicker}</span>
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
              {unifiedEcosystem.headingNormal}
              <span className="text-[#E02424]">
                {unifiedEcosystem.headingHighlight}
              </span>
            </h2>
          </div>

          {/* Unified Ecosystem Container Box */}
          <div className="rounded-3xl border border-[#DCE9F6] bg-[#F7FAFD] p-6 sm:p-10 shadow-sm overflow-hidden">
            {/* 8 Ecosystem Components in 2 Rows of 4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {unifiedEcosystem.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE9F6] shadow-xs flex flex-col items-center text-center justify-center hover:border-[#00B4E6] hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#19C3B2]/15 flex items-center justify-center mb-3">
                    <EcosystemIcon icon={comp.icon} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                    {comp.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Dark Platform Core Banner */}
            <div className="rounded-2xl bg-[#031730] p-4 sm:p-6 text-center text-white">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#00B4E6] mb-1">
                {unifiedEcosystem.platformCoreBadge}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200">
                {unifiedEcosystem.platformCoreSubtext}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
