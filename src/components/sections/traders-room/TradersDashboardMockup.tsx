import React from "react";
import { CheckCircle2, ShieldCheck, UserCheck, Lock } from "lucide-react";

export function TradersDashboardMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-700/80 bg-[#07172B] shadow-2xl overflow-hidden font-sans text-xs">
      {/* 1. Browser Window Top Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#040E1B] border-b border-slate-800">
        {/* macOS Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D223A] border border-slate-700/60 text-slate-300 text-[11px] font-mono">
          <Lock className="w-2.5 h-2.5 text-[#00B4E6]" />
          <span>portal.yourbroker.com / dashboard</span>
        </div>

        {/* Live Badge */}
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* 2. Portal Header Navigation Bar */}
      <div className="px-5 py-3 border-b border-slate-800/80 bg-[#091D34]/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-slate-300 text-[11px] font-medium">
          <span className="text-white font-bold border-b-2 border-[#00B4E6] pb-1">
            Overview
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Accounts
          </span>
          <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[#00B4E6]">
            <span>KYC Compliance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4E6]" />
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Wallets & Deposits
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#00B4E6]/15 text-[#00B4E6] font-semibold text-[10px] border border-[#00B4E6]/30">
            Tier 2 Regulated
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-semibold text-[10px]">
            ID: #FX-88410
          </span>
        </div>
      </div>

      {/* 3. Dashboard Body: Grid with KPIs, Donut Chart, and Verification Queue */}
      <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-[#07172B] to-[#040E1B]">
        {/* Top 3 KPI Chips */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[#0B233F]/90 border border-slate-700/60">
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">
              Instant Deposit
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">
              $148,250.00
            </div>
            <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>+38.4% vs last mo</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0B233F]/90 border border-slate-700/60">
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">
              STP Verification
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#00B4E6]">
              2m 14s
            </div>
            <div className="text-[10px] text-slate-300 mt-1">
              Avg. completion time
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0B233F]/90 border border-slate-700/60">
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">
              AML Screening
            </div>
            <div className="text-sm sm:text-base font-extrabold text-emerald-400">
              99.8% Passed
            </div>
            <div className="text-[10px] text-slate-300 mt-1">
              Zero regulatory flags
            </div>
          </div>
        </div>

        {/* Bottom Split: Donut Chart & Live Verification Queue Table */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
          {/* Donut Chart (5 cols) */}
          <div className="sm:col-span-5 p-3.5 rounded-xl bg-[#0A1E35] border border-slate-700/60 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-white">
                KYC Verification Ratio
              </span>
              <span className="text-[10px] text-[#00B4E6]">Real-Time</span>
            </div>

            <div className="flex items-center justify-center py-2">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* SVG Donut */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <path
                    className="text-slate-800"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segment 1: Approved (Cyan #00B4E6) 75% */}
                  <path
                    className="text-[#00B4E6]"
                    strokeDasharray="75, 100"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Segment 2: In Review (Teal #19C3B2) 18% */}
                  <path
                    className="text-[#19C3B2]"
                    strokeDasharray="18, 100"
                    strokeDashoffset="-75"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                <div className="absolute flex flex-col items-center">
                  <span className="text-sm font-extrabold text-white">94.6%</span>
                  <span className="text-[9px] text-slate-400">Approved</span>
                </div>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00B4E6]" />
                <span>Fast Track (84%)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#19C3B2]" />
                <span>Tier 2 (12%)</span>
              </div>
            </div>
          </div>

          {/* Verification Queue Mini Table (7 cols) */}
          <div className="sm:col-span-7 p-3.5 rounded-xl bg-[#0A1E35] border border-slate-700/60 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
              <span className="text-[11px] font-bold text-white">
                Live Onboarding Queue
              </span>
              <span className="text-[10px] text-slate-400">4 Active Flows</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#07182C]">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#00B4E6]" />
                  <div>
                    <div className="text-[11px] font-bold text-white">
                      Alexander K.
                    </div>
                    <div className="text-[9px] text-slate-400">
                      CySEC • Biometric Pass
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Instant Approved
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#07182C]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#19C3B2]" />
                  <div>
                    <div className="text-[11px] font-bold text-white">
                      Elena R.
                    </div>
                    <div className="text-[9px] text-slate-400">
                      FCA • Sanctions Clear
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#00B4E6]/20 text-[#00B4E6] border border-[#00B4E6]/30">
                  Tier 1 Verified
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#07182C]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <div>
                    <div className="text-[11px] font-bold text-white">
                      David M.
                    </div>
                    <div className="text-[9px] text-slate-400">
                      ASIC • Auto Approval
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Funded $5,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
