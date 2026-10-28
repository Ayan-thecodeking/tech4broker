"use client";

import React, { useState } from "react";
import { Target, Activity, Mic, ChevronDown } from "lucide-react";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceOverviewSection() {
  const { overview } = aiVoiceIntelligenceContent;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your demo request has been received.");
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Description, Pills & 3 Value Cards (7 cols) */}
          <div className="lg:col-span-7">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E02424] mb-4">
              <span className="w-4 h-[2px] bg-[#E02424]" aria-hidden="true" />
              <span>{overview.kicker}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-6">
              {overview.headingPart1}
              <span className="text-[#E02424]">{overview.headingHighlight}</span>
              {overview.headingPart2}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {overview.description}
            </p>

            {/* Interactive Pill Chips */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {overview.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-2xs hover:border-[#E02424] hover:text-[#E02424] transition-colors cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* 3 Value Cards in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {/* Acquisition */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs">
                <Target className="w-5 h-5 text-[#E02424] mb-3" />
                <div className="text-sm font-bold text-[#0A2540]">
                  {overview.valueCards[0].title}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {overview.valueCards[0].subtitle}
                </div>
              </div>

              {/* Conversion */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs">
                <Activity className="w-5 h-5 text-[#E02424] mb-3" />
                <div className="text-sm font-bold text-[#0A2540]">
                  {overview.valueCards[1].title}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {overview.valueCards[1].subtitle}
                </div>
              </div>

              {/* Retention */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#DCE9F6] bg-white shadow-xs">
                <Mic className="w-5 h-5 text-[#E02424] mb-3" />
                <div className="text-sm font-bold text-[#0A2540]">
                  {overview.valueCards[2].title}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {overview.valueCards[2].subtitle}
                </div>
              </div>
            </div>

            {/* Footer Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-2 border-t border-slate-100">
              <span className="font-bold text-[#0A2540]">{overview.meta.author}</span>
              <span>•</span>
              <span>{overview.meta.locations}</span>
              <span>•</span>
              <span>{overview.meta.tagline}</span>
            </div>
          </div>

          {/* Right Column: Live Form Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-1">
                {overview.form.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {overview.form.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone with Country selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E02424] focus:ring-1 focus:ring-[#E02424]"
                    />
                  </div>
                  <div className="flex rounded-xl border border-slate-300 overflow-hidden focus-within:border-[#E02424] focus-within:ring-1 focus-within:ring-[#E02424]">
                    <div className="flex items-center gap-1 px-2.5 bg-slate-50 border-r border-slate-200 text-[11px] font-semibold text-slate-700 shrink-0">
                      <span>IN (+91)</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* GDPR Checkbox */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    checked={formData.gdprConsent}
                    onChange={(e) =>
                      setFormData({ ...formData, gdprConsent: e.target.checked })
                    }
                    className="mt-0.5 rounded border-slate-300 text-[#E02424] focus:ring-[#E02424]"
                  />
                  <label
                    htmlFor="gdpr"
                    className="text-[11px] text-slate-500 leading-snug cursor-pointer"
                  >
                    I have read the{" "}
                    <span className="underline font-semibold text-slate-700">
                      GDPR Clause
                    </span>{" "}
                    and I acknowledge and agree that my personal data will be
                    processed in accordance with GDPR.*
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#E05A6F] hover:bg-[#D4475D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {overview.form.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
