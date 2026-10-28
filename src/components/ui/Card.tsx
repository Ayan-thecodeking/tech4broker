import React from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "solid" | "glass";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  solid:
    "bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-card)]",
  glass:
    "bg-[var(--color-surface-glass)] backdrop-blur-md border border-[rgba(255,255,255,0.7)] shadow-[var(--shadow-card)]",
};

export function Card({
  variant = "solid",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] p-4 sm:p-5 transition-[transform,box-shadow] duration-[var(--transition-base)]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
