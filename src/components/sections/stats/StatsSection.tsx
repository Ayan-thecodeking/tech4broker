import React from "react";
import { Container } from "@/components/ui/Container";
import { AwardBadge } from "./AwardBadge";
import { StatsGrid } from "./StatsGrid";
import { cn } from "@/lib/cn";
import type { AwardData, StatItemData } from "@/types/content";

export interface StatsSectionProps {
  award: AwardData;
  stats: StatItemData[];
  className?: string;
}

export function StatsSection({ award, stats, className }: StatsSectionProps) {
  return (
    <section
      id="stats"
      aria-labelledby="stats-section-heading"
      className={cn("section-stats", className)}
    >

      <Container className="relative z-10 pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-[var(--section-padding-bottom)]">
        {/* Visually hidden semantic heading for accessibility */}
        <h2 id="stats-section-heading" className="sr-only">
          Our track record in numbers
        </h2>

        {/* 1. Centered Award Row */}
        {award.enabled && (
          <div className="w-full flex justify-center mb-8 sm:mb-10 lg:mb-14">
            <AwardBadge award={award} />
          </div>
        )}

        {/* 2. Stats 4-Column Grid */}
        <div className="w-full">
          <StatsGrid stats={stats} />
        </div>
      </Container>
    </section>
  );
}
