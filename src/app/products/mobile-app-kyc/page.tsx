import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { MobileOverviewSection } from "@/components/sections/mobile-app-kyc/MobileOverviewSection";
import { MobileMainFeaturesSection } from "@/components/sections/mobile-app-kyc/MobileMainFeaturesSection";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";
import { mobileAppKycContent } from "@/content/mobile-app-kyc";

export const metadata: Metadata = {
  title: "Mobile App with online-KYC | tech4broker",
  description:
    "White-label mobile app with native online-KYC, OCR, NFC ID verification, multi-platform centralized wallet, and mobile trading.",
};

export default function MobileAppKycPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
      {/* 1. Fixed Floating Navigation Bar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero Dark Banner */}
        <ProductHeroBanner
          title={mobileAppKycContent.hero.title}
        />

        {/* Section 2: Mobile Phone Mockup & Overview (Screenshot 1) */}
        <MobileOverviewSection />

        {/* Section 3: Main Features (Screenshot 2: 6 Cards in 3x2 Grid + Circular Arrows + Demo Button) */}
        <MobileMainFeaturesSection />

        {/* Section 4: Services We Offer (Screenshot 3) */}
        <ServicesWeOfferSection />

        {/* Section 5: Flexible & Customisable CRM Banner (Screenshot 3) */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}
