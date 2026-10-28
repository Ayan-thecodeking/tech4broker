import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: "right" | "up-right" | "down" | "left";
  variant?: "brand" | "light" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
}

const variantStyles: Record<NonNullable<ArrowButtonProps["variant"]>, string> = {
  brand:
    "bg-brand text-white hover:bg-brand-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.45)] border border-white/10",
  light:
    "bg-white text-slate-900 hover:bg-white/95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent",
  glass:
    "glass-pill text-white hover:bg-white/15 hover:border-white/30",
  outline:
    "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
};

const sizeStyles: Record<NonNullable<ArrowButtonProps["size"]>, { button: string; icon: number }> = {
  sm: {
    button: "w-8 h-8",
    icon: 14,
  },
  md: {
    button: "w-10 h-10",
    icon: 18,
  },
  lg: {
    button: "w-12 h-12",
    icon: 22,
  },
};

const directionIcons = {
  right: ArrowRight,
  "up-right": ArrowUpRight,
  down: ArrowDown,
  left: ArrowLeft,
};

export const ArrowButton = React.forwardRef<HTMLButtonElement, ArrowButtonProps>(
  (
    {
      className,
      direction = "right",
      variant = "glass",
      size = "md",
      href,
      icon,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon || directionIcons[direction];
    const sizeConfig = sizeStyles[size];

    const content = (
      <IconComponent
        size={sizeConfig.icon}
        className={cn(
          "transition-transform duration-200",
          direction === "right" && "group-hover:translate-x-0.5",
          direction === "up-right" && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          direction === "down" && "group-hover:translate-y-0.5",
          direction === "left" && "group-hover:-translate-x-0.5"
        )}
      />
    );

    const baseClasses = cn(
      "group inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer select-none shrink-0",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
      "disabled:opacity-50 disabled:pointer-events-none active:scale-95",
      variantStyles[variant],
      sizeConfig.button,
      className
    );

    const computedAriaLabel = ariaLabel || `Navigate ${direction}`;

    if (href) {
      return (
        <Link href={href} className={baseClasses} aria-label={computedAriaLabel}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} aria-label={computedAriaLabel} {...props}>
        {content}
      </button>
    );
  }
);

ArrowButton.displayName = "ArrowButton";
