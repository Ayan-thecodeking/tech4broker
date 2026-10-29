import React from "react";
import { Zap, ScanLine, CreditCard, RefreshCw, Target } from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

function DepositCardIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-5 h-5 text-[#00B4E6] stroke-[2]" };

  switch (icon) {
    case "zap":
      return <Zap {...iconProps} />;
    case "scan":
      return <ScanLine {...iconProps} />;
    case "card":
      return <CreditCard {...iconProps} />;
    case "refresh":
      return <RefreshCw {...iconProps} />;
    case "target":
      return <Target {...iconProps} />;
    default:
      return <Zap {...iconProps} />;
  }
}

export function TradersFirstTimeDepositsSection() {
  const { firstTimeDeposits } = tradersRoomContent;

  return (
    <section id="features" className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Title & Subtitle Split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
              <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
              <span>{firstTimeDeposits.kicker}</span>
            </div>

            {/* Headline with vivid red highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18]">
              {firstTimeDeposits.headingNormal}
              <span className="text-[#E02424]">{firstTimeDeposits.headingHighlight}</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed md:text-right">
            {firstTimeDeposits.description}
          </p>
        </div>

        {/* 5 Deposit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {firstTimeDeposits.cards.map((card) => (
            <div key={card.id} className="traders-deposit-card group">
              {/* Soft Teal Rounded Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#00B4E6]/10 text-[#00B4E6] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <DepositCardIcon icon={card.icon} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0A2540] mb-2.5 leading-snug group-hover:text-[#00B4E6] transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Answer Callout Box */}
        <div className="direct-answer-callout-light">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-2">
            <span className="w-3.5 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>DIRECT ANSWER</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">
            {firstTimeDeposits.directAnswer.question}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {firstTimeDeposits.directAnswer.answer}
          </p>
        </div>
      </div>
    </section>
  );
}
