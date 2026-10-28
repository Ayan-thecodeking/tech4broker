import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
}

export function Logo({ className, href = "/", priority = true }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center group select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-sm)]",
        className
      )}
      aria-label="tech4broker homepage"
    >
      {/* Primary Logo: logo-dark.png (Navy/Dark brand logo on light navbar/surfaces) */}
      <Image
        src="/logo-dark.png"
        alt="tech4broker"
        width={125}
        height={44}
        priority={priority}
        className="brand-logo-dark h-8 sm:h-9 md:h-10 w-auto object-contain select-none transition-transform duration-[var(--transition-base)] group-hover:scale-105"
      />

      {/* Light variant logo: logo-light.png for dark theme backgrounds */}
      <Image
        src="/logo-light.png"
        alt="tech4broker"
        width={160}
        height={39}
        priority={priority}
        className="brand-logo-light h-8 sm:h-9 md:h-10 w-auto object-contain select-none transition-transform duration-[var(--transition-base)] group-hover:scale-105"
      />
    </Link>
  );
}
