"use client";

import React, { useState } from "react";
import {
  Users,
  Target,
  Layout,
  Code2,
  Share2,
  TrendingUp,
  Rocket,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { ibAffiliateContent } from "@/content/ib-affiliate";

function Ib360Icon({ icon }: { icon: string }) {
  const iconProps = { className: "w-5 h-5 text-[#00B4E6] shrink-0" };

  switch (icon) {
    case "builder":
      return <Users {...iconProps} />;
    case "cpa":
      return <Target {...iconProps} />;
    case "portal":
      return <Layout {...iconProps} />;
    case "api":
      return <Code2 {...iconProps} />;
    case "branding":
      return <Share2 {...iconProps} />;
    case "growth":
      return <TrendingUp {...iconProps} />;
    case "apps":
      return <Rocket {...iconProps} />;
    case "help":
      return <HelpCircle {...iconProps} />;
    default:
      return <Users {...iconProps} />;
  }
}

export function Ib360FeaturesSection() {
  const { features360 } = ibAffiliateContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#F2F7FD] py-20 sm:py-28 border-b border-[#E1EEF8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0A2540] tracking-tight">
            {features360.title}
          </h2>
        </div>

        {/* 8 Accordion Rows */}
        <div className="space-y-3.5">
          {features360.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#DCE9F6] bg-white shadow-2xs hover:border-[#00B4E6] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <Ib360Icon icon={item.icon} />
                    <span className="text-sm sm:text-base font-bold text-[#0A2540]">
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-[#00B4E6] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 pl-15">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
