import React from "react";
import { Bell, Gift, Activity, Users, Check } from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

function EngagementCardIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-5 h-5 text-[#19C3B2] stroke-[2]" };

  switch (icon) {
    case "bell":
      return <Bell {...iconProps} />;
    case "gift":
      return <Gift {...iconProps} />;
    case "pulse":
      return <Activity {...iconProps} />;
    case "users":
      return <Users {...iconProps} />;
    default:
      return <Bell {...iconProps} />;
  }
}

export function TradersEngagementSection() {
  const { engagementAndDeposits } = tradersRoomContent;
  const { strategicShift, cards, directAnswer } = engagementAndDeposits;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>{engagementAndDeposits.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-6">
            {engagementAndDeposits.headingNormal}
            <span className="text-[#E02424]">
              {engagementAndDeposits.headingHighlight}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>{engagementAndDeposits.paragraph1}</p>
            <p>
              Modern brokerages need more than notifications and promotional
              campaigns.{" "}
              <strong className="font-semibold text-slate-800">
                Syntellicore
              </strong>{" "}
              combines intelligent communication workflows, behavioral
              monitoring, personalized interactions, market-driven engagement
              and predictive analytics to support long-term client activity.
            </p>
          </div>
        </div>

        {/* Strategic Shift Box */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-[#E02424] bg-white p-6 sm:p-7 shadow-xs mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E02424] mb-2">
            {strategicShift.kicker}
          </div>
          <p className="text-base sm:text-lg font-bold text-[#0A2540] leading-snug">
            &ldquo;{strategicShift.quoteBefore}
            <span className="text-[#E02424]">
              {strategicShift.quoteHighlight}
            </span>
            {strategicShift.quoteAfter}&rdquo;
          </p>
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 sm:p-8 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#00B4E6] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#19C3B2]/15 flex items-center justify-center mb-4">
                  <EngagementCardIcon icon={card.icon} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0A2540] mb-1.5">
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {card.subtitle}
                </p>

                {/* Checklist (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-4 border-t border-slate-100">
                  <div className="space-y-2.5">
                    {card.checklistLeft.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#19C3B2]/15 text-[#19C3B2] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    {card.checklistRight.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#19C3B2]/15 text-[#19C3B2] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Answer Box */}
        <div className="direct-answer-callout-light">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-2">
            <span className="w-3.5 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>DIRECT ANSWER</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">
            {directAnswer.question}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {directAnswer.answer}
          </p>
        </div>
      </div>
    </section>
  );
}
