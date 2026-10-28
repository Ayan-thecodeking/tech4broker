import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type RollingButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "outline-white"
  | "blue";

export interface RollingButtonProps {
  href?: string;
  variant?: RollingButtonVariant;
  text: string;
  className?: string;
  onClick?: () => void;
}

export function RollingButton({
  href,
  variant = "blue",
  text,
  className,
  onClick,
}: RollingButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center rounded-full text-[14px] font-semibold transition-all duration-300 overflow-hidden cursor-pointer select-none";

  const variantClasses =
    variant === "primary"
      ? "bg-[#EF5A48] text-white shadow-[0_4px_14px_rgba(239,90,72,0.25)] hover:bg-opacity-90 px-6 h-[40px]"
      : variant === "secondary"
      ? "bg-transparent border-2 border-[#1E2229] text-[#1E2229] hover:bg-[#1E2229] hover:text-white px-7 h-[40px]"
      : variant === "white"
      ? "bg-white text-[#1E2229] hover:bg-gray-50 px-7 h-[40px]"
      : variant === "outline-white"
      ? "border-2 bg-white/60 backdrop-blur-md hover:bg-white/90 border-white text-[#1E2229] h-[40px] px-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
      : "border-2 bg-[#1e66ec] border-[#1e66ec] text-white h-[40px] px-6 shadow-[0_4px_14px_rgba(30,102,236,0.25)] hover:bg-[#1855c7] hover:border-[#1855c7]";

  const content = (
    <span className="relative block overflow-hidden leading-tight">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
        {text}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseClasses, variantClasses, className)}
    >
      {content}
    </button>
  );
}
