import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { productsList } from "@/content/products";
import {
  BarChart3,
  Users,
  Network,
  Smartphone,
  Mic,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServicesWeOfferSection } from "@/components/sections/shared/ServicesWeOfferSection";
import { FlexibleCrmBanner } from "@/components/sections/shared/FlexibleCrmBanner";

export const metadata: Metadata = {
  title: "All Products & Brokerage Solutions | tech4broker",
  description:
    "Explore tech4broker's modular FinTech ecosystem: Forex CRM, Trader's Room, IB & Affiliate Management, Mobile App with online-KYC, and AI Voice Intelligence.",
};

function ProductIcon({ icon }: { icon: string }) {
  const iconClasses = "w-6 h-6 text-[#00B4E6] shrink-0";
  const strokeWidth = 1.85;

  switch (icon) {
    case "barChart":
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} />;
    case "users":
      return <Users className={iconClasses} strokeWidth={strokeWidth} />;
    case "network":
      return <Network className={iconClasses} strokeWidth={strokeWidth} />;
    case "smartphone":
      return <Smartphone className={iconClasses} strokeWidth={strokeWidth} />;
    case "mic":
      return <Mic className={iconClasses} strokeWidth={strokeWidth} />;
    default:
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} />;
  }
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Floating Navbar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      {/* Main Container */}
      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Stack Broker Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)] mb-6">
              Our Complete Suite of Brokerage Products
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              From centralized back-office administration to intelligent voice analytics, explore our modular technology stack engineered to help Forex brokers and Prop firms scale efficiently.
            </p>
          </div>

          {/* Product Grid: 3 columns, matching exact reference card design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {productsList.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl border border-slate-200/90 hover:border-[#0A6CFF] bg-[#F8FAFC]/80 hover:bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-[0_12px_28px_rgba(10,108,255,0.1)] hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Row: Cyan Outline Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <ProductIcon icon={product.icon} />
                    <h2 className="text-base sm:text-[17px] font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-[13px] sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[var(--color-border)]">
                    {product.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text)]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white hover:bg-[var(--color-primary)] border border-slate-200 hover:border-[var(--color-primary)] text-slate-800 hover:text-white text-xs font-semibold transition-all duration-200 group/btn"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Value Pillars */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-8 sm:p-12 mb-16 shadow-xs">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
                Why Brokerages Choose tech4broker
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Deploy each component independently or as an end-to-end synchronized ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[var(--color-text)] mb-2">
                  Modular & Turnkey
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  Plug into your existing trading servers (MT4/5, cTrader, DXtrade) or launch a turnkey setup with automated PSP routing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[var(--color-text)] mb-2">
                  Enterprise Compliance
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  Built-in AML/KYC automated checks, immutable audit logging, and multi-jurisdiction regulatory reporting out of the box.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[var(--color-text)] mb-2">
                  Global Scalability
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  High-throughput architecture built to handle millions of transactions, multi-tier IBs, and concurrent traders with zero latency.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="text-center py-10 mb-4">
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Ready to see the products in action?
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-6 max-w-md mx-auto">
              Schedule a personalized live demo with our technical architecture team.
            </p>
            <Button
              variant="gradient"
              size="lg"
              href={siteConfig.cta.bookDemoUrl}
              className="px-8"
            >
              Book a Personalized Demo
            </Button>
          </div>
        </div>

        {/* Services We Offer Section (Bottom) */}
        <ServicesWeOfferSection />

        {/* Flexible & Customisable CRM Banner (Bottom) */}
        <FlexibleCrmBanner />
      </main>
    </div>
  );
}
