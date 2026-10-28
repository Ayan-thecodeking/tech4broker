import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { forexCrmContent } from "@/content/forex-crm-features";
import { ForexHeroIllustration } from "@/components/sections/forex-crm/ForexHeroIllustration";
import { ForexFeatureCard } from "@/components/sections/forex-crm/ForexFeatureCard";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";

export const metadata: Metadata = {
  title: "Operations & Back Office | Forex CRM System | tech4broker",
  description:
    "Comprehensive Forex CRM and Back Office System built for brokerages and financial institutions. Intuitive Traders' Room, MT4/MT5 integrations, auto KYC & AML, and compliance reporting.",
};

export default function ForexCrmProductPage() {
  const { header, overview, featuresSectionTitle, features } =
    forexCrmContent;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
      {/* 1. Fixed Floating Navigation Bar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      <main className="flex-1 flex flex-col">
        {/* 2. Top Dark Hero Banner */}
        <ProductHeroBanner
          title={header.title}
          subtitle={header.subtitle}
        />

        {/* 3. Overview Section with Illustration & Copy (Screenshot 1) */}
        <section className="w-full bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Dual Chart Illustration */}
              <div className="flex justify-center">
                <ForexHeroIllustration />
              </div>

              {/* Right Column: Overview Copy */}
              <div className="max-w-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-5 tracking-tight">
                  {overview.kicker}
                </h2>
                <p className="text-[15px] sm:text-base text-[#4B5563] leading-[1.75] text-justify sm:text-left">
                  {overview.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Main Features Grid Section (Screenshots 2, 3, 4, 5) */}
        <section className="features-section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-14 sm:mb-20">
              <h2 className="features-section-title">
                {featuresSectionTitle}
              </h2>
            </div>

            {/* 18 Feature Cards in 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {features.map((feature) => (
                <ForexFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            {/* Bottom Request a Demo Button (Screenshot 5) */}
            <div className="flex justify-center pt-4">
              <Link
                href={siteConfig.cta.bookDemoUrl}
                className="btn-request-demo-red"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Services We Offer Section (Bottom) */}
        <ServicesWeOfferSection />

        {/* 6. Flexible & Customisable CRM Banner (Bottom) */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}
