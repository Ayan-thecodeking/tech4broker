import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { IbOverviewSection } from "@/components/sections/ib-affiliate/IbOverviewSection";
import { IbMainFeaturesSection } from "@/components/sections/ib-affiliate/IbMainFeaturesSection";
import { Ib360FeaturesSection } from "@/components/sections/ib-affiliate/Ib360FeaturesSection";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";
import { ibAffiliateContent } from "@/content/ib-affiliate";

export const metadata: Metadata = {
  title: "Partner & IB Management | RebateCore | tech4broker",
  description:
    "Scale your brokerage's multi-tier referral networks with RebateCore. Real-time commission calculation, multi-campaign flexibility, and instant partner payouts.",
};

export default function IbAffiliateSystemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
      {/* 1. Fixed Floating Navigation Bar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      <main className="flex-1 flex flex-col">
        {/* Section 1: Top Hero Banner */}
        <ProductHeroBanner
          title={ibAffiliateContent.hero.title}
          subtitle="Multi-Tier Affiliate & Rebate System"
        />

        {/* Section 2: Hierarchy Tree Diagram & RebateCore Overview (Screenshot 1) */}
        <IbOverviewSection />

        {/* Section 3: Main Features (Screenshot 2: Multi-Tier, Multi-campaign, Multi-schemed + Demo CTA) */}
        <IbMainFeaturesSection />

        {/* Section 4: 360° View Accordion of RebateCore Features (Screenshot 3: 8 Rows) */}
        <Ib360FeaturesSection />

        {/* Section 5: Services We Offer Elevated Card (Screenshot 4) */}
        <ServicesWeOfferSection />

        {/* Section 6: Flexible & Customisable CRM Banner (Screenshot 4) */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}
