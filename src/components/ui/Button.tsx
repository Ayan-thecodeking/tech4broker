import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "gradient" | "outline" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  gradient:
    "bg-[image:var(--gradient-primary)] text-[var(--color-text-inverse)] font-bold shadow-[0_4px_18px_rgba(10,108,255,0.32)] hover:opacity-95 hover:shadow-[0_6px_22px_rgba(10,108,255,0.45)] active:scale-[0.98]",
  outline:
    "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[rgba(10,108,255,0.06)] active:scale-[0.98]",
  dark:
    "bg-[rgba(0,0,0,0.35)] text-[var(--color-text-inverse)] font-medium hover:bg-[rgba(0,0,0,0.55)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[var(--ls-button)]",
  md: "px-6 py-2.5 text-sm tracking-[var(--ls-button)]",
  lg: "px-8 py-3.5 text-sm sm:text-base tracking-[var(--ls-button)]",
};

export function Button({
  variant = "gradient",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const combinedClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] transition-[background,box-shadow,transform,opacity] duration-[var(--transition-base)] select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
