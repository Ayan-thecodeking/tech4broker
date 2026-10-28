import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { VoiceOverviewSection } from "@/components/sections/ai-voice-intelligence/VoiceOverviewSection";
import { VoiceIntelligenceLoopSection } from "@/components/sections/ai-voice-intelligence/VoiceIntelligenceLoopSection";
import { VoiceLeadScoringSection } from "@/components/sections/ai-voice-intelligence/VoiceLeadScoringSection";
import { VoiceConversionSection } from "@/components/sections/ai-voice-intelligence/VoiceConversionSection";
import { VoiceCallAnalysisSection } from "@/components/sections/ai-voice-intelligence/VoiceCallAnalysisSection";
import { VoiceCustomerEvolutionSection } from "@/components/sections/ai-voice-intelligence/VoiceCustomerEvolutionSection";
import { VoiceAggregatedSourcesSection } from "@/components/sections/ai-voice-intelligence/VoiceAggregatedSourcesSection";
import { VoiceLifecycleAndAdvantageSection } from "@/components/sections/ai-voice-intelligence/VoiceLifecycleAndAdvantageSection";
import { VoiceFinalThoughtAndFaqSection } from "@/components/sections/ai-voice-intelligence/VoiceFinalThoughtAndFaqSection";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export const metadata: Metadata = {
  title: "Voice Analytics | AI Voice Intelligence Engine | tech4broker",
  description:
    "AudioSense uses AI to analyze customer calls, detect sentiment, evaluate performance, and flag compliance risks, helping businesses enhance service and productivity.",
};

export default function AiVoiceIntelligencePage() {
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
          title={aiVoiceIntelligenceContent.hero.title}
          subtitle="AI Voice Intelligence Engine"
        />

        {/* Section 2: The Intelligence Layer & Live Demo Form (Screenshot 1) */}
        <VoiceOverviewSection />

        {/* Section 3: The Intelligence Loop (Screenshot 2: Understand, Learn, Interpret, Act) */}
        <VoiceIntelligenceLoopSection />

        {/* Section 4: 01 - Lead Intelligence (Screenshot 3: Lead Score Engine, Composite Score 805) */}
        <VoiceLeadScoringSection />

        {/* Section 5: 02 - Conversion Acceleration (Screenshot 4: 3 Routing & Priority Cards) */}
        <VoiceConversionSection />

        {/* Section 6: 03 - AI Voice Intelligence & Built For Call Centers (Screenshot 5: Waveform Analysis + 5 Team Cards) */}
        <VoiceCallAnalysisSection />

        {/* Section 7: 04 · Customer Intelligence (Screenshot 6: Adaptive Evolution Curve + 5 Signals + Outcomes) */}
        <VoiceCustomerEvolutionSection />

        {/* Section 8: 05 · Aggregated Intelligence (Screenshot 7: 6 Data Source Cards) */}
        <VoiceAggregatedSourcesSection />

        {/* Section 9: 07 · Lifecycle Embedded & 09 · Why It Matters (Screenshot 8: 5 Stages + 6 Advantage Cards) */}
        <VoiceLifecycleAndAdvantageSection />

        {/* Section 10: Final Thought & Frequently Asked FAQ (Screenshot 9 & 10: CRM Evolves + Accordion) */}
        <VoiceFinalThoughtAndFaqSection />

        {/* Section 11: Services We Offer Section */}
        <ServicesWeOfferSection />

        {/* Section 12: Flexible & Customisable CRM Banner */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}
