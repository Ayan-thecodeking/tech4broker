import React from "react";
import { EcosystemHub } from "./EcosystemHub";
import { CategoryPill } from "./CategoryPill";
import { ConnectorLines } from "./ConnectorLines";
import { cn } from "@/lib/cn";
import type { EcosystemCategory } from "@/types/content";

export interface EcosystemDiagramProps {
  categories: EcosystemCategory[];
  hubLabel: string;
  className?: string;
}

const positionCoordinates: Record<string, { left: string; top?: string; bottom?: string; transform: string }> = {
  top: { left: "50%", top: "4%", transform: "translate(-50%, 0)" },
  "left-top": { left: "14%", top: "20%", transform: "translate(-50%, -50%)" },
  "left-middle": { left: "13%", top: "50%", transform: "translate(-50%, -50%)" },
  "left-bottom": { left: "14%", top: "80%", transform: "translate(-50%, -50%)" },
  "right-top": { left: "86%", top: "20%", transform: "translate(-50%, -50%)" },
  "right-middle": { left: "87%", top: "50%", transform: "translate(-50%, -50%)" },
  "right-bottom": { left: "86%", top: "80%", transform: "translate(-50%, -50%)" },
  bottom: { left: "50%", bottom: "0%", transform: "translate(-50%, 0)" },
};

export function EcosystemDiagram({
  categories,
  hubLabel,
  className,
}: EcosystemDiagramProps) {
  return (
    <div className={cn("w-full flex items-center justify-center overflow-visible", className)}>
      {/* Proportional Stage Scaling Container */}
      <div className="relative w-full max-w-[var(--diagram-width)] h-[440px] sm:h-[480px] md:h-[520px] lg:h-[var(--diagram-height)] flex items-center justify-center">
        {/* The 900x550 Master Stage */}
        <div className="relative w-[900px] h-[550px] shrink-0 origin-center scale-[0.80] sm:scale-[0.88] md:scale-[0.95] lg:scale-100 transition-transform duration-300">
          {/* 1. Underlying SVG Connector Lines */}
          <ConnectorLines />

          {/* 2. Central Hub, Rings and Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <EcosystemHub label={hubLabel} />
          </div>

          {/* 3. Category Pills (8 categories positioned around the stage) */}
          <ul role="list" className="m-0 p-0 list-none">
            {categories.map((cat) => {
              const posStyle = positionCoordinates[cat.position] || {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              };

              return (
                <li
                  key={cat.id}
                  className="absolute z-20"
                  style={{
                    left: posStyle.left,
                    top: posStyle.top,
                    bottom: posStyle.bottom,
                    transform: posStyle.transform,
                  }}
                  aria-label={`${cat.label} integrations`}
                >
                  <CategoryPill category={cat} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
