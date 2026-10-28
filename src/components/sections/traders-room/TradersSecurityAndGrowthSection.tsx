import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Shield,
  Lock,
  Activity,
  UserCheck,
  Server,
  Globe,
  Check,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { tradersRoomContent } from "@/content/traders-room";

function SecurityBadgeIcon({ icon }: { icon: string }) {
  const iconProps = { className: "w-4 h-4 text-[#00B4E6] shrink-0" };

  switch (icon) {
    case "shield":
      return <Shield {...iconProps} />;
    case "lock":
      return <Lock {...iconProps} />;
    case "pulse":
      return <Activity {...iconProps} />;
    case "userShield":
      return <UserCheck {...iconProps} />;
    case "server":
      return <Server {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    default:
      return <Shield {...iconProps} />;
  }
}

export function TradersSecurityAndGrowthSection() {
  const { deviceAndSecurity, growthOperatingSystem } = tradersRoomContent;
  const { mobileFirst, enterpriseSecurity } = deviceAndSecurity;

  return (
    <section className="w-full bg-[#F2F7FD] py-20 sm:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Two Side-by-Side Cards (Mobile-First vs Enterprise Security) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 sm:mb-28">
          {/* Left Card: Mobile-First (White) */}
          <div className="rounded-3xl border border-[#DCE9F6] bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>{mobileFirst.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-snug mb-8">
                {mobileFirst.title}
              </h3>

              {/* Checklist 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  {mobileFirst.checklistLeft.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#19C3B2] stroke-[2.5]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {mobileFirst.checklistRight.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#19C3B2] stroke-[2.5]" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Built for Operational Confidence (Dark Navy) */}
          <div className="rounded-3xl border border-slate-800 bg-[#031730] bg-tech-grid p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>{enterpriseSecurity.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-8">
                {enterpriseSecurity.title}
              </h3>

              {/* Security Badges 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-800">
                {enterpriseSecurity.badges.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#091D34] border border-slate-700/60"
                  >
                    <SecurityBadgeIcon icon={b.icon} />
                    <span className="text-xs font-semibold text-slate-200">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: The Revenue Operating System for Brokerages (Growth CTA Banner) */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B4E6] mb-3">
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
            <span>{growthOperatingSystem.kicker}</span>
            <span className="w-4 h-[2px] bg-[#00B4E6]" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18] mb-6">
            {growthOperatingSystem.headingNormal}
            <span className="text-[#E02424]">
              {growthOperatingSystem.headingHighlight}
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            {growthOperatingSystem.description}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={siteConfig.cta.bookDemoUrl}
              className="btn-request-demo-red inline-flex items-center gap-2 group"
            >
              <span>{growthOperatingSystem.ctaButton}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={siteConfig.cta.bookDemoUrl}
              className="inline-flex items-center justify-center px-6 h-[52px] rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-sm font-bold text-[#0A2540] transition-colors shadow-xs"
            >
              {growthOperatingSystem.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
