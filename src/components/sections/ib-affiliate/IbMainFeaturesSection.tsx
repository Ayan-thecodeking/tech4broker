import React from "react";
import Link from "next/link";
import { Share2, SlidersHorizontal } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ibAffiliateContent } from "@/content/ib-affiliate";

function MainFeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "network":
      return <Share2 className="w-8 h-8 text-[#00B4E6] stroke-[2]" />;
    case "ad":
      return (
        <div className="w-8 h-8 rounded-lg border-2 border-[#00B4E6] text-[#00B4E6] flex items-center justify-center font-bold text-xs">
          Ad
        </div>
      );
    case "list":
      return <SlidersHorizontal className="w-8 h-8 text-[#00B4E6] stroke-[2]" />;
    default:
      return <Share2 className="w-8 h-8 text-[#00B4E6] stroke-[2]" />;
  }
}

export function IbMainFeaturesSection() {
  const { mainFeatures } = ibAffiliateContent;

  return (
    <section className="w-full bg-[#F2F7FD] py-20 sm:py-28 border-b border-[#E1EEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2540] tracking-tight">
            {mainFeatures.title}
          </h2>
        </div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {mainFeatures.cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-[#DCE9F6] bg-white p-8 sm:p-10 shadow-xs hover:border-[#00B4E6] hover:-translate-y-1 transition-all flex flex-col justify-start"
            >
              {/* Top Cyan Icon */}
              <div className="mb-6 flex items-center">
                <MainFeatureIcon icon={card.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-4 tracking-tight">
                {card.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-[1.8] font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Red CTA Button */}
        <div className="flex justify-center">
          <Link
            href={siteConfig.cta.bookDemoUrl}
            className="btn-request-demo-red"
          >
            {mainFeatures.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
