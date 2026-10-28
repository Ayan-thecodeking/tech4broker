import React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "glass" | "brand" | "accent" | "outline" | "muted";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

const variantStyles: Record<NonNullable<PillProps["variant"]>, string> = {
  glass:
    "glass-pill text-white/85 hover:border-white/25 hover:text-white",
  brand:
    "bg-brand/25 text-blue-200 border border-brand/50 shadow-[0_0_12px_rgba(37,99,235,0.3)]",
  accent:
    "bg-accent/15 text-accent border border-accent/35 shadow-[0_0_12px_rgba(0,210,255,0.25)]",
  outline:
    "bg-transparent text-white/70 border border-white/20 hover:text-white hover:border-white/35",
  muted:
    "bg-white/[0.04] text-text-muted border border-white/10",
};

const sizeStyles: Record<NonNullable<PillProps["size"]>, string> = {
  sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
  md: "text-xs px-3.5 py-1 tracking-normal",
};

export function Pill({
  className,
  variant = "glass",
  size = "md",
  icon,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0 opacity-80">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
