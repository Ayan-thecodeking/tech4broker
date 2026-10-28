import React from "react";
import { CandlestickCard } from "./CandlestickCard";
import { BalanceCard } from "./BalanceCard";
import { ChatCard } from "./ChatCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type {
  CandlestickCardContent,
  BalanceCardContent,
  ChatCardContent,
  HeroPlaceholdersContent,
} from "@/types/content";

export interface HeroVisualsProps {
  candlestick: CandlestickCardContent;
  balance: BalanceCardContent;
  chat: ChatCardContent;
  placeholders: HeroPlaceholdersContent;
  className?: string;
}

export function HeroVisuals({
  candlestick,
  balance,
  chat,
  placeholders,
  className,
}: HeroVisualsProps) {
  return (
    <div
      className={cn(
        "relative w-full mx-auto select-none overflow-visible [container-type:inline-size]",
        "h-[390px] min-[380px]:h-[420px] min-[440px]:h-[480px] sm:h-[540px] lg:h-[600px] max-w-[800px]",
        className
      )}
    >
      {/* Scaled composition container on mobile to keep pixel-perfect proportions without overflow */}
      <div className="relative w-full h-[540px] sm:h-[580px] lg:h-[600px] origin-top transform-gpu scale-[0.68] min-[380px]:scale-[0.76] min-[440px]:scale-[0.86] sm:scale-100 lg:scale-100">
        {/* 1. CANDLESTICK CARD (top-center-left, overlaps center blue pill) */}
        <div className="absolute top-[3%] left-[8%] sm:left-[12%] lg:left-[14%] z-20 animate-float-gentle">
          <CandlestickCard content={candlestick} />
        </div>

        {/* 2. PILL A: Teal pill (left, behind balance card) */}
        <div className="absolute top-[40%] left-[8%] sm:left-[10%] lg:left-[12%] z-[5]">
          <ImagePlaceholder
            shape="pill"
            width={155}
            height={170}
            colorToken="teal"
            src={placeholders.tealPill.src}
            alt={placeholders.tealPill.alt}
            className="shadow-[0_12px_28px_rgba(25,195,178,0.22)]"
          />
        </div>

        {/* 3. PILL B: Primary Blue pill (tallest, center, behind candlestick bottom-right) */}
        <div className="absolute top-[22%] left-[44%] sm:left-[45%] z-[6]">
          <ImagePlaceholder
            shape="pill"
            width={155}
            height={320}
            colorToken="primary"
            src={placeholders.bluePill.src}
            alt={placeholders.bluePill.alt}
            className="shadow-[0_16px_36px_rgba(10,108,255,0.25)]"
          />
        </div>

        {/* 4. PILL C: Purple pill (top right, behind chat card) */}
        <div className="absolute top-[12%] left-[68%] sm:left-[70%] z-[5]">
          <ImagePlaceholder
            shape="pill"
            width={155}
            height={165}
            colorToken="purple"
            src={placeholders.purplePill.src}
            alt={placeholders.purplePill.alt}
            className="shadow-[0_12px_28px_rgba(196,92,240,0.22)]"
          />
        </div>

        {/* 5. BALANCE CARD (bottom-left, overlapping teal pill) */}
        <div className="absolute bottom-[6%] left-[2%] sm:left-[4%] lg:left-[5%] z-20 animate-float-gentle-delayed">
          <BalanceCard content={balance} />
        </div>

        {/* 6. CHAT CARD (right side, overlapping bottom of purple pill) */}
        <div className="absolute top-[40%] left-[52%] sm:left-[56%] lg:left-[58%] z-25 animate-float-gentle-reverse">
          <ChatCard content={chat} />
        </div>
      </div>
    </div>
  );
}
