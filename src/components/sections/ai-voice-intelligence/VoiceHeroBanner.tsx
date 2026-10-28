"use client";

import React from "react";
import { ProductHeroBanner } from "@/components/sections/shared/ProductHeroBanner";
import { aiVoiceIntelligenceContent } from "@/content/ai-voice-intelligence";

export function VoiceHeroBanner() {
  return (
    <ProductHeroBanner
      title={aiVoiceIntelligenceContent.hero.title}
    />
  );
}
