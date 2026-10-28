"use client";

import React from "react";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { ibAffiliateContent } from "@/content/ib-affiliate";

export function IbHeroBanner() {
  return (
    <ProductHeroBanner
      title={ibAffiliateContent.hero.title}
    />
  );
}
