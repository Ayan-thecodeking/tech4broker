import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { StatsSection } from "@/components/sections/stats/StatsSection";
import { IntegratedSection } from "@/components/sections/integrated/IntegratedSection";
import { CompliantSection } from "@/components/sections/compliant/CompliantSection";
import { PaymentsSection } from "@/components/sections/payments/PaymentsSection";
import { SupportSection } from "@/components/sections/support/SupportSection";
import { CustomizedSection } from "@/components/sections/customized/CustomizedSection";
import { EcosystemSection } from "@/components/sections/ecosystem/EcosystemSection";
import { KeyFeaturesSection } from "@/components/sections/key-features/KeyFeaturesSection";
import { siteConfig } from "@/config/site";
import {
  heroContent,
  statsContent,
  integratedContent,
  compliantContent,
  paymentsContent,
  supportContent,
  customizedContent,
  ecosystemContent,
  keyFeaturesContent,
} from "@/content/home";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      {/* 1. Floating Navbar matching verified-tips (fixed over hero video) */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      {/* 2. Top Hero Section with Background Video covering 100% of the screen from top: 0 */}
      <Hero
        content={heroContent}
        foundedYear={siteConfig.foundedYear}
      />

      {/* 4. Stats Section */}
      <StatsSection
        award={statsContent.award}
        stats={statsContent.stats}
      />

      {/* 3. Main Content Sections */}
      <main className="flex-1 flex flex-col bg-[var(--color-bg)]">
        {/* Integrated Trading Platforms Section */}
        <IntegratedSection integrated={integratedContent} />

        {/* Compliant Section with 3D Globe & Jurisdictions */}
        <CompliantSection compliant={compliantContent} />

        {/* Payments Card Section */}
        <PaymentsSection payments={paymentsContent} />

        {/* Support Section with 3 Feature Columns & Icon Blobs */}
        <SupportSection support={supportContent} />

        {/* Customized Card Section with Tab Switcher & Dashboard Mockup */}
        <CustomizedSection customized={customizedContent} />

        {/* Ecosystem Section with Central Hub & Integrated Category Pills */}
        <EcosystemSection ecosystem={ecosystemContent} />

        {/* Key Features Section with 4-Tab Switcher & Layered Acquisition Mockup */}
        <KeyFeaturesSection keyFeatures={keyFeaturesContent} />
      </main>
    </div>
  );
}




