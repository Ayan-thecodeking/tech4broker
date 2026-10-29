import React from "react";
import { User } from "lucide-react";
import { ibAffiliateContent } from "@/content/ib-affiliate";

export function IbOverviewSection() {
  const { overview } = ibAffiliateContent;

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Multi-Tier Hierarchy Diagram (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative Teal & Lavender Blobs (Matching Screenshot 1) */}
              <div
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-28 bg-[#19C3B2]/30 rounded-full blur-[1px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute right-12 -top-6 w-16 h-16 bg-[#00B4E6]/25 rounded-xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute left-16 -bottom-5 w-24 h-12 bg-[#818CF8]/30 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              {/* Elevated Card with Hierarchy Tree */}
              <div className="relative z-10 rounded-2xl border border-[#DCE9F6] bg-white p-6 sm:p-10 shadow-lg flex flex-col items-center">
                {/* Top Master IB Box */}
                <div className="w-24 sm:w-28 h-16 sm:h-18 rounded-2xl bg-[#153E65] shadow-md flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#19C3B2] flex items-center justify-center text-white">
                    <User className="w-5 h-5 fill-current" />
                  </div>
                </div>

                {/* Vertical Trunk Line */}
                <div className="w-0.5 h-6 bg-slate-300" aria-hidden="true" />

                {/* Horizontal Branching Bar */}
                <div className="w-56 sm:w-72 h-0.5 bg-slate-300 relative" aria-hidden="true">
                  <div className="absolute left-0 top-0 w-0.5 h-4 bg-slate-300" />
                  <div className="absolute left-1/3 top-0 w-0.5 h-4 bg-slate-300" />
                  <div className="absolute left-2/3 top-0 w-0.5 h-4 bg-slate-300" />
                  <div className="absolute right-0 top-0 w-0.5 h-4 bg-slate-300" />
                </div>

                {/* Bottom 4 Sub-IB Boxes */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 pt-4 w-full max-w-sm">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-14 sm:h-16 rounded-xl bg-[#153E65] shadow-sm flex items-center justify-center"
                    >
                      <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#00B4E6] flex items-center justify-center text-white">
                        <User className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Logo & Overview Text (5 cols) */}
          <div className="lg:col-span-5 max-w-md">
            {/* Logo Mark & Name */}
            <div className="flex items-center gap-3.5 mb-5">
              {/* Intertwined Ribbon Shape SVG */}
              <svg
                className="w-10 h-10 text-[#19C3B2]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="10"
                  width="14"
                  height="14"
                  rx="3"
                  transform="rotate(-20 4 10)"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <rect
                  x="14"
                  y="8"
                  width="14"
                  height="14"
                  rx="3"
                  transform="rotate(20 14 8)"
                  stroke="#00B4E6"
                  strokeWidth="2.5"
                />
              </svg>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {overview.brandSubtext}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A2540]">
                  Rebate<span className="text-[#19C3B2]">Core</span>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {overview.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
