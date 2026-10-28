"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface FAQItem {
  q: string;
  a: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    q: "What exactly does Tech4Broker provide for brokerages and prop firms?",
    a: "Tech4Broker delivers an all-in-one turnkey technology ecosystem. We provide company setup assistance, MT4/MT5 connectivity, dedicated broker CRM, liquidity bridging, fiat/crypto payment gateway routing, and funded-trader management systems.",
  },
  {
    q: "How quickly can we launch our trading platform?",
    a: "With our pre-built integrations and modular architecture, standard brokerage and prop-firm setups typically go live within 2 to 4 weeks — compared to 3–6 months when managing multiple separate vendors independently.",
  },
  {
    q: "Can we connect our existing CRM, liquidity providers, or payment rails?",
    a: "Yes, our platform is fully modular. You can use our complete turnkey suite or integrate specific components (such as our liquidity bridge, CRM, or copy-trading engine) into your existing MT4/MT5 servers and existing workflows via FIX API and REST endpoints.",
  },
  {
    q: "Do you offer funded trader and prop trading infrastructure?",
    a: "Yes. We provide complete prop-firm technology including multi-phase evaluation rules, automated account provisioning, real-time risk parameters, drawdown monitoring, and automated payout calculation.",
  },
  {
    q: "What kind of ongoing technical support and maintenance do you provide?",
    a: "We offer 24/7 proactive infrastructure monitoring, bridge latency optimization, security updates, and dedicated technical account managers to ensure high availability and seamless daily trading operations.",
  },
  {
    q: "How do we get started with Tech4Broker?",
    a: "You can reach out via the \"Build Your Brokerage\" button or schedule a consultation. Our team will review your business model, target jurisdictions, and technical needs to present a tailored deployment plan.",
  },
];

export interface FaqSectionProps {
  faqs?: FAQItem[];
  className?: string;
}

export function FaqSection({ faqs = defaultFaqs, className }: FaqSectionProps) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={cn("py-[100px] lg:py-[140px] bg-[#f8fafc] text-slate-900 relative w-full", className)}
    >
      <div className="w-[min(940px,92%)] mx-auto">
        {/* Section Heading with Brand Gradient & Typography */}
        <div className="text-center max-w-[700px] mx-auto mb-14 lg:mb-16">
          <h2 className="text-[clamp(32px,4.5vw,46px)] leading-[1.15] tracking-tight font-bold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#1e66ec] via-[#3b82f6] to-[#00b4db] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[1.6] text-slate-500 font-normal">
            Everything you need to know about our brokerage infrastructure, integrations, and launch process.
          </p>
        </div>

        {/* Normal Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="bg-white border border-slate-200/90 rounded-[18px] p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer"
                onClick={() => toggle(index)}
              >
                {/* Accordion Header (Question + Toggle Icon) */}
                <div className="flex items-center justify-between gap-4 select-none">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-slate-900 leading-snug">
                    {{ ...faq }.q}
                  </h3>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 bg-blue-50 text-blue-600"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Accordion Body (Answer) */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-[14.5px] sm:text-[15px] leading-[1.65] text-slate-600 font-normal animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
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
