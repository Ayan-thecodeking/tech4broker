import React from "react";
import {
  AlertTriangle,
  Users,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { tradersRoomContent } from "@/content/traders-room";

export function TradersRetentionSection() {
  const { retentionIntelligence } = tradersRoomContent;
  const { widget, cards, autoResponder, strategicShift, directAnswer } =
    retentionIntelligence;

  // 24 simulated bar heights for the 30-day churn probability chart
  const barHeights = [
    18, 22, 19, 25, 20, 28, 24, 30, 26, 35, 32, 40, 38, 48, 44, 55, 52, 64,
    60, 72, 68, 80, 85, 95,
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Kicker, Headline & 2-column description */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>{retentionIntelligence.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-6">
            {retentionIntelligence.headingNormal}
            <span className="text-[#E02424]">
              {retentionIntelligence.headingHighlight}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>{retentionIntelligence.paragraph1}</p>
            <p>
              <strong className="font-semibold text-slate-800">
                Syntellicore
              </strong>{" "}
              {retentionIntelligence.paragraph2.replace("Syntellicore ", "")}
            </p>
          </div>
        </div>

        {/* Middle: Left Retention Widget vs Right 2x2 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14 sm:mb-20">
          {/* Left: Retention Intelligence Panel Widget (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            {/* Widget Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00B4E6]" />
                <span className="text-sm font-bold text-[#0A2540]">
                  {widget.title}
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-400">
                {widget.windowBadge}
              </span>
            </div>

            {/* 4 Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {/* Churn Risk */}
              <div className="p-2.5 rounded-xl bg-red-50/60 border border-red-100">
                <AlertTriangle className="w-3.5 h-3.5 text-[#E02424] mb-1" />
                <div className="text-sm sm:text-base font-extrabold text-[#0A2540]">
                  {widget.metrics[0].value}
                </div>
                <div className="text-[9px] font-bold text-[#E02424] uppercase tracking-wider">
                  {widget.metrics[0].label}
                </div>
              </div>

              {/* High-Value Active */}
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100">
                <Users className="w-3.5 h-3.5 text-blue-600 mb-1" />
                <div className="text-sm sm:text-base font-extrabold text-[#0A2540]">
                  {widget.metrics[1].value}
                </div>
                <div className="text-[9px] font-bold text-blue-600 uppercase tracking-wider">
                  {widget.metrics[1].label}
                </div>
              </div>

              {/* Avg Time to Deposit */}
              <div className="p-2.5 rounded-xl bg-teal-50/60 border border-teal-100">
                <Clock className="w-3.5 h-3.5 text-teal-600 mb-1" />
                <div className="text-sm sm:text-base font-extrabold text-[#0A2540]">
                  {widget.metrics[2].value}
                </div>
                <div className="text-[9px] font-bold text-teal-600 uppercase tracking-wider">
                  {widget.metrics[2].label}
                </div>
              </div>

              {/* Deposit Probability */}
              <div className="p-2.5 rounded-xl bg-cyan-50/60 border border-cyan-100">
                <TrendingUp className="w-3.5 h-3.5 text-[#00B4E6] mb-1" />
                <div className="text-sm sm:text-base font-extrabold text-[#0A2540]">
                  {widget.metrics[3].value}
                </div>
                <div className="text-[9px] font-bold text-[#00B4E6] uppercase tracking-wider">
                  {widget.metrics[3].label}
                </div>
              </div>
            </div>

            {/* Churn Probability Bar Chart */}
            <div className="mt-auto pt-3 border-t border-slate-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                {widget.chartTitle}
              </div>

              <div className="flex items-end justify-between gap-1 h-24 mb-2 px-1">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-80"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i > 16 ? "#E02424" : i > 10 ? "#FB7185" : "#FDA4AF",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>{widget.chartLeftLabel}</span>
                <span>{widget.chartRightLabel}</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Feature Cards in 2x2 Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((c, idx) => (
              <div
                key={c.id}
                className="p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs hover:border-[#00B4E6] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#19C3B2]/15 text-[#19C3B2] flex items-center justify-center mb-3">
                    {idx === 0 && <AlertTriangle className="w-4 h-4" />}
                    {idx === 1 && <Activity className="w-4 h-4" />}
                    {idx === 2 && <BarChart3 className="w-4 h-4" />}
                    {idx === 3 && <Gauge className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A2540] mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto Responder Module (Dark Navy Container) */}
        <div className="rounded-3xl bg-[#031730] bg-tech-grid border border-slate-800 p-6 sm:p-10 text-white mb-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 border-b border-slate-800">
            {/* Left Column: Heading & Description (6 cols) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
                <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
                <span>{autoResponder.kicker}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                {autoResponder.headingNormal}
                <span className="text-[#00B4E6]">
                  {autoResponder.headingHighlight}
                </span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                {autoResponder.description}
              </p>
            </div>

            {/* Right Column: Triggers vs Outcomes (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Triggers */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
                  TRIGGERS
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {autoResponder.triggers.map((t, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B4E6]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#E02424] mb-3">
                  OUTCOMES
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {autoResponder.outcomes.map((o, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E02424]" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom 4 Pillar Blocks inside Auto Responder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {autoResponder.pillars.map((p, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Shift Box */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-[#E02424] bg-white p-6 sm:p-7 shadow-xs mb-8">
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
