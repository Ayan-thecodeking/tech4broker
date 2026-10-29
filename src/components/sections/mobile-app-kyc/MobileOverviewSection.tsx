import React from "react";
import { ChevronDown } from "lucide-react";
import { mobileAppKycContent } from "@/content/mobile-app-kyc";

export function MobileOverviewSection() {
  const { overview } = mobileAppKycContent;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Phone Mockup Illustration (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm flex justify-center">
              {/* Decorative Teal Blob (Top-Left) */}
              <div
                className="absolute left-6 -top-4 w-20 h-28 bg-[#19C3B2]/30 rounded-tl-full rounded-bl-full pointer-events-none"
                aria-hidden="true"
              />

              {/* Decorative Cyan Circular Blob (Bottom-Right) */}
              <div
                className="absolute right-4 -bottom-6 w-24 h-24 bg-[#00B4E6]/30 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              {/* Stylized Mobile Phone Device Frame */}
              <div className="relative z-10 w-56 sm:w-64 rounded-[2.5rem] border-4 border-slate-200/90 bg-white p-3.5 shadow-2xl">
                {/* Speaker Notch */}
                <div className="w-14 h-3 bg-slate-100 rounded-full mx-auto mb-3" />

                {/* Inside Screen Content */}
                <div className="space-y-3 font-sans">
                  {/* Balance Floating Chip */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#0A2540]">
                      <span className="w-4 h-4 rounded-full bg-[#00B4E6]/20 text-[#00B4E6] flex items-center justify-center text-[10px]">
                        €
                      </span>
                      <span>EUR</span>
                      <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-extrabold text-[#0A2540]">
                        48,525.67 EUR
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Bonus: 168.00 EUR
                      </div>
                    </div>
                  </div>

                  {/* Top Nav Pill */}
                  <div className="h-6 rounded-lg bg-[#153E65] flex items-center px-3 justify-between text-[10px] text-white font-semibold">
                    <span>Accounts</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  {/* List Item 1 */}
                  <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00B4E6]" />
                      <div className="w-16 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-8 h-2 bg-slate-300 rounded-full" />
                  </div>

                  {/* List Item 2 */}
                  <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#19C3B2]" />
                      <div className="w-20 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-10 h-2 bg-slate-300 rounded-full" />
                  </div>

                  {/* List Item 3 */}
                  <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00B4E6]" />
                      <div className="w-14 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-7 h-2 bg-slate-300 rounded-full" />
                  </div>

                  {/* Second Category Block */}
                  <div className="h-5 rounded-lg bg-[#153E65] flex items-center px-3 text-[9px] text-white font-medium">
                    <span>Recent Transactions</span>
                  </div>

                  {/* List Item 4 */}
                  <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <div className="w-18 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-8 h-2 bg-emerald-200 rounded-full" />
                  </div>

                  {/* List Item 5 */}
                  <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      <div className="w-16 h-2 bg-slate-200 rounded-full" />
                    </div>
                    <div className="w-6 h-2 bg-slate-300 rounded-full" />
                  </div>

                  {/* Bottom Navigation Buttons */}
                  <div className="flex items-center justify-around pt-2">
                    <div className="w-3 h-3 rounded-full bg-[#00B4E6]" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy (6 cols) */}
          <div className="lg:col-span-6 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-snug mb-6">
              {overview.heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {overview.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
