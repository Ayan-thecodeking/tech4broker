"use client";

import React from "react";
import {
  BarChart3,
  RefreshCw,
  TrendingUp,
  Contact,
  ClipboardCheck,
  Rocket,
  ShieldCheck,
  ScanFace,
  Server,
  Store,
  FileText,
  Share2,
  MessagesSquare,
  Bell,
  Megaphone,
  Code2,
  Banknote,
  Gift,
  ArrowRight,
} from "lucide-react";
import type { ForexFeatureItem } from "@/content/forex-crm-features";

interface ForexFeatureCardProps {
  feature: ForexFeatureItem;
}

function FeatureIcon({ icon }: { icon: ForexFeatureItem["icon"] }) {
  const iconProps = {
    className: "fx-feature-icon",
    strokeWidth: 1.65,
    "aria-hidden": true,
  };

  switch (icon) {
    case "barChart":
      return <BarChart3 {...iconProps} />;
    case "refresh":
      return <RefreshCw {...iconProps} />;
    case "trendingUp":
      return <TrendingUp {...iconProps} />;
    case "contact":
      return <Contact {...iconProps} />;
    case "clipboardCheck":
      return <ClipboardCheck {...iconProps} />;
    case "rocket":
      return <Rocket {...iconProps} />;
    case "shieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "scanFace":
      return <ScanFace {...iconProps} />;
    case "server":
      return <Server {...iconProps} />;
    case "store":
      return <Store {...iconProps} />;
    case "fileText":
      return <FileText {...iconProps} />;
    case "share":
      return <Share2 {...iconProps} />;
    case "messages":
      return <MessagesSquare {...iconProps} />;
    case "bell":
      return <Bell {...iconProps} />;
    case "megaphone":
      return <Megaphone {...iconProps} />;
    case "code":
      return <Code2 {...iconProps} />;
    case "banknote":
      return <Banknote {...iconProps} />;
    case "gift":
      return <Gift {...iconProps} />;
    default:
      return <BarChart3 {...iconProps} />;
  }
}

export function ForexFeatureCard({ feature }: ForexFeatureCardProps) {
  return (
    <div className="group fx-feature-card">
      <div>
        {/* Top Cyan Icon */}
        <div className="mb-5 flex items-center">
          <FeatureIcon icon={feature.icon} />
        </div>

        {/* Feature Title */}
        <h3 className="fx-feature-title">
          {feature.title}
        </h3>

        {/* Feature Body */}
        <p className="fx-feature-desc">
          {feature.description}
        </p>
      </div>

      {/* Bottom Circle Arrow Button */}
      <div className="mt-8 pt-2">
        <div className="btn-circle-arrow">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
