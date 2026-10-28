import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { TradersHeroBanner } from "@/components/sections/traders-room/TradersHeroBanner";
import { TradersValuePropSection } from "@/components/sections/traders-room/TradersValuePropSection";
import { TradersLifecycleSection } from "@/components/sections/traders-room/TradersLifecycleSection";
import { TradersFirstTimeDepositsSection } from "@/components/sections/traders-room/TradersFirstTimeDepositsSection";
import { TradersComplianceSection } from "@/components/sections/traders-room/TradersComplianceSection";
import { TradersRetentionSection } from "@/components/sections/traders-room/TradersRetentionSection";
import { TradersEngagementSection } from "@/components/sections/traders-room/TradersEngagementSection";
import { TradersAiAndEcosystemSection } from "@/components/sections/traders-room/TradersAiAndEcosystemSection";
import { TradersSecurityAndGrowthSection } from "@/components/sections/traders-room/TradersSecurityAndGrowthSection";
import { TradersFaqSection } from "@/components/sections/traders-room/TradersFaqSection";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";
import { tradersRoomContent } from "@/content/traders-room";

export const metadata: Metadata = {
  title: "Client Area | Forex Trader's Room | tech4broker",
  description:
    "Next-generation Forex Trader's Room & Client Area. Accelerate first-time deposits, dynamic KYC & automated AML compliance, frictionless multi-currency wallet, and intelligent retention tools.",
};

export default function TradersRoomPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
      {/* 1. Fixed Floating Navigation Bar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero Dark Banner with Animated Floating Bubbles (Screenshot 1) */}
        <TradersHeroBanner />

        {/* Section 2: Brokerage Growth & Retention Infrastructure (Screenshot 2: Convert Faster, 2x2 Stats) */}
        <TradersValuePropSection />

        {/* Section 3: The Problem & Revenue Lifecycle (Screenshot 3: Pale Blue, 5 Step Pills) */}
        <TradersLifecycleSection />

        {/* Section 4: Accelerate First-Time Deposits (Screenshot 4: 5 Cards, Direct Answer Callout) */}
        <TradersFirstTimeDepositsSection />

        {/* Section 5: Compliance-Driven Onboarding (Screenshot 5: Dark Grid, 6 Capabilities, Dashboard Mockup, Dark Direct Answer) */}
        <TradersComplianceSection />

        {/* Section 6: Retention Intelligence & Auto Responder (Screenshot 6: Churn Risk, Bar Chart, 4 Cards, Triggers & Outcomes) */}
        <TradersRetentionSection />

        {/* Section 7: Engagement & Deposits (Screenshot 7: Strategic Shift, 4 Capability Cards with Checklists) */}
        <TradersEngagementSection />

        {/* Section 8: AI-Powered Infrastructure & Unified Ecosystem (Screenshot 8: Dark AI Grid + 8 Ecosystem Apps) */}
        <TradersAiAndEcosystemSection />

        {/* Section 9: Mobile-First vs Enterprise Security + Growth Operating System (Screenshot 9: Dual Cards + CTA) */}
        <TradersSecurityAndGrowthSection />

        {/* Section 10: Frequently Asked Questions (Screenshot 10: Interactive Accordion) */}
        <TradersFaqSection />

        {/* Section 11: Services We Offer Section */}
        <ServicesWeOfferSection />

        {/* Section 12: Flexible & Customisable CRM Banner */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}

