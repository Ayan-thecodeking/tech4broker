import React from "react";
import Link from "next/link";
import {
  LogIn,
  Store,
  Fingerprint,
  ArrowLeftRight,
  Wallet,
  Glasses,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { mobileAppKycContent } from "@/content/mobile-app-kyc";

function MobileCardIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-8 h-8 text-[#00B4E6] stroke-[2]" };

  switch (icon) {
    case "onboarding":
      return <LogIn {...iconProps} />;
    case "store":
      return <Store {...iconProps} />;
    case "biometric":
      return <Fingerprint {...iconProps} />;
    case "payments":
      return <ArrowLeftRight {...iconProps} />;
    case "wallet":
      return <Wallet {...iconProps} />;
    case "trading":
      return <Glasses {...iconProps} />;
    default:
      return <LogIn {...iconProps} />;
  }
}

export function MobileMainFeaturesSection() {
  const { mainFeatures } = mobileAppKycContent;

  return (
    <section className="w-full bg-[#F2F7FD] py-20 sm:py-28 border-b border-[#E1EEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0A2540] tracking-tight">
            {mainFeatures.title}
          </h2>
        </div>

        {/* 6 Feature Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {mainFeatures.cards.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl border border-[#DCE9F6] bg-white p-8 sm:p-10 shadow-xs hover:border-[#00B4E6] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Cyan Icon */}
                <div className="mb-6 flex items-center">
                  <MobileCardIcon icon={card.icon} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-4 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-[1.8] font-normal mb-8">
                  {card.description}
                </p>
              </div>

              {/* Bottom Circular Arrow Button */}
              <div>
                <button
                  type="button"
                  className="btn-circle-arrow"
                  aria-label={`View details about ${card.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
