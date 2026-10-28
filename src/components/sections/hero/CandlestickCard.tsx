import React from "react";
import { cn } from "@/lib/cn";
import type { CandlestickCardContent } from "@/types/content";

export interface CandlestickCardProps {
  content: CandlestickCardContent;
  className?: string;
}

export function CandlestickCard({ content, className }: CandlestickCardProps) {
  const { startDate, endDate, candles } = content;

  // Chart SVG bounds
  const width = 230;
  const height = 90;
  const candleWidth = 7;
  const gap = (width - candles.length * candleWidth) / (candles.length + 1);

  return (
    <div
      className={cn(
        "w-[255px] h-[150px] bg-[var(--color-surface)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[var(--color-border)] p-3.5 flex flex-col justify-between select-none z-20",
        className
      )}
    >
      {/* Candlestick SVG chart */}
      <div className="w-full flex-1 relative flex items-center justify-center">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          aria-label="Financial candlestick chart"
          role="img"
        >
          {/* Faint horizontal grid lines */}
          <line
            x1="0"
            y1={height * 0.25}
            x2={width}
            y2={height * 0.25}
            stroke="var(--color-border)"
            strokeDasharray="3 3"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1={height * 0.55}
            x2={width}
            y2={height * 0.55}
            stroke="var(--color-border)"
            strokeDasharray="3 3"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1={height * 0.85}
            x2={width}
            y2={height * 0.85}
            stroke="var(--color-border)"
            strokeDasharray="3 3"
            strokeWidth="1"
          />

          {/* Candles */}
          {candles.map((candle, idx) => {
            const isGreen = candle.close >= candle.open;
            const color = isGreen ? "var(--color-success)" : "var(--color-danger)";

            const x = gap + idx * (candleWidth + gap);
            const cx = x + candleWidth / 2;

            // Map 0-100 range to svg height (invert Y because SVG 0 is top)
            const mapY = (val: number) => height - (val / 100) * height;

            const yHigh = mapY(candle.high);
            const yLow = mapY(candle.low);
            const yOpen = mapY(candle.open);
            const yClose = mapY(candle.close);

            const yTop = Math.min(yOpen, yClose);
            const candleBodyHeight = Math.max(Math.abs(yOpen - yClose), 4);

            return (
              <g key={idx}>
                {/* Wick line */}
                <line
                  x1={cx}
                  y1={yHigh}
                  x2={cx}
                  y2={yLow}
                  stroke={color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Body rect */}
                <rect
                  x={x}
                  y={yTop}
                  width={candleWidth}
                  height={candleBodyHeight}
                  rx="1.5"
                  fill={color}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Date labels at bottom corners */}
      <div className="flex items-center justify-between text-[11px] font-medium text-[var(--color-text-muted)] pt-1 px-1 border-t border-[var(--color-border)]">
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    </div>
  );
}
