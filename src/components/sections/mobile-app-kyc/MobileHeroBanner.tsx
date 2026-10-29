"use client";

import React from "react";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { mobileAppKycContent } from "@/content/mobile-app-kyc";

export function MobileHeroBanner() {
  return (
    <ProductHeroBanner
      title={mobileAppKycContent.hero.title}
    />
  );
}
