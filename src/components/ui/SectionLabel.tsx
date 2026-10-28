import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  withParentheses?: boolean;
  accentDot?: boolean;
  children: React.ReactNode;
}

export function SectionLabel({
  className,
  withParentheses = true,
  accentDot = false,
  children,
  ...props
}: SectionLabelProps) {
  const renderContent = () => {
    if (typeof children === "string" && withParentheses) {
      const trimmed = children.trim();
      if (!trimmed.startsWith("(") && !trimmed.endsWith(")")) {
        return `( ${trimmed} )`;
      }
    }
    return children;
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-text-muted select-none",
        className
      )}
      {...props}
    >
      {accentDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,210,255,0.7)] shrink-0"
          aria-hidden="true"
        />
      )}
      <span className="text-white/70">{renderContent()}</span>
    </div>
  );
}
