import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { TradingPlatform } from "@/types/content";

export interface PlatformItemProps {
  platform: TradingPlatform;
  className?: string;
}

export function PlatformItem({ platform, className }: PlatformItemProps) {
  const content = (
    <div
      className={cn(
        "group flex flex-col items-center justify-between text-center select-none",
        className
      )}
    >
      {/* Logo Slot Area */}
      <div className="relative flex items-center justify-center h-[var(--platform-logo-height)] max-h-[var(--platform-logo-height)] shrink-0 transition-transform duration-[var(--transition-base)] group-hover:scale-105">
        {platform.logo && (
    <Image
      src={platform.logo}
      alt={platform.alt || platform.name}
      width={150}
      height={48}
      unoptimized
      className="platform-logo-img select-none"
      style={{
        height: "var(--platform-img-height, 48px)",
        maxHeight: "var(--platform-img-height, 48px)",
        width: "auto",
        maxWidth: "140px",
        objectFit: "contain",
      }}
    />
  )}
      </div>

      {/* Label Area (centered, single line, aligned across row) */}
      {/* <div className="mt-[var(--platform-label-gap)]">
        <span className="text-[length:var(--fs-platform-label)] font-[number:var(--fw-regular)] text-[var(--color-text)] tracking-tight text-center whitespace-nowrap">
          {platform.name}
        </span>
      </div> */}
    </div>
  );

  if (platform.href) {
    return (
      <Link
        href={platform.href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-md)] block"
        aria-label={platform.name}
      >
        {content}
      </Link>
    );
  }

  return content;
}
